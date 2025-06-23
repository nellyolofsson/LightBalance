
const VideoPlayer = ({ videoSrc }) => {
    return (
        <video
            className="video-player"
            autoPlay
            loop
            muted
        >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;
