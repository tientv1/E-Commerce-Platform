"use client";

import Image from "next/image";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";

export default function SocialLogin() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const idToken = await result.user.getIdToken();
            console.log("🔥 ID Token:", idToken);
            await axios.post(
                "http://localhost:8080/api/users/google",
                { idToken },
                { withCredentials: true }
            );

            alert("Đăng nhập thành công!");
        } catch (err) {
            console.error("Lỗi đăng nhập:", err);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center gap-2.5"
        >
            <button
                onClick={handleLogin}
                className="focus:outline-none cursor-pointer shadow-xl p-1.5 rounded-[50%]"
            >
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
