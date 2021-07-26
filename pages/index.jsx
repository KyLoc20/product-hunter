import HomePage from "./home/index";
import { getRecommendData } from "../data/recommend.js";
import { getPostData } from "../data/post.js";
// This function gets called at build time
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const recommendItems = getRecommendData();
  const todayPostItems = getPostData();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { recommendItems, todayPostItems },
  };
}
export default HomePage;