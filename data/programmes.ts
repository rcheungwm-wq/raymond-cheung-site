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
    subtitle: "From broad commitments to decisions that hold up to regulatory scrutiny.",
    status: "enquire",
    deliveryMode: "In-person · Virtual",
    audience: "Insurance executives, risk officers, board members",
    hostOrganisation: "CER Consultancy",
    description:
      "I designed this programme because I kept seeing the same gap — organisations with strong climate intentions and weak implementation. We work through regulatory expectations, scenario analysis and a structured roadmap so you leave with concrete actions, not just a framework.",
    categories: ["Climate", "Insurance", "ESG"],
  },
  {
    id: "rbc-singapore-insurers",
    title: "Risk-Based Capital for Singapore Insurers",
    subtitle: "Understanding capital not just as a number — but as a strategic position.",
    status: "enquire",
    deliveryMode: "In-person",
    audience: "Actuarial teams, CFOs, risk officers, senior management",
    description:
      "Capital decisions shaped everything I did as CRO. This programme gives actuarial and finance teams the depth to understand Singapore's RBC framework — and helps them connect those technical requirements to the commercial and strategic choices the organisation is actually making.",
    categories: ["Insurance", "Risk"],
  },
  {
    id: "climate-environmental-risk-asean",
    title: "Climate & Environmental Risk Management in ASEAN",
    subtitle: "Regional exposure, catastrophe risk and financial resilience frameworks.",
    status: "enquire",
    deliveryMode: "In-person · Virtual",
    audience: "Risk managers, sustainability officers, insurance and reinsurance professionals",
    description:
      "ASEAN faces some of the world's most acute climate risk. This programme connects that physical reality to practical risk assessment, insurance product development, catastrophe modelling and the financial resilience frameworks that boards and regulators are increasingly requiring.",
    categories: ["Climate", "ESG", "Risk"],
  },
  {
    id: "erm-leadership",
    title: "Enterprise Risk Management Leadership",
    subtitle: "Connecting risk governance with strategy, culture and organisational capability.",
    status: "enquire",
    deliveryMode: "In-person · Virtual",
    audience: "Senior risk professionals, board members, C-suite executives",
    description:
      "This programme is for leaders who need to own enterprise risk management — not just sit inside it. We cover risk appetite in practice, governance structures, what a good board risk report actually looks like, and how to build a risk culture that changes how decisions get made.",
    categories: ["Risk", "Governance"],
  },
];

export const speakingThemes = [
  "Risk Leadership in an Age of Constant Change",
  "What Your Board Needs to Know About Climate Transition",
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
