import { Heart } from "lucide-react";

import howItWorksHero from "@/assets/images/how-it-works/how-it-works-hero.png";

import { AppContainer } from "@/components/ui/AppContainer";

export function HowItWorksHero() {
    return (
        <section className="bg-white pt-3">
            <AppContainer>
                <div
                    className="
                        relative
                        min-h-[390px]
                        overflow-hidden
                        rounded-[18px_18px_46px_46px]
                        bg-gradient-to-r
                        from-[#fffaff]
                        via-white
                        to-[#faf6ff]
                        px-8
                        py-8
                        lg:px-10
                    "
                >
                    {/* ARKA PLAN DEKORLARI */}
                    <div className="pointer-events-none absolute inset-0">
                        <div
                            className="
                                absolute
                                right-[8%]
                                top-[3%]
                                h-[310px]
                                w-[620px]
                                -rotate-[8deg]
                                rounded-[50%]
                                bg-[#f8f1ff]/80
                            "
                        />

                        <div
                            className="
                                absolute
                                bottom-[-100px]
                                right-[9%]
                                h-[210px]
                                w-[560px]
                                rounded-[50%]
                                bg-[#fff0f6]
                            "
                        />
                    </div>

                    <div
                        className="
                            relative
                            z-10
                            grid
                            min-h-[320px]
                            items-center
                            lg:grid-cols-[46%_54%]
                        "
                    >
                        {/* ===================== */}
                        {/* SOL TARAF */}
                        {/* ===================== */}
                        <div className="relative z-20">
                            {/* SOL EL YAZISI */}
                            <div
                                className="
                                    absolute
                                    -left-1
                                    top-[-18px]
                                    hidden
                                    -rotate-[7deg]
                                    text-[18px]
                                    leading-[1.18]
                                    text-[#7653ef]
                                    xl:block
                                "
                                style={{
                                    fontFamily:
                                        '"Segoe Print", "Comic Sans MS", cursive',
                                }}
                            >
                                <p>Sadece</p>
                                <p>siz ikiniz için</p>
                                <p>özel bir deneyim</p>

                                <Heart
                                    className="ml-14 mt-1 h-6 w-6"
                                    strokeWidth={2}
                                />

                                <div
                                    className="
                                        ml-14
                                        mt-3
                                        h-[38px]
                                        w-[90px]
                                        rounded-bl-full
                                        border-b-2
                                        border-l-2
                                        border-[#7653ef]
                                    "
                                />
                            </div>

                            {/* ANA METİN ALANI */}
                            <div
                                className="
                                    flex
                                    flex-col
                                    items-center
                                    text-center
                                    lg:ml-[155px]
                                    lg:w-[390px]
                                "
                            >
                                {/* BAŞLIK */}
                                <h1
                                    className="
                                        whitespace-nowrap
                                        text-[clamp(48px,5vw,72px)]
                                        font-black
                                        leading-[1]
                                        tracking-[-0.055em]
                                        text-[#080650]
                                    "
                                >
                                    Nasıl{" "}
                                    <span
                                        className="
                                            bg-gradient-to-r
                                            from-[#7755ff]
                                            to-[#6044e9]
                                            bg-clip-text
                                            text-transparent
                                        "
                                    >
                                        Çalışır?
                                    </span>
                                </h1>

                                {/* 
                                    Başlık ile açıklama arasındaki
                                    gerçek boşluk.
                                */}
                                <div className="h-8 shrink-0" />

                                {/* AÇIKLAMA */}
                                <p
                                    className="
                                        w-full
                                        text-[17px]
                                        leading-[1.55]
                                        text-[#302b61]
                                    "
                                >
                                    BizBize’ye katılın, partnerinizle bağlanın ve
                                    <br />
                                    sadece size özel oyunlarla birbirinizi daha iyi
                                    <br />
                                    keşfedin.
                                    <br />
                                    Adımlar çok kolay!
                                </p>

                                {/* PEMBE ÇİZGİ */}
                                <div
                                    className="
                                        mt-3
                                        h-[3px]
                                        w-[62px]
                                        -rotate-[7deg]
                                        rounded-full
                                        bg-[#ff6ca6]
                                    "
                                />
                            </div>
                        </div>

                        {/* ===================== */}
                        {/* SAĞ TARAF */}
                        {/* ===================== */}
                        <div className="relative h-full min-h-[320px]">
                            {/* KÜÇÜK KALPLER */}
                            <Heart
                                className="
                                    absolute
                                    left-[22%]
                                    top-[4%]
                                    z-20
                                    h-7
                                    w-7
                                    -rotate-[15deg]
                                    text-[#ff6ca5]
                                "
                                strokeWidth={2.5}
                            />

                            <Heart
                                className="
                                    absolute
                                    left-[28%]
                                    top-[9%]
                                    z-20
                                    h-6
                                    w-6
                                    rotate-[12deg]
                                    text-[#ff6ca5]
                                "
                                strokeWidth={2.5}
                            />

                            {/* ÇİFT GÖRSELİ */}
                            <div
                                className="
                                    absolute
                                    bottom-[-8px]
                                    left-0
                                    right-[115px]
                                    top-0
                                    flex
                                    items-end
                                    justify-center
                                "
                            >
                                <img
                                    src={howItWorksHero}
                                    alt="Birbirine bakan çift"
                                    className="
                                        max-h-[330px]
                                        max-w-full
                                        object-contain
                                        object-bottom
                                    "
                                />
                            </div>

                            {/* SAĞ EL YAZISI */}
                            <div
                                className="
                                    absolute
                                    right-[-2px]
                                    top-[27%]
                                    z-30
                                    hidden
                                    w-[105px]
                                    rotate-[5deg]
                                    text-left
                                    text-[17px]
                                    leading-[1.18]
                                    text-[#7653ef]
                                    xl:block
                                "
                                style={{
                                    fontFamily:
                                        '"Segoe Print", "Comic Sans MS", cursive',
                                }}
                            >
                                <p>Daha iyi</p>
                                <p>sohbetler,</p>
                                <p>daha güçlü</p>
                                <p>biz ♡</p>

                                {/* OK */}
                                <div
                                    className="
                                        ml-1
                                        mt-3
                                        h-[36px]
                                        w-[58px]
                                        rotate-[12deg]
                                        rounded-br-full
                                        border-b-2
                                        border-r-2
                                        border-[#7653ef]
                                    "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </AppContainer>
        </section>
    );
}