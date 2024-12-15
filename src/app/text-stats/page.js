'use client';
import '../globals.css';
import { useState } from 'react';

export default function TextStatistics() {
  const [inputText, setInputText] = useState('');
  const [includeSpaces, setIncludeSpaces] = useState(true);
  const [textStats, setTextStats] = useState({
    characters: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
  });

  const updateStats = (text, includeSpacesOption = includeSpaces) => {
    const characters = includeSpacesOption ? text.length : text.replace(/\s/g, '').length;
    const words = text.split(/\s+/).filter(Boolean).length;
    const sentences = text.split(/[.!?]+/).filter(Boolean).length;
    const paragraphs = text.split(/\n+/).filter(Boolean).length;
    setTextStats({ characters, words, sentences, paragraphs });
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-bold text-gray-200 mb-5">Text Statistics</h1>
      <textarea
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
          updateStats(e.target.value);
        }}
        placeholder="Enter your text here"
        className="w-full max-w-3xl h-80 p-3 border outline-none text-zinc-900 border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 mb-4"
      ></textarea>
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="includeSpaces"
          checked={includeSpaces}
          onChange={(e) => {
            const newIncludeSpaces = e.target.checked;
            setIncludeSpaces(newIncludeSpaces);
            updateStats(inputText, newIncludeSpaces);
          }}
          className="mr-2"
        />
        <label htmlFor="includeSpaces" className="text-gray-300">
          Include spaces in character count
        </label>
      </div>
      <div className="w-full max-w-lg mt-2 py-2 px-4 border border-gray-500 rounded-md text-gray-300">
        <h2 className="text-xl text-center font-bold mb-2">Statistics</h2>
        <p><strong>Characters:</strong> {textStats.characters}</p>
        <p><strong>Words:</strong> {textStats.words}</p>
        <p><strong>Sentences:</strong> {textStats.sentences}</p>
        <p><strong>Paragraphs:</strong> {textStats.paragraphs}</p>
      </div>
    </div>
  );
}