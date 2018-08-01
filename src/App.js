import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

export default class App extends Component {
  state = {
    url: "",
    file: null,
    filename: ""
  };

  onSubmit = e => {
    console.log("onSubmit");
    e.preventDefault();
  };

  onFileChange = e => {
    console.log("onFileChange");
    this.setState({
      file: e.target.files[0],
      filename: e.target.files[0].name
    });
  };

  onUrlChange = e => {
    console.log("onUrlChange");
    this.setState({
      url: e.target.value,
      text: e.target.value
    });
  };

  removeFile = () => {
    this.setState({
      file: null,
      filename: ""
    });
  };

  render() {
    return (
      <div className="flex-root">
        <div className="box">
          <form className="form" onSubmit={this.onSubmit}>
            {this.state.file ? (
              <div className="input-border">
                <label>{this.state.filename}</label>
                <label className="small-button" onClick={this.removeFile}>
                  <svg id="cancel-svg" viewBox="0 0 512 512">
                    <path d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
                  </svg>
                </label>
              </div>
            ) : (
              <div className="input-border">
                <input className="url-input" placeholder="Put a URL here" />
                <input
                  id="file-input"
                  className="hide-file-input"
                  type="file"
                  onChange={this.onFileChange}
                />
                <label htmlFor="file-input" className="small-button">
                  <svg id="upload-svg" viewBox="0 0 512 512">
                    <path d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
                  </svg>
                </label>
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
}
// The SVG is from font awesome
