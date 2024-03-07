function FilePreview({ file }) {
    if (!file) return <p>No file selected.</p>;
  
    const fileSize = (file.size / 1024).toFixed(2); // Convert bytes to KB
  
    return (
      <div>
        <p><strong>File Preview:</strong></p>
        <p>Name: {file.name}</p>
        <p>Type: {file.type}</p>
        <p>Size: {fileSize} KB</p>
        {/* Display a download link */}
        <a href={URL.createObjectURL(file)} download={file.name}>Download File</a>
      </div>
    );
  }
  