import React from 'react';

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-[#58CC02] transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}