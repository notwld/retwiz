import { useState, useEffect } from 'react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0.3 * window.innerHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 shadow-xl backdrop-filter backdrop-blur-lg z-20 w-screen transition-transform duration-300 ease-in-out transform ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-5 flex justify-between items-center text-white exo">
        <h1 className="text-3xl font-bold">R.</h1>
        <button className="cursor-pointer ring-2 ring-violet rounded-full px-4 py-2 bg-slate-900 text-white montserrat text-lg flex items-center">Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
