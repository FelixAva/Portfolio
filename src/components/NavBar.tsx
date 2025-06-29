const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-24 bg-amber-100 z-50  flex pb-2 pt-2 pl-10 pr-10 justify-between items-center">
      <div className="flex gap-5 items-center">
        <img src="/src/assets/logo_crop.png" alt="" className="h-15 rounded-full"/>
        <h2>Software Engineer</h2>
      </div>

      <div className="flex gap-10">
        <nav className="flex gap-5">
          <a href="">Summary</a>
          <b>|</b>
          <a href="">Projects</a>
          <b>|</b>
          <a href="">Archievements & Certifications</a>
          <b>|</b>
          <a href="">Stack</a>
        </nav>

        <button>Curriculum + Icon</button> {/* Replace "+ Icon" with an Icon tag */}
        <button hidden>Theme</button>
      </div>
    </div>
  );
}

export default NavBar;
