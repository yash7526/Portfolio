import ibgroup from "/src/assets/images/main.png";
// import memento from "/src/assets/images/memento-desktop.webp";
// import acc from "/src/assets/images/acc-square.webp";
// import daddy from "/src/assets/images/godaddy-desktop.webp";
// import sunnyside from "/src/assets/images/sunnyside-desktop.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://jazzy-bienenstitch-ce68a1.netlify.app/"
            img={ibgroup}
            alt="IBGroup vietnam website mockup"
            name="FlipKart Clone Website"
            type="Full-Stack Website • E-Commerce "
            year="2022"
            tools="React JS • JavaScript • MongoDB • Material UI"

          />
        </div>
  
      </div>
    </section>
  );
}
