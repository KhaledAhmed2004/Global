"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Building2, ArrowUpDown, MoreHorizontal, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/ui/data-table";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Reseller = {
  name: string;
  tier: "Silver" | "Gold" | "Platinum";
  activity: string;
  visibility: number;
  revenue: string;
};

const data: Reseller[] = [
  { name: "AutoMax", tier: "Gold", activity: "1,245 reports last 30d", visibility: 95, revenue: "$27,450" },
  { name: "VINPRO", tier: "Platinum", activity: "3,412 reports last 30d", visibility: 80, revenue: "$16,340" },
  { name: "CarHub", tier: "Silver", activity: "224 reports last 30d", visibility: 65, revenue: "$12,380" },
];
const columns: ColumnDef<Reseller>[] = [
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
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Reseller
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="font-medium flex items-center gap-2">
        <Building2 className="w-4 h-4" />
        <div>
          <div className="truncate max-w-[240px]">{row.original.name}</div>
          <div className="text-xs text-gray-500">{row.original.activity}</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "tier",
    header: "Tier",
    cell: ({ row }) => {
      const tier = row.original.tier;
      const cls =
        tier === "Platinum"
          ? "bg-purple-100 text-purple-700"
          : tier === "Gold"
          ? "bg-yellow-100 text-yellow-700"
          : "bg-gray-200 text-gray-700";
      return (
        <span className={`px-2 py-1 rounded-full text-xs ${cls}`}>{tier}</span>
      );
    },
  },
  {
    accessorKey: "visibility",
    header: "Visibility Score",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Progress value={row.original.visibility} />
        <span className="text-xs text-gray-500">{row.original.visibility}</span>
      </div>
    ),
  },
  {
    accessorKey: "revenue",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="justify-end"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Mo. Revenue
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-right font-medium">{row.original.revenue}</div>
    ),
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
          <DropdownMenuItem>View reseller</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Edit</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export default function AdminResellersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Resellers & Dealers</h2>
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
        filterColumnId="name"
        filterPlaceholder="Search resellers..."
      />
    </div>
  );
}