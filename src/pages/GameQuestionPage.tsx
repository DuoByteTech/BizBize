import {
    ArrowLeft,
    ArrowRight,
    ChevronRight,
    Heart,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { AppContainer } from "@/components/ui/AppContainer";

export function GameQuestionPage() {
    const navigate = useNavigate();

    const currentQuestion = 3;
    const totalQuestions = 20;

    const progress =
        (currentQuestion / totalQuestions) * 100;

    return (
        <section
            className="
                relative
                min-h-[calc(100vh-74px)]
                overflow-hidden
                bg-[radial-gradient(circle_at_top,#ffffff_0%,#fcf9ff_52%,#f7f1fc_100%)]
                py-6
                sm:py-8
            "
        >
            {/* Sol arka plan dekoru */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -left-36
                    top-36
                    h-[330px]
                    w-[330px]
                    rounded-full
                    bg-purple-200/20
                    blur-[110px]
                "
            />

            {/* Sağ arka plan dekoru */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -right-36
                    bottom-4
                    h-[360px]
                    w-[360px]
                    rounded-full
                    bg-pink-200/20
                    blur-[110px]
                "
            />

            <AppContainer className="relative">
                {/* Breadcrumb */}
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() => navigate("/oyunlar")}
                        className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-[#6c5f81]
                            shadow-[0_3px_12px_rgba(77,54,112,0.08)]
                            transition
                            duration-200
                            hover:-translate-x-0.5
                            hover:text-primary
                        "
                    >
                        <ArrowLeft
                            size={18}
                            strokeWidth={2.3}
                        />
                    </button>

                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            text-[13px]
                            font-semibold
                        "
                    >
                        <span className="text-[#81778f]">
                            Oyunlar
                        </span>

                        <ChevronRight
                            size={15}
                            className="text-[#aaa2b7]"
                        />

                        <span className="text-[#473c61]">
                            Birbirimizi Tanıyalım
                        </span>
                    </div>
                </div>

                {/* Ana içerik */}
                <div className="mx-auto mt-9 max-w-[940px]">
                    {/* Progress */}
                    <div className="mx-auto max-w-[720px]">
                        <div className="flex items-center gap-4">
                            <div className="h-[10px] flex-1 overflow-hidden rounded-full bg-[#eeeaf6]">
                                <div
                                    className="
                                        h-full
                                        rounded-full
                                        bg-gradient-to-r
                                        from-[#754fe8]
                                        to-[#6d4aff]
                                        transition-all
                                        duration-300
                                    "
                                    style={{
                                        width: `${progress}%`,
                                    }}
                                />
                            </div>

                            <span
                                className="
                                    min-w-[44px]
                                    text-right
                                    text-[13px]
                                    font-bold
                                    text-[#8a8296]
                                "
                            >
                                {currentQuestion} /{" "}
                                {totalQuestions}
                            </span>
                        </div>
                    </div>

                    {/* Soru alanı */}
                    <div
                        className="
                            relative
                            mx-auto
                            mt-7
                            flex
                            max-w-[920px]
                            items-start
                            justify-center
                            gap-6
                        "
                    >
                        {/* Soru kartı */}
                        <div
                            className="
                                flex
                                min-h-[220px]
                                w-full
                                max-w-[720px]
                                items-start
                                justify-center
                                rounded-[22px]
                                border
                                border-[#eee9f4]
                                bg-white
                                px-8
                                py-12
                                text-center
                                shadow-[0_12px_35px_rgba(63,46,91,0.06)]
                                sm:px-12
                            "
                        >
                            <h1
                                className="
                                    max-w-[520px]
                                    text-[24px]
                                    font-extrabold
                                    leading-[1.35]
                                    tracking-[-0.035em]
                                    text-heading
                                    sm:text-[27px]
                                "
                            >
                                Hayatında yaptığın en büyük
                                pişmanlık ne?
                            </h1>
                        </div>

                        {/* Sağdaki dekoratif not */}
                        <div
                            className="
                                hidden
                                w-[125px]
                                shrink-0
                                rotate-[3deg]
                                lg:block
                            "
                        >
                            <div
                                className="
                                    relative
                                    min-h-[205px]
                                    bg-[#fff1dc]
                                    px-5
                                    py-6
                                    text-center
                                    shadow-[0_8px_20px_rgba(85,65,50,0.04)]
                                "
                            >
                                <p
                                    className="
                                        rotate-[-1deg]
                                        font-['Comic_Sans_MS',cursive]
                                        text-[17px]
                                        leading-[1.35]
                                        text-[#77536e]
                                    "
                                >
                                    Merak et
                                    <br />
                                    Soru sor
                                    <br />
                                    Dinle
                                    <br />
                                    Anla
                                </p>

                                <Heart
                                    size={19}
                                    strokeWidth={2}
                                    className="mx-auto mt-3 text-[#b46992]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Butonlar */}
                    <div
                        className="
                            mx-auto
                            mt-8
                            flex
                            max-w-[720px]
                            flex-col
                            gap-4
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        "
                    >
                        <button
                            type="button"
                            className="
                                inline-flex
                                h-[48px]
                                items-center
                                justify-center
                                gap-2
                                rounded-[12px]
                                border
                                border-[#ebe7f1]
                                bg-white
                                px-5
                                text-[13px]
                                font-semibold
                                text-[#71687f]
                                shadow-sm
                                transition
                                hover:border-primary/20
                                hover:text-primary
                            "
                        >
                            <ArrowLeft
                                size={15}
                                strokeWidth={2.2}
                            />

                            Önceki
                        </button>

                        <button
                            type="button"
                            className="
                                inline-flex
                                h-[50px]
                                flex-1
                                items-center
                                justify-center
                                gap-3
                                rounded-[12px]
                                bg-gradient-to-r
                                from-[#7a55e9]
                                to-[#6842df]
                                px-7
                                text-[13px]
                                font-bold
                                text-white
                                shadow-[0_8px_20px_rgba(109,74,255,0.22)]
                                transition
                                duration-200
                                hover:-translate-y-0.5
                                hover:shadow-[0_10px_25px_rgba(109,74,255,0.28)]
                                sm:max-w-[390px]
                            "
                        >
                            Cevabını Kaydet ve Sonraki

                            <ArrowRight
                                size={16}
                                strokeWidth={2.2}
                            />
                        </button>

                        <button
                            type="button"
                            className="
                                inline-flex
                                h-[48px]
                                items-center
                                justify-center
                                rounded-[12px]
                                border
                                border-[#ded8e8]
                                bg-white
                                px-5
                                text-[13px]
                                font-semibold
                                text-[#615971]
                                shadow-sm
                                transition
                                hover:border-primary/25
                                hover:text-primary
                            "
                        >
                            Soruyu Atla
                        </button>
                    </div>

                    {/* Mobil not */}
                    <div
                        className="
                            mx-auto
                            mt-8
                            max-w-[320px]
                            rotate-[1deg]
                            bg-[#fff1dc]
                            px-5
                            py-4
                            text-center
                            shadow-sm
                            lg:hidden
                        "
                    >
                        <p
                            className="
                                font-['Comic_Sans_MS',cursive]
                                text-[15px]
                                leading-6
                                text-[#77536e]
                            "
                        >
                            Merak et · Soru sor · Dinle · Anla
                        </p>
                    </div>
                </div>
            </AppContainer>
        </section>
    );
}