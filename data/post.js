const PostData = [{
    name: "Wall Street Bets Tracker",
    description: "Tracking popular stocks mentions on r/WallStreetBets",
    cover: "/examples/post/cover1.png",
    likes: 172,
    comments: 10,
    pricingType: "Free",
    topic: "FinTech",
    promoted: false,
}, {
    name: "Stripe Payment Links",
    description: "Create a link. Sell anywhere.",
    cover: "/examples/post/cover2.jpg",
    likes: 1298,
    comments: 145,
    pricingType: "",
    topic: "",
    promoted: true,
}, {
    name: "Airplane",
    description: "Quickly transform scripts, SQL, and more into internal tools",
    cover: "/examples/post/cover3.png",
    likes: 763,
    comments: 93,
    pricingType: "Free",
    topic: "Saas",
    promoted: false,
}, {
    name: "Secoda",
    description: "The all in one workspace for data teams",
    cover: "/examples/post/cover4.jpg",
    likes: 252,
    comments: 34,
    pricingType: "Free Options",
    topic: "Productivity",
    promoted: false,
}, {
    name: "Paraphrasing Tool",
    description: "The best paraphrasing tool for writers",
    cover: "/examples/post/cover5.jpg",
    likes: 142,
    comments: 10,
    pricingType: "Free",
    topic: "Writing Tools",
    promoted: false,
}, ]

function getPostData() {
    return PostData
}
export {
    getPostData
}