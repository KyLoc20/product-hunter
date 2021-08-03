const RecommendData = [{
    name: "Obsidian for Mobile",
    description: "Your plain-text second brain on the go, for iOS and Android",
    cover: "/examples/recommend/cover1.png",
    votes: 1371,
}, {
    name: "Exegesis",
    description: "a writing app for disorganized, creative, nonlinear thinking",
    cover: "/examples/recommend/cover2.png",
    votes: 136,
}, {
    name: "Startup Concepts",
    description: "Startup concepts explained via comics",
    cover: "/examples/recommend/cover3.png",
    votes: 1333,
}, {
    name: "SVG Gobbler",
    description: "Download, optimize, and process vector SVGs",
    cover: "/examples/recommend/cover4.jpg",
    votes: 82,
}, ]

function getRecommendData() {
    return RecommendData
}
export {
    getRecommendData
}