import styled from "@emotion/styled";
import { css } from "@emotion/react";
import * as React from "react";
import PropTypes from "prop-types";
import { Box, withBoxCSS } from "../generic/Box";
import { withTextCSS } from "../generic/Text";
/* 
todo to inspect a component tree with colored labels and provide a naming convention
Component in Page
two basic types
-House: "container" "wrapper" contains components as its children
-Worker: name with meaning like a single app

whether generic (false by default)
-Generic generic=true
-Custom generic=false 
*/

/* 
const Component = styled.div`
  ${withBoxCSS({ column: true })};
`; 
*/
const NodeContent = styled.div`
  ${[withBoxCSS(), withTextCSS({ FS: 20, LH: 22 })]};
  height: 32px;
  padding: 4px 0;
`;
const NodeChildren = styled.div`
  ${[withBoxCSS({ column: true })]};
`;
function Node({ name, type, generic, children, layer }) {
  const computedNodeColor = React.useMemo(() => {
    return type === "Worker" ? "red" : "green";
  }, [type]);
  const computedNodePadding = React.useMemo(() => {
    return `${2 + (layer - 1) * 12}px`;
  }, [layer]);
  const tagLeft = (
    <NodeContent style={{ paddingLeft: computedNodePadding, color: computedNodeColor }}>
      {children && children.length > 0 ? `<${name}>` : `<${name} />`}
    </NodeContent>
  );
  const tagRight = children && children.length > 0 && (
    <NodeContent
      style={{ paddingLeft: computedNodePadding, color: computedNodeColor }}
    >{`</${name}>`}</NodeContent>
  );
  return (
    <Box column>
      {tagLeft}
      <NodeChildren>
        {children.map((node) => (
          <Node
            name={node.name}
            type={node.type}
            generic={node.generic}
            children={node.children}
            layer={layer + 1}
          ></Node>
        ))}
      </NodeChildren>
      {tagRight}
    </Box>
  );
}
Node.propTypes = {
  name: PropTypes.string,
  type: PropTypes.arrayOf(["Worker", "House"]),
  generic: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.object),
  layer: PropTypes.number,
};
Node.defaultProps = {
  generic: false,
  layer: 1,
  children: [],
};
// const Generic = () => {
//   return <ComponentPlaceholder></ComponentPlaceholder>;
// };
const Component = styled.div`
  ${withBoxCSS({ column: true })};
`;
export default function Inspector(props) {
  const { name, type, generic, children } = props.tree;
  return (
    <Component>
      <Node name={name} type={type} generic={generic} children={children} layer={1}></Node>
    </Component>
  );
}
Inspector.propTypes = {
  tree: PropTypes.object.isRequired,
};
Inspector.defaultProps = {
  tree: {},
};
export { Inspector };
