import React, { useState } from "react";

const DndUpload = () => {

const [file, setFile] = useState(null);

const handleDragOver = (e) => {
    e.preventDefault();
};
const handleDrop = (e) => {
    e.preventDefault();
    const uploadedFile = e.dataTransfer.files[0];
    setFile(uploadedFile);
};

return (
<div className="DNDform">
    <div
        className="dndupload h-[150px] w-full border-2 border-dotted border-slate-500 mt-5 rounded-xl flex flex-col justify-center items-center text-center bg-gray-50 hover:bg-gray-100"
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
        {file ? (
        <p className="text-sm text-green-600">Uploaded: {file.name}</p>
        ) : (
        <div>
            <svg
            xmlns="/images/doc.png"
            className="w-8 h-8 mx-auto text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
            />
            </svg>
            <p className="text-slate-500 text-sm mt-2"><span className="underline font-medium cursor-pointer">Click to upload</span> or drag and drop<br/>Maximun file size 50 MB</p>
        </div>
        )}
    </div>
    </div>
);
};

export default DndUpload;
