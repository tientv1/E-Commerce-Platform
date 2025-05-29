import Link from "next/link";

export default function Button({
    text,
    icon,
    url,
}: {
    text: string;
    icon: React.ReactNode;
    url: string;
}) {
    return (
        <Link
            href={url}
            className="text-[14px] text-[#02735E] flex items-center max-w-[100px] w-full justify-center gap-2 rounded-[10px] hover:bg-[#02735e2d] p-1.5"
        >
            {icon}
            {text}
        </Link>
    );
}
