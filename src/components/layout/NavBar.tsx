import { Button, Link } from "../";

const NavBar = () => {
  return (
    <div id="navbar" className="h-[400px] flex flex-col gap-2 items-center overflow-y-hidden md:h-24 md:px-10 md:pt-2 md:pb-2 md:flex-row md:justify-between">
      <div className="flex flex-col justify-center items-center md:flex-row md:gap-5">
        <img src="/assets/logo.webp" alt="" className="h-15 rounded-full"/>
        <h2 className="text-2xl text-[#2e2e2e] md:text-xl">Software Engineer</h2>
      </div>

      <div className="flex flex-col gap-5 items-center md:flex-row md:gap-10">
        <nav className='flex flex-col text-xl gap-2.5 text-center md:flex-row md:gap-5 md:text-2xl'>
          <Link src="#summary" title="Summary" />
          <div className="hidden md:block">|</div>
          <Link src="#projects" title="Projects" />
          <div className="hidden md:block">|</div>
          <Link src="#a&c" title="Archievements & Certifications" />
          <div className="hidden md:block">|</div>
          <Link src="#stack" title="Stack" />
        </nav>

        <div className="flex flex-col gap-2.5 text-xl md:flex-row">
          <Link src="/assets/FelixAvalos_CV.pdf" title="Curriculum" style="button" icon="download-04" />
          <Button title="Theme" hasIcon icon="sun-03" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
