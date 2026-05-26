export default function Footer() {
  return (
    <footer className="w-full px-[10px] pb-[10px] pt-[30px] xl:mt-[190px] xl:border-t xl:border-solid xl:border-[#838583] xl:pt-[1px]">
      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-col gap-2">
          <h2 className="font-brand text-[15px] leading-tight text-black">
            ReOL
          </h2>
          <p className="font-body text-[12px] leading-[14px] text-[#4E514E]">
            Software that lasts. Built for companies and people who value
            stability over hype.
          </p>
        </div>

        <div className="flex items-center gap-[16px] font-body text-[10px] leading-[11.7px] text-[#4E514E]">
          <span>Oslo, Norway</span>
          <span>2026</span>
        </div>
      </div>
    </footer>
  );
}
