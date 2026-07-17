import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Activity,
  Bell,
  CalendarDays,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Clock3,
  CreditCard,
  FileText,
  HelpCircle,
  LayoutDashboard,
  Menu,
  MoreHorizontal,
  Package,
  Pill,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Stethoscope,
  TestTube2,
  Users,
} from "lucide-react";

const visitData = [
  { day: "Mon", visits: 54, target: 42 },
  { day: "Tue", visits: 68, target: 48 },
  { day: "Wed", visits: 51, target: 45 },
  { day: "Thu", visits: 84, target: 55 },
  { day: "Fri", visits: 72, target: 53 },
  { day: "Sat", visits: 39, target: 36 },
  { day: "Sun", visits: 26, target: 28 },
];

const schedule = [
  { time: "08:00", doctor: "Dr. Olivia Carter", specialty: "General Practice", initials: "OC", color: "bg-[#dcecff] text-[#155eaf]", patients: "12 patients" },
  { time: "09:30", doctor: "Dr. Ethan Reynolds", specialty: "Cardiology", initials: "ER", color: "bg-[#ddf5ed] text-[#168675]", patients: "8 patients" },
  { time: "10:00", doctor: "Dr. Maya Patel", specialty: "Pediatrics", initials: "MP", color: "bg-[#f2e8ff] text-[#7e55ab]", patients: "10 patients" },
];

const queues = [
  { ticket: "A-018", patient: "Elena Martin", department: "General Practice", wait: "06 min", state: "In consultation", tone: "bg-[#e6f1ff] text-[#1763ba]" },
  { ticket: "B-042", patient: "Lucas Bennett", department: "Dental Clinic", wait: "12 min", state: "Waiting", tone: "bg-[#fff5db] text-[#ae7411]" },
  { ticket: "C-011", patient: "Grace Kim", department: "Pediatrics", wait: "18 min", state: "Waiting", tone: "bg-[#fff5db] text-[#ae7411]" },
];

const navItems = [
  { label: "Overview", icon: LayoutDashboard, path: "/" },
  { label: "Patients", icon: Users, path: "/patients" },
  { label: "Appointments", icon: CalendarDays, path: "/appointments" },
  { label: "Queue management", icon: ClipboardList, path: "/queue" },
  { label: "Medical records", icon: FileText, path: "/patients" },
  { label: "Laboratory", icon: TestTube2, path: "/pharmacy" },
  { label: "Pharmacy", icon: Pill, path: "/pharmacy" },
  { label: "Inventory", icon: Package, path: "/pharmacy" },
  { label: "Payments", icon: CreditCard, path: "/pharmacy" },
];

