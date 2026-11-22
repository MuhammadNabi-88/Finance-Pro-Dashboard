import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const barData = [
  { monat: 'Jul', einnahmen: 4200, ausgaben: 1150 },
  { monat: 'Aug', einnahmen: 4300, ausgaben: 1320 },
  { monat: 'Sep', einnahmen: 4400, ausgaben: 980 },
  { monat: 'Okt', einnahmen: 4350, ausgaben: 1240 },
  { monat: 'Nov', einnahmen: 4500, ausgaben: 1244 },
];
const pieData = [
  { name: 'Miete', value: 950, color: '#3b82f6' },
  { name: 'Lebensmittel', value: 320, color: '#10b981' },
  { name: 'Transport', value: 180, color: '#f59e0b' },
  { name: 'Sonstiges', value: 150, color: '#ef4444' },
];

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
      <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-5">
        <h3 className="font-semibold mb-4">Einnahmen vs. Ausgaben</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="monat" /><YAxis /><Tooltip /><Bar dataKey="einnahmen" fill="#2563eb" radius={[6,6,0,0]} /><Bar dataKey="ausgaben" fill="#f87171" radius={[6,6,0,0]} /></BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 p-5">
        <h3 className="font-semibold mb-4">Ausgaben nach Kategorie</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart><Pie data={pieData} dataKey="value" nameKey="name" innerRadius={60} outerRadius={90} paddingAngle={3}>{pieData.map(e => <Cell key={e.name} fill={e.color} />)}</Pie><Tooltip /></PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}