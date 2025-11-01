"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

type Plan = {
  name: string;
  price: string;
  quota: string;
  features: string[];
};

const initialPlans: Plan[] = [
  { name: "Per-Report", price: "$2/report", quota: "Unlimited", features: ["On-demand", "No commitment"] },
  { name: "Dealer Package", price: "$299/mo", quota: "10K reports", features: ["Dashboard access", "Priority support"] },
  { name: "API Access", price: "$499/mo", quota: "250K calls", features: ["Rate limits", "Keys management"] },
];

export default function AdminPackagesPage() {
  const [plans, setPlans] = useState<Plan[]>(initialPlans);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    price: "",
    quota: "",
    featuresText: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const resetForm = () => {
    setForm({ name: "", price: "", quota: "", featuresText: "" });
    setEditingIndex(null);
  };

  const startAdd = () => {
    setEditingIndex(null);
    setForm({ name: "", price: "", quota: "", featuresText: "" });
    setIsOpen(true);
  };

  const startEdit = (index: number) => {
    const p = plans[index];
    setEditingIndex(index);
    setForm({
      name: p.name,
      price: p.price,
      quota: p.quota,
      featuresText: p.features.join(", "),
    });
    setIsOpen(true);
  };

  const onSubmit = () => {
    const features = form.featuresText
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const next: Plan = {
      name: form.name.trim(),
      price: form.price.trim(),
      quota: form.quota.trim(),
      features,
    };

    if (!next.name || !next.price || !next.quota) return;

    if (editingIndex === null) {
      setPlans((prev) => [next, ...prev]);
    } else {
      setPlans((prev) => prev.map((p, i) => (i === editingIndex ? next : p)));
    }
    resetForm();
    setIsOpen(false);
  };

  const onDelete = (index: number) => {
    setPlans((prev) => prev.filter((_, i) => i !== index));
    if (editingIndex === index) resetForm();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Packages & Plans</h2>
        <Button onClick={startAdd} variant="default" className="gap-2">
          <Plus className="h-4 w-4" /> Add New
        </Button>
      </div>

      {/* Modal for Add/Edit */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {editingIndex === null ? "Add Package" : "Edit Package"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Input
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />
            <Input
              placeholder="Price"
              value={form.price}
              onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
            />
            <Input
              placeholder="Quota"
              value={form.quota}
              onChange={(e) => setForm((f) => ({ ...f, quota: e.target.value }))}
            />
            <Input
              placeholder="Features (comma separated)"
              value={form.featuresText}
              onChange={(e) => setForm((f) => ({ ...f, featuresText: e.target.value }))}
            />
          </div>
          <DialogFooter>
            {editingIndex !== null && (
              <Button variant="outline" onClick={() => { resetForm(); setIsOpen(false); }}>
                Cancel
              </Button>
            )}
            <Button onClick={onSubmit}>
              {editingIndex === null ? "Add" : "Save Changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((p, idx) => (
          <div key={`${p.name}-${idx}`} className="bg-white border rounded-xl p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-1 text-2xl font-bold">{p.price}</div>
                <div className="text-sm text-gray-600">Quota: {p.quota}</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex flex-wrap gap-2">
                {p.features.length ? (
                  p.features.map((f) => (
                    <span
                      key={f}
                      className="rounded bg-purple-100 px-2 py-0.5 text-xs text-purple-700"
                    >
                      {f}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500 text-sm">—</span>
                )}
              </div>
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <Button variant="outline" onClick={() => startEdit(idx)}>Edit</Button>
              <Button variant="destructive" onClick={() => onDelete(idx)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}