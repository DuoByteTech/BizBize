import { Heart } from "lucide-react";

import stepRegister from "@/assets/images/how-it-works/step-register.png";
import stepCode from "@/assets/images/how-it-works/step-code.png";
import stepPartner from "@/assets/images/how-it-works/step-partner.png";
import stepPlay from "@/assets/images/how-it-works/step-play.png";

import { AppContainer } from "@/components/ui/AppContainer";

const steps = [
    {
        number: 1,
        title: "Hesap Oluştur",
        description: (
            <>
                Kısa bir kayıt işlemi ile
                <br />
                hemen hesabını oluştur.
            </>
        ),
        image: stepRegister,
        background: "bg-[#fff1f5]",
        numberBackground: "bg-[#ffc8dc]",
        numberColor: "text-[#c53f78]",
    },
    {
        number: 2,
        title: "Partnerine Kodu Ver",
        description: (
            <>
                Sistemin sana oluşturduğu
                <br />
                özel kodu partnerinle paylaş.
            </>
        ),
        image: stepCode,
        background: "bg-[#f4efff]",
        numberBackground: "bg-[#d8c9ff]",
        numberColor: "text-[#3121a3]",
    },
    {
        number: 3,
        title: "Partnerin Kodu Girsin",
        description: (
            <>
                Partnerin, aldığı kodu kendi
                <br />
                hesabında ilgili alana girerek
                <br />
                sana bağlansın.
            </>
        ),
        image: stepPartner,
        background: "bg-[#fff7eb]",
        numberBackground: "bg-[#ffe0ae]",
        numberColor: "text-[#db7900]",
    },
    {
        number: 4,
        title: "Oyunlara Başlayın",
        description: (
            <>
                Artık hazırsınız!
                <br />
                Eğlenceli sorular ve oyunlarla
                <br />
                birbirinizi daha iyi keşfedin.
            </>
        ),
        image: stepPlay,
        background: "bg-[#fff0f5]",
        numberBackground: "bg-[#ffc5dc]",
        numberColor: "text-[#c84078]",
    },
];

export function HowItWorksSteps() {
    return (
        <section className="bg-white pb-5 pt-4">
            <AppContainer>
                {/* BAŞLIK */}
                <div className="text-center">
                    <div className="flex items-center justify-center gap-5">
                        <span
                            className="
                                hidden
                                -rotate-[18deg]
                                text-[34px]
                                font-black
                                text-[#ff6ca5]
                                md:block
                            "
                        >
                            〃
                        </span>

                        <h2
                            className="
                                text-[clamp(30px,3.2vw,44px)]
                                font-black
                                tracking-[-0.045em]
                                text-[#080650]
                            "
                        >
                            4 Adımda{" "}
                            <span
                                className="
                                    bg-gradient-to-r
                                    from-[#754fff]
                                    to-[#5f44eb]
                                    bg-clip-text
                                    text-transparent
                                "
                            >
                                Başlayın
                            </span>
                        </h2>

                        <Heart
                            className="
                                hidden
                                h-8
                                w-8
                                rotate-[15deg]
                                text-[#ff6ca5]
                                md:block
                            "
                            strokeWidth={2.5}
                        />
                    </div>

                    <p className="mt-1 text-[16px] text-[#4c4771]">
                        Partnerinizle birkaç adımda bağlantı kurun ve eğlenceli
                        oyunlara hemen başlayın.
                    </p>
                </div>

                {/* KARTLAR */}
                <div
                    className="
                        relative
                        mt-5
                        grid
                        gap-7
                        md:grid-cols-2
                        xl:grid-cols-4
                    "
                >
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={`
                                relative
                                min-h-[325px]
                                overflow-visible
                                rounded-[20px]
                                px-5
                                pb-6
                                pt-4
                                ${step.background}
                            `}
                        >
                            {/* NUMARA */}
                            <div
                                className={`
                                    absolute
                                    left-5
                                    top-4
                                    z-20
                                    flex
                                    h-[50px]
                                    w-[50px]
                                    items-center
                                    justify-center
                                    rounded-full
                                    text-[23px]
                                    font-black
                                    ${step.numberBackground}
                                    ${step.numberColor}
                                `}
                            >
                                {step.number}
                            </div>

                            {/* GÖRSEL */}
                            <div className="flex h-[185px] items-end justify-center">
                                <img
                                    src={step.image}
                                    alt=""
                                    className="
                                        max-h-[180px]
                                        max-w-full
                                        object-contain
                                        object-bottom
                                    "
                                />
                            </div>

                            {/* METİNLER */}
                            <div className="mt-1 text-center">
                                <h3
                                    className="
                                        text-[20px]
                                        font-black
                                        tracking-[-0.03em]
                                        text-[#09064f]
                                    "
                                >
                                    {step.title}
                                </h3>

                                <p
                                    className="
                                        mt-1.5
                                        text-[15px]
                                        leading-[1.45]
                                        text-[#504b73]
                                    "
                                >
                                    {step.description}
                                </p>
                            </div>

                            {/* KARTLAR ARASI OK */}
                            {index < steps.length - 1 && (
                                <div
                                    className="
                                        absolute
                                        -right-[43px]
                                        top-[42%]
                                        z-30
                                        hidden
                                        w-[58px]
                                        border-t-2
                                        border-dashed
                                        border-[#7854ff]
                                        xl:block
                                    "
                                >
                                    <div
                                        className="
                                            absolute
                                            -right-1
                                            -top-[5px]
                                            h-[9px]
                                            w-[9px]
                                            rotate-45
                                            border-r-2
                                            border-t-2
                                            border-[#7854ff]
                                        "
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </AppContainer>
        </section>
    );
}