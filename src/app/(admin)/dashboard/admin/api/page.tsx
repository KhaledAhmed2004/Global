"use client";

import * as React from "react";
import { useState } from "react";
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
  Database,
  Eye,
  EyeOff,
  ArrowUpDown as ArrowUpDownIcon,
  Trash2,
  Edit,
  TestTube,
  Settings,
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

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

type DataSourceConnection = {
  id: string;
  name: string;
  provider: string;
  status: "connected" | "disconnected" | "error" | "testing";
  priority: number;
  lastTested: string;
  requestsToday: number;
  requestsLimit: number;
  responseTime: string;
  uptime: string;
  credentials: {
    apiKey?: string;
    endpoint?: string;
    username?: string;
    password?: string;
  };
};

const dataSourceConnections: DataSourceConnection[] = [
  {
    id: "ds_001",
    name: "CARFAX Data Source",
    provider: "CARFAX",
    status: "connected",
    priority: 1,
    lastTested: "2 minutes ago",
    requestsToday: 1247,
    requestsLimit: 5000,
    responseTime: "0.8s",
    uptime: "99.9%",
    credentials: {
      apiKey: "cf_live_••••••••••••••••",
      endpoint: "https://api.carfax.com/v1"
    }
  },
  {
    id: "ds_002",
    name: "AutoCheck Integration",
    provider: "AutoCheck",
    status: "connected",
    priority: 2,
    lastTested: "5 minutes ago",
    requestsToday: 892,
    requestsLimit: 3000,
    responseTime: "1.2s",
    uptime: "98.7%",
    credentials: {
      apiKey: "ac_prod_••••••••••••••••",
      endpoint: "https://api.autocheck.com/v2"
    }
  },
  {
    id: "ds_003",
    name: "VinAudit Service",
    provider: "VinAudit",
    status: "error",
    priority: 3,
    lastTested: "1 hour ago",
    requestsToday: 0,
    requestsLimit: 2000,
    responseTime: "N/A",
    uptime: "0%",
    credentials: {
      apiKey: "va_test_••••••••••••••••",
      endpoint: "https://api.vinaudit.com/v1"
    }
  }
];

