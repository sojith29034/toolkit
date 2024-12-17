'use client';
import '../globals.css';
import { useState } from 'react';

export default function TextTransformations() {
  const [inputText, setInputText] = useState('');
  const [transformedText, setTransformedText] = useState('');

  const reverseText = (text) => text.split('').reverse().join('');
  const reverseWords = (text) => text.split(' ').reverse().join(' ');
  const shuffleText = (text) => text.split(' ').sort(() => Math.random() - 0.5).join(' ');
  const leetSpeak = (text) => {
    const leetDictionary = {
      A: '4', E: '3', G: '6', H: '#', I: '1', O: '0', S: '$', T: '7', Z: '2',
    };
    return text.toUpperCase().split('').map(char => leetDictionary[char] || char).join('');
  };

  const handleTransformation = (type) => {
    let result = inputText;
    switch (type) {
      case 'reverse':
        result = reverseText(inputText);
        break;
      case 'reverseWords':
        result = reverseWords(inputText);
        break;
      case 'shuffle':
        result = shuffleText(inputText);
        break;
      case 'leetSpeak':
        result = leetSpeak(inputText);
        break;
      default:
        result = inputText;
    }
    setTransformedText(result);
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-bold text-gray-200 mb-5">Text Transformations</h1>
      
      
      <div className="w-full flex">
        <div className='h-full w-[50%] me-2'>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter your text here"
            className="w-full h-96 p-3 border outline-none text-zinc-900 border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 mb-4"
          ></textarea>
          <div className="flex justify-between mb-4">
            <button
              onClick={() => handleTransformation('reverse')}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Reverse Text
            </button>
            <button
              onClick={() => handleTransformation('reverseWords')}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Reverse Words
            </button>
            <button
              onClick={() => handleTransformation('shuffle')}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Shuffle Text
            </button>
            <button
              onClick={() => handleTransformation('leetSpeak')}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Leet Speak
            </button>
          </div>
        </div>
        
        {transformedText && (
          <div className="w-[50%] p-4 ms-2 border rounded-md border-gray-500 text-gray-300">
            <h3 className="text-xl font-bold mb-2">Transformed Text:</h3>
            <p>{transformedText}</p>
          </div>
        )}
      </div>
    </div>
  );
}
