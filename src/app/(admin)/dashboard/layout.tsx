"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Activity,
  Settings,
  Search,
  Bell,
  ChevronDown,
  Users,
  FileText,
  Package,
  Key,
  Building2,
  TrendingUp,
} from "lucide-react";

export default function AIDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const sidebarItems = [
    { icon: BarChart3, label: "Overview", href: "/dashboard/overview" },
    {
      icon: Building2,
      label: "Franchises",
      href: "/dashboard/admin/franchises",
    },
    { icon: FileText, label: "Reports", href: "/dashboard/admin/reports" },
    {
      icon: TrendingUp,
      label: "Analytics & Reporting",
      href: "/dashboard/admin/analytics",
    },
    {
      icon: Package,
      label: "Packages & Plans",
      href: "/dashboard/admin/packages",
    },
    { icon: Key, label: "API Access", href: "/dashboard/admin/api" },
    {
      icon: Activity,
      label: "Resellers/Dealers",
      href: "/dashboard/admin/resellers",
    },
    { icon: Users, label: "Users & Roles", href: "/dashboard/admin/users" },
    { icon: Users, label: "Legal Documents", href: "/dashboard/admin/legal-documents" },
    { icon: Settings, label: "Settings", href: "/dashboard/admin/settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold">Dashboard</span>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item, index) => {
              const isActive =
                pathname === item.href || pathname?.startsWith(item.href);
              return (
                <Link
                  key={index}
                  href={item.href}
                  prefetch={false}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-purple-100 text-purple-700"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Admin and AI operations overview</p>
            </div>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Notifications */}
              <Link
                href="/dashboard/notifications"
                className={`p-2 rounded-lg transition-colors ${
                  pathname === "/dashboard/notifications"
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Bell className="w-5 h-5" />
              </Link>

              {/* Profile */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">JD</span>
                </div>
                <span className="text-sm font-medium">John Doe</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Main children */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
