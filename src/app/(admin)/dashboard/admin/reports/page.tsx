"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Filter, Download, ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTable } from "@/components/ui/data-table";

type Report = {
  id: string;
  vin: string;
  franchise: string;
  date: string;
  status: "Generated" | "Pending" | "Failed";
};

const data: Report[] = [
  {
    id: "RPT-1001",
    vin: "1HGCM82633A004352",
    franchise: "TechCorp Solutions",
    date: "2025-10-30",
    status: "Generated",
  },
  {
    id: "RPT-1000",
    vin: "2HGFA16528H123456",
    franchise: "GreenTech Innovations",
    date: "2025-10-29",
    status: "Pending",
  },
  {
    id: "RPT-0999",
    vin: "3VWFE21C04M000001",
    franchise: "Digital Dynamics",
    date: "2025-10-29",
    status: "Failed",
  },
];

const columns: ColumnDef<Report>[] = [
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
    accessorKey: "id",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Report ID
        <ArrowUpDown />
      </Button>
    ),
  },
  {
    accessorKey: "vin",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        VIN
        <ArrowUpDown />
      </Button>
    ),
  },
  { accessorKey: "franchise", header: "Franchise" },
  { accessorKey: "date", header: "Date" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      const cls =
        status === "Generated"
          ? "bg-green-100 text-green-700"
          : status === "Pending"
          ? "bg-yellow-100 text-yellow-700"
          : "bg-red-100 text-red-700";
      return (
        <span className={`px-2 py-1 rounded-full text-xs ${cls}`}>
          {status}
        </span>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>View report</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Download PDF</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export default function AdminReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Reports</h2>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4" /> Filters
          </Button>
          <Button size="sm">
            <Download className="w-4 h-4" /> Export CSV
          </Button>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={data}
        filterColumnId="vin"
        filterPlaceholder="Search reports..."
      />
    </div>
  );
}
