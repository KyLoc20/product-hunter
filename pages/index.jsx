import HomePage from "./home/index";
import { getData } from "../api/base";
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const recommendItems = getData("recommend");
  const todayPostItems = getData("post");
  const latestStoryItems = getData("story");
  const upcomingItems = getData("upcoming");
  const hiringItems = getData("hiring");
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      recommendItems,
      todayPostItems,
      latestStoryItems,
      upcomingItems,
      hiringItems,
    },
  };
}
export default HomePage;
