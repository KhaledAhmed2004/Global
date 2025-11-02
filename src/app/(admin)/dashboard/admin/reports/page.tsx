"use client";

import * as React from "react";
import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { 
  Filter, 
  Download, 
  ArrowUpDown, 
  MoreHorizontal, 
  Plus,
  FileText,
  Calendar,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  Trash2,
  RefreshCw,
  Settings,
  Upload,
  FileSpreadsheet,
  FilePdf,
  Mail,
  Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { DataTable } from "@/components/ui/data-table";

type Report = {
  id: string;
  vin: string;
  franchise: string;
  date: string;
  status: "Generated" | "Pending" | "Failed" | "Processing";
  type: "Standard" | "Premium" | "Custom" | "Bulk";
  requestedBy: string;
  completedAt?: string;
  downloadCount: number;
  size: string;
  format: "PDF" | "JSON" | "XML";
  cost: number;
};

type ReportTemplate = {
  id: string;
  name: string;
  description: string;
  fields: string[];
  format: "PDF" | "JSON" | "XML";
  isActive: boolean;
  usageCount: number;
  createdAt: string;
};

type BulkOperation = {
  id: string;
  name: string;
  status: "Running" | "Completed" | "Failed" | "Queued";
  progress: number;
  totalReports: number;
  completedReports: number;
  failedReports: number;
  startedAt: string;
  estimatedCompletion?: string;
};

const data: Report[] = [
  {
    id: "RPT-1001",
    vin: "1HGCM82633A004352",
    franchise: "TechCorp Solutions",
    date: "2025-10-30",
    status: "Generated",
    type: "Premium",
    requestedBy: "john.doe@techcorp.com",
    completedAt: "2025-10-30 14:32:15",
    downloadCount: 3,
    size: "2.4 MB",
    format: "PDF",
    cost: 15.99,
  },
  {
    id: "RPT-1000",
    vin: "2HGFA16528H123456",
    franchise: "GreenTech Innovations",
    date: "2025-10-29",
    status: "Processing",
    type: "Standard",
    requestedBy: "sarah.smith@greentech.com",
    downloadCount: 0,
    size: "1.8 MB",
    format: "PDF",
    cost: 9.99,
  },
  {
    id: "RPT-0999",
    vin: "3VWFE21C04M000001",
    franchise: "Digital Dynamics",
    date: "2025-10-29",
    status: "Failed",
    type: "Custom",
    requestedBy: "mike.johnson@digitaldyn.com",
    downloadCount: 0,
    size: "0 MB",
    format: "JSON",
    cost: 0,
  },
  {
    id: "RPT-0998",
    vin: "BULK-OPERATION-001",
    franchise: "Multiple Franchises",
    date: "2025-10-28",
    status: "Generated",
    type: "Bulk",
    requestedBy: "admin@globalvin.com",
    completedAt: "2025-10-28 16:45:22",
    downloadCount: 1,
    size: "45.2 MB",
    format: "PDF",
    cost: 299.99,
  },
];

const reportTemplates: ReportTemplate[] = [
  {
    id: "tpl_001",
    name: "Standard Vehicle Report",
    description: "Basic vehicle information and history",
    fields: ["VIN", "Make", "Model", "Year", "Accident History", "Service Records"],
    format: "PDF",
    isActive: true,
    usageCount: 1247,
    createdAt: "2024-01-15",
  },
  {
    id: "tpl_002",
    name: "Premium Detailed Report",
    description: "Comprehensive vehicle analysis with market value",
    fields: ["VIN", "Make", "Model", "Year", "Accident History", "Service Records", "Market Value", "Ownership History", "Recalls"],
    format: "PDF",
    isActive: true,
    usageCount: 892,
    createdAt: "2024-02-01",
  },
  {
    id: "tpl_003",
    name: "API Integration Report",
    description: "Machine-readable format for system integration",
    fields: ["VIN", "Make", "Model", "Year", "Status", "Metadata"],
    format: "JSON",
    isActive: true,
    usageCount: 2156,
    createdAt: "2024-01-20",
  },
];

const bulkOperations: BulkOperation[] = [
  {
    id: "bulk_001",
    name: "Monthly Franchise Reports",
    status: "Completed",
    progress: 100,
    totalReports: 150,
    completedReports: 148,
    failedReports: 2,
    startedAt: "2025-10-28 09:00:00",
    estimatedCompletion: "2025-10-28 16:45:22",
  },
  {
    id: "bulk_002",
    name: "Q4 Analytics Batch",
    status: "Running",
    progress: 65,
    totalReports: 300,
    completedReports: 195,
    failedReports: 0,
    startedAt: "2025-10-30 08:30:00",
    estimatedCompletion: "2025-10-30 18:15:00",
  },
  {
    id: "bulk_003",
    name: "Partner Integration Test",
    status: "Queued",
    progress: 0,
    totalReports: 50,
    completedReports: 0,
    failedReports: 0,
    startedAt: "2025-10-30 15:00:00",
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
    cell: ({ row }) => (
      <div className="max-w-[120px]">
        <div className="font-medium flex items-center gap-2">
          <FileText className="w-4 h-4" />
          {row.getValue("id") as string}
        </div>
        <div className="text-xs text-gray-500">{row.original.type}</div>
      </div>
    ),
  },
  {
    accessorKey: "vin",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        VIN / Identifier
        <ArrowUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="max-w-[180px]">
        <div className="font-mono text-sm">{row.getValue("vin") as string}</div>
        <div className="text-xs text-gray-500">
          {row.original.format} • {row.original.size}
        </div>
      </div>
    ),
  },
  {
    accessorKey: "franchise",
    header: "Franchise",
    cell: ({ row }) => (
      <div className="max-w-[150px]">
        <div className="font-medium">{row.getValue("franchise") as string}</div>
        <div className="text-xs text-gray-500">{row.original.requestedBy}</div>
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <div className="text-sm">
        <div>{row.getValue("date") as string}</div>
        {row.original.completedAt && (
          <div className="text-xs text-gray-500">
            Completed: {row.original.completedAt.split(' ')[1]}
          </div>
        )}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      const getStatusConfig = (status: string) => {
        switch (status) {
          case "Generated":
            return { icon: CheckCircle, class: "bg-green-100 text-green-700" };
          case "Processing":
            return { icon: Clock, class: "bg-blue-100 text-blue-700" };
          case "Pending":
            return { icon: AlertCircle, class: "bg-yellow-100 text-yellow-700" };
          case "Failed":
            return { icon: XCircle, class: "bg-red-100 text-red-700" };
          default:
            return { icon: Clock, class: "bg-gray-100 text-gray-700" };
        }
      };
      
      const { icon: Icon, class: className } = getStatusConfig(status);
      
      return (
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${className}`}>
            <Icon className="w-3 h-3" />
            {status}
          </span>
          {row.original.downloadCount > 0 && (
            <span className="text-xs text-gray-500">
              {row.original.downloadCount} downloads
            </span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "cost",
    header: "Cost",
    cell: ({ row }) => (
      <div className="text-sm font-medium">
        ${row.original.cost.toFixed(2)}
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
            <Eye className="w-4 h-4 mr-2" />
            View Report
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled={row.original.status !== "Generated"}>
            <Download className="w-4 h-4 mr-2" />
            Download {row.original.format}
          </DropdownMenuItem>
          <DropdownMenuItem disabled={row.original.status !== "Generated"}>
            <Mail className="w-4 h-4 mr-2" />
            Email Report
          </DropdownMenuItem>
          <DropdownMenuItem disabled={row.original.status !== "Generated"}>
            <Share2 className="w-4 h-4 mr-2" />
            Share Link
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled={row.original.status === "Processing"}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Regenerate
          </DropdownMenuItem>
          <DropdownMenuItem className="text-red-600">
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export default function AdminReportsPage() {
  const [activeTab, setActiveTab] = useState("reports");
  const [selectedReports, setSelectedReports] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleBulkAction = (action: string) => {
    console.log(`Performing ${action} on reports:`, selectedReports);
    // Implement bulk actions
  };

  const handleGenerateReport = () => {
    setIsGenerating(true);
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Running":
        return <Clock className="w-4 h-4 text-blue-600" />;
      case "Completed":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "Failed":
        return <XCircle className="w-4 h-4 text-red-600" />;
      case "Queued":
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Report Management</h2>
        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Generate Custom Report</DialogTitle>
                <DialogDescription>
                  Create a new report with custom parameters and data sources.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Report Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard Report</SelectItem>
                        <SelectItem value="premium">Premium Report</SelectItem>
                        <SelectItem value="custom">Custom Report</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Output Format</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="json">JSON</SelectItem>
                        <SelectItem value="xml">XML</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">VIN Numbers</label>
                  <textarea
                    className="w-full p-3 border rounded-md resize-none"
                    rows={4}
                    placeholder="Enter VIN numbers (one per line or comma-separated)"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Template</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select template" />
                    </SelectTrigger>
                    <SelectContent>
                      {reportTemplates.map((template) => (
                        <SelectItem key={template.id} value={template.id}>
                          {template.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button onClick={handleGenerateReport} disabled={isGenerating}>
                    {isGenerating ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <FileText className="w-4 h-4 mr-2" />
                        Generate Report
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            Bulk Upload
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="bulk">Bulk Operations</TabsTrigger>
        </TabsList>

        <TabsContent value="reports" className="space-y-4">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Total Reports</p>
                  <p className="text-2xl font-bold">1,247</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-600">This Month</p>
                  <p className="text-2xl font-bold">342</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-600" />
                <div>
                  <p className="text-sm text-gray-600">Processing</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                <div>
                  <p className="text-sm text-gray-600">Failed</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filters and Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Input placeholder="Search reports..." className="w-64" />
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="generated">Generated</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                  <SelectItem value="bulk">Bulk</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => handleBulkAction("download")}>
                <Download className="w-4 h-4 mr-2" />
                Export Selected
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleBulkAction("delete")}>
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Selected
              </Button>
            </div>
          </div>

          <DataTable
            columns={columns}
            data={data}
            filterColumnId="vin"
            filterPlaceholder="Search reports..."
          />
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Report Templates</h3>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Create Template
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reportTemplates.map((template) => (
              <div key={template.id} className="bg-white p-4 rounded-lg border">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium">{template.name}</h4>
                    <p className="text-sm text-gray-600">{template.description}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Edit Template</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-medium">{template.format}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Usage:</span>
                    <span className="font-medium">{template.usageCount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Status:</span>
                    <span className={`px-2 py-1 rounded text-xs ${template.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                      {template.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t">
                  <div className="flex flex-wrap gap-1">
                    {template.fields.slice(0, 3).map((field, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                        {field}
                      </span>
                    ))}
                    {template.fields.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        +{template.fields.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="bulk" className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Bulk Operations</h3>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              New Bulk Operation
            </Button>
          </div>

          <div className="space-y-4">
            {bulkOperations.map((operation) => (
              <div key={operation.id} className="bg-white p-4 rounded-lg border">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(operation.status)}
                    <div>
                      <h4 className="font-medium">{operation.name}</h4>
                      <p className="text-sm text-gray-600">
                        {operation.completedReports} of {operation.totalReports} reports
                        {operation.failedReports > 0 && ` • ${operation.failedReports} failed`}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs ${
                      operation.status === "Completed" ? "bg-green-100 text-green-700" :
                      operation.status === "Running" ? "bg-blue-100 text-blue-700" :
                      operation.status === "Failed" ? "bg-red-100 text-red-700" :
                      "bg-yellow-100 text-yellow-700"
                    }`}>
                      {operation.status}
                    </span>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Download Results</DropdownMenuItem>
                        {operation.status === "Failed" && (
                          <DropdownMenuItem>Retry Failed</DropdownMenuItem>
                        )}
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Cancel/Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                
                {operation.status === "Running" && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress: {operation.progress}%</span>
                      {operation.estimatedCompletion && (
                        <span className="text-gray-600">
                          ETA: {operation.estimatedCompletion.split(' ')[1]}
                        </span>
                      )}
                    </div>
                    <Progress value={operation.progress} className="h-2" />
                  </div>
                )}
                
                <div className="mt-3 pt-3 border-t grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Started:</span>
                    <div className="font-medium">{operation.startedAt}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Total Reports:</span>
                    <div className="font-medium">{operation.totalReports}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Success Rate:</span>
                    <div className="font-medium">
                      {operation.totalReports > 0 
                        ? Math.round((operation.completedReports / operation.totalReports) * 100)
                        : 0}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
