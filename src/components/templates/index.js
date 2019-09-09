// This file is the template registry serves as the template registry.
// When templates are loaded, their name will be compared to the keys of the
// exported object and that template will be used. If a template cannot be
// found, the default template will be used instead.

// TODO: Use dynamic loading to prevent all templates to be loaded at once.
import DefaultTemplate from "./default";
import CustomTemplate from "./customTemplate";
import GovTechDemoCert from "./govtechDemoCert";
import FTCertificate2019 from "./suss/2019-FT-Certificate";
import FTTranscript2019 from "./suss/2019-FT-Transcript";

export default {
  default: DefaultTemplate,
  CUSTOM_TEMPLATE: CustomTemplate,
  GOVTECH_DEMO: GovTechDemoCert,
  FT_CERTIFICATE_2019: FTCertificate2019,
  FT_TRANSCRIPT_2019: FTTranscript2019,
  NULL: []
};
