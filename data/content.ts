// ──────────────────────────────────────────────────────────────
// VANI — All site content lives here.
// Edit copy, add/remove items, update CTAs without touching components.
// ──────────────────────────────────────────────────────────────

export const BRAND = {
  name: "VANI",
  tagline: "AI support with a human voice.",
  description:
    "VANI helps enterprise teams resolve repetitive calls and messages 24/7, while escalating sensitive, complex, and revenue-impacting cases to the people who handle them best.",
  trustLine: "Built for calls, WhatsApp, web chat, email, and social support.",
  subDescription:
    "Designed for banks, hospitals, schools, and regulated organizations.",
};

export const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Industries", href: "#industries" },
  { label: "Security", href: "#security" },
  { label: "Simulation", href: "#simulation" },
];

export const PROBLEMS = [
  {
    icon: "Repeat",
    title: "Overwhelmed by repetition",
    body: "Support teams spend most of their day answering the same questions — account status, hours, policies, procedures. High-value agents are trapped in low-value loops.",
  },
  {
    icon: "Clock",
    title: "Customers expect instant answers",
    body: "Wait times damage trust. Customers contacting banks, hospitals, or service providers expect a response in seconds, not hours.",
  },
  {
    icon: "MessageSquare",
    title: "Fragmented channels",
    body: "Your customers reach out on WhatsApp, social media, email, and calls — simultaneously. Managing them without a unified system means missed conversations and lost revenue.",
  },
  {
    icon: "AlertTriangle",
    title: "Inconsistent responses",
    body: "When agents answer the same question differently, trust erodes. Regulated industries face compliance risk when responses deviate from approved policy.",
  },
  {
    icon: "TrendingDown",
    title: "High cost of scale",
    body: "Adding support volume means adding headcount. Call centers are expensive, hard to scale quickly, and difficult to maintain quality across.",
  },
  {
    icon: "Shield",
    title: "Escalation without context",
    body: "When complex cases finally reach a human agent, they often lack the conversation history, customer intent, and case summary needed to act decisively.",
  },
];

export const SOLUTION_POINTS = [
  {
    step: "01",
    title: "Receives and understands",
    body: "VANI interprets customer intent across voice, message, and digital channels in Arabic and English.",
  },
  {
    step: "02",
    title: "Retrieves approved knowledge",
    body: "Pulls from your organization's private knowledge layer — policies, FAQs, procedures — never from public training data.",
  },
  {
    step: "03",
    title: "Responds or collects",
    body: "Handles safe, repetitive inquiries instantly. Collects structured information before routing when needed.",
  },
  {
    step: "04",
    title: "Detects risk and complexity",
    body: "Identifies sensitive topics, emotional signals, compliance triggers, and urgency cues in real time.",
  },
  {
    step: "05",
    title: "Escalates with context",
    body: "Routes flagged cases to the right human agent — with a full conversation summary, intent label, and suggested next action.",
  },
  {
    step: "06",
    title: "Learns and improves",
    body: "Quality feedback and analytics improve response accuracy, escalation precision, and team performance over time.",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Customer reaches out",
    detail: "Via call, WhatsApp, web chat, email, or social media.",
    icon: "MessageCircle",
  },
  {
    number: "02",
    title: "VANI understands intent",
    detail: "Natural language understanding in Arabic and English.",
    icon: "Brain",
  },
  {
    number: "03",
    title: "Knowledge retrieval",
    detail: "VANI queries your approved, private knowledge base.",
    icon: "Database",
  },
  {
    number: "04",
    title: "Response or collection",
    detail: "Answers instantly, or collects structured details.",
    icon: "Zap",
  },
  {
    number: "05",
    title: "Risk detection",
    detail: "Flags urgency, sensitivity, compliance signals.",
    icon: "ShieldAlert",
  },
  {
    number: "06",
    title: "Human handoff",
    detail: "Agent receives full context, summary, and guidance.",
    icon: "Users",
  },
  {
    number: "07",
    title: "Analytics & improvement",
    detail: "Performance data improves every interaction.",
    icon: "BarChart3",
  },
];

