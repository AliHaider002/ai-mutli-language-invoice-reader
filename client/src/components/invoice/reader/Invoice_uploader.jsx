import React, { useState } from "react";
import axios from "axios";
import invoiceService from "../../../utils/controllers/invoiceService";

const InvoiceUploader = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setSelectedFile(file);
    }
  };

  const renderText = (text) => {
    // Split the text by line breaks and handle bold (**text**)
    const paragraphs = text.split("\n\n").map((paragraph, index) => {
      const parts = paragraph.split(/(\*\*.*?\*\*)/g).map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.substring(2, part.length - 2)}</strong>;
        }
        return part;
      });

      return <p key={index}>{parts}</p>;
    });

    return paragraphs;
  };

  const handleFileUploadToAPI = async () => {
    if (!selectedFile) {
      setUploadStatus("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await invoiceService.uploadInvoice(formData);
      console.log("consoleCheck", response);

      setUploadStatus("Image uploaded successfully!");
      setAiResponse(response.data);
      console.log(response);
    } catch (error) {
      setUploadStatus("Failed to upload image.");
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="mb-3">
        <label
          htmlFor="formFileLg"
          className="mb-2 inline-block text-neutral-700 dark:text-neutral-700"
        >
          Upload your Invoice Image.
        </label>
        <input
          className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-700 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-700 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
          id="formFileLg"
          type="file"
          onChange={handleImageUpload}
        />
      </div>

      {imagePreview && (
        <div className="mt-4">
          <img
            src={imagePreview}
            alt="Invoice Preview"
            className="rounded shadow-lg"
            style={{ maxWidth: "100%", maxHeight: "400px" }}
          />
        </div>
      )}

      {imagePreview && (
        <button
          onClick={handleFileUploadToAPI}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Upload Image
        </button>
      )}

      {uploadStatus && <p className="mt-4 text-center">{uploadStatus}</p>}
      {aiResponse && (
        <p className="mt-4 text-[1.2rem] font-[500]">
          {renderText(aiResponse)}
        </p>
      )}
    </div>
  );
};

export default InvoiceUploader;
