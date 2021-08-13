import { getRecommendData } from "../data/recommend";
import { getPostData } from "../data/post";
import { getStoryData } from "../data/story";
import { getUpcomingData } from "../data/upcoming";
import { getHiringData } from "../data/hiring";
import { getDiscussionData } from "../data/discussion";
import { getProductData } from "data/product";
const SourceMap = {
    "recommend": getRecommendData,
    "post": getPostData,
    "product": getProductData,
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