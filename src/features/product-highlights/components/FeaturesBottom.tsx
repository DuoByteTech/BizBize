import {
    ArrowRight,
    Heart,
    Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import { AppContainer } from "@/components/ui/AppContainer";

import coupleHeroImage from "@/assets/images/home/couple-hero.png";

export function FeaturesBottom() {
    return (
        <section
            className="
                relative
                overflow-hidden
                bg-white
                pt-5
                pb-12
                sm:pt-7
                sm:pb-14
            "
        >
            <AppContainer>

                <div
                    className="
                        relative
                        mx-auto
                        grid
                        max-w-[1200px]
                        items-center
                        gap-8
                        overflow-hidden
                        rounded-[34px]
                        bg-gradient-to-r
                        from-[#F5EFFF]
                        via-[#FCF7FF]
                        to-[#FFF0F5]
                        px-8
                        py-10
                        lg:min-h-[370px]
                        lg:grid-cols-[55%_45%]
                        lg:px-14
                    "
                >
                    {/* ARKA PLAN DEKORASYONU */}

                    <div
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            absolute
                            -right-20
                            -top-20
                            h-[350px]
                            w-[350px]
                            rounded-full
                            bg-white/40
                            blur-3xl
                        "
                    />

                    {/* ========================= */}
                    {/* SOL BÖLÜM                 */}
                    {/* ========================= */}

                    <div
                        className="
                            relative
                            z-10
                            flex
                            flex-col
                            items-center
                            text-center
                            lg:items-start
                            lg:text-left
                        "
                    >
                        {/* ÜST ETİKET */}

                        <div
                            className="
                                flex
                                items-center
                                gap-2
                                text-[14px]
                                font-bold
                                text-[#8655E8]
                            "
                        >
                            <Sparkles size={18} />

                            Birlikte başlayın
                        </div>

                        {/* BAŞLIK */}

                        <h2
                            className="
                                mt-5
                                max-w-[540px]
                                text-[33px]
                                font-black
                                leading-[1.2]
                                tracking-[-0.04em]
                                text-[#100C4E]
                                sm:text-[43px]
                            "
                        >
                            Daha güzel sohbetler,

                            <span
                                className="
                                    block
                                    bg-gradient-to-r
                                    from-[#E85B9D]
                                    to-[#8652E9]
                                    bg-clip-text
                                    text-transparent
                                "
                            >
                                daha güçlü biz.
                            </span>
                        </h2>

                        {/* AÇIKLAMA */}

                        <p
                            className="
                                mt-5
                                max-w-[470px]
                                text-[15px]
                                leading-[1.8]
                                text-[#645D7E]
                            "
                        >
                            Partnerinle yeni konular keşfetmek,
                            eğlenmek ve birlikte güzel
                            anılar biriktirmek için
                            ilk adımı at.
                        </p>

                        {/* HEMEN BAŞLA BUTONU */}

                        <Link
                            to="/kayit"
                            className="
                                group
                                mt-8
                                inline-flex
                                h-[54px]
                                items-center
                                justify-center
                                gap-4
                                rounded-[17px]
                                bg-gradient-to-r
                                from-[#704CF4]
                                to-[#8053F5]
                                px-8
                                text-[15px]
                                font-bold
                                !text-white
                                shadow-[0_12px_28px_rgba(109,74,255,0.2)]
                                transition-all
                                duration-200
                                hover:-translate-y-0.5
                            "
                        >
                            Hemen Başla

                            <ArrowRight
                                size={19}
                                className="
                                    transition-transform
                                    group-hover:translate-x-1
                                "
                            />
                        </Link>

                    </div>

                    {/* ========================= */}
                    {/* SAĞ GÖRSEL                */}
                    {/* ========================= */}

                    <div
                        className="
                            relative
                            flex
                            min-h-[270px]
                            items-center
                            justify-center
                            lg:min-h-[330px]
                        "
                    >
                        {/* GÖRSEL ARKASI */}

                        <div
                            className="
                                absolute
                                h-[280px]
                                w-[280px]
                                rounded-full
                                bg-white/50
                                blur-[35px]
                            "
                        />

                        {/* ÇİFT GÖRSELİ */}

                        <img
                            src={coupleHeroImage}
                            alt="Birlikte vakit geçiren çift"
                            className="
                                relative
                                z-10
                                max-h-[330px]
                                w-full
                                object-contain
                                drop-shadow-[0_20px_30px_rgba(73,42,112,0.08)]
                            "
                        />

                        {/* KALP DEKORASYONU */}

                        <Heart
                            aria-hidden="true"
                            size={35}
                            fill="#F17FA9"
                            className="
                                absolute
                                right-[5%]
                                top-[8%]
                                z-20
                                rotate-12
                                text-[#F17FA9]
                            "
                        />
                    </div>

                </div>

            </AppContainer>
        </section>
    );
}