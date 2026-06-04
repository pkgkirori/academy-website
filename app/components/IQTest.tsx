'use client';
import { useState } from 'react';

const questions = [
  {
    q: 'What comes next in the sequence? 2, 4, 8, 16, ___',
    options: ['24', '32', '28', '20'],
    answer: 1,
  },
  {
    q: 'If A = 1, B = 2, C = 3… what does CAB equal?',
    options: ['6', '7', '5', '8'],
    answer: 0,
  },
  {
    q: 'Which number does not belong? 3, 5, 7, 9, 11',
    options: ['3', '9', '5', '11'],
    answer: 1,
  },
  {
    q: 'A train travels 60 km in 1 hour. How far in 2.5 hours?',
    options: ['120 km', '150 km', '140 km', '180 km'],
    answer: 1,
  },
  {
    q: 'If you rearrange "SHORE", you get a type of ___?',
    options: ['Vehicle', 'Animal', 'Plant', 'Color'],
    answer: 1,
  },
  {
    q: 'Which is different? Dog, Cat, Sparrow, Fish',
    options: ['Dog', 'Sparrow', 'Cat', 'Fish'],
    answer: 1,
  },
  {
    q: '3 is to 9 as 5 is to ___?',
    options: ['10', '15', '25', '20'],
    answer: 2,
  },
  {
    q: 'Find the missing number: 1, 4, 9, 16, ___',
    options: ['20', '25', '36', '30'],
    answer: 1,
  },
  {
    q: 'ABCD : DCBA :: EFGH : ___?',
    options: ['GHFE', 'HGFE', 'FGHE', 'HEFG'],
    answer: 1,
  },
  {
    q: 'If 5 workers build a wall in 10 days, how many days do 10 workers need?',
    options: ['10 days', '20 days', '5 days', '8 days'],
    answer: 2,
  },
];

function getResult(score: number) {
  if (score >= 9) return { label: 'Exceptional', color: 'text-green-600', desc: 'You have an analytical mind. You\'ll thrive as a software engineer!' };
  if (score >= 7) return { label: 'Above Average', color: 'text-blue-600', desc: 'Strong logical skills. Great foundation for programming.' };
  if (score >= 5) return { label: 'Average', color: 'text-yellow-600', desc: 'You\'re ready to learn. Coding sharpens logical thinking significantly.' };
  return { label: 'Needs Practice', color: 'text-orange-600', desc: 'No worries — logical thinking is a skill you can build with practice!' };
}

export default function IQTest() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const handleNext = () => {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    if (current + 1 >= questions.length) {
      setAnswers(newAnswers);
      setDone(true);
    } else {
      setAnswers(newAnswers);
      setCurrent(current + 1);
      setSelected(null);
    }
  };

  const score = answers.filter((a, i) => a === questions[i].answer).length;
  const result = getResult(score);

  if (done) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center max-w-xl mx-auto">
        <div className="text-5xl mb-4">🧠</div>
        <h3 className="text-2xl font-bold text-gray-800">Your Score: {score} / {questions.length}</h3>
        <p className={`text-xl font-semibold mt-2 ${result.color}`}>{result.label}</p>
        <p className="text-gray-600 mt-3">{result.desc}</p>
        <div className="mt-6 p-4 bg-blue-50 rounded-xl">
          <p className="text-sm text-blue-800 font-medium">Good news: You don&apos;t need a high IQ to become a software engineer. You need <strong>consistency</strong>, <strong>practice</strong>, and the right guidance.</p>
        </div>
        <button
          onClick={() => { setCurrent(0); setAnswers([]); setSelected(null); setDone(false); }}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors text-sm font-semibold"
        >
          Retake Test
        </button>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-gray-500">Question {current + 1} of {questions.length}</span>
        <div className="w-32 bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-5">{q.q}</h3>

      <div className="space-y-3 mb-6">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${
              selected === i
                ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium'
                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 text-gray-700'
            }`}
          >
            {String.fromCharCode(65 + i)}. {opt}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={selected === null}
        className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-sm"
      >
        {current + 1 === questions.length ? 'See Result' : 'Next Question →'}
      </button>
    </div>
  );
}
