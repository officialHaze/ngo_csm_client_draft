import { useState } from "react";

export const useFile = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    console.log(file);
    setFile(file);
  };

  return { file, handleFileUpload, setFile };
};
