# Neuralink Viral Ad — Remotion Motion Graphics

A high-intensity 33-second viral motion graphics ad for Neuralink.

## 🚀 Quick Start

```bash
npm install
npm run dev        # opens Remotion Studio at http://localhost:3000
```

## 🎬 Render to MP4

```bash
npx remotion render NeuralinkAd out/neuralink-ad.mp4
```

## 🎞️ Scene Breakdown

| Scene | Frames | Time | Content |
|-------|--------|------|---------|
| Viral Hook | 0–90 | 0–3s | "The End of Speaking" Controversy Hook |
| Intro | 90–270 | 3–9s | Neuralink Logo reveal + title |
| Meet | 270–450 | 9–15s | Synaptic orb + "The Link" |
| Features | 450–630 | 15–21s | 4 feature cards (Telepathy, etc.) |
| Interface | 630–810 | 21–27s | Mind-Chat UI demo |
| CTA | 810–990 | 27–33s | Join Waitlist button |

## 📁 Project Structure

```
src/
  NeuralinkAd.tsx       # Main composition
  NeuralinkLogo.tsx     # Futuristic chip design
  Root.tsx              # Registers composition
  Particles.tsx         # Floating synaptic particles
  utils.ts              # Easing helpers
  scenes/
    SceneNeuralinkHook.tsx # High-intensity hook
    SceneIntro.tsx      # Intro branding
    SceneMeet.tsx       # The Link presentation
    SceneFeatures.tsx   # Feature cards
    SceneChat.tsx       # Neural UI demo
    SceneCTA.tsx        # Call-to-action
    SceneVoiceover.tsx  # Caption overlay
    SceneTransition.tsx # Neon transitions
```
