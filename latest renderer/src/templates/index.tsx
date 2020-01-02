import { templates as govtechDemoTemplates } from "./govtechDemoCert";
import { TemplateRegistry } from "@govtechsg/decentralized-renderer-react-components";
import { templates as FTCertificate2019 } from "./suss/2019-FT-Certificate";
import { templates as FTTranscript2019 } from "./suss/2019-FT-Transcript";
import { templates as PTCertificate2019 } from "./suss/2019-PT-Certificate";
import { templates as PTTranscript2019 } from "./suss/2019-PT-Transcript";

export const registry: TemplateRegistry<any> = {
  default: govtechDemoTemplates,
  GOVTECH_DEMO: govtechDemoTemplates,
  FT_CERTIFICATE_2019: FTCertificate2019,
  FT_TRANSCRIPT_2019: FTTranscript2019,
  PT_CERTIFICATE_2019: PTCertificate2019,
  PT_TRANSCRIPT_2019: PTTranscript2019
};
