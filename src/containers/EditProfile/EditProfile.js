import React, { Component } from "react";
import "./EditProfile.css";
import EditForm from "../../components/Form/EditForm";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Preview from "../../assets/svg/preview.svg";
import ipfs from "../../functions/Ipfs";
import { connect } from "react-redux";
import { profileContract } from "../../contractDetails/profile";
import { contents } from "../../functions/ipfsContents";
class EditProfile extends Component {
  componentDidMount = async () => {
    let contract = await profileContract();
    const d = await contract.methods
      .getIpfsHashByAddress(
        this.props.data ? this.props.data.user.data.account : null
      )
      .call();
    const ipfsData = await contents(d);
    const jsonData = JSON.parse(ipfsData);
    this.setState({ userData: jsonData });
  };
  state = {
    profile: Preview,
    hash: "",
    userData: {},
  };
  goToBackPage = () => {
    window.history.back();
  };

  selectFile = () => {
    document.getElementById("my-file-edit").click();
  };

  fileChange = async (e) => {
    if (e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ profile: e.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
      const result = await ipfs.add(e.target.files[0]);
      this.setState({ hash: result.path });
    }
  };

  render() {
    return (
      <div className="edit-profile">
        <div className="edit-profile-header">
          <ArrowLeftOutlined onClick={this.goToBackPage} />
          <h1>Edit Profile</h1>
        </div>
        <p className="edit-profile-para">
          You can set preferred display name, create your branded profile URL
          and manage other personal settings
        </p>
        <div className="edit-user-box">
          <img
            src={
              this.state.userData.file !== "" &&
              this.state.userData.file !== undefined
                ? this.state.userData.file
                : this.state.profile
            }
            alt="edit profile"
          />
          <div className="edit-user-info">
            <button onClick={this.selectFile}>Upload Photo</button>
            <p>At least 400x400, Gifs work too.</p>
            <input
              onChange={this.fileChange}
              type="file"
              name="my_file"
              id="my-file-edit"
            />
          </div>
        </div>
        <EditForm
          image={this.state.profile}
          hash={this.state.hash}
          userData={this.state.userData}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps, null)(EditProfile);
