export interface Choice {
  value: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  text: string;
  videoUrl: string;
  choices: Choice[];
  explanation: string;
}