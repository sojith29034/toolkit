import './globals.css';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-gray-200 font-serif text-3xl font-bold my-5">Transformers</h1>
      <hr className="border-gray-600 w-full mb-8" />
      <div className="flex justify-evenly w-full">
        <a href="/url-to-qr" className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 ease-in duration-200">
          <h4>URL to QR Code</h4>
        </a>
        <a href="/url-to-bar" className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 ease-in duration-200">
          <h4>URL to Barcode</h4>
        </a>
        <a href="/url-shortener" className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 ease-in duration-200">
          <h4>URL Shortener</h4>
        </a>
      </div>
    </div>
  );
}
