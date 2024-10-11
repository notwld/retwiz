
import ParticlesComponent from "../components/ParticleComponent";

export default function About() {
 

  const content = [
    {
      title: `"About" Us`,
      description:
        "We are a web development and design agency created by talented developers with high hopes. We chose the name `retwiz` because it symbolizes a higher level of skill and expertise, representing our agency's high standards and achievements in design and development.",
    },
    {
      title: "Our Mission",
      description:
        "Our mission is to provide our clients with the best possible solutions for their needs. We strive to deliver high-quality, innovative, and user-friendly websites and applications that help our clients achieve their goals.",
    },
    {
      title: "Our Vision",
      description:
        "Our vision is to become a leading web development and design agency that is known for its creativity, innovation, and commitment to excellence. We aim to build long-term relationships with our clients and help them succeed in the digital world.",
    },
    {
      title: "Our Values",
      description:
        "At retwiz, we value creativity, innovation, and quality. We believe in delivering the best possible solutions to our clients and exceeding their expectations. We are committed to providing exceptional customer service and building strong relationships with our clients.",
    },
  ];

  return (
    <div>
              <ParticlesComponent />

    <div className="min-h-screen flex justify-center items-center text-white bg-slate-900 p-4">

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
      <div className="w-full max-w-4xl lg:col-span-7 lg:mt-0 xl:col-span-6">
        <div className="relative flex overflow-hidden bg-slate-800 shadow-xl rounded-xl dark:bg-slate-900/70 dark:ring-1 dark:ring-inset dark:ring-white/10 dark:backdrop-blur">
          <div className="relative flex w-full flex-col">
            <div className="flex-none border-b border-slate-500/30">
              <div className="flex h-8 items-center space-x-1.5 px-3">
                <div className="h-2.5 w-2.5 rounded-full bg-violet-500"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-slate-600"></div>
              </div>
            </div>

            <div className="p-6">
              
                    <h1
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold montserrat-bold transition-all duration-300`}
          >
            "About" Us
          </h1>
                  <p className="text-lg sm:text-xl montserrat text-gray-400 mt-5">
                    We are a web development and design agency created by talented developers with high hopes. We chose the name `retwiz` because it symbolizes a higher level of skill and expertise, representing our agency's high standards and achievements in design and development.
                  </p>
                </div>
                <div className="p-6">
              
              <h1
      className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold montserrat-bold transition-all duration-300`}
    >
      Our Values 
    </h1>
            <p className="text-lg sm:text-xl montserrat text-gray-400 mt-5">
              At retwiz, we value creativity, innovation, and quality. We believe in delivering the best possible solutions to our clients and exceeding their expectations. We are committed to providing exceptional customer service and building strong relationships with our clients, and we are dedicated to helping them succeed in the digital world.
            </p>
          </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl lg:col-span-7 lg:mt-0 xl:col-span-6">
        <div className="w-full max-w-4xl lg:col-span-7 lg:mt-0 xl:col-span-6 mb-5">
        <div className="relative flex overflow-hidden bg-slate-800 shadow-xl rounded-xl dark:bg-slate-900/70 dark:ring-1 dark:ring-inset dark:ring-white/10 dark:backdrop-blur">
          <div className="relative flex w-full flex-col">
            <div className="flex-none border-b border-slate-500/30">
              <div className="flex h-8 items-center space-x-1.5 px-3">
                <div className="h-2.5 w-2.5 rounded-full bg-violet-500"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-slate-600"></div>
              </div>
            </div>

            <div className="p-6">
              
                    <h1
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold montserrat-bold transition-all duration-300`}
          >
            Our Mission 
          </h1>
                  <p className="text-lg sm:text-xl montserrat text-gray-400 mt-5">
                    Our mission is to provide our clients with the best possible solutions for their needs. We strive to deliver high-quality, innovative, and user-friendly websites and applications that help our clients achieve their goals.
                  </p>
                </div>
           
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl lg:col-span-7 lg:mt-0 xl:col-span-6">
        <div className="relative flex overflow-hidden bg-slate-800 shadow-xl rounded-xl dark:bg-slate-900/70 dark:ring-1 dark:ring-inset dark:ring-white/10 dark:backdrop-blur">
          <div className="relative flex w-full flex-col">
            <div className="flex-none border-b border-slate-500/30">
              <div className="flex h-8 items-center space-x-1.5 px-3">
                <div className="h-2.5 w-2.5 rounded-full bg-violet-500"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-blue-500"></div>
                <div className="h-2.5 w-2.5 rounded-full bg-slate-600"></div>
              </div>
            </div>

            <div className="p-6">
              
                    <h1
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold montserrat-bold transition-all duration-300`}
          >
            Our Vision 
          </h1>
                  <p className="text-lg sm:text-xl montserrat text-gray-400 mt-5">
                    Our vision is to become a leading web development and design agency that is known for its creativity, innovation, and commitment to excellence. We aim to build long-term relationships with our clients and help them succeed in the digital world.
                  </p>
                </div>
           
          </div>
        </div>
      </div>
      </div>
      
      </div>
    </div>
    </div>

  );
}
