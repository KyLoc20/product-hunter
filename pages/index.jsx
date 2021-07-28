import HomePage from "./home/index";
import { getRecommendData } from "../data/recommend.js";
import { getPostData } from "../data/post.js";
import { getStoryData } from "../data/story.js";
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const recommendItems = getRecommendData();
  const todayPostItems = getPostData();
  const latestStoryItems = getStoryData();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { recommendItems, todayPostItems, latestStoryItems },
  };
}
export default HomePage;
