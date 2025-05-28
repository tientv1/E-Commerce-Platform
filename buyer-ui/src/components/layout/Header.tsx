import BrandIcon from "../common/Logo";
import Search from "../common/Search";

export default function Header() {
    return (
        <header className="w-[100%] flex justify-center py-2">
            <div className="w-full max-w-[1440px] flex items-center gap-12">
                <div className="brand-icon">
                    <BrandIcon />
                </div>
                <div className="header-right w-full">
                    <Search />
                </div>
            </div>
        </header>
    );
}
