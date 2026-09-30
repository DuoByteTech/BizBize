import type { ReactNode } from "react";

type StatSummaryCardProps = {
    label: string;
    value: string;
    note: string;
    icon: ReactNode;
    iconBackground: string;
};

export function StatSummaryCard({ label, value, note, icon, iconBackground }: StatSummaryCardProps) {
    return (
        <article className="flex min-h-[148px] items-start gap-4 rounded-[22px] border border-[#eee8f6] bg-white/90 p-5 shadow-[0_10px_32px_rgba(67,46,109,0.045)] sm:p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl" style={{ background: iconBackground }}>
                {icon}
            </div>
            <div className="min-w-0">
                <p className="text-[13px] font-semibold text-[#847c93]">{label}</p>
                <p className="mt-1 text-[29px] font-extrabold tracking-tight text-[#30264a]">{value}</p>
                <p className="mt-1 text-[12px] leading-5 text-[#91899c]">{note}</p>
            </div>
        </article>
    );
}
