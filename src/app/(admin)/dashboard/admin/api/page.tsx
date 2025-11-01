"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import {
  Key,
  RefreshCw,
  Copy,
  X,
  ArrowUpDown,
  MoreHorizontal,
  Plus,
  Activity,
  Shield,
  Zap,
  Globe,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type APIKeyItem = {
  id: string;
  name: string;
  key: string;
  environment: "Production" | "Staging" | "Development";
  status: "Active" | "Revoked" | "Expired";
  rateLimit: number;
  usage: number;
  usagePercent: number;
  lastUsed: string;
  createdAt: string;
  permissions: string[];
};

type WebhookItem = {
  id: string;
  url: string;
  events: string[];
  status: "Active" | "Failed" | "Disabled";
  lastDelivery: string;
  successRate: number;
};

const apiKeysData: APIKeyItem[] = [
  {
    id: "ak_001",
    name: "Production API Key",
    key: "gv_live_***********1234",
    environment: "Production",
    status: "Active",
    rateLimit: 10000,
    usage: 7200,
    usagePercent: 72,
    lastUsed: "2 minutes ago",
    createdAt: "2024-01-15",
    permissions: ["vin.decode", "vehicle.lookup", "reports.generate"],
  },
  {
    id: "ak_002",
    name: "Partner Integration",
    key: "gv_partner_***********abcd",
    environment: "Production",
    status: "Active",
    rateLimit: 5000,
    usage: 600,
    usagePercent: 12,
    lastUsed: "1 hour ago",
    createdAt: "2024-02-01",
    permissions: ["vin.decode", "vehicle.lookup"],
  },
  {
    id: "ak_003",
    name: "Development Testing",
    key: "gv_test_***********xyz9",
    environment: "Development",
    status: "Active",
    rateLimit: 1000,
    usage: 45,
    usagePercent: 4.5,
    lastUsed: "3 hours ago",
    createdAt: "2024-02-10",
    permissions: ["vin.decode"],
  },
];

const webhooksData: WebhookItem[] = [
  {
    id: "wh_001",
    url: "https://partner.example.com/webhooks/vin",
    events: ["vin.decoded", "report.generated"],
    status: "Active",
    lastDelivery: "5 minutes ago",
    successRate: 98.5,
  },
  {
    id: "wh_002",
    url: "https://dealer.example.com/api/notifications",
    events: ["vin.decoded"],
    status: "Failed",
    lastDelivery: "2 hours ago",
    successRate: 85.2,
  },
];

