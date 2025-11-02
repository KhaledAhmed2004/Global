"use client";

import * as React from "react";
import { useState } from "react";
import {
  User,
  ShieldCheck,
  Users as UsersIcon,
  Building2,
  Mail,
  Phone,
  MoreHorizontal,
  ArrowUpDown,
  CheckCircle,
  XCircle,
  AlertCircle,
  Clock,
  Plus,
  Download,
  Trash2,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DataTable } from "@/components/ui/data-table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import type { ColumnDef } from "@tanstack/react-table";

type AdminUser = {
  id: string;
  name: string;
  email: string;
  role: "Owner" | "Admin" | "Analyst" | "Support";
  status: "Active" | "Invited" | "Suspended";
  lastLogin?: string;
  createdAt: string;
};

type Customer = {
  id: string;
  company: string;
  contactName: string;
  contactEmail: string;
  contactPhone?: string;
  plan: "Free" | "Basic" | "Pro" | "Enterprise";
  status: "Active" | "Trial" | "Suspended";
  createdAt: string;
  balance: number;
};

const users: AdminUser[] = [
  { id: "usr_001", name: "John Doe", email: "john@globalvin.com", role: "Owner", status: "Active", lastLogin: "2025-10-30 10:12", createdAt: "2024-06-12" },
  { id: "usr_002", name: "Jane Smith", email: "jane@globalvin.com", role: "Admin", status: "Active", lastLogin: "2025-10-29 18:05", createdAt: "2024-07-01" },
  { id: "usr_003", name: "Alex Park", email: "alex@globalvin.com", role: "Analyst", status: "Invited", createdAt: "2025-10-20" },
  { id: "usr_004", name: "Sam Lee", email: "sam@globalvin.com", role: "Support", status: "Suspended", lastLogin: "2025-09-15 08:30", createdAt: "2024-09-10" },
];

const customers: Customer[] = [
  { id: "cus_001", company: "TechCorp Solutions", contactName: "Michael Young", contactEmail: "m.young@techcorp.com", contactPhone: "+1 (555) 101-2020", plan: "Enterprise", status: "Active", createdAt: "2024-01-12", balance: 0 },
  { id: "cus_002", company: "GreenTech Innovations", contactName: "Sarah Smith", contactEmail: "s.smith@greentech.com", contactPhone: "+1 (555) 303-4040", plan: "Pro", status: "Active", createdAt: "2024-03-05", balance: 120.45 },
  { id: "cus_003", company: "Digital Dynamics", contactName: "Mike Johnson", contactEmail: "m.johnson@digitaldyn.com", plan: "Basic", status: "Trial", createdAt: "2025-10-01", balance: 0 },
];

const userColumns: ColumnDef<AdminUser>[] = [
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
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Name <ArrowUpDown className="ml-2 h-4 w-4" /></Button>
    ),
    cell: ({ row }) => (
      <div className="max-w-[200px]">
        <div className="font-medium flex items-center gap-2"><User className="w-4 h-4" /> {row.getValue("name") as string}</div>
        <div className="text-xs text-gray-500">{row.original.email}</div>
      </div>
    )
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => (
      <span className={`px-2 py-1 rounded-full text-xs ${
        row.original.role === "Owner" ? "bg-purple-100 text-purple-700" :
        row.original.role === "Admin" ? "bg-green-100 text-green-700" :
        row.original.role === "Support" ? "bg-blue-100 text-blue-700" :
        "bg-gray-200 text-gray-700"
      }`}>{row.original.role}</span>
    )
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        {row.original.status === "Active" && <CheckCircle className="w-4 h-4 text-green-600" />}
        {row.original.status === "Invited" && <AlertCircle className="w-4 h-4 text-yellow-600" />}
        {row.original.status === "Suspended" && <XCircle className="w-4 h-4 text-red-600" />}
        <span className="text-sm">{row.original.status}</span>
      </div>
    )
  },
  {
    accessorKey: "lastLogin",
    header: "Last Login",
    cell: ({ row }) => (
      <span className="text-sm">{row.original.lastLogin ?? "—"}</span>
    )
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
          <DropdownMenuItem>View Profile</DropdownMenuItem>
          <DropdownMenuItem>Edit Role</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Reset Password</DropdownMenuItem>
          <DropdownMenuItem>Send Support Email</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-600">{row.original.status === "Suspended" ? "Enable User" : "Suspend User"}</DropdownMenuItem>
          <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
];

const customerColumns: ColumnDef<Customer>[] = [
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
    accessorKey: "company",
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>Company <ArrowUpDown className="ml-2 h-4 w-4" /></Button>
    ),
    cell: ({ row }) => (
      <div className="max-w-[220px]">
        <div className="font-medium flex items-center gap-2"><Building2 className="w-4 h-4" /> {row.getValue("company") as string}</div>
        <div className="text-xs text-gray-500">{row.original.plan} plan</div>
      </div>
    )
  },
  {
    accessorKey: "contactName",
    header: "Contact",
    cell: ({ row }) => (
      <div className="max-w-[220px]">
        <div className="font-medium flex items-center gap-2"><UsersIcon className="w-4 h-4" /> {row.getValue("contactName") as string}</div>
        <div className="text-xs text-gray-500 flex items-center gap-2"><Mail className="w-3 h-3" /> {row.original.contactEmail}</div>
      </div>
    )
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span className={`px-2 py-1 rounded-full text-xs ${
        row.original.status === "Active" ? "bg-green-100 text-green-700" :
        row.original.status === "Trial" ? "bg-yellow-100 text-yellow-700" :
        "bg-red-100 text-red-700"
      }`}>{row.original.status}</span>
    )
  },
  {
    accessorKey: "balance",
    header: "Balance",
    cell: ({ row }) => (
      <span className="text-sm font-medium">${row.original.balance.toFixed(2)}</span>
    )
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
          <DropdownMenuItem>View Details</DropdownMenuItem>
          <DropdownMenuItem>Adjust Plan</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Contact Customer</DropdownMenuItem>
          <DropdownMenuItem>Export Data</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-600">Suspend</DropdownMenuItem>
          <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
];

export default function AdminUsersPage() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Users & Customers</h2>
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                <Plus className="w-4 h-4 mr-2" /> Invite User
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Invite New User</DialogTitle>
                <DialogDescription>Send an invitation with role assignment.</DialogDescription>
              </DialogHeader>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Full name" />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="user@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium">Role</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Owner">Owner</SelectItem>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="Analyst">Analyst</SelectItem>
                      <SelectItem value="Support">Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Send Invite</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <div className="flex items-center gap-4">
            <Input placeholder="Search name or email..." className="w-64" />
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="Owner">Owner</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Analyst">Analyst</SelectItem>
                <SelectItem value="Support">Support</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Invited">Invited</SelectItem>
                <SelectItem value="Suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DataTable columns={userColumns} data={users} filterColumnId="name" filterPlaceholder="Search users..." />
        </TabsContent>

        <TabsContent value="customers" className="space-y-4">
          <div className="flex items-center gap-4">
            <Input placeholder="Search company or contact..." className="w-64" />
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Plans</SelectItem>
                <SelectItem value="Free">Free</SelectItem>
                <SelectItem value="Basic">Basic</SelectItem>
                <SelectItem value="Pro">Pro</SelectItem>
                <SelectItem value="Enterprise">Enterprise</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Trial">Trial</SelectItem>
                <SelectItem value="Suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DataTable columns={customerColumns} data={customers} filterColumnId="company" filterPlaceholder="Search customers..." />
        </TabsContent>
      </Tabs>
    </div>
  );
}