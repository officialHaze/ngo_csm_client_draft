import React from "react";
import UploadForm from "../components/uploadRelated/UploadForm";
import { Link } from "react-router-dom";
import { HOME } from "../routes/Routes";

interface Props extends React.HTMLProps<HTMLDivElement> {}

export default function UploadPage({ className }: Props) {
  return (
    <div className={`h-full relative bg-[#31363F] flex items-center justify-center ${className}`}>
      <Link to={HOME} className="text-yellow-400 underline underline-offset-2 absolute top-4">
        Go back to home page
      </Link>
      <UploadForm />
    </div>
  );
}
