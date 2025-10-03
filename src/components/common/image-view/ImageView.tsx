import Image from "next/image";

interface Props{
    src: string,
    alt: string,
    width: number,
    height: number,
    className?: string;
}

export function ImageView({src, alt, width, height, className = ''}: Props) {

    const isRemote = src.substring(0, 8)==="/uploads"
    if (src.length > 0)
        return (
            <Image className={className} src={`${isRemote ? "https://nest.navaxcollege.com"+src : src}`} alt={alt} width={width} height={height}/>
        );
    else return (
        <Image className={className} src={"/assets/images/Logo.png"} alt={alt} width={width} height={height}/>
    )
}

