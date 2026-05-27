import "./index.css";
import { Composition } from "remotion";
import { NeuralinkAd } from "./NeuralinkAd";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="NeuralinkAd"
        component={NeuralinkAd}
        durationInFrames={990}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
