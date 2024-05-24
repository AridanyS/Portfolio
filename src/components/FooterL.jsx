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
    <div className="flex flex-col flex-wrap items-center justify-center gap-2 p-5 text-xs text-text-modal-light bg-background-DarkBrown">
      <div>Feel free to use every components on <a href="https://github.com/AridanyS/Portfolio" className="hover:underline" target="_blank">this page</a> 🤗</div>
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
    </div>
  );
}
