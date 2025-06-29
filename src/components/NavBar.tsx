const NavBar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <img src="/src/assets/react.svg" alt="" />
        <h2>Software Engineer</h2>
      </div>

      <div className="">
        <a href="">Summary</a>
        <a href="">Projects</a>
        <a href="">Archievements & Certifications</a>
        <a href="">Stack</a>

        <button>Curriculum + Icon</button> {/* Replace "+ Icon" with an Icon tag */}
        <button hidden>Theme</button>
      </div>
    </div>
  );
}

export default NavBar;
