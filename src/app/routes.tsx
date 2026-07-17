import type { ReactNode } from "react";
import { createBrowserRouter, Link, useLocation } from "react-router";
import { Activity, Bell, CalendarDays, ChevronDown, ChevronRight, ClipboardList, LayoutDashboard, Package, Pill, Plus, Search, Users } from "lucide-react";
import DashboardPage from "./DashboardPage";

const operationsNav = [
  { label: "Overview", to: "/" },
  { label: "Patients", to: "/patients" },
  { label: "Appointments", to: "/appointments" },
  { label: "Queue", to: "/queue" },
  { label: "Pharmacy", to: "/pharmacy" },
];

function OperationsHeader({ title, subtitle, action, children }: { title: string; subtitle: string; action: string; children: ReactNode }) {
  const location = useLocation();
  const sidebarItems = [
    { label: "Overview", to: "/", icon: LayoutDashboard },
    { label: "Patients", to: "/patients", icon: Users },
    { label: "Appointments", to: "/appointments", icon: CalendarDays },
    { label: "Queue management", to: "/queue", icon: ClipboardList },
    { label: "Pharmacy", to: "/pharmacy", icon: Pill },
    { label: "Inventory", to: "/pharmacy", icon: Package },
  ];
  return (
    <div className="min-h-screen bg-[#f5f8fb] font-[Inter,sans-serif] text-[#15304b]">
      <aside className="fixed inset-y-0 left-0 hidden w-[252px] flex-col bg-[#0d335b] px-3 py-5 text-white lg:flex">
        <Link to="/" className="flex items-center gap-3 px-3 pb-8"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#31bba9] shadow-[0_8px_18px_rgba(5,205,172,0.2)]"><Activity size={23} strokeWidth={2.8} /></span><span><b className="block text-[17px] tracking-[-0.03em]">MediCare</b><small className="text-[10px] font-semibold tracking-[0.12em] text-[#91b6d8]">CLINIC & PHARMACY</small></span></Link>
        <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#7ea7cd]">Workspace</p>
        <nav className="space-y-1">{sidebarItems.map(({ label, to, icon: Icon }) => <Link key={label} to={to} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium transition ${location.pathname === to || (label === "Inventory" && location.pathname === "/pharmacy") ? "bg-[#1c507f] text-white shadow-sm" : "text-[#b6cde1] hover:bg-[#17466f] hover:text-white"}`}><Icon size={18} strokeWidth={2} />{label}{label === "Pharmacy" && <span className="ml-auto rounded-md bg-[#ff795e] px-1.5 py-0.5 text-[9px] font-extrabold text-white">3</span>}</Link>)}</nav>
        <div className="mt-auto rounded-2xl border border-[#2c5d88] bg-[#123e69] p-3"><div className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-full bg-[#d7eaf7] text-[12px] font-bold text-[#1b557c]">AS</span><span className="min-w-0"><b className="block truncate text-[12px]">Alexandra Smith</b><small className="text-[10px] text-[#91b6d8]">Administrator</small></span><ChevronDown className="ml-auto text-[#91b6d8]" size={15} /></div></div>
      </aside>
      <div className="lg:ml-[252px]">
        <header className="sticky top-0 z-20 flex h-[72px] items-center border-b border-[#e4edf4] bg-white/95 px-5 backdrop-blur sm:px-8 lg:px-9"><div className="flex w-full max-w-[360px] items-center gap-2 rounded-xl border border-[#e5edf3] bg-[#f8fafc] px-3 py-2"><Search size={17} className="text-[#86a0b6]" /><span className="text-[12px] text-[#91a8ba]">Search patients, records, invoices...</span></div><div className="ml-auto flex items-center gap-4"><p className="hidden text-right text-[11px] leading-4 text-[#698094] md:block"><b className="block text-[#24445f]">Friday, May 24</b>2024</p><button className="relative grid h-10 w-10 place-items-center rounded-xl border border-[#e4edf4] text-[#45647d]"><Bell size={18} /><i className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#f26f56] ring-2 ring-white" /></button></div></header>
        <div className="mx-auto max-w-[1580px] px-4 py-6 sm:px-7 lg:px-9 lg:py-7">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="flex items-center gap-2 text-[11px] font-medium text-[#7890a4]"><span>Administration</span><ChevronRight size={13} /><span>{title}</span></div><h1 className="mt-2 text-[27px] font-bold leading-tight tracking-[-0.035em] text-[#15304b] sm:text-[30px]">{title}</h1><p className="mt-1 text-[13px] text-[#70869a]">{subtitle}</p></div><button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1768c4] px-4 py-2.5 text-[12px] font-bold text-white shadow-[0_8px_18px_rgba(23,104,196,0.2)]"><Plus size={16} strokeWidth={2.8} />{action}</button></div>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

const patientRows = [
  ["EM", "Elena Martin", "PT-240518", "General Practice", "09:15 AM", "Waiting"],
  ["LB", "Lucas Bennett", "PT-240517", "Dental Clinic", "10:00 AM", "In consultation"],
  ["GK", "Grace Kim", "PT-240516", "Pediatrics", "10:30 AM", "Checked in"],
  ["JR", "James Robinson", "PT-240515", "Cardiology", "11:00 AM", "Scheduled"],
];

function PatientsPage() {
  return <OperationsHeader title="Patients" subtitle="Manage registrations, clinical information, and visit status." action="Register patient">
    <section className="rounded-[18px] border border-[#e3ecf3] bg-white shadow-[0_8px_28px_rgba(24,68,112,0.045)]"><div className="flex flex-col justify-between gap-3 border-b border-[#e9f0f5] p-4 sm:flex-row sm:items-center"><div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#e6f1ff] text-[#1768c4]"><Users size={18} /></span><div><h2 className="text-[14px] font-bold">Patient directory</h2><p className="text-[11px] text-[#7890a4]">1,284 registered patients</p></div></div><div className="flex items-center gap-2 rounded-xl border border-[#e3ecf3] px-3 py-2 text-[11px] text-[#8398a9]"><Search size={14} /> Search name or patient ID</div></div><div className="overflow-x-auto"><table className="w-full min-w-[710px] text-left"><thead className="bg-[#f8fafc] text-[10px] uppercase tracking-[0.07em] text-[#8298aa]"><tr><th className="px-5 py-3 font-bold">Patient</th><th className="px-3 py-3 font-bold">ID</th><th className="px-3 py-3 font-bold">Department</th><th className="px-3 py-3 font-bold">Appointment</th><th className="px-5 py-3 text-right font-bold">Status</th></tr></thead><tbody>{patientRows.map(([initials, name, id, dept, time, status]) => <tr key={id} className="border-t border-[#edf2f6]"><td className="px-5 py-3"><div className="flex items-center gap-3"><span className="grid h-8 w-8 place-items-center rounded-full bg-[#e7f1ff] text-[10px] font-bold text-[#1768c4]">{initials}</span><b className="text-[12px]">{name}</b></div></td><td className="px-3 py-3 text-[11px] font-medium text-[#627d93]">{id}</td><td className="px-3 py-3 text-[11px] text-[#627d93]">{dept}</td><td className="px-3 py-3 text-[11px] font-semibold">{time}</td><td className="px-5 py-3 text-right"><span className="rounded-full bg-[#eaf7f3] px-2 py-1 text-[10px] font-bold text-[#16816e]">{status}</span></td></tr>)}</tbody></table></div></section>
  </OperationsHeader>;
}

function AppointmentsPage() {
  const cards = [["09:00", "Dr. Olivia Carter", "General Practice", "7 bookings"], ["10:30", "Dr. Maya Patel", "Pediatrics", "6 bookings"], ["13:00", "Dr. Ethan Reynolds", "Cardiology", "4 bookings"]];
  return <OperationsHeader title="Appointments" subtitle="Coordinate clinician availability and patient appointments." action="New appointment"><section className="grid gap-4 lg:grid-cols-[1fr_0.72fr]"><div className="rounded-[18px] border border-[#e3ecf3] bg-white p-5 shadow-[0_8px_28px_rgba(24,68,112,0.045)]"><div className="flex items-center justify-between"><div><h2 className="text-[15px] font-bold">Today&apos;s schedule</h2><p className="mt-1 text-[11px] text-[#7890a4]">Friday, May 24 · 42 appointments</p></div><CalendarDays className="text-[#1768c4]" size={20} /></div><div className="mt-5 space-y-3">{cards.map(([time, doctor, specialty, count]) => <div key={time} className="flex items-center gap-4 rounded-xl border border-[#e5edf4] p-3"><b className="w-11 text-[11px] text-[#1768c4]">{time}</b><span className="grid h-9 w-9 place-items-center rounded-full bg-[#eaf7f3] text-[11px] font-bold text-[#16816e]">{doctor.split(" ").slice(1).map(n=>n[0]).join("")}</span><div className="flex-1"><p className="text-[12px] font-bold">{doctor}</p><p className="text-[10px] text-[#7c93a5]">{specialty}</p></div><span className="text-[10px] font-bold text-[#16816e]">{count}</span></div>)}</div></div><div className="rounded-[18px] bg-[#10385f] p-5 text-white"><p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8db4d5]">Capacity today</p><p className="mt-4 text-4xl font-bold tracking-[-0.05em]">81%</p><div className="mt-4 h-2 overflow-hidden rounded-full bg-[#27587f]"><div className="h-full w-[81%] rounded-full bg-[#31bba9]" /></div><p className="mt-5 text-[12px] leading-5 text-[#bbd5e8]">8 open appointments remain across General Practice and Pediatrics.</p></div></section></OperationsHeader>;
}

function QueuePage() {
  return <OperationsHeader title="Queue management" subtitle="Monitor live patient flow across every department." action="Issue ticket"><section className="grid gap-4 md:grid-cols-3"><div className="rounded-[18px] bg-[#1768c4] p-5 text-white"><ClipboardList size={20} /><p className="mt-5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#b9d7f5]">Now serving</p><p className="mt-1 text-4xl font-bold tracking-[-0.04em]">A-018</p><p className="mt-2 text-[12px] text-[#dcecff]">General Practice · Room 04</p></div><div className="rounded-[18px] border border-[#e3ecf3] bg-white p-5"><p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#7f95a7]">Waiting</p><p className="mt-2 text-4xl font-bold tracking-[-0.04em]">24</p><p className="mt-2 text-[12px] text-[#71899c]">Average wait: 14 minutes</p></div><div className="rounded-[18px] border border-[#f4ddd5] bg-[#fffaf8] p-5"><p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#b16c55]">Needs attention</p><p className="mt-2 text-4xl font-bold tracking-[-0.04em] text-[#d85d45]">03</p><p className="mt-2 text-[12px] text-[#9b7869]">Patients waiting over 25 min</p></div></section></OperationsHeader>;
}

function PharmacyPage() {
  return <OperationsHeader title="Pharmacy" subtitle="Process prescriptions and monitor medicine stock in one place." action="Dispense medicine"><section className="grid gap-4 md:grid-cols-2"><div className="rounded-[18px] border border-[#e3ecf3] bg-white p-5"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#eaf7f3] text-[#16816e]"><Pill size={20} /></span><div><h2 className="text-[15px] font-bold">Prescriptions awaiting processing</h2><p className="text-[11px] text-[#7890a4]">12 prescriptions ready to dispense</p></div></div><button className="mt-5 rounded-xl bg-[#eaf7f3] px-3 py-2 text-[11px] font-bold text-[#16816e]">Open dispensing queue</button></div><div className="rounded-[18px] border border-[#f1d8d0] bg-white p-5"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#fff0ed] text-[#d85d45]"><Package size={20} /></span><div><h2 className="text-[15px] font-bold">Stock alerts</h2><p className="text-[11px] text-[#7890a4]">3 medicines require replenishment</p></div></div><div className="mt-4 rounded-xl bg-[#fff8f6] p-3 text-[11px]"><b className="block text-[#8c4e3d]">Amoxicillin 500mg</b><span className="mt-1 block text-[#a77769]">Critical stock · 12 units left</span></div></div></section></OperationsHeader>;
}

function NotFoundPage() {
  return <div className="grid min-h-screen place-items-center bg-[#f5f8fb] p-6 font-[Inter,sans-serif]"><div className="text-center"><p className="text-[12px] font-bold uppercase tracking-[0.15em] text-[#1768c4]">404</p><h1 className="mt-2 text-3xl font-bold">Page not found</h1><p className="mt-2 text-sm text-[#71889a]">This MediCare workspace route does not exist.</p><Link to="/" className="mt-5 inline-block rounded-xl bg-[#1768c4] px-4 py-2.5 text-xs font-bold text-white">Return to dashboard</Link></div></div>;
}

export const router = createBrowserRouter([
  { path: "/", Component: DashboardPage },
  { path: "/patients", Component: PatientsPage },
  { path: "/appointments", Component: AppointmentsPage },
  { path: "/queue", Component: QueuePage },
  { path: "/pharmacy", Component: PharmacyPage },
  { path: "*", Component: NotFoundPage },
]);
