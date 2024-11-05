import React, { useState } from 'react';
import { VideoPlayer } from './components/VideoPlayer';
import { ProgressBar } from './components/ProgressBar';
import { ChoiceButton } from './components/ChoiceButton';
import { Feedback } from './components/Feedback';
import { Languages } from 'lucide-react';
import type { Choice } from './types';

const SAMPLE_QUESTION = {
  text: 'What does this person say as a greeting?',
  videoUrl: '/api/placeholder/400/225',
  choices: [
    { value: 'Hey', isCorrect: false },
    { value: 'Hallo', isCorrect: true }
  ],
  explanation: '"Hallo" is German for "Hello"'
};

function App() {
  const [progress, setProgress] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', type: null as 'correct' | 'incorrect' | null });

  const handleChoiceSelect = (choice: Choice) => {
    if (isAnswered) return;
    setSelectedChoice(choice);
  };

  const handleCheck = () => {
    if (!selectedChoice || isAnswered) return;
    
    setIsAnswered(true);
    if (selectedChoice.isCorrect) {
      setFeedback({
        message: `🎉 Correct! ${SAMPLE_QUESTION.explanation}`,
        type: 'correct'
      });
    } else {
      setFeedback({
        message: 'Not quite! Try again!',
        type: 'incorrect'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Languages className="w-6 h-6 text-[#58CC02]" />
          <h1 className="text-2xl font-bold text-gray-800">Language Quiz</h1>
        </div>

        <div className="text-center text-lg text-gray-700 mb-4">
          {SAMPLE_QUESTION.text}
        </div>

        <VideoPlayer
          src={SAMPLE_QUESTION.videoUrl}
          onProgress={setProgress}
        />
        
        <ProgressBar progress={progress} />

        <div className="grid grid-cols-2 gap-3 mt-6">
          {SAMPLE_QUESTION.choices.map((choice, index) => (
            <ChoiceButton
              key={index}
              value={choice.value}
              selected={selectedChoice === choice}
              correct={isAnswered && choice.isCorrect}
              incorrect={isAnswered && selectedChoice === choice && !choice.isCorrect}
              onClick={() => handleChoiceSelect(choice)}
            />
          ))}
        </div>

        <Feedback message={feedback.message} type={feedback.type} />

        {selectedChoice && !isAnswered && (
          <button
            onClick={handleCheck}
            className="w-full mt-6 py-3 px-6 bg-[#58CC02] hover:bg-[#46A302] text-white font-bold rounded-xl transition-colors"
          >
            Check
          </button>
        )}
      </div>
    </div>
  );
}

export default App;