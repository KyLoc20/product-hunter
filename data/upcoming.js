const UpcomingData = [{
    name: "Whalesync for Sales Teams",
    description: "Sync data between sales tools (like Salesforce and Airtable)",
    cover: "/examples/upcoming/cover1.png",
    follows: 43,
}, {
    name: "Zipit",
    description: "Unzip your S3 zip files faster",
    cover: "/examples/upcoming/cover2.jpeg",
    follows: 38,
}, {
    name: "Brodilla Incognito",
    description: "The unique service to secure and anonymous web surfing.",
    cover: "/examples/upcoming/cover3.png",
    follows: 27,
}, ]

function getUpcomingData() {
    return UpcomingData
}
export {
    getUpcomingData
}