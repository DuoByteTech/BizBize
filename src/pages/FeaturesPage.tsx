import { FeaturesHero } from
    "@/features/product-highlights/components/FeaturesHero";

import { FeaturesGrid } from
    "@/features/product-highlights/components/FeaturesGrid";

import { FeaturesBottom } from
    "@/features/product-highlights/components/FeaturesBottom";

export function FeaturesPage() {
    return (
        <div className="w-full bg-white">
            <FeaturesHero />

            <FeaturesGrid />

            <FeaturesBottom />
        </div>
    );
}