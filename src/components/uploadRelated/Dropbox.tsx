import React from "react";
import { BsImageFill } from "react-icons/bs";

interface Props {
  file: File | null;
}

export default function Dropbox({ file }: Props) {
  return (
    <div className="w-[47.85rem] h-[12rem] p-4 border-2 border-dashed border-gray-400 flex items-center justify-center cursor-pointer">
      {!file ? (
        <div className="upload-file flex flex-col items-center justify-center gap-2">
          <BsImageFill className="text-4xl text-gray-600" />
          <em className="font-semibold text-gray-400">Drag & drop or click to upload an image</em>
          <p className="text-xs text-gray-500">(Supported file types: jpg, jpeg, png, svg)</p>
        </div>
      ) : (
        <div className="file-uploaded">{file.name}</div>
      )}
    </div>
  );
}
