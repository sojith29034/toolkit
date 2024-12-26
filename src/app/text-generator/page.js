'use client';
import '../globals.css';
import { useState } from 'react'

export default function TextGenerator()  {
    const [inputText, setInputText] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      
      try {
        const res = await fetch('/api/textGenerator', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ inputText }),
        });
  
        if (!res.ok) {
          throw new Error('Failed to generate output');
        }
  
        const data = await res.json();
        setOutput(data.output);
      } catch (error) {
        setError(error.message);
      }
    };

    return (
        <div className='flex flex-col items-center justify-center p-5'>
        <h1 className="text-3xl font-bold text-gray-200 mb-5">Text Generator</h1>
        <form onSubmit={handleSubmit} className='w-full flex flex-col justify-center items-center'>
          <input
            type="text"
            placeholder="Give a topic..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full max-w-3xl h-11 p-2 border outline-none text-zinc-900 border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 mb-4 resize-none"
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 mb-4">Generate Output</button>
        </form>
        
        {error && <p>{error}</p>}
        {output && (
          <div className='m-12 mt-0 bg-neutral-500 text-black rounded-3xl'>
            <h2 className='px-5 py-3 text-xl text-white bg-neutral-800 rounded-t-2xl'>Output:</h2>
            <pre className='p-5 text-wrap'>{output}</pre>
          </div>
        )}
        </div>
    )
}
