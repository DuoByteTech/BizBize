import { AppContainer } from "@/components/ui/AppContainer";

import { FeatureCard } from "./FeatureCard";
import { featuresData } from "../data/featuresData";

export function FeaturesGrid() {
    return (
        <section
            className="
                relative
                overflow-hidden
                bg-[radial-gradient(circle_at_top,#ffffff_0%,#FCF9FF_48%,#F6F0FC_100%)]
                pt-14
                pb-5
                sm:pt-16
                sm:pb-7
            "
        >
            {/* ARKA PLAN DEKORASYONLARI */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -left-40
                    top-28
                    h-[360px]
                    w-[360px]
                    rounded-full
                    bg-purple-200/20
                    blur-[100px]
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -right-36
                    bottom-0
                    h-[380px]
                    w-[380px]
                    rounded-full
                    bg-pink-200/20
                    blur-[100px]
                "
            />

            <AppContainer className="relative">

                {/* ========================= */}
                {/* BÖLÜM BAŞLIĞI              */}
                {/* ========================= */}

                <div
                    className="
                        mx-auto
                        flex
                        w-full
                        max-w-[720px]
                        flex-col
                        items-center
                        justify-center
                        text-center
                    "
                >
                    {/* ÜST ETİKET */}

                    <span
                        className="
                            block
                            text-center
                            text-[13px]
                            font-extrabold
                            uppercase
                            tracking-[0.18em]
                            text-[#8C65E7]
                        "
                    >
                        BİZBİZE ÖZELLİKLERİ
                    </span>

                    {/* ANA BAŞLIK */}

                    <h2
                        className="
                            mt-4
                            w-full
                            text-center
                            text-[30px]
                            font-black
                            leading-[1.2]
                            tracking-[-0.04em]
                            text-heading
                            sm:text-[39px]
                        "
                    >
                        Her şey{" "}

                        <span
                            className="
                                bg-gradient-to-r
                                from-[#E85C9F]
                                to-[#7750ED]
                                bg-clip-text
                                text-transparent
                            "
                        >
                            ikiniz için
                        </span>
                    </h2>

                    {/* AÇIKLAMA */}

                    <div
                        className="
                            mt-5
                            flex
                            w-full
                            items-center
                            justify-center
                        "
                    >
                        <p
                            className="
                                mx-auto
                                w-full
                                max-w-[480px]
                                text-center
                                text-[15px]
                                font-normal
                                leading-[1.8]
                                text-[#81788F]
                                [text-wrap:balance]
                            "
                        >
                            Eğlenceli oyunlardan anlamlı sohbetlere
                            kadar birbirinizi keşfetmenizi sağlayacak
                            özelliklerle tanışın.
                        </p>
                    </div>

                </div>

                {/* ========================= */}
                {/* ÖZELLİK KARTLARI           */}
                {/* ========================= */}

                <div
                    className="
                        mx-auto
                        mt-12
                        grid
                        max-w-[1150px]
                        grid-cols-1
                        gap-6
                        md:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {featuresData.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            feature={feature}
                        />
                    ))}
                </div>

            </AppContainer>
        </section>
    );
}