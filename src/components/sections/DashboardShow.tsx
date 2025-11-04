// "use client";

// import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
//   ChartLegend,
//   ChartLegendContent,
// } from "@/components/ui/chart";

// export default function DashboardShow() {
//   const metrics = [
//     {
//       title: "Total Revenue",
//       value: "$294,502",
//       change: "+12.9% vs last month",
//       positive: true,
//       iconBg: "bg-green-500",
//       icon: "$",
//     },
//     {
//       title: "Reports Generated",
//       value: "1,420",
//       change: "+8.2% vs last month",
//       positive: true,
//       iconBg: "bg-blue-500",
//       icon: "📄",
//     },
//     {
//       title: "Active Users",
//       value: "3,847",
//       change: "-2.4% vs last month",
//       positive: false,
//       iconBg: "bg-purple-500",
//       icon: "👥",
//     },
//     {
//       title: "Performance Score",
//       value: "94.8%",
//       change: "+5.1% vs last month",
//       positive: true,
//       iconBg: "bg-orange-500",
//       icon: "⭐",
//     },
//   ];

//   // Sales Performance Data
//   const salesData = [
//     { month: "Jan", actual: 45000, target: 50000 },
//     { month: "Feb", actual: 52000, target: 50000 },
//     { month: "Mar", actual: 48000, target: 50000 },
//     { month: "Apr", actual: 61000, target: 55000 },
//     { month: "May", actual: 55000, target: 55000 },
//     { month: "Jun", actual: 67000, target: 60000 },
//   ];

//   const salesChartConfig = {
//     actual: {
//       label: "Actual Sales",
//       color: "hsl(217, 91%, 60%)",
//     },
//     target: {
//       label: "Target",
//       color: "hsl(142, 71%, 45%)",
//     },
//   };

//   // Active Reports Data
//   const reportsData = [
//     { status: "Completed", count: 850 },
//     { status: "In Progress", count: 320 },
//     { status: "Pending", count: 180 },
//     { status: "Reviewed", count: 70 },
//   ];

//   const reportsChartConfig = {
//     count: {
//       label: "Reports",
//       color: "hsl(262, 83%, 58%)",
//     },
//   };

//   return (
//     <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
//       <div className="flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
//         <h2 className="text-center font-poppins text-3xl font-medium leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl xl:text-[84px] xl:leading-normal">
//           Our Trusted Data Sources
//         </h2>

//         {/* Dashboard Container */}
//         <div className="w-full rounded-xl border border-[#e5e7eb] bg-white p-4 sm:rounded-2xl sm:p-6 lg:p-8">
//           {/* Dashboard Header */}
//           <div className="mb-6 flex flex-col gap-4 sm:mb-8 lg:flex-row lg:items-center lg:justify-between">
//             <div className="flex-1">
//               <h3 className="font-roboto text-lg font-medium text-black sm:text-xl">
//                 Franchise Performance Metrics
//               </h3>
//               <p className="mt-1 font-roboto text-xs text-gray-600 sm:text-sm">
//                 Track your franchise performance and key metrics in real-time
//               </p>
//             </div>
//             <div className="flex flex-wrap items-center gap-2 sm:gap-3">
//               <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 font-roboto text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 sm:flex-none sm:px-4 sm:text-sm">
//                 <span>🔄</span>
//                 <span className="hidden sm:inline">Refresh</span>
//               </button>
//               <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 font-roboto text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 sm:flex-none sm:px-4 sm:text-sm">
//                 <span>📥</span>
//                 <span className="hidden sm:inline">Export</span>
//               </button>
//               <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 font-roboto text-xs font-medium text-white transition-colors hover:bg-blue-700 sm:w-auto sm:px-4 sm:text-sm">
//                 <span>📊</span>
//                 <span>Live View</span>
//               </button>
//             </div>
//           </div>

