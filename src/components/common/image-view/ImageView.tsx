import Image from "next/image";

interface Props{
    src?: string | null,
    alt: string,
    width: number,
    height: number,
    className?: string;
}

export function ImageView({src = "", alt, width, height, className = ''}: Props) {

    const imageSrc = src ? (src.startsWith("/uploads") ? "https://nest.navaxcollege.com" + src : src) : "";

    return (
        <Image className={className} src={imageSrc} alt={alt} width={width} height={height}/>
    );
}

