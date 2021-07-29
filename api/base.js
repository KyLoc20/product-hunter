import { getRecommendData } from "../data/recommend.js";
import { getPostData } from "../data/post.js";
import { getStoryData } from "../data/story.js";
import { getUpcomingData } from "../data/upcoming";
import { getHiringData } from "../data/hiring";
import { getDiscussionData } from "../data/discussion";
const SourceMap = {
    "recommend": getRecommendData,
    "post": getPostData,
    "story": getStoryData,
    "upcoming": getUpcomingData,
    "hiring": getHiringData,
    "discussion": getDiscussionData,
}

function getData(source) {
    if (SourceMap[source] === undefined) throw Error(`Can't resolve the data source: ${source}`)
    return SourceMap[source]()
}
export { getData }