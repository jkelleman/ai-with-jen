---
title: "Portfolio"
description: "Selected case studies, frameworks, and systems — shipped at enterprise scale in AI content design, terminology governance, and agentic systems."
layout: "single"
aliases: ["/work/"]
---

<nav class="portfolio-toc" aria-label="Section overview">
  <a href="#enterprise-design-system">Enterprise Design System</a>
  <a href="#open-source-systems">Open Source Systems</a>
  <a href="#case-studies">Case Studies</a>
  <a href="#downloadable-samples">Resume &amp; Samples</a>
</nav>

<nav class="portfolio-railnav" aria-label="Jump to section">
  <a href="#enterprise-design-system" data-label="Enterprise Design System"><span class="rail-dot"></span></a>
  <a href="#open-source-systems" data-label="Open Source Systems"><span class="rail-dot"></span></a>
  <a href="#case-studies" data-label="Case Studies"><span class="rail-dot"></span></a>
  <a href="#downloadable-samples" data-label="Resume &amp; Samples"><span class="rail-dot"></span></a>
</nav>

<a id="backToTop" class="back-to-top" href="#" aria-label="Back to top">↑</a>
<script>
  (function() {
    var btn = document.getElementById('backToTop');
    if (btn) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 600) {
          btn.classList.add('visible');
        } else {
          btn.classList.remove('visible');
        }
      });
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    var navGroups = Array.prototype.slice.call(document.querySelectorAll('.portfolio-toc, .portfolio-railnav'));
    if (!navGroups.length) return;
    var allLinks = [];
    navGroups.forEach(function(nav) {
      allLinks = allLinks.concat(Array.prototype.slice.call(nav.querySelectorAll('a')));
    });
    var hrefs = Array.prototype.slice.call(new Set(allLinks.map(function(a) { return a.getAttribute('href'); })));
    var sections = hrefs.map(function(h) { return document.getElementById(h.slice(1)); });
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        var idx = sections.indexOf(entry.target);
        if (idx === -1) return;
        if (entry.isIntersecting) {
          var href = hrefs[idx];
          allLinks.forEach(function(l) {
            l.classList.toggle('active', l.getAttribute('href') === href);
          });
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    sections.forEach(function(s) { if (s) observer.observe(s); });
  })();
</script>

## Enterprise Design System

<p class="project-intro">Governance models, evaluation frameworks, and naming architecture — shipped inside Microsoft Fabric to make AI-assisted data engineering trustworthy at scale.</p>

<div class="project-grid">

<div class="project-card project-card--featured project-card--teal">
  <div class="project-header">
    <h4>Terminology Governance Systems</h4>
    <span class="project-scope">Microsoft Fabric Data Engineering</span>
  </div>
  <p>Canonical language for Lakehouse, Materialized Views, Monitoring, and agentic AI experiences. The naming layer that AI grounding depends on.</p>
</div>

<div class="project-card project-card--purple">
  <div class="project-header">
    <h4>AI-First Design Review</h4>
    <span class="project-scope">Framework</span>
  </div>
  <p>Governance model making AI influence explicit in design reviews. Pitched to leadership as a funded pilot.</p>
</div>

<div class="project-card project-card--amber">
  <div class="project-header">
    <h4>Content + AI Operating Model</h4>
    <span class="project-scope">Explore → Iterate → Scale</span>
  </div>
  <p>3-layer system producing reusable glossaries, evaluation rubrics, and onboarding templates across four product areas.</p>
</div>

<div class="project-card project-card--blue">
  <div class="project-header">
    <h4>Clarity Delta</h4>
    <span class="project-scope">Evaluation Metric</span>
  </div>
  <p>Scoring AI output on terminology accuracy, grounding fidelity, and task completion.</p>
</div>

<div class="project-card project-card--teal">
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

<div class="project-card project-card--purple">
  <div class="project-header">
    <h4>VibeHub</h4>
  </div>
  <p>Co-led a platform for democratizing UX engineering.</p>
  <div class="project-stat">
    <span class="stat-number">10,000+</span>
    <span class="stat-label">projects in production</span>
  </div>
</div>

<div class="project-card project-card--featured project-card--amber">
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

<div class="project-grid">

<div class="project-card project-card--featured project-card--teal">
  <div class="project-header">
    <h4>Semantic Metrics Modeling Assistant</h4>
    <span class="project-scope">MCP Agent · Semantic Layer Design</span>
  </div>
  <p>Built an MCP agent with a weighted trust-scoring model and lineage visualization over a governed schema, backed by 35+ tests at 90%+ coverage.</p>
  <p class="project-demonstrates"><strong>Demonstrates:</strong> Harness Engineering · AI Evaluation Systems · Semantic Layer Design</p>
  <a href="https://github.com/jkelleman/semantic-metrics-modeling-assistant" class="project-link" target="_blank" rel="noopener">View on GitHub →</a>
</div>

<div class="project-card project-card--purple">
  <div class="project-header">
    <h4>AI-Assisted Insights Agent</h4>
    <span class="project-scope">MCP Agent · Context Architecture</span>
  </div>
  <p>Grounded NL-to-SQL translation in a governed semantic layer so every answer ships with its query and data-quality caveats.</p>
  <p class="project-demonstrates"><strong>Demonstrates:</strong> Context Architecture · Decision Traceability · Responsible AI</p>
  <a href="https://github.com/jkelleman/ai-assisted-insights-agent" class="project-link" target="_blank" rel="noopener">View on GitHub →</a>
</div>

<div class="project-card project-card--amber">
  <div class="project-header">
    <h4>Wedding Planning Agent</h4>
    <span class="project-scope">Systems Design · Semantic Modeling</span>
  </div>
  <p>Modeled vendors and budget as structured entities with real-time dependency mapping and a fit-score that shows its reasoning.</p>
  <p class="project-demonstrates"><strong>Demonstrates:</strong> Semantic Layer Design · Decision Traceability · Intent Engineering</p>
  <a href="https://github.com/jkelleman/wedding-planning-agent" class="project-link" target="_blank" rel="noopener">View on GitHub →</a>
</div>

<div class="project-card project-card--blue">
  <div class="project-header">
    <h4>AI Content Design Handbook</h4>
    <span class="project-scope">Framework · Governance</span>
  </div>
  <p>Built a reusable framework of testing methods, bias-detection guides, and transparency templates.</p>
  <p class="project-demonstrates"><strong>Demonstrates:</strong> Acceptance Criteria Design · Responsible AI · Knowledge Systems Design</p>
  <a href="https://github.com/jkelleman/ai-content-design-handbook" class="project-link" target="_blank" rel="noopener">View on GitHub →</a>
</div>

</div>

---

## Case Studies

<p class="project-intro">Full-length projects in information architecture, taxonomy &amp; ontology, agent orchestration, and responsible AI — the research, trade-offs, and measurable outcomes behind each system.</p>

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

