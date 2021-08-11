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
    ],
    reviews: 11,
    ratings: 5.0,
    userAvatar: "/examples/postDetail/avatar7.jpg",
    discussionItems: [{
        name: "Chris Barcus",
        introduction: "Co-founder @ Tactic",
        avatar: "/examples/postDetail/avatar1.jpg",
        href: "/@chris_barcus",
        titleItems: ["Maker"],
        contentItems: [
            "Hey all! 👋",
            "We are excited to share our product and company, Tactic, here on Product Hunt! We have been working on our platform for the last 16 months, and since launching back in March, we now serve thousands of employees across the globe and have partnerships with companies represented in over 10+ countries. 🎉",
            "Since lockdown, we've all realized that most of us do not need to be in the office every day to do our jobs well. In fact, sometimes we're even more productive working from home! And while the flexibility is great and no one misses the commute (unless you love podcasts or audibles), the human connection an office provides has been lost.",
            `Despite all the early claims that "the office was dead," our team here at Tactic thought differently. We saw a world where the future of work combined the perks of remote work with the benefits of in-office work. Why require everyone to work in-office from 9-5 every day when you could create a hybrid work experience, one that allows your employees to work from where they work best. ❤️`,
            "Once we saw this better, brighter future for the workplace, we talked to hundreds of executives, directors, managers, to new hires. We quickly realized everyone wanted a different way of working, no two people the same. How can you create a working environment for everyone when everyone wants something different? So we went to work. 💪",
            "Meet Tactic, where office and remote work meet. The most intuitive way for an employer to create a dynamic and flexible working experience tailored for each employee. Tactic empowers employees, giving them the tools necessary to understand which days are best for them to go into the office and coordinate their schedules with their co-workers. 🙌",
            "We believe the future of work should be centered around employee collaboration, allowing companies and employees to create their ideal working experience from anywhere. 👩‍💻",
            " We hope you will check out our platform and let us know your feedback! We're here and happy to answer any and all questions as you poke around. Cheers! 🙏",
        ],
        karmas: 140,
        upvotes: 24,
        date: "9d ago",
        commentItems: [{
                name: "Chris Barcus",
                introduction: "Co-founder @ Tactic",
                avatar: "/examples/postDetail/avatar1.jpg",
                href: "/@chris_barcus",
                titleItems: ["Maker"],
                contentItems: [
                    "Thank you +1"
                ],
                karmas: 140,
                upvotes: 3,
                date: "8d ago",
                commentItems: []
            },
            {
                name: "Chris Barcus",
                introduction: "Co-founder @ Tactic",
                avatar: "/examples/postDetail/avatar1.jpg",
                href: "/@chris_barcus",
                titleItems: ["Maker"],
                contentItems: [
                    "Thank you +2"
                ],
                karmas: 140,
                upvotes: 3,
                date: "7d ago",
                commentItems: []
            },
        ],

    }]
}, ]

function getPostDetailData() {
    return PostDetailData
}
export {
    getPostDetailData
}