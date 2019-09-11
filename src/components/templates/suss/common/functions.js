import { tz } from "moment-timezone";
import React from "react";

export const TIMEZONE = "Asia/Singapore";

// format datetime to dd MMM yyyy
export const formatDate = dateString => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return tz(date, TIMEZONE).format("D MMMM YYYY");
};

// 1. To break string if exceeded approx. delimiterLength chars. Avoid splitting word
// 2. The word(s) must be in uppercase.
export const formatSplitTextWithAllCaps = (
  splitText,
  delimiterLength,
  additionalChar
) => {
  if (!splitText) return null;
  const trimText = splitText.trim();
  const textLength = trimText.length;
  if (textLength > delimiterLength) {
    // explanation of indexOf:
    // - string.indexOf(searchvalue, start)
    const firstPart = trimText.substr(
      0,
      trimText.indexOf(" ", delimiterLength - 1)
    );
    const secondPart = trimText.substring(
      trimText.indexOf(" ", delimiterLength - 1),
      textLength
    );

    if (firstPart.length === 0) {
      return trimText.toUpperCase();
    } else {
      return (
        <span>
          {firstPart.toUpperCase()} <br /> {additionalChar}{" "}
          {secondPart.toUpperCase()}
        </span>
      );
    }
  }

  return trimText.toUpperCase();
};

// Initial letter of word will be in uppercase.
export const capitalizeInitialLetter = text => {
  return text
    .toLowerCase()
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
};

// 1. To break string if exceeded approx. delimiterLength chars. Avoid splitting word
// 2. The inital letter of word must be in uppercase.
export const formatSplitTextWithInitialCaps = (splitText, delimiterLength) => {
  if (!splitText) return null;
  const trimText = splitText
    .trim()
    .toLowerCase()
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
  const textLength = trimText.length;
  if (textLength > delimiterLength) {
    // explanation of indexOf:
    // - string.indexOf(searchvalue, start)
    const firstPart = trimText.substr(
      0,
      trimText.indexOf(" ", delimiterLength - 1)
    );
    const secondPart = trimText.substring(
      trimText.indexOf(" ", delimiterLength - 1),
      textLength
    );

    if (firstPart.length === 0) {
      return trimText
        .toLowerCase()
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    } else {
      return (
        <span>
          {firstPart} <br /> {secondPart}
        </span>
      );
    }
  }
  return trimText
    .toLowerCase()
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
};

export const addBreaklineIfNotEmpty = text => {
  if (text !== "") {
    return <span>{text}</span>;
  }
};

// Display the statement if graduation semester is less than 2017. For UniSIM graduates.
export const displayCertRetroLiners = text => {
  const year = text.substring(0, 4);
  if (year < 2017) {
    return (
      <div className="row d-flex justify-content-center">
        <span
          className="certTextStyle"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          This degree was originally conferred by SIM University. <br />
          On 17 March 2017, SIM University was renamed &quot;Singapore
          University of Social Sciences&quot;.
        </span>
      </div>
    );
  } else {
    return <div style={{ marginTop: "150px" }}></div>;
  }
};

// ----- TRANSCRIPT -----

// Rendering the # section
export function displayHexSectionMod(data) {
  for (const [index, value] of data.entries()) {
    // <Element key={index} />;
    if (value.result === "#") {
      return (
        <tr key={index}>
          <td colSpan="7"># Exempted from course</td>
        </tr>
      );
    }
  }
}

// Rendering the * section
export function displayStarSectionMod(data) {
  for (const [index, value] of data.entries()) {
    //<Element key={index} />;
    if (value.creditUnits === "*") {
      return (
        <tr key={index}>
          <td colSpan="7">
            * Additional course taken, not included in graduation requirements.
          </td>
        </tr>
      );
    }
  }
}

// Display the statement if graduation semester is less than 2017. For UniSIM graduates.
export const displayTransRetroLiners = text => {
  const year = text.substring(0, 4);
  if (year < 2017) {
    return (
      <div className="row d-flex justify-content-center">
        <span
          className="certTextStyle"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          The transcript was originally issued by SIM University. On 17 March
          2017, SIM University was renamed &quot;Singapore University of Social
          Sciences&quot;.
        </span>
      </div>
    );
  } else {
    return <div style={{ marginTop: "150px" }}></div>;
  }
};
