import image from "../assets/download.png";

export default function Home() {
  return (
    <div className="relative flex h-screen justify-center items-center">
      {/* Background Container */}
      <div
        className="absolute inset-0 bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] h-full w-full"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "86.125rem",
        }}
      >
        {/* Grid Overlay */}
        <div
          className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5 custom-grid animate-bg-scroll-reverse"
          
        ></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center">
        <h1 className="text-[12rem] text-white exo lg:text-[12rem] md:text-9xl sm:text-[6rem]">
          retwiz
        </h1>
        <span className="text-slate-400 mt-4 montserrat text-center md:w-3/2 sm:w-3/4 md:text-lg sm:text-base">
          A web development and design agency that takes the complexity out of
          technology. We focus on delivering sleek, innovative solutions, so you
          can focus on your vision.
        </span>
        <div className="flex justify-center items-center mt-5">
            <button className="cursor-pointer ring-2 ring-violet rounded-full px-4 py-2 bg-slate-900 text-white montserrat text-lg flex items-center">
            Get Started
            <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
                />
            </svg>
            </button>
        </div>
      </div>
    </div>
  );
}
