import { tz } from "moment-timezone";
import React from "react";

export const TIMEZONE = "Asia/Singapore";

// format datetime to dd MMM yyyy
export const formatDate = dateString => {
  if (!dateString) return null;
  const date = new Date(dateString);
  return tz(date, TIMEZONE).format("D MMMM YYYY").toUpperCase();
};

// ----- CERTIFICATE -----
// 1. To break string if exceeded approx. delimiterLength chars. Avoid splitting word
// 2. All letters in uppercase.
export const formatSplitTextWithAllCaps = (word, delimiterLength) => {
  if (!word) return null;
  var trimText = word.toUpperCase().trim();
  const textLength = trimText.length;
  
  // to split the word if have '(' and remain the '(' after split.
  trimText = trimText.split(/(?=\()/); 
  var elements  = [];
  
  for (var i = 0; i < trimText.length; i++) {
	  if (trimText[i].length >= delimiterLength) {
		// explanation of indexOf:
		// - string.indexOf(searchvalue, start)
		const firstPart = trimText[i].substr(0, trimText[i].indexOf(" ", delimiterLength));
		const secondPart = trimText[i].substring(trimText[i].indexOf(" ", delimiterLength), trimText[i].length);
		
		if (firstPart.length === 0) {
		  return trimText;
		} else if (secondPart.trim().length > delimiterLength) {
		  const secondPartSplit = secondPart.trim().substring(0, secondPart.trim().indexOf(" ", delimiterLength));
		  const thirdPart = secondPart.trim().substring(secondPart.trim().indexOf(" ", delimiterLength), textLength);

		  if (secondPartSplit === ""){
				return (
				<span>
				  {firstPart} <br /> {thirdPart}
				</span>
			  );
			}
			else{
			  return (
				<span>
				  {firstPart} <br /> {secondPartSplit} <br /> {thirdPart}
				</span>
			  );
			}
		} else {
		  return (
			<span>
			  {firstPart} <br /> {secondPart}
			</span>
		  );
		}
	  }
	  elements.push(<span key={i}>{trimText[i]}<br/> </span>);
  }
  return (<span>{elements}</span>);
};

// Display 'ON' between degree class honours and conferment date if conferment year is >= 2019. For UniSIM graduates.
export const displayOnLiners = text => {
  const date = new Date(text);
  const year = date.getFullYear();
  if (year >= 2019) {
    return (
     <div className="row d-flex justify-content-center">
          <span className="degreeClassTextStyle">
            ON
          </span>
     </div>
    );
  } 
};


// Display the statement if graduation semester is less than 2017. For UniSIM graduates.
export const displayCertRetroLiners = text => {
  const date = new Date(text);
  const year = date.getFullYear();
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
    return <div style={{ marginTop: "50px" }}></div>;
  }
};




// ----- TRANSCRIPT -----
// Initial letter of word will be in uppercase.
export const capitalizeInitialLetter = text => {
  var splitText = text.toLowerCase().split(" ");
  
  for (var i = 0; i < splitText.length; i++) {
    if(splitText[i] === "(upper)"){
		splitText[i] = "(Upper)";
	}
	else if(splitText[i] === "(lower)"){
		splitText[i] = "(Lower)";
	}
	else{
		splitText[i] = splitText[i].charAt(0).toUpperCase() + splitText[i].substring(1);
	}
  }
  
  return splitText.join(" ");
};


// Rendering transcript  
// 1. To break string if exceeded approx. delimiterLength chars. Avoid splitting word
// 2. The inital letter of word must be in uppercase.
// 3. additionalChar parameter is for recipientName in transcript. if split word, the word will begin below the ":". Need a space, '\u00A0'.
export const formatSplitText = (word, delimiterLength, additionalChar) => {
  if (!word) return null;
  const trimText = word.trim();
  const textLength = trimText.length;

  if (textLength >= delimiterLength) {
    // explanation of indexOf:
    // - string.indexOf(searchvalue, start)
    const firstPart = trimText.substr(
      0,
      trimText.indexOf(" ", delimiterLength)
    );
    const secondPart = trimText.substring(
      trimText.indexOf(" ", delimiterLength),
      textLength
    );
	
    if (firstPart.length === 0) {
      return trimText;
    } else if (secondPart.trim().length > delimiterLength) {
      const secondPartSplit = secondPart
        .trim()
        .substring(0, secondPart.trim().indexOf(" ", delimiterLength));

      const thirdPart = secondPart
        .trim()
        .substring(secondPart.trim().indexOf(" ", delimiterLength), textLength);
		
		if (secondPartSplit === ""){
			return (
			<span>
			  {firstPart} <br /> {additionalChar} {thirdPart}
			</span>
		  );
		}
		else{
		  return (
			<span>
			  {firstPart} <br /> {additionalChar} {secondPartSplit} <br /> {thirdPart}
			</span>
		  );
		}
    } else {
      return (
        <span>
          {firstPart} <br /> {additionalChar} {secondPart}
        </span>
      );
    }
  }
  return trimText;
};

export const addBreaklineIfNotEmpty = text => {
  if (text !== "") {
    return <span>{text}</span>;
  }
};

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
  const date = new Date(text);
  const year = date.getFullYear();
  if (year < 2017) {
    return (
      <div className="row">
        <div
          className="col"
          style={{ marginTop: "50px", marginBottom: "20px" }}
        >
          <span className="footnoteStyle">
            The transcript was originally issued by SIM University. On 17 March
            2017, SIM University was renamed &quot;Singapore University of
            Social Sciences&quot;.
          </span>
        </div>
      </div>
    );
  } else {
    return <div style={{ marginTop: "150px" }}></div>;
  }
};
