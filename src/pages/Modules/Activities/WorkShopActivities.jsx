const activities = [
    {
        id: 1,
        emoji: "🎵",
        title: "Create a Music/Video Player UI",
        description: "Design a simple music/video player interface with play, pause, and skip buttons. Style it however you like — add hover and active states.",
    },
    {
        id: 2,
        emoji: "🏆",
        title: "Create a Leaderboard",
        description: "Design a leaderboard for with person names, scores, and ranks. Make it interactive with hover and focus states.",
    },
    {
        id: 3,
        emoji: "💡",
        title: "Create a FAQ Section",
        description: "Make a FAQ section with questions and answers that expand or collapse. Add icons, borders, or colors.",
    },
    {
        id: 4,
        emoji: "📸",
        title: "Create a Responsive Image Gallery",
        description: "Make an image gallery that looks good on both mobile and desktop. Add hover effects or transitions.",
    },
    {
        id: 5,
        emoji: "🛒",
        title: "Design a Shopping Cart Page",
        description: "Create a shopping cart layout with a list of items, prices, and a checkout button. Add some hover and transition effects.",
    },
    {
        id: 6,
        emoji: "📅",
        title: "Make an Event Calendar",
        description: "Create a simple event calendar using Flexbox or Grid. Add hover and active states to highlight dates or events.",
    },
    {
        id: 7,
        emoji: "💵",
        title: "Create a Pricing Table",
        description: "Design a table to display different pricing options. Add hover effects and experiment with layouts.",
    },
    {
        id: 8,
        emoji: "🌐",
        title: "Design a Blog Page",
        description: "Create a simple blog page with a header, content area, and maybe a sidebar. Make it responsive.",
    },
    {
        id: 9,
        emoji: "🎯",
        title: "Build a To-Do List",
        description: "Create a to-do list where you can add and remove tasks. Style it with hover and focus states.",
    },
    {
        id: 10,
        emoji: "📝",
        title: "Build a Simple Personal Profile Card",
        description: "Create a personal profile card with a profile picture, name, bio, and a button.",
    },
    {
        id: 11,
        emoji: "💬",
        title: "Create a Live Chat Interface",
        description: "Design a real-time chat interface with message sending and receiving.",
    },
    {
        id: 12,
        emoji: "💼",
        title: "Create a Job Board Interface",
        description: "Design a job board where users can filter jobs by category, location, and salary.",
    },
];

export default function WorkshopActivities() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-8 cursor-pointer">
            {activities.map((activity) => (
                <div
                    key={activity.id}
                    className="border rounded-lg p-6 shadow-md transition-transform hover:scale-105"
                >
                    <div className="text-3xl mb-4">{activity.emoji}</div>
                    <h2 className="text-xl font-bold mb-2">{activity.title}</h2>
                    <p className="text-sm mb-4">{activity.description}</p>
                </div>
            ))}
        </div>
    );
}
