import { Link, NavLink } from "react-router-dom";

import { AppContainer } from "@/components/ui/AppContainer";
import { AppLogo } from "./AppLogo";

const menuItems = [
    {
        label: "Ana Sayfa",
        to: "/",
    },
    {
        label: "Nasıl Çalışır?",
        to: "/nasil-calisir",
    },
    {
        label: "Oyunlar",
        to: "/oyunlar",
    },
    {
        label: "Özellikler",
        to: "/ozellikler",
    },
    {
        label: "SSS",
        to: "/sss",
    },
] as const;

export function Header() {
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
                {/* LOGO */}
                <AppLogo />

                {/* NAVIGATION */}
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
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.label}
                            to={item.to}
                            end={item.to === "/"}
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

                {/* SAĞ BUTONLAR */}
                <div className="flex items-center gap-4">
                    <Link
                        to="/giris"
                        className="
                            hidden
                            items-center
                            justify-center
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
                            sm:inline-flex
                        "
                    >
                        Giriş Yap
                    </Link>

                    <Link
                        to="/kayit"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            rounded-[14px]
                            bg-gradient-to-r
                            from-[#6b49f4]
                            to-[#7a4ff5]
                            px-6
                            py-3
                            text-[15px]
                            font-semibold
                            !text-white
                            shadow-[0_10px_25px_rgba(109,74,255,0.18)]
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:shadow-[0_14px_30px_rgba(109,74,255,0.25)]
                        "
                    >
                        Kayıt Ol
                    </Link>
                </div>
            </AppContainer>
        </header>
    );
}