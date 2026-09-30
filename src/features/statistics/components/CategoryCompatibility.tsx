import type { CategoryStat } from "@/features/statistics/data/statisticsData";

type Props = { categories: CategoryStat[] };

export function CategoryCompatibility({ categories }: Props) {
    return (
        <article className="h-full rounded-[24px] border border-[#eee7f7] bg-white/90 p-6 shadow-[0_10px_32px_rgba(67,46,109,0.045)]">
            <h2 className="text-[20px] font-extrabold text-[#30264a]">Kategorilere Göre Uyum</h2>
            <p className="mt-1 text-[13px] text-[#887f94]">Hangi konularda benzer cevaplar verdiniz?</p>
            <div className="mt-7 space-y-6">
                {categories.map((category) => {
                    const total = category.same + category.different;
                    const percentage = total ? Math.round((category.same / total) * 100) : 0;
                    return (
                        <div key={category.id}>
                            <div className="mb-2 flex items-center justify-between gap-3">
                                <span className="min-w-0 truncate text-[13px] font-bold text-[#4c4262]">{category.name}</span>
                                <span className="shrink-0 text-[13px] font-extrabold text-[#45365e]">{total ? `%${percentage}` : "—"}</span>
                            </div>
                            <div role="progressbar" aria-label={`${category.name} uyum oranı`} aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100} className="h-3 overflow-hidden rounded-full" style={{ background: category.paleColor }}>
                                <div className="h-full rounded-full transition-[width]" style={{ width: `${percentage}%`, background: category.color }} />
                            </div>
                            <p className="mt-1.5 text-[11px] text-[#958ca0]">{category.same} aynı · {category.different} farklı cevap</p>
                        </div>
                    );
                })}
            </div>
        </article>
    );
}
