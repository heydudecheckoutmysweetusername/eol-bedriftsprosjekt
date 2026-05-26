interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-green-light px-[23px] py-[16px] xl:border xl:border-solid xl:border-[#9e9e9e] xl:px-[25px] xl:py-[13px]">
      <div className="flex items-center gap-[6.71px]">
        <div className="relative h-[67.11px] w-[51px] xl:h-[115.64px] xl:w-[87.89px]">
          <img
            src="/images/logo-icon.svg"
            alt=""
            className="absolute left-[1.36px] top-[2.65px] h-[63.56px] w-[48.28px] xl:left-[2.34px] xl:top-[4.56px] xl:h-[109.52px] xl:w-[83.19px]"
          />
          <img
            src="/images/logo-image.png"
            alt=""
            className="absolute left-[15.43px] top-[23.49px] h-[20.13px] w-[20.13px] xl:left-[26.6px] xl:top-[40.47px] xl:h-[34.69px] xl:w-[34.69px]"
          />
          <span
            className="absolute left-[12.92px] top-[52.3px] font-logo text-logo-sm leading-none text-black xl:left-[22.26px] xl:top-[90.12px] xl:text-[17.35px]"
          >
            ReOL
          </span>
        </div>
      </div>
      <div className="flex items-center gap-[9px]">
        <span className="flex rounded-[5px] bg-green-normal px-[10px] py-[5px] font-body text-xs text-[#EBF8ED] xl:hidden">
          Maintained software
        </span>
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuToggle}
          aria-label="Toggle menu"
          className="flex h-[55px] w-[55px] items-center justify-center rounded-[10px] bg-[#EFEFEF] xl:h-[64px] xl:w-[64px] xl:shadow-[0px_4.655px_4.655px_0px_rgba(0,0,0,0.25)]"
        >
          <img src="/images/hamburger.svg" alt="" className="h-[43px] w-[43px] xl:h-[50px] xl:w-[50px]" />
        </button>
      </div>
    </header>
  );
}
