export interface Hook {
  id: string;
  type: 'curiosity' | 'shock' | 'authority' | 'warning' | 'transformation' | 'controversy' | 'fast-result';
  transcript: string;
  emotionalIntensity: number;
  niche: string;
  pacingScore: number;
  retentionScore: number;
  viralScore: number;
}

export const hookDatabase: Hook[] = [
  {
    id: 'n1',
    type: 'controversy',
    transcript: "The end of speaking is here.",
    emotionalIntensity: 0.98,
    niche: 'Neurotech',
    pacingScore: 0.95,
    retentionScore: 0.97,
    viralScore: 0.98
  },
  {
    id: 'n2',
    type: 'shock',
    transcript: "Elon's most insane invention is finally ready.",
    emotionalIntensity: 0.95,
    niche: 'Tech',
    pacingScore: 0.92,
    retentionScore: 0.94,
    viralScore: 0.96
  },
  {
    id: 'n3',
    type: 'curiosity',
    transcript: "I controlled my phone with just my thoughts.",
    emotionalIntensity: 0.9,
    niche: 'Consumer Tech',
    pacingScore: 0.88,
    retentionScore: 0.92,
    viralScore: 0.94
  }
];