//           {/* Metrics Grid */}
//           <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:mb-8 xl:grid-cols-4">
//             {metrics.map((metric, index) => (
//               <div
//                 key={index}
//                 className="rounded-lg border border-gray-200 bg-gray-50 p-4 sm:rounded-xl sm:p-6"
//               >
//                 <div className="mb-3 flex items-center justify-between sm:mb-4">
//                   <span className="font-roboto text-xs font-medium text-gray-600 sm:text-sm">
//                     {metric.title}
//                   </span>
//                   <div
//                     className={`flex h-8 w-8 items-center justify-center rounded-lg text-lg sm:h-10 sm:w-10 sm:text-xl ${metric.iconBg} text-white`}
//                   >
//                     {metric.icon}
//                   </div>
//                 </div>
//                 <div className="mb-2 font-roboto text-2xl font-bold text-black sm:text-3xl">
//                   {metric.value}
//                 </div>
//                 <div
//                   className={`flex items-center gap-1 font-roboto text-xs sm:text-sm ${
//                     metric.positive ? "text-green-600" : "text-red-600"
//                   }`}
//                 >
//                   <span>{metric.positive ? "↗" : "↘"}</span>
//                   <span>{metric.change}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Charts Section */}
//           <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
//             {/* Sales Performance Chart */}
//             <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 sm:rounded-xl sm:p-6">
//               <h4 className="mb-3 font-roboto text-sm font-medium text-black sm:mb-4 sm:text-base">
//                 Sales Performance
//               </h4>
//               <p className="mb-4 font-roboto text-xs text-gray-600 sm:mb-6 sm:text-sm">
//                 Monthly sales vs target comparison
//               </p>
//               <ChartContainer
//                 config={salesChartConfig}
//                 className="h-48 w-full sm:h-64"
//               >
//                 <BarChart data={salesData} accessibilityLayer>
//                   <CartesianGrid vertical={false} strokeDasharray="3 3" />
//                   <XAxis
//                     dataKey="month"
//                     tickLine={false}
//                     tickMargin={10}
//                     axisLine={false}
//                   />
//                   <YAxis
//                     tickLine={false}
//                     axisLine={false}
//                     tickFormatter={(value) => `$${value / 1000}k`}
//                   />
//                   <ChartTooltip
//                     content={
//                       <ChartTooltipContent
//                         labelFormatter={(value) => `${value} 2024`}
//                       />
//                     }
//                   />
//                   <ChartLegend content={<ChartLegendContent />} />
//                   <Bar
//                     dataKey="actual"
//                     fill="var(--color-actual)"
//                     radius={[4, 4, 0, 0]}
//                   />
//                   <Bar
//                     dataKey="target"
//                     fill="var(--color-target)"
//                     radius={[4, 4, 0, 0]}
//                   />
//                 </BarChart>
//               </ChartContainer>
//             </div>

//             {/* Active Reports Chart */}
//             <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 sm:rounded-xl sm:p-6">
//               <h4 className="mb-3 font-roboto text-sm font-medium text-black sm:mb-4 sm:text-base">
//                 Active Reports
//               </h4>
//               <p className="mb-4 font-roboto text-xs text-gray-600 sm:mb-6 sm:text-sm">
//                 Report generation and completion status
//               </p>
//               <ChartContainer
//                 config={reportsChartConfig}
//                 className="h-48 w-full sm:h-64"
//               >
//                 <BarChart
//                   data={reportsData}
//                   accessibilityLayer
//                   layout="vertical"
//                 >
//                   <CartesianGrid horizontal={false} strokeDasharray="3 3" />
//                   <XAxis type="number" tickLine={false} axisLine={false} />
//                   <YAxis
//                     dataKey="status"
//                     type="category"
//                     tickLine={false}
//                     tickMargin={10}
//                     axisLine={false}
//                     width={80}
//                   />
//                   <ChartTooltip content={<ChartTooltipContent hideLabel />} />
//                   <Bar
//                     dataKey="count"
//                     fill="var(--color-count)"
//                     radius={[0, 4, 4, 0]}
//                   />
//                 </BarChart>
//               </ChartContainer>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function TrustedDataSources() {
  // Correctly typed variants
  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: ["easeOut"] }, // array fixes typing
    },
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Heading */}
        <h2 className="text-center font-poppins text-3xl font-medium leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl xl:text-[84px] xl:leading-normal">
          Our Trusted Data Sources
        </h2>

        {/* Animated Image */}
        <motion.div
          className="w-full h-[300px] relative sm:h-[400px] md:h-[500px] lg:h-[500px]"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src="/assets/Franchise-Dashboard-Overview-2.png"
            alt="Trusted Data Sources"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
