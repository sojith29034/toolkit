'use client';
import '../globals.css';
import { useState } from 'react';

export default function TextMinifier() {
  const [inputText, setInputText] = useState('');
  const [minifiedText, setMinifiedText] = useState('');

  const handleMinify = () => {
    if (inputText.trim()) {
      const minified = inputText
        .replace(/\s+/g, ' ')
        .trim();
      setMinifiedText(minified);
    } else {
      alert('Please enter some text to minify.');
    }
  };

  const handleCopy = () => {
    if (minifiedText) {
      navigator.clipboard.writeText(minifiedText);
      alert('Minified text copied to clipboard!');
    } else {
      alert('There is no minified text to copy.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-bold text-gray-200 mb-5">Text Minifier</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter your text here"
        className="w-full max-w-3xl h-40 p-3 border outline-none text-zinc-900 border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 mb-4"
      ></textarea>
      <button
        onClick={handleMinify}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 mb-4"
      >
        Minify Text
      </button>
      {minifiedText && (
        <div className="w-full max-w-3xl text-center">
          <label htmlFor="minified" className="block text-lg font-medium text-gray-300 mb-2">
            Minified Text:
          </label>
          <textarea
            id="minified"
            value={minifiedText}
            readOnly
            className="w-full h-40 p-3 border outline-none text-zinc-900 border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 mb-4"
          ></textarea>
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
          >
            Copy Minified Text
          </button>
        </div>
      )}
    </div>
  );
}