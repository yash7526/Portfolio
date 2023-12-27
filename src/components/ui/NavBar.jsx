import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  });


  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        animation: gsap
          .timeline()
          .to(navBar.current, { color: "#DDDDD5" })
          .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),

        toggleActions: "restart reverse restart reverse",
      });
    });

  });

  return (
    <header
      ref={navBar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-3"
    >
      {/* logo */}
      <a href="#hero" aria-label="Logo" className="z-50">
        <svg
          ref={logo}
          width="80"
          height="45"
          viewBox="0 0 121 45"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <svg 
          ref={logo}
          width="80"
          height="45" 
          viewBox="0 0 1 40" 
          fill="currentColor" 
          xmlns="http://www.w3.org/2000/svg">

<path d="M12.307 11.499L16.709 1.796H13.578V1.3H19.685V1.796H17.639L12.958 12.15V22.411H14.849V23H5.022V22.411H6.913V12.739L1.643 1.796H0.186V1.3H10.106V1.796H8.091L12.307 11.499ZM27.9061 22.659C28.9394 22.659 29.8487 22.38 30.6341 21.822C31.4401 21.264 31.8431 20.427 31.8431 19.311C31.8431 18.1743 31.4091 17.3063 30.5411 16.707C29.6937 16.1077 28.4744 15.591 26.8831 15.157C25.3124 14.7023 24.1654 14.3097 23.4421 13.979C22.7394 13.6483 22.0677 13.2143 21.4271 12.677C20.1457 11.6023 19.5051 9.93867 19.5051 7.686C19.5051 5.84667 20.1561 4.26567 21.4581 2.943C22.7807 1.62033 24.5787 0.958999 26.8521 0.958999C27.9474 0.958999 29.0841 1.12433 30.2621 1.455C31.4607 1.765 32.2047 1.92 32.4941 1.92C32.7834 1.92 33.0417 1.71333 33.2691 1.3H33.6101L33.8271 7.562H33.3311C32.3391 5.764 31.2954 4.32767 30.2001 3.253C29.1254 2.15767 27.9474 1.61 26.6661 1.61C25.4054 1.61 24.4237 1.90967 23.7211 2.509C23.0184 3.08767 22.6671 3.873 22.6671 4.865C22.6671 5.83633 23.0804 6.59067 23.9071 7.128C24.7544 7.64467 25.7877 8.06833 27.0071 8.399C28.2264 8.72967 29.0221 8.957 29.3941 9.081C29.7867 9.205 30.2621 9.38067 30.8201 9.608C31.3987 9.81467 31.8637 10.042 32.2151 10.29C32.5871 10.5173 32.9694 10.817 33.3621 11.189C33.7754 11.5403 34.0957 11.933 34.3231 12.367C34.8811 13.359 35.1601 14.537 35.1601 15.901C35.1601 18.133 34.4574 19.931 33.0521 21.295C31.6674 22.6383 29.8384 23.31 27.5651 23.31C26.3871 23.31 25.0334 23.155 23.5041 22.845C21.9954 22.535 21.1584 22.38 20.9931 22.38C20.7037 22.38 20.4247 22.69 20.1561 23.31H19.7221L19.4121 15.932H19.9391C20.8484 17.73 22.0057 19.3007 23.4111 20.644C24.8371 21.9873 26.3354 22.659 27.9061 22.659Z" fill="black"/>
</svg>

          {/* <path x="M10.08 25.3774V36.6974H3.24V7.97739H10.08V17.4974C10.8533 16.6441 11.68 15.9774 12.56 15.4974C13.44 15.0174 14.56 14.7774 15.92 14.7774C18.0533 14.7774 19.7867 15.4707 21.12 16.8574C22.48 18.2441 23.16 20.2441 23.16 22.8574V36.6974H16.32V25.1374C16.32 23.7774 16.0667 22.7374 15.56 22.0174C15.08 21.2974 14.32 20.9374 13.28 20.9374C12.72 20.9374 12.1867 21.0841 11.68 21.3774C11.2 21.6707 10.8133 22.1374 10.52 22.7774C10.2267 23.4174 10.08 24.2841 10.08 25.3774ZM38.2188 27.4574V15.1774H45.0588V36.6974H38.7788V34.3774C38.1921 35.1774 37.3521 35.8307 36.2588 36.3374C35.1921 36.8441 34.0321 37.0974 32.7788 37.0974C31.3654 37.0974 30.0854 36.8041 28.9388 36.2174C27.7921 35.6041 26.8854 34.6841 26.2188 33.4574C25.5788 32.2041 25.2588 30.6307 25.2588 28.7374V15.1774H32.0988V27.4574C32.0988 28.6307 32.3654 29.5107 32.8988 30.0974C33.4588 30.6841 34.2188 30.9774 35.1788 30.9774C35.6321 30.9774 36.0854 30.8574 36.5388 30.6174C37.0188 30.3507 37.4188 29.9641 37.7388 29.4574C38.0588 28.9241 38.2188 28.2574 38.2188 27.4574ZM68.2013 15.1774L57.9613 44.4174H50.4813L53.4813 36.4574L45.0812 15.1774H52.5213L57.1613 28.4974L61.3213 15.1774H68.2013ZM75.0956 25.3774V36.6974H68.2556V15.1774H74.5356V17.7774C75.389 16.8441 76.3223 16.1107 77.3356 15.5774C78.3756 15.0441 79.5756 14.7774 80.9356 14.7774C83.069 14.7774 84.8023 15.4707 86.1356 16.8574C87.4956 18.2441 88.1756 20.2441 88.1756 22.8574V36.6974H81.3356V25.1374C81.3356 23.7774 81.0823 22.7374 80.5756 22.0174C80.0956 21.2974 79.3356 20.9374 78.2956 20.9374C77.7356 20.9374 77.2023 21.0841 76.6956 21.3774C76.2156 21.6707 75.829 22.1374 75.5356 22.7774C75.2423 23.4174 75.0956 24.2841 75.0956 25.3774ZM100.074 44.8174C98.101 44.8174 96.3544 44.4707 94.8344 43.7774C93.3144 43.1107 92.1144 42.1507 91.2344 40.8974C90.3544 39.6441 89.8744 38.1907 89.7944 36.5374H96.4344C96.5677 37.4974 96.9277 38.2307 97.5144 38.7374C98.1277 39.2441 98.9677 39.4974 100.034 39.4974C101.314 39.4974 102.274 39.1641 102.914 38.4974C103.581 37.8307 103.914 36.8441 103.914 35.5374V33.0174C103.354 33.8174 102.594 34.4441 101.634 34.8974C100.674 35.3507 99.6077 35.5774 98.4344 35.5774C96.701 35.5774 95.1277 35.1241 93.7144 34.2174C92.301 33.2841 91.181 32.0307 90.3544 30.4574C89.5277 28.8841 89.1144 27.1241 89.1144 25.1774C89.1144 23.1507 89.501 21.3641 90.2744 19.8174C91.0477 18.2441 92.1144 17.0174 93.4744 16.1374C94.8344 15.2307 96.3944 14.7774 98.1544 14.7774C99.5144 14.7774 100.701 14.9907 101.714 15.4174C102.728 15.8174 103.648 16.4707 104.474 17.3774V15.1774H110.754V35.4574C110.754 38.3641 109.794 40.6441 107.874 42.2974C105.981 43.9774 103.381 44.8174 100.074 44.8174ZM96.0344 25.2174C96.0344 26.5507 96.381 27.6174 97.0744 28.4174C97.7677 29.2174 98.6877 29.6174 99.8344 29.6174C100.634 29.6174 101.328 29.4307 101.914 29.0574C102.528 28.6841 102.994 28.1641 103.314 27.4974C103.661 26.8307 103.834 26.0574 103.834 25.1774C103.834 23.8441 103.461 22.7774 102.714 21.9774C101.994 21.1507 101.034 20.7374 99.8344 20.7374C98.6877 20.7374 97.7677 21.1507 97.0744 21.9774C96.381 22.7774 96.0344 23.8574 96.0344 25.2174Z" /> */}
          {/* <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M113.5 1.5H111V6.50001H113.5C112.119 6.50001 111 7.61931 111 9.00001V11.5H116V9.00001C116 10.3807 117.119 11.5 118.5 11.5H121V6.50001H118.5C119.881 6.50001 121 5.38072 121 4V1.5H116V4C116 2.61929 114.881 1.5 113.5 1.5ZM116 6.50001H113.5C114.881 6.50001 116 7.61931 116 9.00001V6.50001ZM116 6.50001V4C116 5.38072 117.119 6.50001 118.5 6.50001H116Z"
          /> */}
        </svg>
      </a>
      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
        <a href="#about" className="group relative hidden md:inline-block">
          <span>about</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#services" className="group relative hidden md:inline-block">
          <span>services</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block">
          <span>projects</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#contact" className="group relative hidden md:inline-block">
          <span>contact</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a
          ref={cta}
          className=" group relative hidden md:inline-block button group relative hover:bg"
          href="https://drive.google.com/file/d/166-ZB3iQwSaPBb87nvtpS73cGD827Feb/view"
        >
          
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>RESUME</span>
          </span>
        </a> 
      </nav>
    </header>
  );
}
