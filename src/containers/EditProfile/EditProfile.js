import React, { Component } from "react";
import "./EditProfile.css";
import EditForm from "../../components/Form/EditForm";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Preview from '../../assets/svg/preview.svg'

class EditProfile extends Component {
    state = {
        profile: ""
    }
  goToBackPage = () => {
    window.history.back();
  };

  selectFile = () => {
    document.getElementById("my-file-edit").click();
  };

  fileChange = (e) => {
    if (e.target.files[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.setState({profile: e.target.result});
        };
        reader.readAsDataURL(e.target.files[0]);
      }
  }

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
            src={this.state.profile !== ""? this.state.profile: Preview}
            alt="edit profile"
          />
          <div className="edit-user-info">
            <button onClick={this.selectFile}>Upload Photo</button>
            <p>At least 400x400, Gifs work too.</p>
            <input onChange={this.fileChange} type="file" name="my_file" id="my-file-edit" />
          </div>
        </div>
        <EditForm />
      </div>
    );
  }
}

export default EditProfile;
