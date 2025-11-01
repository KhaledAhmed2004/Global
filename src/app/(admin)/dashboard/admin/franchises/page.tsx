"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal, Download, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FranchiseRow = {
  id: string;
  name: string;
  domain: string;
  reportsSold: number;
  revenue: string;
  plan: string;
  status: "Active" | "Pending" | "Disabled";
  visibility: number;
};

const data: FranchiseRow[] = [
  {
    id: "FC001",
    name: "TechCorp Solutions",
    domain: "techcorp.franchise.com",
    reportsSold: 1247,
    revenue: "$89,450",
    plan: "Per-Report Sales",
    status: "Active",
    visibility: 95,
  },
  {
    id: "FC002",
    name: "GreenTech Innovations",
    domain: "greentech.franchise.com",
    reportsSold: 892,
    revenue: "$76,210",
    plan: "Dealer Packages",
    status: "Pending",
    visibility: 80,
  },
  {
    id: "FC003",
    name: "Digital Dynamics",
    domain: "digitaldynamics.franchise.com",
    reportsSold: 200,
    revenue: "$22,430",
    plan: "API Access",
    status: "Disabled",
    visibility: 55,
  },
];

export const columns: ColumnDef<FranchiseRow>[] = [
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
        Franchise
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="max-w-[240px]">
        <div className="font-medium truncate">
          {row.getValue("name") as string}
        </div>
        <div className="text-xs text-gray-500">ID: {row.original.id}</div>
      </div>
    ),
  },
  {
    accessorKey: "domain",
    header: "Domain",
    cell: ({ row }) => <div>{row.getValue("domain")}</div>,
  },
  {
    accessorKey: "reportsSold",
    header: "Reports Sold",
    cell: ({ row }) => <div>{row.getValue("reportsSold")}</div>,
  },
  {
    id: "visibility",
    header: "Visibility Score",
    cell: ({ row }) => {
      const value = row.original.visibility;
      return (
        <div className="flex items-center gap-3">
          <Progress value={value} />
          <span className="text-xs text-gray-500">{value}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "revenue",
    header: () => <div className="text-right">Revenue</div>,
    cell: ({ row }) => (
      <div className="text-right font-medium">
        {row.getValue("revenue") as string}
      </div>
    ),
  },
  {
    accessorKey: "plan",
    header: "Plan",
    cell: ({ row }) => (
      <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-700 text-xs">
        {row.getValue("plan") as string}
      </span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      const cls =
        status === "Active"
          ? "bg-green-100 text-green-700"
          : status === "Pending"
          ? "bg-yellow-100 text-yellow-700"
          : "bg-gray-200 text-gray-700";
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
    cell: ({ row }) => {
      const franchise = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(franchise.id)}
            >
              Copy franchise ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function AdminFranchisesPage() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  // Derived KPI stats
  const stats = React.useMemo(() => {
    const parseRevenue = (s: string) => Number(s.replace(/[^0-9.]/g, "").replace(/,/g, ""));
    const totalFranchises = data.length;
    const totalReports = data.reduce((sum, r) => sum + r.reportsSold, 0);
    const totalRevenue = data.reduce((sum, r) => sum + parseRevenue(r.revenue), 0);
    const avgVisibility = Math.round(
      data.reduce((sum, r) => sum + r.visibility, 0) / (data.length || 1)
    );
    const activeCount = data.filter((d) => d.status === "Active").length;
    const pendingCount = data.filter((d) => d.status === "Pending").length;
    const disabledCount = data.filter((d) => d.status === "Disabled").length;
    const topByReports = [...data].sort((a, b) => b.reportsSold - a.reportsSold)[0];
    return {
      totalFranchises,
      totalReports,
      totalRevenue,
      avgVisibility,
      activeCount,
      pendingCount,
      disabledCount,
      topByReports,
    };
  }, []);

  // Export current filtered rows to CSV
  const exportCSV = () => {
    const rows = table.getFilteredRowModel().rows.map((r) => r.original as FranchiseRow);
    const header = [
      "id",
      "name",
      "domain",
      "reportsSold",
      "revenue",
      "plan",
      "status",
      "visibility",
    ];
    const csv = [header.join(",")]
      .concat(
        rows.map((r) =>
          [
            r.id,
            r.name,
            r.domain,
            String(r.reportsSold),
            r.revenue,
            r.plan,
            r.status,
            String(r.visibility),
          ]
            .map((x) => `"${String(x).replace(/"/g, '""')}"`)
            .join(",")
        )
      )
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "franchises.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">Total Franchises</div>
          <div className="mt-2 text-2xl font-semibold">{stats.totalFranchises}</div>
          <div className="mt-2 text-xs text-muted-foreground">Active {stats.activeCount} • Pending {stats.pendingCount} • Disabled {stats.disabledCount}</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">Reports Sold</div>
          <div className="mt-2 text-2xl font-semibold">{stats.totalReports}</div>
          <div className="mt-2 text-xs text-muted-foreground">Top: {stats.topByReports?.name}</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">Total Revenue</div>
          <div className="mt-2 text-2xl font-semibold">
            {new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(stats.totalRevenue)}
          </div>
          <div className="mt-2 text-xs text-muted-foreground">Across all plans</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">Avg Visibility</div>
          <div className="mt-2 flex items-center gap-3">
            <Progress value={stats.avgVisibility} />
            <span className="text-sm">{stats.avgVisibility}</span>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">Higher is better</div>
        </div>
      </div>
      <div className="flex items-center py-4 gap-2">
        <Input
          placeholder="Search franchises..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <Select
          onValueChange={(value) =>
            table.getColumn("status")?.setFilterValue(value === "all" ? undefined : value)
          }
        >
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Filter status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
            <SelectItem value="Disabled">Disabled</SelectItem>
          </SelectContent>
        </Select>
        <Select
          onValueChange={(value) =>
            table.getColumn("plan")?.setFilterValue(value === "all" ? undefined : value)
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter plan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Plans</SelectItem>
            <SelectItem value="Per-Report Sales">Per-Report Sales</SelectItem>
            <SelectItem value="Dealer Packages">Dealer Packages</SelectItem>
            <SelectItem value="API Access">API Access</SelectItem>
          </SelectContent>
        </Select>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" onClick={exportCSV}>
            <Download className="mr-2 h-4 w-4" /> Export CSV
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Franchise
          </Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
