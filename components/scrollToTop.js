import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Volver arriba"
      className={`fixed left-1/2 -translate-x-1/2 bottom-5 md:bottom-10 z-40 w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#10207A] text-white shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#0c1860] hover:-translate-y-1 hover:shadow-xl ${
        show
          ? "opacity-90 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 md:w-6 md:h-6"
        aria-hidden="true"
      >
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    </button>
  );
};

export default ScrollToTop;
