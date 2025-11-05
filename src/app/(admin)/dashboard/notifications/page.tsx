"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, CheckCheck, Trash2, Settings, Filter, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";

const notifications = [
  {
    id: 1,
    type: "report",
    title: "New Report Generated",
    message:
      "Premium VIN Report for customer John Smith has been successfully generated.",
    time: "5 minutes ago",
    read: false,
    priority: "normal",
  },
  {
    id: 2,
    type: "payment",
    title: "Payment Received",
    message:
      "Payment of $149.00 received from Sarah Johnson for Premium Package.",
    time: "15 minutes ago",
    read: false,
    priority: "high",
  },
  {
    id: 3,
    type: "customer",
    title: "New Customer Registration",
    message: "Mike Brown has registered as a new customer on your platform.",
    time: "1 hour ago",
    read: false,
    priority: "normal",
  },
  {
    id: 4,
    type: "system",
    title: "API Rate Limit Warning",
    message:
      "You have reached 80% of your daily API rate limit. Consider upgrading your plan.",
    time: "2 hours ago",
    read: true,
    priority: "high",
  },
  {
    id: 5,
    type: "support",
    title: "Support Ticket Resolved",
    message:
      "Your support ticket #4521 has been resolved. Please review the solution.",
    time: "3 hours ago",
    read: true,
    priority: "normal",
  },
  {
    id: 6,
    type: "report",
    title: "Monthly Report Summary",
    message:
      "Your monthly report summary for June 2024 is now available for download.",
    time: "5 hours ago",
    read: true,
    priority: "low",
  },
  {
    id: 7,
    type: "system",
    title: "System Maintenance Scheduled",
    message:
      "Scheduled maintenance on Nov 10, 2024 from 2:00 AM to 4:00 AM EST.",
    time: "1 day ago",
    read: true,
    priority: "normal",
  },
  {
    id: 8,
    type: "payment",
    title: "Invoice Generated",
    message:
      "Invoice #INV-2847 for $299.00 has been generated and sent to your email.",
    time: "2 days ago",
    read: true,
    priority: "normal",
  },
];

const getNotificationIcon = (type: string) => {
  const iconClass = "w-10 h-10 rounded-xl flex items-center justify-center";
  switch (type) {
    case "report":
      return (
        <div className={`${iconClass} bg-blue-50`}>
          <Bell className="w-5 h-5 text-blue-600" />
        </div>
      );
    case "payment":
      return (
        <div className={`${iconClass} bg-green-50`}>
          <Bell className="w-5 h-5 text-green-600" />
        </div>
      );
    case "customer":
      return (
        <div className={`${iconClass} bg-purple-50`}>
          <Bell className="w-5 h-5 text-purple-600" />
        </div>
      );
    case "system":
      return (
        <div className={`${iconClass} bg-orange-50`}>
          <Bell className="w-5 h-5 text-orange-600" />
        </div>
      );
    case "support":
      return (
        <div className={`${iconClass} bg-pink-50`}>
          <Bell className="w-5 h-5 text-pink-600" />
        </div>
      );
    default:
      return (
        <div className={`${iconClass} bg-gray-50`}>
          <Bell className="w-5 h-5 text-gray-600" />
        </div>
      );
  }
};

const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "high":
      return (
        <Badge variant="destructive" className="text-xs">
          High Priority
        </Badge>
      );
    case "low":
      return (
        <Badge variant="outline" className="text-xs">
          Low Priority
        </Badge>
      );
    default:
      return null;
  }
};

