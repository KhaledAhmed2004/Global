"use client";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Settings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-xl p-5">
          <h3 className="font-semibold mb-3">Branding</h3>
          <div className="space-y-3 text-sm">
            <label className="block">
              <span className="text-gray-600">Company Name</span>
              <input className="mt-1 w-full border rounded-lg px-3 py-2" defaultValue="Global VIN" />
            </label>
            <label className="block">
              <span className="text-gray-600">Primary Color</span>
              <input type="color" className="mt-1 w-16 h-10 border rounded" defaultValue="#7c3aed" />
            </label>
          </div>
        </div>

        <div className="bg-white border rounded-xl p-5">
          <h3 className="font-semibold mb-3">Webhooks</h3>
          <div className="space-y-3 text-sm">
            <label className="block">
              <span className="text-gray-600">Webhook URL</span>
              <input className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="https://..." />
            </label>
            <label className="block">
              <span className="text-gray-600">Secret</span>
              <input className="mt-1 w-full border rounded-lg px-3 py-2" placeholder="********" />
            </label>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg">Save Changes</button>
        <button className="px-4 py-2 border rounded-lg">Reset</button>
      </div>
    </div>
  );
}