export const AI_AGENTS = [
  {
    name: "Triage Agent",
    role: "First Contact",
    description:
      "Receives and classifies every incoming inquiry by channel, language, intent, and urgency within milliseconds.",
    color: "wine",
  },
  {
    name: "Knowledge Agent",
    role: "Policy Retrieval",
    description:
      "Queries your organization's private knowledge layer to surface accurate, approved information — never from public sources.",
    color: "charcoal",
  },
  {
    name: "Response Agent",
    role: "Customer Communication",
    description:
      "Composes contextually appropriate responses in your organization's tone, in Arabic or English, across every channel.",
    color: "charcoal",
  },
  {
    name: "Compliance Agent",
    role: "Risk & Policy",
    description:
      "Monitors every response against your defined compliance boundaries before delivery.",
    color: "wine",
  },
  {
    name: "Escalation Agent",
    role: "Human Routing",
    description:
      "Detects when a case exceeds AI confidence or involves sensitive, urgent, or regulated content — and routes it immediately.",
    color: "charcoal",
  },
  {
    name: "Summary Agent",
    role: "Context Transfer",
    description:
      "Generates a structured handoff summary for human agents: intent, history, customer sentiment, and recommended action.",
    color: "charcoal",
  },
  {
    name: "Quality Agent",
    role: "Feedback & Learning",
    description:
      "Reviews completed conversations to surface improvement opportunities, flag gaps, and help refine the knowledge base.",
    color: "wine",
  },
];

export const CHANNELS = [
  {
    icon: "Phone",
    label: "Voice Calls",
    description: "AI-powered inbound and outbound call handling with real-time transcript and intent detection.",
  },
  {
    icon: "MessageCircle",
    label: "WhatsApp",
    description: "Conversational support at scale across the most widely used messaging platform in the region.",
  },
  {
    icon: "Globe",
    label: "Website Chat",
    description: "Embedded live-chat with intelligent routing and seamless human handoff.",
  },
  {
    icon: "Mail",
    label: "Email",
    description: "Automated email triage, response drafting, and escalation for inbox-heavy support teams.",
  },
  {
    icon: "Share2",
    label: "Social Media",
    description: "Monitor and respond to DMs and mentions across channels with consistent, policy-aligned messaging.",
  },
  {
    icon: "Smartphone",
    label: "Mobile App",
    description: "In-app support chat with access to customer context, account data, and transaction history.",
  },
];

export const INDUSTRIES = [
  {
    icon: "Landmark",
    label: "Banks & Financial Services",
    tagline: "Secure, audit-ready support workflows.",
    useCases: [
      "Card replacement and blocking guidance",
      "Account and product FAQs",
      "Branch and ATM locator",
      "App and transaction troubleshooting",
      "Complaint intake and routing",
      "Fraud reporting guidance with immediate escalation",
    ],
    note: "Designed with sensitive-case routing, PII masking, and audit log capabilities for financial environments.",
  },
  {
    icon: "Cross",
    label: "Hospitals & Healthcare",
    tagline: "Patient-aware, escalation-ready.",
    useCases: [
      "Appointment booking guidance",
      "Doctor and clinic information",
      "Insurance and billing inquiries",
      "Lab result and pharmacy instructions",
      "Complaint and feedback intake",
      "Emergency escalation workflows",
    ],
    note: "PHI-aware workflows with human escalation designed for healthcare environments.",
  },
  {
    icon: "GraduationCap",
    label: "Schools & Universities",
    tagline: "Admissions to graduation, always available.",
    useCases: [
      "Admissions inquiries and requirements",
      "Schedule, fees, and registration",
      "Parent and student support",
      "Academic policy guidance",
    ],
    note: "Multi-channel support across Arabic and English for diverse student and parent populations.",
  },
  {
    icon: "Shield",
    label: "Insurance",
    tagline: "Policy-consistent, compliance-aware.",
    useCases: [
      "Policy coverage questions",
      "Claims process guidance",
      "Document submission support",
      "Renewal and premium inquiries",
    ],
    note: "Response consistency and escalation accuracy for regulated insurance environments.",
  },
  {
    icon: "Building2",
    label: "Real Estate",
    tagline: "From inquiry to qualified lead.",
    useCases: [
      "Property availability and details",
      "Viewing scheduling",
      "Payment plan guidance",
      "Developer and agent inquiries",
    ],
    note: "Convert high-volume inquiries into structured leads for your sales team.",
  },
  {
    icon: "Briefcase",
    label: "Enterprise Support Teams",
    tagline: "Scale without adding headcount.",
    useCases: [
      "Internal helpdesk automation",
      "Customer-facing FAQ and order support",
      "Complaint routing and logging",
      "Social media and community management",
    ],
    note: "For organizations with high-volume, multi-channel customer service operations.",
  },
];

