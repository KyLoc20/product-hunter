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
      loop={props.loop}
      autoPlay={props.autoPlay}
      disableremoteplayback
      disablepictureinpicture
      playsinline
    >
      <source src={props.url} type="video/webm" />
      <source src={props.url} type="video/mp4" />
    </GifComponent>
  );
}
Gif.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
};
Gif.defaultProps = {
  autoPlay: true,
  loop: true,
  disableRemotePlayback: true,
  disablePictureInPicture: true,
};
Media.Gif = Gif;
const useGif = (width, height, url, active) => {
  const [isActive, setIsActive] = React.useState(active);
  const videoRef = React.useRef();
  React.useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        const video = videoRef.current;
        const promise = video.play();

        if (promise !== undefined) {
          promise
            .then(() => {
              // Autoplay started
            })
            .catch((error) => {
              // Autoplay was prevented.
              video.muted = true;
              video.play();
            });
        }
      } else {
        videoRef.current.currentTime = 0;
        videoRef.current.pause();
      }
    }
  }, [isActive]);
  const RenderGif = (
    <GifComponent
      ref={videoRef}
      width={width}
      height={height}
      loop
      disableremoteplayback
      disablepictureinpicture
      playsinline
    >
      <source src={url} type="video/webm" />
      <source src={url} type="video/mp4" />
    </GifComponent>
  );
  return [setIsActive, RenderGif];
};
export { useGif, Media };