const availableProviders = [
  { value: "carfax", label: "CARFAX", description: "Comprehensive vehicle history reports" },
  { value: "autocheck", label: "AutoCheck", description: "Experian automotive data" },
  { value: "vinaudit", label: "VinAudit", description: "Affordable VIN checking service" },
  { value: "clearvin", label: "ClearVin", description: "Detailed vehicle information" },
  { value: "vehiclehistory", label: "VehicleHistory", description: "Complete vehicle records" },
  { value: "custom", label: "Custom API", description: "Your own API endpoint" }
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
  const [activeTab, setActiveTab] = React.useState("data-sources");
  const [connections, setConnections] = useState<DataSourceConnection[]>(dataSourceConnections);
  const [showWizard, setShowWizard] = useState(false);
  const [wizardStep, setWizardStep] = useState(1);
  const [newConnection, setNewConnection] = useState({
    name: "",
    provider: "",
    apiKey: "",
    endpoint: "",
    username: "",
    password: ""
  });
  const [showCredentials, setShowCredentials] = useState<{ [key: string]: boolean }>({});
  const [testingConnection, setTestingConnection] = useState<string | null>(null);

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected": return "text-green-600 bg-green-100";
      case "disconnected": return "text-gray-600 bg-gray-100";
      case "error": return "text-red-600 bg-red-100";
      case "testing": return "text-yellow-600 bg-yellow-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected": return CheckCircle;
      case "disconnected": return Clock;
      case "error": return AlertTriangle;
      case "testing": return RefreshCw;
      default: return Clock;
    }
  };

  const testConnection = async (connectionId: string) => {
    setTestingConnection(connectionId);
    
    setConnections(prev => prev.map(conn => 
      conn.id === connectionId ? { ...conn, status: "testing" as const } : conn
    ));

    await new Promise(resolve => setTimeout(resolve, 3000));

    setConnections(prev => prev.map(conn => 
      conn.id === connectionId 
        ? { 
            ...conn, 
            status: Math.random() > 0.3 ? "connected" : "error",
            lastTested: "Just now",
            responseTime: `${(Math.random() * 2 + 0.5).toFixed(1)}s`
          } 
        : conn
    ));

    setTestingConnection(null);
  };

  const handleWizardNext = () => {
    if (wizardStep < 3) {
      setWizardStep(wizardStep + 1);
    } else {
      const newConn: DataSourceConnection = {
        id: Date.now().toString(),
        name: newConnection.name,
        provider: newConnection.provider,
        status: "disconnected",
        priority: connections.length + 1,
        lastTested: "Never",
        requestsToday: 0,
        requestsLimit: 1000,
        responseTime: "N/A",
        uptime: "N/A",
        credentials: {
          apiKey: newConnection.apiKey,
          endpoint: newConnection.endpoint,
          username: newConnection.username,
          password: newConnection.password
        }
      };
      
      setConnections([...connections, newConn]);
      setShowWizard(false);
      setWizardStep(1);
      setNewConnection({
        name: "",
        provider: "",
        apiKey: "",
        endpoint: "",
        username: "",
        password: ""
      });
    }
  };

  const updatePriority = (connectionId: string, direction: "up" | "down") => {
    setConnections(prev => {
      const sorted = [...prev].sort((a, b) => a.priority - b.priority);
      const index = sorted.findIndex(conn => conn.id === connectionId);
      
      if ((direction === "up" && index > 0) || (direction === "down" && index < sorted.length - 1)) {
        const targetIndex = direction === "up" ? index - 1 : index + 1;
        
        const temp = sorted[index].priority;
        sorted[index].priority = sorted[targetIndex].priority;
        sorted[targetIndex].priority = temp;
      }
      
      return sorted;
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">API Configuration</h1>
          <p className="text-gray-600 mt-1">
            Manage data sources, API keys, webhooks, and integrations
          </p>
        </div>
        <div className="flex space-x-2">
          {activeTab === "data-sources" && (
            <Dialog open={showWizard} onOpenChange={setShowWizard}>
              <DialogTrigger asChild>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Data Source
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Data Source Connection</DialogTitle>
                  <DialogDescription>
                    Step {wizardStep} of 3: Connect to a new data source
                  </DialogDescription>
                </DialogHeader>
                
                <div className="py-6">
                  {wizardStep === 1 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Select Data Provider</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {availableProviders.map((provider) => (
                          <button
                            key={provider.value}
                            className={`p-4 border rounded-lg text-left hover:bg-gray-50 ${
                              newConnection.provider === provider.value ? 'border-purple-500 bg-purple-50' : 'border-gray-200'
                            }`}
                            onClick={() => setNewConnection({ ...newConnection, provider: provider.value, name: provider.label })}
                          >
                            <div className="font-medium">{provider.label}</div>
                            <div className="text-sm text-gray-600 mt-1">{provider.description}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {wizardStep === 2 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Connection Details</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Connection Name</label>
                          <Input
                            value={newConnection.name}
                            onChange={(e) => setNewConnection({ ...newConnection, name: e.target.value })}
                            placeholder="My API Connection"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">API Endpoint</label>
                          <Input
                            value={newConnection.endpoint}
                            onChange={(e) => setNewConnection({ ...newConnection, endpoint: e.target.value })}
                            placeholder="https://api.example.com/v1"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {wizardStep === 3 && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Authentication</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">API Key</label>
                          <Input
                            type="password"
                            value={newConnection.apiKey}
                            onChange={(e) => setNewConnection({ ...newConnection, apiKey: e.target.value })}
                            placeholder="Enter your API key"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Username (Optional)</label>
                            <Input
                              value={newConnection.username}
                              onChange={(e) => setNewConnection({ ...newConnection, username: e.target.value })}
                              placeholder="Username"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password (Optional)</label>
                            <Input
                              type="password"
                              value={newConnection.password}
                              onChange={(e) => setNewConnection({ ...newConnection, password: e.target.value })}
                              placeholder="Password"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => wizardStep > 1 ? setWizardStep(wizardStep - 1) : setShowWizard(false)}
                  >
                    {wizardStep > 1 ? "Previous" : "Cancel"}
                  </Button>
                  <Button onClick={handleWizardNext}>
                    {wizardStep < 3 ? "Next" : "Add Connection"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
          {activeTab === "api-keys" && (
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Create API Key
            </Button>
          )}
        </div>
      </div>

      {/* KPI Cards */}
      {activeTab === "data-sources" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Database className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Connections</p>
                <p className="text-2xl font-bold">{connections.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Sources</p>
                <p className="text-2xl font-bold">
                  {connections.filter(c => c.status === "connected").length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Zap className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Requests Today</p>
                <p className="text-2xl font-bold">
                  {connections.reduce((sum, c) => sum + c.requestsToday, 0).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Globe className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg Response Time</p>
                <p className="text-2xl font-bold">1.0s</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
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
      )}

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
        <button
          onClick={() => setActiveTab("data-sources")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            activeTab === "data-sources"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <Database className="w-4 h-4 inline mr-2" />
          Data Sources ({connections.length})
        </button>
        <button
           onClick={() => setActiveTab("api-keys")}
           className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
             activeTab === "api-keys"
               ? "bg-white text-gray-900 shadow-sm"
               : "text-gray-600 hover:text-gray-900"
           }`}
         >
           <Key className="w-4 h-4 inline mr-2" />
           API Keys ({apiKeysData.length})
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
      {activeTab === "data-sources" && (
        <div className="space-y-6">
          <div className="grid gap-4">
            {connections.sort((a, b) => a.priority - b.priority).map((connection) => {
              const StatusIcon = getStatusIcon(connection.status);
              return (
                <div key={connection.id} className="bg-white rounded-lg border p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${getStatusColor(connection.status)}`}>
                        <StatusIcon className={`w-5 h-5 ${
                          testingConnection === connection.id ? 'animate-spin' : ''
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{connection.name}</h3>
                        <p className="text-sm text-gray-600">{connection.provider} • Priority {connection.priority}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updatePriority(connection.id, "up")}
                        disabled={connection.priority === 1}
                      >
                        <ArrowUpDownIcon className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => testConnection(connection.id)}
                        disabled={testingConnection === connection.id}
                      >
                        <TestTube className="w-4 h-4 mr-2" />
                        {testingConnection === connection.id ? 'Testing...' : 'Test'}
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="w-4 h-4 mr-2" />
                            Edit Connection
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Settings className="w-4 h-4 mr-2" />
                            Configure
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="w-4 h-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div>
                      <p className="text-xs text-gray-500">Status</p>
                      <p className={`text-sm font-medium capitalize ${getStatusColor(connection.status)}`}>
                        {connection.status}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Requests Today</p>
                      <p className="text-sm font-medium">
                        {connection.requestsToday.toLocaleString()} / {connection.requestsLimit.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Response Time</p>
                      <p className="text-sm font-medium">{connection.responseTime}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Uptime</p>
                      <p className="text-sm font-medium">{connection.uptime}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-xs text-gray-500">API Key</p>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-mono">
                              {showCredentials[connection.id] 
                                ? connection.credentials.apiKey 
                                : connection.credentials.apiKey?.replace(/./g, '•')}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setShowCredentials(prev => ({
                                ...prev,
                                [connection.id]: !prev[connection.id]
                              }))}
                            >
                              {showCredentials[connection.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </Button>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Endpoint</p>
                          <p className="text-sm font-mono">{connection.credentials.endpoint}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Last Tested</p>
                        <p className="text-sm">{connection.lastTested}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeTab === "api-keys" && (
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
