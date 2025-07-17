import { Button, Link } from "../";

const NavBar = () => {
  return (
    <div id="navbar" className="h-full py-5 flex flex-col gap-2 items-center overflow-y-hidden lg:px-10 lg:flex-row xl:pt-2 xl:pb-2 xl:justify-between 2xl:h-24">
      <div className="flex flex-col items-center lg:w-2xl lg:flex-row lg:gap-5 xl:w-auto">
        <img src="/assets/logo.webp" alt="" className="h-15 rounded-full"/>
        <h2 className="text-2xl text-[#2e2e2e] xl:text-xl">Software Engineer</h2>
      </div>

      <div className="flex flex-col gap-5 items-center lg:w-full lg:flex-row xl:w-auto xl:gap-10">
        <nav className='flex flex-col text-xl gap-2.5 text-center items-center lg:w-full lg:text-2xl xl:flex-row xl:gap-5'>
          <Link src="#summary" title="Summary" />
          <div className="hidden xl:block">|</div>
          <Link src="#projects" title="Projects" />
          <div className="hidden xl:block">|</div>
          <Link src="#a&c" title="Archievements & Certifications" />
          <div className="hidden xl:block">|</div>
          <Link src="#stack" title="Stack" />
        </nav>

        <div className="flex flex-col gap-2.5 text-xl 2xl:flex-row">
          <Link src="/assets/FelixAvalos_CV.pdf" title="Curriculum" style="button" icon="download-04" />
          <Button title="Theme" hasIcon icon="sun-03" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
