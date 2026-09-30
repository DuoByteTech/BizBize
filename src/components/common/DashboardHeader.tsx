import { LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

import { AppContainer } from "@/components/ui/AppContainer";
import { AppLogo } from "@/components/common/AppLogo";

const navItems = [
    { label: "Ana Sayfa", path: "/panel" },
    { label: "Oyunlar", path: "/oyunlar" },
    { label: "İstatistikler", path: "/istatistikler" },
    { label: "Profil", path: "/profil" },
] as const;

export function DashboardHeader() {
    return (
        <header className="relative z-50 shrink-0 bg-white">
            <AppContainer
                className="
                    grid
                    h-[84px]
                    grid-cols-[auto_1fr_auto]
                    items-center
                    gap-6
                "
            >
                <AppLogo />

                <nav
                    className="
                        hidden
                        items-center
                        justify-center
                        gap-9
                        lg:flex
                        xl:gap-12
                    "
                >
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `
                                    relative
                                    flex
                                    h-[84px]
                                    items-center
                                    px-1
                                    text-[15px]
                                    transition-colors
                                    duration-200
                                    ${isActive
                                    ? `
                                                font-semibold
                                                text-[#6544df]
                                                after:absolute
                                                after:bottom-[17px]
                                                after:left-1/2
                                                after:h-[3px]
                                                after:w-full
                                                after:-translate-x-1/2
                                                after:rounded-full
                                                after:bg-gradient-to-r
                                                after:from-[#d24de9]
                                                after:to-[#7a4ef7]
                                            `
                                    : `
                                                font-medium
                                                text-[#211a55]
                                                hover:text-[#6d4aff]
                                            `
                                }
                                `
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <button
                    type="button"
                    className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-[14px]
                        border
                        border-[#dfd9f0]
                        bg-white
                        px-6
                        py-3
                        text-[14px]
                        font-semibold
                        text-[#17134b]
                        shadow-[0_4px_14px_rgba(55,39,120,0.03)]
                        transition-all
                        duration-200
                        hover:border-[#c8c1e8]
                        hover:bg-[#faf9ff]
                    "
                >
                    <LogOut size={16} />
                    <span>Çıkış Yap</span>
                </button>
            </AppContainer>
        </header>
    );
}