function Header() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#top">
        Plantsy
      </a>
      <nav aria-label="Primary">
        <a href="#top">Home</a>
        <a href="#catalogue">Plants</a>
        <a href="#new-plant">Shop</a>
      </nav>
      <a className="header-cta" href="#new-plant">
        Contact
      </a>
    </header>
  );
}

export default Header;
