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
	
	.logoStyle {
		width: 39.02mm;
		height: 19.756mm;
	}
	
	.topBuffer	{
		margin-top: 10px;
	}
	
	.officialTransStyle {
		margin-top: 15px;
		font-family: Montserrat;
		font-weight: bold;
		color: #003B5C;
		font-size: 17pt;
	}
	
	.transTextStyle{
		font-family: Arial;
		font-size: 11pt;
	}
	
	.transModuleTextStyle{
		font-family: Arial;
		font-size: 10.5pt;
	}
	
	hr{
		margin-bottom: 0px;
	}
	
	.officialTransInfoStyle {
		margin-top: 15mm;
		font-family: Montserrat;
		font-weight: bold;
		color: #003B5C;
		font-size: 25pt;
	}
	
	.headerStyle{
		font-family: Montserrat;
		font-weight: bold;
		color: #003B5C;
		font-size: 14pt;
	}
	
	.textStyle{
		font-family: Arial;
		color: #003B5C;
		font-size: 11pt;
	}
	
	.tableHeaderStyle{
		font-family: Montserrat;
		font-weight: bold;
		color: #003B5C;
		font-size: 12pt;
	}

	.tdMarksStyle, .tdStyleHeader {
		padding: 10px; 10px; 10px; 10px;
	}
	
	.tdGradeStyle {
		padding-left: 85px;
	}

    `}</style>
  </div>
);

export default styles;
