import { ArrowRight, CalendarDays, Gamepad2, Heart, MessageCircleHeart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { AppContainer } from "@/components/ui/AppContainer";
import { CategoryCompatibility } from "@/features/statistics/components/CategoryCompatibility";
import { CompatibilityCard } from "@/features/statistics/components/CompatibilityCard";
import { StatSummaryCard } from "@/features/statistics/components/StatSummaryCard";
import { WeeklyActivityChart } from "@/features/statistics/components/WeeklyActivityChart";
import { categoryStats, completedGames, sharedDays, weeklyActivity } from "@/features/statistics/data/statisticsData";

export function StatisticsPage() {
    const same = categoryStats.reduce((sum, category) => sum + category.same, 0);
    const different = categoryStats.reduce((sum, category) => sum + category.different, 0);
    const total = same + different;
    const compatibility = total ? Math.round((same / total) * 100) : null;

    return (
        <section className="relative min-h-[calc(100vh-84px)] overflow-hidden bg-[radial-gradient(circle_at_top,#ffffff_0%,#fcf9ff_48%,#f5effd_100%)] py-8 sm:py-10">
            <div aria-hidden="true" className="pointer-events-none absolute -left-44 top-24 h-[390px] w-[390px] rounded-full bg-purple-200/20 blur-[100px]" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-0 h-[390px] w-[390px] rounded-full bg-pink-200/20 blur-[100px]" />
            <AppContainer className="relative">
                <div className="mx-auto max-w-[1190px]">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full bg-[#f2eaff] px-3 py-1.5 text-xs font-bold text-[#7d50dc]"><Sparkles size={14} /> Birlikte keşfediyoruz</span>
                            <h1 className="mt-3 text-[31px] font-extrabold tracking-[-0.04em] text-[#30264a] sm:text-[37px]">Bizim İstatistiklerimiz <span className="text-[#ef6796]">♡</span></h1>
                            <p className="mt-2 max-w-[640px] text-[14px] leading-6 text-[#81788e]">Her soru yeni bir keşif! Birlikte verdiğiniz cevapları ve oyun yolculuğunuzu burada görebilirsiniz.</p>
                        </div>
                        <div className="flex shrink-0 items-center gap-2 self-start rounded-full border border-[#f0e4f0] bg-white/85 px-4 py-3 shadow-sm"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ffe2eb] text-lg">👩🏻</span><Heart size={19} fill="#ec658c" className="text-[#ec658c]" /><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e9dcfa] text-lg">👨🏻</span></div>
                    </div>
                    <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        <StatSummaryCard label="Tamamlanan oyun" value={String(completedGames)} note="Birlikte bitirdiğiniz turlar" icon={<Gamepad2 size={24} className="text-[#8055da]" />} iconBackground="#f0e9ff" />
                        <StatSummaryCard label="Cevaplanan soru" value={String(total)} note="Karşılaştırılan ortak sorular" icon={<MessageCircleHeart size={24} className="text-[#db7197]" />} iconBackground="#fff0f5" />
                        <StatSummaryCard label="Ortak cevap oranı" value={compatibility === null ? "—" : `%${compatibility}`} note="Aynı verilen cevapların yüzdesi" icon={<Heart size={23} className="text-[#e55e82]" />} iconBackground="#ffe9f0" />
                        <StatSummaryCard label="Birlikte geçen gün" value={String(sharedDays)} note="Örnek etkinlik süresi" icon={<CalendarDays size={24} className="text-[#40a99c]" />} iconBackground="#e9f9f6" />
                    </div>
                    <div className="mt-5 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
                        <CompatibilityCard percentage={compatibility} same={same} different={different} />
                        <CategoryCompatibility categories={categoryStats} />
                    </div>
                    <div className="mt-5 grid items-stretch gap-5 lg:grid-cols-[1.15fr_.85fr]">
                        <WeeklyActivityChart days={weeklyActivity} />
                        <div className="relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#e9def9] bg-gradient-to-br from-[#eee5ff] via-[#f8efff] to-[#ffeaf2] p-7 shadow-[0_10px_32px_rgba(67,46,109,0.04)]">
                            <Sparkles size={30} className="text-[#a176e6]" />
                            <div className="mt-5"><h2 className="max-w-[330px] text-[25px] font-extrabold leading-tight text-[#4b3376]">Birbirinizi keşfetmeye devam edin! ♡</h2><p className="mt-3 max-w-[330px] text-[13px] leading-6 text-[#82708e]">Her yeni oyun, birbirinize dair yepyeni bir şey öğrenmek için bir fırsat.</p></div>
                            <Link to="/oyunlar" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#7450df] px-6 py-3 text-[13px] font-bold !text-white shadow-[0_8px_20px_rgba(107,73,201,.2)] transition hover:bg-[#6039cf]">Oyunlara Git <ArrowRight size={17} /></Link>
                        </div>
                    </div>
                    <p className="mt-5 text-center text-[11px] text-[#988fa3]">Bu sayfadaki sayılar şu anda tasarımı göstermek amacıyla kullanılan örnek verilerdir.</p>
                </div>
            </AppContainer>
        </section>
    );
}
