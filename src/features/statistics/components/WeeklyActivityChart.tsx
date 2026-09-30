import type { WeeklyActivity } from "@/features/statistics/data/statisticsData";

type Props = { days: WeeklyActivity[] };

export function WeeklyActivityChart({ days }: Props) {
    const max = Math.max(1, ...days.map((day) => day.count));
    return (
        <article className="rounded-[24px] border border-[#eee7f7] bg-white/90 p-6 shadow-[0_10px_32px_rgba(67,46,109,0.045)]">
            <h2 className="text-[20px] font-extrabold text-[#30264a]">Haftalık Aktivite</h2>
            <p className="mt-1 text-[13px] text-[#887f94]">Bu hafta birlikte cevaplanan soru sayıları</p>
            <div className="mt-8 flex h-[185px] items-end justify-between gap-2 sm:gap-5">
                {days.map((day) => (
                    <div key={day.day} className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2">
                        <span className="text-[11px] font-bold text-[#756a87]">{day.count}</span>
                        <div className="relative flex h-[135px] w-full max-w-[55px] items-end rounded-t-xl bg-[#f4effb]">
                            <div title={`${day.day}: ${day.count} soru`} className="w-full rounded-t-xl bg-gradient-to-t from-[#8254e5] to-[#d69aeb] transition-[height]" style={{ height: `${(day.count / max) * 100}%` }} />
                        </div>
                        <span className="text-[11px] font-semibold text-[#82798f]">{day.day}</span>
                    </div>
                ))}
            </div>
        </article>
    );
}
