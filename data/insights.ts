export type InsightCategory =
  | "Climate Risk"
  | "Enterprise Risk"
  | "Insurance Innovation"
  | "Technology Risk"
  | "Insurance Capital"
  | "ESG"
  | "Governance"
  | "Regulation"
  | "Board Advisory"
  | "Actuarial";

export interface InsightSection {
  type: "paragraph" | "heading" | "pullquote" | "list";
  text?: string;
  items?: string[];
}

export interface InsightFAQ {
  question: string;
  answer: string;
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
  faqs?: InsightFAQ[];
  keywords?: string[];
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
  // ── New keyword-targeted posts ──────────────────────────────────────────────
  {
    id: "7",
    title: "What an Actuarial Board Adviser Actually Does — and Why Singapore Boards Need One",
    summary:
      "Most boards understand they need financial and legal expertise around the table. Far fewer have thought carefully about actuarial oversight — and in an environment of mandatory ESG disclosure, rising catastrophe exposure and capital reform, that gap is becoming expensive.",
    category: "Board Advisory",
    readingTime: "7 min read",
    date: "August 2026",
    status: "published",
    slug: "actuarial-board-adviser-singapore",
    keywords: ["actuarial board advisor Singapore", "board adviser actuarial Singapore", "CRO advisory Singapore"],
    body: [
      {
        type: "paragraph",
        text: "There is a standard template for board composition in Singapore. A company secretary with corporate governance credentials. An independent director with financial expertise — usually an accountant or banker. A legal representative if the business carries significant contract or regulatory exposure. A commercial operator who has run a P&L. Those are the boxes that most SGX-listed boards and MAS-regulated entities try to fill.",
      },
      {
        type: "paragraph",
        text: "What is consistently missing — and what I see causing real governance failures across insurance, financial services and increasingly across listed corporates — is actuarial oversight. Not necessarily an actuary on the board itself, though that has value. More precisely: board-level access to someone who can translate quantitative risk into governance language, stress-test the assumptions embedded in financial reporting, and challenge management on the adequacy of capital and reserving decisions.",
      },
      {
        type: "heading",
        text: "What actuarial oversight means in practice",
      },
      {
        type: "paragraph",
        text: "I have spent two decades in and around actuarial functions — as a practitioner, as a CRO with statutory responsibility for actuarial oversight, and now as a board adviser. The value I bring to a board is not the ability to build models. It is the ability to look at a set of financial assumptions and understand what they are actually saying — and what they are not saying.",
      },
      {
        type: "list",
        items: [
          "Are the discount rate assumptions embedded in your pension or insurance liabilities realistic, or are they carrying optimism that will eventually need to be corrected?",
          "What does your reinsurance programme actually protect against, and what scenarios leave you exposed above that protection?",
          "Are your climate transition assumptions — in your capital planning, your underwriting strategy, your asset allocation — stress-tested against physical scenarios that are now MAS-reportable?",
          "What is the actuarial basis for your dividend proposal, and does the board understand the capital margin it is consuming?",
        ],
      },
      {
        type: "pullquote",
        text: "A board that cannot challenge the assumptions underneath its financial reporting is not governing the business — it is approving the presentation of it.",
      },
      {
        type: "heading",
        text: "Why this matters more in Singapore now",
      },
      {
        type: "paragraph",
        text: "The regulatory environment in Singapore is making actuarial literacy at board level increasingly consequential. MAS Notice 126 has raised the bar on climate risk governance for insurers. The ISSB sustainability disclosure standards, which MAS has signalled alignment with, require boards to understand and take responsibility for climate-related risk assumptions that have actuarial content. SGX mandatory climate reporting for listed companies from FY2025 means that what was previously a sustainability team's deliverable now requires board sign-off — and the assumptions behind it can be material.",
      },
      {
        type: "paragraph",
        text: "A board that treats these as compliance exercises — approve the report, move on — is carrying real liability exposure. A board that understands the actuarial content of what it is signing creates genuine governance value and, increasingly, competitive advantage.",
      },
      {
        type: "heading",
        text: "How I work with boards",
      },
      {
        type: "paragraph",
        text: "When I come into a board advisory engagement, I am not trying to replace the existing expertise around the table. I am providing a specific and currently underserved capability: the ability to sit with a board, look at what management is presenting in the risk, capital, and ESG domain, and help directors ask the questions that the standard governance template does not equip them to ask.",
      },
      {
        type: "paragraph",
        text: "That might be a standing NRC or risk committee advisory role. It might be a specific engagement around a capital transaction, a reinsurance restructuring, or the development of a climate risk governance framework. It might be board education — building the quantitative risk literacy that allows directors to interrogate management rather than simply receive it.",
      },
      {
        type: "paragraph",
        text: "If your board is heading into FY2026 carrying significant insurance, capital, climate or financial services exposure, it is worth asking whether the expertise you have around the table is sufficient to govern what is in front of you.",
      },
    ],
    faqs: [
      {
        question: "What does an actuarial board adviser do in Singapore?",
        answer: "An actuarial board adviser helps Singapore boards understand and challenge the quantitative risk, capital, and financial assumptions that management presents — including climate risk scenarios, reserving adequacy, reinsurance coverage, and ORSA outputs. This is distinct from a company actuary; the adviser operates at governance level rather than in the technical function.",
      },
      {
        question: "Which Singapore-listed companies need actuarial board advisory?",
        answer: "MAS-regulated insurers and reinsurers have the clearest need, but any SGX-listed company with significant insurance, pension, financial services, or climate-related capital exposure benefits from actuarial oversight at board level — particularly under the new mandatory sustainability reporting requirements from FY2025.",
      },
      {
        question: "Is Raymond Cheung a qualified actuary?",
        answer: "Yes. Raymond Cheung is a Chartered Actuary with over 24 years of practice, including statutory CRO roles at AIG Asia Pacific and Basel Medical Group where he held legal responsibility for actuarial oversight.",
      },
    ],
  },
  {
    id: "8",
    title: "Five Questions Every SGX Audit Committee Should Be Asking the CRO Right Now",
    summary:
      "Audit committees in Singapore are facing a governance environment that is changing faster than most risk frameworks. These are the questions that reveal whether your risk function is fit for what is actually in front of you.",
    category: "Governance",
    readingTime: "6 min read",
    date: "August 2026",
    status: "published",
    slug: "sgx-audit-committee-cro-questions",
    keywords: ["SGX board director advisory", "corporate governance Singapore", "risk governance Singapore boards"],
    body: [
      {
        type: "paragraph",
        text: "I spend a significant part of my advisory practice working with audit committees — helping them understand what they should be asking, how to interpret what they are being told, and where the gaps between the presentation and the reality tend to sit. What I find consistently is that the standard audit committee agenda — financial reporting, internal controls, external audit, compliance — has not kept pace with the risk environment that Singapore-listed companies are now operating in.",
      },
      {
        type: "paragraph",
        text: "Climate risk is now financially material and must be disclosed. AI and algorithmic decision-making are moving into core business processes. Geopolitical fragmentation is reshaping supply chains and counterparty exposure. Regulatory expectations on ESG, data governance and operational resilience are tightening across Singapore, Hong Kong and the ASEAN region simultaneously.",
      },
      {
        type: "paragraph",
        text: "Against that backdrop, here are the five questions I believe every SGX audit committee should be putting to the CRO — and what the answers should sound like.",
      },
      {
        type: "heading",
        text: "1. What is the most material risk we are carrying that is not in our current risk register?",
      },
      {
        type: "paragraph",
        text: "This question is more useful than asking whether the risk register is complete, because a competent risk function knows where its blind spots are. If the CRO cannot answer it — or answers with excessive confidence that everything material is captured — that tells you something important about the quality of the risk identification process.",
      },
      {
        type: "heading",
        text: "2. Which of our top-ten risks has the weakest mitigant, and what would make it adequate?",
      },
      {
        type: "paragraph",
        text: "Most risk presentations focus on what controls are in place. This question forces the conversation onto adequacy — whether the control is actually sufficient for the severity and likelihood of the risk, and what gap remains. It produces a much more useful conversation than the standard red-amber-green heat map.",
      },
      {
        type: "heading",
        text: "3. How has our risk profile changed in the last twelve months — and why?",
      },
      {
        type: "paragraph",
        text: "Risk reporting that does not explain change is not governance information — it is a status update. The audit committee should understand whether risks are moving because the external environment has changed, because management has made decisions that altered the profile, or because the risk assessment methodology has been adjusted. These are very different things.",
      },
      {
        type: "heading",
        text: "4. Where is our climate risk currently sitting in the enterprise risk framework — and is that appropriate?",
      },
      {
        type: "paragraph",
        text: "From FY2025, SGX-listed companies with a market cap above the threshold must disclose climate-related risks under the mandatory requirements. The question is not whether you are disclosing — it is whether the risk governance matches the disclosure. Climate risk that lives only in the sustainability report, and has not been integrated into the ERM framework, capital planning, or board reporting, is a governance gap with increasing liability implications.",
      },
      {
        type: "heading",
        text: "5. Show me a decision made in the last six months where the risk function caused management to do something differently.",
      },
      {
        type: "paragraph",
        text: "This is the question that separates a functioning risk function from a reporting function. If the CRO cannot name a specific example — a decision slowed, a proposal modified, a strategy adjusted because of risk challenge — then the risk function is producing paper rather than governance value. That is an important finding for an audit committee to hold.",
      },
      {
        type: "pullquote",
        text: "An audit committee that only asks whether risks are within limits is not governing risk. It is confirming that management says so.",
      },
      {
        type: "paragraph",
        text: "These questions are not adversarial. They are the questions that allow a board to govern with confidence rather than assurance. A CRO who can answer them clearly — with evidence, with appropriate uncertainty, with a view on what the board should worry about that management may be underweighting — is providing genuine value. If the answers are vague, deferential or focused on compliance outputs, the audit committee has something to address.",
      },
    ],
    faqs: [
      {
        question: "What should an SGX audit committee ask the CRO about climate risk?",
        answer: "The audit committee should ask whether climate risk is integrated into the enterprise risk framework (not just the sustainability report), what climate scenarios have been stress-tested against capital, and which physical and transition risks are currently material to the business.",
      },
      {
        question: "How often should an SGX board review the risk register?",
        answer: "Best practice is quarterly review at the risk committee level, with material changes reported to the full board. However, the frequency matters less than the quality of the review — whether the board is challenging assumptions, asking about emerging risks, and receiving information in governance terms rather than technical terms.",
      },
    ],
  },
  {
    id: "9",
    title: "ESG Governance Training for Singapore Boards: What Directors Actually Need to Know",
    summary:
      "With mandatory sustainability reporting now in force for SGX-listed companies and MAS guidelines tightening for financial institutions, board directors need more than awareness — they need working fluency. Here is what that looks like in practice.",
    category: "ESG",
    readingTime: "8 min read",
    date: "September 2026",
    status: "published",
    slug: "esg-governance-training-singapore-boards",
    keywords: ["ESG governance training Singapore", "ESG advisor Singapore", "ESG board director Singapore"],
    body: [
      {
        type: "paragraph",
        text: "Singapore entered a new phase of ESG governance in 2025. Mandatory climate-related disclosures under the TCFD framework are now required for all SGX Mainboard issuers with market capitalisation above S$1 billion, with smaller companies following on a phased schedule. MAS has embedded environmental risk management expectations into supervisory guidance for banks, insurers, and asset managers. The ISSB standards — IFRS S1 and S2 — are being adopted progressively across the region.",
      },
      {
        type: "paragraph",
        text: "What this means for board directors is that ESG is no longer a topic that can be left to a sustainability committee or a CSR team. Directors are now signing off on climate disclosures that contain forward-looking assumptions, scenario analyses, and judgements about material risk — all of which carry potential liability exposure if they are materially misleading. That requires a level of board literacy that most director development programmes have not kept pace with.",
      },
      {
        type: "heading",
        text: "What working fluency looks like",
      },
      {
        type: "paragraph",
        text: "I want to be precise about what I mean by fluency, because I am not describing a requirement for directors to become sustainability professionals. What I am describing is the ability to:",
      },
      {
        type: "list",
        items: [
          "Understand the difference between Scope 1, 2 and 3 emissions and why Scope 3 (required from FY2026) is both the most material and the most difficult to measure",
          "Interpret a climate scenario analysis and ask whether the scenarios are sufficiently severe and relevant to the company's actual business exposure",
          "Challenge a sustainability report's claims about targets — specifically whether the targets are connected to capital planning and operational decisions, or are aspirational statements without a funding mechanism",
          "Understand what physical risk means for a specific business — asset impairment, insurance costs, supply chain disruption — and whether management has a credible response",
          "Know when the company's ESG disclosure requires independent assurance and what level of assurance is appropriate for the risk",
        ],
      },
      {
        type: "pullquote",
        text: "Directors who sign sustainability disclosures without the fluency to challenge them are carrying liability exposure that most of them have not been told about.",
      },
      {
        type: "heading",
        text: "The Singapore regulatory context",
      },
      {
        type: "paragraph",
        text: "The MAS Guidelines on Environmental Risk Management set out expectations that go well beyond disclosure. They require boards of MAS-regulated entities to understand environmental risks as financial risks — embedded in credit assessment, asset valuation, underwriting, and capital management. That is a governance requirement, not a reporting one.",
      },
      {
        type: "paragraph",
        text: "For directors of non-financial companies, the SGX sustainability reporting requirements now include board statements that carry the same weight as financial statements in terms of regulatory expectation. The question is not whether the sustainability team produced an adequate report. The question is whether the board can stand behind its content.",
      },
      {
        type: "heading",
        text: "What I cover in ESG board training",
      },
      {
        type: "paragraph",
        text: "When I deliver ESG governance training through SMU Academy and the Singapore College of Insurance, I focus on three modules that I have found directors find most practically useful.",
      },
      {
        type: "list",
        items: [
          "Understanding material ESG risks for your sector: physical, transition, and social risks translated into financial and governance terms",
          "Reading and challenging sustainability reports: what the disclosure is actually saying, what is missing, and what questions to put to management",
          "Director obligations under Singapore's ESG regulatory framework: MAS guidelines, SGX requirements, ISSB standards, and where personal fiduciary duty touches ESG decisions",
        ],
      },
      {
        type: "paragraph",
        text: "Directors who have gone through this training consistently report that they feel more confident engaging with management on ESG matters — not because they know more than the sustainability team, but because they know enough to ask better questions. That is the governance value I am trying to produce.",
      },
      {
        type: "paragraph",
        text: "If your board is approaching its next sustainability disclosure cycle without that confidence, it is worth addressing before the disclosure is signed rather than after it is published.",
      },
    ],
    faqs: [
      {
        question: "What ESG training do Singapore board directors need?",
        answer: "Singapore board directors need training that covers the regulatory requirements (SGX mandatory sustainability reporting, MAS environmental risk guidelines), how to read and challenge climate scenario analysis and sustainability reports, and the personal fiduciary obligations that now attach to ESG disclosures under Singapore law.",
      },
      {
        question: "Is ESG reporting mandatory for SGX-listed companies in Singapore?",
        answer: "Yes. From FY2025, all SGX Mainboard-listed companies must disclose climate-related information under a TCFD-aligned framework. The requirements are phased by market capitalisation, with larger companies leading. Scope 3 emissions disclosure is required from FY2026.",
      },
      {
        question: "Where can Singapore board directors get ESG governance training?",
        answer: "Raymond Cheung delivers ESG governance training through SMU Academy and the Singapore College of Insurance, tailored for board directors and C-suite executives. Training covers the Singapore regulatory framework, board obligations, and how to govern ESG risk effectively.",
      },
    ],
  },
  {
    id: "10",
    title: "Climate Risk Is a Board Responsibility in Singapore — Here Is What That Means Operationally",
    summary:
      "Singapore boards are now legally accountable for climate risk disclosure. The operational question — how to build the governance structures that make that accountability real rather than nominal — is where most organisations are still working it out.",
    category: "Climate Risk",
    readingTime: "7 min read",
    date: "September 2026",
    status: "published",
    slug: "climate-risk-board-director-singapore",
    keywords: ["climate risk board director Singapore", "climate risk governance Singapore", "MAS environmental risk Singapore"],
    body: [
      {
        type: "paragraph",
        text: "Singapore boards are now in a position that is, historically, quite unusual. They are being asked to take governance responsibility for a category of risk — climate — that is scientifically complex, financially uncertain, and structurally different from the risks that traditional governance frameworks were designed to manage. And they are being asked to do this under a regulatory and legal environment that is assigning real accountability for how that responsibility is exercised.",
      },
      {
        type: "paragraph",
        text: "I want to be specific about what that accountability means. Under MAS guidelines, boards of regulated financial institutions are expected to understand and oversee environmental risks as components of financial risk management — not as a separate sustainability exercise. Under SGX mandatory disclosure requirements, boards are signing off on climate-related disclosures that contain forward-looking statements and scenario analyses. Directors who sign off on material misstatements — or who cannot demonstrate that they exercised appropriate oversight — carry personal exposure.",
      },
      {
        type: "heading",
        text: "The governance gap most boards have",
      },
      {
        type: "paragraph",
        text: "The gap I see most consistently is not a lack of intent. Most Singapore boards I engage with understand that climate risk is serious and are genuinely trying to govern it well. The gap is structural: the information flow between the sustainability team and the board does not produce governance-grade intelligence. Boards receive sustainability reports rather than risk assessments. They receive targets rather than stress tests. They receive compliance statements rather than strategic analysis.",
      },
      {
        type: "paragraph",
        text: "The result is that boards are approving disclosures without the information architecture to challenge them — and that is precisely where the liability exposure sits.",
      },
      {
        type: "pullquote",
        text: "A board that receives a sustainability report for sign-off is not governing climate risk. It is ratifying a document produced by people who do not report to the board.",
      },
      {
        type: "heading",
        text: "What an effective climate governance structure looks like",
      },
      {
        type: "list",
        items: [
          "Board-level climate risk ownership: a named director or board committee with explicit responsibility for climate risk oversight — not just sustainability disclosure",
          "Integration with ERM: climate physical and transition risks appearing in the enterprise risk register with named owners, quantified exposures, and stress-tested mitigants",
          "Capital connection: climate risk scenarios stress-tested against the capital position, with outputs that inform strategic planning and investment decisions",
          "Independent challenge: access to independent actuarial or risk advisory input at board level, separate from the management team producing the analysis",
          "Regular board engagement: at least quarterly board-level review of climate risk developments — regulatory, physical, and financial — not just annual disclosure review",
        ],
      },
      {
        type: "heading",
        text: "The practical starting point",
      },
      {
        type: "paragraph",
        text: "For boards that are building this from a low base, the starting point is not a disclosure framework. It is a board education programme that builds sufficient climate risk literacy for directors to ask meaningful questions of management. That typically takes four to six hours of well-structured engagement — focused on the specific risk profile of the company's sector and geography, not a generic ESG overview.",
      },
      {
        type: "paragraph",
        text: "From there, the next step is a gap analysis of the current risk information architecture: what information the board is receiving, what it needs to receive to govern adequately, and how to close the gap without creating an unsustainable reporting burden on management.",
      },
      {
        type: "paragraph",
        text: "This is work that I do with boards directly — as an advisory engagement, not as a training programme. If your board is approaching its FY2026 climate disclosure cycle without that architecture in place, the time to address it is before the disclosure is signed.",
      },
    ],
    faqs: [
      {
        question: "What are Singapore boards required to do on climate risk?",
        answer: "SGX Mainboard-listed companies must disclose climate-related risks and opportunities under a TCFD-aligned framework, with board sign-off on material disclosures. MAS-regulated financial institutions have additional obligations under the Guidelines on Environmental Risk Management, requiring boards to integrate climate risk into their financial risk governance frameworks.",
      },
      {
        question: "What is MAS's expectation for boards on environmental risk?",
        answer: "MAS expects boards of regulated financial institutions to understand environmental risks as financial risks — not as a separate sustainability function. This means integrating physical and transition risk into credit, underwriting, investment, and capital management governance, with board-level oversight of the adequacy of risk management.",
      },
      {
        question: "Can a Singapore director be held liable for climate risk disclosures?",
        answer: "Directors who sign off on materially misleading climate disclosures face potential liability under securities law. As mandatory disclosure requirements tighten and the materiality of climate risk increases, board members without adequate climate risk literacy face both regulatory and legal exposure.",
      },
    ],
  },
  {
    id: "11",
    title: "CRO Advisory in Singapore: What Insurers and Financial Institutions Need Beyond a Chief Risk Officer",
    summary:
      "A statutory CRO manages risk within the organisation. CRO advisory brings independent perspective, regulatory credibility, and board-level risk literacy to the governance layer — and in Singapore's tightening MAS environment, that distinction is becoming critical.",
    category: "Enterprise Risk",
    readingTime: "6 min read",
    date: "September 2026",
    status: "published",
    slug: "cro-advisory-singapore-insurance",
    keywords: ["CRO advisory Singapore", "CRO advisory Singapore insurance", "risk governance Singapore"],
    body: [
      {
        type: "paragraph",
        text: "Singapore's insurance and financial services sector operates under one of the more demanding risk governance frameworks in Asia. MAS's supervisory expectations — on capital adequacy, model governance, climate risk, operational resilience, and conduct — have been tightening consistently since the post-2008 regulatory wave. For organisations navigating this environment, the internal CRO function is essential. But it is not always sufficient.",
      },
      {
        type: "paragraph",
        text: "I held statutory CRO roles at two MAS-regulated entities — AIG Asia Pacific and Basel Medical Group. In both roles, I was accountable to the board, to MAS, and to my colleagues for the adequacy of the risk framework. I know the mandate well. And what I know from that experience is that there are things the internal CRO cannot provide: independent perspective on whether the framework is adequate, experienced challenge on blind spots that internal teams have normalised, and board-level risk translation that does not carry the limitations of someone who is also managing the day-to-day risk function.",
      },
      {
        type: "heading",
        text: "What CRO advisory provides",
      },
      {
        type: "list",
        items: [
          "Independent review of the enterprise risk framework — whether it is adequate for the regulatory environment and the actual risk profile of the business",
          "Board-level risk translation — presenting complex risk information in governance terms that directors can interrogate and take responsibility for",
          "Regulatory preparation — helping organisations anticipate and prepare for MAS supervisory expectations, including thematic reviews and ORSA assessments",
          "Specialist input on actuarial risk, capital strategy, and climate risk integration — areas where the internal CRO may lack depth or independence",
          "Transition support — when an organisation is between CROs, facing a significant risk event, or restructuring its risk governance framework",
        ],
      },
      {
        type: "pullquote",
        text: "The internal CRO manages risk. An external risk adviser challenges whether risk is being managed adequately — and does so from a position of independence that the internal role cannot occupy.",
      },
      {
        type: "heading",
        text: "When Singapore insurers typically engage CRO advisory",
      },
      {
        type: "paragraph",
        text: "In my advisory practice, engagements tend to cluster around five situations: preparing for an MAS supervisory review; restructuring the risk governance framework following a significant event or leadership change; building out a new capability — climate risk, AI governance, ORSA — that requires specialist expertise the internal team does not have; providing ongoing board-level risk advisory alongside the internal CRO function; and situations where the internal risk function's independence is structurally compromised.",
      },
      {
        type: "paragraph",
        text: "In each of those situations, the value of an external CRO adviser is not in replacing the internal function — it is in providing the independent perspective and board-level credibility that the internal function cannot provide for itself.",
      },
      {
        type: "heading",
        text: "What to look for in a CRO adviser",
      },
      {
        type: "paragraph",
        text: "The key criteria are statutory experience — have they actually held the role, with real regulatory accountability, in a regulated entity? Do they understand MAS supervisory expectations from the inside rather than from a consulting framework? Do they have the actuarial or quantitative depth to engage with the technical content of risk governance, not just the structural layer? And can they operate at board level — presenting, challenging, and building governance capability — rather than producing deliverables for the risk function?",
      },
      {
        type: "paragraph",
        text: "These are the questions I would put to anyone considering this kind of engagement. They are also the questions I am happy to be tested against in any advisory conversation.",
      },
    ],
    faqs: [
      {
        question: "What is CRO advisory in Singapore?",
        answer: "CRO advisory provides independent risk governance expertise to boards and senior leadership of Singapore financial institutions — typically insurers, reinsurers, and MAS-regulated entities. It differs from an internal CRO role in that the adviser operates independently of the management team, providing external perspective and board-level risk translation.",
      },
      {
        question: "When should a Singapore insurer engage a CRO adviser?",
        answer: "Common triggers include MAS supervisory preparation, risk governance restructuring, building new capabilities (climate risk, AI governance, ORSA), CRO transitions, or when the board needs independent risk input that the internal function cannot provide.",
      },
      {
        question: "Is Raymond Cheung a qualified CRO adviser for MAS-regulated entities?",
        answer: "Yes. Raymond Cheung held statutory CRO roles at AIG Asia Pacific and Basel Medical Group, both MAS-regulated entities, with direct board and regulatory accountability. He now provides CRO advisory to Singapore boards and financial institutions through CER Consultancy.",
      },
    ],
  },
  {
    id: "12",
    title: "InsurTech in Asia: What Boards Need to Govern Digital Insurance Ventures",
    summary:
      "Digital insurance ventures in Asia are moving fast. The boards overseeing them often are not. Governance frameworks built for traditional insurance do not map cleanly onto platform-based, embedded, and AI-driven insurance models — and the gaps are consequential.",
    category: "Insurance Innovation",
    readingTime: "7 min read",
    date: "August 2026",
    status: "published",
    slug: "insurtech-board-adviser-asia",
    keywords: ["InsurTech board advisor Asia", "digital insurance governance Asia", "insurance innovation Singapore"],
    body: [
      {
        type: "paragraph",
        text: "Between 2016 and 2018, I led the digital insurance programme at Grab across eight ASEAN markets. We were building embedded insurance products into a super-app serving tens of millions of users — micro-insurance, on-demand motor products, health covers distributed at the point of a ride or food delivery order. The governance challenges were genuinely different from anything I had encountered in traditional insurance.",
      },
      {
        type: "paragraph",
        text: "Traditional insurance governance is built for slow cycles — annual underwriting reviews, quarterly board reporting, regulatory submissions that move at the pace of actuarial assessment. InsurTech operates at product cycles measured in weeks, customer data that changes the risk model in real time, and distribution partnerships that can alter the character of the book overnight. Boards that try to apply the traditional governance template to digital ventures create one of two failure modes: they slow the business to the point of non-competitiveness, or they rubber-stamp management without the tools to provide real oversight.",
      },
      {
        type: "heading",
        text: "The specific governance gaps in InsurTech",
      },
      {
        type: "list",
        items: [
          "Model velocity: AI-driven underwriting and pricing models can iterate faster than a traditional model validation cycle. Boards need a framework for approving model changes at the right level of oversight — not every change, but the changes that matter.",
          "Data governance: InsurTech businesses are using customer data in ways that traditional insurance regulation did not anticipate. PDPA compliance, cross-border data flows, and the use of behavioural data in underwriting all carry regulatory and reputational risk that boards need to be equipped to govern.",
          "Partner risk: Embedded insurance depends on platform partnerships. The distribution partner controls the customer relationship, the data, and the context in which the product is sold. Boards need to understand what governance travels with those partnerships and what stays with the insurer.",
          "Regulatory uncertainty: MAS, OJK, BSP, and other ASEAN regulators are developing InsurTech frameworks at different speeds. A board governing a multi-market digital insurance business needs visibility into the regulatory environment across all operating markets.",
        ],
      },
      {
        type: "pullquote",
        text: "An InsurTech board that meets quarterly and reviews traditional risk reports is not governing the business it thinks it is governing.",
      },
      {
        type: "heading",
        text: "What effective InsurTech governance looks like",
      },
      {
        type: "paragraph",
        text: "The boards I have seen govern digital insurance ventures effectively share several characteristics. They have more frequent board engagement — monthly updates at minimum — because the business environment changes faster than quarterly cycles can capture. They have board members who understand the technology and data dimensions of the business, not just the insurance dimensions. They have clear escalation frameworks that define what management can decide autonomously and what requires board visibility.",
      },
      {
        type: "paragraph",
        text: "They also have a risk function that is designed for the business model — not a traditional insurance risk team that has been asked to adapt. That means a risk framework that includes model risk, data risk, platform risk, and regulatory risk across multiple jurisdictions, reported to the board in terms that directors can engage with.",
      },
      {
        type: "paragraph",
        text: "Building that governance capability is something I help InsurTech boards and their investors do — either as an independent board adviser, or through structured board education engagements. The digital insurance opportunity in Asia is significant. The governance infrastructure needs to be built to match it.",
      },
    ],
    faqs: [
      {
        question: "What governance challenges do InsurTech companies face in Asia?",
        answer: "InsurTech companies in Asia face governance challenges around AI model velocity, cross-border data compliance, platform partner risk, multi-jurisdiction regulatory uncertainty, and the mismatch between traditional board reporting cycles and digital business operating speeds.",
      },
      {
        question: "What should an InsurTech board in Singapore focus on?",
        answer: "An InsurTech board in Singapore should focus on model governance (how AI underwriting models are validated and changed), data governance (PDPA and cross-border data compliance), partner risk (what controls exist over distribution partnerships), and regulatory developments across all operating ASEAN markets.",
      },
    ],
  },
  {
    id: "13",
    title: "What Singapore Boards Get Wrong About Independent Board Directors",
    summary:
      "Independence in the structural sense — no business relationship, no family connection — is not the same as independence in the governance sense. The boards that get the most value from their independent directors understand this distinction. Most do not.",
    category: "Governance",
    readingTime: "5 min read",
    date: "July 2026",
    status: "published",
    slug: "independent-board-director-singapore",
    keywords: ["independent board director Singapore", "SGX board director advisory", "corporate governance Singapore"],
    body: [
      {
        type: "paragraph",
        text: "Singapore's corporate governance code sets out clear criteria for independence — the absence of relationships that might compromise an independent director's ability to exercise objective judgement. These criteria are important, and getting them right matters. But structural independence and genuine governance independence are not the same thing, and most board nomination discussions focus almost entirely on the former.",
      },
      {
        type: "paragraph",
        text: "I have sat across from a number of boards — as an adviser, as someone being assessed for a board role, and as someone observing board dynamics from the risk committee chair — and what I observe is that the independent directors who provide the most governance value are those who exercise independence of thought and challenge, not just independence of relationship. Those who provide the least are often technically independent but effectively deferential — they have no problematic relationships, but they also rarely push back.",
      },
      {
        type: "heading",
        text: "What governance independence actually requires",
      },
      {
        type: "list",
        items: [
          "Domain expertise: an independent director who cannot understand what management is presenting cannot challenge it. Genuine independence requires knowing enough about the business, the risk environment, or the technical domain to ask the right questions.",
          "Willingness to slow things down: the most governance-valuable independent directors are those who are willing to be the reason a decision is reconsidered — even when that creates friction with management and the chair.",
          "A perspective management does not have: the value of an independent director is not replicating what management already knows. It is bringing a perspective — from a different sector, a different discipline, or a different stakeholder lens — that challenges the assumptions management has normalised.",
          "Prepared engagement: independent directors who read the board papers thoroughly, come prepared with questions, and follow up between meetings provide qualitatively different governance from those who engage primarily during the meeting itself.",
        ],
      },
      {
        type: "pullquote",
        text: "Independence is not a negative quality — the absence of conflicting interests. It is a positive one: the presence of an independent mind that management has to genuinely account for.",
      },
      {
        type: "heading",
        text: "What boards should be looking for",
      },
      {
        type: "paragraph",
        text: "When I advise nomination committees, I push them to assess candidates not just against the negative criteria of independence but against the positive criteria of governance value. What specific expertise does this director bring that the board currently lacks? In what situations in their career have they challenged a management decision and been right to do so? What is their track record of actual challenge — not just attendance and approval?",
      },
      {
        type: "paragraph",
        text: "The boards that work best are those where the independent directors are genuinely contributing expertise and independent perspective — where management comes to board meetings expecting to be challenged and finding that useful, not adversarial. Building that kind of board requires a more rigorous nomination process than most Singapore-listed companies currently apply.",
      },
    ],
    faqs: [
      {
        question: "What makes a good independent board director in Singapore?",
        answer: "Beyond the structural independence requirements under the Singapore Code of Corporate Governance, an effective independent director brings domain expertise relevant to the company's risk environment, a track record of constructive challenge of management, and a perspective that is genuinely different from what is already around the table.",
      },
      {
        question: "How many independent directors does an SGX-listed company need?",
        answer: "Under the Singapore Code of Corporate Governance, at least one-third of the board must be independent directors. For companies where the chairman and CEO are the same person, or where the chairman is not independent, at least half the board must be independent.",
      },
    ],
  },
  {
    id: "14",
    title: "MAS Regulatory Advisory: Preparing Singapore Financial Institutions for Supervisory Reviews",
    summary:
      "MAS supervisory reviews have become more thematic, more substantive, and more consequential for leadership teams. Preparation is not about producing the right documents — it is about being able to demonstrate that governance is real rather than formal.",
    category: "Regulation",
    readingTime: "6 min read",
    date: "July 2026",
    status: "published",
    slug: "mas-regulatory-advisor-singapore",
    keywords: ["MAS regulatory advisor Singapore", "MAS supervisory Singapore insurance", "financial institution governance Singapore"],
    body: [
      {
        type: "paragraph",
        text: "I have been on both sides of MAS supervisory interactions — as a CRO preparing for and managing regulatory reviews, and as an adviser helping boards and senior leadership teams understand what MAS is looking for and how to demonstrate it. The change I have seen over the last decade is significant. MAS reviews have become more thematic — focused on whether an institution's governance framework is actually operating as intended, not just whether it is documented. And the consequences of a poor review have become more serious.",
      },
      {
        type: "paragraph",
        text: "The organisations that navigate MAS reviews well are not those with the thickest policy manuals. They are those where leadership can demonstrate, with evidence, that governance frameworks are producing real decisions — that risk appetite is influencing capital allocation, that board oversight is substantive rather than ceremonial, that the CRO function has genuine independence and the access it needs to do its job.",
      },
      {
        type: "heading",
        text: "What MAS is actually looking for",
      },
      {
        type: "paragraph",
        text: "From my experience, MAS supervisory reviews in the current environment are focusing on several themes consistently:",
      },
      {
        type: "list",
        items: [
          "Board oversight quality: are directors asking substantive questions, challenging management, and receiving information in governance terms? Or is the board meeting functioning primarily to ratify management decisions?",
          "Risk governance integration: is the risk framework connected to strategic and capital decisions, or operating as a separate compliance exercise?",
          "Climate risk management: under Notice 126 for insurers and equivalent guidance for banks, MAS is assessing whether environmental risk is embedded in financial risk governance — not just disclosed",
          "Operational resilience: how the institution would respond to a significant operational disruption, and whether the board has tested that response",
          "Model governance: for institutions using AI or algorithmic tools in underwriting, pricing, or credit decisions, the governance and validation of those models",
        ],
      },
      {
        type: "pullquote",
        text: "MAS is asking: does your governance work, or does it look like it works? The organisations that can answer honestly — and demonstrate the answer — navigate reviews well.",
      },
      {
        type: "heading",
        text: "How I help institutions prepare",
      },
      {
        type: "paragraph",
        text: "My approach to MAS regulatory preparation is not about coaching for the review. It is about helping an institution assess honestly where its governance is genuinely strong and where it is more formal than substantive — and then addressing the gaps before MAS identifies them.",
      },
      {
        type: "paragraph",
        text: "That typically involves a structured review of the risk governance framework against the specific MAS guidelines relevant to the institution type; an assessment of the board's risk information diet — what it is receiving, what it is not receiving, and whether the quality is sufficient for meaningful oversight; and preparation of leadership teams for the kinds of questions they should expect from a thematic review focused on the current MAS supervisory agenda.",
      },
      {
        type: "paragraph",
        text: "The value of this preparation is not in passing the review. It is in building governance that is genuinely sound — which is what a well-functioning supervisory system is trying to verify.",
      },
    ],
    faqs: [
      {
        question: "What does MAS look for in a supervisory review of a Singapore insurer?",
        answer: "MAS assesses whether risk governance is genuine rather than formal — specifically whether the board exercises substantive oversight, whether the risk framework influences real decisions, and whether key areas including climate risk, model governance, and operational resilience are managed to the standard required by MAS guidelines.",
      },
      {
        question: "How should a Singapore financial institution prepare for an MAS review?",
        answer: "Preparation should focus on honest gap assessment — identifying where governance frameworks are substantive and where they are more formal than real — and addressing structural gaps before the review. This includes reviewing the board's risk information quality, stress-testing whether key governance frameworks are producing evidence of real decisions, and ensuring leadership can articulate the governance framework clearly and with evidence.",
      },
    ],
  },
  {
    id: "15",
    title: "How I Helped Lead a Company to a Nasdaq Listing — and What Governance Made the Difference",
    summary:
      "A Nasdaq listing is a governance milestone as much as a financial one. The discipline required to satisfy US capital market standards — risk management, board structure, disclosure — is exactly the discipline that builds lasting organisational value. Here is what we built.",
    category: "Governance",
    readingTime: "8 min read",
    date: "June 2026",
    status: "published",
    slug: "nasdaq-listing-ceo-governance-singapore",
    keywords: ["Nasdaq listing governance", "SGX board director advisory", "risk governance Singapore boards"],
    body: [
      {
        type: "paragraph",
        text: "I was CEO of Basel Medical Group when it listed on Nasdaq. That experience — navigating the regulatory, governance, and capital market requirements of a US listing from a Singapore-based company — gave me a very specific perspective on what governance actually requires when the standards are set by the most demanding capital market in the world.",
      },
      {
        type: "paragraph",
        text: "What I want to share is not the mechanics of a Nasdaq listing — those are well-documented by advisers who do the legal and financial work. What I want to share is the governance reality: the disciplines that a Nasdaq listing requires of a board, a management team, and an organisation — and which, if built genuinely, become organisational assets long after the listing day.",
      },
      {
        type: "heading",
        text: "What Nasdaq actually requires of a board",
      },
      {
        type: "paragraph",
        text: "Nasdaq listing standards are specific about board structure: independent director majority, audit committee composed entirely of independent directors with defined financial expertise, compensation and nomination functions that are either fully independent committees or have independent oversight. These are the structural requirements.",
      },
      {
        type: "paragraph",
        text: "But the more consequential requirement is what those structures need to actually do. The audit committee of a Nasdaq-listed company is responsible for the appointment and oversight of the external auditor, the internal audit function, the financial reporting process, and the adequacy of internal controls. That is a significant governance mandate — and it requires audit committee members who can actually exercise it, not just fill the seat.",
      },
      {
        type: "heading",
        text: "The risk governance the market expects",
      },
      {
        type: "paragraph",
        text: "US capital markets — through SEC disclosure requirements, investor relations expectations, and the attention of institutional shareholders — require a quality of risk governance that goes beyond what many Singapore-listed companies have built. Not because SGX standards are inadequate, but because the volume and specificity of disclosure in a US-listed environment, and the sophistication of the institutional investor scrutiny that follows it, forces governance to become substantive.",
      },
      {
        type: "list",
        items: [
          "Risk factor disclosure in the prospectus and annual reports must be genuinely specific and reflective of the actual risk profile — not generic disclaimers",
          "Management discussion of risk must be capable of being interrogated by sophisticated investors and short-sellers — organisations that have done the work to find the gaps",
          "Board oversight of the financial statements must be real — audit committees that are active, informed, and capable of challenging the CFO and external auditor",
          "Internal controls over financial reporting must be documented, tested, and signed off on by management and, for larger companies, by external auditors",
        ],
      },
      {
        type: "pullquote",
        text: "A Nasdaq listing does not create governance discipline. It reveals whether you have it — and punishes the organisations that do not.",
      },
      {
        type: "heading",
        text: "What we built at Basel Medical",
      },
      {
        type: "paragraph",
        text: "At Basel Medical Group, preparing for the Nasdaq listing required us to build a risk governance framework that could satisfy both MAS and SEC expectations simultaneously — not a small task for a Singapore-based healthcare company. We restructured the board composition, built a proper audit committee function, developed the internal control documentation that SOX compliance required, and established an investor relations function capable of communicating the company's risk profile accurately to a US investor base.",
      },
      {
        type: "paragraph",
        text: "The disciplines we built in that process — specific risk identification, board-level accountability for disclosure, internal control rigour — remained valuable long after the listing. That is the governance case for treating a capital market transaction as a genuine governance project, not just a financial one.",
      },
    ],
    faqs: [
      {
        question: "What governance does a Nasdaq-listed Singapore company need?",
        answer: "A Nasdaq-listed Singapore company needs an independent-director majority board, a fully independent audit committee with financial expertise, formal compensation and nomination governance, SEC-compliant risk factor disclosure, and SOX-aligned internal controls over financial reporting. These standards require genuinely active board oversight, not just structural compliance.",
      },
      {
        question: "How is Nasdaq governance different from SGX governance in Singapore?",
        answer: "Nasdaq governance requirements are broadly comparable to SGX in structural terms but are enforced through a more intensive disclosure and investor scrutiny environment. US institutional investors and activist shareholders apply more detailed risk governance analysis, and SEC disclosure standards require greater specificity in risk factor disclosure than SGX requirements.",
      },
    ],
  },
  {
    id: "16",
    title: "Risk Governance Speaker Singapore: What I Speak On and Why It Matters to Boards",
    summary:
      "I have spoken to boards, regulators, insurance executives and risk professionals across Asia for over a decade. The topics I am asked to address have shifted significantly — here is what Singapore's leadership community is grappling with right now.",
    category: "Board Advisory",
    readingTime: "5 min read",
    date: "June 2026",
    status: "published",
    slug: "risk-governance-speaker-singapore",
    keywords: ["risk governance speaker Singapore", "ESG speaker Singapore", "corporate governance speaker Singapore boards"],
    body: [
      {
        type: "paragraph",
        text: "When I started speaking at governance and risk conferences in Singapore, the topics were largely technical — actuarial models, capital frameworks, reinsurance structures. What boards wanted to hear about was how to understand the numbers their risk teams were producing. That has shifted considerably. What I am asked to speak on now is more strategic: how do governance structures need to adapt to risks that traditional frameworks were not built for?",
      },
      {
        type: "paragraph",
        text: "I speak at board retreats, regulatory conferences, industry associations, and professional development programmes. The audiences range from NEDs and audit committee chairs to C-suite executives and regulators. What connects those audiences is a shared challenge: the risk environment is changing faster than governance frameworks, and the question of how to close that gap — quickly, practically, and without creating compliance theatre — is genuinely difficult.",
      },
      {
        type: "heading",
        text: "Topics I address in Singapore and across Asia",
      },
      {
        type: "list",
        items: [
          "Climate risk governance for boards: what mandatory disclosure actually requires of directors, how to integrate climate risk into the enterprise risk framework, and what personal accountability now looks like for Singapore directors",
          "AI governance in financial services: the model governance gap between InsurTech adoption speed and board-level oversight capability, and how to close it without creating a bottleneck",
          "Risk appetite as a governance tool: why most risk appetite frameworks do not influence decisions, and what the organisations that get it right are doing differently",
          "The CRO and the board: how the relationship between the risk function and board-level governance should work, and what breaks it",
          "ESG readiness versus ESG compliance: the gap between producing sustainability reports and being genuinely prepared to manage ESG risks as they materialise",
          "Capital strategy and board governance: why capital decisions belong in the boardroom, and how to build the literacy that allows boards to engage with them",
        ],
      },
      {
        type: "pullquote",
        text: "When I stand up to speak, I am not presenting theory. I am bringing two decades of having held the roles — CRO, CEO, board adviser — that the people in the room are navigating.",
      },
      {
        type: "heading",
        text: "Format and audience",
      },
      {
        type: "paragraph",
        text: "I work in keynote, panel, workshop, and board retreat formats. For governance audiences, I find that interactive workshop formats — where directors can bring their own situations and test frameworks against real examples — produce the most durable learning. For conference and regulatory audiences, I speak in keynote format with enough analytical specificity to be useful rather than inspirational.",
      },
      {
        type: "paragraph",
        text: "If you are planning a board retreat, a governance conference, or a leadership development programme in Singapore or across Asia and are looking for a speaker who can bring both the practitioner's perspective and the actuarial depth that these governance topics require, I am available for engagements from mid-2026.",
      },
    ],
    faqs: [
      {
        question: "What topics does Raymond Cheung speak on for Singapore boards?",
        answer: "Raymond Cheung speaks on climate risk governance, AI governance in financial services, risk appetite frameworks, ESG readiness, capital strategy, and the relationship between risk functions and board oversight. His perspective is grounded in having held statutory CRO and CEO roles in Singapore-regulated entities.",
      },
      {
        question: "Can Raymond Cheung speak at a board retreat in Singapore?",
        answer: "Yes. Raymond Cheung speaks at board retreats, governance conferences, regulatory events, and professional development programmes across Singapore and Asia. He is available for keynote, panel, and workshop formats, with interactive workshop sessions available for board development engagements.",
      },
    ],
  },
  {
    id: "17",
    title: "Scope 3 Emissions: What Singapore Boards Need to Govern Before FY2026 Disclosure",
    summary:
      "Scope 3 emission reporting becomes mandatory for SGX-listed companies from FY2026. The data challenges are significant. The governance challenges — who owns the disclosure, how the assumptions are validated, what board sign-off means — are where most organisations are least prepared.",
    category: "ESG",
    readingTime: "6 min read",
    date: "September 2026",
    status: "published",
    slug: "scope-3-emissions-singapore-board-governance",
    keywords: ["scope 3 emissions Singapore boards", "ESG reporting Singapore 2026", "sustainability reporting Singapore SGX"],
    body: [
      {
        type: "paragraph",
        text: "Scope 3 emissions — all indirect emissions in a company's value chain, upstream and downstream — become part of mandatory sustainability disclosure for SGX-listed companies from FY2026. The scope of what needs to be measured, estimated, and disclosed is significant: supply chain emissions, employee commuting, use of sold products, end-of-life treatment of goods, business travel, leased assets not in direct control.",
      },
      {
        type: "paragraph",
        text: "The data challenge is well-understood: Scope 3 requires organisations to collect emissions data from suppliers, customers, and across their value chain — much of which is estimated rather than measured, and none of which is under the reporting company's direct control. What is less well-discussed is the governance challenge: who in the organisation takes responsibility for the adequacy of those estimates, how the board validates a disclosure it cannot independently verify, and what liability attaches to a Scope 3 disclosure that turns out to be materially inaccurate.",
      },
      {
        type: "heading",
        text: "The governance responsibilities boards need to assign",
      },
      {
        type: "list",
        items: [
          "Methodology ownership: who has decided which estimation methodology the company is using for each Scope 3 category, and on what basis? This should be a documented, board-approved decision — not a sustainability team judgment",
          "Materiality assessment: which Scope 3 categories are material to the business? A company does not need to report immaterial categories, but the determination of materiality requires board-level engagement",
          "Data quality governance: what is the quality of the underlying data, and what assurance does the board have that the estimates are reasonable? This is the hardest question — and the one most sustainability reports avoid",
          "Year-on-year consistency: Scope 3 disclosures will be compared across years and against peers. The board needs to understand what changes in the disclosure reflect genuine changes in the business versus methodology changes",
          "External assurance: MAS has signalled expectations on assurance of climate disclosures. The board should be deciding — not just approving — the level and scope of external assurance for Scope 3",
        ],
      },
      {
        type: "pullquote",
        text: "A Scope 3 number that the board cannot explain is a liability, not a disclosure. The governance challenge is ensuring the board can explain it.",
      },
      {
        type: "heading",
        text: "What boards should do before FY2026 closes",
      },
      {
        type: "paragraph",
        text: "For companies that have not yet built their Scope 3 governance architecture, FY2026 is already underway. The practical steps are: commission a Scope 3 materiality assessment if one has not been done; establish internal ownership of the methodology and data quality; understand what your material categories are and what the data sources for each are; and brief the board — in governance terms, not technical terms — on what the company will be disclosing and what the confidence level in those disclosures is.",
      },
      {
        type: "paragraph",
        text: "This is exactly the kind of work I help boards with — translating a technically complex reporting requirement into a governance question that boards can take responsibility for. The time to do that work is before the disclosure is signed.",
      },
    ],
    faqs: [
      {
        question: "When is Scope 3 reporting mandatory for Singapore companies?",
        answer: "Scope 3 emissions disclosure is required for SGX-listed companies from FY2026, as part of the mandatory climate-related disclosure framework for Mainboard issuers. The requirement is phased, with larger companies disclosing first.",
      },
      {
        question: "What is Scope 3 and why is it harder to report than Scope 1 and 2?",
        answer: "Scope 3 covers all indirect emissions in a company's value chain — supplier emissions, customer use of products, business travel, leased assets, and more. Unlike Scope 1 (direct emissions) and Scope 2 (purchased energy), Scope 3 data is largely outside the company's direct control and must be estimated from supplier data, industry averages, or spend-based proxies, making accuracy and consistency significantly more challenging.",
      },
      {
        question: "What is a Singapore board's responsibility for Scope 3 disclosure?",
        answer: "The board is responsible for approving the methodology and materiality assessment that determines what is disclosed, ensuring that the data quality is adequate for public disclosure, and understanding the confidence level in the estimates well enough to take governance responsibility for the disclosure.",
      },
    ],
  },
  {
    id: "18",
    title: "The ORSA as a Strategic Tool: What Singapore Insurance Boards Are Missing",
    summary:
      "The Own Risk and Solvency Assessment is one of the most governance-valuable documents an insurance organisation produces — and one of the most underused at board level. Here is how to change that.",
    category: "Insurance Capital",
    readingTime: "6 min read",
    date: "July 2026",
    status: "published",
    slug: "orsa-strategic-tool-singapore-insurance-boards",
    keywords: ["ORSA Singapore insurance", "insurance capital governance Singapore", "CRO advisory Singapore insurance"],
    body: [
      {
        type: "paragraph",
        text: "Every MAS-regulated insurer in Singapore produces an Own Risk and Solvency Assessment. The ORSA is one of the most actuarially intensive documents the organisation creates — it stress-tests the capital position against a range of scenarios, quantifies the resilience of the business to adverse developments, and connects the risk profile to the capital strategy. It should be one of the most strategically useful documents the board reviews.",
      },
      {
        type: "paragraph",
        text: "In most organisations it is not. What typically reaches the board is a summary that confirms the organisation is within its capital requirements, presents the key assumptions at a high level, and reassures directors that the regulatory deliverable has been met. The stress test results — the scenarios that reveal where the capital position is under genuine pressure — often do not make it to the board in a form that directors can engage with.",
      },
      {
        type: "heading",
        text: "What the ORSA should be telling the board",
      },
      {
        type: "paragraph",
        text: "The value of the ORSA is not in the compliance conclusion. It is in the stress test analysis — what happens to the capital position in the scenarios the business is most exposed to, and what those results imply for strategic decisions the board is being asked to make.",
      },
      {
        type: "list",
        items: [
          "If the pandemic scenario shows a capital deficit within twelve months, what does that mean for the dividend proposal currently on the board agenda?",
          "If the climate transition scenario reveals significant liability reserve pressure, does the reinsurance programme adequately protect the capital position?",
          "If the interest rate stress shows the investment portfolio deteriorating in a way that impairs the solvency margin, what does that imply for the asset allocation review?",
          "What is the capital cost of the strategic plan, and is the ORSA showing that the organisation has sufficient capital to fund it through the scenario range?",
        ],
      },
      {
        type: "pullquote",
        text: "The ORSA is produced for MAS. But its real audience should be the board — the people making the strategic decisions the stress tests are designed to inform.",
      },
      {
        type: "heading",
        text: "How to use the ORSA as a board",
      },
      {
        type: "paragraph",
        text: "The boards I have worked with that use the ORSA most effectively do three things differently. They engage with the stress test scenarios rather than just the base case results — asking which scenarios are most relevant to the current strategic decisions and what the results imply for those decisions. They connect the ORSA outputs explicitly to capital allocation proposals — requiring management to show the capital cost of proposed investments and growth plans in ORSA terms. And they treat the ORSA as a live document — using it as the reference point for capital discussions throughout the year, not just the moment of regulatory submission.",
      },
      {
        type: "paragraph",
        text: "If your board is receiving an ORSA summary that does not enable any of those conversations, it is worth asking for a different format. The technical team can produce it. They often need to be asked.",
      },
    ],
    faqs: [
      {
        question: "What is an ORSA and why does it matter for Singapore insurance boards?",
        answer: "The Own Risk and Solvency Assessment (ORSA) is a regulatory requirement for MAS-licensed insurers. It stress-tests the capital position against adverse scenarios and connects the risk profile to the capital strategy. For boards, it is the primary tool for understanding whether the organisation's capital is adequate for its strategic ambitions and its risk exposure.",
      },
      {
        question: "How should a Singapore insurance board use the ORSA?",
        answer: "The board should engage with the stress test scenarios — not just the base case compliance conclusion — and connect ORSA outputs to strategic decisions including dividend proposals, growth plans, reinsurance structure, and asset allocation. The ORSA's value is as a strategic governance tool, not only a regulatory deliverable.",
      },
    ],
  },
  {
    id: "19",
    title: "What SGX's FY2026 Sustainability Mandate Means for Singapore Boards Right Now",
    summary:
      "From FY2026, SGX-listed companies must issue a sustainability report alongside their annual report — and large-cap issuers must disclose Scope 3 emissions. Most boards are not ready for what they are now required to sign off on.",
    category: "Governance",
    readingTime: "3 min read",
    date: "September 2026",
    status: "published",
    slug: "sgx-sustainability-reporting-fy2026-boards",
    keywords: ["SGX sustainability reporting 2026", "Singapore board sustainability", "ESG governance Singapore"],
    body: [
      {
        type: "paragraph",
        text: "I have been in enough audit committee meetings in Singapore to recognise what typically happens when the sustainability report arrives for sign-off. The sustainability team presents. The slide deck covers the ISSB framework alignment, the material ESG factors, the Scope 1 and 2 emissions data. The board chair asks whether everything is compliant. Nobody asks what any of it means for the strategy. The adviser confirms the report meets SGX RegCo's requirements. The board approves. The meeting moves on.",
      },
      {
        type: "paragraph",
        text: "From FY2026, that approach is no longer sufficient — and for some boards, it is now a governance risk. SGX's mandatory sustainability reporting framework has escalated: all listed issuers must now issue their sustainability report alongside the annual report, large-cap companies must disclose Scope 3 greenhouse gas emissions in accordance with IFRS S2, and the board is required to provide a statement on its governance structures for sustainability practices. That last requirement is the one most boards have not fully understood yet.",
      },
      {
        type: "heading",
        text: "What has changed for boards — not just for management",
      },
      {
        type: "paragraph",
        text: "The governance shift is this: the sustainability report is now formally a board-level document. Not in the sense that the board reviews it before publication — boards have been doing that. In the sense that the board is now required to describe how it governs sustainability. That means the board needs to understand what is in the report, have a view on whether the identified material ESG factors are the right ones, and be in a position to explain its oversight role to shareholders. Approving a document prepared entirely by management, without engaging with its substance, does not meet that standard.",
      },
      {
        type: "pullquote",
        text: "Signing off on a sustainability report you cannot explain is a governance risk, not just a reputational one.",
      },
      {
        type: "heading",
        text: "Three questions Singapore boards should be asking this quarter",
      },
      {
        type: "list",
        items: [
          "Has the board been briefed on the key ESG factors that will appear in the FY2026 sustainability report — and does the board agree they are the right ones, or has the selection been left entirely to management?",
          "For large-cap issuers: what is management's methodology for measuring Scope 3 emissions, which categories are included, and has the board tested whether the reporting boundary is appropriate for the business?",
          "If an institutional investor or proxy adviser challenges the sustainability report in a shareholder meeting, which director will respond — and can they answer substantively, not just refer the question to management?",
        ],
      },
      {
        type: "paragraph",
        text: "These are not unreasonable expectations. They are what the SGX framework now implies by requiring a board governance statement. If the board cannot answer those questions today, there is still time to put the right briefings in place before the FY2026 report is finalised. But the time is measured in quarters, not years. The requirement is live now.",
      },
    ],
    faqs: [
      {
        question: "What does SGX require for sustainability reporting from FY2026?",
        answer: "From FY2026, all SGX-listed companies must issue a sustainability report alongside their annual report. The report must include a board statement on governance structures for sustainability practices. Large-cap issuers are also required to disclose Scope 3 greenhouse gas emissions in accordance with IFRS S2 standards. If external assurance has been conducted, the sustainability report may be issued up to five months after financial year end.",
      },
      {
        question: "What is the board's responsibility for the FY2026 SGX sustainability report?",
        answer: "The board must provide a statement on its governance structures for sustainability practices — which means the board is expected to actively oversee the sustainability reporting process, not only receive and approve a management-prepared document. Directors should be able to explain how material ESG factors were identified, challenge key assumptions in the report, and describe the board's role in sustainability oversight.",
      },
      {
        question: "When do large-cap Singapore listed companies need to report Scope 3 emissions?",
        answer: "SGX RegCo requires large-cap listed issuers to report Scope 3 greenhouse gas emissions from FY2026, in line with IFRS S2 requirements. Smaller issuers are not yet required to report Scope 3, though SGX expects the requirement to extend to all listed issuers by FY2027.",
      },
    ],
  },
  {
    id: "20",
    title: "What Makes an ESG Adviser Useful to a Singapore Board",
    summary:
      "Most ESG advisers in Singapore help boards produce better sustainability reports. A genuinely useful ESG adviser does something harder — they help the board ask better questions, challenge management's framing, and connect sustainability to the decisions the board is actually making.",
    category: "ESG",
    readingTime: "7 min read",
    date: "September 2026",
    status: "published",
    slug: "esg-advisor-singapore",
    keywords: ["ESG advisor Singapore", "ESG governance Singapore boards", "sustainability adviser Singapore board"],
    body: [
      {
        type: "paragraph",
        text: "I have sat through enough board presentations from ESG advisers in Singapore to recognise the pattern. The slides are well-designed. The framework coverage is comprehensive. The material ESG factor mapping is thorough. The board asks a few questions about timelines and reporting scope. Nobody challenges anything. The adviser leaves. The board has just spent forty minutes on sustainability and learned almost nothing about whether the business is actually managing its ESG risks well.",
      },
      {
        type: "paragraph",
        text: "There is nothing wrong with this as a compliance function. If the organisation needs to produce an SGX-compliant sustainability report, an adviser who understands ISSB standards, material factor mapping, and disclosure requirements is genuinely valuable. But from FY2026, Singapore boards are required to provide a board statement on their governance structures for sustainability. That requirement is substantive. It means the board needs to govern sustainability — not just disclose it. And most ESG advisory relationships are not set up to help boards do that.",
      },
      {
        type: "heading",
        text: "The gap between sustainability reporting and sustainability governance",
      },
      {
        type: "paragraph",
        text: "The ESG advisory market in Singapore has developed faster than the governance thinking behind it. There are now dozens of firms offering sustainability reporting services to listed companies. Many of them are excellent at what they do: helping management teams understand the ISSB standards, map their material ESG factors, and produce a disclosure that will satisfy SGX RegCo's requirements. That is a legitimate service. What it is not is board-level governance advice.",
      },
      {
        type: "paragraph",
        text: "Advising a board is different from advising management. It requires being willing to tell a compensation committee that their ESG-linked performance targets are too weak to drive behaviour change. It means telling a board chair — in the board meeting, not in a quiet conversation afterwards — that the sustainability report describes a strategy the business is not actually pursuing. It means asking management's sustainability team difficult questions in front of the board, and making those questions legible to directors who are not sustainability specialists. Most reporting advisers are not set up to do this, and many are not inclined to.",
      },
      {
        type: "pullquote",
        text: "An ESG adviser who never says anything a Singapore board doesn't want to hear is not an adviser — they are a vendor.",
      },
      {
        type: "heading",
        text: "What I look for when assessing ESG advisory quality for boards",
      },
      {
        type: "paragraph",
        text: "When organisations ask me to assess their ESG advisory arrangements, I look for a specific set of characteristics — not qualifications or framework expertise, but how the adviser actually functions in the boardroom.",
      },
      {
        type: "list",
        items: [
          "Does the adviser have a view, or only a framework? Frameworks are necessary but insufficient. A useful adviser can tell you which of the business's identified ESG risks they believe the board is underweighting — and why. If the adviser can only describe the framework, they are not advising the board.",
          "Does the adviser engage with the board directly, or only with management? If the relationship is primarily with the sustainability team, the board is receiving filtered information. The board's adviser should have a direct line to the board, not a managed briefing through the sustainability function.",
          "Is the adviser willing to disagree with management in the board meeting? This is rare. It is also the most important indicator of genuine usefulness. An adviser who only confirms that management is on track is not adding governance value.",
          "Does the adviser connect sustainability to the decisions the board is actually making — capital allocation, M&A, strategic planning — or do they operate in a separate sustainability track that never intersects with the main board agenda? If ESG exists in its own lane, it is a disclosure exercise, not a governance function.",
        ],
      },
      {
        type: "heading",
        text: "Why the regulatory environment is raising the bar",
      },
      {
        type: "paragraph",
        text: "Singapore's regulatory environment is escalating in a way that makes the governance gap increasingly visible. From FY2025, all SGX issuers report Scope 1 and 2 emissions. From FY2026, large-cap issuers add Scope 3. MAS's transition planning guidelines — published in March 2026 and effective September 2027 — require insurers and financial institutions to demonstrate credible plans for managing climate-related transition risk. These are not disclosure requirements alone. They require the board to demonstrate that it oversees the organisation's sustainability strategy, not merely approves its reporting.",
      },
      {
        type: "paragraph",
        text: "The practical consequence is that an ESG adviser whose value stops at the disclosure layer is becoming insufficient for Singapore boards. Institutional investors and proxy advisers are increasingly looking for evidence of genuine board engagement with sustainability — not just a well-formatted sustainability report. The SGX board governance statement requirement is one formal expression of this. The shareholder questions at AGMs are another. Boards that cannot demonstrate substantive engagement will face escalating pressure.",
      },
      {
        type: "heading",
        text: "What a genuinely useful ESG adviser does differently",
      },
      {
        type: "paragraph",
        text: "The most effective ESG advisers I have worked with or observed in Singapore share certain characteristics. They come with a point of view — not a framework, but a perspective on what matters most for the specific industry, regulatory environment, and strategic situation the board is navigating. They are willing to say that the organisation's greatest climate-related exposure is not the one currently in the sustainability report, because that is where management has already done the analytical work. The real risk is where nobody has looked yet.",
      },
      {
        type: "paragraph",
        text: "They also understand the distinction between the board's job and management's job. Management produces the sustainability report. The board oversees whether management is managing sustainability risk appropriately. Those are not the same thing, and an adviser who conflates them is helping management with compliance — which is legitimate — but is not helping the board with governance, which is what the regulatory environment now requires.",
      },
      {
        type: "paragraph",
        text: "If your board's ESG adviser is confirming that the sustainability report looks good, that is useful information. If they are not also telling you what the report reveals about where the business is genuinely exposed — and where the board's oversight of those exposures is still underdeveloped — then you have a reporting adviser. In Singapore's current environment, boards need both. But they especially need the second.",
      },
    ],
    faqs: [
      {
        question: "What does an ESG adviser do for a Singapore board?",
        answer: "A board-level ESG adviser helps directors understand the organisation's material sustainability risks, challenges the adequacy of management's sustainability governance, and connects ESG factors to the strategic decisions the board is making — capital allocation, M&A, strategic planning, and risk oversight. This is distinct from a sustainability reporting consultant, whose primary role is disclosure compliance with SGX or ISSB standards.",
      },
      {
        question: "How do I assess whether my ESG adviser is useful to the board — not just to management?",
        answer: "The clearest indicator is whether the adviser is willing to disagree with management in front of the board, and whether they engage directly with the board's actual decisions rather than only with the sustainability team's reporting process. An adviser whose relationship is primarily with management is advising management — which may be valuable, but does not constitute board-level ESG governance advisory.",
      },
      {
        question: "What ESG governance requirements apply to Singapore boards from FY2026?",
        answer: "From FY2026, SGX-listed companies must include a board statement on governance structures for sustainability practices in their sustainability report, issued alongside the annual report. Large-cap issuers must also report Scope 3 GHG emissions. MAS-regulated financial institutions face additional obligations under MAS's transition planning guidelines, with implementation required by September 2027. Both sets of requirements place substantive governance obligations on the board, not only disclosure obligations on management.",
      },
      {
        question: "Is there a difference between an ESG consultant and an ESG adviser for Singapore boards?",
        answer: "In practice, yes. An ESG consultant typically helps management teams with sustainability reporting, framework compliance, and disclosure quality. An ESG adviser working at board level helps directors challenge management's ESG framing, identify governance gaps, and demonstrate credible oversight of sustainability risk. Singapore boards increasingly need the latter as SGX and MAS requirements shift from disclosure to governance accountability.",
      },
    ],
  },
  {
    id: "21",
    title: "MAS Transition Planning Is Halfway to Live — What Singapore Boards Should Have Done by Now",
    summary:
      "MAS issued its transition planning guidelines in March 2026 with an 18-month runway to a September 2027 effective date. That puts us at the halfway mark this month — and in my experience of regulatory implementation inside insurers, the halfway mark is when boards find out whether they started early enough.",
    category: "Regulation",
    readingTime: "3 min read",
    date: "September 2026",
    status: "published",
    slug: "mas-transition-planning-halfway-2026",
    keywords: ["MAS transition planning guidelines", "climate risk governance Singapore board"],
    body: [
      {
        type: "paragraph",
        text: "MAS issued its Guidelines on Environmental Risk Management – Transition Planning in March 2026, with an 18-month transition period before they take effect in September 2027. That puts us, this month, at roughly the halfway mark. In my experience of regulatory implementation inside insurers, the halfway mark is exactly when boards discover whether they started early enough.",
      },
      {
        type: "heading",
        text: "Why this is not a project you can run in the last two quarters",
      },
      {
        type: "paragraph",
        text: "Most regulatory changes an insurance board oversees are documentation exercises: rewrite a policy, update a committee charter, add a disclosure. Those genuinely can be done in a quarter. The transition planning guidelines are different, because they require capability that does not exist until you build it — climate-related risk data on your corporate underwriting book, scenario analysis that runs against both sides of the balance sheet, and a structured process for engaging customers whose exposure is rising. None of that is a drafting task. Each takes several cycles to reach a usable state.",
      },
      {
        type: "pullquote",
        text: "The firms that leave transition planning to 2027 will meet the letter of the guidelines and none of the intent.",
      },
      {
        type: "paragraph",
        text: "The part boards most often underestimate is the customer engagement expectation. MAS has been explicit that insurers should not indiscriminately withdraw cover from customers exposed to higher climate-related risk — they are expected to engage, gather data, and price proportionately. That is an operational muscle. If your underwriting teams have never had those conversations, the first year is spent learning how to have them, not documenting that you did.",
      },
      {
        type: "heading",
        text: "What a board should be able to see this month",
      },
      {
        type: "paragraph",
        text: "If I were sitting on an insurance board in Singapore right now, I would want three things on the agenda before year end: a candid assessment of where the firm's climate data actually is versus where it needs to be by September 2027; a walk-through of at least one scenario analysis that connects underwriting exposure to investment exposure; and a realistic project plan that treats the remaining time as twelve months of build, not eighteen months of buffer.",
      },
      {
        type: "paragraph",
        text: "The guidelines are principles-based, which some boards read as latitude. It is not. Principles-based supervision means MAS will judge you on whether the capability is real, not on whether the paperwork is filed. Halfway through the transition period is the right time to find out whether yours will be.",
      },
    ],
    faqs: [
      {
        question: "When do MAS's transition planning guidelines take effect?",
        answer: "MAS issued the Guidelines on Environmental Risk Management – Transition Planning in March 2026. They take effect in September 2027, following an 18-month transition period. The guidelines apply to banks, insurers and asset managers, and cover both transition and physical climate risk.",
      },
      {
        question: "What should a Singapore insurance board do before the September 2027 deadline?",
        answer: "Boards should treat the remaining period as build time, not buffer. Priorities are assessing the gap in climate-related risk data, reviewing at least one scenario analysis that links underwriting and investment exposure, and confirming a realistic implementation plan. The customer engagement expectation — not withdrawing cover indiscriminately from higher-risk customers — requires operational capability that takes multiple cycles to develop.",
      },
    ],
  },
  {
    id: "22",
    title: "Physical Climate Risk in Singapore Insurance: What Boards Need to Govern",
    summary:
      "MAS's transition planning guidelines require Singapore insurance boards to oversee physical climate risk, not just transition risk. Most boards only see physical risk through the annual reinsurance renewal. This is what a board actually needs to govern: accumulation, model basis risk, reinsurance dependency, and the correlation between the underwriting book and the investment portfolio.",
    category: "Climate Risk",
    readingTime: "8 min read",
    date: "September 2026",
    status: "published",
    slug: "climate-physical-risk-singapore-insurance",
    keywords: [
      "physical climate risk Singapore insurance",
      "climate risk governance Singapore board",
      "nat cat accumulation Singapore insurer",
    ],
    body: [
      {
        type: "paragraph",
        text: "The first time I put physical climate risk on a board agenda at an insurer, the response was that it was already handled — the reinsurance team modelled catastrophe exposure every year, bought the treaty, and reported the retained loss. That is true, and it is also the problem. Physical climate risk had a home on the reinsurance desk and nowhere on the board's risk map. The board saw one number a year, for one renewal cycle. It never saw the trajectory.",
      },
      {
        type: "paragraph",
        text: "MAS's transition planning guidelines, issued in March 2026 and effective September 2027, have changed what a board can leave to the reinsurance desk. The guidelines are usually discussed in terms of transition risk — decarbonisation, stranded assets, financed emissions. But they are equally explicit that insurers must assess and manage the physical risks they and their portfolios face from climate change. For a Singapore insurer, that is not a hypothetical exposure. It is the core of the underwriting book.",
      },
      {
        type: "heading",
        text: "What physical risk actually looks like on a Singapore insurer's balance sheet",
      },
      {
        type: "paragraph",
        text: "Singapore-based insurers and reinsurers carry physical climate exposure on both sides of the balance sheet and across two time horizons. On the liability side, acute risk is the regional catastrophe book — monsoon and convective flooding across Southeast Asia, windstorm exposure in North Asia, and the business interruption that follows. Chronic risk is slower: rising mean temperatures feeding into health, mortality and workers' compensation claims; sea-level rise and coastal flooding affecting property and infrastructure lines in a low-lying city-state. On the asset side, the same hazards sit inside real estate holdings, infrastructure debt and the equities of exposed corporates. The two sides are correlated, and that correlation is precisely what a single reinsurance renewal number hides.",
      },
      {
        type: "pullquote",
        text: "A board that only sees physical risk once a year, at renewal, is governing a decade-long trend through an annual snapshot.",
      },
      {
        type: "heading",
        text: "The governance questions a board should be asking",
      },
      {
        type: "list",
        items: [
          "Accumulation: what is our aggregate exposure to a single flood or windstorm event across all lines and all territories, and how has that number moved over the last five years — not just since the last renewal?",
          "Reinsurance dependency: how much of our capital position depends on reinsurance capacity that reprices annually? What happens to our solvency and our appetite if that capacity contracts, or triples in price, after a bad year in the region?",
          "Model basis risk: whose catastrophe models are we relying on, what climate conditioning do they assume, and where do we know they are weakest — secondary perils, inland flood, compound events?",
          "Asset-liability correlation: if a physical event hits our underwriting book, what does it simultaneously do to the value of our property and infrastructure assets? Are we running that as one scenario or two?",
          "Repricing and exit risk: which parts of the book are we assuming we can reprice or walk away from if loss experience deteriorates, and is that assumption realistic given MAS's expectation that we do not withdraw cover indiscriminately?",
          "Protection gap and reputation: where are we effectively the market of last resort, and what is the reputational and political cost of pulling back?",
        ],
      },
      {
        type: "heading",
        text: "Why 'the reinsurance team has it covered' is not a governance answer",
      },
      {
        type: "paragraph",
        text: "The reinsurance function is very good at what it does: quantifying next year's expected loss and transferring the peak. But it is structurally short-term, because the treaty is annual. It is also structurally narrow, because its job is the liability side, not the correlation with assets or the capital consequences of a hard market. The board's job is the part that falls between functions — the multi-year trajectory, the balance-sheet-wide view, and the strategic choice about which exposures the firm wants to keep underwriting at all. MAS's guidelines push that choice up to the board on purpose.",
      },
      {
        type: "paragraph",
        text: "This is also where scenario analysis earns its place. Not the compliance version — a deck showing that a scenario was run — but a genuine exercise where management walks the board through what a plausible bad year in the region does to claims, to reinsurance pricing at the next renewal, to asset values, and to the solvency ratio, all at once. If the board has never seen that connected picture, the scenario analysis is being done for the regulator, not for the board.",
      },
      {
        type: "heading",
        text: "What I recommend to boards now",
      },
      {
        type: "paragraph",
        text: "Three things, in order. First, ask for the five-year trajectory of your accumulation exposure by peril and territory, not just the current renewal position — the trend is the governance signal, not the point estimate. Second, require at least one scenario each year that connects the underwriting book, the reinsurance programme and the investment portfolio in a single narrative, presented to the full board rather than buried in a risk committee pack. Third, make an explicit strategic decision about physical risk appetite: which exposures the firm intends to keep, grow, reprice or exit over the next three to five years, documented and revisited annually.",
      },
      {
        type: "paragraph",
        text: "The September 2027 effective date makes this urgent, but it should not be the reason for doing it. Physical climate risk is the one category of climate risk that is already in the numbers — in the claims, in the treaty pricing, in the asset marks. The board's task is not to anticipate a future risk. It is to govern one that is already here, and to stop seeing it through a once-a-year window.",
      },
    ],
    faqs: [
      {
        question: "What does MAS require Singapore insurance boards to do about physical climate risk?",
        answer: "MAS's Guidelines on Environmental Risk Management – Transition Planning, issued in March 2026 and effective September 2027, require insurers to assess and manage the physical climate risks they and their portfolios face, alongside transition risk. The board and senior management are expected to incorporate these risks into risk appetite, strategy and business plans, and to oversee that the approach is embedded in underwriting and investment practice — not delegated entirely to the reinsurance function.",
      },
      {
        question: "What is the difference between acute and chronic physical climate risk for an insurer?",
        answer: "Acute physical risk refers to discrete extreme events — floods, windstorms, and the business interruption that follows — which drive catastrophe claims and reinsurance costs. Chronic physical risk refers to gradual shifts such as rising mean temperatures and sea-level rise, which feed more slowly into health, mortality, property and workers' compensation claims. Singapore insurers carry both, on the underwriting book and inside their investment portfolios.",
      },
      {
        question: "Why isn't the reinsurance programme enough to manage physical climate risk?",
        answer: "A reinsurance programme transfers next year's peak loss, but it is renewed annually and focuses on the liability side. It does not capture the multi-year trajectory of accumulation exposure, the correlation between underwriting losses and asset values, or the capital consequences of reinsurance capacity contracting or repricing after a bad year in the region. Those are board-level questions that sit between functions.",
      },
      {
        question: "What physical climate risk scenario analysis should an insurance board see?",
        answer: "The board should see at least one scenario a year that connects a plausible severe regional event to claims, to reinsurance pricing at the next renewal, to investment asset values, and to the solvency ratio — as a single connected narrative presented to the full board. A scenario deck that only demonstrates a scenario was run is a compliance artefact, not a governance tool.",
      },
    ],
  },
];
