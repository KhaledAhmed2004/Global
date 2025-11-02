"use client";

import { TrendingUp, BarChart3, PieChart, Activity, DollarSign, Clock, CheckCircle2, AlertTriangle } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";

type DealerMetric = {
  name: string;
  reports: number;
  revenue: string;
  visibility: number;
};

const topDealers: DealerMetric[] = [
  { name: "AutoMax Dealership", reports: 1245, revenue: "$27,450", visibility: 95 },
  { name: "Premium Motors", reports: 980, revenue: "$21,320", visibility: 88 },
  { name: "City Auto Sales", reports: 742, revenue: "$16,120", visibility: 82 },
  { name: "Truck World", reports: 615, revenue: "$14,540", visibility: 77 },
];

const dealerCols: ColumnDef<DealerMetric>[] = [
  { accessorKey: "name", header: "Dealer" },
  { accessorKey: "reports", header: "Reports" },
  { accessorKey: "revenue", header: "Revenue" },
  {
    accessorKey: "visibility",
    header: "Visibility",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div className="h-2 w-24 bg-gray-200 rounded">
          <div
            className="h-2 bg-purple-600 rounded"
            style={{ width: `${row.original.visibility}%` }}
          />
        </div>
        <span className="text-xs text-gray-500">{row.original.visibility}%</span>
      </div>
    ),
  },
];

const reportsTrend = [420, 480, 510, 600, 570, 660, 700, 680, 720, 760, 810, 850];
const statusBreakdown = { completed: 82, processing: 12, failed: 6 };
const typeDistribution = [
  { label: "Full History", value: 45 },
  { label: "Basic VIN", value: 30 },
  { label: "Dealer Package", value: 18 },
  { label: "API", value: 7 },
];

function LineChart({ values }: { values: number[] }) {
  const max = Math.max(...values);
  const points = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * 300;
      const y = 120 - (v / max) * 120;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg viewBox="0 0 300 120" className="w-full h-28">
      <polyline points={points} fill="none" stroke="rgb(99 102 241)" strokeWidth="3" />
    </svg>
  );
}

function Donut({ percent }: { percent: number }) {
  return (
    <div
      className="w-28 h-28 rounded-full"
      style={{
        background: `conic-gradient(rgb(34 197 94) 0% ${percent}%, rgb(229 231 235) ${percent}% 100%)`,
      }}
    >
      <div className="w-20 h-20 bg-white rounded-full m-4 flex items-center justify-center">
        <span className="text-sm font-semibold">{percent}%</span>
      </div>
    </div>
  );
}

export default function AdminAnalyticsPage() {
  const metrics = [
    { title: "Total Reports (30d)", value: "18,540", icon: FileIcon(BarChart3), note: "+12.4% MoM", color: "bg-blue-500" },
    { title: "Revenue (30d)", value: "$284,550", icon: FileIcon(DollarSign), note: "+9.7% MoM", color: "bg-purple-500" },
    { title: "Avg Processing Time", value: "1.8s", icon: FileIcon(Clock), note: "-0.3s vs last", color: "bg-emerald-500" },
    { title: "Success Rate", value: "98.2%", icon: FileIcon(CheckCircle2), note: "+0.6%", color: "bg-green-600" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl p-6 text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Analytics & Reporting</h1>
            <p className="text-slate-300 text-sm">Real-time insights for VIN report usage</p>
          </div>
        </div>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg ${m.color} flex items-center justify-center`}>{m.icon}</div>
              <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full">{m.note}</span>
            </div>
            <p className="text-sm text-gray-500 mb-1">{m.title}</p>
            <p className="text-2xl font-bold text-gray-900">{m.value}</p>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Reports trend */}
        <div className="bg-white border rounded-xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <BarChart3 className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-semibold">Reports Trend (last 12 weeks)</h3>
          </div>
          <LineChart values={reportsTrend} />
          <p className="text-xs text-gray-500">Weekly totals across all report types</p>
        </div>

        {/* Status breakdown */}
        <div className="bg-white border rounded-xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <Activity className="w-5 h-5 text-emerald-500" />
            <h3 className="text-lg font-semibold">Status Breakdown</h3>
          </div>
          <div className="flex items-center gap-6">
            <Donut percent={statusBreakdown.completed} />
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Completed: {statusBreakdown.completed}%</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-yellow-600" /> Processing: {statusBreakdown.processing}%</div>
              <div className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-red-600" /> Failed: {statusBreakdown.failed}%</div>
            </div>
          </div>
        </div>

        {/* Type distribution */}
        <div className="bg-white border rounded-xl p-6">
          <div className="flex items-center gap-2 mb-3">
            <PieChart className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-semibold">Report Type Distribution</h3>
          </div>
          <div className="space-y-3">
            {typeDistribution.map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                <span className="w-36 text-sm text-gray-600">{t.label}</span>
                <div className="flex-1 h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-purple-600 rounded" style={{ width: `${t.value}%` }} />
                </div>
                <span className="w-10 text-sm text-gray-600">{t.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top dealers table */}
      <div className="bg-white border rounded-xl shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Top Dealers (30d)</h2>
          <p className="text-sm text-gray-500">Highest report volume and revenue</p>
        </div>
        <div className="p-6">
          <DataTable columns={dealerCols} data={topDealers} filterColumnId="name" filterPlaceholder="Search dealers..." />
        </div>
      </div>
    </div>
  );
}

function FileIcon(Icon: React.ComponentType<{ className?: string }>) {
  return <Icon className="w-6 h-6 text-white" />;
}