---
title: "Portfolio"
description: "Selected case studies, frameworks, and systems — shipped at enterprise scale in AI content design, terminology governance, and agentic systems."
layout: "single"
aliases: ["/work/"]
---

## What I've built

<p class="project-intro">Systems, frameworks, and tools — shipped at enterprise scale.</p>

<div class="project-grid">

<div class="project-card project-card--featured">
  <div class="project-header">
    <h4>Terminology Governance Systems</h4>
    <span class="project-scope">Microsoft Fabric Data Engineering</span>
  </div>
  <p>Canonical language for Lakehouse, Materialized Views, Monitoring, and agentic AI experiences. The naming layer that AI grounding depends on.</p>
</div>

<div class="project-card">
  <div class="project-header">
    <h4>AI-First Design Review</h4>
    <span class="project-scope">Framework</span>
  </div>
  <p>Governance model making AI influence explicit in design reviews. Pitched to leadership as a funded pilot.</p>
</div>

<div class="project-card">
  <div class="project-header">
    <h4>Content + AI Operating Model</h4>
    <span class="project-scope">Explore → Iterate → Scale</span>
  </div>
  <p>3-layer system producing reusable glossaries, evaluation rubrics, and onboarding templates across four product areas.</p>
</div>

<div class="project-card">
  <div class="project-header">
    <h4>Clarity Delta</h4>
    <span class="project-scope">Evaluation Metric</span>
  </div>
  <p>Scoring AI output on terminology accuracy, grounding fidelity, and task completion.</p>
</div>

<div class="project-card">
  <div class="project-header">
    <h4>Promptcraft</h4>
    <span class="project-scope">Workshop</span>
    <span class="project-badge">Chosen for Microsoft Design Week 2025</span>
  </div>
  <p>Prompt engineering workshop teaching designers to get better AI output.</p>
  <div class="project-stat">
    <span class="stat-number">100+</span>
    <span class="stat-label">designers trained</span>
  </div>
</div>

<div class="project-card">
  <div class="project-header">
    <h4>VibeHub</h4>
  </div>
  <p>Co-led a platform for democratizing UX engineering.</p>
  <div class="project-stat">
    <span class="stat-number">10,000+</span>
    <span class="stat-label">projects in production</span>
  </div>
</div>

<div class="project-card project-card--featured">
  <div class="project-header">
    <h4>Deaf-Led Sign Language Experiences</h4>
    <span class="project-badge">3× Hackathon Executive Award</span>
    <span class="project-badge">Ability Executive Challenge Winner</span>
  </div>
  <p>3 workstreams advancing accessible sign language technology.</p>
</div>

</div>

---

## Open Source Systems

<p class="project-intro">Independent builds applying the same systems-design thinking — semantic layers, evaluation loops, and agent orchestration — outside the enterprise walls.</p>

<div class="article-grid">

<div class="article-tile article-tile--featured">
  <span class="tag tag-data">Semantic Layer Design</span>
  <h3>Semantic Metrics Modeling Assistant</h3>
  <p><strong>Design problem:</strong> Data teams face metric proliferation, trust deficits, and governance fragmentation — the same metric gets defined five different ways across dashboards, and no one can tell which version to trust.<br>
  <strong>System thinking:</strong> Built an MCP agent with a conversational interface over a 5-table persistent schema (metrics, history, tests, usage, trust). Trust is computed with a weighted scoring model — tests 35%, usage 20%, freshness 15%, documentation 15%, ownership 15% — with Mermaid/ASCII lineage visualization and circular-dependency detection.<br>
  <strong>Artifacts:</strong> Architecture diagram in the README, 5-table schema, 35+ pytest suite at 90%+ coverage, LookML/dbt/Tableau exporters.<br>
  <strong>What it demonstrates:</strong> <em>Harness Engineering</em> — the test suite and CI/CD-ready guardrails wrapping every metric definition. <em>AI Evaluation Systems</em> — the weighted, multi-dimensional trust rubric. <em>Semantic Layer Design</em> — the schema and lineage model that makes dependencies visible instead of implicit.</p>
  <a href="https://github.com/jkelleman/semantic-metrics-modeling-assistant" class="btn btn-outline" target="_blank" rel="noopener">View on GitHub →</a>
</div>

