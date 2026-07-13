export type InsightCategory =
  | "Climate Risk"
  | "Enterprise Risk"
  | "Insurance Innovation"
  | "Technology Risk"
  | "Insurance Capital"
  | "ESG"
  | "Governance"
  | "Regulation";

export interface InsightSection {
  type: "paragraph" | "heading" | "pullquote" | "list";
  text?: string;
  items?: string[];
}

export interface Insight {
  id: string;
  title: string;
  summary: string;
  category: InsightCategory;
  readingTime: string;
  date: string;
  status: "draft" | "published";
  slug: string;
  body: InsightSection[];
}

export const insights: Insight[] = [
  {
    id: "1",
    title: "Climate Transition Is a Governance Issue Before It Is a Reporting Issue",
    summary:
      "Organisations are racing to improve their climate disclosures. The harder — and more consequential — work is in governance: who owns the risk, how it connects to strategy, and what your board must be willing to actually ask.",
    category: "Climate Risk",
    readingTime: "6 min read",
    date: "July 2025",
    status: "published",
    slug: "climate-transition-governance",
    body: [
      {
        type: "paragraph",
        text: "Every week I see another organisation announce its climate disclosure framework, appoint a sustainability officer, or commit to a net-zero target. These are not bad things. But they are frequently mistaken for the hard work — and the hard work is something different.",
      },
      {
        type: "paragraph",
        text: "The hard work is governance. It is the question of who in your organisation actually owns the climate risk — not on a reporting chart, but in a way that changes what decisions get made and by whom. It is whether your board has the information it needs to ask difficult questions of management, and whether management is genuinely empowered to bring uncomfortable answers.",
      },
      {
        type: "heading",
        text: "Disclosure is the output, not the outcome",
      },
      {
        type: "paragraph",
        text: "When I work with boards on climate risk, I start by asking a simple question: if your organisation's largest physical asset became uninsurable in the next five years due to climate-related conditions, who would know about that risk today, and how would it reach your board? In most cases the answer reveals a gap — not between intention and disclosure, but between disclosure and governance.",
      },
      {
        type: "paragraph",
        text: "TCFD, ISSB, MAS guidelines — these frameworks have done an important job of creating a common language for climate risk reporting. But language is not the same as ownership. I have reviewed reporting that is technically compliant and substantively hollow — disclosure that describes risk categories without assigning accountability, sets targets without connecting them to capital decisions, and reassures readers without informing them.",
      },
      {
        type: "pullquote",
        text: "Disclosure describes what you know. Governance determines what you do with it. Most organisations have invested far more in the former.",
      },
      {
        type: "heading",
        text: "Three questions every board should be asking",
      },
      {
        type: "paragraph",
        text: "In my experience advising boards across Asia, effective climate governance comes down to three questions that are harder to answer than they appear.",
      },
      {
        type: "list",
        items: [
          "Who owns the physical and transition risks in our portfolio, and does that ownership connect to our capital allocation decisions?",
          "What is our exposure to regulatory change — carbon pricing, mandatory disclosure, liability — in each market we operate in, and over what time horizon?",
          "What assumptions are embedded in our current strategy that climate developments could invalidate, and when would we know they were wrong?",
        ],
      },
      {
        type: "paragraph",
        text: "These questions are not answered by a disclosure report. They require the risk function, the finance function and the board to be working from the same information — and they require your board to be willing to sit with uncertainty rather than demand false precision.",
      },
      {
        type: "heading",
        text: "The talent gap nobody talks about",
      },
      {
        type: "paragraph",
        text: "One thing I consistently encounter is a talent mismatch. The people who understand climate science well enough to model transition scenarios are often not the same people who understand how to connect those scenarios to a board's existing risk framework. And the people who run those risk frameworks often lack the climate expertise to challenge the models they are being given.",
      },
      {
        type: "paragraph",
        text: "This is not a gap you solve with a hire. It requires deliberate investment in building shared fluency across your risk, finance and sustainability teams — and it requires your board to develop enough literacy to ask the right questions of the people presenting to them.",
      },
      {
        type: "heading",
        text: "What I recommend",
      },
      {
        type: "paragraph",
        text: "Start with accountability, not disclosure. Map your material climate risks — physical, transition, and liability — and assign clear ownership to named individuals with the authority to act. Connect those risks to your capital planning cycle, not just your reporting calendar. And ask your board, honestly, whether it has the expertise and information it needs to govern this risk — or whether it is simply receiving it.",
      },
      {
        type: "paragraph",
        text: "Climate transition is one of the defining risk management challenges of the next two decades. The organisations that navigate it well will not be the ones with the most sophisticated disclosure. They will be the ones that treated it as a governance problem first.",
      },
    ],
  },
  {
    id: "2",
    title: "Risk Appetite Should Guide Decisions, Not Decorate a Policy Document",
    summary:
      "Risk appetite statements are everywhere. Frameworks that genuinely influence how an organisation makes choices are far rarer. The difference is not technical — it is about whether leadership is willing to be constrained by it.",
    category: "Enterprise Risk",
    readingTime: "5 min read",
    date: "June 2025",
    status: "published",
    slug: "risk-appetite-decisions",
    body: [
      {
        type: "paragraph",
        text: "I have read hundreds of risk appetite statements. Most of them are well-constructed, clearly articulated, and entirely disconnected from how the organisation actually makes decisions. That is not a documentation problem. It is a leadership problem.",
      },
      {
        type: "paragraph",
        text: "Risk appetite — the amount and type of risk an organisation is willing to accept in pursuit of its objectives — should be the anchor for strategic decisions. It should be the framework that a CFO invokes when evaluating a capital allocation, that an underwriter references when pricing a risk, that a board director reaches for when a management proposal tests the boundaries of what the organisation has said it stands for. In practice, most risk appetite frameworks sit behind the enterprise risk policy and are referenced at half-yearly risk committee meetings.",
      },
      {
        type: "heading",
        text: "Why frameworks fail",
      },
      {
        type: "paragraph",
        text: "In my years as a statutory CRO, I saw this pattern consistently. A risk appetite framework gets developed — usually with significant effort from the risk function, real engagement from the CFO, genuine sign-off from the board. It is well-designed. It identifies the right categories of risk. It sets sensible thresholds. And then nothing changes.",
      },
      {
        type: "paragraph",
        text: "The failure is almost never in the framework itself. It is in three things: the framework is not embedded in decision-making processes; management is not held to account when risk appetite boundaries are approached or breached; and the board is not asking the right questions in the right forums.",
      },
      {
        type: "pullquote",
        text: "A risk appetite statement that does not constrain a single decision in the year it was approved has no appetite in it at all.",
      },
      {
        type: "heading",
        text: "What embedding actually looks like",
      },
      {
        type: "paragraph",
        text: "Embedding risk appetite is not about putting it in a dashboard. It is about connecting it to the moments where decisions are actually made — capital committee papers, product approval processes, M&A due diligence, strategic planning cycles.",
      },
      {
        type: "paragraph",
        text: "At AIG Asia Pacific, we worked hard to move risk appetite from a document that informed the annual report to a framework that shaped how businesses submitted capital requests. That required two things: a clear articulation of appetite in terms that business units could actually use, and consistent challenge from the risk function when proposals pushed against the stated boundaries. The second part is the harder one — it requires the CRO to be willing to slow things down, and it requires the CEO and board to support that when it happens.",
      },
      {
        type: "heading",
        text: "The board's role",
      },
      {
        type: "paragraph",
        text: "Boards set risk appetite. But in my experience, too few boards follow up on whether that appetite is actually operating as intended. The question to ask is not 'Are we within appetite?' — management will almost always say yes. The question is: 'Show me a decision made in the last six months where the risk appetite framework caused us to do something differently than we otherwise would have.'",
      },
      {
        type: "paragraph",
        text: "If the answer is silence, the framework is decorative. A functioning risk appetite framework should be producing real friction — decisions slowed down, proposals modified, strategies adjusted because the organisation has made a commitment to itself about the kind of risk it is willing to carry.",
      },
      {
        type: "heading",
        text: "A practical starting point",
      },
      {
        type: "list",
        items: [
          "Translate your risk appetite into decision-relevant language for each business function — not just risk categories, but thresholds they can actually apply",
          "Connect it explicitly to your capital allocation, underwriting guidelines and product development process",
          "Build a reporting cadence that shows the board where the organisation is sitting relative to appetite — not just whether it is within limits, but how the trend is moving",
          "Require management to cite risk appetite in board papers where it is relevant, and challenge when it is absent",
        ],
      },
      {
        type: "paragraph",
        text: "Risk appetite is not a compliance exercise. When it works, it is the mechanism by which a board's risk judgement travels through the organisation and shapes the decisions being made three layers down. That is worth building properly.",
      },
    ],
  },
  {
    id: "3",
    title: "What the Next Generation Expects From Insurance",
    summary:
      "Younger customers are not simply less loyal — they hold fundamentally different expectations about value, digital experience and social purpose. The organisations that understand this early will carry a structural advantage.",
    category: "Insurance Innovation",
    readingTime: "7 min read",
    date: "May 2025",
    status: "published",
    slug: "next-generation-insurance",
    body: [
      {
        type: "paragraph",
        text: "When I was building digital insurance programmes across eight ASEAN markets at Grab, I spent a lot of time thinking about what insurance looks like to someone who has never bought a paper policy, spoken to a broker, or visited a bank branch. For a significant portion of Southeast Asia's population — particularly the young, urban, mobile-first demographic — that is the reality. And what they expect from insurance is genuinely different from what the industry has spent a century building.",
      },
      {
        type: "paragraph",
        text: "This is not simply a distribution problem. It is not solved by building a better app or reducing the number of clicks in a purchase journey, though both of those things matter. It is a fundamental question about what insurance is for — what value it delivers, how it relates to the rest of someone's financial and digital life, and what the organisation behind it stands for.",
      },
      {
        type: "heading",
        text: "The expectation gap",
      },
      {
        type: "paragraph",
        text: "Traditional insurance propositions are built around a transaction: you pay a premium, something bad happens, you make a claim. The value is largely invisible until the moment of loss. For a generation that expects services to be useful, personalised and engaged on a near-daily basis — because their bank, their food delivery, their transport app all operate that way — a product that disappears for eleven months and reappears only when something goes wrong is genuinely strange.",
      },
      {
        type: "paragraph",
        text: "At Grab, we were integrating insurance into a daily-use platform. Customers were interacting with the Grab app multiple times a week — sometimes multiple times a day. That context forced us to think about how insurance fits into an ongoing relationship rather than an annual transaction. It is a very different design problem.",
      },
      {
        type: "pullquote",
        text: "The question is not how to sell insurance to a younger customer. It is what insurance should be for a customer who has grown up in a world where every service is digital, personalised and present.",
      },
      {
        type: "heading",
        text: "Three things that actually matter",
      },
      {
        type: "paragraph",
        text: "From what I observed across ASEAN markets, three things consistently differentiated experiences that resonated from those that did not.",
      },
      {
        type: "list",
        items: [
          "Transparency about value. What am I actually covered for? What will happen if I claim? What am I paying for? The generation that grew up comparing products online will not accept opacity in a financial product.",
          "Relevance and context. Coverage that adapts to circumstance — trip-based motor cover, on-demand health products, micro-insurance tied to specific activities — fits a life that does not conform to annual policy cycles.",
          "Social purpose alignment. This one surprised some incumbents. A meaningful proportion of younger customers care about what the organisation behind the product does and stands for — not superficially, but substantively. Greenwashing is noticed.",
        ],
      },
      {
        type: "heading",
        text: "The distribution shift",
      },
      {
        type: "paragraph",
        text: "Insurance has always been sold through relationships — agents, brokers, bancassurance partnerships. Those channels are not going away. But the role of embedded distribution — insurance offered at the point of relevance within a platform, app or service the customer is already using — is growing fast, and it changes the economics and the dynamics of the product fundamentally.",
      },
      {
        type: "paragraph",
        text: "When a customer buys trip insurance while booking a ride, they are not in an insurance-buying mindset. The product has to be simple enough to work in that moment, valuable enough to feel worth it, and trusted enough that the brand behind it does not create friction. That is a different product design challenge from a traditional policy.",
      },
      {
        type: "heading",
        text: "What incumbents should do",
      },
      {
        type: "paragraph",
        text: "The organisations that will win in this market over the next decade are those that are genuinely rethinking product design, not just distribution. That means shorter-term products with clear, understandable coverage. It means using data to personalise risk assessment and pricing in ways that feel fair rather than opaque. It means building relationships during the policy period, not just at renewal.",
      },
      {
        type: "paragraph",
        text: "It also means being honest about what you cannot do well as a traditional insurer, and where partnership — with platforms, with fintechs, with ecosystem players — creates more value than going alone. The organisations I have seen struggle most are those that are digitising their existing product and distribution model rather than rethinking it.",
      },
    ],
  },
  {
    id: "4",
    title: "AI in Insurance: Where Efficiency Ends and Governance Begins",
    summary:
      "AI adoption in insurance is accelerating. The governance frameworks needed to manage it are not keeping pace. That gap is not a technology problem — it is a leadership problem. And it is where risk quietly accumulates.",
    category: "Technology Risk",
    readingTime: "8 min read",
    date: "April 2025",
    status: "published",
    slug: "ai-insurance-governance",
    body: [
      {
        type: "paragraph",
        text: "Insurance has always been a data business. Underwriting is the art of pricing uncertainty from incomplete information. Claims management is the discipline of separating genuine loss from fraudulent claim with limited visibility. Distribution is the challenge of matching the right product to the right customer before they understand they need it. AI is not entering a sector that is unfamiliar with analytical discipline — it is entering one that has been building models for longer than the word 'algorithm' became fashionable.",
      },
      {
        type: "paragraph",
        text: "And yet the governance challenge is real, and it is not well managed. The speed at which AI capabilities are being integrated into underwriting, claims, fraud detection and customer service is outpacing the speed at which risk frameworks, board oversight and regulatory expectations are developing. That gap is where risk accumulates.",
      },
      {
        type: "heading",
        text: "The governance gap is a leadership gap",
      },
      {
        type: "paragraph",
        text: "When I describe this as a leadership problem, I mean something specific. The absence of adequate AI governance in most insurance organisations is not primarily a failure of the technology team or the data science function. It is a failure of senior leadership and boards to ask the right questions at the right time — and to demand accountability for the answers.",
      },
      {
        type: "paragraph",
        text: "What models are we using to make underwriting decisions, and who has accountability for their outputs? What happens when a model produces a decision that a customer or regulator challenges — who in this organisation can explain it, and to what standard? What are the failure modes we have stress-tested for, and what is our remediation plan? These are governance questions, not technology questions. And they are frequently not being asked at board level.",
      },
      {
        type: "pullquote",
        text: "If your board cannot describe the AI risk it is carrying in the same terms it describes credit risk or concentration risk, you have a governance gap — regardless of how sophisticated your models are.",
      },
      {
        type: "heading",
        text: "Three areas where risk is accumulating",
      },
      {
        type: "list",
        items: [
          "Model dependency and brittleness. As organisations lean harder on AI-driven underwriting and claims decisions, the failure risk of those models — and the difficulty of identifying and correcting a systematic error — increases. A poorly calibrated fraud detection model, for example, can systematically disadvantage a segment of policyholders before anyone notices.",
          "Regulatory and liability exposure. Regulators across Asia are developing frameworks for algorithmic accountability in financial services. Organisations that cannot explain their AI-driven decisions to a regulator, or to a policyholder who has had a claim declined, are exposed — regardless of whether the underlying decision was technically correct.",
          "Third-party model risk. Many insurers are integrating models built or maintained by third parties — vendors, reinsurers, data providers. The governance obligations do not travel with the vendor relationship. The accountability stays with the insurer.",
        ],
      },
      {
        type: "heading",
        text: "What effective AI governance looks like",
      },
      {
        type: "paragraph",
        text: "Effective AI governance in insurance is not about slowing down AI adoption. The efficiency gains in fraud detection, claims processing and underwriting automation are real and significant. It is about building the oversight and accountability structures that allow you to move fast with confidence rather than fast with exposure.",
      },
      {
        type: "paragraph",
        text: "At minimum, this means an AI model inventory that is known to your risk function — not just your data science team. It means explainability standards that are defined before models go into production, not after they are challenged. It means a model validation function that has independence from the teams building the models. And it means board reporting that gives directors meaningful visibility into the AI risk the organisation is carrying.",
      },
      {
        type: "paragraph",
        text: "The organisations that get this right will find that good governance accelerates AI adoption rather than constraining it. When your risk framework is clear, your validation process is efficient and your board is informed, you can move from concept to production faster because you are not working around uncertainty about what is permissible. Good governance is a competitive advantage, not a brake.",
      },
      {
        type: "heading",
        text: "A question for boards",
      },
      {
        type: "paragraph",
        text: "If you sit on a board of an insurance organisation, I would encourage you to ask for a briefing on the three most consequential AI models currently in production — what they do, how they are validated, what the failure scenario looks like, and who is accountable. The answers will tell you a great deal about the maturity of your AI governance. And the question itself will send a signal that this is an area where the board expects to be informed.",
      },
    ],
  },
  {
    id: "5",
    title: "Why Capital Strategy Belongs in the Boardroom",
    summary:
      "In every CRO role I have held, capital was the conversation that shaped everything else — growth, reinsurance, product decisions, strategic resilience. It should not be confined to the actuarial function. It belongs at the highest level of governance.",
    category: "Insurance Capital",
    readingTime: "6 min read",
    date: "March 2025",
    status: "published",
    slug: "capital-strategy-boardroom",
    body: [
      {
        type: "paragraph",
        text: "Capital is the most fundamental constraint in insurance. It determines what risks you can write, what markets you can enter, what losses you can absorb, and how much flexibility you have when circumstances change. And yet in many insurance organisations, capital management is treated as a technical discipline — something managed by the actuarial function, reported to the finance committee, and engaged with by the board primarily at the point of regulatory submission.",
      },
      {
        type: "paragraph",
        text: "That is a mistake. Not because actuaries and finance teams are doing their jobs poorly, but because capital decisions are strategic decisions — and strategic decisions belong in conversations where the full commercial, regulatory and competitive context is present. That is the board.",
      },
      {
        type: "heading",
        text: "What capital conversations actually decide",
      },
      {
        type: "paragraph",
        text: "When I was CRO at AIG Asia Pacific, capital sat at the centre of every significant commercial decision. Whether we could pursue a specific growth opportunity in a particular market, how aggressively we could underwrite in a cycle, what our reinsurance programme needed to look like, how we structured dividend payments to the parent — all of these were capital conversations before they were anything else.",
      },
      {
        type: "paragraph",
        text: "The organisations that managed capital well were those where the commercial leadership understood the capital implications of their decisions and the capital function understood the commercial context for its recommendations. When those two groups were operating separately — when the actuarial team was producing ORSA outputs that the commercial team did not engage with, or when commercial teams were making growth commitments without understanding their capital cost — the consequences ranged from inefficiency to genuine instability.",
      },
      {
        type: "pullquote",
        text: "Capital is not a number you report to the regulator. It is the foundation of every strategic choice your organisation makes. Boards that understand this govern differently.",
      },
      {
        type: "heading",
        text: "What boards need to understand",
      },
      {
        type: "paragraph",
        text: "I am not suggesting that board directors need to become actuaries. But they do need enough fluency to ask the right questions — and to recognise when they are not getting clear answers.",
      },
      {
        type: "list",
        items: [
          "What is our current capital position relative to our regulatory minimum, our internal target and our strategic ambition — and which of those three is actually binding our decisions right now?",
          "What are the scenarios under which our capital position deteriorates significantly, and what is the lead time for management to respond?",
          "How does our capital strategy connect to our reinsurance programme, and are we buying the right protection for the risks we actually carry?",
          "What is the capital cost of our strategic plan, and does the board understand what we are committing to fund?",
        ],
      },
      {
        type: "heading",
        text: "The ORSA opportunity",
      },
      {
        type: "paragraph",
        text: "The Own Risk and Solvency Assessment — required under regulatory frameworks across Asia — is one of the most important governance documents an insurance organisation produces. It is also one of the most underused at board level. In too many organisations, the ORSA is produced for the regulator and summarised for the board in a way that strips out the strategic content and leaves only the compliance conclusion.",
      },
      {
        type: "paragraph",
        text: "An ORSA done well should be one of the most strategically useful documents the board reviews. It should show the board, in stress-tested terms, what happens to the organisation's capital position under the scenarios most relevant to its business — and it should connect that analysis to the strategic decisions the board is being asked to make. That is the conversation I encourage boards to demand.",
      },
      {
        type: "paragraph",
        text: "Capital strategy is not a finance function deliverable. It is a board-level conversation that happens to be technically complex. The organisations that treat it that way — that invest in building board-level capital literacy and demand that the connection between capital and strategy is made explicit — are better positioned to allocate capital wisely, to respond to stress intelligently, and to grow sustainably. That is what good governance of capital looks like.",
      },
    ],
  },
  {
    id: "6",
    title: "ESG Compliance Is Not the Same as Organisational Readiness",
    summary:
      "Meeting disclosure requirements and being genuinely prepared to manage ESG risks are very different states. Many companies are achieving the first while quietly deferring the second. That gap will close — on someone else's timeline.",
    category: "ESG",
    readingTime: "5 min read",
    date: "February 2025",
    status: "published",
    slug: "esg-compliance-readiness",
    body: [
      {
        type: "paragraph",
        text: "There is a version of ESG that organisations are getting quite good at. They are producing sustainability reports. They are disclosing Scope 1 and 2 emissions. They are appointing ESG committees and publishing diversity targets. They are meeting the reporting requirements that regulators, investors and lenders are increasingly mandating. That is compliance, and compliance is not nothing — it signals seriousness and creates accountability.",
      },
      {
        type: "paragraph",
        text: "But there is a different question — a harder one — that compliance does not answer: Is your organisation actually prepared to manage ESG risks as they materialise? Is climate physical risk embedded in your capital planning? Are supply chain labour risks visible in your procurement process? Is your governance framework capable of handling the liability questions that are beginning to move through courts in multiple jurisdictions? That is readiness. And most organisations are significantly further along on the compliance journey than the readiness journey.",
      },
      {
        type: "heading",
        text: "Why the gap exists",
      },
      {
        type: "paragraph",
        text: "The gap exists for understandable reasons. Compliance has a clear deliverable — a report, a disclosure, a rating. Readiness is harder to define and harder to measure. Compliance has a deadline — a regulatory requirement, an investor expectation, a reporting period. Readiness does not come with a deadline until the moment a risk materialises and you discover you were not prepared for it.",
      },
      {
        type: "paragraph",
        text: "And compliance, in many organisations, is owned by a dedicated function — sustainability, legal, investor relations — that has the skills and the mandate to produce the required outputs. Readiness requires the risk function, the finance function, the operations function and the board to understand what ESG risks mean for how the organisation operates. That requires broader organisational change.",
      },
      {
        type: "pullquote",
        text: "Compliance tells stakeholders what you are measuring. Readiness determines whether you will respond effectively when those measurements become decisions.",
      },
      {
        type: "heading",
        text: "What readiness actually requires",
      },
      {
        type: "paragraph",
        text: "I think about ESG readiness across three dimensions, based on what I see in the organisations I advise.",
      },
      {
        type: "list",
        items: [
          "Risk integration. ESG risks — climate physical, transition, social and governance risks — need to be visible inside the enterprise risk framework, not alongside it. That means they appear in risk registers, are stress-tested against capital, and have named owners with authority to act.",
          "Decision relevance. ESG considerations need to show up in actual decisions — capital allocation, M&A due diligence, supplier selection, product design — not just in reporting. If your sustainability report is not informing your investment committee, the work is not embedded.",
          "Board capability. Directors need the literacy to ask meaningful questions about ESG risk, to challenge management on the adequacy of the organisation's response, and to understand where their personal fiduciary obligations are now touching ESG territory. That requires deliberate investment in board education.",
        ],
      },
      {
        type: "heading",
        text: "The timeline question",
      },
      {
        type: "paragraph",
        text: "The reason I phrase this as a gap that will close on someone else's timeline is because that is precisely what I observe. The regulatory requirements on ESG disclosure and risk management are tightening — MAS guidelines in Singapore, HKMA requirements, ASEAN taxonomy developments, global ISSB standards. The liability questions — who is responsible when an organisation's climate risk disclosure turns out to be materially misleading — are moving through legal systems. The physical risks — rising insurance costs, asset impairments, supply chain disruptions — are arriving ahead of schedule.",
      },
      {
        type: "paragraph",
        text: "None of those timelines are controlled by the organisation. Compliance gives you some protection — it shows you were paying attention. But readiness is what determines whether you respond well when the moment arrives. I would rather help organisations build the second than produce the first alone.",
      },
    ],
  },
];
