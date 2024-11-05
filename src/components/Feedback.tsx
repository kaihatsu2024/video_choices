import React from 'react';
import { cn } from '../utils/cn';

interface FeedbackProps {
  message: string;
  type: 'correct' | 'incorrect' | null;
}

export function Feedback({ message, type }: FeedbackProps) {
  if (!message) return null;

  return (
    <div
      className={cn(
        'mt-5 text-center font-bold transition-all duration-300',
        type === 'correct' && 'text-[#58CC02]',
        type === 'incorrect' && 'text-[#FF4B4B]'
      )}
    >
      {message}
    </div>
  );
}