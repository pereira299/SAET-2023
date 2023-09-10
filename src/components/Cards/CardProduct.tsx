import { ProductProps } from "@/types/Product"
import Image from "next/image"

const CardProduct = ({ product, color }: ProductProps) => {
    return (
        <div className={`border-4 ${color} w-8/12 mx-auto mt-5 rounded-2xl`}>
            <Image
                src={product.image}
                alt={product.title}
                width={150}
                height={150}
                className="w-full h-full rounded-xl"
            />
        </div>
    )
}

export default CardProduct