const apiKeyColumns: ColumnDef<APIKeyItem>[] = [
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
        API Key Name
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="max-w-[200px]">
        <div className="font-medium flex items-center gap-2">
          <Key className="w-4 h-4" />
          {row.getValue("name") as string}
        </div>
        <div className="text-xs text-gray-500">ID: {row.original.id}</div>
      </div>
    ),
  },
  {
    accessorKey: "key",
    header: "Key",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <span className="font-mono text-sm">
          {row.getValue("key") as string}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigator.clipboard.writeText(row.original.key)}
        >
          <Copy className="w-4 h-4" />
        </Button>
      </div>
    ),
  },
  {
    accessorKey: "environment",
    header: "Environment",
    cell: ({ row }) => {
      const env = row.original.environment;
      const cls =
        env === "Production"
          ? "bg-red-100 text-red-700"
          : env === "Staging"
          ? "bg-yellow-100 text-yellow-700"
          : "bg-blue-100 text-blue-700";
      return (
        <span className={`px-2 py-1 rounded-full text-xs ${cls}`}>{env}</span>
      );
    },
  },
  {
    accessorKey: "usage",
    header: "Usage / Rate Limit",
    cell: ({ row }) => {
      const { usage, rateLimit, usagePercent } = row.original;
      return (
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Progress value={usagePercent} className="w-16" />
            <span className="text-xs text-gray-500">{usagePercent}%</span>
          </div>
          <div className="text-xs text-gray-500">
            {usage.toLocaleString()} / {rateLimit.toLocaleString()}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      const cls =
        status === "Active"
          ? "bg-green-100 text-green-700"
          : status === "Expired"
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
    accessorKey: "lastUsed",
    header: "Last Used",
    cell: ({ row }) => (
      <div className="text-sm text-gray-600">
        {row.getValue("lastUsed") as string}
      </div>
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
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(row.original.key)}
          >
            <Copy className="w-4 h-4 mr-2" /> Copy key
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <RefreshCw className="w-4 h-4 mr-2" /> Rotate key
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Shield className="w-4 h-4 mr-2" /> Edit permissions
          </DropdownMenuItem>
          <DropdownMenuItem className="text-red-600">
            <X className="w-4 h-4 mr-2" /> Revoke
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

const webhookColumns: ColumnDef<WebhookItem>[] = [
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
    accessorKey: "url",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Webhook URL
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="max-w-[300px]">
        <div className="font-medium flex items-center gap-2">
          <Globe className="w-4 h-4" />
          <span className="truncate">{row.getValue("url") as string}</span>
        </div>
        <div className="text-xs text-gray-500">ID: {row.original.id}</div>
      </div>
    ),
  },
  {
    accessorKey: "events",
    header: "Events",
    cell: ({ row }) => (
      <div className="flex flex-wrap gap-1">
        {row.original.events.map((event, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"
          >
            {event}
          </span>
        ))}
      </div>
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
          : status === "Failed"
          ? "bg-red-100 text-red-700"
          : "bg-gray-200 text-gray-700";
      return (
        <span className={`px-2 py-1 rounded-full text-xs ${cls}`}>
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "successRate",
    header: "Success Rate",
    cell: ({ row }) => {
      const rate = row.original.successRate;
      return (
        <div className="flex items-center gap-2">
          <Progress value={rate} className="w-16" />
          <span className="text-xs text-gray-500">{rate}%</span>
        </div>
      );
    },
  },
  {
    accessorKey: "lastDelivery",
    header: "Last Delivery",
    cell: ({ row }) => (
      <div className="text-sm text-gray-600">
        {row.getValue("lastDelivery") as string}
      </div>
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
          <DropdownMenuItem>
            <Activity className="w-4 h-4 mr-2" /> Test webhook
          </DropdownMenuItem>
          <DropdownMenuItem>
            <TrendingUp className="w-4 h-4 mr-2" /> View logs
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <RefreshCw className="w-4 h-4 mr-2" /> Retry failed
          </DropdownMenuItem>
          <DropdownMenuItem className="text-red-600">
            <X className="w-4 h-4 mr-2" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export default function AdminAPIPage() {
  const [activeTab, setActiveTab] = React.useState<"keys" | "webhooks">("keys");

  // Calculate KPI stats
  const totalKeys = apiKeysData.length;
  const activeKeys = apiKeysData.filter((k) => k.status === "Active").length;
  const totalRequests = apiKeysData.reduce((sum, key) => sum + key.usage, 0);
  const avgUsagePercent = Math.round(
    apiKeysData.reduce((sum, key) => sum + key.usagePercent, 0) / totalKeys
  );

  const activeWebhooks = webhooksData.filter(
    (w) => w.status === "Active"
  ).length;
  const avgSuccessRate = Math.round(
    webhooksData.reduce((sum, wh) => sum + wh.successRate, 0) /
      webhooksData.length
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">API Management</h1>
          <p className="text-gray-600">
            Manage API keys, webhooks, and monitor usage
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <TrendingUp className="w-4 h-4 mr-2" />
            View Analytics
          </Button>
          <Button size="sm">
            <Plus className="w-4 h-4 mr-2" />
            New API Key
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Key className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Active API Keys</p>
              <p className="text-2xl font-bold">
                {activeKeys}/{totalKeys}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Activity className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Requests</p>
              <p className="text-2xl font-bold">
                {totalRequests.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <Zap className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg Usage</p>
              <p className="text-2xl font-bold">{avgUsagePercent}%</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Globe className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Webhook Success</p>
              <p className="text-2xl font-bold">{avgSuccessRate}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
        <button
          onClick={() => setActiveTab("keys")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === "keys"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <Key className="w-4 h-4 inline mr-2" />
          API Keys ({totalKeys})
        </button>
        <button
          onClick={() => setActiveTab("webhooks")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === "webhooks"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <Globe className="w-4 h-4 inline mr-2" />
          Webhooks ({webhooksData.length})
        </button>
      </div>

      {/* Content based on active tab */}
      {activeTab === "keys" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Input placeholder="Search API keys..." className="w-64" />
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Environment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Environments</SelectItem>
                  <SelectItem value="production">Production</SelectItem>
                  <SelectItem value="staging">Staging</SelectItem>
                  <SelectItem value="development">Development</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="revoked">Revoked</SelectItem>
                  <SelectItem value="expired">Expired</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DataTable
            columns={apiKeyColumns}
            data={apiKeysData}
            filterColumnId="name"
            filterPlaceholder="Search API keys..."
          />
        </div>
      )}

      {activeTab === "webhooks" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Input placeholder="Search webhooks..." className="w-64" />
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                  <SelectItem value="disabled">Disabled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Activity className="w-4 h-4 mr-2" />
                Test All
              </Button>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Webhook
              </Button>
            </div>
          </div>
          <DataTable
            columns={webhookColumns}
            data={webhooksData}
            filterColumnId="url"
            filterPlaceholder="Search webhooks..."
          />
        </div>
      )}
    </div>
  );
}