<div class="article-tile">
  <span class="tag tag-ai">Context Architecture</span>
  <h3>AI-Assisted Insights Agent</h3>
  <p><strong>Design problem:</strong> Analysts lose hours translating stakeholder questions into SQL, results ship with no audit trail, and business language ("active customers") never maps cleanly onto technical definitions.<br>
  <strong>System thinking:</strong> Grounded natural-language-to-SQL translation in a governed semantic layer, so every answer is explainable (query shown, metrics cited, data quality and assumptions surfaced) and reproducible (versioned metric definitions, saved query templates).<br>
  <strong>Artifacts:</strong> README with problem/solution architecture breakdown, example query translations, CI pipeline.<br>
  <strong>What it demonstrates:</strong> <em>Context Architecture</em> — grounding NL queries in a trusted semantic layer rather than free-floating prompts. <em>Decision Traceability</em> — every insight ships with the query and assumptions that produced it. <em>Responsible AI</em> — explicit disclosure of data quality and limitations instead of a black-box answer.</p>
  <a href="https://github.com/jkelleman/ai-assisted-insights-agent" class="btn btn-outline" target="_blank" rel="noopener">View on GitHub →</a>
</div>

<div class="article-tile">
  <span class="tag tag-content">Semantic Modeling</span>
  <h3>Wedding Planning Agent</h3>
  <p><strong>Design problem:</strong> Planning a wedding surfaced the same failure pattern I see in analytics platforms: information scattered across 68 vendor PDFs with zero semantic structure, invisible dependencies between decisions, and no way to tell if a vendor's quote was actually reasonable.<br>
  <strong>System thinking:</strong> Modeled vendor and budget data as structured entities (Venue → Price/Capacity/Dietary Options, Menu Item → Dietary Accommodations, Budget Allocation → Actual Spend), built real-time dependency mapping ("this menu → these beverages → this cost → this much budget remaining"), and replaced black-box recommendations with a fit-score that shows its reasoning.<br>
  <strong>Artifacts:</strong> README written as a design case study, an examples/templates/docs structure ("see it → try it → learn it"), worked fit-score examples.<br>
  <strong>What it demonstrates:</strong> <em>Semantic Layer Design</em> — turning messy PDFs into structured, queryable entities. <em>Decision Traceability</em> — every recommendation traces back to its source document and shows its logic. <em>Intent Engineering</em> — organizing the workflow around how people actually decide, not how the data happened to be filed.</p>
  <a href="https://github.com/jkelleman/wedding-planning-agent" class="btn btn-outline" target="_blank" rel="noopener">View on GitHub →</a>
</div>

<div class="article-tile">
  <span class="tag tag-career">Governance Framework</span>
  <h3>AI Content Design Handbook</h3>
  <p><strong>Design problem:</strong> Content designers had no shared, practical reference for the responsibilities that come with AI-powered products — evaluating AI output quality, disclosing AI use responsibly, structuring content so AI can consume it.<br>
  <strong>System thinking:</strong> Structured as a reusable framework — templates, workflows, and rubrics — rather than a static reference: a 5-method content testing framework, 7-type bias detection guide, and explicit transparency guidelines sit alongside day-to-day templates.<br>
  <strong>Artifacts:</strong> Indexed README, dedicated AI-content and conversational-design templates, workflow guides (Git for content designers, content review process), ethical AI guideline docs.<br>
  <strong>What it demonstrates:</strong> <em>Acceptance Criteria Design</em> — explicit, repeatable methods for evaluating AI-generated content. <em>Responsible AI</em> — bias detection and transparency built into the workflow, not bolted on. <em>Knowledge Systems Design</em> — a structured, reusable framework instead of one-off tribal knowledge.</p>
  <a href="https://github.com/jkelleman/ai-content-design-handbook" class="btn btn-outline" target="_blank" rel="noopener">View on GitHub →</a>
</div>

</div>

---

## Case Studies

[Request a case study →](mailto:jennifer.kelleman@gmail.com?subject=Case%20study%20request)

<div class="article-grid">

<div class="article-tile">
  <img src="/images/work/notebook-dependencies-monitoring.png" alt="Fabric interactive prototypes showing notebook run lineage tree and snapshot details" class="tile-image">
  <span class="tag tag-data">Data Infrastructure</span>
  <h3>Notebook Dependencies and Monitoring IA</h3>
  <p><strong>Project:</strong> Redesigned information architecture and status taxonomy for notebook monitoring surfaces.<br>
  <strong>Outcome:</strong> Created a dependency lineage model covering 9 runtime scenarios.<br>
  <strong>Impact:</strong> Made dependency status scannable during live incident response.</p>
  <div class="tile-stat">
    <span class="stat-number">9</span>
    <span class="stat-label">lineage scenarios covered</span>
  </div>
  <span class="tile-meta">Content Designer · IA Lead</span>
