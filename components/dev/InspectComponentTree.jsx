import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import { withBoxCSS } from "@/components/generic/Box";
import { composeCSS } from "@/utilities/style";
import { withTextCSS } from "@/components/generic/Text";
import Inspector from "../helper/Inspector";
import MainCard from "../cards/MainCard";
import Media from "../generic/Media";
import { useGif } from "../generic/Media";
export default function InspectComponentTree() {
  //e.g. AnswerCard
  const [tree, setTree] = React.useState({
    name: "Component",
    type: "House",
    children: [
      {
        name: "Paper",
        generic: true,
        type: "House",
        children: [
          {
            name: "ContentContainer",
            type: "House",
            children: [
              {
                name: "Header",
                type: "House",
                children: [
                  { name: "Avatar", generic: true, type: "Worker", children: [] },
                  { name: "UserName", type: "Worker", children: [] },
                  { name: "Text", generic: true, type: "Worker", children: [] },
                ],
              },
              { name: "Reminder", type: "Worker", children: [] },
              { name: "AppList", type: "Worker", children: [] },
              {
                name: "OtherWrapper",
                type: "House",
                children: [
                  { name: "LikeButton", type: "Worker", children: [] },
                  { name: "DateFormat", type: "Worker", children: [] },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
  // const [setPlayGif, RenderGif] = useGif(
  //   80,
  //   80,
  //   "https://ph-files.imgix.net/9c6e6723-9956-4a04-93fa-f0bd891ee2ae.gif?fm=webm&amp;w=80&amp;h=80&amp;crop=max&amp;dpr=2#t=0.001",
  //   false
  // );
  return (
    <MainCard>
      <Inspector tree={tree}></Inspector>
      <Media></Media>
      <Media.Image></Media.Image>
      <Media.Video></Media.Video>
      {/* <img src="https://ph-files.imgix.net/78e0caaa-173a-46e0-94f4-0926f3d934d7.gif?auto=compress&fm=webp&codec=mozjpeg&cs=strip&w=330&h=110" /> */}
      <Media.Gif
        width={80}
        height={80}
        url="https://ph-files.imgix.net/9c6e6723-9956-4a04-93fa-f0bd891ee2ae.gif?fm=webm&amp;w=80&amp;h=80&amp;crop=max&amp;dpr=2#t=0.001"
      ></Media.Gif>
      {/* <div
        onMouseEnter={() => {
          setPlayGif(true);
        }}
        onMouseLeave={() => {
          setPlayGif(false);
        }}
      >
        {RenderGif}
      </div> */}
    </MainCard>
  );
}
InspectComponentTree.propTypes = {};
