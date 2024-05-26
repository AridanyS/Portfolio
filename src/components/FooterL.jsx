export default function FooterPortfolio() {
  return (
    <div className="flex h-[10vh] justify-evenly flex-wrap gap-1 md:gap-3 items-center p-3 max-sm:text-[13px] lg:text-lg text-text-modal-light bg-background-DarkBrown">
      <div className="flex items-center gap-3">
        Developed by
        <a
          href="https://github.com/AridanyS"
          className="hover:underline"
          target="_blank"
        >
          Aridany
        </a>
        <img
          className="w-[20px] lg:w-[30px] rounded-full"
          src="/foto.jfif"
          alt="MyPicture"
        ></img>
      </div>

      <div className="flex items-center md:gap-3 ">
        Icons:
        <span className="flex items-center gap-1 ">
          <a
            href="https://lucide.dev/"
            target="_blank"
            className="w-[20px] lg:w-[25px] hover:opacity-50"
          >
            <img src="/logo.dark.svg" alt="Lucide"></img>
          </a>

          <a
            href="https://svgl.app/?search=svg"
            target="_blank"
            className="w-[20px] lg:w-[25px] hover:opacity-50"
          >
            <img src="/svgl.svg" alt="svgl_pheralb"></img>
          </a>
        </span>
        <span className="mx-1">|</span>
        <a
          href="https://mit-license.org/"
          className=" hover:underline"
          target="_blank"
        >
          MIT license{" "}
        </a>
        <img
          src="/scale.svg"
          className="w-[18px] lg:w-[25px] bg-text-modal-light opacity-80 rounded m-1 "
          alt="MIT"
        ></img>
      </div>
    </div>
  );
}
