import { X } from "lucide-react";

const Drawer = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;

  return (
    <dialog className="fixed w-screen h-screen flex flex-col z-[5000000] bg-slate-900 backdrop-blur-2xl">
      <X
        size={50}
        className="text-white cursor-pointer ml-auto"
        onClick={() => onClose()}
      />
      <nav className="text-white w-full h-4/6 my-auto">
        <ul className="flex flex-col text-3xl text-center justify-between items-center w-full h-full">
          <li>
            <a href="/midia">Midia</a>
          </li>
          <li>
            <a href="/patrocinio.pdf" target="_blank">
              Seja um patrocinador
            </a>
          </li>
          <li>
            <a href="https://forms.gle/2fvcaNaYP2Y43Fbh8" target="_blank">
              Inscrição maratona prog.
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScYzGPkOPu6uVSTp9zJjXet0drRga6ZyYk_0Sye4GYDcpTPkQ/viewform?usp=sf_link"
              target="_blank"
            >
              Inscrição One-shot RPG
            </a>
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
    </dialog>
  );
};

export default Drawer;
