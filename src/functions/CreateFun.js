import { useState } from "react";
import ipfs from "./Ipfs";
import { audioUrl } from "../constants/constants";
const CreateFun = () => {
  const [image, setImage] = useState("");
  const [createImage, setCreateImage] = useState("");
  const [hash, setHash] = useState("");
  const [fileType, setFileType] = useState("");

  const pickFile = async (e) => {
    let file = e.target.files[0];
    let fileSize = file.size / 1048576;
    if (fileSize > 30) {
      alert("File exceeds the maximum size 30MB");
      return;
    }
    if (file.type.indexOf("video") > -1) {
      setFileType({ type: "video", fileType: file.type });
    }
    if (file.type.indexOf("image") > -1) {
      setFileType({ type: "image", fileType: file.type });
      if (e.target.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          setImage(e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    }
    if (file.type.indexOf("audio") > -1) {
      setFileType({ type: "audio", fileType: file.type });
      setImage(audioUrl);
    }
    const result = await ipfs.add(e.target.files[0]);
    setHash(result.path);
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

  return {
    pickFile,
    image,
    removeFile,
    pickCreateFile,
    createImage,
    hash,
    fileType,
  };
};

export default CreateFun;
