"use client";

import { Search, FileText, CheckCircle2, Clock, MoreHorizontal, DollarSign, ArrowUpDown, Car, Shield, AlertTriangle, TrendingUp, Users, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type VinReportRow = {
  id: string;
  vin: string;
  dealerName: string;
  vehicleInfo: string;
  reportType: string;
  price: string;
  status: "Completed" | "Processing" | "Failed";
  timestamp: string;
};

export default function DashboardOverview() {
  const metrics = [
    { title: "VIN Reports Today", value: "2,847", change: "+18.2%", icon: FileText, color: "bg-blue-500" },
    { title: "Active Dealers", value: "156", change: "+5.1%", icon: Users, color: "bg-green-500" },
    { title: "Revenue Today", value: "$28,450", change: "+12.8%", icon: DollarSign, color: "bg-purple-500" },
    { title: "System Health", value: "99.8%", change: "+0.1%", icon: Shield, color: "bg-emerald-500" },
  ];

  const tabs = [
    "All Reports",
    "Basic VIN Check",
    "Full History Report",
    "Dealer Package",
    "API Requests",
  ];

  const rows: VinReportRow[] = [
    { 
      id: "VR001", 
      vin: "1HGBH41JXMN109186", 
      dealerName: "AutoMax Dealership", 
      vehicleInfo: "2021 Honda Accord EX", 
      reportType: "Full History Report", 
      price: "$29.99", 
      status: "Completed", 
      timestamp: "2 min ago" 
    },
    { 
      id: "VR002", 
      vin: "WBAFR7C50BC123456", 
      dealerName: "Premium Motors", 
      vehicleInfo: "2019 BMW 3 Series", 
      reportType: "Basic VIN Check", 
      price: "$9.99", 
      status: "Processing", 
      timestamp: "5 min ago" 
    },
    { 
      id: "VR003", 
      vin: "JM1BK32F781234567", 
      dealerName: "City Auto Sales", 
      vehicleInfo: "2018 Mazda CX-5", 
      reportType: "Dealer Package", 
      price: "$19.99", 
      status: "Completed", 
      timestamp: "8 min ago" 
    },
    { 
      id: "VR004", 
      vin: "1FTFW1ET5DFC12345", 
      dealerName: "Truck World", 
      vehicleInfo: "2020 Ford F-150", 
      reportType: "Full History Report", 
      price: "$29.99", 
      status: "Failed", 
      timestamp: "12 min ago" 
    },
    { 
      id: "VR005", 
      vin: "KNDJN2A22F7123456", 
      dealerName: "Reliable Cars Inc", 
      vehicleInfo: "2017 Hyundai Elantra", 
      reportType: "API Request", 
      price: "$15.99", 
      status: "Completed", 
      timestamp: "15 min ago" 
    },
  ];

  const columns: ColumnDef<VinReportRow>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "vin",
      header: ({ column }) => (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          <Car className="w-4 h-4 mr-2" />
          VIN Number
          <ArrowUpDown />
        </Button>
      ),
      cell: ({ row }) => (
        <div>
          <p className="text-gray-900 font-mono text-sm font-medium">{row.original.vin}</p>
          <p className="text-gray-500 text-xs">ID: {row.original.id}</p>
        </div>
      ),
    },
    {
      accessorKey: "vehicleInfo",
      header: "Vehicle Details",
      cell: ({ row }) => (
        <div>
          <p className="text-gray-900 font-medium text-sm">{row.original.vehicleInfo}</p>
          <p className="text-gray-500 text-xs">{row.original.dealerName}</p>
        </div>
      ),
    },
    {
      accessorKey: "reportType",
      header: "Report Type",
      cell: ({ row }) => {
        const type = row.original.reportType;
        const color = 
          type === "Full History Report" ? "bg-blue-100 text-blue-700" :
          type === "Basic VIN Check" ? "bg-green-100 text-green-700" :
          type === "Dealer Package" ? "bg-purple-100 text-purple-700" :
          "bg-orange-100 text-orange-700";
        
        return (
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${color}`}>
            <FileText className="w-3 h-3 mr-1" />
            {type}
          </span>
        );
      },
    },
    {
      accessorKey: "price",
      header: ({ column }) => (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Price
          <ArrowUpDown />
        </Button>
      ),
      cell: ({ row }) => <span className="text-green-600 font-semibold">{row.original.price}</span>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.original.status;
        const config = 
          status === "Completed" 
            ? { color: "text-green-700", bg: "bg-green-100", icon: CheckCircle2 }
            : status === "Processing"
            ? { color: "text-yellow-700", bg: "bg-yellow-100", icon: Clock }
            : { color: "text-red-700", bg: "bg-red-100", icon: AlertTriangle };
        
        return (
          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.color} ${config.bg}`}>
            <config.icon className="w-3 h-3" />
            {status}
          </span>
        );
      },
    },
    {
      accessorKey: "timestamp",
      header: "Time",
      cell: ({ row }) => (
        <span className="text-gray-500 text-xs">{row.original.timestamp}</span>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: () => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <FileText className="w-4 h-4 mr-2" />
              View Report
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Car className="w-4 h-4 mr-2" />
              Vehicle Details
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <TrendingUp className="w-4 h-4 mr-2" />
              Resend Report
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl p-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
            <Car className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">VIN Report Dashboard</h1>
            <p className="text-slate-300 text-sm">Real-time vehicle history report analytics</p>
          </div>
        </div>
      </div>

      {/* Top metrics cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <div key={i} className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg ${m.color} flex items-center justify-center`}>
                <m.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                {m.change}
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">{m.title}</p>
              <p className="text-2xl font-bold text-gray-900">{m.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search and filters */}
      <div className="bg-white border rounded-xl p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              placeholder="Search VIN, dealer, or vehicle..."
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Database className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            <Button size="sm">
              <TrendingUp className="w-4 h-4 mr-2" />
              Analytics
            </Button>
          </div>
        </div>
        
        {/* Report type tabs */}
        <div className="flex items-center gap-2 text-sm">
          {tabs.map((t, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-lg transition-colors ${
                i === 0 
                  ? "bg-blue-100 text-blue-700 font-medium" 
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* VIN Reports Table */}
      <div className="bg-white border rounded-xl shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-500" />
            Recent VIN Reports
          </h2>
          <p className="text-sm text-gray-500 mt-1">Latest vehicle history report requests and their status</p>
        </div>
        <div className="p-6">
          <DataTable columns={columns} data={rows} filterColumnId="vin" filterPlaceholder="Search by VIN number..." />
        </div>
      </div>
    </div>
  );
}