</div>

<div class="article-tile">
  <img src="/images/work/data-agents-content-research.png" alt="Feature Term Ranking chart showing survey results across 51 responses with stacked bar visualization" class="tile-image">
  <span class="tag tag-ai">AI Systems</span>
  <h3>Data Agents Naming and Terminology System</h3>
  <p><strong>Project:</strong> Named an autonomous AI product across a cross-functional team with competing preferences.<br>
  <strong>Outcome:</strong> Scored 60+ candidates against a structured constraint framework, validated by survey with 51 respondents.<br>
  <strong>Impact:</strong> Moved the team from deadlock to decision with evidence, not opinions.</p>
  <div class="tile-stat">
    <span class="stat-number">60+</span>
    <span class="stat-label">naming candidates evaluated</span>
  </div>
  <span class="tile-meta">Content Design Lead · Research Owner</span>
</div>

<div class="article-tile">
  <img src="/images/work/AI-content-governance-1.png" alt="From chat to context to agency — the new Copilot UX contract showing contextual autonomy, memory infrastructure, and trust contracts" class="tile-image">
  <span class="tag tag-ai">Governance</span>
  <h3>AI-First Content Governance</h3>
  <p><strong>Project:</strong> Built system-level content patterns and governance structures for AI-assisted authoring at scale.<br>
  <strong>Outcome:</strong> Established a repeatable quality framework across 24+ languages.<br>
  <strong>Impact:</strong> Cut review cycle time and extended terminology governance across the full localization pipeline.</p>
  <div class="tile-stat">
    <span class="stat-number">24+</span>
    <span class="stat-label">languages governed</span>
  </div>
  <span class="tile-meta">Principal Content Designer</span>
</div>

<div class="article-tile">
  <img src="/images/work/AI-content-governance-2.png" alt="AI UX Quality Scorecard showing dimensions for memory, grounding, delegation, agent control, and beyond chat" class="tile-image">
  <span class="tag tag-tools">Agent Systems</span>
  <h3>Multi-Agent Orchestration System</h3>
  <p><strong>Project:</strong> Designed and deployed a production agent orchestration system for career strategy and content design workflows.<br>
  <strong>Outcome:</strong> 8 specialized agents with custom skills, memory, and workflow automation across 320+ versioned files.<br>
  <strong>Impact:</strong> Turned a manual, scattered process into a repeatable, version-controlled operating system.</p>
  <div class="tile-stat">
    <span class="stat-number">8</span>
    <span class="stat-label">custom agents deployed</span>
  </div>
  <span class="tile-meta">Systems Designer · Architect</span>
</div>

</div>

---

## Downloadable Samples

<div class="portfolio-downloads">

<div class="portfolio-download-card">
  <h4>📄 Resume / CV</h4>
  <p>Full professional resume with experience, education, and certifications.</p>
  <a href="/resume/" class="btn btn-outline">View resume →</a>
  <a href="/files/jen-kelleman-resume.pdf" class="btn btn-outline" download>Download PDF ↓</a>
</div>

<!--
  ADD MORE DOWNLOADABLE SAMPLES HERE
  Copy the portfolio-download-card block above and update for each new sample.

  Example:

<div class="portfolio-download-card">
  <h4>📊 Portfolio Deck</h4>
  <p>Selected work samples and case study highlights.</p>
  <a href="/files/jen-kelleman-portfolio.pdf" class="btn btn-outline" download>Download PDF ↓</a>
</div>

<div class="portfolio-download-card">
  <h4>🎤 Speaker One-Pager</h4>
  <p>Bio, headshot, talk titles, and booking info for event organizers.</p>
  <a href="/files/jen-kelleman-speaker-kit.pdf" class="btn btn-outline" download>Download PDF ↓</a>
</div>
-->

</div>

---

<div class="resume-cta">
  <a href="/contact/" class="btn">Start the conversation →</a>
  <a href="/resume/" class="btn btn-outline">View resume →</a>
</div>

