import {
    ArrowRight,
    Heart,
    Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import { AppContainer } from "@/components/ui/AppContainer";

export function FeaturesHero() {
    return (
        <section
            className="
                relative
                overflow-hidden
                bg-white
                pb-12
                pt-12
                sm:pt-16
                lg:pb-16
            "
        >
            {/* Arka plan dekorasyonları */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    overflow-hidden
                "
            >
                <div
                    className="
                        absolute
                        -left-32
                        top-[-130px]
                        h-[420px]
                        w-[420px]
                        rounded-full
                        bg-[#F2E9FF]/60
                        blur-[90px]
                    "
                />

                <div
                    className="
                        absolute
                        -right-28
                        bottom-[-150px]
                        h-[420px]
                        w-[420px]
                        rounded-full
                        bg-[#FFEAF3]/70
                        blur-[100px]
                    "
                />
            </div>

            <AppContainer className="relative">

                <div
                    className="
                        mx-auto
                        flex
                        max-w-[850px]
                        flex-col
                        items-center
                        text-center
                    "
                >
                    {/* Üst etiket */}

                    <div
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-[#E9DEFF]
                            bg-[#F7F2FF]
                            px-5
                            py-2.5
                            text-[13px]
                            font-bold
                            text-[#7650E8]
                        "
                    >
                        <Sparkles size={17} />

                        Birlikte keşfetmenin yeni yolu
                    </div>

                    {/* Başlık */}

                    <h1
                        className="
                            mt-7
                            text-[clamp(36px,5vw,62px)]
                            font-black
                            leading-[1.15]
                            tracking-[-0.05em]
                            text-[#080650]
                        "
                    >
                        Birlikte daha çok

                        <span
                            className="
                                mt-1
                                block
                                bg-gradient-to-r
                                from-[#E85BA0]
                                via-[#A354E9]
                                to-[#704CF4]
                                bg-clip-text
                                text-transparent
                            "
                        >
                            şey keşfedin
                        </span>
                    </h1>

                    {/* Açıklama */}

                    <p
                        className="
                            mt-6
                            max-w-[650px]
                            text-[16px]
                            leading-[1.8]
                            text-[#514A72]
                            sm:text-[18px]
                        "
                    >
                        BizBize ile eğlenceli sorular sorun,
                        farklı konular hakkında konuşun ve
                        birbirinizi her geçen gün daha
                        yakından tanıyın.
                    </p>

                    {/* Butonlar */}

                    <div
                        className="
                            mt-9
                            flex
                            w-full
                            flex-col
                            items-center
                            justify-center
                            gap-4
                            sm:w-auto
                            sm:flex-row
                        "
                    >
                        <Link
                            to="/kayit"
                            className="
                                group
                                inline-flex
                                h-[54px]
                                w-full
                                items-center
                                justify-center
                                gap-4
                                rounded-[16px]
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
                                sm:w-auto
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

                        <Link
                            to="/nasil-calisir"
                            className="
                                inline-flex
                                h-[54px]
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-[16px]
                                border
                                border-[#DED5F4]
                                bg-white
                                px-8
                                text-[15px]
                                font-bold
                                text-[#6849DD]
                                transition-all
                                duration-200
                                hover:border-[#BFADEE]
                                hover:bg-[#FAF8FF]
                                sm:w-auto
                            "
                        >
                            Nasıl Çalışır?
                        </Link>
                    </div>

                    {/* Alt yazı */}

                    <div
                        className="
                            mt-9
                            flex
                            items-center
                            justify-center
                            gap-2
                            text-[13px]
                            font-medium
                            text-[#978BA7]
                        "
                    >
                        <Heart
                            size={16}
                            fill="#F177A5"
                            className="text-[#F177A5]"
                        />

                        Sadece siz ikiniz için

                        <Heart
                            size={16}
                            fill="#F177A5"
                            className="text-[#F177A5]"
                        />
                    </div>

                </div>

            </AppContainer>
        </section>
    );
}