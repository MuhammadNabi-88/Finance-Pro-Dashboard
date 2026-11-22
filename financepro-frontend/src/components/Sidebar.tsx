import { LayoutDashboard, Wallet, ArrowLeftRight, FileText, BarChart3, Settings, CreditCard } from 'lucide-react';

export default function Sidebar() {
  const menu = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Wallet, label: 'Konten', active: false },
    { icon: ArrowLeftRight, label: 'Umsatz', active: false },
    { icon: FileText, label: 'Bilanz', active: false },
    { icon: BarChart3, label: 'Berichte', active: false },
    { icon: Settings, label: 'Einstellungen', active: false },
  ];
  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen sticky top-0 flex flex-col p-5">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">F</div>
        <span className="font-bold text-xl text-slate-900">FinancePro</span>
      </div>
      <nav className="space-y-1 flex-1">
        {menu.map((item) => (
          <button key={item.label} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${item.active ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'}`}>
            <item.icon size={18} /> {item.label}
          </button>
        ))}
      </nav>
      <div className="bg-slate-900 text-white rounded-xl p-4">
        <div className="flex items-center gap-2 text-sm font-medium"><CreditCard size={16} /> Kreditkarte</div>
        <p className="text-xs text-slate-400 mt-2">**** 4821 • Verfügbar: 2.450 €</p>
      </div>
    </aside>
  );
}