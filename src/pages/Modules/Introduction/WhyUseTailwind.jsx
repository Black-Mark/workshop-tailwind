import { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../../constants/routes";

export default function WhyUseTailwind() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col justify-center p-8 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Why Use Tailwind CSS?</h1>
            
            <ul className="text-start justify-center list-inside space-y-2">
                <li>✅ Faster development using utility classes</li>
                <li>✅ Built-in responsive design support</li>
                <li>✅ Consistent design without writing custom CSS</li>
                <li>✅ Easy to extend and scale with plugins</li>
            </ul>

            <br />

            {/* Open Modal Button */}
            <button
                onClick={() => setIsModalOpen(true)}
                className="mt-4 px-4 py-2 border rounded-lg shadow-md"
            >
                Sample Code
            </button>

            {/* Link to Next Section */}
            <Link to={routes.integration} className="mt-4 next-button">
                Frameworks and Languages That Use Tailwind
            </Link>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="rounded-lg p-6 max-w-lg w-full relative border">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-2 right-2"
                        >
                            &times;
                        </button>

                        <h2 className="text-2xl font-semibold mb-4">Example:</h2>
                        
                        {/* Code Example */}
                        <div className="border rounded-md p-4 overflow-x-auto">
                            <p className="text-start font-mono text-sm">
                                <span>.btn</span> {'{'}
                                <br />
                                &nbsp;&nbsp;background-color: blue;
                                <br />
                                &nbsp;&nbsp;color: white;
                                <br />
                                &nbsp;&nbsp;padding: 8px;
                                <br />
                                &nbsp;&nbsp;border-radius: 4px;
                                <br />
                                {'}'}
                            </p>
                        </div>

                        <p className="my-4">In Tailwind CSS, it's just one line!</p>

                        {/* Tailwind Example */}
                        <div className="border rounded-md p-4 overflow-x-auto">
                            <pre className="text-start font-mono text-sm">
                                {`<button class="bg-blue-500 text-white py-2 px-4 rounded">
    Click Me
</button>`}
                            </pre>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
