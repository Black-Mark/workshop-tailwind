import { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../../constants/routes";

export default function TailwindIntegration() {
    const [showButton, setShowButton] = useState(false);

    const handleClick = () => {
        setShowButton(true);
    };

    return (
        <div className="p-8 max-w-3xl mx-auto" onClick={handleClick} >
            <h1 className="text-xl font-bold mb-8 cursor-default">Frameworks and Languages That Use Tailwind:</h1>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                {/* Laravel */}
                <div className="flex flex-col items-center">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" 
                        alt="Laravel" 
                        className="w-12 h-12"
                    />
                    <span className="mt-2 text-sm">Laravel</span>
                </div>

                {/* React */}
                <div className="flex flex-col items-center">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                        alt="React" 
                        className="w-12 h-12"
                    />
                    <span className="mt-2 text-sm">React</span>
                </div>

                {/* Vue */}
                <div className="flex flex-col items-center">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" 
                        alt="Vue.js" 
                        className="w-12 h-12"
                    />
                    <span className="mt-2 text-sm">Vue.js</span>
                </div>

                {/* Next.js */}
                <div className="flex flex-col items-center">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" 
                        alt="Next.js" 
                        className="w-12 h-12"
                    />
                    <span className="mt-2 text-sm">Next.js</span>
                </div>

                {/* Nuxt.js */}
                <div className="flex flex-col items-center">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg" 
                        alt="Nuxt.js" 
                        className="w-12 h-12"
                    />
                    <span className="mt-2 text-sm">Nuxt.js</span>
                </div>

                {/* Svelte */}
                <div className="flex flex-col items-center">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" 
                        alt="Svelte" 
                        className="w-12 h-12"
                    />
                    <span className="mt-2 text-sm">Svelte</span>
                </div>

                {/* Astro */}
                <div className="flex flex-col items-center">
                    <img 
                        src="https://astro.build/assets/press/astro-icon-dark.svg" 
                        alt="Astro" 
                        className="w-12 h-12"
                    />
                    <span className="mt-2 text-sm">Astro</span>
                </div>
            </div>

            {showButton && (
                <>
                {/* <div className="mt-16">
                    <Link to={routes.tailwindconsumer} className="next-button">What Website Uses TailwindCSS?</Link>
                </div> */}
                <a
                    href="https://tailwindcss.com/docs/installation/framework-guides"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-4 right-4 px-4 py-2 border rounded-lg shadow-md"
                >
                    TailwindCSS Documentation
                </a>
                </>
            )}
        </div>
    );
}