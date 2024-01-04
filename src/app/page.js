// pages/index.js
import PDFViewer from "../components/PDFViewer";

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-3/4 overflow-auto">
        <PDFViewer />
      </div>
      <div className="w-1/4 p-4">
        <h1 className="text-xl font-bold mb-4">PDF Title</h1>
        <p className="mb-2">A brief description of the PDF content.</p>
        {/* Additional metadata */}
      </div>
    </div>
  );
}
