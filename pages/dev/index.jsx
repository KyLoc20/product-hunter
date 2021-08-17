import Head from "next/head";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import InspectComponentTree from "@/components/dev/InspectComponentTree";
const Container = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: rgb(243, 243, 243);
  min-height: 100vh;
`;
const ContentContainer = styled("main")`
  position: relative;
  display: flex;
  margin-top: 30px;
  padding: 0 15px;
`;

function DevPage(props) {
  return (
    <Container>
      <Head>
        <title>Product Hunter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContentContainer>
        <InspectComponentTree></InspectComponentTree>
      </ContentContainer>
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
export default DevPage;
