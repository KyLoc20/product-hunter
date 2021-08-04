const PostDetailData = [{
    name: "Tactic",
    description: "Where office and remote work meet",
    cover: "/examples/postDetail/cover1.jpg",
    pricingType: "Free Options",
    topicItems: ["Productivity", "Saas", "Tech", "Remote Work Tools", ],
    rank: 2,
    rankDate: "August 02, 2021",
    introductionItems: ["Tactic puts collaboration and personal connection at the center of your hybrid organization. ❤️", "We bring teams together in the office and provide companies with data to make long-term decisions based on office space usage. 😎"],
    promo: "10% OFF",
}, ]

function getPostDetailData() {
    return PostDetailData
}
export {
    getPostDetailData
}