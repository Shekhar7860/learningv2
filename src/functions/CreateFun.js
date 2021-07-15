import { useState } from "react";

const CreateFun = () => {
  const [image, setImage] = useState("");
  const [createImage, setCreateImage] = useState("");
  const [file, setFile] = useState([]);

  const pickFile = (e) => {
    if (e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      setFile(e.target.files[0]);
    }
  };
  const pickCreateFile = (e) => {
    if (e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setCreateImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setImage("");
  };

  return { pickFile, image, removeFile, pickCreateFile, createImage, file };
};

export default CreateFun;
