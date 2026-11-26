# **Content audit — amandadroy.com**

**The portfolio now has sufficient breadth, but it needs substantially more depth, stronger editorial prioritization and less repetition.**

The latest iteration has addressed many of the structural issues we previously identified. Individual agency engagements have been separated into case studies, capability-based browsing has been introduced, the About page has a more personal narrative, and the homepage metrics now link to supporting work.

However, the expansion has introduced a new problem: the portfolio is becoming a comprehensive inventory of professional experience rather than a carefully curated collection of compelling work.

I've audited the latest content and page templates in the [Next.js repository](https://github.com/amandadr/amandadroy-com?utm_source=chatgpt.com). The live domain still returns an older React snapshot to my web crawler, so I cannot independently verify the current production rendering or actual browsing behaviour. The navigation and content findings below are based on the current source implementation.

## **1. Content and usability scorecard**

**Professional positioning**

8/10

Clear specialization and coherent professional identity.

**Breadth of experience**

9/10

Excellent coverage across SEO, engineering, data and AI.

**Navigation structure**

7/10

Logical categories, but too many overlapping browsing paths.

**Content scanability**

6/10

Repeated metadata and inconsistent summary visibility.

**Case study depth**

4/10

Most entries describe the work without sufficiently demonstrating it.

**Technical evidence**

4/10

Too few artifacts, examples and methodological explanations.

**Distinctive personal voice**

6/10

Strong About page; project descriptions remain formulaic.

**Recruiter experience**

7/10

Good entry points, but unnecessary browsing and CV-request friction.

Qualitative editorial assessments based on the current source, not measured usability-test results.

## **2. Is the content too thin?**

Yes — but primarily in the case studies, not across the website as a whole.

# **37**

Project records

# **25**

Designated case studies

# **6**

Homepage featured projects

The problem is the disparity between how many projects are described as case studies and how much substantive detail those case studies provide.

Approximate narrative word counts from the current project data, excluding technology tags, metadata and interface labels:

SEO Rankings Report

291

Good Robot Brewing

263

WordPress Venue Management

233

PCP Economic Dashboard

232

B2B SaaS organic growth

210

Marketplace rendering

193

Enterprise migration & QA

185

Editorial workflow automation

177

AI SaaS content architecture

173

Hyrule Merchant

62

These lengths aren't inherently problematic for project summaries. However, a 180-word entry divided into seven sections is unlikely to communicate the complexity of an enterprise migration, architectural investigation or engineering project.

Many of the current case studies function as **expanded résumé entries**.

There is no universal SEO minimum word count, and shorter pages aren't automatically low quality. The relevant question is whether each page delivers enough original information to justify its existence and satisfy a technically interested visitor.

For many of the current entries, the answer is not yet.

## **3. Browsing: the Work page is becoming unnecessarily complicated**

