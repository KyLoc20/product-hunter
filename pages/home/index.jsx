import Head from "next/head";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import { getData } from "../../api/base";
import AppBar from "../../components/generic/AppBar";
import Recommend from "../../components/home/Recommend";
import PostList from "../../components/home/PostList";
import LatestStory from "../../components/home/LatestStory";
import Upcoming from "../../components/home/Upcoming";
// import Hiring from "../../components/home/Hiring";
import Hiring from "@/components/home/Hiring/Component";
import Newsletter from "../../components/home/Newsletter";
import TopDiscussion from "../../components/home/TopDiscussion";
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
const Modal=styled.div``
function HomePage(props) {
  const {
    version,
    recommendItems,
    todayPostItems,
    latestStoryItems,
    upcomingItems,
    hiringItems,
    topDiscussionItems,
  } = props;
  // console.log("HomePage", recommendItems, todayPostItems, latestStoryItems);
  return (
    <Container>
      <Head>
        <title>Product Hunter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar></AppBar>
      <Modal id="modal-container"></Modal>
      <ContentContainer>
        <LeftContainer>
          <Recommend items={recommendItems}></Recommend>
          <PostList title={"Today"} items={todayPostItems}></PostList>
        </LeftContainer>
        <RightContainer>
          <LatestStory items={latestStoryItems}></LatestStory>
          <Upcoming items={upcomingItems}></Upcoming>
          <Hiring items={hiringItems}></Hiring>
          <Newsletter></Newsletter>
          <TopDiscussion items={topDiscussionItems}></TopDiscussion>
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
  const topDiscussionItems = getData("discussion");
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      recommendItems,
      todayPostItems,
      latestStoryItems,
      upcomingItems,
      hiringItems,
      topDiscussionItems,
    },
  };
}
export default HomePage;
