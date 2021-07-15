import { useState } from "react";
import ipfs from "./Ipfs";
const CreateFun = () => {
  const [image, setImage] = useState("");
  const [createImage, setCreateImage] = useState("");
  const [hash, setHash] = useState("");

  const pickFile = async (e) => {
    if (e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      const result = await ipfs.add(e.target.files[0]);
      setHash(result.path);
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

  return { pickFile, image, removeFile, pickCreateFile, createImage, hash };
};

export default CreateFun;
