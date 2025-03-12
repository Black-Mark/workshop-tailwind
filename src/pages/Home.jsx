import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import routes from "../constants/routes";

export default function Home() {
    const [message, setMessage] = useState("Great Day Everyone!");
    const [secondMessage, setSecondMessage] = useState("Are you Ready to Learn TailwindCSS?");
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFading(true); // Start fade-out
            setTimeout(() => {
                setMessage(secondMessage);
                setIsFading(false); // Start fade-in
            }, 500); // Wait for fade-out to complete
        }, 5000); // Start transition after 5 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Helmet>
                <title>Home | Create & Elevate</title>
            </Helmet>
            <div className="flex flex-col gap-4 items-center justify-center">
                <h1
                    className={`text-2xl cursor-default font-bold transition-all duration-500 ${
                        isFading
                            ? 'opacity-0 translate-y-4'
                            : 'opacity-100 translate-y-0'
                    }`}
                >
                    {message}
                </h1>
                {message === secondMessage && (
                    <Link
                        to={routes.definition}
                        className="next-button"
                    >
                        Yes, I am.
                    </Link>
                )}
            </div>
        </div>
    );
}
