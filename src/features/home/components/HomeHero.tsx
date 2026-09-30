import {
    ArrowRight,
    Heart,
} from "lucide-react";

import { Link } from "react-router-dom";

import coupleHeroImage from "@/assets/images/home/couple-hero.png";

import { AppContainer } from "@/components/ui/AppContainer";

export function HomeHero() {
    return (
        <section className="relative h-full overflow-hidden bg-white">
            {/* Arka plan dekorları */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className="
                        absolute
                        right-[6%]
                        top-[12%]
                        h-[52%]
                        w-[45%]
                        rounded-[45%]
                        bg-[#f8f4ff]
                    "
                />

                <div
                    className="
                        absolute
                        bottom-[-12%]
                        right-[8%]
                        h-[35%]
                        w-[46%]
                        rounded-[50%]
                        bg-[#fff4f3]
                    "
                />
            </div>

            <AppContainer
                className="
                    relative
                    grid
                    h-full
                    grid-cols-[45%_55%]
                    items-stretch
                    gap-0
                "
            >
                {/* SOL TARAF */}
                <div
                    className="
                        relative
                        z-20
                        flex
                        h-full
                        min-h-0
                        flex-col
                        justify-between
                        pb-5
                        pt-8
                    "
                >
                    {/* ÜST ALAN */}
                    <div
                        className="
                            flex
                            min-h-0
                            flex-1
                            items-center
                        "
                    >
                        <div className="flex flex-col gap-5">
                            {/* ANA BAŞLIK */}
                            <h1
                                className="
                                    flex
                                    max-w-[600px]
                                    flex-col
                                    gap-1
                                    text-[clamp(40px,3.9vw,60px)]
                                    font-black
                                    leading-[1.08]
                                    tracking-[-0.04em]
                                    text-[#080650]
                                "
                            >
                                <span className="block whitespace-nowrap">
                                    Birbirinizi daha
                                </span>

                                <span
                                    className="
                                        flex
                                        items-center
                                        whitespace-nowrap
                                    "
                                >
                                    <span>
                                        iyi{" "}
                                        <span
                                            className="
                                                bg-gradient-to-r
                                                from-[#7755ff]
                                                to-[#5e44eb]
                                                bg-clip-text
                                                text-transparent
                                            "
                                        >
                                            keşfedin
                                        </span>
                                    </span>

                                    <Heart
                                        className="
                                            ml-4
                                            h-[clamp(30px,2.9vw,42px)]
                                            w-[clamp(30px,2.9vw,42px)]
                                            shrink-0
                                            text-[#ff72a4]
                                        "
                                        fill="currentColor"
                                        strokeWidth={0}
                                    />
                                </span>
                            </h1>

                            {/* AÇIKLAMA */}
                            <p
                                className="
                                    max-w-[560px]
                                    text-[clamp(15px,1.25vw,19px)]
                                    leading-[1.6]
                                    text-[#211c56]
                                "
                            >
                                Eğlenceli sorular, anlamlı sohbetler ve daha güçlü
                                bir bağ için BizBize yanınızda.
                            </p>
                        </div>
                    </div>
                    {/* ALT ALAN */}
                    <div
                        className="
        flex
        shrink-0
        -translate-y-5
        flex-col
        items-start
        gap-5
    "
                    >
                        {/* HEMEN BAŞLA */}
                        <Link
                            to="/kayit"
                            style={{
                                color: "#ffffff",
                            }}
                            className="
                                group
                                inline-flex
                                h-[56px]
                                min-w-[275px]
                                items-center
                                justify-center
                                gap-7
                                rounded-[20px]
                                bg-gradient-to-r
                                from-[#6e4cf5]
                                to-[#764ef4]
                                px-8
                                text-[17px]
                                font-semibold
                                shadow-[0_13px_28px_rgba(109,74,255,0.2)]
                                transition-all
                                duration-200
                                hover:-translate-y-0.5
                                hover:shadow-[0_16px_32px_rgba(109,74,255,0.26)]
                            "
                        >
                            <span className="text-white">
                                Hemen Başla
                            </span>

                            <ArrowRight
                                size={22}
                                strokeWidth={2}
                                className="
                                    shrink-0
                                    text-white
                                    transition-transform
                                    duration-200
                                    group-hover:translate-x-1
                                "
                            />
                        </Link>

                        {/* SOL ALT EL YAZISI */}
                        <div
                            className="
                                w-fit
                                -rotate-[5deg]
                                text-[#7050ef]
                            "
                            style={{
                                fontFamily:
                                    '"Segoe Print", "Comic Sans MS", cursive',
                            }}
                        >
                            <p
                                className="
                                    text-[clamp(17px,1.45vw,21px)]
                                    leading-[1.1]
                                "
                            >
                                Daha fazla
                            </p>

                            <p
                                className="
                                    ml-3
                                    text-[clamp(17px,1.45vw,21px)]
                                    leading-[1.1]
                                "
                            >
                                soru, daha fazla biz{" "}
                                <span className="text-[#ff71aa]">
                                    ♡
                                </span>
                            </p>

                            <div
                                className="
                                    ml-12
                                    mt-2
                                    h-[3px]
                                    w-[105px]
                                    -rotate-[7deg]
                                    rounded-full
                                    bg-[#ff6ca1]
                                "
                            />
                        </div>
                    </div>
                </div>

                {/* SAĞ TARAF */}
                <div
                    className="
                        relative
                        z-10
                        h-full
                        min-h-0
                        min-w-0
                    "
                >
                    {/* ÜST EL YAZISI */}
                    <div
                        className="
                            absolute
                            left-[17%]
                            top-[13%]
                            z-20
                            -rotate-[7deg]
                            text-[#7653ef]
                        "
                        style={{
                            fontFamily:
                                '"Segoe Print", "Comic Sans MS", cursive',
                        }}
                    >
                        <p
                            className="
                                text-[clamp(19px,1.8vw,26px)]
                                leading-[1.08]
                            "
                        >
                            Aynı sorular
                        </p>

                        <p
                            className="
                                text-[clamp(19px,1.8vw,26px)]
                                leading-[1.08]
                            "
                        >
                            Daha güçlü biz
                        </p>

                        <p className="mt-1 text-center text-[21px] leading-none">
                            ♡
                        </p>
                    </div>

                    {/* SAĞ ÜST BÜYÜK KALP */}
                    <Heart
                        className="
                            absolute
                            right-[8%]
                            top-[13%]
                            h-[clamp(65px,6vw,90px)]
                            w-[clamp(65px,6vw,90px)]
                            rotate-[10deg]
                            text-[#f5bfd8]
                        "
                        fill="currentColor"
                        strokeWidth={0}
                    />

                    {/* ÇİFT GÖRSELİ */}
                    <img
                        src={coupleHeroImage}
                        alt="Birbirine bakan çift"
                        className="
                            absolute
                            bottom-0
                            right-0
                            z-10
                            h-[74%]
                            w-auto
                            max-w-none
                            object-contain
                            object-bottom
                        "
                    />
                </div>
            </AppContainer>
        </section>
    );
}