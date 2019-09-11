import PropTypes from "prop-types";
import { get } from "lodash";
import { SUSS_LOGO, CERT_SEAL } from "../common/images";
import styles from "../common/certStyles";
import * as functions from "../common/functions";
import React from "react";

const Template = ({ document }) => {
  const recipientName = get(document, "recipient.name");
  const gradSem = get(document, "additionalData.graduationSemester");
  const degreeName = get(document, "additionalData.degreeName");
  const degreeType = get(document, "additionalData.degreeType");
  const degreeClass = get(document, "additionalData.degreeClass");
  const confDate = get(document, "additionalData.dateOfConferment");
  const certNum = get(document, "additionalData.certNo");
  const printerNum = get(document, "additionalData.printerNo");
  const signatoriesData = get(document, "additionalData.signatories", []);

  const signatoriesSection = signatoriesData.map((t, i) => (
    <span
      key={i}
      className="col-sm-3 col-md-3 text-center"
      style={{ padding: "0px" }}
    >
      <img src={t.signature} className="signStyle" />
      <br />
      <span className="signTextStyle">{t.position}</span>
    </span>
  ));

  return (
    <div>
      {styles()}

      <div className="container certBgStyle">
        <div className="row d-flex justify-content-center">
          <img src={SUSS_LOGO} className="logoStyle" />
        </div>

        {functions.displayCertRetroLiners(gradSem)}

        <div className="row d-flex justify-content-center">
          <span className="certTextStyle">This is to certify that</span>
        </div>

        <div className="row">&nbsp;</div>
        <div className="row d-flex justify-content-center">
          <span className="stuNameProgNameTextStyle">
            {functions.formatSplitTextWithAllCaps(recipientName, 20, null)}
          </span>
        </div>

        <div className="row">&nbsp;</div>
        <div className="row d-flex justify-content-center">
          <span className="certTextStyle">
            having completed the requirements of the <br /> programme of study
            in
          </span>
        </div>

        <div className="row">&nbsp;</div>
        <div className="row d-flex justify-content-center">
          <span className="stuNameProgNameTextStyle">
            {functions.formatSplitTextWithAllCaps(degreeName, 20, null)}
          </span>
        </div>

        <div className="row">&nbsp;</div>
        <div className="row d-flex justify-content-center">
          <span className="certTextStyle">was admitted to the Degree of</span>
        </div>

        <div className="row">&nbsp;</div>
        <div className="row d-flex justify-content-center">
          <span className="stuNameProgNameTextStyle">
            {functions.formatSplitTextWithAllCaps(degreeType, 20, null)}
          </span>
        </div>

        <div className="row d-flex justify-content-center">
          <span className="degreeClassTextStyle">
            {functions.addBreaklineIfNotEmpty(
              functions.formatSplitTextWithAllCaps(degreeClass, 20, null)
            )}
          </span>
        </div>

        <div className="row d-flex justify-content-center">
          <span className="confDateTextStyle">
            {functions.formatDate(confDate)}
          </span>
        </div>

        <div
          className="row d-flex align-items-end"
          style={{ padding: "0px 94px 57px 94px" }}
        >
          {signatoriesSection}

          <span
            className="col-sm-6 col-md-6 text-right"
            style={{ padding: "0px" }}
          >
            <img src={CERT_SEAL} height="179px" width="179px" /> <br />
            <span className="certNoTextStyle">Certificate Number: &nbsp; </span>
            <span className="certNoTextStyle">{certNum}</span>
          </span>
        </div>
      </div>

      <div>
        <div className="container">
          <span className="printerNoTextStyle">{printerNum}</span>
        </div>
      </div>
    </div>
  );
};

Template.propTypes = {
  document: PropTypes.object.isRequired
};

export default Template;
