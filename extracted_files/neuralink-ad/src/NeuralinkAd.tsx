import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { SceneNeuralinkHook } from "./scenes/SceneNeuralinkHook";
import { SceneIntro } from "./scenes/SceneIntro";
import { SceneMeet } from "./scenes/SceneMeet";
import { SceneFeatures } from "./scenes/SceneFeatures";
import { SceneChat } from "./scenes/SceneChat";
import { SceneCTA } from "./scenes/SceneCTA";
import { Voiceover } from "./scenes/SceneVoiceover";
import { FadeTransition } from "./scenes/SceneTransition";

const HOOK_DUR = 90;
const INTRO_START = 90;
const MEET_START = 270;
const FEAT_START = 450;
const CHAT_START = 630;
const CTA_START = 810;
const TOTAL = 990;

export const NeuralinkAd: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000", fontFamily: "'Space Grotesk', sans-serif" }}>

      <Sequence from={0} durationInFrames={HOOK_DUR}>
        <SceneNeuralinkHook />
      </Sequence>

      <Sequence from={INTRO_START} durationInFrames={MEET_START - INTRO_START + 20}>
        <SceneIntro />
      </Sequence>

      <Sequence from={MEET_START} durationInFrames={FEAT_START - MEET_START + 20}>
        <SceneMeet />
      </Sequence>

      <Sequence from={FEAT_START} durationInFrames={CHAT_START - FEAT_START + 20}>
        <SceneFeatures />
      </Sequence>

      <Sequence from={CHAT_START} durationInFrames={CTA_START - CHAT_START + 20}>
        <SceneChat />
      </Sequence>

      <Sequence from={CTA_START} durationInFrames={TOTAL - CTA_START}>
        <SceneCTA />
      </Sequence>

      {/* VOICEOVER */}
      <Sequence from={0} durationInFrames={HOOK_DUR}>
        <Voiceover text="The end of speaking is here." />
      </Sequence>
      <Sequence from={INTRO_START + 60} durationInFrames={90}>
        <Voiceover text="Welcome to the next evolution of human intelligence." />
      </Sequence>
      <Sequence from={MEET_START + 20} durationInFrames={120}>
        <Voiceover text="Meet The Link. A direct interface between your brain and the digital world." />
      </Sequence>
      <Sequence from={FEAT_START + 30} durationInFrames={130}>
        <Voiceover text="Telepathy, instant recall, and restoration. The possibilities are infinite." />
      </Sequence>
      <Sequence from={CHAT_START + 20} durationInFrames={130}>
        <Voiceover text="Think it. Execute it. Connect like never before." />
      </Sequence>
      <Sequence from={CTA_START + 30} durationInFrames={130}>
        <Voiceover text="Neuralink. The future is within. Join the waitlist today." />
      </Sequence>

      {/* TRANSITIONS */}
      <Sequence from={0} durationInFrames={10}>
        <FadeTransition direction="in" durationFrames={10} />
      </Sequence>
      <Sequence from={INTRO_START - 10} durationInFrames={20}>
        <FadeTransition direction="out" durationFrames={10} />
      </Sequence>
      <Sequence from={INTRO_START} durationInFrames={15}>
        <FadeTransition direction="in" durationFrames={15} />
      </Sequence>
      <Sequence from={MEET_START - 10} durationInFrames={20}>
        <FadeTransition direction="out" durationFrames={10} />
      </Sequence>
      <Sequence from={MEET_START} durationInFrames={15}>
        <FadeTransition direction="in" durationFrames={15} />
      </Sequence>
      <Sequence from={FEAT_START - 10} durationInFrames={20}>
        <FadeTransition direction="out" durationFrames={10} />
      </Sequence>
      <Sequence from={FEAT_START} durationInFrames={15}>
        <FadeTransition direction="in" durationFrames={15} />
      </Sequence>
      <Sequence from={CHAT_START - 10} durationInFrames={20}>
        <FadeTransition direction="out" durationFrames={10} />
      </Sequence>
      <Sequence from={CHAT_START} durationInFrames={15}>
        <FadeTransition direction="in" durationFrames={15} />
      </Sequence>
      <Sequence from={CTA_START - 10} durationInFrames={20}>
        <FadeTransition direction="out" durationFrames={10} />
      </Sequence>
      <Sequence from={CTA_START} durationInFrames={15}>
        <FadeTransition direction="in" durationFrames={15} />
      </Sequence>
      <Sequence from={TOTAL - 30} durationInFrames={30}>
        <FadeTransition direction="out" durationFrames={30} />
      </Sequence>
    </AbsoluteFill>
  );
};
