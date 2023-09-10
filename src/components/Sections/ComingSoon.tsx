import Image from "next/image";

const ComingSoon = () => {
    return (
        <section id="coming-soon" className="flex flex-col justify-center items-center">
            <div className="w-11/12 flex flex-col items-center">
                <div className="flex flex-row gap-4">
                    <Image
                        src="/images/arrow.svg"
                        alt="Seta"
                        width={110}
                        height={20}
                        className="w-16 sm:w-full"
                    />
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-700 uppercase">Aguarde</h1>
                </div>
                <div className="text-cyan-700 uppercase text-4xl sm:text-5xl lg:text-6xl font-bold">
                    <h3>novidades</h3>
                    <h3>Em breve...</h3>
                </div>
            </div>
        </section>
    );
}

export default ComingSoon;