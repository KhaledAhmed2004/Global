"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  DollarSign,
  Plus,
  Edit,
  Trash2,
  Percent,
  Package,
  Ticket,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const packages = [
  {
    id: 1,
    name: "Basic Report",
    price: 24.99,
    currency: "USD",
    features: ["Vehicle Specs", "Accident History", "Title Check"],
    status: "active",
    sold: 1245,
  },
  {
    id: 2,
    name: "Premium Report",
    price: 49.99,
    currency: "USD",
    features: [
      "Everything in Basic",
      "Market Value",
      "Recall Info",
      "Ownership History",
    ],
    status: "active",
    sold: 987,
  },
  {
    id: 3,
    name: "Enterprise Report",
    price: 99.99,
    currency: "USD",
    features: [
      "Everything in Premium",
      "Fraud Detection",
      "Service Records",
      "Priority Support",
    ],
    status: "active",
    sold: 615,
  },
];

const discountCodes = [
  {
    id: 1,
    code: "WELCOME10",
    discount: "10%",
    uses: 234,
    maxUses: 500,
    expires: "2025-12-31",
    status: "active",
  },
  {
    id: 2,
    code: "SUMMER25",
    discount: "25%",
    uses: 89,
    maxUses: 200,
    expires: "2025-11-30",
    status: "active",
  },
  {
    id: 3,
    code: "VIP50",
    discount: "50%",
    uses: 12,
    maxUses: 50,
    expires: "2025-12-31",
    status: "active",
  },
];

export default function PricingPackages() {
  const [showPackageDialog, setShowPackageDialog] = useState(false);
  const [showDiscountDialog, setShowDiscountDialog] = useState(false);
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl">Pricing & Packages</h1>
          <p className="text-gray-500 mt-1">
            Manage pricing, packages, and discount codes
          </p>
        </div>
        <div className="flex gap-3">
          <Select value={currency} onValueChange={setCurrency}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">USD ($)</SelectItem>
              <SelectItem value="EUR">EUR (€)</SelectItem>
              <SelectItem value="GBP">GBP (£)</SelectItem>
              <SelectItem value="JPY">JPY (¥)</SelectItem>
              <SelectItem value="AUD">AUD ($)</SelectItem>
              <SelectItem value="CAD">CAD ($)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Packages</p>
                <p className="text-3xl mt-2">3</p>
              </div>
              <Package className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Revenue</p>
                <p className="text-3xl mt-2">$42,850</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Discounts</p>
                <p className="text-3xl mt-2">3</p>
              </div>
              <Percent className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Avg. Order Value</p>
                <p className="text-3xl mt-2">$48.50</p>
              </div>
              <DollarSign className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Packages */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Report Packages</CardTitle>
              <CardDescription>
                Manage your pricing packages and features
              </CardDescription>
            </div>
            <Dialog
              open={showPackageDialog}
              onOpenChange={setShowPackageDialog}
            >
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  Create Package
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create Custom Package</DialogTitle>
                  <DialogDescription>
                    Set up a new pricing package
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="package-name">Package Name</Label>
                    <Input id="package-name" placeholder="e.g., Premium Plus" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Price</Label>
                      <Input id="price" type="number" placeholder="49.99" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="package-currency">Currency</Label>
                      <Select defaultValue="USD">
                        <SelectTrigger id="package-currency">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USD">USD</SelectItem>
                          <SelectItem value="EUR">EUR</SelectItem>
                          <SelectItem value="GBP">GBP</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="features">Features (one per line)</Label>
                    <Textarea
                      id="features"
                      placeholder="Vehicle History&#10;Accident Reports&#10;Market Value"
                      rows={5}
                    />
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <Label>Enable Package</Label>
                      <p className="text-sm text-gray-500">
                        Make this package available for purchase
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Button className="w-full">Create Package</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="relative">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{pkg.name}</CardTitle>
                      <div className="mt-2">
                        <span className="text-3xl">${pkg.price}</span>
                        <span className="text-gray-500 ml-1">
                          /{pkg.currency}
                        </span>
                      </div>
                    </div>
                    <Badge>{pkg.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <span className="text-green-600 text-xs">✓</span>
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      {pkg.sold} reports sold
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Discount Codes */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Discount Codes</CardTitle>
              <CardDescription>
                Create and manage promotional discount codes
              </CardDescription>
            </div>
            <Dialog
              open={showDiscountDialog}
              onOpenChange={setShowDiscountDialog}
            >
              <DialogTrigger asChild>
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  Create Discount
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create Discount Code</DialogTitle>
                  <DialogDescription>
                    Set up a promotional discount code
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="code">Discount Code</Label>
                    <Input id="code" placeholder="e.g., SUMMER25" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="discount-type">Discount Type</Label>
                      <Select defaultValue="percentage">
                        <SelectTrigger id="discount-type">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="percentage">Percentage</SelectItem>
                          <SelectItem value="fixed">Fixed Amount</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="discount-value">Value</Label>
                      <Input
                        id="discount-value"
                        type="number"
                        placeholder="25"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="max-uses">Max Uses</Label>
                      <Input id="max-uses" type="number" placeholder="100" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expires">Expiry Date</Label>
                      <Input id="expires" type="date" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <Label>Active</Label>
                      <p className="text-sm text-gray-500">
                        Enable this discount code
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <Button className="w-full">Create Discount Code</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Discount</TableHead>
                <TableHead>Uses</TableHead>
                <TableHead>Max Uses</TableHead>
                <TableHead>Expires</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {discountCodes.map((code) => (
                <TableRow key={code.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Ticket className="w-4 h-4 text-gray-400" />
                      <code className="px-2 py-1 bg-gray-100 rounded">
                        {code.code}
                      </code>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{code.discount}</Badge>
                  </TableCell>
                  <TableCell>{code.uses}</TableCell>
                  <TableCell>{code.maxUses}</TableCell>
                  <TableCell className="text-gray-500">
                    {code.expires}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        code.status === "active" ? "default" : "secondary"
                      }
                    >
                      {code.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
