import { Download, Plus } from 'lucide-react';

export default function Header({ onAdd, onExport }: { onAdd: () => void; onExport: () => void }) {
  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Willkommen zurück, Muhammad 👋</h1>
        <p className="text-slate-500 text-sm mt-1">Hier ist deine Finanzübersicht für November 2026 • Stuttgart</p>
      </div>
      <div className="flex gap-2">
        <button onClick={onExport} className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50">
          <Download size={16} /> CSV Export
        </button>
        <button onClick={onAdd} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
          <Plus size={16} /> Neue Buchung
        </button>
      </div>
    </header>
  );
}