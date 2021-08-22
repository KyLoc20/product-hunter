import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { parseNumberWithPx } from "@/utilities/style";
import * as React from "react";
import PropTypes from "prop-types";
export default function Media(props) {
  return <div>Media</div>;
}
function Image(props) {
  return <div>Image</div>;
}
Media.Image = Image;
function Video(props) {
  return <div>Video</div>;
}
Media.Video = Video;
const GifComponent = styled.video``;
function Gif(props) {
  const videoRef = React.useRef();
  return (
    <GifComponent
      ref={videoRef}
      width={props.width}
      height={props.height}
      loop
      autoPlay
      disableremoteplayback
      disablepictureinpicture
      poster={props.url}
    >
    </GifComponent>
  );
}
Gif.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};
Media.Gif = Gif;
function ControlledGif({ width, height, url }) {
  const [isActive, setIsActive] = React.useState(false);
  const videoRef = React.useRef();
  React.useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      if (isActive) {
        video.play();
      } else {
        video.currentTime = 0;
        video.pause();
      }
    }
  }, [isActive]);
  const handleMouseEnter = () => {
    setIsActive(true);
  };
  const handleMouseLeave = () => {
    setIsActive(false);
  };
  return (
    <GifComponent
      ref={videoRef}
      width={width}
      height={height}
      autoPlay={false}
      loop
      disableremoteplayback
      disablepictureinpicture
      playsinline
      muted
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <source src={url} type="video/webm" />
      <source src={url} type="video/mp4" />
    </GifComponent>
  );
}
ControlledGif.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};
export { Media, ControlledGif };
