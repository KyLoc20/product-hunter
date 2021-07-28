import Head from "next/head";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import { getData } from "../../api/base";
import AppBar from "../../src/components/AppBar";
import Recommend from "../../src/components/home/Recommend";
import PostList from "../../src/components/home/PostList";
import LatestStory from "../../src/components/home/LatestStory";
import Upcoming from "../../src/components/home/Upcoming";
import Hiring from "../../src/components/home/Hiring";

const Container = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: rgb(243, 243, 243);
  min-height: 100vh;
`;
const ContentContainer = styled("section")`
  position: relative;
  display: flex;
  margin-top: 30px;
  padding: 0 15px;
`;
const LeftContainer = styled("main")`
  display: flex;
  position: relative;
  flex-direction: column;
`;

const RightContainer = styled("aside")`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-top: 12px;
  margin-left: 20px;
`;

function HomePage(props) {
  const {
    version,
    recommendItems,
    todayPostItems,
    latestStoryItems,
    upcomingItems,
    hiringItems,
  } = props;
  console.log("HomePage", recommendItems, todayPostItems, latestStoryItems);
  return (
    <Container>
      <Head>
        <title>Product Hunter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar></AppBar>
      <ContentContainer>
        <LeftContainer>
          <Recommend items={recommendItems}></Recommend>
          <PostList title={"Today"} items={todayPostItems}></PostList>
        </LeftContainer>
        <RightContainer>
          <LatestStory items={latestStoryItems}></LatestStory>
          <Upcoming items={upcomingItems}></Upcoming>
          <Hiring items={hiringItems}></Hiring>
        </RightContainer>
      </ContentContainer>
    </Container>
  );
}
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
