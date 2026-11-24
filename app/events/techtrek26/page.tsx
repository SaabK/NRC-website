
"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";

// Shared styling conventions from the existing NRC forms
const inputClass =
  "w-full min-h-[52px] bg-[#060810] border border-[rgba(232,79,14,0.2)] px-4 py-3 md:px-5 md:py-4 text-base text-white placeholder:text-gray-500 focus:outline-none focus:border-[#E84F0E] focus:ring-1 focus:ring-[#E84F0E] transition-all duration-300 rounded-none";

const labelClass =
  "block font-mono text-[10px] tracking-[0.2em] text-[#6B7285] uppercase mb-3";


const paymentAccounts = [
  {
    bank: "HBL (Habib Bank Limited)",
    branch: "H-12 Sector, NUST, Islamabad",
    accountName: "SMME Recurring FUND",
    accountNumber: "22927000519501",
  }
];
// NOTE: Metadata exports are not permitted from Client Components.
// We will move metadata to a separate server page if needed.

export default function TechTrek26Page() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState("");

  async function copyText(value: string, label: string) {
  try {
      await navigator.clipboard.writeText(value);
      setCopied(label);

      setTimeout(() => {
        setCopied("");
      }, 2000);
    } catch {
      alert("Unable to copy. Please copy manually.");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/techtrek26", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Submission failed.");
      }

      setStatus("success");
      setMessage(result.message);
      form.reset();

    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <div className="min-h-screen bg-[#060810] pt-28 pb-24 flex justify-center">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-12">
          <ol className="flex items-center gap-3" role="list">
            <li>
              <Link
                href="/events"
                className="font-mono text-[10px] tracking-[0.2em] text-[#6B7285] hover:text-white transition-colors uppercase"
              >
                Events
              </Link>
            </li>
            <li className="text-[#3D4358]" aria-hidden="true">›</li>
            <li>
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#E84F0E] uppercase">
                TechTrek26
              </span>
            </li>
          </ol>
        </nav>

        {/* Page Heading */}
        <div className="mb-16">
          <h1
            className="font-display font-black text-white leading-[0.9] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            TECHTREK<span className="text-[#E84F0E]">26</span>
          </h1>

          <p className="text-[#9AA0B2] text-base leading-relaxed max-w-[52ch]">
            Register for TechTrek26. Fill in your details below to secure your participation.
          </p>
        </div>

        {/* Registration Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
        >

          {/* Participant Details */}
          <div className="font-mono text-[10px] tracking-[0.3em] text-[#6B7285] uppercase mb-2 pb-4 border-b border-[rgba(232,79,14,0.1)]">
            01 — Participant Details
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label htmlFor="participantName" className={labelClass}>
                Participant Name *
              </label>
              <input
                id="participantName"
                name="participantName"
                type="text"
                required
                className={inputClass}
                placeholder="Your full name"
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                WhatsApp Contact Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className={inputClass}
                placeholder="03XX XXXXXXX"
                autoComplete="tel"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label htmlFor="school" className={labelClass}>
                School Name *
              </label>
              <input
                id="school"
                name="school"
                type="text"
                required
                className={inputClass}
                placeholder="Your school name"
              />
            </div>

            <div>
              <label htmlFor="grade" className={labelClass}>
                Grade / Class *
              </label>
              <input
                id="grade"
                name="grade"
                type="text"
                required
                className={inputClass}
                placeholder="e.g. Class 10"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <label htmlFor="age" className={labelClass}>
                Age *
              </label>
              <input
                id="age"
                name="age"
                type="number"
                min="1"
                max="100"
                required
                className={inputClass}
                placeholder="Your age"
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={inputClass}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <div>
              <label htmlFor="applicantCnic" className={labelClass}>
                Applicant&apos;s CNIC / B-Form Number *
              </label>
              <input
                id="applicantCnic"
                name="applicantCnic"
                type="text"
                required
                className={inputClass}
                placeholder="XXXXX-XXXXXXX-X"
              />
            </div>

            <div>
              <label
                htmlFor="needsAccommodation"
                className="flex items-center gap-3 cursor-pointer select-none min-h-[52px] bg-[#060810] border border-[rgba(232,79,14,0.2)] px-4 py-3 md:px-5 md:py-4 hover:border-[#E84F0E] transition-all duration-300"
              >
                <input
                  id="needsAccommodation"
                  name="needsAccommodation"
                  type="checkbox"
                  value="yes"
                  className="h-4 w-4 accent-[#E84F0E] bg-[#060810] border-[rgba(232,79,14,0.4)] rounded-none cursor-pointer"
                />
                <span className="text-sm text-white">
                  I need accommodation at NUST for the 2-day workshop event (Extra charges: 1200 pkr)
                </span>
              </label>
            </div>

          </div>

          

          {/* Payment & Guardian Details */}
              <div className="grid md:grid-cols-2 gap-6">
              {paymentAccounts.map((account, index) => (
                <div
                  key={account.accountNumber}
                  className="border border-[rgba(232,79,14,0.2)] p-6 bg-[rgba(232,79,14,0.03)]"
                >
                  <p className="font-mono text-[10px] tracking-[0.2em] text-[#E84F0E] uppercase mb-4">
                    Payment Account
                  </p>

                  <p className="text-white font-semibold">
                    {account.bank}
                  </p>
                  <p className="text-white text-sm break-all mb-4">
                        {account.branch}
                      </p>

                  <div className="mb-4">
                    <p className="text-xs text-[#6B7285] mb-2">
                      Account Holder
                    </p>

                    <div className="flex items-center justify-between gap-3">
                      <p className="text-white text-sm break-all">
                        {account.accountName}
                      </p>

                      
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-[#6B7285] mb-2">
                      Account Number / IBAN
                    </p>

                    <div className="flex items-center justify-between gap-3">
                      <p className="text-white text-sm break-all font-mono">
                        {account.accountNumber}
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          copyText(account.accountNumber, `number-${index}`)
                        }
                        className="text-[#E84F0E] text-xs shrink-0 hover:text-white"
                      >
                        {copied === `number-${index}` ? "COPIED!" : "COPY"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          <div className="font-mono text-[10px] tracking-[0.3em] text-[#6B7285] uppercase mt-8 mb-2 pb-4 border-b border-[rgba(232,79,14,0.1)]">
            02 — Payment & Guardian Details
          </div>

          <div>
            <label htmlFor="paymentReceipt" className={labelClass}>
              Payment Receipt Image *
            </label>
            <input
              id="paymentReceipt"
              name="paymentReceipt"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              required
              className={`${inputClass} file:mr-4 file:border-0 file:bg-[#E84F0E] file:px-4 file:py-2 file:text-white file:font-display file:text-xs file:tracking-wider file:cursor-pointer`}
            />
            <p className="text-xs text-[#6B7285] mt-2">
              Accepted formats: JPG, PNG, WebP. Maximum size: 5 MB.
            </p>
          </div>

          <div>
            <label htmlFor="guardianCnic" className={labelClass}>
              Guardian's CNIC Number *
            </label>
            <input
              id="guardianCnic"
              name="guardianCnic"
              type="text"
              required
              className={inputClass}
              placeholder="XXXXX-XXXXXXX-X"
            />
          </div>

          <div>
            <label htmlFor="cnicImage" className={labelClass}>
              Guardian's CNIC Image *
            </label>
            <input
              id="cnicImage"
              name="cnicImage"
              type="file"
              accept="image/jpeg,image/png,image/webp"
              required
              className={`${inputClass} file:mr-4 file:border-0 file:bg-[#E84F0E] file:px-4 file:py-2 file:text-white file:font-display file:text-xs file:tracking-wider file:cursor-pointer`}
            />
            <p className="text-xs text-[#6B7285] mt-2">
              Accepted formats: JPG, PNG, WebP. Maximum size: 5 MB.
            </p>
          </div>

          {/* Submission Feedback */}
          {status === "success" && (
            <p className="text-sm text-green-500" role="status">
              {message}
            </p>
          )}

          {status === "error" && (
            <p className="text-sm text-[#C1121F]" role="alert">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto self-start inline-flex items-center justify-center gap-2 font-display text-xs tracking-[0.2em] text-white bg-[#E84F0E] px-8 py-4 rounded-full hover:bg-[#FF6B2B] hover:shadow-[0_0_20px_rgba(232,79,14,0.4)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 active:scale-95"
          >
            {status === "loading" ? "SUBMITTING…" : "REGISTER NOW →"}
          </button>

        </form>
      </div>
    </div>
  );
}
