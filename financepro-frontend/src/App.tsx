import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import DashboardCharts from './components/DashboardCharts';
import TransactionTable from './components/TransactionTable';
import AddTransactionModal from './components/AddTransactionModal';
import { Transaction } from './types';
import { initialTransactions } from './data/mockData';
import { api } from './services/api';

export default function App() {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [suche, setSuche] = useState('');
  const [filter, setFilter] = useState('Alle');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    api.getAll().then(setTransactions).catch(() => console.log('Backend offline - using Mock Data'));
  }, []);

  const gefiltert = transactions.filter(t => {
    const matchSuche = t.beschreibung.toLowerCase().includes(suche.toLowerCase());
    const matchFilter = filter === 'Alle' || t.art === filter;
    return matchSuche && matchFilter;
  });

  const einnahmen = transactions.filter(t => t.art === 'Einnahme').reduce((s, t) => s + t.betrag, 0);
  const ausgaben = Math.abs(transactions.filter(t => t.art === 'Ausgabe').reduce((s, t) => s + t.betrag, 0));
  const kontostand = 12450.75 + einnahmen - ausgaben;
  const sparquote = einnahmen > 0 ? Math.round(((einnahmen - ausgaben) / einnahmen) * 100) : 0;

  const handleAdd = async (form: any) => {
    const betrag = form.art === 'Einnahme' ? Math.abs(Number(form.betrag)) : -Math.abs(Number(form.betrag));
    const payload = { ...form, betrag, datum: new Date().toISOString().split('T')[0], konto: 'Girokonto' };
    try { const saved = await api.create(payload); setTransactions([saved, ...transactions]); }
    catch { setTransactions([{ id: Date.now(), ...payload }, ...transactions]); }
    setShowModal(false);
  };

  const handleDelete = async (id: number) => {
    setTransactions(transactions.filter(t => t.id !== id));
    try { await api.delete(id); } catch {}
  };

  const handleExport = () => {
    const csv = "Datum;Beschreibung;Kategorie;Betrag\n" + transactions.map(t => `${t.datum};${t.beschreibung};${t.kategorie};${t.betrag}`).join("\n");
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = 'umsatz.csv'; a.click();
  };

  const fmt = (n: number) => n.toLocaleString('de-DE', { minimumFractionDigits: 2 }) + ' €';

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
        <Header onAdd={() => setShowModal(true)} onExport={handleExport} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          <StatsCard label="Kontostand" value={fmt(kontostand)} sub="Girokonto • DE89 6005..." type="balance" />
          <StatsCard label="Einnahmen (Nov)" value={fmt(einnahmen)} sub="vs. Okt +12%" type="income" />
          <StatsCard label="Ausgaben (Nov)" value={fmt(ausgaben)} sub="vs. Okt -8%" type="expense" />
          <StatsCard label="Sparquote" value={sparquote + '%'} sub="Ziel: 30%" type="saving" />
        </div>
        <DashboardCharts />
        <TransactionTable transactions={gefiltert} suche={suche} setSuche={setSuche} filter={filter} setFilter={setFilter} onDelete={handleDelete} />
        {showModal && <AddTransactionModal onClose={() => setShowModal(false)} onAdd={handleAdd} />}
      </main>
    </div>
  );
}