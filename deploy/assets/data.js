/* Pathwisse placeholder/sample data — documents every piece of sample content
   rendered in pages/*.html, exactly as shown in the designs (SPEC.md).
   The backend replaces these values; nothing here is invented beyond SPEC.md. */
const PATHWISSE_DATA = {
  roadmaps: [
    { id: "ai-engineer", name: "AI engineer", modules: 4, lessons: 48, freeLessons: 8,
      description: "Build and ship products that use models, retrieval and evaluation.",
      tagline: "AI engineer, from first principles.",
      summary: "Build and ship products that use models, retrieval and evaluation. 4 modules, 48 lessons, each with a hands-on tool, a practice and a teach-back." },
    { id: "fde", name: "Forward deployed engineer", modules: 4, lessons: 48, freeLessons: 8,
      description: "Take AI into customer environments: scope, integrate and hand off.",
      tagline: "Forward deployed engineer, from first principles.",
      summary: "Take AI into customer environments: scope, integrate and hand off. 4 modules, 48 lessons, each with a hands-on tool, a practice and a teach-back." },
    { id: "agents", name: "AI agents developer", modules: 4, lessons: 48, freeLessons: 8,
      description: "Design agents that call tools and APIs, and test them properly." },
    { id: "system-design", name: "AI system design engineer", modules: 4, lessons: 48, freeLessons: 8,
      description: "Design the services and operations that keep AI systems reliable." }
  ],
  modules_ai_engineer: [
    { n: "01", name: "Python programming", lessons: 12, done: 3, free: 2 },
    { n: "02", name: "APIs and integration", lessons: 12, done: 0, free: 2 },
    { n: "03", name: "Applied AI", lessons: 12, done: 0, free: 0 },
    { n: "04", name: "Deploy and operate", lessons: 12, done: 0, free: 0 }
  ],
  modules_fde: [
    { n: "01", name: "Python programming", lessons: 12, done: 0 },
    { n: "02", name: "APIs and integration", lessons: 12, done: 0 },
    { n: "03", name: "Discovery and scoping", lessons: 12, done: 0 },
    { n: "04", name: "Communication and handoff", lessons: 12, done: 0 }
  ],
  lessons_module01: [
    { id: "01.01", title: "Variables, values and types", minutes: 30, free: true, done: true },
    { id: "01.02", title: "Conditions and Boolean logic", minutes: 30, free: true, done: true },
    { id: "01.03", title: "Loops and iteration", minutes: 30, free: false, done: true },
    { id: "01.04", title: "Functions and collections", minutes: 30, free: false, done: false, current: true },
    { id: "01.05", title: "Strings and structured files", minutes: 30, free: false, done: false },
    { id: "01.06", title: "Modules, imports and packages", minutes: 30, free: false, done: false },
    { id: "01.07", title: "Exceptions, validation and error handling", minutes: 30, free: false, done: false },
    { id: "01.08", title: "Classes, type hints and CLI apps", minutes: 30, free: false, done: false },
    { id: "01.09", title: "Program architecture and maintainability", minutes: 30, free: false, done: false },
    { id: "01.10", title: "Dependencies, configuration and logging", minutes: 30, free: false, done: false },
    { id: "01.11", title: "Performance and resource trade-offs", minutes: 30, free: false, done: false },
    { id: "01.12", title: "Customer-style tool delivery", minutes: 30, free: false, done: false }
  ],
  lesson_detail: {
    id: "01.01", title: "Variables, values and types",
    breadcrumb: "OVERVIEW / PYTHON PROGRAMMING / 01.01",
    meta: "LESSON 01 OF 12 · 30 MIN",
    video: { label: "PYTHON PROGRAMMING · LESSON 01.01", duration: "14:20" },
    quickTips: [
      "Names are case sensitive. Price and price are different.",
      "One equals sign assigns. Two compare.",
      "Use clear names like total_price."
    ],
    tool: { name: "Python playground", description: "Run code in the browser" },
    usedIn: ["Build a small price calculator", "Project: clean a CSV file"]
  },
  projects: [
    { id: "PR.01", title: "Document Q&A bot", tools: ["Python", "OpenAI", "Chroma"], build: "Build a bot that answers questions from your own PDFs." },
    { id: "PR.02", title: "Support chatbot with retrieval", tools: ["FastAPI", "Postgres"], build: "Add retrieval to a chatbot so it stops guessing." },
    { id: "PR.03", title: "Evaluate a model", tools: ["Python", "pytest"], build: "Score a model on a small test set you design." },
    { id: "PR.04", title: "Deploy a model API", tools: ["Docker", "FastAPI", "Render"], build: "Wrap a model in an API and ship it." },
    { id: "PR.05", title: "Trace a failing agent", tools: ["Python", "LangSmith"], build: "Find out why an agent loops and fix it." }
  ],
  project_detail_PR01: {
    id: "PR.01", title: "Document Q&A bot", hours: 4,
    brief: "A small bot that reads a PDF and answers questions about it. It should quote the passage it used and say so when the document does not contain the answer.",
    inThisProject: [
      "Splitting a document into pieces",
      "Turning pieces into searchable vectors",
      "Fetching the best pieces for a question",
      "Asking the model to answer only from them",
      "Checking answers against a few test questions"
    ],
    lessonsUsed: [
      { title: "Variables, values and types", note: "Names and types" },
      { title: "Functions and collections", note: "Reusable code" },
      { title: "HTTP requests, responses and methods", note: "Calling APIs" },
      { title: "Embeddings and retrieval", note: "Search by meaning" }
    ]
  },
  community_people: [
    { initials: "MI", name: "Meera Iyer", role: "Forward deployed engineer · Northwind Labs", bio: "Moved from support engineering into FDE. Happy to review project write-ups.", tag: "MENTOR" },
    { initials: "AR", name: "Arjun Rao", role: "AI engineer · Cobalt AI", bio: "Batch of 2024. Built retrieval systems for fintech. Shares interview notes.", tag: "ALUMNI" },
    { initials: "SQ", name: "Sana Qureshi", role: "Hiring manager · Fieldstone", bio: "Hiring two AI engineers and one FDE. Reads every project link.", tag: "HIRING" },
    { initials: "DM", name: "Dev Malhotra", role: "Student · NIT Calicut", bio: "Working through the Python module. Looking for a study partner.", tag: "PEER" },
    { initials: "NV", name: "Nisha Verma", role: "AI agents developer · Orbit", bio: "Builds tool-calling agents. Posts weekly debugging tips.", tag: "MENTOR" },
    { initials: "KN", name: "Karthik Nair", role: "Solutions engineer · Brightpath", bio: "Customer-facing technical role. Can explain what FDE interviews test.", tag: "ALUMNI" },
    { initials: "PM", name: "Priya Menon", role: "Student · IIIT Hyderabad", bio: "Building the document Q&A project. Open to pair debugging.", tag: "PEER" },
    { initials: "RD", name: "Rohan Das", role: "Recruiter · Helix Systems", bio: "Sources early career AI talent from Pathwisse portfolios.", tag: "HIRING" },
    { initials: "AR2", name: "Anjali Reddy", role: "AI system design engineer · Lattice", bio: "Reviews architecture diagrams and capacity thinking.", tag: "MENTOR" }
  ],
  community_companies: [
    { initials: "N", name: "Northwind Labs", location: "Bengaluru", note: "3 open roles open to students from this roadmap." },
    { initials: "C", name: "Cobalt AI", location: "Hyderabad", note: "2 open roles open to students from this roadmap." },
    { initials: "F", name: "Fieldstone", location: "Pune", note: "FDE, AI engineer open to students from this roadmap." },
    { initials: "O", name: "Orbit", location: "Remote", note: "Agents developer open to students from this roadmap." },
    { initials: "B", name: "Brightpath", location: "Chennai", note: "Solutions, FDE open to students from this roadmap." },
    { initials: "L", name: "Lattice", location: "Gurugram", note: "System design open to students from this roadmap." }
  ],
  community_posts: [
    { initials: "MI", name: "Meera Iyer", meta: "FDE · Northwind Labs · 2h", body: "Northwind is opening two forward deployed engineer roles for freshers. They care about clear write-ups more than long projects. Happy to answer questions here.", tags: ["ROLES AND HIRING", "FDE"], likes: 24, replies: 6 },
    { initials: "DM", name: "Dev Malhotra", meta: "Student · NIT Calicut · 3h", body: "What did your first FDE interview round look like? Trying to prepare for a customer scenario round.", tags: ["INTERVIEW PREP"], likes: 9, replies: 2,
      replyThread: [
        { initials: "KN", name: "Karthik Nair", meta: "1h", body: "They ask you to walk through a messy customer setup. Practise explaining your steps out loud." },
        { initials: "DM", name: "Dev Malhotra", meta: "42m", body: "Thanks, this helps. Did they ask about APIs too?" }
      ] },
    { initials: "NV", name: "Nisha Verma", meta: "Agents developer · Orbit · 5h", body: "Tip for the Trace a failing agent project: log every tool call with its input. My loop bug was one vague instruction.", tags: ["PROJECTS", "AGENTS"], likes: 31, replies: 8 },
    { initials: "PM", name: "Priya Menon", meta: "Student · IIIT Hyderabad · Yesterday", body: "Finished the Document Q&A bot. Sharing my repo and a short write-up. Feedback welcome.", tags: ["PROJECTS"], likes: 17, replies: 5 }
  ],
  community_stats: { members: 1284, onlineNow: 47 },
  profile_ada: {
    name: "Ada Lovelace", handle: "@ada.lovelace", joined: "Nov 2026", email: "ada@college.edu",
    badges: ["WORKING PROFESSIONAL", "STUDENT", "AI ENGINEER"],
    bio: "Learning to build and ship AI products. Currently on the AI engineer roadmap.",
    linkedin: "linkedin.com/in/ada-lovelace", github: "ada-lovelace", school: "NIT Calicut",
    stats: { lessons: 3, projects: 1, posts: 2 },
    buildingNow: { title: "Document Q&A bot", status: "IN PROGRESS", tools: ["Python", "OpenAI", "Chroma"], note: "Reads a PDF and answers questions with the passage it used." },
    posts: [
      { title: "How I split a PDF for retrieval", status: "PUBLISHED", age: "2 days ago", likes: 14, note: "A short write-up of the chunk sizes I tried and what worked best." },
      { title: "My first week on the AI engineer roadmap", status: "PUBLISHED", age: "6 days ago", likes: 9, note: "What surprised me and what I would do differently." }
    ],
    sharesLeftToday: 10
  },
  profile_meera: {
    name: "Meera Iyer", handle: "@meera.iyer", joined: "Sep 2026",
    badges: ["WORKING PROFESSIONAL", "MENTOR", "FDE"],
    bio: "Forward deployed engineer at Northwind Labs. Mentor for the FDE track.",
    linkedin: "linkedin.com/in/meera-iyer", github: "meera-iyer", school: "Northwind Labs",
    stats: { lessons: 3, projects: 1, posts: 2 },
    built: [
      { title: "Support chatbot with retrieval", tools: "Python · FastAPI · Postgres", note: "Cut made-up answers by pulling the top three passages for each question." },
      { title: "Deploy a model API", tools: "Docker · FastAPI · Render", note: "Caching repeated prompts brought latency down." }
    ],
    posts: [
      { title: "What FDE interviews really test", status: "PUBLISHED", age: "1 week ago", likes: 48, note: "Three scenarios I saw and how I structured my answers." },
      { title: "Writing a customer handoff note", status: "PUBLISHED", age: "3 weeks ago", likes: 31, note: "A template I reuse on every deployment." }
    ]
  },
  account_form: {
    username: "ada.lovelace", displayName: "Ada Lovelace", github: "ada-lovelace",
    linkedinUrl: "https://www.linkedin.com/in/ada-lovelace", school: "NIT Calicut",
    primaryTrack: "AI engineer", lessonsPerWeek: 3, timezone: "Asia/Kolkata"
  }
};
