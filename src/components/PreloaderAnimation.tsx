import { useEffect, useState } from "react";

const PreloaderAnimation = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showProgressBar, setShowProgressBar] = useState(false);
    const [progressBarWidth, setProgressBarWidth] = useState(0); // Track progress bar width
    const [showText, setShowText] = useState(true);
    const [showRetwizText, setShowRetwizText] = useState(false); // Track Retwiz text visibility
    const [textOpacity, setTextOpacity] = useState(1); // Track text opacity

    useEffect(() => {
        // Show the text animation initially
        setTimeout(() => setIsVisible(true), 1500);
        
        // Gradually reduce the opacity of the text
        setTimeout(() => {
            const fadeOutInterval = setInterval(() => {
                setTextOpacity((prev) => {
                    if (prev <= 0) {
                        clearInterval(fadeOutInterval);
                        setShowText(false); // Hide text after it fades out
                        return 0;
                    }
                    return prev - 0.05;
                });
            }, 100);
        }, 3600); // Start fading out after 3 seconds

        // Show the progress bar after the text disappears
        setTimeout(() => {
            setShowProgressBar(true);
        }, 3600); // Start progress bar after text disappears

        // After 1 second, shrink the progress bar
        setTimeout(() => {
            setProgressBarWidth(580);
        }, 4000);
        setTimeout(() => {
            setProgressBarWidth(0);
        }, 5000);

        // After the bar collapses, show "Retwiz"
        setTimeout(() => {
            setShowRetwizText(true);
        }, 4800);
    }, []);

    return (
        <div
            className={`bg-slate-900 text-white fixed inset-0 flex justify-center items-center ${
                isVisible ? "opacity-100" : "opacity-0"
            } transition-opacity duration-700 ease-in-out`}
        >
            <div className="flex justify-center items-center w-100 h-screen">
                {/* First Text Block */}
                {showText && (
                    <div className="absolute flex justify-center items-center w-full transition-all  ease-in-out">
                        <p
                            className={`text-5xl mr-3 font-thin ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            } transition-all duration-700 ease-in-out ${
                                !isVisible ? "duration-2000" : ""
                            }`}
                        >
                            Pioneering
                        </p>
                        <p
                            className={`text-5xl mr-3 text-violet-500 ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            } transition-all duration-700 delay-300 ease-in-out ${
                                !isVisible ? "duration-2000" : ""
                            }`}
                        >
                            Digital
                        </p>
                        <p
                            className={`text-5xl font-thin ${
                                isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                            } transition-all duration-700 delay-500 ease-in-out ${
                                !isVisible ? "duration-2000" : ""
                            }`}
                        >
                            Excellence
                        </p>
                    </div>
                )}

                {/* Progress Bar */}
                {showProgressBar && (
                    <div
                        className="absolute z-20 left-0 right-0 mx-auto bg-violet-500 transition-all duration-700 ease-in-out"
                        style={{
                            height: "80px",
                            width: `${progressBarWidth}px`, // Dynamically update width
                        }}
                    ></div>
                )}

                {/* Retwiz Text */}
                {showRetwizText && (
                    <div className="absolute transition-all ease-in-out">
                        <p className="text-5xl font-bold exo">Retwiz</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PreloaderAnimation;
