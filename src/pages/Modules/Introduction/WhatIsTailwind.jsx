import { Link } from "react-router-dom";
import routes from "../../../constants/routes";

export default function WhatIsTailwind() {
    return (
        <div className="p-8 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">What is Tailwind CSS?</h1>
            <p className="text-lg leading-relaxed mb-6">
                Tailwind CSS is a utility-first CSS framework that allows you to build modern, responsive user interfaces quickly. Instead of writing custom CSS, you use pre-defined utility classes directly in your HTML.
            </p>
            <Link to={routes.whyuse} className="next-button">Why Use Tailwind CSS?</Link>
        </div>
    );
}
