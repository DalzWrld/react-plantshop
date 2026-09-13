function Header() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#top">
        Plantsy
      </a>
      <nav aria-label="Primary">
        <a href="#catalogue">Catalogue</a>
        <a href="#new-plant">Add plant</a>
      </nav>
    </header>
  );
}

export default Header;
