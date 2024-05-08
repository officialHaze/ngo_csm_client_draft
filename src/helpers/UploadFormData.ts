import axios from "axios";

export default class UploadFormData {
  public static async uploadImage(formData: FormData) {
    try {
      const { data } = await axios.post("http://localhost:8000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log({ response_after_uploading: data });
    } catch (err: any) {
      console.error(err);
    }
  }
}
