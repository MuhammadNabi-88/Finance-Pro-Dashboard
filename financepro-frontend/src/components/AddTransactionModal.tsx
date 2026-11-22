import { X } from 'lucide-react';
import { useState } from 'react';

export default function AddTransactionModal({ onClose, onAdd }: { onClose: () => void; onAdd: (d: any) => void }) {
  const [form, setForm] = useState({ beschreibung: '', betrag: '', kategorie: 'Gehalt', art: 'Einnahme' as 'Einnahme' | 'Ausgabe' });
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-lg">Neue Buchung</h3><button onClick={onClose}><X size={20} /></button></div>
        <div className="space-y-3">
          <input placeholder="Beschreibung z.B. Gehalt" value={form.beschreibung} onChange={e => setForm({ ...form, beschreibung: e.target.value })} className="w-full border rounded-lg px-3 py-2.5 text-sm" />
          <input placeholder="Betrag" type="number" value={form.betrag} onChange={e => setForm({ ...form, betrag: e.target.value })} className="w-full border rounded-lg px-3 py-2.5 text-sm" />
          <select value={form.kategorie} onChange={e => setForm({ ...form, kategorie: e.target.value })} className="w-full border rounded-lg px-3 py-2.5 text-sm"><option>Gehalt</option><option>Lebensmittel</option><option>Miete</option><option>Freelance</option><option>Transport</option></select>
          <div className="flex gap-2">
            <button onClick={() => setForm({ ...form, art: 'Einnahme' })} className={`flex-1 py-2 rounded-lg text-sm font-medium ${form.art === 'Einnahme' ? 'bg-green-100 text-green-700' : 'bg-slate-100'}`}>Einnahme</button>
            <button onClick={() => setForm({ ...form, art: 'Ausgabe' })} className={`flex-1 py-2 rounded-lg text-sm font-medium ${form.art === 'Ausgabe' ? 'bg-red-100 text-red-700' : 'bg-slate-100'}`}>Ausgabe</button>
          </div>
          <button onClick={() => onAdd(form)} className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium">Hinzufügen</button>
        </div>
      </div>
    </div>
  );
}