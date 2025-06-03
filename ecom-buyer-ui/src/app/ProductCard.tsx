import Image from "next/image";

export default function ProductCard() {
    return (
        <div className="card border-1 rounded-md border-[#dddde3] overflow-hidden cursor-pointer hover:shadow-xl">
            <div className="image-card ">
                <Image
                    src="/category-phone.png"
                    alt=""
                    width={200}
                    height={200}
                />
            </div>
            <div className="px-2 pb-2">
                <p className="break-words line-clamp-2 text-sm">
                    iPhone 16 Pro Max 256GB | Chính hãng VN/A
                </p>
            </div>
            <div className="mx-2 flex items-center flex-wrap justify-between mb-2">
                <p className="text-red-500/90 font-bold">
                    120.960120.960<sup>đ</sup>
                </p>
                <p className="text-[12px] line-through">
                    189.000<sup>đ</sup>
                </p>
            </div>
        </div>
    );
}
