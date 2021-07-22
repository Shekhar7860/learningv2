import { CloseCircleFilled, PlusOutlined } from "@ant-design/icons";
import { Input, Select, Switch, Form } from "antd";
import React, { useState } from "react";
import CreateFun from "../../functions/CreateFun";
import Preview from "../Preview/Preview";
import "./CreateSingle.css";
import TokenIcon from "../../assets/png/snft.png";
import SingleForm from "../Form/SingleForm";
import DialogFun from "../../functions/DialogFun";
import CreateCollectionDialog from "../Dialogs/CreateCollectionDialog";
import ConfCollectionDialog from "../Dialogs/ConfCollectionDialog";

const CreateMultiple = () => {
  const { pickFile, image, removeFile, hash, fileType } = CreateFun();

  const [sale, setSale] = useState(false);
  const [instant, setInstant] = useState(false);
  const [unlock, setUnlock] = useState(false);
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const selectFile = () => {
    document.getElementById("my-create-input").click();
  };

  const {
    createCollDialog,
    toggleCreateCollDialog,
    confCollectionDialog,
    toggleConfCollDialog,
  } = DialogFun();

  return (
    <div className="create-single-container">
      <Preview
        sale={sale}
        price={price}
        unlock={unlock}
        name={name}
        image={image}
        fileType={fileType}
      />
      <div className="create-single-upload">
        <h1>Create Multiple Collectible</h1>
        <p>Upload file</p>
        <div className="upload-box-container">
          <div className="upload-box">
            {image !== "" ? (
              <div>
                <CloseCircleFilled onClick={removeFile} />
                {fileType.type == "video" ? (
                  <video width="200" controls>
                    <source src={image} />
                  </video>
                ) : (
                  <img src={image} alt="picked file" />
                )}
              </div>
            ) : (
              <div className="upload-input">
                <p>PNG, GIF, MP4 or MP3. Max 30mb</p>
                <input
                  id="my-create-input"
                  className="upload-box-input"
                  onChange={pickFile}
                  type="file"
                />
                <button onClick={selectFile}>Upload</button>{" "}
              </div>
            )}
          </div>
        </div>
        <div className="create-context">
          <div className="switch-item">
            <div>
              <h2>Put on sale</h2>
              <p>You'll receive bids on this item</p>
            </div>
            <Switch
              defaultChecked={false}
              onChange={(checked) => {
                setSale(checked);
              }}
            />
          </div>
          {sale && (
            <div className="switch-item">
              <div>
                <h2>Instant sale price</h2>
                <p>Enter the price for which the item will be instantly sold</p>
              </div>
              <Switch
                defaultChecked={false}
                onChange={(checked) => {
                  setInstant(checked);
                }}
              />
            </div>
          )}
          {instant && (
            <div className="regular-item">
              <Form.Item
                name="price"
                rules={[
                  { required: true, message: "'Price' must be a number" },
                ]}
              >
                <Input.Group size="large" style={{ display: "flex" }}>
                  <Input placeholder="Enter price for one item" />
                  <select
                    defaultValue="SNFT"
                    style={{ width: "20%", padding: "0 8px" }}
                  >
                    <option value="SNFT">SNFT</option>
                    <option value="ETH">ETH</option>
                    <option value="DAI">DAI</option>
                    <option value="ABST">ABST</option>
                    <option value="ARKE">ARKE</option>
                  </select>
                </Input.Group>
              </Form.Item>
              <h3>
                Service fee <span>2.5%</span>
              </h3>
              <p>
                You will receive <span>0 SNFT</span> $0.00
              </p>
            </div>
          )}
          <div className="switch-item">
            <div>
              <h2>Unlock once purchased</h2>
              <p>Content will be unlocked after successful transaction</p>
            </div>
            <Switch
              defaultChecked={false}
              onChange={(checked) => {
                setUnlock(checked);
              }}
            />
          </div>
          {unlock && (
            <div className="regular-item">
              <Form.Item
                name="locked"
                rules={[
                  {
                    required: true,
                    message: "'Locked Content' cannot be empty",
                  },
                ]}
              >
                <Input placeholder="Digital key, code to redeem or link to a file..." />
              </Form.Item>
              <p>Tip: Markdown syntax is supported</p>
            </div>
          )}
          <div className="regular-item">
            <h2>Choose Collection</h2>
            <div className="regular-item-container">
              <div
                className="regular-collection-card"
                onClick={toggleCreateCollDialog}
              >
                <PlusOutlined />
                <h2>Create</h2>
                <p>BEP-721</p>
              </div>
              <div className="regular-collection-card">
                <img src={TokenIcon} alt="collection" />
                <h2>Social</h2>
                <p>SNFT</p>
              </div>
            </div>
          </div>
        </div>
        <SingleForm
          nameChange={nameChange}
          type={fileType}
          imagehash={hash}
          collectionType={"M"}
        />
      </div>
      <CreateCollectionDialog
        modalVisible={createCollDialog}
        toggleDialog={toggleCreateCollDialog}
        toggleConfDialog={toggleConfCollDialog}
      />
      <ConfCollectionDialog
        modalVisible={confCollectionDialog}
        toggleDialog={toggleConfCollDialog}
      />
    </div>
  );
};

export default CreateMultiple;
