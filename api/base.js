import { getRecommendData } from "../data/recommend.js";
import { getPostData } from "../data/post.js";
import { getStoryData } from "../data/story.js";
import { getUpcomingData } from "../data/upcoming";
const SourceMap = {
    "recommend": getRecommendData,
    "post": getPostData,
    "story": getStoryData,
    "upcoming": getUpcomingData,
}

function getData(source) {
    if (SourceMap[source] === undefined) throw Error("Can't resolve the data source: ", type)
    return SourceMap[source]()
}
export { getData }