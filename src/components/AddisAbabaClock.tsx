import { useState, useEffect } from 'react';
import LucideIcon from './LucideIcon';

interface AddisAbabaClockProps {
  compact?: boolean;
}

export default function AddisAbabaClock({ compact = false }: AddisAbabaClockProps) {
  const [timeStr, setTimeStr] = useState('');
  const [dateStr, setDateStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      const timeFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Addis_Ababa',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

      const dateFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Addis_Ababa',
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      });

      setTimeStr(timeFormatter.format(now));
      setDateStr(dateFormatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (compact) {
    return (
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.02] border border-white/[0.05] text-[10px] font-mono text-slate-400">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FFA52F] animate-pulse" />
        <span className="font-semibold text-white">{timeStr || '--:--:-- --'}</span>
        <span className="text-slate-500 uppercase tracking-wider text-[8px] ml-1">Addis Ababa</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 px-3.5 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#D1008F]/30 transition-all duration-350 shadow-inner group relative">
      {/* Small light indicator */}
      <div className="absolute top-1 right-2 flex items-center gap-1">
        <span className="w-1 h-1 rounded-full bg-[#FFA52F] animate-pulse" />
        <span className="text-[6px] text-slate-500 font-mono tracking-widest font-bold">L-EAT</span>
      </div>
      <div className="w-7 h-7 rounded-lg bg-[#FFA52F]/10 flex items-center justify-center text-[#FFA52F] shrink-0">
        <LucideIcon name="Clock" size={13} className="group-hover:rotate-12 transition-transform duration-300" />
      </div>
      <div className="flex flex-col text-left leading-none font-mono">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-black text-white tracking-tight">{timeStr || '--:--:-- --'}</span>
        </div>
        <span className="text-[8px] text-slate-500 font-bold mt-1 tracking-wider uppercase">
          {dateStr || 'Calculating...'} // Addis Ababa
        </span>
      </div>
    </div>
  );
}
