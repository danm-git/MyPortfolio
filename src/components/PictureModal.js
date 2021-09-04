import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
class PictureModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="col-md-12">
          <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
            <div className="slider-tab">
              <span
                className="iconify slider-iconfiy"
                data-icon="emojione:red-circle"
                data-inline="false"
                style={{ marginLeft: "5px" }}
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:yellow-circle"
                data-inline="false"
              ></span>{" "}
              &nbsp;{" "}
              <span
                className="iconify slider-iconfiy"
                data-icon="twemoji:green-circle"
                data-inline="false"
              ></span>
            </div>
            <AwesomeSlider
              cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
              animation="scaleOutAnimation"
              className="slider-image"
            >
              <div>
                <img src="images/Me/6.jpg" className="hikeImg" alt="6" />
              </div>
              <div>
                <img src="images/Me/4.jpg" className="hikeImg" alt="4" />
              </div>
              <div>
                <img src="images/Me/13.jpg" className="hikeImg" alt="13" />
              </div>
              <div>
                <img src="images/Me/14.jpg" className="hikeImg" alt="14" />
              </div>
              <div>
                <img src="images/Me/15.jpg" className="hikeImg" alt="15" />
              </div>
              <div>
                <img src="images/Me/16.jpg" className="hikeImg" alt="16" />
              </div>
              <div>
                <img src="images/Me/17.jpg" className="hikeImg" alt="17" />
              </div>
            </AwesomeSlider>
          </div>
          <div className="col-md-10 mx-auto hikePad">
            <h3 style={{ padding: "5px 5px 0 5px" }}>
              <div>14ers</div>
            </h3>
            <p className="modal-description">
              Colorado has
              <a
                href="https://www.google.com/maps/d/viewer?ie=UTF8&hl=en&msa=0&ll=38.688536%2C-106.52479&spn=3.687145%2C8.432007&t=p&z=8&mid=1K6oToycFKjjk257VHa7OcFbSLcI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span> 58 </span>
              </a>
              mountains above 14,000 feet. These are known as 14ers. I have
              summited 23 and counting!
            </p>
          </div>
        </div>
      </Modal>
    );
  }
}

export default PictureModal;
