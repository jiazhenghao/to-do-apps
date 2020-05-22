import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import languageArray from "../languages";
import Files from "react-files";
import { coverStateLocalstorage } from "../redux/actions/uploadAction";
import { history } from "../redux/history";

function Upload({ language, coverStateLocalstorage }) {
  function onFilesChange(files) {
    console.log(files);
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      const content = event.target.result;
      const obj = JSON.parse(content);
      coverStateLocalstorage(obj);

      history.push("/");
    });
    reader.readAsText(files[0]);
  }

  function onFilesError(error, file) {
    console.log("error code " + error.code + ": " + error.message);
  }

  return (
    <div className="files">
      <Files
        className="files-dropzone APP__upload__div__h1"
        onChange={onFilesChange}
        onError={onFilesError}
        accepts={[
          //   "image/png",
          //   ".pdf",
          //   "audio/*",
          "text/*",
          "application/*",
        ]}
        // multiple
        // maxFiles={1}
        // maxFileSize={10000000}
        // minFileSize={0}
        clickable
      >
        <h1>{languageArray[language].upload}</h1>
      </Files>
    </div>
  );
}

Upload.propTypes = {
  coverStateLocalstorage: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    language: state.language,
  };
}

const mapDispatchToProps = {
  coverStateLocalstorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