function MetricCard({ label, value, change, icon: Icon, accent, alert }: { label: string; value: string; change: string; icon: typeof Users; accent: string; alert?: boolean }) {
  return (
    <div className="rounded-[18px] border border-[#e5edf5] bg-white p-4 shadow-[0_8px_28px_rgba(24,68,112,0.045)] sm:p-5">
      <div className="flex items-start justify-between">
        <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${accent}`}><Icon size={18} strokeWidth={2.1} /></div>
        <span className={`rounded-full px-2 py-1 text-[10px] font-bold tracking-[0.02em] ${alert ? "bg-[#fff0ed] text-[#d4563b]" : "bg-[#ecf8f3] text-[#15826c]"}`}>{change}</span>
      </div>
      <p className="mt-5 text-[12px] font-medium text-[#6b7f92]">{label}</p>
      <p className="mt-1 text-[25px] font-bold leading-none tracking-[-0.035em] text-[#15304b]">{value}</p>
    </div>
  );
}

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Overview");
  const [timeframe, setTimeframe] = useState("This week");
  const [showAlerts, setShowAlerts] = useState(false);
  const navigate = useNavigate();

  const sidebar = (
    <aside className="flex h-full w-[252px] shrink-0 flex-col bg-[#0d335b] px-3 py-5 text-white">
      <div className="flex items-center gap-3 px-3 pb-8">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#31bba9] shadow-[0_8px_18px_rgba(5,205,172,0.2)]"><Activity size={23} strokeWidth={2.8} /></div>
        <div><p className="text-[17px] font-bold tracking-[-0.03em]">MediCare</p><p className="text-[10px] font-semibold tracking-[0.12em] text-[#91b6d8]">CLINIC & PHARMACY</p></div>
      </div>
      <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7ea7cd]">Workspace</p>
      <nav className="space-y-1">
        {navItems.map(({ label, icon: Icon, path }) => (
          <button key={label} onClick={() => { setActiveNav(label); setSidebarOpen(false); navigate(path); }} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] font-medium transition ${activeNav === label ? "bg-[#1c507f] text-white shadow-sm" : "text-[#b6cde1] hover:bg-[#17466f] hover:text-white"}`}>
            <Icon size={18} strokeWidth={activeNav === label ? 2.5 : 2} />{label}
            {label === "Pharmacy" && <span className="ml-auto rounded-md bg-[#ff795e] px-1.5 py-0.5 text-[9px] font-extrabold text-white">3</span>}
          </button>
        ))}
      </nav>
      <div className="mt-7 border-t border-[#275a85] pt-5">
        <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7ea7cd]">System</p>
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-[#b6cde1] hover:bg-[#17466f]"><Settings size={18} />Settings</button>
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-[#b6cde1] hover:bg-[#17466f]"><HelpCircle size={18} />Help center</button>
      </div>
      <div className="mt-auto rounded-2xl border border-[#2c5d88] bg-[#123e69] p-3">
        <div className="flex items-center gap-2.5"><div className="grid h-9 w-9 place-items-center rounded-full bg-[#d7eaf7] text-[12px] font-bold text-[#1b557c]">AS</div><div className="min-w-0"><p className="truncate text-[12px] font-bold">Alexandra Smith</p><p className="text-[10px] text-[#91b6d8]">Administrator</p></div><ChevronDown className="ml-auto text-[#91b6d8]" size={15} /></div>
      </div>
    </aside>
  );

  return (
    <main className="min-h-screen bg-[#f5f8fb] font-[Inter,sans-serif] text-[#15304b]">
      <div className="hidden min-h-screen lg:fixed lg:inset-y-0 lg:left-0 lg:flex">{sidebar}</div>
      {sidebarOpen && <div className="fixed inset-0 z-40 bg-[#09233f]/40 lg:hidden" onClick={() => setSidebarOpen(false)}><div className="h-full w-[272px] shadow-2xl" onClick={(e) => e.stopPropagation()}>{sidebar}</div></div>}
      <div className="lg:ml-[252px]">
        <header className="sticky top-0 z-30 flex h-[72px] items-center gap-3 border-b border-[#e4edf4] bg-white/95 px-4 backdrop-blur sm:px-7 lg:px-9">
          <button onClick={() => setSidebarOpen(true)} className="grid h-10 w-10 place-items-center rounded-xl border border-[#e4edf4] text-[#31536e] lg:hidden"><Menu size={20} /></button>
          <div className="hidden w-full max-w-[360px] items-center gap-2 rounded-xl border border-[#e5edf3] bg-[#f8fafc] px-3 py-2 sm:flex"><Search size={17} className="text-[#86a0b6]" /><input aria-label="Search" placeholder="Search patients, records, invoices..." className="w-full bg-transparent text-[12px] outline-none placeholder:text-[#91a8ba]" /></div>
          <div className="ml-auto flex items-center gap-2 sm:gap-4">
            <p className="hidden text-right text-[11px] leading-4 text-[#698094] md:block"><span className="block font-semibold text-[#24445f]">Friday, May 24</span>2024</p>
            <div className="relative"><button onClick={() => setShowAlerts(!showAlerts)} className="relative grid h-10 w-10 place-items-center rounded-xl border border-[#e4edf4] text-[#45647d]"><Bell size={18} /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#f26f56] ring-2 ring-white" /></button>{showAlerts && <div className="absolute right-0 top-12 w-72 rounded-2xl border border-[#e4edf4] bg-white p-3 shadow-xl"><p className="px-1 text-[12px] font-bold">Notifications</p><p className="mt-2 rounded-xl bg-[#fff7e6] p-2 text-[11px] text-[#8a651c]">3 medicines are approaching their expiry date.</p></div>}</div>
            <div className="hidden h-9 w-px bg-[#e6edf3] sm:block" />
            <div className="hidden items-center gap-2.5 sm:flex"><div className="grid h-9 w-9 place-items-center rounded-full bg-[#d7eaf7] text-[12px] font-bold text-[#1b557c]">AS</div><ChevronDown size={15} className="text-[#648199]" /></div>
          </div>
        </header>

        <div className="mx-auto max-w-[1580px] px-4 py-6 sm:px-7 lg:px-9 lg:py-7">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><div className="flex items-center gap-2 text-[11px] font-medium text-[#7890a4]"><span>Administration</span><ChevronRight size={13} /><span>Dashboard</span></div><h1 className="mt-2 text-[27px] font-bold leading-tight tracking-[-0.035em] text-[#15304b] sm:text-[30px]">Good morning, Alexandra <span className="inline-block">👋</span></h1><p className="mt-1 text-[13px] text-[#70869a]">Here is what is happening at MediCare today.</p></div>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1768c4] px-4 py-2.5 text-[12px] font-bold text-white shadow-[0_8px_18px_rgba(23,104,196,0.2)] transition hover:bg-[#105bad]"><Plus size={16} strokeWidth={2.8} />New appointment</button>
          </div>

          <section className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
            <MetricCard label="Patients today" value="186" change="+12.5%" icon={Users} accent="bg-[#e4f0ff] text-[#1768c4]" />
            <MetricCard label="Currently waiting" value="24" change="−8.4%" icon={Clock3} accent="bg-[#e8f8f5] text-[#199985]" />
            <MetricCard label="Active doctors" value="18" change="+2 today" icon={Stethoscope} accent="bg-[#edf0ff] text-[#526bc8]" />
            <MetricCard label="Examinations done" value="142" change="76.3%" icon={ClipboardList} accent="bg-[#e8f8f5] text-[#1b9b85]" />
            <MetricCard label="Daily revenue" value="$8,426" change="+9.8%" icon={CreditCard} accent="bg-[#e4f0ff] text-[#1768c4]" />
            <MetricCard label="Critical stock" value="03" change="Action needed" icon={ShieldCheck} accent="bg-[#fff0ed] text-[#d75c43]" alert />
          </section>

          <section className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(310px,0.75fr)]">
            <div className="rounded-[18px] border border-[#e5edf5] bg-white p-4 shadow-[0_8px_28px_rgba(24,68,112,0.045)] sm:p-5">
              <div className="flex items-start justify-between gap-3"><div><h2 className="text-[15px] font-bold tracking-[-0.015em]">Patient visits</h2><p className="mt-1 text-[11px] text-[#7a90a2]">Daily walk-ins and scheduled appointments</p></div><button onClick={() => setTimeframe(timeframe === "This week" ? "This month" : "This week")} className="flex items-center gap-1 rounded-lg border border-[#e6edf3] px-2.5 py-1.5 text-[11px] font-semibold text-[#4e6a81]">{timeframe}<ChevronDown size={13} /></button></div>
              <div className="mt-5 h-[218px]">
                <svg viewBox="0 0 640 225" className="h-full w-full overflow-visible" role="img" aria-label="Daily patient visits chart">
                  <defs><linearGradient id="patient-visits-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#2786e5" stopOpacity="0.24" /><stop offset="100%" stopColor="#2786e5" stopOpacity="0.01" /></linearGradient></defs>
                  {[25, 75, 125, 175].map((y) => <line key={`grid-${y}`} x1="34" x2="632" y1={y} y2={y} stroke="#e8eff5" strokeWidth="1" />)}
                  <text x="1" y="178" fill="#8ba0b2" fontSize="10">0</text><text x="0" y="128" fill="#8ba0b2" fontSize="10">30</text><text x="0" y="78" fill="#8ba0b2" fontSize="10">60</text><text x="0" y="28" fill="#8ba0b2" fontSize="10">90</text>
                  <polyline points="42,108 138,95 234,101 330,83 426,87 522,115 618,124" fill="none" stroke="#76cdbb" strokeWidth="2" strokeDasharray="4 5" />
                  <path d="M42 85 L138 62 L234 92 L330 34 L426 52 L522 110 L618 132 L618 175 L42 175 Z" fill="url(#patient-visits-fill)" />
                  <polyline points="42,85 138,62 234,92 330,34 426,52 522,110 618,132" fill="none" stroke="#1768c4" strokeWidth="2.8" strokeLinejoin="round" strokeLinecap="round" />
                  {visitData.map((item, index) => { const x = 42 + index * 96; const y = [85, 62, 92, 34, 52, 110, 132][index]; return <g key={`visit-${item.day}`}><circle cx={x} cy={y} r="3.5" fill="#fff" stroke="#1768c4" strokeWidth="2" /><text x={x} y="205" textAnchor="middle" fill="#8ba0b2" fontSize="10">{item.day}</text></g>; })}
                </svg>
              </div>
              <div className="mt-2 flex gap-5 border-t border-[#edf2f6] pt-3 text-[11px]"><span className="flex items-center gap-1.5 text-[#698195]"><i className="h-2 w-2 rounded-full bg-[#1768c4]" />Actual visits <b className="ml-1 text-[#193753]">394</b></span><span className="flex items-center gap-1.5 text-[#698195]"><i className="h-0.5 w-3 bg-[#76cdbb]" />Expected volume</span></div>
            </div>
            <div className="rounded-[18px] border border-[#e5edf5] bg-white p-4 shadow-[0_8px_28px_rgba(24,68,112,0.045)] sm:p-5"><div className="flex items-start justify-between"><div><h2 className="text-[15px] font-bold tracking-[-0.015em]">Revenue split</h2><p className="mt-1 text-[11px] text-[#7a90a2]">Today&apos;s collected revenue</p></div><button className="text-[#7890a4]"><MoreHorizontal size={20} /></button></div><div className="relative mt-2 h-[150px]">
                <svg viewBox="0 0 180 150" className="h-full w-full" role="img" aria-label="Revenue split: 62 percent clinic and 38 percent pharmacy">
                  <circle cx="90" cy="75" r="57" fill="none" stroke="#edf3f7" strokeWidth="18" />
                  <circle cx="90" cy="75" r="57" fill="none" stroke="#1966c2" strokeWidth="18" strokeLinecap="round" strokeDasharray="218 358" transform="rotate(-90 90 75)" />
                  <circle cx="90" cy="75" r="57" fill="none" stroke="#27ad98" strokeWidth="18" strokeLinecap="round" strokeDasharray="132 358" strokeDashoffset="-226" transform="rotate(-90 90 75)" />
                </svg>
                <div className="absolute inset-0 grid place-items-center text-center"><div><p className="text-[20px] font-bold tracking-[-0.03em]">$8.4k</p><p className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#8196a7]">Collected</p></div></div>
              </div><div className="grid grid-cols-2 gap-3"><div className="rounded-xl bg-[#f5f9ff] p-3"><span className="block h-2 w-2 rounded-full bg-[#1966c2]" /><p className="mt-2 text-[11px] text-[#6e8598]">Clinic</p><p className="mt-0.5 text-[14px] font-bold">$5,224 <span className="text-[10px] font-medium text-[#6e8598]">62%</span></p></div><div className="rounded-xl bg-[#f2fbf8] p-3"><span className="block h-2 w-2 rounded-full bg-[#27ad98]" /><p className="mt-2 text-[11px] text-[#6e8598]">Pharmacy</p><p className="mt-0.5 text-[14px] font-bold">$3,202 <span className="text-[10px] font-medium text-[#6e8598]">38%</span></p></div></div></div>
          </section>

          <section className="mt-5 grid gap-5 2xl:grid-cols-[1.2fr_1fr_0.86fr]">
            <div className="rounded-[18px] border border-[#e5edf5] bg-white p-4 shadow-[0_8px_28px_rgba(24,68,112,0.045)] sm:p-5"><div className="flex items-center justify-between"><div><h2 className="text-[15px] font-bold">Today&apos;s doctor schedules</h2><p className="mt-1 text-[11px] text-[#7a90a2]">18 doctors on duty</p></div><button className="text-[11px] font-bold text-[#1768c4]">View schedule</button></div><div className="mt-4 space-y-3">{schedule.map((item) => <div key={item.doctor} className="flex items-center gap-3 rounded-xl border border-transparent p-1 transition hover:border-[#e4edf4] hover:bg-[#fbfdff]"><p className="w-9 text-[10px] font-bold text-[#668096]">{item.time}</p><div className={`grid h-9 w-9 place-items-center rounded-full text-[10px] font-bold ${item.color}`}>{item.initials}</div><div className="min-w-0 flex-1"><p className="truncate text-[12px] font-bold">{item.doctor}</p><p className="truncate text-[10px] text-[#7890a3]">{item.specialty}</p></div><span className="text-[10px] font-semibold text-[#568170]">{item.patients}</span></div>)}</div></div>
            <div className="rounded-[18px] border border-[#e5edf5] bg-white p-4 shadow-[0_8px_28px_rgba(24,68,112,0.045)] sm:p-5"><div className="flex items-center justify-between"><div><h2 className="text-[15px] font-bold">Live queue</h2><p className="mt-1 text-[11px] text-[#7a90a2]">24 patients currently waiting</p></div><button className="text-[11px] font-bold text-[#1768c4]">Open queue</button></div><div className="mt-4 overflow-x-auto"><table className="w-full min-w-[370px] text-left"><thead className="text-[9px] font-bold uppercase tracking-[0.07em] text-[#8ba0b1]"><tr><th className="pb-2 font-bold">Ticket</th><th className="pb-2 font-bold">Patient</th><th className="pb-2 font-bold">Wait</th><th className="pb-2 text-right font-bold">Status</th></tr></thead><tbody>{queues.map((q) => <tr key={q.ticket} className="border-t border-[#edf2f6]"><td className="py-3 text-[11px] font-bold text-[#1a67be]">{q.ticket}</td><td className="py-3"><p className="text-[11px] font-bold">{q.patient}</p><p className="text-[9px] text-[#8297a8]">{q.department}</p></td><td className="py-3 text-[10px] font-semibold text-[#607a91]">{q.wait}</td><td className="py-3 text-right"><span className={`inline-block rounded-full px-2 py-1 text-[9px] font-bold ${q.tone}`}>{q.state}</span></td></tr>)}</tbody></table></div></div>
            <div className="rounded-[18px] border border-[#f1d9d2] bg-white p-4 shadow-[0_8px_28px_rgba(24,68,112,0.045)] sm:p-5"><div className="flex items-center justify-between"><div><h2 className="text-[15px] font-bold">Pharmacy alerts</h2><p className="mt-1 text-[11px] text-[#7a90a2]">Requires your attention</p></div><span className="grid h-7 w-7 place-items-center rounded-lg bg-[#fff0ed] text-[#dc6047]"><Bell size={14} /></span></div><div className="mt-4 space-y-2.5"><div className="flex gap-3 rounded-xl bg-[#fff8f6] p-3"><div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#ef765d]" /><div><p className="text-[11px] font-bold text-[#704032]">Amoxicillin 500mg</p><p className="mt-0.5 text-[10px] leading-4 text-[#9b6b5b]">Critical stock · Only 12 units left</p></div></div><div className="flex gap-3 rounded-xl bg-[#fffbed] p-3"><div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[#e3aa31]" /><div><p className="text-[11px] font-bold text-[#705a2d]">Insulin Glargine</p><p className="mt-0.5 text-[10px] leading-4 text-[#99845c]">Expires in 28 days · 4 units</p></div></div><button className="w-full rounded-xl border border-[#e5edf4] py-2 text-[11px] font-bold text-[#275f98]">Review inventory</button></div></div>
          </section>
        </div>
      </div>
    </main>
  );
}
