import HomePage from "./home/index";
import { getRecommendData } from "./home/data";
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const recommendItems = getRecommendData();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: { recommendItems },
  };
}
export default HomePage;