export const SECURITY_FEATURES = [
  {
    icon: "Lock",
    title: "Private knowledge layer",
    detail:
      "Your knowledge base is isolated and only used to answer your customers. Never shared or used to train public models.",
  },
  {
    icon: "Server",
    title: "Client-level data isolation",
    detail:
      "Each organization operates within a dedicated, isolated environment. No data commingling.",
  },
  {
    icon: "ShieldCheck",
    title: "Encryption in transit and at rest",
    detail:
      "All data is encrypted using industry-standard protocols at every point in the pipeline.",
  },
  {
    icon: "Users",
    title: "Role-based access control",
    detail:
      "Granular permission layers for agents, supervisors, compliance reviewers, and administrators.",
  },
  {
    icon: "FileText",
    title: "Audit logs",
    detail:
      "Complete, tamper-evident logs of every AI action, human escalation, and system event.",
  },
  {
    icon: "Eye",
    title: "PII & PHI-aware workflows",
    detail:
      "Sensitive identifiers are masked in logs and transcripts. Healthcare workflows recognize and handle PHI appropriately.",
  },
  {
    icon: "CheckSquare",
    title: "Human approval workflows",
    detail:
      "Configure any knowledge update or policy change to require review before deployment.",
  },
  {
    icon: "Settings",
    title: "Configurable retention policies",
    detail:
      "Set your own data retention windows. Request full deletion at any time.",
  },
];

export const WHY_VANI = [
  {
    icon: "Globe2",
    title: "Arabic-first, English-ready",
    detail:
      "Built for the Gulf enterprise market. Native Arabic-language understanding across all channels.",
  },
  {
    icon: "Users",
    title: "Human-in-the-loop architecture",
    detail:
      "VANI augments your team. Sensitive, complex, and revenue-impacting cases always reach a human.",
  },
  {
    icon: "Layers",
    title: "True omnichannel",
    detail:
      "One system across calls, WhatsApp, chat, email, and social — unified context, no data silos.",
  },
  {
    icon: "Shield",
    title: "Built for regulated sectors",
    detail:
      "Compliance-aware architecture designed alongside the needs of financial services and healthcare teams.",
  },
  {
    icon: "Zap",
    title: "Not a generic chatbot",
    detail:
      "VANI is a structured AI support team — seven specialized agents working together, not a single general model.",
  },
  {
    icon: "BarChart3",
    title: "Performance visibility",
    detail:
      "Real-time dashboards track resolution rate, escalation accuracy, response time, and quality signals.",
  },
];

