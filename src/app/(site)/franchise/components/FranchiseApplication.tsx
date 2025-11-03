"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FranchiseApplication() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    location: "",
    investment: "$75K - $100K",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="mx-auto w-full max-w-[1280px] px-6 py-16">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Side - Info */}
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <h2 className="font-poppins text-[32px] sm:text-[36px] font-bold leading-tight text-gray-900 mb-4 sm:mb-6">
              Ready to Start Your Franchise Journey?
            </h2>
            <p className="font-poppins text-[16px] sm:text-[20px] font-normal leading-relaxed text-gray-600">
              Fill out our application form and take the first step towards
              building your successful franchise business.
            </p>
          </div>
          <div className="relative w-full h-[240px] sm:h-[320px] rounded-[16px] overflow-hidden">
            <Image
              src="/assets/franchise-application.png"
              alt="Franchise Application"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side - Form with gradient background */}
        <div
          className="flex-1 rounded-[24px] p-6 sm:p-8 shadow-md"
          style={{
            background: "linear-gradient(135deg, #EFF6FF 0%, #EEF2FF 70.71%)",
          }}
        >
          <h3 className="font-poppins text-[22px] sm:text-[24px] font-bold leading-8 text-gray-900 mb-6">
            Franchise Application
          </h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 sm:gap-6"
          >
            {/* Inputs with white background */}
            <Input
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="bg-white"
            />
            <Input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="bg-white"
            />
            <Input
              placeholder="Enter your preferred location"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              className="bg-white"
            />

            {/* Select with white background */}
            <div className="flex flex-col gap-1">
              <label className="font-poppins text-[14px] font-semibold text-gray-700">
                Investment Range
              </label>
              <Select
                value={formData.investment}
                onValueChange={(value) =>
                  setFormData({ ...formData, investment: value })
                }
              >
                <SelectTrigger className="h-[56px] w-full bg-white">
                  <SelectValue placeholder="Select Investment" />
                  <ChevronDown className="w-5 h-5 text-gray-600 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="$75K - $100K">$75K - $100K</SelectItem>
                  <SelectItem value="$100K - $150K">$100K - $150K</SelectItem>
                  <SelectItem value="$150K - $200K">$150K - $200K</SelectItem>
                  <SelectItem value="$200K+">$200K+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Textarea with white background */}
            <Textarea
              placeholder="Write a message..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="resize-none h-[130px] bg-white"
            />

            <Button
              type="submit"
              className="h-[60px] bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              Submit Your Application
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
