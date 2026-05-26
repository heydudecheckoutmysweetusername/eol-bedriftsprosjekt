interface HeaderProps {
  onMenuToggle?: () => void;
}

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="landing-header lg:landing-header-bordered">
      <div className="landing-logo">
        <img src="/images/logo-icon.svg" alt="" className="landing-logo__leaf" />
        <img
          src="/images/logo-image.png"
          alt=""
          className="landing-logo__mark"
        />
        <span className="landing-logo__wordmark">ReOL</span>
      </div>
      <button
        type="button"
        onClick={onMenuToggle}
        aria-label="Toggle menu"
        className="landing-menu-button"
      >
        <img
          src="/images/hamburger.svg"
          alt=""
          className="landing-menu-button__icon"
        />
      </button>
    </header>
  );
}