export const PRICING_TIERS = [
  {
    name: "Pilot",
    tagline: "For teams validating VANI on selected workflows.",
    description:
      "Start with focused channels and specific use cases. Validate AI performance and team fit before broader rollout.",
    features: [
      "Selected channel deployment",
      "Knowledge base setup and onboarding",
      "Dashboard and analytics preview",
      "Human handoff workflows",
      "Basic escalation rules",
      "Pilot review session",
    ],
    cta: "Request Demo",
    highlight: false,
  },
  {
    name: "Growth",
    tagline: "For organizations scaling across departments.",
    description:
      "Deploy across multiple channels and teams. Advanced analytics and escalation control for growing support operations.",
    features: [
      "Multi-channel deployment",
      "Advanced analytics and reporting",
      "Custom escalation and routing rules",
      "Team workflow configuration",
      "Quality review tooling",
      "Dedicated onboarding support",
    ],
    cta: "Talk to Sales",
    highlight: true,
  },
  {
    name: "Enterprise",
    tagline: "For regulated, high-volume organizations.",
    description:
      "Full security review, compliance workflows, and custom integrations for banks, hospitals, and enterprise operations.",
    features: [
      "Security and compliance review",
      "PHI / PII-aware workflows",
      "Advanced access control and RBAC",
      "CRM and ticketing integrations",
      "Complete audit log infrastructure",
      "Dedicated account management",
    ],
    cta: "Talk to Sales",
    highlight: false,
  },
];

export const FAQS = [
  {
    q: "Does VANI replace human support agents?",
    a: "No. VANI handles repetitive, high-volume inquiries so your human agents can focus on complex, sensitive, and revenue-impacting cases. The goal is to remove pressure from your team — not replace them.",
  },
  {
    q: "How does VANI handle sensitive cases?",
    a: "VANI's Escalation Agent continuously monitors for urgency signals, emotional distress, compliance triggers, and low AI confidence. When any threshold is met, the case is routed to a human agent with a full conversation summary and context.",
  },
  {
    q: "Can VANI work with voice calls and WhatsApp?",
    a: "Yes. VANI supports voice calls, WhatsApp, website chat, email, social media, and mobile app channels — all from a unified system.",
  },
  {
    q: "Can VANI support Arabic and English?",
    a: "Yes. VANI is built Arabic-first with strong English support. Both languages are handled natively across all channels.",
  },
  {
    q: "Does VANI train on our private data?",
    a: "No. Your knowledge base and conversation data are never used to train public or shared models. Your data is used exclusively to serve your customers within your isolated environment.",
  },
  {
    q: "Is VANI suitable for banks and hospitals?",
    a: "VANI is designed with these sectors in mind — compliance-aware architecture, PII and PHI-sensitive workflows, audit logs, human approval workflows, and sensitive-case routing are built into the system.",
  },
  {
    q: "Can VANI integrate with our CRM or ticketing system?",
    a: "Yes. VANI supports integration with major CRM and ticketing platforms. Integration scope and depth are reviewed during the onboarding process.",
  },
  {
    q: "What happens when the AI is not confident?",
    a: "VANI's Escalation Agent has a configurable confidence threshold. When AI confidence falls below your set level, the case is automatically routed to a human agent with full context — before the customer experiences any degradation in service quality.",
  },
];

