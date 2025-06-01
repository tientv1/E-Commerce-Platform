import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <Image
                src="/brand-icon.svg"
                alt="Logo"
                width={50}
                height={50}
                priority
            />
        </Link>
    );
}
