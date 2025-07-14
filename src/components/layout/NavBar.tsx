import { Button, Link } from "../";

const NavBar = () => {
  return (
    <div id="navbar" className="h-24 flex pb-2 pt-2 pl-10 pr-10 justify-between items-center overflow-y-hidden">
      <div className="flex gap-5 items-center">
        <img src="/assets/logo.webp" alt="" className="h-15 rounded-full"/>
        <h2 className="text-xl text-[#2e2e2e]">Software Engineer</h2>
      </div>

      <div className="flex gap-10 items-center">
        <nav className='flex gap-5 text-2xl'>
          <Link src="#summary" title="Summary" />
          <>|</>
          <Link src="#projects" title="Projects" />
          <>|</>
          <Link src="#a&c" title="Archievements & Certifications" />
          <>|</>
          <Link src="#stack" title="Stack" />
        </nav>

        <div className="flex gap-2.5 text-xl">
          <Link src="/assets/FelixAvalos_CV.pdf" title="Curriculum" style="button" icon="download-outline" />
          <Button title="Theme" hasIcon icon="sunny-outline" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
