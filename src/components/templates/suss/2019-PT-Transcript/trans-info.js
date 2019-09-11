import styles from "../common/transcriptStyle";
import React from "react";

const transInfo = () => (
  <div>
    {styles()}
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <span className="officialTransInfoStyle">Transcript Information</span>
        </div>
      </div>

      <div className="row topBuffer">
        <span className="headerStyle">Credit units and levels</span>
      </div>
      <div className="row">
        <span className="textStyle">
          The University uses a credit unit (cu) system. The credit unit
          requirements are:
        </span>
      </div>
      <div className="row">
        <table className="w-100" border="1">
          <tbody>
            <tr>
              <td />
              <td className="tdStyleHeader">
                <span className="tableHeaderStyle">Basic Degree </span>
                <br />
                (Students admitted prior 2007)
              </td>
              <td className="tdStyleHeader">
                <span className="tableHeaderStyle">Basic Degree</span>
                <br />
                (Students admitted from 2007)
              </td>
              <td className="tdStyleHeader">
                <span className="tableHeaderStyle">Honours Degree</span>
                <br />
                (Students admitted prior 2007)
              </td>
              <td className="tdStyleHeader">
                <span className="tableHeaderStyle">Honours Degree</span>
                <br />
                (Students admitted from 2007)
              </td>
            </tr>

            <tr>
              <td className="tdStyleHeader tableHeaderStyle">
                Full time programmes
              </td>
              <td className="textStyle tdStyleHeader">NA</td>
              <td className="textStyle tdStyleHeader">NA</td>
              <td className="textStyle tdStyleHeader">NA</td>
              <td className="textStyle tdStyleHeader">200 cu</td>
            </tr>

            <tr>
              <td className="tdStyleHeader tableHeaderStyle">
                Part time programmes
              </td>
              <td className="textStyle tdStyleHeader">120 cu</td>
              <td className="textStyle tdStyleHeader">130 cu</td>
              <td className="textStyle tdStyleHeader">160 cu</td>
              <td className="textStyle tdStyleHeader">170 cu</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div className="row">
        <span className="headerStyle">Total number of units</span>
      </div>
      <div className="row">
        <span className="textStyle">
          This includes all the credit units that have been counted towards this
          qualification, including any credit transfer, subordinate award, and
          collaborative courses from approved institutions.
        </span>
      </div>
      <br />
      <div className="row">
        <span className="headerStyle">Grade Point Average</span>
      </div>
      <div className="row">
        <span className="textStyle">
          The GPA is the average grade point of all courses taken by the
          student.
        </span>
      </div>

      <br />
      <div className="row">
        <span className="headerStyle">Grade Legend</span>
        <table className="w-100" border="1">
          <tbody>
            <tr>
              <th colSpan="2" className="tableHeaderStyle">
                <center>Grading System</center>
              </th>
              <th className="text-center tableHeaderStyle">Grade Point</th>
            </tr>
            <tr>
              <td width="50%" className="tdMarksStyle textStyle">
                85 - 100 marks
              </td>
              <td align="left" width="25%" className="tdGradeStyle textStyle">
                A+
              </td>
              <td width="25%" className="tdGradeStyle textStyle">
                5.0
              </td>
            </tr>
            <tr>
              <td className="tdMarksStyle textStyle">80 - 84 marks</td>
              <td align="left" className="tdGradeStyle textStyle">
                A
              </td>
              <td className="tdGradeStyle textStyle">5.0</td>
            </tr>
            <tr>
              <td className="tdMarksStyle textStyle">75 - 79 marks</td>
              <td align="left" className="tdGradeStyle textStyle">
                A-
              </td>

              <td className="tdGradeStyle textStyle">4.5</td>
            </tr>
            <tr>
              <td className="tdMarksStyle textStyle">70 - 74 marks</td>
              <td align="left" className="tdGradeStyle textStyle">
                B+
              </td>
              <td className="tdGradeStyle textStyle">4.0</td>
            </tr>
            <tr>
              <td className="tdMarksStyle textStyle">65 - 69 marks</td>
              <td align="left" className="tdGradeStyle textStyle">
                B
              </td>
              <td className="tdGradeStyle textStyle">3.5</td>
            </tr>
            <tr>
              <td className="tdMarksStyle textStyle">60 - 64 marks</td>
              <td align="left" className="tdGradeStyle textStyle">
                B-
              </td>
              <td className="tdGradeStyle textStyle">3.0</td>
            </tr>
            <tr>
              <td className="tdMarksStyle textStyle">55 - 59 marks</td>
              <td align="left" className="tdGradeStyle textStyle">
                C+
              </td>
              <td className="tdGradeStyle textStyle">2.5</td>
            </tr>
            <tr>
              <td className="tdMarksStyle textStyle">50 - 54 marks</td>
              <td align="left" className="tdGradeStyle textStyle">
                C
              </td>
              <td className="tdGradeStyle textStyle">2.0</td>
            </tr>
            <tr>
              <td className="tdMarksStyle textStyle">45 - 49 marks</td>
              <td align="left" className="tdGradeStyle textStyle">
                D+
              </td>
              <td className="tdGradeStyle textStyle">1.5</td>
            </tr>
            <tr>
              <td className="tdMarksStyle textStyle">40 - 44 marks</td>
              <td align="left" className="tdGradeStyle textStyle">
                D
              </td>
              <td className="tdGradeStyle textStyle">1.0</td>
            </tr>
            <tr>
              <td className="tdMarksStyle textStyle"> {"<"} 40 marks/Fail</td>
              <td align="left" className="tdGradeStyle textStyle">
                F
              </td>
              <td className="tdGradeStyle textStyle">0.0</td>
            </tr>
            <tr>
              <td className="tdMarksStyle textStyle">Withdrawal</td>
              <td align="left" className="tdGradeStyle textStyle">
                W
              </td>
              <td align="left" className="tdGradeStyle textStyle">
                -
              </td>
            </tr>
            <tr>
              <td className="tdMarksStyle textStyle">Pass with Distinction</td>
              <td align="left" className="tdGradeStyle textStyle">
                PD
              </td>
              <td align="left" className="tdGradeStyle textStyle">
                -
              </td>
            </tr>
            <tr>
              <td className="tdMarksStyle textStyle">Pass</td>
              <td align="left" className="tdGradeStyle textStyle">
                P
              </td>
              <td align="left" className="tdGradeStyle textStyle">
                -
              </td>
            </tr>
            <tr>
              <td className="tdMarksStyle textStyle">
                Two semesters Project/Capstone courses
              </td>
              <td align="left" className="tdGradeStyle textStyle">
                -
              </td>
              <td align="left" className="tdGradeStyle textStyle">
                -
              </td>
            </tr>
            <tr>
              <td className="tdMarksStyle textStyle">
                This is applicable only for Capstone Courses where an extension
                (IP) is granted
              </td>

              <td align="left" className="tdGradeStyle textStyle">
                IP
              </td>
              <td align="left" className="tdGradeStyle textStyle">
                -
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="row" style={{ marginTop: "45px" }}>
        <div className="col">
          <hr />
          <p>
            You may request additional academic transcript(s) online via
            www.suss.edu.sg
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default transInfo;
