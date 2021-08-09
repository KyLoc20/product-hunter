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
    votes: 750,
    reviews: 11,
    ratings: 5.0,
    hunter: {
        name: "Chris Barcus",
        introduction: "Co-founder @ Tactic",
        avatar: "/examples/postDetail/avatar1.jpg",
    },
    makerItems: [{
            name: "Keyla Rodriguez",
            introduction: "Product Designer based in NYC",
            avatar: "/examples/postDetail/avatar2.jpg",
        },
        {
            name: "Mario Quintanilla",
            introduction: "podcast listener and foodie",
            avatar: "/examples/postDetail/avatar3.jpg",
        },
        {
            name: "Tatum Hiatt",
            introduction: "Business Development Executive at Tactic",
            avatar: "/examples/postDetail/avatar4.jpg",
        },
        {
            name: "Emilio Astarita",
            introduction: "Developer",
            avatar: "/examples/postDetail/avatar5.jpg",
        },
        {
            name: "Emilio Cignetti",
            introduction: "I'm a front-end software developer",
            avatar: "/examples/postDetail/avatar6.jpg",
        },
    ]
}, ]

function getPostDetailData() {
    return PostDetailData
}
export {
    getPostDetailData
}