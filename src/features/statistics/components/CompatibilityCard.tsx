type CompatibilityCardProps = {
    percentage: number | null;
    same: number;
    different: number;
};

export function CompatibilityCard({ percentage, same, different }: CompatibilityCardProps) {
    const percent = percentage ?? 0;
    return (
        <article className="flex h-full flex-col justify-between rounded-[24px] border border-[#eee7f7] bg-[linear-gradient(135deg,#fff_0%,#f6efff_100%)] p-6 shadow-[0_10px_32px_rgba(67,46,109,0.05)]">
            <div>
                <span className="text-[13px] font-bold text-[#8257db]">CEVAP UYUMU</span>
                <h2 className="mt-2 text-[20px] font-extrabold text-[#30264a]">Ne kadar aynı düşünüyoruz?</h2>
                <p className="mt-1 text-[13px] leading-6 text-[#82798f]">İkinizin de cevapladığı sorulardaki ortak cevap oranı.</p>
            </div>
            <div className="my-7 flex justify-center">
                <div className="flex h-[190px] w-[190px] items-center justify-center rounded-full p-[15px] shadow-[0_8px_25px_rgba(92,62,160,.08)]" style={{ background: `conic-gradient(#8c5ce7 0 ${percent}%, #e9e1f3 ${percent}% 100%)` }}>
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white">
                        <span className="text-[43px] font-black tracking-tighter text-[#5034a6]">{percentage === null ? "—" : `%${percentage}`}</span>
                        <span className="mt-1 text-xs font-semibold text-[#9389a1]">Ortak cevap oranı</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#e9f8f4] p-4 text-center"><p className="text-[24px] font-extrabold text-[#279987]">{same}</p><p className="mt-1 text-xs font-semibold text-[#528c82]">Aynı cevap</p></div>
                <div className="rounded-2xl bg-[#fff3e6] p-4 text-center"><p className="text-[24px] font-extrabold text-[#d79639]">{different}</p><p className="mt-1 text-xs font-semibold text-[#ac8a61]">Farklı cevap</p></div>
            </div>
        </article>
    );
}
