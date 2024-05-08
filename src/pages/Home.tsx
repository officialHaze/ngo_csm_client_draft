import { UseQueryResult, useQuery } from "@tanstack/react-query";
import React from "react";
import getUploadedData from "../queries/GetUploadedData";
import { Link } from "react-router-dom";
import { UPLOAD } from "../routes/Routes";

interface UploadedData {
  id: string;
  title: string;
  description: string;
  fileBase64Encoded: string;
  fileExt: string;
}

interface DataQueryResult {
  message: string;
  data: UploadedData[];
}

export default function Home() {
  const dataQuery: UseQueryResult<DataQueryResult, Error> = useQuery({
    queryKey: ["uploaded-data"],
    queryFn: () => getUploadedData(),
  });

  if (dataQuery.isLoading) return <div>Loading...</div>;

  return (
    <div className="h-full flex flex-col gap-4 p-4 bg-[#31363F]">
      <Link to={UPLOAD} className="text-left text-yellow-400 p-4 underline underline-offset-2">
        Go to upload page
      </Link>
      {dataQuery.data?.data.map((dataObj) => (
        <div key={dataObj.id} className="p-4 flex gap-4">
          <div className="image w-[30%]">
            <img
              src={`data:image/${dataObj.fileExt};base64,${dataObj.fileBase64Encoded}`}
              alt="post-img"
            />
          </div>
          <div className="img-details w-[70%]">
            <h1 className="text-white text-2xl font-bold text-left">{dataObj.title}</h1>
            <p className="text-left mt-2 text-white">{dataObj.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
