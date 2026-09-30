import {
    BarChart3,
    Gamepad2,
    Grid2X2,
    Heart,
} from "lucide-react";

import { AppContainer } from "@/components/ui/AppContainer";
import { CoupleSummary } from "@/features/dashboard/components/CoupleSummary";
import { DashboardActionCard } from "@/features/dashboard/components/DashboardActionCard";
import { DashboardQuote } from "@/features/dashboard/components/DashboardQuote";

export function DashboardHomePage() {
    return (
        <section className="relative min-h-[calc(100vh-74px)] overflow-hidden bg-[radial-gradient(circle_at_top,#ffffff_0%,#fcf9ff_45%,#f5effd_100%)] py-10 sm:py-12">
            <div className="pointer-events-none absolute left-[-180px] top-24 h-[420px] w-[420px] rounded-full bg-purple-200/20 blur-[100px]" />

            <div className="pointer-events-none absolute bottom-[-180px] right-[-160px] h-[440px] w-[440px] rounded-full bg-pink-200/20 blur-[100px]" />

            <AppContainer className="relative">
                <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                        <h1 className="text-[34px] font-extrabold tracking-[-0.04em] text-heading sm:text-[38px]">
                            Merhaba Onur 👋
                        </h1>

                        <p className="mt-2 text-[15px] text-[#80788d] sm:text-[16px]">
                            Bugün partnerinle biraz daha birbirinizi keşfetmeye
                            ne dersin?
                        </p>
                    </div>

                    <CoupleSummary />
                </div>

                <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                    <DashboardActionCard
                        title="Oynamaya Başla"
                        description="Rastgele sorularla oynamaya başla."
                        to="/oyunlar"
                        icon={
                            <Gamepad2
                                size={32}
                                strokeWidth={2.2}
                                className="text-[#7546e8]"
                            />
                        }
                        iconClassName="bg-[#eee7ff]"
                    />

                    <DashboardActionCard
                        title="Kategoriler"
                        description="İlginizi çeken konularda oynayın."
                        to="/kategoriler"
                        icon={
                            <Grid2X2
                                size={31}
                                strokeWidth={2.2}
                                className="text-[#3688e9]"
                            />
                        }
                        iconClassName="bg-[#e9f4ff]"
                    />

                    <DashboardActionCard
                        title="İstatistikler"
                        description="Uyumunuzu keşfedin."
                        to="/istatistikler"
                        icon={
                            <BarChart3
                                size={31}
                                strokeWidth={2.2}
                                className="text-[#8149e8]"
                            />
                        }
                        iconClassName="bg-[#f0e8ff]"
                    />

                    <DashboardActionCard
                        title="Çiftimiz"
                        description="Profilinizi ve davet kodunuzu yönetin."
                        to="/ciftimiz"
                        icon={
                            <Heart
                                size={31}
                                fill="#e85678"
                                className="text-[#e85678]"
                            />
                        }
                        iconClassName="bg-[#fff0f4]"
                    />
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]">
                    <DashboardQuote />

                    <div className="relative hidden min-h-[84px] items-center justify-center lg:flex">
                        <div className="flex items-end gap-2">
                            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#ffdbe5] text-3xl shadow-sm">
                                👩🏻
                            </div>

                            <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#eadcf8] text-3xl shadow-sm">
                                👨🏻
                            </div>
                        </div>

                        <div className="ml-4 -rotate-3 text-center">
                            <p className="font-[cursive] text-[20px] font-semibold text-[#8966b1]">
                                Aynı takım
                            </p>

                            <Heart
                                size={22}
                                className="mx-auto mt-1 text-[#8966b1]"
                            />
                        </div>
                    </div>
                </div>
            </AppContainer>
        </section>
    );
}