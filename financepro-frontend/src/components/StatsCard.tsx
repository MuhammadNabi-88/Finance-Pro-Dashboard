import { TrendingUp, TrendingDown, Wallet, PiggyBank } from 'lucide-react';

interface Props { label: string; value: string; sub: string; type: 'balance' | 'income' | 'expense' | 'saving'; }

export default function StatsCard({ label, value, sub, type }: Props) {
  const icons = { balance: <Wallet size={20} />, income: <TrendingUp size={20} />, expense: <TrendingDown size={20} />, saving: <PiggyBank size={20} /> };
  const colors = { balance: 'bg-blue-50 text-blue-600', income: 'bg-green-50 text-green-600', expense: 'bg-red-50 text-red-600', saving: 'bg-amber-50 text-amber-600' };
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
          <p className="text-xs text-slate-400 mt-1">{sub}</p>
        </div>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colors[type]}`}>{icons[type]}</div>
      </div>
    </div>
  );
}