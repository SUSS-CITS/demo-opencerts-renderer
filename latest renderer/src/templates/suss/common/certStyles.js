import { SUSS_CERT_BG } from "./images";
import React from "react";

const styles = () => (
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Cardo"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:bold&display=swap"
      rel="stylesheet"
    />

    <style>{`
	.container{
		width: 794px;
		height: auto;
	}

	.certBgStyle{
		background-repeat: no-repeat;
		background-image: url(${SUSS_CERT_BG});
		background-size: contain;
		background-position: center;
		min-width:794px !important;
		max-width: 794px;
		max-height: 1123px;
		-webkit-print-color-adjust: exact; /*Chrome, Safari */
		color-adjust: exact;  /*Firefox*/
	}
	
	.logoStyle {
		width: 309px;
		height: 156px;
		margin-top: 130px;
	}

    .certTextStyle {
		font-family: Cardo, sans-serif;
		font-style: italic;
		font-size: 10pt;
		color: #003B5C;
		text-align: center;
    }

	.stuNameProgNameTextStyle {
		font-family: Montserrat;
		font-weight: bold;
		font-size: 18pt;
		color: #003B5C;
		text-align: center;
    }

	.degreeClassTextStyle {
        font-family: Montserrat;
		font-weight: bold;
		font-size: 10pt;
		color: #003B5C;
		text-align: center;
    }

	.confDateTextStyle {
        font-family: Montserrat;
		font-weight: bold;
		font-size: 10pt;
		color: #003B5C;
		text-align: center;
    }

	.signTextStyle{
		font-family: Cardo;
		font-size: 10pt;
		color: #003B5C;
		text-align: center;
	}

	.certNoTextStyle{
		font-family: Montserrat;
		font-weight: bold;
		font-size: 9pt;
		color: #003B5C;
		text-align: center;
	}

	.printerNoTextStyle{
		font-family: Montserrat;
		font-weight: bold;
		font-size: 9pt;
		color: #003B5C;
		text-align: left;
	}
	
	.signStyle {
		width: 130px;
		align: left;
	}


    `}</style>
  </div>
);

export default styles;
