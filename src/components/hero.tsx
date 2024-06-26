import type {StaticImageData} from 'next/image'
import Image from 'next/image'
import Header from "@/components/header";

interface HeroProps {
    image: StaticImageData
    alt: string
    title: string
}

export default function Hero(props: HeroProps) {
    return (
        <div className="relative h-screen">
            <div className="absolute -z-10 inset-0">
                <Image
                    src={props.image}
                    alt={props.alt}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900"/>
            <div className="pt-48 flex justify-center items-center">
                <h1 className="text-white text-6xl">{props.title}</h1>
            </div>
        </div>
    )
}