'use client';
import '../globals.css';
import { useRef, useState } from 'react';
import JsBarcode from 'jsbarcode';

export default function Barcode() {
  const inputRef = useRef();
  const canvasRef = useRef();
  const [downloadUrl, setDownloadUrl] = useState(null);

  const handleGenerate = () => {
    const value = inputRef.current.value;
    if (value) {
      try {
        // Generate barcode and display on canvas
        JsBarcode(canvasRef.current, value, { format: 'CODE128' });
        
        // Get the data URL of the barcode for downloading
        const imageUrl = canvasRef.current.toDataURL('image/png');
        setDownloadUrl(imageUrl);
      } catch (error) {
        console.error('Error generating barcode:', error);
      }
    } else {
      alert('Please enter a value.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-bold text-gray-200 mb-5">URL to Barcode</h1>
      <div className="w-full max-w-md">
        <label htmlFor="value" className="block text-sm font-medium text-gray-300 mb-2">
          Enter the URL here:
        </label>
        <input
          type="text"
          name="value"
          id="value"
          ref={inputRef}
          placeholder="Enter URL"
          className="w-full p-2 border outline-none text-zinc-900 border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500"
        />
      </div>
      <button
        onClick={handleGenerate}
        className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Generate Barcode
      </button>
      
      <canvas id="barcodeCanvas" ref={canvasRef} className="mt-5 rounded-md"></canvas>
      {downloadUrl && (
        <a
          href={downloadUrl}
          download="barcode.png"
          className="mt-3 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
        >
          Download Barcode
        </a>
      )}
    </div>
  );
}