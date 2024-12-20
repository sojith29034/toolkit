'use client';
import '../globals.css';
import { useState } from 'react'

export default function TextGenerator()  {
    const [inputText, setInputText] = useState('');

    const runPrompt = () => {
        
    }

    return (
        <div className='flex flex-col items-center justify-center p-5'>
        <h1 className="text-3xl font-bold text-gray-200 mb-5">Text Generator</h1>
        <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Give a topic..."
            className="w-full max-w-3xl h-11 p-2 border outline-none text-zinc-900 border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 mb-4 resize-none"
        ></textarea>
        <button
            // onClick={handleMinify}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 mb-4"
        >
            Generate Text
        </button>
        </div>
    )
}
