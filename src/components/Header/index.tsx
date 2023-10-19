"use client";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Drawer from "../Drawer";
import { useState } from "react";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  return (
    <header className="fixed top-0 w-screen px-5 py-2 bg-slate-900/50 flex flex-row justify-between backdrop-blur-lg z-[1000]">
      <Menu
        size={50}
        className="text-white cursor-pointer lg:hidden"
        onClick={() => setOpen(true)}
      />
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
            <a href="/midia">Midia</a>
          </li>
          <li>
            <a href="/patrocinio.pdf" target="_blank">
              Seja um patrocinador
            </a>
          </li>
          <li>
            <button onClick={() => setDropdown(!dropdown)} className="flex flex-row">
              Outras incrições
              <ChevronDown className="text-white" />
            </button>
            <ul className={`absolute bg-slate-700/50 w-40 text-white text-center rounded-xl shadow  mt-3 ${dropdown ? 'hidden': 'flex flex-col'}`}>
              <li className="hover:bg-slate-600 py-4 rounded-t-xl">
                <a href="https://forms.gle/2fvcaNaYP2Y43Fbh8" target="_blank">
                  Maratona de programação
                </a>
              </li>
              <li className="hover:bg-slate-600 py-4 rounded-b-xl">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScYzGPkOPu6uVSTp9zJjXet0drRga6ZyYk_0Sye4GYDcpTPkQ/viewform?usp=sf_link" target="_blank">
                  One-shot RPG
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="/inscricao"
              target="_blank"
              className="px-3 py-2 bg-orange-700 font-bold"
            >
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
