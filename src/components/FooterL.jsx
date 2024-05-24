  /*link al portfolio
          Developed by aridany
          Siéntete libre de usar todo lo que veas (Abrazo)
          made with heart by ...
          !!!Location?¿!!!
          poner tmb contact aqui
          <a href="https://github.com/AridanyS/Portfolio"></a>
  */

  export default function FooterPortfolio() {
    return (
      <div className="flex h-[8vh] justify-center flex-wrap gap-3 items-center p-1 max-sm:text-[8px] text-xs text-text-modal-light bg-background-DarkBrown">
        <div><a href="https://github.com/AridanyS/Portfolio" className="hover:underline" target="_blank">This page</a> is developed by <a href="https://github.com/AridanyS" className="hover:underline" target="_blank">Aridany</a></div>
        
        <div className="flex items-center gap-2 ">
          <span className="opacity-0 md:opacity-100">|</span>
          Icons from:
          <span className="flex items-center gap-1 ">
            <a href="https://lucide.dev/" target="_blank" 
            className="w-[10px] hover:opacity-50">
              <img src="/logo.dark.svg"></img>
            </a>

            <a href="https://svgl.app/?search=svg" target="_blank"
            className="w-[10px] hover:opacity-50">
              <img src="/svgl.svg"></img>
            </a>
          </span>
          <span className="opacity-0 md:opacity-100">|</span>
          <a href="https://mit-license.org/" className=" hover:underline" target="_blank">MIT license </a><img src="/scale.svg" className="w-[10px]"></img>
        </div>

        
      </div>
    );
  }

