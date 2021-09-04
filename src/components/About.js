import React, { Component } from "react";
import AboutMeModal from "./AboutMeModal";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: {}, checked: false };
    this.state = { detailsModalShow: false };
  }

  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      // var about = this.props.resumeBasicInfo.description;
      // var newText = about.split("\n").map((str) => <p>{str}</p>);
    }

    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.sharedData) {
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroidAbout">
                <span style={{ cursor: "auto" }} className="AboutMeImg">
                  <img
                    height="500px"
                    width="380px"
                    src={profilepic}
                    alt="Avatar placeholder"
                    onClick={() => detailsModalShow()}
                  />
                </span>
              </div>
              <AboutMeModal
                show={this.state.detailsModalShow}
                onHide={detailsModalClose}
                data={this.state.deps}
              />
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "155%",
                      lineHeight: "150%",
                    }}
                  >
                    <div className="AboutMe"></div>
                    {hello}
                    <br />
                    <br />
                    <div className="AboutMe">
                      I love hiking, traveling, skateboarding, snowboarding,
                      running, but mostly spending time with my family and
                      friends. I was born in <span>Boulder, Colorado</span>, and
                      grew up just outside in the town of{" "}
                      <span>Broomfield</span>. I attended
                      <span> Colorado State University</span>, where I met my
                      future wife, Linnia. {"\n"} {"\n"} After college, Linnia
                      and I moved to
                      <span> Portland, OR</span>, and 2 years later, she started
                      Veterinary school at <span>Oregon State University</span>.
                      We spent 2 years in
                      <span> Salem, OR</span>, followed by 2 years in{" "}
                      <span>Corvallis, OR</span>, where Linnia became a{" "}
                      <span>veterinarian</span>! {"\n"}
                      {"\n"} After graduation, we decided to live in{" "}
                      <span>New York City</span> and travel the world. We found
                      a small apartment on the <span> Upper West Side</span> of
                      Manhattan, and in the end, we stayed for 5 fun-filled
                      years. {"\n"}
                      {"\n"} We then decided to start a family. We moved out to
                      <span> Huntington, Long Island</span>, for 1 year before
                      moving back to Colorado to be closer to grandparents. We
                      settled in a house north of <span> Denver</span> and now
                      have 2 young, energetic boys, a dog named{" "}
                      <span> Yeppi Queso</span>, and a steady stream of foster
                      kittens and dogs. {"\n"}
                      {"\n"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
