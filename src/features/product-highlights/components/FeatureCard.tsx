import type { Feature } from "../data/featuresData";

type FeatureCardProps = {
    feature: Feature;
};

export function FeatureCard({
    feature,
}: FeatureCardProps) {
    const Icon = feature.icon;

    return (
        <article
            style={{
                background: feature.background,
            }}
            className="
                group
                relative
                flex
                min-h-[245px]
                flex-col
                items-center
                overflow-hidden
                rounded-[26px]
                border
                border-white/80
                px-7
                py-8
                text-center
                shadow-[0_12px_35px_rgba(67,45,104,0.045)]
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:shadow-[0_20px_45px_rgba(67,45,104,0.1)]
            "
        >
            {/* Arka plan dekorasyonu */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-36
                    w-36
                    rounded-full
                    bg-white/35
                    blur-xl
                "
            />

            {/* İkon */}

            <div
                style={{
                    backgroundColor: feature.iconBackground,
                }}
                className="
                    relative
                    flex
                    h-[72px]
                    w-[72px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[22px]
                    shadow-[0_8px_20px_rgba(50,35,90,0.04)]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    group-hover:-rotate-3
                "
            >
                <Icon
                    size={35}
                    strokeWidth={1.9}
                    style={{
                        color: feature.iconColor,
                    }}
                />
            </div>

            {/* Başlık */}

            <h3
                className="
                    relative
                    mt-5
                    text-[19px]
                    font-extrabold
                    tracking-[-0.025em]
                    text-[#21183E]
                "
            >
                {feature.title}
            </h3>

            {/* Açıklama */}

            <p
                className="
                    relative
                    mt-3
                    max-w-[310px]
                    text-[14px]
                    leading-[1.7]
                    text-[#766D86]
                "
            >
                {feature.description}
            </p>

            {/* Alt dekoratif çizgi */}

            <div
                style={{
                    backgroundColor: feature.iconColor,
                }}
                className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[3px]
                    w-0
                    -translate-x-1/2
                    rounded-full
                    opacity-70
                    transition-all
                    duration-300
                    group-hover:w-20
                "
            />
        </article>
    );
}