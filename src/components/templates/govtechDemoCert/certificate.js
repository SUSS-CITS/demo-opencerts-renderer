import PropTypes from "prop-types";
import { format } from "date-fns";
import { get } from "lodash";
import React from "react";
import { certificateBg } from "./common/backgrounds";
import "./common/demoStyles.scss";

const Template = ({ document }) => (
  <div
    className="p-2 container"
    style={{
      backgroundImage: `url('${certificateBg}')`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      border: "10px solid #324353"
    }}
  >
    <div
      className="p-2"
      style={{
        border: "0px solid #324353"
      }}
    >
      <div className="my-5 m-lg-5 text-center">
        <img
          src={require("./common/opencertslogo.svg")}
          alt="OpenCerts Logo"
          style={{ width: "60%", height: "auto", maxWidth: "1000px" }}
        />
      </div>
      <div
        className="mb-4 mb-lg-5 d-flex justify-content-center cert-body"
        style={{ textAlign: "center" }}
      >
        <i>This is to certify that</i>
      </div>
      <div className="mb-4 mb-lg-5 d-flex justify-content-center cert-title">
        <b>{document.recipient.name}</b>
      </div>
      <div
        className="mb-4 mb-lg-5 d-flex justify-content-center cert-body"
        style={{ textAlign: "center" }}
      >
        <i>has successfully completed the</i>
      </div>
      <div
        className="mb-4 mb-lg-5 d-flex justify-content-center cert-title"
        style={{ textAlign: "center" }}
      >
        OpenCerts Demo
      </div>
      <div
        className="mb-4 mb-lg-5 d-flex justify-content-center cert-body"
        style={{ textAlign: "center" }}
      >
        <i>certification through training administered by</i>
      </div>
      <div className="row">
        <div className="col" />
        <div className="col">
          <img
            className="w-100"
            style={{ width: "100%", height: "auto", minWidth: "100px" }}
            src={require("./common/GOVTECH_logo.png")}
            alt="Govtech Logo"
          />
        </div>
        <div className="col" />
      </div>

      <div
        className="row"
        style={{
          paddingLeft: "8%",
          paddingTop: "5%"
        }}
      >
        <div className="col text-center transcript">
          <img
            style={{ width: "100%", height: "auto" }}
            src={get(document, "additionalData.certSignatories[0].signature")}
            slt="signature"
          />
          <hr
            style={{
              border: "none",
              height: "1px",
              backgroundColor: "#333"
            }}
          />
          <div>
            <b>{get(document, "additionalData.certSignatories[0].name")}</b>
            <br />
            {get(document, "additionalData.certSignatories[0].position")},{" "}
            {get(document, "additionalData.certSignatories[0].organisation")}
          </div>
        </div>

        <div className="col" />

        <div
          className="d-flex flex-row-reverse col transcript"
          style={{
            paddingTop: "5%",
            paddingRight: "5%"
          }}
        >
          Dated {format(document.issuedOn, "DD/MM/YYYY")}
        </div>
      </div>
    </div>
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired,
  updateParentHeight: PropTypes.func
};
export default Template;
