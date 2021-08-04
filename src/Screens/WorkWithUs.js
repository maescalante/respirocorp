import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Container } from "react-bootstrap";
import { gapi } from "gapi-script";
import { init } from "emailjs-com";
import GooglePicker from "react-google-picker";

const WorkWithUs = () => {
  init("user_3QX7mTxWCGwMpWflLVTLD");
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yr12dtk",
        "template_4im2tep",
        e.target,
        "user_3QX7mTxWCGwMpWflLVTLD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {};

  return (
    <Container>
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Nombre</label>
        <input type="text" name="nombre" />

        <label>Cargo</label>
        <input type="text" name="cargo" />

        <label>Celular</label>
        <input type="text" name="Tel" />

        <label>Email</label>
        <input type="email" name="email" />

        <div>
          <input type="file" name="file" onChange={changeHandler} />
          {isFilePicked ? (
            <div>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
              <p>
                lastModifiedDate:{" "}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p>
            </div>
          ) : (
            <p>Select a file to show details</p>
          )}
          <div>
            <button onClick={handleSubmission}>Submit</button>
          </div>
        </div>
        <input type="submit" value="Send" />
      </form>

      <GooglePicker
        clientId={"YOUR_CLIENT_ID_HERE"}
        developerKey={"YOUR_DEVELOPER_KEY_HERE"}
        scope={["https://www.googleapis.com/auth/drive.readonly"]}
        onChange={(data) => console.log("on change:", data)}
        onAuthFailed={(data) => console.log("on auth failed:", data)}
        multiselect={true}
        navHidden={true}
        authImmediate={false}
        viewId={"DOCS"}
        mimeTypes={["image/png", "image/jpeg", "image/jpg"]}
        createPicker={(google, oauthToken) => {
          const googleViewId = google.picker.ViewId.DOCS;
          const uploadView = new google.picker.DocsUploadView();
          const docsView = new google.picker.DocsView(googleViewId)
            .setIncludeFolders(true)
            .setSelectFolderEnabled(true);

          const picker = new window.google.picker.PickerBuilder()
            .enableFeature(google.picker.Feature.SIMPLE_UPLOAD_ENABLED)
            .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
            .addView(docsView)
            .addView(uploadView) /*DocsUploadView added*/
            .setOAuthToken(oauthToken)
            .setDeveloperKey("YOUR_DEVELOPER_KEY_HERE")
            .setCallback((data) => {
              if (data.action == google.picker.Action.PICKED) {
                var fileId = data.docs[0].id;
                alert("The user selected: " + fileId);
                picker();
              }
            });
          picker.build().setVisible(true);
        }}
      ></GooglePicker>
    </Container>
  );
};

export default WorkWithUs;
