import { HowItWorksHero } from "@/features/how-it-works/components/HowItWorksHero";
import { HowItWorksSteps } from "@/features/how-it-works/components/HowItWorksSteps";
import { HowItWorksBottom } from "@/features/how-it-works/components/HowItWorksBottom";

export function HowItWorksPage() {
    return (
        <div className="bg-white">
            <HowItWorksHero />
            <HowItWorksSteps />
            <HowItWorksBottom />
        </div>
    );
}