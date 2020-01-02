import React, { FunctionComponent } from "react";
import { css } from "@emotion/core";

export const PrintWatermark: FunctionComponent = () => (
  <div
    css={css`
      width: 0;
      height: 0;
      opacity: 0;
      display: none;
      position: absolute;
      background-image: url("/static/images/watermark.svg");
      background-repeat: no-repeat;
      background-size: cover;

      @media print {
        width: 100%;
        height: 100%;
        opacity: 0.6;
        display: block;
        -webkit-print-color-adjust: exact; /*Chrome, Safari */
        color-adjust: exact; /*Firefox*/
      }
    `}
    className="print-only"
  />
);
