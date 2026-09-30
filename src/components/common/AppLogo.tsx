import { Link } from "react-router-dom";

export function AppLogo() {
    return (
        <Link
            to="/"
            className="inline-flex shrink-0 items-center gap-3"
        >
            <svg
                viewBox="0 0 72 64"
                className="h-[37px] w-[44px]"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient
                        id="bizbizeHeart"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                    >
                        <stop
                            offset="0%"
                            stopColor="#ff7ab6"
                        />
                        <stop
                            offset="100%"
                            stopColor="#d93d9d"
                        />
                    </linearGradient>
                </defs>

                <path
                    d="M36 59C29.2 53.6 8 40.9 8 22.8C8 12.5 15.6 6 24.9 6C31.3 6 35 8.8 38 13.1C40.9 8.8 44.7 6 51 6C60.3 6 68 12.5 68 22.8C68 40.9 46.7 53.6 40 59C39 59.7 37.2 59.7 36 59Z"
                    fill="url(#bizbizeHeart)"
                />

                <path
                    d="M18 15C14.4 18.2 13.5 22.4 14.1 26"
                    stroke="rgba(255,255,255,0.45)"
                    strokeWidth="4.8"
                    strokeLinecap="round"
                />
            </svg>

            <span className="text-[27px] font-black tracking-[-0.04em] text-[#0f0c63]">
                BizBize
            </span>
        </Link>
    );
}