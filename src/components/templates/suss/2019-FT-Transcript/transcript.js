import PropTypes from "prop-types";
import { get } from "lodash";
import { format } from "date-fns";
import { SUSS_LOGO } from "../common/images";
import styles from "../common/transcriptStyle";
import * as functions from "../common/functions";
import React from "react";

const engLocale = require("date-fns/locale/en");

const Template = ({ document }) => {
  // Declare what will be needed in the Transcript
  const transcriptData = get(document, "transcript", []);
  const gradSem = get(document, "additionalData.graduationSemester");
  const recipientName = get(document, "recipient.name");
  const recipientAdd1 = get(document, "recipient.address1").toUpperCase();
  const recipientAdd2 = get(document, "recipient.address2").toUpperCase();
  const recipientAdd3 = get(document, "recipient.address3").toUpperCase();
  const postalCode = get(document, "recipient.postalCode");

  const recipientNRIC = get(document, "recipient.nric");
  const issuedOn = format(get(document, "issuedOn"), "DD MMMM YYYY", {
    locale: engLocale
  });
  const studentId = get(document, "recipient.studentId");

  const creditRecog = get(document, "additionalData.numOfCreditRecognition");
  const creditExempted = get(document, "additionalData.numOfCreditExempted");

  const totalCreditUnits = get(document, "additionalData.totalCreditUnits");
  const cGPA = get(document, "additionalData.cgpa");

  const progType = get(document, "additionalData.progType");
  const awardInstitution = get(document, "additionalData.awardInstitution");
  const degreeTitle = get(document, "additionalData.degreeTitle");
  const degreeClass = get(document, "additionalData.degreeClass");
  const confermentDate = format(
    get(document, "additionalData.dateOfConferment"),
    "DD MMMM YYYY",
    { locale: engLocale }
  );

  const signature = get(document, "additionalData.signatories.0.signature");
  const position = get(document, "additionalData.signatories.0.position");

  // Rendering an array of transcript data
  const transcriptSection = transcriptData.map((t, i) => (
    <tr key={i}>
      <td valign="top" align="center">
        {t.year}
      </td>
      <td valign="top" align="center">
        {t.semester}
      </td>
      <td valign="top">{t.courseCode}</td>
      <td valign="top">
        {functions.formatSplitTextWithInitialCaps(t.name, 40)}
      </td>
      <td valign="top" align="center">
        {t.creditUnits}
      </td>
      <td valign="top" align="left">
        {t.result}
      </td>
      <td valign="top" align="left">
        {t.gradePoint}
      </td>
    </tr>
  ));

  return (
    <div>
      {styles()}

      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img src={SUSS_LOGO} alt="SUSS Logo" className="logoStyle" />
          </div>
        </div>

        <div className="row">
          <div className="col d-flex justify-content-center">
            <span className="officialTransStyle">OFFICIAL TRANSCRIPT</span>
          </div>
        </div>

        <div className="row">&nbsp;</div>
        <div className="row transTextStyle" style={{ paddingLeft: "15px" }}>
          {recipientName}
        </div>
        <div className="row transTextStyle" style={{ paddingLeft: "15px" }}>
          {recipientAdd1}
        </div>
        <div className="row transTextStyle" style={{ paddingLeft: "15px" }}>
          {functions.addBreaklineIfNotEmpty(recipientAdd2)}
        </div>
        <div className="row transTextStyle" style={{ paddingLeft: "15px" }}>
          {functions.addBreaklineIfNotEmpty(recipientAdd3)}
        </div>
        <div className="row transTextStyle" style={{ paddingLeft: "15px" }}>
          {postalCode}
        </div>

        <div className="row topBuffer">
          <div className="col">
            <table className="w-120 transTextStyle">
              <tbody>
                <tr>
                  <th valign="top" width="150px">
                    Name
                  </th>
                  <td valign="top" width="45%">
                    :{" "}
                    {functions.formatSplitTextWithAllCaps(
                      recipientName,
                      30,
                      "\u00A0"
                    )}
                  </td>
                  <th valign="top" width="130px">
                    NRIC/FIN/PP No.
                  </th>
                  <td valign="top">: {recipientNRIC}</td>
                </tr>
                <tr>
                  <th valign="top" width="150px">
                    Personal Identifier
                  </th>
                  <td valign="top">: {studentId}</td>
                  <th valign="top" width="100px">
                    Date of Issue
                  </th>
                  <td valign="top">: {issuedOn}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="row topBuffer transTextStyle">
          <div className="col">
            This transcript confirms that the student named above has
            succesfully completed the listed courses leading to the
            qualification shown below. For an explanation of the terms and
            symbols used, please see the other side of this transcript.
          </div>
        </div>

        {transcriptData !== [] && (
          <div className="row">
            <div className="col">
              <table className="transTextStyle">
                <tbody>
                  <tr>
                    <th align="center" width="38">
                      Year
                    </th>
                    <th align="center" width="68">
                      Semester
                    </th>
                    <th width="76">Course</th>
                    <th width="400">Title</th>
                    <th align="center" width="49">
                      Credit Units
                    </th>
                    <th align="left" width="49">
                      Result
                    </th>
                    <th align="left" width="49">
                      Grade Point
                    </th>
                  </tr>

                  {transcriptSection}

                  {// Only display creditExempted when the field is not 0.0 in the JSON/Opencert file
                  creditExempted !== 0.0 && (
                    <tr>
                      <td colSpan="4">
                        <b>Credit Exemption: </b>
                      </td>
                      <td align="center">
                        <b>{creditExempted}</b>
                      </td>
                    </tr>
                  )}

                  {// Only display creditRecog when the field is not 0.0 in the JSON/Opencert file
                  creditRecog !== 0.0 && (
                    <tr>
                      <td colSpan="4">
                        <b>
                          Credit Recognition taken from approved institutions:{" "}
                        </b>
                      </td>
                      <td align="center">
                        <b>{creditRecog}</b>
                      </td>
                    </tr>
                  )}

                  <tr>
                    <td colSpan="4">
                      <b>
                        Total number of credit units counted towards this award:{" "}
                      </b>
                    </td>
                    <td align="center">
                      <b>{totalCreditUnits}</b>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan="6">
                      <b>Cumulative Grade Point Average: </b>
                    </td>
                    <td align="left">
                      <b>{cGPA}</b>
                    </td>
                  </tr>

                  {functions.displayHexSectionMod(document.transcript)}
                  {functions.displayStarSectionMod(document.transcript)}

                  <tr>
                    <td colSpan="7">
                      <b>{progType} Conferred By:</b> {awardInstitution}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="row">
          <div className="col-5">
            <b>Title</b>
          </div>
          <div className="col-4">
		  {// Only display degreeClass when the field is not empty in the JSON/Opencert file
                  degreeClass !== "" && (
                    <b>Classification</b>
                  )}
          </div>
          <div className="col-3">
            <b>Date of Conferment</b>
          </div>
        </div>

        <div className="row">
          <div className="col-5">
            <i>{functions.capitalizeInitialLetter(degreeTitle)}</i>
          </div>
          <div className="col-4">
            <i>{functions.capitalizeInitialLetter(degreeClass)}</i>
          </div>
          <div className="col-3">
            <i>{confermentDate}</i>
          </div>
        </div>

        <div className="row">
          <div className="col-4 transTextStyle">
            <img src={signature} alt="signature"/>
            <hr />
            <div> {position} </div>
          </div>
        </div>

        {functions.displayTransRetroLiners(gradSem)}

        <div className="row">
          <div className="col text-center">
            --------------- End of Transcript ---------------
          </div>
        </div>
      </div>
    </div>
  );
};

Template.propTypes = {
  document: PropTypes.object.isRequired
};

export default Template;
