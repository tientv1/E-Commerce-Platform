"use client";

import Image from "next/image";

export default function SocialLogin() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center gap-2.5"
        >
            <button className="focus:outline-none cursor-pointer shadow-xl p-1.5 rounded-[50%]">
                <Image
                    src="/google-icon.svg"
                    alt="Google-Login"
                    width={50}
                    height={50}
                    priority
                />
            </button>
        </form>
    );
}
