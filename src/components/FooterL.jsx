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
    <div className="flex flex-col flex-wrap items-center justify-center gap-2 p-4 text-xs text-text-modal-light bg-background-DarkBrown">
      <div><a href="https://github.com/AridanyS/Portfolio" className="hover:underline" target="_blank">This page</a> is developed by <a href="https://github.com/AridanyS" className="hover:underline" target="_blank">Aridany</a></div>
      
      <div className="flex items-center justify-center gap-3">
        Icons from:
        <span className="flex items-center gap-3">
          <a href="https://lucide.dev/" target="_blank" 
          className="w-[15px] hover:opacity-50">
            <img src="/logo.dark.svg"></img>
          </a>

          <a href="https://svgl.app/?search=svg" target="_blank"
          className="w-[15px] hover:opacity-50">
            <img src="/svgl.svg"></img>
          </a>
        </span>
      </div>
      <div className="flex items-center gap-2"><a href="https://mit-license.org/" className="hover:underline" target="_blank">MIT</a> license <img src="/scale.svg" className="w-[18px]"></img></div>
      
    </div>
  );
}

