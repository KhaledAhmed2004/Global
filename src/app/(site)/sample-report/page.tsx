"use client";

import Image from "next/image";
import {
  Download,
  Printer,
  Share2,
  TriangleAlert,
  CheckCircle,
  Wrench,
} from "lucide-react";

type ReportItem = {
  date: string;
  desc: string;
  cost?: string;
};

export default function SampleReport() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12">
      <div className="flex flex-col gap-8">
        {/* Header with Title and Action Buttons */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1
            className="font-roboto text-4xl md:text-5xl font-medium text-neutral-950 whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            Vehicle Overview
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#d2d2d2] rounded-lg hover:bg-gray-50 active:scale-95 transition-all">
              <Download className="w-6 h-6 text-neutral-950" />
              <span className="font-roboto text-lg font-normal text-neutral-950">
                Download
              </span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#d2d2d2] rounded-lg hover:bg-gray-50 active:scale-95 transition-all">
              <Printer className="w-6 h-6 text-neutral-950" />
              <span className="font-roboto text-lg font-normal text-neutral-950">
                Print
              </span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#d2d2d2] rounded-lg hover:bg-gray-50 active:scale-95 transition-all">
              <Share2 className="w-6 h-6 text-neutral-950" />
              <span className="font-roboto text-lg font-normal text-neutral-950">
                Share
              </span>
            </button>
          </div>
        </div>

        {/* Vehicle Image and VIN */}
        <div className="flex flex-col gap-4">
          <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/assets/vehicle-overview.png"
              alt="Vehicle Overview"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p
            className="font-roboto text-xl md:text-2xl font-semibold text-gray-700 underline decoration-solid"
            style={{
              fontVariationSettings: "'wdth' 100",
              textUnderlineOffset: "22%",
            }}
          >
            VIN: 1HGBH41JXMN109186
          </p>
        </div>

        {/* Report Section */}
        <div className="flex flex-col gap-6">
          <h2 className="font-poppins text-2xl md:text-3xl font-semibold text-black">
            Report
          </h2>

          {/* Two Column Layout */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Left Column */}
            <div className="flex-1 flex flex-col gap-2">
              {[
                { label: "Year", value: "2021" },
                { label: "Make", value: "BMW" },
                { label: "Mileage", value: "Km" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-gray-300 px-3 py-2"
                >
                  <p className="font-roboto text-base font-normal text-gray-600">
                    {item.label}
                  </p>
                  <p className="font-roboto text-sm font-medium text-black">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col gap-2">
              {[
                { label: "Trim", value: "330i M Sport" },
                { label: "Color", value: "Alpine White" },
                { label: "Model", value: "3 Series" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-gray-300 px-3 py-2"
                >
                  <p className="font-roboto text-base font-normal text-gray-600">
                    {item.label}
                  </p>
                  <p className="font-roboto text-sm font-medium text-black">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sections: Accident, Ownership, Service */}
        {[
          {
            title: "Accident History",
            badge: {
              text: "Minor Issues",
              bg: "bg-yellow-100",
              border: "border-yellow-400",
              textColor: "text-yellow-800",
            },
            items: [
              {
                date: "2023-08-15",
                desc: "Rear bumper damage, parking lot incident",
                cost: "$850",
              },
              {
                date: "2023-08-15",
                desc: "Front-end collision, airbags not deployed",
                cost: "$3,200",
              },
            ] as ReportItem[],
            Icon: TriangleAlert,
            iconColor: "text-orange-500",
          },
          {
            title: "Ownership History",
            badge: {
              text: "Clean",
              bg: "bg-green-100",
              border: "border-green-700",
              textColor: "text-green-700",
            },
            items: [
              {
                date: "2021-05 to 2022-11",
                desc: "California • Personal Lease",
              },
              { date: "2022-12 to Present", desc: "Nevada • Private Owner" },
            ] as ReportItem[],
            Icon: CheckCircle,
            iconColor: "text-green-600",
          },
          {
            title: "Service & Maintenance Records",
            badge: {
              text: "Clean",
              bg: "bg-green-100",
              border: "border-green-700",
              textColor: "text-green-700",
            },
            items: [
              {
                date: "2025-09-10",
                desc: "Oil change, tire rotation, brake inspection",
                cost: "42,000 mi",
              },
              {
                date: "2025-05-22",
                desc: "Annual service, fluid top-up",
                cost: "38,500 mi",
              },
            ] as ReportItem[],
            Icon: Wrench,
            iconColor: "text-gray-500",
          },
        ].map((section) => (
          <div
            key={section.title}
            className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-roboto text-xl md:text-2xl font-medium text-neutral-950">
                {section.title}
              </h3>
              <div
                className={`${section.badge.bg} ${section.badge.border} rounded-lg px-3 py-1`}
              >
                <p
                  className={`font-roboto text-sm md:text-base font-normal ${section.badge.textColor}`}
                >
                  {section.badge.text}
                </p>
              </div>
            </div>

            {/* Items */}
            <div className="flex flex-col gap-4">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row md:items-center ${
                    section.title === "Ownership History"
                      ? "justify-between"
                      : "justify-between gap-2 md:gap-4"
                  }`}
                >
                  {section.title === "Ownership History" ? (
                    <>
                      {/* Ownership History - Special Layout */}
                      <div className="flex items-center gap-3">
                        <section.Icon
                          className={`w-5 h-5 ${section.iconColor}`}
                        />
                        <p className="font-roboto text-sm md:text-base text-gray-700">
                          {item.date}
                        </p>
                      </div>
                      <p className="font-roboto text-sm md:text-base text-neutral-950 md:text-right">
                        {item.desc}
                      </p>
                    </>
                  ) : (
                    <>
                      {/* Default Layout for Other Sections */}
                      <div className="flex items-center gap-3">
                        <section.Icon
                          className={`w-6 h-6 ${section.iconColor}`}
                        />
                        <p className="font-roboto text-sm md:text-base text-gray-600 w-[130px]">
                          {item.date}
                        </p>
                        <p className="font-roboto text-base md:text-lg text-neutral-950">
                          {item.desc}
                        </p>
                      </div>

                      {/* Only render cost if it exists */}
                      {"cost" in item && item.cost && (
                        <div className="border border-gray-300 rounded-lg px-3 py-1 text-right">
                          <p className="font-roboto text-base md:text-lg text-neutral-950">
                            {item.cost}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
