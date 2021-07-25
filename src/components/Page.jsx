import { useRouter } from "next/router";
import Head from "next/head";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import AppDetail from "./AppDetail";
import NavigationCatalog from "./NavigationCatalog";
import AppBar from "./AppBar";
import MainContext from "./MainContext";
import ContentNavigation from "./ContentNavigation";
const Container = styled("section")`
  display: flex;
  position: relative;
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

export default function PageContainer(props) {
  return (
    <Container>
      <Head>
        <title>Product Hunter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LeftContainer>
        <NavigationContext>
          <AppDetail version={props.version}></AppDetail>
          <NavigationCatalog
            items={getDrawerItems()}
            layerTotal={3}
            indent={6}
            initSelectedLabel={props.currentNavigationLabel}
            onChange={handleSelectFromCatalog}
          ></NavigationCatalog>
        </NavigationContext>
      </LeftContainer>
      <RightContainer>
        <AppBar></AppBar>
        <MainContext>{props.children}</MainContext>
        <ContentNavigation></ContentNavigation>
      </RightContainer>
    </Container>
  );
}
PageContainer.propTypes = {
  version: PropTypes.string.isRequired,
  currentNavigationLabel: PropTypes.string.isRequired,
};
