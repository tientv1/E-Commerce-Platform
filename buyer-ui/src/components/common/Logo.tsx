import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <Image
                src="/brand-icon.svg"
                alt="Logo"
                width={75}
                height={75}
                priority
            />
        </Link>
    );
}
