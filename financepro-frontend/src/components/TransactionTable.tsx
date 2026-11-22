import { Search, Trash2 } from 'lucide-react';
import { Transaction } from '../types';

interface Props { transactions: Transaction[]; suche: string; setSuche: (v: string) => void; filter: string; setFilter: (v: string) => void; onDelete: (id: number) => void; }

export default function TransactionTable({ transactions, suche, setSuche, filter, setFilter, onDelete }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div className="p-5 flex flex-col md:flex-row justify-between gap-3">
        <h3 className="font-semibold">Letzte Transaktionen</h3>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
            <input value={suche} onChange={e => setSuche(e.target.value)} placeholder="Suche..." className="pl-9 pr-3 py-2 border rounded-lg text-sm w-48 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex bg-slate-100 rounded-lg p-1">
            {['Alle', 'Einnahme', 'Ausgabe'].map(f => (
              <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 rounded-md text-sm font-medium ${filter === f ? 'bg-white shadow' : 'text-slate-500'}`}>{f}</button>
            ))}
          </div>
        </div>
      </div>
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-slate-500"><tr><th className="text-left px-5 py-3 font-medium">Beschreibung</th><th className="text-left px-5 py-3 font-medium">Kategorie</th><th className="text-left px-5 py-3 font-medium">Datum</th><th className="text-right px-5 py-3 font-medium">Betrag</th><th className="px-5 py-3"></th></tr></thead>
        <tbody>
          {transactions.map(t => (
            <tr key={t.id} className="border-t border-slate-100 hover:bg-slate-50">
              <td className="px-5 py-3 font-medium">{t.beschreibung}</td>
              <td className="px-5 py-3"><span className="bg-slate-100 px-2 py-1 rounded-full text-xs">{t.kategorie}</span></td>
              <td className="px-5 py-3 text-slate-500">{t.datum}</td>
              <td className={`px-5 py-3 text-right font-bold ${t.betrag >= 0 ? 'text-green-600' : 'text-red-600'}`}>{t.betrag >= 0 ? '+' : ''}{t.betrag.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €</td>
              <td className="px-5 py-3 text-right"><button onClick={() => onDelete(t.id)} className="text-slate-400 hover:text-red-600"><Trash2 size={16} /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}