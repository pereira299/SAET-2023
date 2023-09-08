import Image from "next/image";

const ComingSoon = () => {
    return (
        <section id="coming-soon" className="flex flex-col justify-center items-center">
            <div className="">
                <div className="flex flex-row gap-4">
                    <Image
                        src="/images/arrow.svg"
                        alt="Seta"
                        width={110}
                        height={20}
                    />
                    <h1 className="text-5xl font-bold text-orange-700 uppercase">Aguarde</h1>
                </div>
                <div className="text-cyan-700 uppercase text-6xl font-bold">
                    <h3>novidades</h3>
                    <h3>Em breve...</h3>
                </div>
            </div>
        </section>
    );
}

export default ComingSoon;