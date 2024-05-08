import axios from "axios";

export default async function getUploadedData() {
  try {
    const { data } = await axios.get("http://localhost:8000/get-data");
    console.log({ response_after_fetching_data: data });
    return data;
  } catch (err) {
    throw err;
  }
}
