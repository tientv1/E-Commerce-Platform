"use client";

export default function LoginForm() {
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="header-form mb-3">
                <h1 className="text-3xl mb-1 font-bold">Xin chào !</h1>
                <p className="text-[14px]">Đăng ký và đăng nhập bằng email</p>
            </div>
            <input
                autoComplete="tel"
                name="phone"
                type="text"
                placeholder="Email"
                className="focus:outline-none outline-none  flex-0 focus:text-[#02735E] focus:border-[#02735E] py-2 border-b-1 border-[#dddde3] text-[#808089] text-2xl leading-[1.5]"
            />
            <input
                autoComplete="tel"
                name="phone"
                type="text"
                placeholder="Mật khẩu"
                className="focus:outline-none outline-none  flex-0 focus:text-[#02735E] focus:border-[#02735E] py-2 border-b-1 border-[#dddde3] text-[#808089] text-2xl leading-[1.5] mt-3"
            />
            <button
                type="submit"
                className="mt-8 bg-red-500/90 p-2 rounded-[5px] text-2xl text-white cursor-pointer focus:outline-none"
            >
                Đăng nhập
            </button>
        </form>
    );
}
