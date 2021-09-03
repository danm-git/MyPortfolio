import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
class AboutMeModal extends Component {
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
                <img
                  src="images/Me/12.jpg"
                  class="hikeImgTall"
                  alt="12"
                  title="San Diego Beach"
                />
              </div>
              <div>
                <img
                  src="images/Me/18.jpg"
                  class="hikeImgTall"
                  alt="16"
                  title="Vail, CO Fishing"
                />
              </div>
              <div>
                <img
                  src="images/Me/33_png.png"
                  class="hikeImgTall"
                  alt="33"
                  title="Inca Trail"
                />
              </div>
              <div>
                <img
                  src="images/Me/9.jpg"
                  class="hikeImg"
                  alt="13"
                  title="Thailand"
                />
              </div>
              <div>
                <img
                  src="images/Me/11.jpg"
                  class="hikeImg"
                  alt="14"
                  title="Machu Picchu"
                />
              </div>
              <div>
                <img
                  src="images/Me/7.jpg"
                  class="hikeImg"
                  alt="15"
                  title="South Africa - Kruger National Park"
                />
              </div>
              <div>
                <img
                  src="images/Me/20_png.png"
                  class="hikeImg"
                  alt="17"
                  title="Athens, Greece"
                />
              </div>
              <div>
                <img
                  src="images/Me/21_png.png"
                  class="hikeImg"
                  alt="17"
                  title="Santorini, Greece"
                />
              </div>
              <div>
                <img
                  src="images/Me/30.jpg"
                  class="hikeImg"
                  alt="17"
                  title="Inca Trail"
                />
              </div>
              <div>
                <img
                  src="images/Me/32.jpg"
                  class="hikeImg"
                  alt="17"
                  title="Biking in Ireland"
                />
              </div>
            </AwesomeSlider>
          </div>
          <div className="col-md-10 mx-auto hikePad">
            <h3 style={{ padding: "5px 5px 0 5px" }}>
              <div>Family and Travel</div>
            </h3>
            <p className="modal-description center">
              I love traveling and spending time with family and friends!
            </p>
          </div>
        </div>
      </Modal>
    );
  }
}

export default AboutMeModal;
