import { AppContainer } from "@/components/ui/AppContainer";
import { InvitePartnerCard } from "@/features/couple/components/InvitePartnerCard";
import { JoinCoupleCard } from "@/features/couple/components/JoinCoupleCard";

export function CoupleSetupPage() {
    return (
        <section className="relative min-h-[calc(100vh-74px)] overflow-hidden bg-[radial-gradient(circle_at_center,#ffffff_0%,#fcf9ff_48%,#f5efff_100%)]">
            {/* Sol arka plan ışığı */}
            <div className="pointer-events-none absolute left-[-160px] top-20 h-[380px] w-[380px] rounded-full bg-purple-200/20 blur-[90px]" />

            {/* Sağ alt arka plan ışığı */}
            <div className="pointer-events-none absolute bottom-[-160px] right-[-130px] h-[400px] w-[400px] rounded-full bg-pink-200/25 blur-[100px]" />

            {/* İçeriği header'dan kalan alanda dikey ortala */}
            <AppContainer className="relative flex min-h-[calc(100vh-74px)] flex-col justify-center py-5">
                <div>
                    {/* Partner kartları */}
                    <div className="grid items-stretch gap-6 lg:grid-cols-2">
                        <InvitePartnerCard />
                        <JoinCoupleCard />
                    </div>

                    {/* Alt kalp + kesik çizgi + ok dekorasyonu */}
                    <div className="pointer-events-none relative hidden h-[58px] lg:block">
                        <svg
                            viewBox="0 0 620 90"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-1/2 top-0 h-[58px] w-[480px] -translate-x-1/2"
                            aria-hidden="true"
                        >
                            {/* Kalp */}
                            <path
                                d="
                                    M60 20
                                    C53 10 38 11 34 22
                                    C29 37 45 48 60 58
                                    C75 48 91 37 86 22
                                    C82 11 67 10 60 20
                                    Z
                                "
                                stroke="#F47CA6"
                                strokeWidth="2.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            {/* Kalpten başlayan kıvrımlı kesik çizgi */}
                            <path
                                d="
                                    M105 28
                                    C155 65 225 72 295 67
                                    C365 62 420 43 455 17
                                "
                                stroke="#F47CA6"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeDasharray="8 8"
                            />

                            {/* Sağdaki karta doğru yükselen ok */}
                            <path
                                d="
                                    M455 17
                                    C463 11 470 6 478 2
                                "
                                stroke="#F47CA6"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />

                            {/* Ok başı */}
                            <path
                                d="
                                    M467 2
                                    L478 2
                                    L476 13
                                "
                                stroke="#F47CA6"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </AppContainer>
        </section>
    );
}