import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

type Category = {
    id: number;
    url: string;
    name: string;
};

const categories: Category[] = [
    { id: 1, url: "/category-phone.png", name: "Điện thoại" },
    { id: 2, url: "/category-phone.png", name: "Điện thoại" },
    { id: 3, url: "/category-phone.png", name: "Điện thoại" },
    { id: 4, url: "/category-phone.png", name: "Điện thoại" },
    { id: 5, url: "/category-phone.png", name: "Điện thoại" },
    { id: 6, url: "/category-phone.png", name: "Điện thoại" },
    { id: 7, url: "/category-phone.png", name: "Điện thoại" },
];

export default function Category() {
    return (
        <div className="flex justify-between items-center w-[100%] h-[100%] gap-4">
            <button className="cursor-pointer p-2 rounded-[50%] shadow-xl ms-2 hover:text-[#02735E] focus:outline-none">
                <ChevronLeft width={20} height={20} />
            </button>
            <div className="grid grid-cols-7 w-[100%]">
                {categories.map((item: Category) => (
                    <div
                        key={item.id}
                        className="w-[100%] flex flex-col items-center cursor-pointer hover:shadow-xl h-[131px] gap-2 hover:border-b-2 hover:border-[#02735E]"
                    >
                        <Image src={item.url} alt="" width={75} height={75} />
                        <p className="break-words text-center text-sm mb-2 w-[100%] overflow-hidden">
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
            <div className="cursor-pointer p-2 rounded-[50%] shadow-xl me-2 hover:text-[#02735E]">
                <ChevronRight width={20} height={20} />
            </div>
        </div>
    );
}
