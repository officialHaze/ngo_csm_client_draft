import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Dropbox from "./Dropbox";
import { useFile } from "../../utils/customHooks";
import UploadFormData from "../../helpers/UploadFormData";

interface Props extends React.HTMLProps<HTMLFormElement> {}

const fileTypesAccespted = ["jpeg", "jpg", "png", "svg"];

export default function UploadForm({ className }: Props) {
  const { file, handleFileUpload, setFile } = useFile();

  const [fileDetails, setFileDetails] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, id } = e.currentTarget;

    switch (id) {
      case "title":
        setFileDetails({
          ...fileDetails,
          title: value,
        });
        break;

      case "description":
        setFileDetails({
          ...fileDetails,
          description: value,
        });
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page reload

    if (file) {
      // Create new form data
      const formData = new FormData();
      formData.append("title", fileDetails.title);
      formData.append("description", fileDetails.description);
      formData.append("image", file);

      // Submit the form data
      UploadFormData.uploadImage(formData);

      // Reset the values
      setFileDetails({
        title: "",
        description: "",
      });
      setFile(null);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-[55%] bg-[#F7F5F2] rounded-lg overflow-hidden p-4 shadow-xl ${className}`}
    >
      <section className="body p-6">
        {/* image uploader */}
        <div className="flex items-center justify-center">
          <FileUploader
            handleChange={handleFileUpload}
            children={<Dropbox file={file} />}
            types={fileTypesAccespted}
            fileOrFiles={file}
          />
        </div>
        {/* title */}
        <div className="title-container flex flex-col py-4">
          <label htmlFor="title">
            <h2 className="text-left text-lg font-bold">Title</h2>
          </label>
          <input id="title" type="text" value={fileDetails.title} onChange={handleChange} />
        </div>
        {/* description */}
        <div className="description-container flex flex-col py-4">
          <label htmlFor="description">
            <h2 className="text-left text-lg font-bold">Description</h2>
          </label>
          <textarea
            id="description"
            rows={5}
            value={fileDetails.description}
            onChange={handleChange}
          />
        </div>
      </section>
      <footer className="p-4">
        <button className="upload-button py-2 px-4 rounded-lg bg-yellow-500 text-white hover:opacity-80">
          Upload
        </button>
      </footer>
    </form>
  );
}
