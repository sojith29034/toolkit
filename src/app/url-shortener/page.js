'use client';
import '../globals.css';
import { useRef, useState } from 'react';

export default function UrlShortener() {
  const inputRef = useRef();
  const [shortUrl, setShortUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    const longUrl = inputRef.current.value;

    if (!longUrl) {
      alert('Please enter a URL.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:3002/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: longUrl }),
      });

      if (!response.ok) {
        throw new Error('Failed to shorten URL');
      }

      const data = await response.json();
      setShortUrl(data.shortUrl);
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while shortening the URL.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl)
        .then(() => alert('Short URL copied to clipboard!'))
        .catch((error) => console.error('Error copying to clipboard:', error));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-bold text-gray-200 mb-5">URL Shortener</h1>
      <div className="w-full max-w-md">
        <label htmlFor="url" className="block text-sm font-medium text-gray-300 mb-2">
          Enter the URL here:
        </label>
        <input
          type="text"
          name="url"
          id="url"
          ref={inputRef}
          placeholder="Enter URL"
          className="w-full p-2 border outline-none text-zinc-900 border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500"
        />
      </div>
      <button
        onClick={handleShorten}
        disabled={loading}
        className={`mt-5 px-4 py-2 rounded-lg transition duration-200 ${
          loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}
      >
        {loading ? 'Shortening...' : 'Shorten URL'}
      </button>

      {shortUrl && (
        <div className="mt-5 flex flex-col items-center">
          <span className="text-lg text-gray-300">Shortened URL:</span>
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-blue-400 underline"
          >
            {shortUrl}
          </a>
          <button
            onClick={handleCopy}
            className="mt-3 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
          >
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
}