export default function Notifications() {
  const [typeFilters, setTypeFilters] = useState<string[]>([]);
  const [priorityFilters, setPriorityFilters] = useState<string[]>([]);

  // Apply filters
  const filteredNotifications = notifications.filter((notification) => {
    const typeMatch =
      typeFilters.length === 0 || typeFilters.includes(notification.type);
    const priorityMatch =
      priorityFilters.length === 0 ||
      priorityFilters.includes(notification.priority);
    return typeMatch && priorityMatch;
  });

  const unreadCount = filteredNotifications.filter((n) => !n.read).length;
  const unreadNotifications = filteredNotifications.filter((n) => !n.read);
  const readNotifications = filteredNotifications.filter((n) => n.read);

  const toggleTypeFilter = (type: string) => {
    setTypeFilters((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const togglePriorityFilter = (priority: string) => {
    setPriorityFilters((prev) =>
      prev.includes(priority)
        ? prev.filter((p) => p !== priority)
        : [...prev, priority]
    );
  };

  const clearAllFilters = () => {
    setTypeFilters([]);
    setPriorityFilters([]);
  };

  const hasActiveFilters = typeFilters.length > 0 || priorityFilters.length > 0;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl">Notifications</h1>
          <p className="text-gray-500 mt-1">
            Stay updated with your latest activities
          </p>
        </div>
        <div className="flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filter
                {hasActiveFilters && (
                  <Badge
                    variant="default"
                    className="ml-1 h-5 w-5 p-0 flex items-center justify-center"
                  >
                    {typeFilters.length + priorityFilters.length}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Filter by Type</DropdownMenuLabel>
              <DropdownMenuCheckboxItem
                checked={typeFilters.includes("report")}
                onCheckedChange={() => toggleTypeFilter("report")}
              >
                Reports
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={typeFilters.includes("payment")}
                onCheckedChange={() => toggleTypeFilter("payment")}
              >
                Payments
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={typeFilters.includes("customer")}
                onCheckedChange={() => toggleTypeFilter("customer")}
              >
                Customers
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={typeFilters.includes("system")}
                onCheckedChange={() => toggleTypeFilter("system")}
              >
                System
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={typeFilters.includes("support")}
                onCheckedChange={() => toggleTypeFilter("support")}
              >
                Support
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Filter by Priority</DropdownMenuLabel>
              <DropdownMenuCheckboxItem
                checked={priorityFilters.includes("high")}
                onCheckedChange={() => togglePriorityFilter("high")}
              >
                High Priority
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={priorityFilters.includes("normal")}
                onCheckedChange={() => togglePriorityFilter("normal")}
              >
                Normal Priority
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={priorityFilters.includes("low")}
                onCheckedChange={() => togglePriorityFilter("low")}
              >
                Low Priority
              </DropdownMenuCheckboxItem>
              {hasActiveFilters && (
                <>
                  <DropdownMenuSeparator />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start gap-2"
                    onClick={clearAllFilters}
                  >
                    <X className="w-4 h-4" />
                    Clear All Filters
                  </Button>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" className="gap-2">
            <CheckCheck className="w-4 h-4" />
            Mark all as read
          </Button>
        </div>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-gray-600">Active filters:</span>
          {typeFilters.map((type) => (
            <Badge key={type} variant="secondary" className="gap-1">
              {type}
              <X
                className="w-3 h-3 cursor-pointer"
                onClick={() => toggleTypeFilter(type)}
              />
            </Badge>
          ))}
          {priorityFilters.map((priority) => (
            <Badge key={priority} variant="secondary" className="gap-1">
              {priority} priority
              <X
                className="w-3 h-3 cursor-pointer"
                onClick={() => togglePriorityFilter(priority)}
              />
            </Badge>
          ))}
          <Button
            variant="ghost"
            size="sm"
            className="h-7"
            onClick={clearAllFilters}
          >
            Clear all
          </Button>
        </div>
      )}

      {/* Notification Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <Bell className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl">{unreadCount}</p>
                <p className="text-sm text-gray-500">Unread Notifications</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                <CheckCheck className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl">{filteredNotifications.length}</p>
                <p className="text-sm text-gray-500">Total Notifications</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                <Bell className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl">
                  {
                    filteredNotifications.filter((n) => n.priority === "high")
                      .length
                  }
                </p>
                <p className="text-sm text-gray-500">High Priority</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notifications List */}
      <Card>
        <Tabs defaultValue="all" className="w-full">
          <div className="border-b px-6 pt-6">
            <TabsList>
              <TabsTrigger value="all">
                All ({filteredNotifications.length})
              </TabsTrigger>
              <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
              <TabsTrigger value="read">
                Read ({readNotifications.length})
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="p-6">
            <div className="space-y-3">
              {filteredNotifications.length > 0 ? (
                filteredNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex items-start gap-4 p-4 rounded-lg border transition-colors hover:bg-gray-50 ${
                      !notification.read
                        ? "bg-blue-50/30 border-blue-200"
                        : "border-gray-200"
                    }`}
                  >
                    {getNotificationIcon(notification.type)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p
                              className={
                                !notification.read ? "font-medium" : ""
                              }
                            >
                              {notification.title}
                            </p>
                            {!notification.read && (
                              <Badge variant="default" className="text-xs">
                                New
                              </Badge>
                            )}
                            {getPriorityBadge(notification.priority)}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            {notification.time}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <CheckCheck className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <Filter className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">
                    No notifications match your filters
                  </p>
                  <Button
                    variant="link"
                    onClick={clearAllFilters}
                    className="mt-2"
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="unread" className="p-6">
            <div className="space-y-3">
              {unreadNotifications.length > 0 ? (
                unreadNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-start gap-4 p-4 rounded-lg border bg-blue-50/30 border-blue-200 transition-colors hover:bg-gray-50"
                  >
                    {getNotificationIcon(notification.type)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{notification.title}</p>
                            <Badge variant="default" className="text-xs">
                              New
                            </Badge>
                            {getPriorityBadge(notification.priority)}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            {notification.time}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <CheckCheck className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <CheckCheck className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No unread notifications</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="read" className="p-6">
            <div className="space-y-3">
              {readNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className="flex items-start gap-4 p-4 rounded-lg border border-gray-200 transition-colors hover:bg-gray-50"
                >
                  {getNotificationIcon(notification.type)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p>{notification.title}</p>
                          {getPriorityBadge(notification.priority)}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          {notification.time}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
