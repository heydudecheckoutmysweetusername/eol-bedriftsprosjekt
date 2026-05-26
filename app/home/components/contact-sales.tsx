export default function ContactSales() {
  return (
    <button className="flex w-full items-center justify-between px-[2px] py-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black xl:h-[70px] xl:border-b-[1.676px] xl:border-solid xl:border-black xl:pl-[33px] xl:pr-[179px] xl:py-0">
      <span className="font-body text-[16px] leading-[18.75px] text-black xl:text-[23.46px]">Contact sales</span>
      <svg
        data-testid="arrow-right-icon"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-black h-[14px] w-[14px] xl:h-[22px] xl:w-[22px]"
        aria-hidden="true"
      >
        <path
          d="M2.91602 6.99996H11.0827M11.0827 6.99996L6.99935 2.91663M11.0827 6.99996L6.99935 11.0833"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
