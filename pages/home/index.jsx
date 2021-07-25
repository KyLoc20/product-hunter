import Head from "next/head";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import AppBar from "../../src/components/AppBar";
const Container = styled("section")`
  display: flex;
  flex-direction: column;
  position: relative;
  background: rgb(243, 243, 243);
  min-height: 200vh;
`;
const LeftContainer = styled("main")`
  position: relative;
  flex-shrink: 0;
  width: 300px;
  height: 100vh;
`;
const RightContainer = styled("aside")`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-between;
`;


function HomePage(props) {
  const { version } = props;
  return (
    <Container>
      <Head>
        <title>Product Hunter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar></AppBar>
    </Container>
  );
}
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {},
  };
}
export default HomePage;
