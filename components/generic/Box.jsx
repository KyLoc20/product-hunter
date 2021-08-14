import styled from "@emotion/styled";

const BoxComponent = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  position: relative;
`;
/* 
to provide a way of binding some forward props to styled
*/
const withBox = ({ column } = {}) => {
  return styled.div`
    display: flex;
    flex-direction: ${column && "column"};
    position: relative;
  `;
};
export default function Box(props) {
  return <BoxComponent>{props.children}</BoxComponent>;
}
export { Box, withBox };