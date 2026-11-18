import type { TechTrekData } from "@/types";
import { siteConfig } from "@/data/site";

// Replace all PLACEHOLDER values before going live.
export const techTrek: TechTrekData = {
  startDate: "2026-11-28T09:00:00+05:00", 
  endDate: "2026-11-29T17:00:00+05:00", 
  venue: "NUST Campus, H-12, Islamabad", 
  registrationUrl: "/events/techtrek26", 
  registrationDeadline: "2026-11-27", 
  contact: {
    email: siteConfig.contact[0].email,
    phone: "+92 335 6465165", 
  },
  title: "TechTrek 2026",
  tagline: "Build real robots. Two days. No experience needed.",
  intro:
    "A two-day, hands-on robotics workshop where students build real robots across four practical modules, with NUST lab visits, a movie session, and a closing showcase and contest.",
  scheduleNote: "Tentative. Exact timings will be finalised with the venue and instructors.",
  dateAnnouncement: "Dates announced soon",
  sectionCopy: {
    modules: {
      eyebrow: "Hands-on learning",
      title: "Four practical modules",
      description: "All participants take part in every module, working in small teams to build and test their own hardware. No prior experience is needed.",
    },
    schedule: {
      eyebrow: "Two-day programme",
      title: "The workshop schedule",
      description: "Robotics, AI, NUST lab visits, a movie session, and a closing showcase and contest.",
    },
    fee: {
      eyebrow: "Eligibility & fee",
      title: "Who can join",
      description: "Grades 8–12, O Level, and A Level students. One category and the same programme for everyone.",
    },
    contact: {
      eyebrow: "Join us",
      title: "Ready to build?",
      description: "Register for TechTrek 2026, hosted by NRC at NUST.",
    },
  },
  modules: [
    {
      number: 1,
      title: "Line Following Robots",
      day: "Day 1",
      duration: "3 hours",
      description:
        "Assemble a two-wheeled Arduino robot with IR sensors, then tune it to follow a track.",
      outcomes: [
        "Explain how an IR sensor distinguishes black from white and sends signals to motors.",
        "Assemble and safely wire a basic robot chassis.",
        "Modify code values such as thresholds and motor speeds.",
        "Test the robot, diagnose a failure, and improve its performance.",
      ],
    },
    {
      number: 2,
      title: "Bluetooth RC Cars",
      day: "Day 2",
      duration: "3 hours",
      description:
        "Build a car controlled from a phone over Bluetooth, with directional and speed control.",
      outcomes: [
        "Pair a Bluetooth module with a microcontroller and exchange commands.",
        "Drive motors through a motor driver to control direction and speed.",
        "Understand wireless control used in drones, toys, and industrial machines.",
      ],
    },
    {
      number: 3,
      title: "AI Vision: Action Detection with a Webcam",
      day: "Day 1",
      duration: "AI track · first half",
      description:
        "Run a pre-trained YOLO model on webcam video to detect a person and recognize movements in real time.",
      outcomes: [
        "Explain how a computer detects objects and poses in an image.",
        "Run and adapt a pre-trained model on live camera input.",
        "Turn movements into numerical data another system can use.",
      ],
      track: "AI TRACK",
    },
    {
      number: 4,
      title: "AI Robotic Arm",
      day: "Day 2",
      duration: "AI track · second half",
      description:
        "Build a servo arm from wooden sticks and Arduino, then connect it to the vision system so it copies your arm movements.",
      outcomes: [
        "Build a simple multi-joint arm and control servos from Arduino.",
        "Link computer vision to physical hardware.",
        "Understand how sensing, software, and mechanics work together.",
      ],
      track: "AI TRACK",
    },
  ],
  schedule: [
    {
      day: "Day 1",
      items: [
        { time: "09:00", activity: "Registration & welcome" }, // PLACEHOLDER: confirm programme time
        { time: "10:30", activity: "Module 1 · Line Following Robots (3 hours)" }, // PLACEHOLDER: confirm programme time
        { time: "14:00", activity: "Module 3 · AI Vision: Action Detection" }, // PLACEHOLDER: confirm programme time
        { time: "16:30", activity: "Lab visits" }, // PLACEHOLDER: confirm programme time
      ],
    },
    {
      day: "Day 2",
      items: [
        { time: "09:00", activity: "Module 2 · Bluetooth RC Cars (3 hours)" }, // PLACEHOLDER: confirm programme time
        { time: "13:00", activity: "Module 4 · AI Robotic Arm" }, // PLACEHOLDER: confirm programme time
        { time: "16:00", activity: "Showcase, contest, awards & certificates" }, // PLACEHOLDER: confirm programme time
        { time: "Evening", activity: "Movie session" }, // PLACEHOLDER: confirm programme time
      ],
    },
  ],
  eligibility: ["Grades 8–12", "O Level students", "A Level students", "Single category · same programme for all"],
  fee: 7000,
  included: [
    "Four workshop modules",
    "Hardware kits used in the modules",
    "NUST lab visits",
    "Movie session",
    "Contest entry",
    "Certificate of participation",
  ],
  benefits: [
    { title: "Practical skills", description: "Arduino, sensors, motors, wireless control, and computer vision." },
    { title: "Problem-solving", description: "Build, test, troubleshoot, and improve as a team." },
    { title: "Peer network", description: "Meet students from other schools and colleges." },
    { title: "Expert access", description: "Ask doctors, engineers, and professionals about careers, university, and research." },
    { title: "Path clarity", description: "Explore what to study through hands-on work." },
    { title: "Recognition", description: "Take part in the showcase and contest and receive a certificate." },
  ],
  experiences: [
    { title: "NUST lab visits", description: "See the campus labs and facilities." },
    { title: "Movie session", description: "Spend an evening together after building." },
    { title: "Showcase & contest", description: "Present your work at the closing ceremony." },
  ],
};
