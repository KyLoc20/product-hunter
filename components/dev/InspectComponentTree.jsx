import styled from "@emotion/styled";
import PropTypes from "prop-types";
import * as React from "react";
import Paper from "@/components/generic/Paper";
import { withBoxCSS } from "@/components/generic/Box"
import { composeCSS } from "@/utilities/style";
import { withTextCSS } from "@/components/generic/Text";
import Inspector from "../helper/Inspector";
const Component = styled("section")`
  ${[withBoxCSS({ column: true })]};
  width: 720px;
`;
const ContentContainer = styled("div")`
  ${[withBoxCSS({ column: true })]};
  width: 100%;
  padding: 20px;
`;
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
  return (
    <Component>
      <Paper>
        <ContentContainer>
          <Inspector tree={tree}></Inspector>
        </ContentContainer>
      </Paper>
    </Component>
  );
}
InspectComponentTree.propTypes = {};
