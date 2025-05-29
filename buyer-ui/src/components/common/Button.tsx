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
            className="text-[14px] text-[#02735E]
            flex items-center justify-center gap-2
            max-w-[100px] w-full 
            rounded-[10px] p-1.5
            hover:bg-[#02735e2d] focus:outline-none"
        >
            {icon}
            {text}
        </Link>
    );
}
