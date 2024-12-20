import './globals.css';

export default function Home() {
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-gray-200 font-serif text-3xl font-bold my-5">Tool Kit</h1>
      <hr className="border-gray-600 w-full mb-2" />

      <div className="flex justify-evenly w-full my-8">
        <a href="/url-to-qr" className="w-40 h-12 py-3 text-center bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 ease-in duration-200">
          <h4>URL to QR Code</h4>
        </a>
        <a href="/url-to-bar" className="w-40 h-12 py-3 text-center bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 ease-in duration-200">
          <h4>URL to Barcode</h4>
        </a>
        <a href="/url-shortener" className="w-40 h-12 py-3 text-center bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 ease-in duration-200">
          <h4>URL Shortener</h4>
        </a>
      </div>

      <div className="flex justify-evenly w-full my-8">
        <a href="/text-minifier" className="w-40 h-12 py-3 text-center bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 ease-in duration-200">
          <h4>Text Minifier</h4>
        </a>
        <a href="/text-stats" className="w-40 h-12 py-3 text-center bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 ease-in duration-200">
          <h4>Text Statistics</h4>
        </a>
        <a href="/text-transform" className="w-40 h-12 py-3 text-center bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 ease-in duration-200">
          <h4>Text Transform</h4>
        </a>
      </div>
    </div>
  );
}
