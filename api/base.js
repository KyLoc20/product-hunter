import { getRecommendData } from "../data/recommend.js";
import { getPostData } from "../data/post.js";
import { getStoryData } from "../data/story.js";
const SourceMap = {
    "recommend": getRecommendData,
    "post": getPostData,
    "story": getStoryData,
}

function getData(source) {
    if (SourceMap[source] === undefined) throw Error("Can't resolve the data source: ", type)
    return SourceMap[source]()
}
export { getData }