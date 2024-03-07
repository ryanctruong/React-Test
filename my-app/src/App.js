import React, { useState } from 'react';
import DropZone from './DropZone';
import './App.css';

function App() {
  const [file, setFile] = useState(null);

  const onFileAccepted = (file) => {
    setFile(file);
  };

  function FilePreview({ file }) {
    // Only proceed if there's a file
    if (!file) return <p>No file selected.</p>;
  
    // Generate a URL for the file
    const fileUrl = URL.createObjectURL(file);
  
    return (
      <div>
        {file.type === "application/pdf" && (
          <embed src={fileUrl} width="500" height="600" type="application/pdf"></embed>
        )}
        {/* Add more conditions here for other file types like .docx if you find a way to preview them */}
      </div>
    );
  }
  

  return (
    <div className="App">
      <div className="drop-preview-container">
        <div className="drop-zone-container">
          <DropZone onFileAccepted={onFileAccepted} />
        </div>
        <div className="file-preview-container">
          {file ? (
            <div>
              <p>File preview:</p>
              <p>{file.name}</p>
              <FilePreview file={file} />
            </div>
          ) : (
            <p>No file selected.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