export const SIMULATION_SCENARIOS = [
  {
    id: "hospital",
    label: "Hospital Appointment",
    icon: "Cross",
    customer: "السلام عليكم، أريد حجز موعد مع طبيب باطني في أقرب وقت ممكن.",
    customerEn: "Hello, I'd like to schedule an appointment with an internal medicine doctor as soon as possible.",
    vaniThinking: "Understanding intent → Appointment request, Internal Medicine dept → Retrieving availability policy...",
    vaniResponse:
      "مرحباً بك. يسعدني مساعدتك في حجز موعد. هل تفضل تحديد موعد خلال هذا الأسبوع أم الأسبوع القادم؟ كما يمكنني إرشادك لإتمام الحجز عبر التطبيق مباشرة إذا كنت مسجلاً لدينا.",
    vaniResponseEn:
      "Welcome. I'd be glad to help you schedule an appointment. Would you prefer a slot this week or next? I can also guide you to complete the booking through our app if you're registered.",
    escalation: false,
    knowledgeSource: "Appointments Policy v2.4 — Internal Medicine",
    confidence: 94,
    channel: "WhatsApp",
  },
  {
    id: "bank",
    label: "Bank Card Blocked",
    icon: "Landmark",
    customer:
      "My debit card was declined at the ATM just now. I need this resolved urgently — I'm traveling.",
    customerEn: "My debit card was declined at the ATM just now. I need this resolved urgently — I'm traveling.",
    vaniThinking:
      "Intent → Card declined, urgent context detected (traveling) → Checking card status policy → Escalation trigger: financial urgency + travel flag",
    vaniResponse:
      "I understand this is urgent, especially while you're traveling. I'm pulling up the steps to verify your card status and I'm flagging this conversation for immediate agent review. Can you confirm the last four digits of the card?",
    vaniResponseEn:
      "I understand this is urgent, especially while you're traveling. I'm pulling up the steps to verify your card status and I'm flagging this conversation for immediate agent review. Can you confirm the last four digits of the card?",
    escalation: true,
    escalationReason: "Financial urgency + travel context detected. Routing to senior banking support agent.",
    knowledgeSource: "Card Services Policy — Blocked & Declined Cards v1.9",
    confidence: 72,
    channel: "Mobile App",
  },
  {
    id: "school",
    label: "School Admissions",
    icon: "GraduationCap",
    customer:
      "Hi, I'd like to know the admission requirements for Grade 7 and whether you have any open seats for next year.",
    customerEn:
      "Hi, I'd like to know the admission requirements for Grade 7 and whether you have any open seats for next year.",
    vaniThinking:
      "Intent → Admissions inquiry, Grade 7, seat availability → Retrieving admissions policy and availability data...",
    vaniResponse:
      "Hello! For Grade 7 admissions, we typically require the student's last report card, a birth certificate copy, and a completed registration form. Seats for next year are currently open — I can send you the registration link or connect you with our admissions coordinator if you'd prefer to speak directly.",
    vaniResponseEn:
      "Hello! For Grade 7 admissions, we typically require the student's last report card, a birth certificate copy, and a completed registration form. Seats for next year are currently open — I can send you the registration link or connect you with our admissions coordinator if you'd prefer to speak directly.",
    escalation: false,
    knowledgeSource: "Admissions Guide AY 2025-2026 — Grade 7 Requirements",
    confidence: 91,
    channel: "Website Chat",
  },
  {
    id: "complaint",
    label: "Social Media Complaint",
    icon: "Share2",
    customer:
      "This is unacceptable. I've been waiting 3 weeks for a resolution on my complaint and no one has called me back.",
    customerEn:
      "This is unacceptable. I've been waiting 3 weeks for a resolution on my complaint and no one has called me back.",
    vaniThinking:
      "Intent → Escalated complaint, high frustration signal, unresolved case → Escalation trigger: emotional distress + prolonged unresolved complaint",
    vaniResponse:
      "I sincerely apologize for the delay — a 3-week wait is not acceptable and I understand your frustration. I'm immediately escalating this to a senior resolution agent who will contact you within 2 hours. Can you share your complaint reference number so we can prioritize your case?",
    vaniResponseEn:
      "I sincerely apologize for the delay — a 3-week wait is not acceptable and I understand your frustration. I'm immediately escalating this to a senior resolution agent who will contact you within 2 hours. Can you share your complaint reference number so we can prioritize your case?",
    escalation: true,
    escalationReason:
      "High emotional distress detected + prolonged unresolved complaint. Routing to senior customer resolution team with full transcript.",
    knowledgeSource: "Complaint Handling Policy v3.1 — Escalated Cases",
    confidence: 68,
    channel: "Social Media",
  },
];
