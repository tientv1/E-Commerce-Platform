import { SearchIcon } from "lucide-react";

export default function Search() {
    return (
        <div className="search-input flex items-center h-[40px] gap-3 border-1 rounded-[10px] border-[#dddde3] overflow-hidden">
            <SearchIcon className="w-[20px] h-[20px] text-[#808089] ms-5" />
            <input
                name="search"
                type="text"
                placeholder="Search..."
                className="outline-none flex-1 text-[#808089] border-r border-[#dddde3] text-[14px] "
            />
            <button
                type="submit"
                className="cursor-pointer h-full hover:bg-[#02735e2d] px-3 text-[14px] text-[#02735E]"
            >
                Search
            </button>
        </div>
    );
}
