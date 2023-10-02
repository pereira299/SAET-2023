'use client'
import { Menu } from "lucide-react";
import Image from "next/image";
import Drawer from "../Drawer";
import { useState } from "react";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 w-screen px-5 py-2 bg-slate-900/50 flex flex-row justify-between backdrop-blur-lg z-[1000]">
      <Menu size={50} className="text-white cursor-pointer lg:hidden" onClick={() => setOpen(true)}/>
      <Image
        src={"/images/logo2.svg"}
        alt="Logo SAET"
        width={300}
        height={140}
        className="w-32"
      />
      <div className="lg:hidden"></div>
      <nav className="text-white w-5/12 h-fit my-auto hidden lg:block">
        <ul className="flex flex-row justify-around items-center w-full">
            <li>
                <a href="/midia">
                    Midia
                </a>
            </li>
            <li>
                <a href="/patrocinio.pdf" target="_blank">
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
      <Drawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
};

export default Header;
