import {
    ArrowLeft,
    ChevronRight,
    Coffee,
    Dices,
    Heart,
    Laugh,
    Star,
    UsersRound,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { AppContainer } from "@/components/ui/AppContainer";

type GameCategory = {
    title: string;
    description: string;
    icon: React.ReactNode;
    background: string;
    path: string;
};

const categories: GameCategory[] = [
    {
        title: "Rastgele",
        description: "Her şeyden biraz",
        icon: (
            <Dices
                size={42}
                strokeWidth={2.2}
                className="text-[#6338d7]"
            />
        ),
        background:
            "linear-gradient(135deg, #f2edff 0%, #ece4ff 100%)",
        path: "/oyunlar/rastgele",
    },
    {
        title: "Birbirimizi Tanıyalım",
        description: "Temel sorular",
        icon: (
            <Heart
                size={42}
                strokeWidth={2}
                fill="currentColor"
                className="text-[#d93959]"
            />
        ),
        background:
            "linear-gradient(135deg, #fff1f4 0%, #ffe7ec 100%)",
        path: "/oyunlar/birbirimizi-taniyalim",
    },
    {
        title: "Hayaller & Hedefler",
        description: "Geleceğe dair",
        icon: (
            <Star
                size={43}
                strokeWidth={2}
                fill="currentColor"
                className="text-[#efa12b]"
            />
        ),
        background:
            "linear-gradient(135deg, #fff8e9 0%, #fff0d8 100%)",
        path: "/oyunlar/hayaller-hedefler",
    },
    {
        title: "Günlük Yaşam",
        description: "Alışkanlıklar, tercihler",
        icon: (
            <Coffee
                size={42}
                strokeWidth={2.2}
                className="text-[#bf5b1d]"
            />
        ),
        background:
            "linear-gradient(135deg, #fff5e9 0%, #ffead9 100%)",
        path: "/oyunlar/gunluk-yasam",
    },
    {
        title: "İlişkimiz",
        description: "Sadece bize özel",
        icon: (
            <UsersRound
                size={43}
                strokeWidth={2.2}
                className="text-[#238c87]"
            />
        ),
        background:
            "linear-gradient(135deg, #ecf9f6 0%, #def3ef 100%)",
        path: "/oyunlar/iliskimiz",
    },
    {
        title: "Eğlenceli Sorular",
        description: "Keyifli ve farklı",
        icon: (
            <Laugh
                size={43}
                strokeWidth={2.2}
                className="text-[#5832c7]"
            />
        ),
        background:
            "linear-gradient(135deg, #f2edff 0%, #eae2ff 100%)",
        path: "/oyunlar/eglenceli-sorular",
    },
];

export function GamesPage() {
    const navigate = useNavigate();

    return (
        <section
            className="
                relative
                min-h-[calc(100vh-74px)]
                overflow-hidden
                bg-[radial-gradient(circle_at_top,#ffffff_0%,#fcf9ff_48%,#f6f0fc_100%)]
                py-6
                sm:py-8
            "
        >
            <div
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
                {/* Breadcrumb */}
                <div className="flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="
                            flex
                            h-10
                            w-10
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
                            size={19}
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
                        <span className="text-[#81778f]">
                            Oyunlar
                        </span>

                        <ChevronRight
                            size={15}
                            className="text-[#aaa2b7]"
                        />

                        <span className="text-[#473c61]">
                            Kategori Seçimi
                        </span>
                    </div>
                </div>

                {/* Başlık */}
                <div className="relative mx-auto mt-5 max-w-2xl text-center sm:mt-7">
                    <h1
                        className="
                            text-[27px]
                            font-extrabold
                            tracking-[-0.035em]
                            text-heading
                            sm:text-[31px]
                        "
                    >
                        Hangi konuda oynamak istersiniz?
                    </h1>

                    <p
                        className="
                            mt-2
                            text-[13px]
                            font-medium
                            leading-6
                            text-[#8a8296]
                            sm:text-[14px]
                        "
                    >
                        İlginizi çeken bir kategori seçin veya
                        rastgele sorularla devam edin.
                    </p>

                    {/* Sağdaki dekoratif çizgiler */}
                    <div
                        aria-hidden="true"
                        className="
                            absolute
                            -right-10
                            top-0
                            hidden
                            h-14
                            w-14
                            lg:block
                        "
                    >
                        <span
                            className="
                                absolute
                                left-3
                                top-0
                                h-6
                                w-[3px]
                                rotate-[10deg]
                                rounded-full
                                bg-[#ff6f8b]
                            "
                        />

                        <span
                            className="
                                absolute
                                right-2
                                top-3
                                h-6
                                w-[3px]
                                rotate-[45deg]
                                rounded-full
                                bg-[#ff6f8b]
                            "
                        />

                        <span
                            className="
                                absolute
                                right-0
                                top-8
                                h-[3px]
                                w-6
                                rotate-[15deg]
                                rounded-full
                                bg-[#ff6f8b]
                            "
                        />
                    </div>
                </div>

                {/* Kategoriler */}
                <div
                    className="
                        mx-auto
                        mt-8
                        grid
                        max-w-[1020px]
                        grid-cols-1
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-3
                        lg:gap-6
                    "
                >
                    {categories.map((category) => (
                        <button
                            key={category.title}
                            type="button"
                            onClick={() =>
                                navigate(category.path)
                            }
                            style={{
                                background:
                                    category.background,
                            }}
                            className="
                                group
                                relative
                                flex
                                min-h-[180px]
                                flex-col
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-[18px]
                                border
                                border-white/70
                                px-6
                                py-7
                                text-center
                                shadow-[0_8px_26px_rgba(62,42,99,0.035)]
                                transition-all
                                duration-300
                                hover:-translate-y-1.5
                                hover:shadow-[0_14px_35px_rgba(62,42,99,0.09)]
                            "
                        >
                            <div
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:scale-110
                                "
                            >
                                {category.icon}
                            </div>

                            <h2
                                className="
                                    mt-4
                                    text-[16px]
                                    font-extrabold
                                    tracking-[-0.02em]
                                    text-[#30254d]
                                "
                            >
                                {category.title}
                            </h2>

                            <p
                                className="
                                    mt-1.5
                                    text-[13px]
                                    font-medium
                                    text-[#888093]
                                "
                            >
                                {category.description}
                            </p>

                            <div
                                className="
                                    pointer-events-none
                                    absolute
                                    inset-x-8
                                    bottom-0
                                    h-8
                                    rounded-full
                                    bg-white/20
                                    opacity-0
                                    blur-xl
                                    transition
                                    duration-300
                                    group-hover:opacity-100
                                "
                            />
                        </button>
                    ))}
                </div>
            </AppContainer>
        </section>
    );
}