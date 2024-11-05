import React from 'react';
import { cn } from '../utils/cn';

interface ChoiceButtonProps {
  value: string;
  selected: boolean;
  correct?: boolean;
  incorrect?: boolean;
  onClick: () => void;
}

export function ChoiceButton({
  value,
  selected,
  correct,
  incorrect,
  onClick,
}: ChoiceButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'p-4 border-2 rounded-xl cursor-pointer text-lg font-bold transition-all',
        'hover:bg-gray-50 hover:-translate-y-0.5 active:translate-y-0',
        selected && 'border-[#58CC02]',
        correct && 'bg-[#58CC02] border-[#58CC02] text-white',
        incorrect && 'bg-[#FF4B4B] border-[#FF4B4B] text-white animate-shake',
        !selected && !correct && !incorrect && 'border-gray-200'
      )}
    >
      {value}
    </button>
  );
}