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
    subtitle: "Navigating regulatory expectations and building a credible implementation roadmap.",
    status: "enquire",
    deliveryMode: "In-person · Virtual",
    audience: "Insurance executives, risk officers, board members",
    hostOrganisation: "CER Consultancy",
    description:
      "A focused programme that takes insurance organisations from broad climate commitments to concrete governance, underwriting, investment and disclosure action. Participants work through regulatory expectations, scenario analysis and a structured implementation framework they can apply immediately.",
    categories: ["Climate", "Insurance", "ESG"],
  },
  {
    id: "rbc-singapore-insurers",
    title: "Risk-Based Capital for Singapore Insurers",
    subtitle: "Capital structure, regulatory development and strategic decision-making.",
    status: "enquire",
    deliveryMode: "In-person",
    audience: "Actuarial teams, CFOs, risk officers, senior management",
    description:
      "An advanced programme that builds genuine fluency in Singapore's risk-based capital framework — connecting technical requirements to the strategic decisions they shape. Designed for practitioners who need to go beyond the numbers and understand the commercial implications of capital positions, regulatory change and portfolio choices.",
    categories: ["Insurance", "Risk"],
  },
  {
    id: "climate-environmental-risk-asean",
    title: "Climate & Environmental Risk Management in ASEAN",
    subtitle: "Climate exposure, catastrophe risk, insurance mechanisms and financial resilience.",
    status: "enquire",
    deliveryMode: "In-person · Virtual",
    audience:
      "Risk managers, sustainability officers, insurance and reinsurance professionals",
    description:
      "A regionally grounded programme examining how climate and environmental risks manifest across ASEAN markets. Covers practical risk assessment, insurance product development, catastrophe modelling and the financial resilience frameworks that boards and regulators increasingly expect.",
    categories: ["Climate", "ESG", "Risk"],
  },
  {
    id: "erm-leadership",
    title: "Enterprise Risk Management Leadership",
    subtitle: "Connecting risk governance with strategy, operations and organisational culture.",
    status: "enquire",
    deliveryMode: "In-person · Virtual",
    audience: "Senior risk professionals, board members, C-suite executives",
    description:
      "A leadership-focused programme for professionals who need to design, govern and lead enterprise risk management — not just manage a function within it. Covers risk appetite in practice, governance structures, board-quality reporting, risk culture and the integration of risk into strategic planning.",
    categories: ["Risk", "Governance"],
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
