import Image from "next/image";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <header className="fixed top-0 w-screen px-5 py-2 bg-slate-900/50 flex flex-row justify-between backdrop-blur-lg z-[1000]">
      <Image
        src={"/images/logo2.svg"}
        alt="Logo SAET"
        width={300}
        height={140}
        className="w-32"
      />
      <nav className="text-white w-5/12 h-fit my-auto">
        <ul className="flex flex-row justify-around items-center w-full">
            <li>
                <a href="/midia">
                    Midia
                </a>
            </li>
            <li>
                <a href="/seja-patrocinador">
                    Seja um patrocinador
                </a>
            </li>
            <li>
                <a href="inscricao" className="px-3 py-2 bg-orange-700 font-bold">
                    Inscreva-se
                </a>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
