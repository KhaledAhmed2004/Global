"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VerifyResetPassword() {
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [timer, setTimer] = useState(56);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleInputChange = (index: number, value: string) => {
    // Only allow single digit
    if (value.length > 1) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const verificationCode = code.join("");
    console.log("Verification code:", verificationCode);
  };

  const handleResendCode = () => {
    if (timer === 0) {
      setTimer(56);
      console.log("Resending code...");
    }
  };

  return (
    <div className="relative flex h-screen w-full bg-white">
      {/* ================= Left Side: Hero Image ================= */}
      <div className="relative hidden lg:flex lg:w-[52%] xl:w-[55%] h-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/login-hero-bg.png"
            alt="Admin Verify Background"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
        </div>

        {/* Hero Text Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-16 2xl:px-20 max-w-[620px]">
          <h1 className="font-poppins text-5xl xl:text-6xl 2xl:text-[64px] font-medium text-white leading-tight mb-8">
            Welcome back, Admin.
          </h1>
          <p className="font-roboto text-lg xl:text-xl text-white/95 leading-relaxed" style={{ fontVariationSettings: "'wdth' 100" }}>
            E Parts Admin Panel — your control center for managing products, monitoring performance, and ensuring smooth operations.
          </p>
        </div>
      </div>

      {/* ================= Right Side: Verification Form ================= */}
      <div className="flex w-full lg:w-[48%] xl:w-[45%] items-center justify-center px-6 sm:px-10 lg:px-12">
        <div className="w-full max-w-[636px] rounded-2xl border border-[#dddddd] bg-white p-8 sm:p-10 lg:p-12">
          <div className="flex flex-col items-center space-y-12">
            {/* Header */}
            <div className="text-center space-y-2 max-w-[420px]">
              <h2 className="font-poppins text-3xl sm:text-[32px] font-bold text-[#272727]">
                Verify Reset Password
              </h2>
              <p className="font-roboto text-lg text-[#272727] font-medium leading-relaxed" style={{ fontVariationSettings: "'wdth' 100" }}>
                Enter the code sent to your email to reset your password.
              </p>
            </div>

            {/* Form */}
            <div className="w-full space-y-4">
              {/* Verification Code Inputs */}
              <div className="flex items-center justify-between gap-3 sm:gap-4 mb-8">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-full aspect-square max-w-[72px] rounded-xl border border-[#272727] text-center font-roboto text-2xl font-bold text-[#272727] focus:outline-none focus:border-[#764ba2] focus:ring-2 focus:ring-[#764ba2]/20 transition-all"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  />
                ))}
              </div>

              {/* Buttons */}
              <div className="space-y-6">
                {/* Verify Code Button */}
                <button
                  onClick={handleVerify}
                  className="relative w-full h-14 flex items-center justify-center rounded-2xl bg-[#764ba2] shadow-[2px_2px_10px_8px_rgba(118,75,162,0.3)] overflow-hidden transition-all duration-200 hover:bg-[#6a4391] active:scale-[0.98]"
                >
                  {/* Inner shadow effect */}
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_-2px_-2px_2px_rgba(255,255,255,0.4),inset_2px_2px_2px_rgba(255,255,255,0.4)]" />

                  <span className="relative font-roboto text-base font-semibold text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Verify Code
                  </span>
                </button>

                {/* Back to Login Button */}
                <button
                  onClick={() => router.push('/login')}
                  className="w-full h-14 flex items-center justify-center rounded-2xl border border-black bg-white transition-all duration-200 hover:bg-gray-50 active:scale-[0.98]"
                >
                  <span className="font-roboto text-base font-semibold text-black" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Back to login
                  </span>
                </button>
              </div>

              {/* Resend Code Timer */}
              <p className="text-center font-montserrat text-base font-medium text-[#272727] mt-4">
                Resend code in{" "}
                <button
                  onClick={handleResendCode}
                  disabled={timer > 0}
                  className={`font-semibold ${
                    timer > 0
                      ? "text-[#764ba2] cursor-default"
                      : "text-[#764ba2] hover:underline cursor-pointer"
                  }`}
                >
                  00 : {timer.toString().padStart(2, "0")}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