The [Work page implementation](https://github.com/amandadr/amandadroy-com/blob/main/src/app/work/page.tsx?utm_source=chatgpt.com) currently provides two complete ways of browsing the portfolio on the same page:

- Browse by discipline: Technical SEO, Web Engineering, Data & Automation, Applied AI.
- Browse by project type: Professional Work, Tools & Infrastructure, Independent Builds, Archive.

Both classifications are valuable, but displaying both complete directories creates repetition. Projects associated with multiple disciplines appear several times before appearing again in the main directory.

Furthermore, the discipline navigation looks like a filtering mechanism in the implementation, but actually consists of anchor links to different sections.

### **Recommendation: one directory, multiple browsing dimensions**

Create a single project index with capability filtering. Retain project type as secondary metadata rather than another full directory.

## **Work directory**

AllSEODevelopmentAutomationAI

6 projects

All project types

Agency engagement · Recommendation delivered

**Marketplace rendering architecture**

Rendering strategy and Next.js recommendations for a large marketplace.

SEO · Development

Open-source tool · Source available

**SEO Rankings Report**

Repeatable page- and query-level analysis using the Search Console API.

SEO · Automation

Consulting · Launched

**Good Robot Brewing**

Commerce architecture, custom integrations and website modernization.

Development · SEO

Agency engagement · Delivered

**Editorial workflow automation**

Human-reviewed publishing workflow that roughly tripled production capacity.

AI · Automation

Consulting · Delivered

**Pictou County Partnership**

Regional data modelling and investor-facing Tableau dashboard.

Automation

Independent build · Prototype

**Hyrule Merchant**

Programmatic page generation and build-time data validation.

Development

Interactive example of the proposed browsing experience, using a subset of existing projects.

This could be implemented through progressive enhancement of the statically rendered directory. Maintain shareable filter state and preserve access to every project without JavaScript.

### **Additional browsing improvements**

| Current behaviour                                  | Recommended change                                                                                       |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Compact project rows hide summaries                | Always show a one-sentence description                                                                   |
| Technology lists dominate compact entries          | Prioritize the problem solved and contribution                                                           |
| Project identifiers occupy prominent space         | Demote identifiers to secondary metadata                                                                 |
| Every project links back to All Work               | Add breadcrumbs and relevant discipline links                                                            |
| Related projects appear only at the end            | Include contextual links within case study prose                                                         |
| Lab entries appear in capability groups and Lab    | Include them only when the visitor explicitly chooses to browse experiments, or clearly distinguish them |
| Professional projects appear in source-array order | Establish deliberate editorial ordering                                                                  |

The biggest immediate issue is hiding summaries in compact entries. In `CaseRow.tsx`, summaries are conditionally rendered only for non-compact projects.

A visitor encountering **Newfie**, **Eastward** or **UX experimentation practice** should not need to open a page just to understand why it might interest them.

## **4. Reduce the number of standalone case studies**

Not every experience warrants an independent project page.

The previous content expansion went too far in treating individual responsibilities, related workstreams and general professional practices as discrete case studies.

There are several instances of substantial conceptual overlap.

| Existing pages                                                                     | Recommended action                                                                                     |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Human-reviewed AI editorial automation + Squarespace publishing automation         | Merge into one comprehensive case study                                                                |
| Good Robot Brewing + UX experimentation practice                                   | Integrate experimentation into the main commerce case study                                            |
| MacMillan Search Practice + Multi-site technical SEO + Technical audit methodology | Establish one agency practice hub and one substantial audit methodology article                        |
| B2B SaaS organic growth + SEO Rankings Report                                      | Keep separate, but clearly distinguish the growth engagement from the software tool                    |
| Paid vs organic attribution                                                        | Incorporate into agency experience until more detailed evidence is available                           |
| LLM evaluation practice                                                            | Retain as an experience entry or develop into a substantive methodology article                        |
| MRC + This portfolio                                                               | Keep separate; differentiate consultancy architecture from cross-platform design-system implementation |

The Squarespace publishing entry is the clearest example of unnecessary duplication. Both it and the editorial automation case study describe the same technologies, workflow and roughly threefold productivity improvement.

A visitor could reasonably conclude that they represent separate accomplishments, when the content describes substantially the same engagement.

**Fewer, stronger pages would improve credibility more than additional project pages.**

If merging already-public URLs, implement permanent redirects where your hosting environment supports them and update internal links, canonicals and sitemap entries.

## **5. Establish a content hierarchy**

I would restructure the catalogue around four editorial levels.

**Tier 1 — Signature case studies**

Approximately 6–8 projects · Suggested 600–1,200 words where justified

Your most consequential work. Detailed investigations, original artifacts, technical decisions, implementation, results and limitations.

**Tier 2 — Supporting projects**

Approximately 10–15 projects · Suggested 200–500 words

Focused descriptions of meaningful builds, recommendations and engagements, with enough information to understand your contribution.

**Tier 3 — Lab notes**

Variable length

Experiments with explicit research questions, current status, observations and unresolved problems.

**Tier 4 — Archive**

Short descriptions and external links

Earlier development work that demonstrates progression but does not require full editorial treatment.

The suggested word counts are editorial guidelines, not search engine requirements. The underlying evidence should determine how much content is necessary.

### **Recommended signature case studies**

| Project                                | Primary strength                                        |
| -------------------------------------- | ------------------------------------------------------- |
| SEO Rankings Report                    | Search engineering and automation                       |
| B2B SaaS organic growth                | Measurable SEO performance                              |
| Marketplace rendering architecture     | JavaScript SEO and technical strategy                   |
| Good Robot Brewing                     | Engineering ownership and system integration            |
| Enterprise website migration           | Technical risk management and QA                        |
| Human-reviewed AI editorial automation | Applied AI and measurable efficiency                    |
| PCP Economic Dashboard                 | Analytical problem-solving                              |
| MRC website                            | Design systems, structured content and web architecture |

These eight projects should receive the majority of your content-development effort.

The rest of the portfolio should support them, not compete with them for attention.

## **6. The case studies are too formulaic**

The [current case study template](https://github.com/amandadr/amandadroy-com/blob/main/src/app/work/%5Bslug%5D/page.tsx?utm_source=chatgpt.com) supports optional sections, but much of the existing content still follows the same narrative structure.

That means many pages repeatedly explain that:

- A system needed to be maintainable.
- Manual processes did not scale.
- Technical decisions needed to support stakeholders.
- The chosen approach was practical and repeatable.
- The outcome was a useful deliverable.

These are sound professional principles, but they become generic through repetition.

**The most interesting information is what was specific to each problem.**

### **Example: PCP Economic Dashboard**

The current implementation section reads:

> Structured census, housing, economic and climate inputs; validated joins and calculations; documented update workflows; and oriented the dashboard narrative to partnership questions rather than decorative charts.

This communicates the responsibilities, but not the analytical challenge.

Your earlier application materials provide considerably more interesting information: the best available census data was from 2021, the desired North Shore region didn't correspond to an official Statistics Canada geography, and you worked with stakeholders to define and aggregate five county-level datasets.&#x20;

Resume October 2026(2).pdf



A stronger case study would organize itself around those decisions.

### Defining a region that doesn't officially exist

One of the first challenges emerged before dashboard wireframes were developed. The regional comparison stakeholders wanted to present included Nova Scotia's North Shore, but the North Shore is not an official Statistics Canada reporting geography.

Rather than use a superficially similar geographic boundary, I worked with Pictou County Partnership to establish a definition that reflected the region they wanted to represent. I then aggregated five county-level datasets using consistent definitions to construct the regional comparison.

This decision influenced how indicators were sourced, calculated and presented. The resulting methodology was documented alongside the dashboard so future updates could preserve the same geographic assumptions.

### Designing around the census cycle

A second constraint was data freshness. The most authoritative census data available during development was from 2021, making it unsuitable for presentation as a permanently current economic snapshot.

I structured the data layer, documentation and handoff around future refreshes, including the expected availability of new census data in 2027. The objective was to deliver a living analytical asset rather than a dashboard that would need to be rebuilt whenever its underlying data changed.

That is the level of specificity the portfolio needs.

It explains the problem, your decision, your reasoning and the practical implications without relying on generic statements about systems thinking.

## **7. Specific content critiques for each flagship project**

### **SEO Rankings Report**

Current depth: approximately 291 narrative words

This is currently your flagship project, but its description doesn't explain enough about the actual software.

The case study should answer:

| Technical question                  | Content to develop                                             |
| ----------------------------------- | -------------------------------------------------------------- |
| What goes in?                       | GSC property, date ranges, configuration and filters           |
| How is data acquired?               | API requests, authentication, pagination and caching           |
| What is calculated?                 | Page-level and query-level comparison methodology              |
| What constitutes a winner or loser? | Ranking logic, thresholds and handling of edge cases           |
| How are results presented?          | Markdown output, JSON data and example reports                 |
| What are the limitations?           | Search Console aggregation, incomplete data and interpretation |
| How is it maintained?               | Configuration, modularity, testing and reuse                   |

Retrieve those details from the [actual repository](https://github.com/amandadr/seo-rankings-report?utm_source=chatgpt.com), rather than expanding the narrative through assumptions.

Include a genuine sanitized or synthetic report.

This project could be an exceptionally convincing demonstration of your engineering approach to SEO, but visitors currently need to leave your portfolio and investigate GitHub themselves to establish that depth.

### **B2B SaaS organic growth**

Current depth: approximately 210 narrative words

The 226% metric is compelling, but it currently carries too much of the case study.

Explain the acquisition problem preceding the work, why those particular pages were selected, how different opportunities were classified, what types of revisions were made and how performance informed the following month's work.

Most importantly, explain the measurement methodology.

## **226% average organic click growth**

Current claim

| Measured population | 18 written or refreshed pages                                     |
| ------------------- | ----------------------------------------------------------------- |
| Engagement duration | Six months                                                        |
| Metric              | Google Search Console organic clicks                              |
| Aggregation         | Document precisely how the average was calculated                 |
| Distribution        | Several high-performing pages influenced the average              |
| Limitations         | Not necessarily representative of sitewide or typical page growth |

Being transparent about the distribution would strengthen your credibility considerably. Your own application notes already recognize the influence of the strongest performers on the aggregate result.

If the underlying data is unavailable for publication, explain the methodology and limitations rather than constructing a fictitious performance chart.

### **Marketplace rendering architecture**

Current depth: approximately 193 narrative words

This is one of your most valuable case studies for technical SEO roles, but it currently amounts to a statement that you investigated a React application and recommended Next.js.

Develop the investigation itself.

Explain what rendering-related observations informed the recommendation, whether the issues involved initial HTML, rendered HTML, routing, internal linking, metadata or other architectural considerations, and what made the recommendation suitable for this marketplace.

A useful structure would be:

Maintain the distinction between **recommendation delivered** and **implementation completed**.

Also, don't frame Next.js as inherently better for SEO than React. Next.js itself is a React framework. The interesting discussion concerns rendering strategies and architectural capabilities.

### **Good Robot Brewing**

Current depth: approximately 263 narrative words

Your most comprehensive commercial development engagement deserves considerably more attention.

The current case study mentions two WordPress origins, custom plugins, data mapping, payments, DNS/CDN, events management and fulfillment. These are presented as a collection of responsibilities rather than an interconnected system.

Conceptual system diagram for editorial planning. Verify the actual architecture before publication.

Develop the narrative around:

- Why e-commerce required broader website modernization.
- What architectural dependencies needed to be resolved.
- How content, events, products and fulfillment were coordinated.
- Why custom plugins were necessary.
- How you approached migration risk and launch readiness.
- What you would improve in a future iteration.

Link directly to the venue management and Trexity plugin pages within the appropriate sections.

The current related-project data includes venue management but does not directly reference your WooCommerce-to-Trexity project. That is a missed opportunity to connect the commercial engagement with publicly inspectable engineering work.

### **Enterprise website migration & QA**

Current depth: approximately 185 narrative words

Rather than repeatedly mentioning the clean 224-URL QA result, show what constituted successful validation.

A case study artifact could be a migration acceptance matrix:

| Validation area                | Documented observation                |
| ------------------------------ | ------------------------------------- |
| Internal 4xx and 5xx responses | None identified in the 224-URL QA set |
| Redirect chains and loops      | None identified in the QA set         |
| Redirect configuration         | Additional remediation documented     |
| XML sitemaps                   | Follow-up issues documented           |
| Hreflang                       | Follow-up issues documented           |

Then explain why these observations mattered, how they were communicated and what the remaining work involved.

A sanitized URL mapping example and QA methodology would demonstrate much more expertise than the metric alone.

### **Human-reviewed AI editorial automation**

Current depth: approximately 177 narrative words

This project has enormous potential because it combines software development, LLM usage, editorial processes, search optimization and accuracy-sensitive content.

The current page identifies the workflow and the approximate threefold productivity improvement but doesn't explain how the process managed quality.

Include an annotated example showing how expert source material progressed through the workflow.

PROPOSED CASE STUDY ARTIFACT

1. Source transcript excerpt
2. Structured editorial outline
3. AI-assisted draft
4. Human verification and corrections
5. CMS-ready content

**What the artifact should demonstrate**

Where automation saves time, where errors can be introduced, and where human review remains indispensable.

A synthetic example using nonconfidential material would be entirely suitable.

You should also distinguish this work from GEO experimentation. It proves applied AI and content-engineering capabilities; it doesn't independently prove improved visibility in AI-generated search answers.

### **MRC website**

Current depth: approximately 231 narrative words

The MRC theme is a much more substantial technical project than its current description suggests.

You already have extensive design-system documentation, component fixtures, architectural principles and structured publishing infrastructure.

Feature those assets directly.

The case study should discuss:

| Area                 | Evidence                                                          |
| -------------------- | ----------------------------------------------------------------- |
| Design system        | Tokens, semantic roles and CUBE CSS                               |
| Composition          | Shared layout primitives and responsive behaviour                 |
| CMS architecture     | Ghost routes, collections and templates                           |
| Content architecture | Glossary taxonomy and internal relationships                      |
| Accessibility        | Design requirements and documented testing                        |
| Maintainability      | Component fixtures, documentation and editorial workflows         |
| GEO research         | Hypotheses, experiments and verified observations where available |

Your existing documentation means much of this case study can be developed from material you've already produced.

## **8. Strengthen information scent**

Information scent is a UX concept describing how visitors determine whether a link or navigational path is likely to lead to information they need.

Several of your project titles are technically accurate but insufficiently descriptive.

| Current title                      | More informative title                                      |
| ---------------------------------- | ----------------------------------------------------------- |
| SEO Rankings Report                | SEO Rankings Report — Automated Search Performance Analysis |
| Marketplace rendering architecture | JavaScript SEO for a Large-Scale Marketplace                |
| Multi-site technical SEO           | Technical SEO Across Large Multi-Site Portfolios            |
| Enterprise content consolidation   | Consolidating Fragmented Enterprise Content Architecture    |
| B2B technical editorial            | Managing a B2B Technical Publication                        |
| Eastward                           | Eastward — A Location-Driven Next.js Travel Platform        |
| Hyrule Merchant                    | Hyrule Merchant — Programmatic E-commerce Architecture      |
| This portfolio                     | Building a Shared Design Language Across Ghost and Next.js  |

You don't necessarily need to use these longer versions as the official project names.

Instead, introduce a distinction between `title` and `headline`.

```
{
  title: "SEO Rankings Report",
  headline: "Making organic search analysis repeatable",
  summary: "A configurable Python reporting pipeline...",
}
```

This allows the product name to remain recognizable while the editorial headline communicates why the project matters.

The headline can be used on featured cards and case study pages, with the product name retained in metadata and compact directories.

## **9. Improve readability and scanability**

The current case study pages contain several successive introductory elements:

Current content sequence

01

Project identifier

02

Eyebrow

03

Project title

04

Summary

05

Overview

06

Anonymization disclosure

07

Outcome list

08

Role, context, status and year

09

Technology list

10

External links

11

Case study narrative

That is a substantial amount of introductory material before the substantive article begins.

There is also significant overlap between the summary, overview, outcome list and narrative introduction.

I would consolidate the case study header.

AGENCY ENGAGEMENT · 2024–2025

# **Making organic search analysis repeatable**

SEO Rankings Report — a Python tool for recurring page- and query-level search performance comparisons.

MY ROLE

Developer & SEO specialist

DELIVERABLE

Reusable reporting tool

Python · GSC API · JSON · Markdown

Source code

Example report

## **Why I built it**

Begin the substantive narrative immediately, rather than repeating the project introduction several times.

Suggested compact article header.

Other content improvements:

- Expand acronyms on first use, especially IA, GSC, PSI and GBP.
- Use descriptive subheadings instead of generic labels wherever possible.
- Reserve bold text for key decisions, findings and outcomes.
- Break long technical explanations into figures, tables or short code examples.
- Introduce tables of contents only for articles substantial enough to benefit from them.

The [project template](https://github.com/amandadr/amandadroy-com/blob/main/src/app/work/%5Bslug%5D/page.tsx?utm_source=chatgpt.com) still primarily renders prose strings. Introducing rich editorial content blocks should now be a priority.

## **10. The writing needs more personality and specificity**

The About page is much stronger than the previous version. It establishes an intellectual connection between your English degree, development background, SEO practice and interest in useful systems.

Unfortunately, much of that personality disappears in the project descriptions.

Some examples from the current content:

| Existing phrase                                                                    | Editorial issue                                                                |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| "A durable audit method"                                                           | Doesn't explain what distinguishes the methodology                             |
| "Clearer lead-acquisition conversations"                                           | Vague outcome                                                                  |
| "A consolidation recommendation package stakeholders could evaluate"               | Describes a deliverable without explaining its substance                       |
| "A live public presence and an application architecture ready for membership work" | Needs clearer distinction between available functionality and planned features |
| "Stronger instincts for when AI assistance is trustworthy"                         | Subjective claim without supporting examples                                   |
| "Without pretending billing is finished before it is"                              | Reads defensively rather than professionally                                   |

I would establish a writing standard based on specificity.

Replace descriptions of desirable qualities with descriptions of actual decisions.

| Instead of       | Write about                                                                       |
| ---------------- | --------------------------------------------------------------------------------- |
| Maintainability  | What a future maintainer needs to change, and how                                 |
| Scalability      | What grows, which dependencies become expensive and how the architecture responds |
| Accessibility    | Specific barriers identified, decisions made and validation performed             |
| Automation       | Inputs, outputs, transformations, error handling and human intervention           |
| Technical SEO    | Observations, diagnosis, recommendations and evidence                             |
| Systems thinking | Dependencies and trade-offs that influenced a decision                            |

Additionally, some case studies describe alternatives that aren't established in your original résumé material, such as spreadsheet templates breaking, custom storefront alternatives being prohibitively expensive, or specific analytics approaches being rejected.

These may be accurate, but they need verification. Do not manufacture retrospective design deliberations simply because the template has an Alternatives Considered section.

## **11. Make the Experience page a better recruiter resource**

The current Experience page is substantially more comprehensive and its individual achievements now link to relevant case studies.

However, I would simplify the repeated links.

For example, the MacMillan Search entry has ten detailed achievement links followed by a separate selected-work link group. MRC has a similar pattern.

Use linked accomplishments as the primary navigation mechanism and eliminate the redundant project-link group unless it serves a genuinely different purpose.

### **Address the CV-request friction**

The website now deliberately requires visitors to email you to request a current résumé.

This is a reasonable decision if you want to tailor every résumé and avoid publishing personal information. However, it introduces friction for recruiters who are reviewing dozens of candidates.

I'd retain your email-based CV request policy but add a highly scannable professional profile section at the top of Experience.

## **Professional profile**

| Specialization    | Technical SEO & software development                  |
| ----------------- | ----------------------------------------------------- |
| Experience        | 3+ years across agency and consulting environments    |
| Industries        | B2B SaaS, AI, marketplaces, e-commerce and enterprise |
| Core technologies | Next.js, React, Python, SQL, WordPress                |
| Location          | Atlantic Canada · Remote                              |

A current, role-specific CV is available by email.

Request a CV

Make the page useful as a web résumé in its own right. Consider adding print-specific CSS so recruiters can save a clean PDF of the page without needing to request a separate document.

## **12. Develop the Lab into something genuinely interesting**

The Lab currently contains three projects: Hyrule Merchant, Newfie and Home Camera Pipeline.

Their narrative descriptions range from approximately 44 to 62 words. They describe what was built but don't substantially discuss what was learned.

The Lab should be where you demonstrate intellectual curiosity, research discipline and ongoing professional development.

A strong lab entry should contain a question, an approach, observations and unresolved issues.

For example, these would be valuable future experiments:

| Experiment                               | Question to investigate                                                                  |
| ---------------------------------------- | ---------------------------------------------------------------------------------------- |
| JavaScript rendering and discoverability | How does content availability differ across CSR, SSR and static generation?              |
| Programmatic page generation             | How can template-driven pages remain useful, distinctive and indexable at scale?         |
| AI citation visibility                   | How consistent are source citations across repeated prompts and platforms?               |
| Structured entity relationships          | How can semantic content architecture improve the clarity of entity representation?      |
| Image-heavy Next.js performance          | Which image-loading and layout strategies produce measurable performance improvements?   |
| Multi-brand design systems               | How can two websites share foundations without developing homogeneous visual identities? |
| Automated technical SEO validation       | Which crawl, metadata and structured-data checks can reliably become build-time tests?   |

These would be future research projects, not claims about experiments already completed.

The Lab could become one of the strongest assets for your job search because it demonstrates what you're currently learning, rather than only what you've done in previous roles.

## **13. SEO and content quality considerations**

From a search perspective, I would not attempt to make every project page rank for a competitive keyword.

This is a professional portfolio, not a content-marketing site.

Its organic search objectives should primarily concern your professional identity, relevant expertise, individual projects and discoverability when someone researches your background.

### **Recommended treatment by content type**

| Page type                         | Recommended approach                                      |
| --------------------------------- | --------------------------------------------------------- |
| Homepage                          | Index; establish professional identity and specialization |
| Experience and About              | Index; reinforce career and identity information          |
| Signature case studies            | Index; unique, substantive technical content              |
| Supporting projects               | Index when independently useful                           |
| Lab articles                      | Index when they contain meaningful original information   |
| Very short archived project pages | Consider consolidating into an archive index              |
| Duplicate project entries         | Merge rather than maintain competing versions             |

Avoid automatically applying `noindex` to every short page. The question is whether the page provides unique value, not whether it meets a particular word count.

Also ensure consistency of factual claims across the project catalogue.

For example:

- The 226% growth outcome belongs principally to the SaaS growth engagement, not the reporting software.
- The roughly threefold editorial capacity improvement belongs to one documented workflow.
- The 50+ technical audits are an aggregate career accomplishment, not necessarily 50 distinct client engagements.
- Recommendations, delivered functionality and measured outcomes should remain separate.
- Anonymized client material must be reviewed for confidentiality, including exact metrics and potentially identifying technical details.

## **14. Developer implementation priorities**

**Content improvement backlog**

~14 / 25 (P0 largely done; signature depth and artifacts remain)

**P0 — Simplify and consolidate** ✅ (shipped)

Replace the duplicate Work directories with a single browsable project index. ✅

Always display meaningful project summaries. ✅

Merge Squarespace publishing into the editorial automation case study. ✅

Consolidate overlapping agency practice and methodology content. ✅ (attribution folded; audit methodology retained; multi-site still separate—see judgment)

Integrate UX experimentation into the Good Robot case study. ✅

Remove redundant project links from the Experience page. ✅

**P1 — Improve signature case studies**

Expand SEO Rankings Report using actual repository documentation.

Develop the marketplace rendering investigation and recommendation narrative.

Document B2B SaaS growth methodology and limitations.

Illustrate Good Robot architecture and integration dependencies.

Publish a migration validation matrix.

Demonstrate the human-reviewed editorial workflow.

Expand PCP's data aggregation and freshness methodology.

Document MRC's design system and content architecture.

**P1 — Improve editorial infrastructure**

Implement structured figure, table and code content blocks.

Separate editorial headlines from project names.

Simplify the project article header.

Add contextual links and breadcrumbs.

Introduce stable editorial ordering.

Add print styles to the Experience page.

**P2 — Strengthen long-term authority**

Develop Lab entries around actual research questions.

Publish reproducible technical SEO experiments.

Verify all historical claims and architectural alternatives.

Improve metadata for substantive project pages.

Conduct mobile, keyboard and recruiter browsing tests.

## **15. Test the portfolio against actual visitor objectives**

Rather than evaluating usability solely through personal browsing, establish representative tasks.

| Visitor             | Task                                                   | Suggested success criterion                        |
| ------------------- | ------------------------------------------------------ | -------------------------------------------------- |
| Recruiter           | Establish role, experience and availability            | Within 10 seconds                                  |
| SEO director        | Find evidence of large-scale JavaScript SEO experience | Within two navigation actions from Home            |
| Engineering manager | Inspect a substantial code-based project               | Within two navigation actions                      |
| Marketing manager   | Understand a measurable organic growth outcome         | Within two navigation actions                      |
| AI specialist       | Investigate a real applied-AI workflow                 | Within two navigation actions                      |
| Returning visitor   | Locate a previously viewed project                     | Direct URL or straightforward directory navigation |

These are proposed usability targets, not measurements of the existing site.

Ask a few people unfamiliar with the portfolio to perform these tasks without coaching. Observe where they hesitate, which links they choose and whether they can accurately explain your contribution after reading a case study.

## **Overall recommendation**

Your portfolio currently has **more than enough projects, but not enough stories**.

I would stop adding project pages for the time being. Instead, take the eight strongest projects and develop them into technically substantial, genuinely interesting case studies that somebody in your industry would enjoy reading even if they weren't hiring.

That is a much higher standard than simply answering what you built or what technologies you used.

The portfolio should demonstrate three things:

- **Competence:** You can do the work.
- **Judgment:** You understand why particular decisions are appropriate.
- **Curiosity:** You are actively investigating how to do the work better.

The first is already well established. The next content iteration should focus overwhelmingly on the other two.
