const NavBar = () => {
  return (
    <div id="navbar" className="h-24 flex pb-2 pt-2 pl-10 pr-10 justify-between items-center overflow-y-hidden">
      <div className="flex gap-5 items-center">
        <img src="/assets/logo.webp" alt="" className="h-15 rounded-full"/>
        <h2 className="text-xl text-[#2e2e2e]">Software Engineer</h2>
      </div>

      <div className="flex gap-10">
        <nav className='flex gap-5 text-2xl'>
          <a href="#summary" className='hover:text-[#8d8d8d]'>Summary</a>
          <b>|</b>
          <a href="#projects">Projects</a>
          <b>|</b>
          <a href="#a">Archievements & Certifications</a>
          <b>|</b>
          <a href="">Stack</a>
        </nav>

        <div className="text-xl">
          <button>Curriculum + Icon</button> {/* Replace "+ Icon" with an Icon tag */}
          <button hidden>Theme</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
