// VERIFY BEFORE PUBLICATION: All programme details, dates, and host organisations require Raymond Cheung's review.

export type ProgrammeStatus = "upcoming" | "ongoing" | "past" | "enquire";
export type ProgrammeCategory =
  | "Risk"
  | "Insurance"
  | "Climate"
  | "ESG"
  | "Technology"
  | "Governance";

export interface Programme {
  id: string;
  title: string;
  subtitle: string;
  status: ProgrammeStatus;
  date?: string;
  deliveryMode: string;
  audience: string;
  cpdHours?: string;
  hostOrganisation?: string;
  description: string;
  categories: ProgrammeCategory[];
  registrationUrl?: string;
  isPreviewOnly?: boolean;
}

export const programmes: Programme[] = [
  {
    id: "climate-transition-insurers",
    title: "Climate Transition Planning for Insurers",
    subtitle: "Navigating regulatory expectations and implementation planning.",
    status: "enquire",
    deliveryMode: "In-person / Virtual",
    audience: "Insurance executives, risk officers, board members",
    cpdHours: "TBC", // VERIFY BEFORE PUBLICATION
    hostOrganisation: "CER Consultancy", // VERIFY BEFORE PUBLICATION
    description:
      "A practical programme exploring how insurance organisations can move from broad climate commitments to measurable governance, underwriting, investment and disclosure action. Includes regulatory landscape, scenario analysis and implementation roadmap development.",
    categories: ["Climate", "Insurance", "ESG"],
    isPreviewOnly: true,
  },
  {
    id: "rbc-singapore-insurers",
    title: "Risk-Based Capital for Singapore Insurers",
    subtitle:
      "Understanding capital structure, regulatory development and strategic implications.",
    status: "enquire",
    deliveryMode: "In-person",
    audience: "Actuarial teams, CFOs, risk officers, senior management",
    cpdHours: "TBC", // VERIFY BEFORE PUBLICATION
    hostOrganisation: "TBC", // VERIFY BEFORE PUBLICATION
    description:
      "An advanced programme designed to build participants' understanding of Singapore's risk-based capital framework, connect technical capital requirements to strategic decisions and explore the implications of ongoing regulatory development.",
    categories: ["Insurance", "Risk"],
    isPreviewOnly: true,
  },
  {
    id: "climate-environmental-risk-asean",
    title: "Climate and Environmental Risk Management in ASEAN",
    subtitle:
      "Exploring climate exposure, catastrophe risk, insurance mechanisms and financial resilience.",
    status: "enquire",
    deliveryMode: "In-person / Virtual",
    audience:
      "Risk managers, sustainability officers, insurance and reinsurance professionals",
    cpdHours: "TBC", // VERIFY BEFORE PUBLICATION
    hostOrganisation: "TBC", // VERIFY BEFORE PUBLICATION
    description:
      "A regional programme examining how climate and environmental risks manifest across ASEAN markets, with a focus on practical risk assessment, insurance product development, catastrophe risk and financial resilience frameworks.",
    categories: ["Climate", "ESG", "Risk"],
    isPreviewOnly: true,
  },
  {
    id: "erm-leadership",
    title: "Enterprise Risk Management Leadership",
    subtitle:
      "Connecting risk-based decisions with strategy, operations and organisational capability.",
    status: "enquire",
    deliveryMode: "In-person / Virtual",
    audience: "Senior risk professionals, board members, C-suite executives",
    cpdHours: "TBC", // VERIFY BEFORE PUBLICATION
    hostOrganisation: "TBC", // VERIFY BEFORE PUBLICATION
    description:
      "A leadership-focused programme that develops the capability to design, govern and lead enterprise-wide risk management. Covers risk appetite, governance structures, board reporting, risk culture and strategic integration.",
    categories: ["Risk", "Governance"],
    isPreviewOnly: true,
  },
];

export const speakingThemes = [
  "Risk Leadership in an Age of Constant Change",
  "What Boards Need to Know About Climate Transition",
  "The Future of Insurance in Asia",
  "AI, Automation and the New Insurance Risk Landscape",
  "Capital, Regulation and Organisational Resilience",
  "From ESG Compliance to Strategic Value",
  "Building Risk Capability Across an Organisation",
  "Insurtech Beyond the Technology Hype",
];

export const speakingFormats = [
  { label: "Keynotes", icon: "mic" },
  { label: "Panels", icon: "users" },
  { label: "Executive Briefings", icon: "briefcase" },
  { label: "Masterclasses", icon: "graduation-cap" },
  { label: "Moderated Discussions", icon: "message-square" },
  { label: "Media Commentary", icon: "radio" },
];
