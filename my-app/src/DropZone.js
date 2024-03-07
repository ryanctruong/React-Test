import React, { useState } from 'react';
import './DropZone.css';

const DropZone = ({ onFileAccepted }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      // Validate file type
      if (['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'].includes(file.type)) {
        onFileAccepted(file);
      } else {
        alert('File type not supported. Please upload a .pdf, .docx, or .doc file.');
      }
      e.dataTransfer.clearData();
    }
  };

  return (
    <div
      className={`drop-zone ${dragActive ? 'active' : ''}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      {dragActive ? <p>Release to drop the file</p> : <p>Drag and drop a .pdf, .docx, or .doc file here, or click to select files</p>}
    </div>
  );
};

export default DropZone;
