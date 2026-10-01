import {
    ArrowLeft,
    ArrowRight,
    ChevronRight,
    Heart,
} from "lucide-react";

import { useState } from "react";

import {
    Navigate,
    useNavigate,
    useParams,
} from "react-router-dom";

import { AppContainer } from "@/components/ui/AppContainer";

import {
    gameCategories,
    type GameCategoryId,
} from "@/features/games/data/gameCategories";

export function GameQuestionPage() {
    const navigate = useNavigate();

    const { gameId } = useParams();

    const category =
        gameCategories[gameId as GameCategoryId];

    const [currentQuestionIndex, setCurrentQuestionIndex] =
        useState(0);

    if (!category) {
        return <Navigate to="/oyunlar" replace />;
    }

    const questions = category.questions;

    const totalQuestions = questions.length;

    const currentQuestion =
        currentQuestionIndex + 1;

    const question =
        questions[currentQuestionIndex];

    const progress =
        (currentQuestion / totalQuestions) * 100;

    const isFirstQuestion =
        currentQuestionIndex === 0;

    const isLastQuestion =
        currentQuestionIndex ===
        totalQuestions - 1;

    function handlePrevious() {
        if (isFirstQuestion) {
            return;
        }

        setCurrentQuestionIndex(
            (previous) => previous - 1,
        );
    }

    function handleNext() {
        if (isLastQuestion) {
            navigate(
                `/oyun/${category.id}/sonuc`,
            );

            return;
        }

        setCurrentQuestionIndex(
            (previous) => previous + 1,
        );
    }

    function handleSkip() {
        if (isLastQuestion) {
            navigate(
                `/oyun/${category.id}/sonuc`,
            );

            return;
        }

        setCurrentQuestionIndex(
            (previous) => previous + 1,
        );
    }

    return (
        <section
            className="
                relative
                min-h-[calc(100vh-74px)]
                overflow-hidden
                bg-[radial-gradient(circle_at_top,#ffffff_0%,#fdfaff_48%,#f8f3fc_100%)]
                py-6
                sm:py-8
            "
        >
            {/* Sol arka plan ışığı */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -left-40
                    top-20
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-purple-200/20
                    blur-[120px]
                "
            />

            {/* Sağ arka plan ışığı */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    bottom-0
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-pink-200/20
                    blur-[120px]
                "
            />

            <AppContainer className="relative">

                {/* Breadcrumb */}
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() =>
                            navigate("/oyunlar")
                        }
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
                            shadow-[0_4px_14px_rgba(76,54,110,0.08)]
                            transition
                            duration-200
                            hover:-translate-x-0.5
                            hover:text-primary
                        "
                    >
                        <ArrowLeft
                            size={18}
                            strokeWidth={2.2}
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
                        <button
                            type="button"
                            onClick={() =>
                                navigate("/oyunlar")
                            }
                            className="
                                text-[#81778f]
                                transition
                                hover:text-primary
                            "
                        >
                            Oyunlar
                        </button>

                        <ChevronRight
                            size={15}
                            className="text-[#aaa2b7]"
                        />

                        <span className="text-[#473c61]">
                            {category.title}
                        </span>
                    </div>
                </div>

                {/* Ana alan */}
                <div
                    className="
                        relative
                        mx-auto
                        mt-10
                        w-full
                        max-w-[1040px]
                    "
                >
                    {/* Soldaki dekoratif yazı */}
                    <div
                        aria-hidden="true"
                        className="
                            absolute
                            -left-8
                            top-[105px]
                            hidden
                            rotate-[-7deg]
                            xl:block
                        "
                    >
                        <p
                            className="
                                font-['Comic_Sans_MS',cursive]
                                text-[18px]
                                font-semibold
                                leading-[1.25]
                                text-[#c162d8]
                            "
                        >
                            Daha
                            <br />
                            fazlasını
                            <br />
                            keşfet
                        </p>

                        <Heart
                            size={21}
                            strokeWidth={2.2}
                            className="
                                ml-4
                                mt-2
                                text-[#b858d1]
                            "
                        />
                    </div>

                    {/*
                        ANA GRID

                        680px = soru kartı + butonlar
                        135px = sağdaki not

                        En önemli değişiklik burası.
                    */}
                    <div
                        className="
                            mx-auto
                            grid
                            w-full
                            max-w-[847px]
                            grid-cols-1
                            gap-x-8
                            lg:grid-cols-[minmax(0,680px)_135px]
                        "
                    >
                        {/* SOL SÜTUN */}
                        <div className="min-w-0">

                            {/* Progress */}
                            <div className="w-full">
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-4
                                    "
                                >
                                    <div
                                        className="
                                            h-[9px]
                                            flex-1
                                            overflow-hidden
                                            rounded-full
                                            bg-[#eeeaf5]
                                        "
                                    >
                                        <div
                                            className="
                                                h-full
                                                rounded-full
                                                transition-all
                                                duration-500
                                            "
                                            style={{
                                                width: `${progress}%`,
                                                background:
                                                    category.progressGradient,
                                            }}
                                        />
                                    </div>

                                    <span
                                        className="
                                            min-w-[46px]
                                            text-right
                                            text-[12px]
                                            font-bold
                                            text-[#8c8497]
                                        "
                                    >
                                        {currentQuestion} /{" "}
                                        {totalQuestions}
                                    </span>
                                </div>
                            </div>

                            {/* Soru kartı */}
                            <div
                                className="
                                    mt-7
                                    flex
                                    min-h-[210px]
                                    w-full
                                    items-center
                                    justify-center
                                    rounded-[22px]
                                    border
                                    border-[#eee9f3]
                                    bg-white
                                    px-8
                                    py-10
                                    text-center
                                    shadow-[0_14px_40px_rgba(56,39,91,0.06)]
                                    sm:px-12
                                "
                            >
                                <h1
                                    className="
                                        max-w-[520px]
                                        text-[23px]
                                        font-extrabold
                                        leading-[1.35]
                                        tracking-[-0.035em]
                                        text-[#17113b]
                                        sm:text-[27px]
                                    "
                                >
                                    {question}
                                </h1>
                            </div>

                            {/*
                                BUTONLAR

                                Artık soru kartıyla AYNI sütunun içinde.
                                Bu yüzden hiçbir şekilde kartın
                                dışına taşamaz.
                            */}
                            <div
                                className="
                                    mt-8
                                    grid
                                    w-full
                                    grid-cols-1
                                    gap-3
                                    sm:grid-cols-[135px_minmax(0,1fr)_135px]
                                    sm:gap-4
                                "
                            >
                                {/* Önceki */}
                                <button
                                    type="button"
                                    onClick={
                                        handlePrevious
                                    }
                                    disabled={
                                        isFirstQuestion
                                    }
                                    className="
                                        inline-flex
                                        h-[48px]
                                        w-full
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-[11px]
                                        border
                                        border-[#e8e3ee]
                                        bg-white
                                        px-4
                                        text-[13px]
                                        font-semibold
                                        text-[#70677f]
                                        shadow-[0_4px_12px_rgba(68,47,101,0.04)]
                                        transition
                                        duration-200
                                        hover:border-primary/30
                                        hover:text-primary
                                        disabled:cursor-not-allowed
                                        disabled:opacity-40
                                    "
                                >
                                    <ArrowLeft
                                        size={15}
                                        strokeWidth={2.2}
                                    />

                                    Önceki
                                </button>

                                {/* Sonraki */}
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    className="
                                        inline-flex
                                        h-[50px]
                                        w-full
                                        min-w-0
                                        items-center
                                        justify-center
                                        gap-3
                                        rounded-[11px]
                                        px-5
                                        text-[13px]
                                        font-bold
                                        text-white
                                        shadow-[0_8px_20px_rgba(108,73,220,0.20)]
                                        transition
                                        duration-200
                                        hover:-translate-y-0.5
                                        hover:shadow-[0_10px_24px_rgba(108,73,220,0.25)]
                                    "
                                    style={{
                                        background:
                                            category.buttonGradient,
                                    }}
                                >
                                    <span className="truncate">
                                        {isLastQuestion
                                            ? "Oyunu Tamamla"
                                            : "Cevabını Kaydet ve Sonraki"}
                                    </span>

                                    <ArrowRight
                                        size={15}
                                        strokeWidth={2.2}
                                        className="shrink-0"
                                    />
                                </button>

                                {/* Soruyu Atla */}
                                <button
                                    type="button"
                                    onClick={handleSkip}
                                    className="
                                        inline-flex
                                        h-[48px]
                                        w-full
                                        items-center
                                        justify-center
                                        rounded-[11px]
                                        border
                                        border-[#ded8e8]
                                        bg-white
                                        px-4
                                        text-[13px]
                                        font-semibold
                                        text-[#615971]
                                        shadow-[0_4px_12px_rgba(68,47,101,0.04)]
                                        transition
                                        duration-200
                                        hover:border-primary/30
                                        hover:text-primary
                                    "
                                >
                                    Soruyu Atla
                                </button>
                            </div>
                        </div>

                        {/* SAĞ SÜTUN - Not */}
                        <div
                            className="
                                hidden
                                pt-[38px]
                                lg:block
                            "
                        >
                            <div
                                className="
                                    w-[135px]
                                    rotate-[3deg]
                                "
                            >
                                <div
                                    className="
                                        relative
                                        flex
                                        min-h-[210px]
                                        flex-col
                                        items-center
                                        justify-center
                                        bg-[#fff0d9]
                                        px-4
                                        py-6
                                        text-center
                                        shadow-[0_8px_22px_rgba(100,70,45,0.05)]
                                    "
                                >
                                    <p
                                        className="
                                            font-['Comic_Sans_MS',cursive]
                                            text-[17px]
                                            font-semibold
                                            leading-[1.35]
                                            text-[#885e82]
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
                                        size={18}
                                        strokeWidth={2}
                                        className="
                                            mt-3
                                            text-[#9b6795]
                                        "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobil not */}
                    <div
                        className="
                            mx-auto
                            mt-8
                            max-w-[300px]
                            rotate-[1deg]
                            bg-[#fff0d9]
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
                                font-semibold
                                leading-6
                                text-[#885e82]
                            "
                        >
                            Merak et · Soru sor · Dinle · Anla
                        </p>

                        <Heart
                            size={17}
                            strokeWidth={2}
                            className="
                                mx-auto
                                mt-1
                                text-[#9b6795]
                            "
                        />
                    </div>
                </div>
            </AppContainer>
        </section>
    );
}