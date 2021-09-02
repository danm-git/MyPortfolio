import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Classes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };

    let detailsModalClose = () => this.setState({ detailsModalShow: false });
    if (this.props.resumeClasses && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.classes;
      var classes = this.props.resumeClasses.map(function (classes) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={classes.title}
            style={{ cursor: "pointer" }}
          >
            <span className="portfolio-item d-block">
              <div className="foto" onClick={() => detailsModalShow(classes)}>
                <div className="projContainer">
                  <img
                    src={classes.images[0]}
                    alt="classImages"
                    height="230"
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                    }}
                  />
                  <span className="class-date">{classes.startDate}</span>
                  <br />
                  <p className="class-title-settings mt-3">{classes.title}</p>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="classes">
        <div className="col-md-12 justify-content-md-center" >
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto ">
            <div className="row mx-auto">{classes}</div>
          </div>
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Classes;
