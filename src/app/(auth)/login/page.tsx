"use client";

import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);

  const handleLogin = () => {
    console.log("Login:", { email, password, rememberPassword });
  };

  return (
    <div className="relative flex h-screen w-full bg-white">
      {/* ================= Left Side: Hero Image ================= */}
      <div className="relative hidden lg:flex lg:w-[52%] xl:w-[55%] h-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/login-hero-bg.png"
            alt="Admin Login Background"
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
          <p
            className="font-roboto text-lg xl:text-xl text-white/95 leading-relaxed"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            E Parts Admin Panel — your control center for managing products,
            monitoring performance, and ensuring smooth operations.
          </p>
        </div>
      </div>

      {/* ================= Right Side: Login Form ================= */}
      <div className="flex w-full lg:w-[48%] xl:w-[45%] items-center justify-center px-6 sm:px-10 lg:px-12">
        <div className="w-full max-w-[636px] rounded-2xl border border-neutral-300 bg-white p-8 sm:p-10 lg:p-12">
          <div className="flex flex-col items-center space-y-12">
            {/* Header */}
            <div className="text-center space-y-2">
              <h2 className="font-poppins text-3xl sm:text-[32px] font-bold text-[#2d2d2d]">
                Welcome Back
              </h2>
              <p
                className="font-roboto text-lg text-[#2d2d2d] font-medium"
                style={{ fontVariationSettings: "'wdth' 100" }}
              >
                Login to your admin account
              </p>
            </div>

            {/* Form */}
            <div className="w-full space-y-8">
              {/* Form Fields */}
              <div className="space-y-5">
                {/* Email Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block font-roboto text-base font-medium text-[#2d2d2d]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border-[1.5px] border-[#656565] px-4 py-3 font-roboto text-base text-[#2d2d2d] placeholder:text-[#606060] focus:outline-none focus:border-[#764ba2] focus:ring-2 focus:ring-[#764ba2]/20 transition-all"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block font-roboto text-base font-medium text-[#2d2d2d]"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-xl border-[1.5px] border-[#656565] px-4 py-3 pr-12 font-roboto text-base text-[#2d2d2d] placeholder:text-[#606060] focus:outline-none focus:border-[#764ba2] focus:ring-2 focus:ring-[#764ba2]/20 transition-all"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2d2d2d] hover:text-[#764ba2] transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberPassword}
                      onChange={(e) => setRememberPassword(e.target.checked)}
                      className="h-6 w-6 rounded border-[#454545] border text-[#764ba2] focus:ring-2 focus:ring-[#764ba2]/20 cursor-pointer"
                    />
                    <span
                      className="font-roboto text-base font-medium text-[#2d2d2d]"
                      style={{ fontVariationSettings: "'wdth' 100" }}
                    >
                      Remember Password
                    </span>
                  </label>

                  <button
                    type="button"
                    className="font-roboto text-base font-medium text-[#474747] underline underline-offset-2 hover:text-[#764ba2] transition-colors"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    Forgot Password
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button
                onClick={handleLogin}
                className="relative w-full h-14 flex items-center justify-center rounded-2xl bg-[#764ba2] shadow-[2px_2px_10px_8px_rgba(118,75,162,0.3)] overflow-hidden transition-all duration-200 hover:bg-[#6a4391] active:scale-[0.98]"
              >
                {/* Inner shadow effect */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_-2px_-2px_2px_rgba(255,255,255,0.4),inset_2px_2px_2px_rgba(255,255,255,0.4)]" />

                <span
                  className="relative font-roboto text-base font-semibold text-white"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  Login
                </span>
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="font-montserrat text-lg sm:text-xl text-[#373737]">
              If have an account?{" "}
              <button
                type="button"
                className="font-semibold hover:text-[#764ba2] transition-colors"
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
