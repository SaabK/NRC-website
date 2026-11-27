export const runtime = "nodejs";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

function isUploadedFile(
  value: FormDataEntryValue | null
): value is File {
  return (
    value !== null &&
    typeof value !== "string" &&
    value.size > 0
  );
}

async function convertFile(file: File) {
  const buffer = Buffer.from(await file.arrayBuffer());

  return {
    data: buffer.toString("base64"),
    type: file.type,
  };
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const participantName = formData.get("participantName");
    const phone = formData.get("phone");
    const school = formData.get("school");
    const grade = formData.get("grade");
    const age = formData.get("age");
    const email = formData.get("email");
    const applicantCnic = formData.get("applicantCnic");
    const guardianCnic = formData.get("guardianCnic");
    const needsAccommodation = formData.get("needsAccommodation") === "yes";

    const paymentReceipt = formData.get("paymentReceipt");
    const cnicImage = formData.get("cnicImage");

    // Validate required text fields
    if (
      typeof participantName !== "string" ||
      typeof phone !== "string" ||
      typeof school !== "string" ||
      typeof grade !== "string" ||
      typeof age !== "string" ||
      typeof email !== "string" ||
      typeof applicantCnic !== "string" ||
      typeof guardianCnic !== "string" ||
      !participantName.trim() ||
      !phone.trim() ||
      !school.trim() ||
      !grade.trim() ||
      !age.trim() ||
      !email.trim() ||
      !applicantCnic.trim() ||
      !guardianCnic.trim()
    ) {
      return Response.json(
        { success: false, message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    // Validate age
    const numericAge = Number(age);

    if (
      !Number.isInteger(numericAge) ||
      numericAge < 1 ||
      numericAge > 100
    ) {
      return Response.json(
        { success: false, message: "Please enter a valid age." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return Response.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Validate files
    if (
      !isUploadedFile(paymentReceipt) ||
      !isUploadedFile(cnicImage)
    ) {
      return Response.json(
        { success: false, message: "Both images are required." },
        { status: 400 }
      );
    }

    for (const file of [paymentReceipt, cnicImage]) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        return Response.json(
          { success: false, message: "Only JPG, PNG and WebP images are allowed." },
          { status: 400 }
        );
      }

      if (file.size > MAX_FILE_SIZE) {
        return Response.json(
          { success: false, message: "Each image must be smaller than 5 MB." },
          { status: 400 }
        );
      }
    }

    // Check environment variables
    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    const secret = process.env.GOOGLE_APPS_SCRIPT_SECRET;

    if (!scriptUrl || !secret) {
      throw new Error("Google Apps Script configuration is missing.");
    }

    // Forward data and images to Google Apps Script
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret,

        participantName: participantName.trim(),
        phone: phone.trim(),
        school: school.trim(),
        grade: grade.trim(),
        age: numericAge,
        email: email.trim(),
        applicantCnic: applicantCnic.trim(),
        guardianCnic: guardianCnic.trim(),
        needsAccommodation,

        paymentReceipt: await convertFile(paymentReceipt),
        cnicImage: await convertFile(cnicImage),
      }),
      redirect: "follow",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Google Apps Script request failed.");
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error("Google Sheets/Drive could not save the registration.");
    }

    return Response.json({
      success: true,
      message: "Registration received successfully! You'll shortly recieve an email confirming your registration.",
    });

  } catch (error) {
    console.error("TechTrek26 submission error:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to process your registration. Please try again.",
      },
      { status: 500 }
    );
  }
}