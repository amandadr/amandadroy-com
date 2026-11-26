# **Developer brief — amandadroy.com portfolio refinement**

**Objective:** Evolve the rebuilt portfolio into an evidence-led professional publication that demonstrates technical SEO, software engineering, analytical thinking and applied AI expertise, while maintaining a recognizable relationship with mannyroy.com.

The rebuild is a substantial improvement over the original React portfolio. The new architecture, dedicated project routes, structured project data, categorized work, professional experience section and portfolio-specific design tokens establish a much more mature foundation.

The next iteration should concentrate less on rebuilding infrastructure and more on **art direction, information hierarchy, technical storytelling and the presentation of professional accomplishments.**

### **Review scope**

I've reviewed the new [Next.js portfolio repository](https://github.com/amandadr/amandadroy-com?utm_source=chatgpt.com), including its page templates, project data, component architecture, CSS, metadata and experience content. I've also compared it against MRC's design system and your attached collection of previous résumés and cover letters.

The live website returned a month-old snapshot of the original React application to my web crawler, and the new routes were not accessible through it. Consequently, the following is a source-informed implementation review rather than a verified visual audit of the newly deployed website. Deployment, responsive rendering and visual findings should be validated in a browser.

## **1. Overall design assessment**

| Area                        | Assessment                         | Direction                                                |
| --------------------------- | ---------------------------------- | -------------------------------------------------------- |
| Technical architecture      | Strong foundation                  | Retain and refine                                        |
| MRC brand cohesion          | Strong                             | Preserve shared foundations                              |
| Portfolio differentiation   | Partially established              | Develop more distinctive editorial compositions          |
| Professional positioning    | Strong but somewhat generic        | Lead with specialization and evidence                    |
| Project discoverability     | Much improved                      | Introduce stronger hierarchy and navigation              |
| Case study content          | Structured but overly standardized | Allow more varied technical storytelling                 |
| Visual evidence             | Underdeveloped                     | Introduce actual project artifacts                       |
| Professional SEO experience | Underrepresented                   | Separate agency engagements into individual case studies |

The principal risk at this stage is that the portfolio becomes **a well-organized, technically sound résumé rendered as a website**, rather than a genuinely compelling exhibition of professional work.

The developer should preserve the restraint of the current design while giving the work itself greater visual and narrative prominence.

## **2. Refine the art direction**

### **Preserve the existing design foundations**

Do not introduce a new design system or substantially alter the established colour palette. The portfolio-specific semantic theme in `src/styles/theme-portfolio.css` is an appropriate extension of the MRC design system.

Retain the following:

- IBM Plex Sans, Serif and Mono typography.
- Paper, cream, ink, olive, maroon and mustard palette.
- Existing spacing scale, responsive composition primitives and accessibility standards.
- Sans-led headings and monospace technical metadata.
- Continuous editorial surfaces rather than alternating marketing-style section backgrounds.

However, the current implementation relies heavily on typography, horizontal rules and repeated text-based rows. Introduce more compositional variation so the site feels intentionally art-directed rather than simply restrained.

### **Differentiate the site chrome**

The portfolio currently retains MRC's olive header and footer. While this reinforces brand cohesion, it also represents one of the strongest visual similarities between the websites.

Test a lighter, more editorial header treatment for the portfolio.

Manny Roy Consulting

Home　Services　About　Contact

PRACTICAL DIGITAL SOLUTIONS

# ***Technology that works for your business.***

**MRC**

Strong brand chrome and warm, service-oriented presentation.

Manny Roy

Work　Experience　Lab　About

TECHNICAL PORTFOLIO

# **Search, software and systems.**

**Portfolio**

Publication-style masthead with restrained brand accents.

Retain the serif wordmark as a recognizable connection between the identities, but consider using the paper background, ink text and a thin maroon or olive rule for the portfolio masthead.

This is an art-direction recommendation to prototype, not a requirement to remove olive entirely.

## **3. Strengthen the homepage hierarchy**

**Affected files:**

`src/app/page.tsx` · `src/components/Hero.tsx` · `src/data/site.ts`

### **Current issue**

The homepage hero communicates the professional identity reasonably well, but the introductory text is essentially a résumé summary. The same `SITE_INTRO` content is also reused on the About page.

The hero should establish identity and expertise immediately, without asking the visitor to process an extensive paragraph of qualifications.

### **Recommended homepage copy**

MANNY ROY / TECHNICAL PORTFOLIO

# **Building systems that are easier to find, use and maintain.**

I'm a technical SEO specialist and full-stack developer working at the intersection of search, software architecture, data and automation.

Based in Prince Edward Island, Canada · Available for remote opportunities

Explore my work

View résumé

GitHub　LinkedIn　Contact

Keep the existing headline. It communicates the professional philosophy effectively and connects SEO, accessibility and maintainability without becoming excessively specialized.

Move the discussion of enterprise accounts, website scale and agency experience into the evidence section immediately beneath the hero.

### **Improve the metrics section**

Replace the generic three-year metric with something that establishes a more distinctive accomplishment.

# **50+**

Technical SEO audits delivered

# **226%**

Average organic click growth across 18 optimized SaaS pages

# **10,000s**

URLs across supported multi-site portfolios

# **\~3×**

Editorial production capacity through workflow automation

On desktop, use a four-column arrangement when space permits. On mobile, use a two-column grid without reducing the font sizes excessively.

Make each metric link to a relevant supporting case study. Treat the metrics as entry points into the portfolio rather than decorative statistics.

Ensure the 226% metric retains its measured-set qualification. The résumé archive explains that several high-performing pages influenced the average; do not present it as median growth, sitewide growth or a guaranteed result.&#x20;

Resume October 2026(2).pdf



## **4. Introduce a more compelling project presentation system**

**Affected files:**

`src/components/CaseRow.tsx` · `src/styles/portfolio.css` · `src/styles/site/case-study-row.css` · `src/lib/types.ts`

### **Current issue**

The `CaseRow` component renders a project's identifier, status, year, title, summary and technology list. Every project consequently receives a nearly identical presentation.

The inherited case-study row stylesheet even contains media-related styles, but the current React component does not render a media element.

As additional projects are introduced, this uniform presentation will become increasingly difficult to scan.

### **Implement three levels of project presentation**

01 / FLAGSHIP FEATURE

SEARCH ANALYTICS · AUTOMATION

# **Making organic performance analysis repeatable**

A configurable Python workflow for identifying search performance changes and informing optimization priorities.

Read the case study

02 / STANDARD FEATURE

PROGRAMMATIC PUBLISHING

Venue Management

Reusable content generation and Event schema.

NEXT.JS · CONTENT ARCHITECTURE

Eastward

A location-driven discovery platform.

03 / COMPACT INDEX ENTRY

Canadian AI-Driven RFP Finder

Python · Data ingestion · Evaluation

2026

Proposed presentation variants. Diagrams are conceptual placeholders; replace them with genuine project artifacts.

| Variant          | Usage                                                       |
| ---------------- | ----------------------------------------------------------- |
| Flagship feature | One or two highest-priority projects on the homepage        |
| Standard feature | Selected professional work and substantial technical builds |
| Compact index    | Complete work directory, secondary projects and archive     |

Do not turn every project into a large image card. Use visual emphasis selectively, based on the significance of the work.

The homepage should contain approximately five or six projects, while the Work index can grow substantially without compromising homepage usability.

## **5. Rework the Work index to support exploration**

**Affected file:** `src/app/work/page.tsx`

The Work index currently organizes projects into Professional, Tools, Independent and Archive categories, with Lab presented separately.

This taxonomy is useful for establishing the context and maturity of each project. However, a hiring manager is more likely to investigate projects by expertise.

Introduce a complementary capability-based navigation system.

## **Explore the work**

AllTechnical SEOWeb engineeringData & automationApplied AI

7 illustrative projects

**Marketplace rendering strategy**

Technical SEO · Web engineering

Agency engagement

**SEO Rankings Report**

Technical SEO · Data & automation

Public source code

**Enterprise migration QA**

Technical SEO · Web engineering

Agency engagement

**Podcast-to-publish workflow**

Applied AI · Data & automation

Agency engagement

**Eastward**

Web engineering

Independent build

**Regional economic dashboard**

Data & automation

Consulting engagement

**Professional AI microcredential**

Applied AI

Collaborative engagement

Interactive illustration of capability-based browsing.

The existing `CapabilityId` type and `projectSlugs` mappings already provide much of the necessary data.

Implement this as progressive enhancement. All projects and their links should remain available in statically rendered HTML, regardless of whether JavaScript is available.

Also consider providing anchored category navigation at the top of the Work index, rather than requiring visitors to scroll through each category sequentially.

## **6. Improve case study pages**

**Affected file:** `src/app/work/[slug]/page.tsx`

### **Current issue**

The case study template uses a standardized sequence of seven required sections:

1. The problem
2. Constraints
3. What I owned
4. Alternatives considered
5. Why this approach
6. Implementation & validation
7. Outcome

This is a useful framework for authoring case studies, but it should not necessarily be the mandatory presentation format for every project.

There is also a risk of inventing retrospective design decisions or alternatives simply to satisfy the content validator.

### **Make the narrative structure flexible**

Establish a smaller set of required content fields:

- Context and problem.
- Personal contribution.
- Technical approach.
- Evidence, deliverable or outcome.
- Limitations, where applicable.

Allow other sections to be optional. An enterprise migration QA case study will naturally have a different narrative structure from an educational curriculum project.

### **Introduce technical artifacts as first-class content**

The current project schema supports text sections but lacks structured support for figures, tables, code samples and diagrams.

Extend it to support typed content blocks.

```
type ProjectBlock =
  | {
      type: "prose";
      heading?: string;
      body: string;
    }
  | {
      type: "figure";
      src: string;
      alt: string;
      caption?: string;
      width: number;
      height: number;
    }
  | {
      type: "code";
      language: string;
      code: string;
      caption?: string;
    }
  | {
      type: "table";
      caption?: string;
      columns: string[];
      rows: string[][];
    }
  | {
      type: "decision";
      context: string;
      decision: string;
      rationale: string;
      tradeoffs?: string;
    };
```

This would make the project pages substantially more expressive without abandoning the structured-content architecture.

### **Recommended project page composition**

WORK / SEARCH ENGINEERING / 004

# **Evaluating rendering architecture for a marketplace**

Investigating organic discoverability across thousands of product URLs in a React-based application.

ROLE

Technical SEO

CONTEXT

Agency engagement

DELIVERABLE

Recommendation

Illustrative rendering comparison, not a reconstruction of confidential client infrastructure.

ON THIS PAGE

Context

Investigation

Recommendation

Trade-offs

Deliverable

### **Context**

Explain the relationship between JavaScript rendering, product discovery and the marketplace's organic acquisition objectives.

### **Technical investigation**

Describe the investigation, evidence and architectural considerations that informed the recommendation.

For longer case studies, introduce an automatically generated table of contents. Keep the reading column approximately 70ch, but allow meaningful technical figures to extend beyond that column on wider screens.

The aim is to create an engineering publication rather than seven consecutive paragraphs with dividing lines.

# **7. Expand the professional project catalogue**

The most important content issue is that your professional agency experience is condensed into the **MacMillan Search Practice** page.

This page currently contains four anonymized engagements, including the marketplace rendering recommendation, SaaS growth engagement, migration QA and AI SaaS content framework.

These are some of your strongest professional accomplishments. They should not all be hidden beneath one general employment case study.

Retain the MacMillan page as an **agency practice overview**, but convert the individual engagements into independently addressable projects.

The following entries are grounded in the supplied résumé archive. They use anonymized titles and avoid claiming outcomes beyond those documented.

## **P0 — Highest-priority professional case studies**

## **1. Marketplace rendering architecture**

2024–2025

Suggested slug: `/work/marketplace-rendering-architecture/`

**Category:** Professional · Technical SEO · Web engineering

**Public summary**

Investigated JavaScript SEO and rendering considerations for a React-based second-hand marketplace with thousands of product URLs, developing recommendations for a transition toward Next.js to support scalable organic discoverability.

**Case study focus:** Technical investigation, architectural trade-offs, communicating recommendations to stakeholders and establishing implementation priorities.

**Suggested artifact:** An original diagram comparing client-side rendering with relevant Next.js rendering approaches.

**Status:** Technical recommendation. Do not imply that the migration was implemented or that organic growth was measured.

## **2. Organic growth for a B2B SaaS platform**

2024–2025

Suggested slug: `/work/b2b-saas-organic-growth/`

**Category:** Professional · Organic growth · Search analytics

**Public summary**

Developed and executed recurring organic optimization initiatives for a Canadian HR and payroll software platform. Combined search performance data, competitive research, internal linking and editorial improvements to achieve an average 226% organic click increase across 18 written or refreshed pages over six months.

**Case study focus:** Opportunity identification, search intent, content selection, recurring measurement, high-performing versus underperforming pages and re-optimization decisions.

**Suggested artifact:** A sanitized performance report or explicitly synthetic example of the page-level analysis methodology.

**Related project:** SEO Rankings Report.

This should be the authoritative case study for the 226% metric, with the reporting tool described separately as the supporting infrastructure.&#x20;

Resume October 2026(2).pdf



## **3. Enterprise website migration & QA**

2024–2025

Suggested slug: `/work/enterprise-migration-qa/`

**Category:** Professional · Technical SEO · Web infrastructure

**Public summary**

Led SEO support for an enterprise website migration, coordinating URL mapping, launch support, post-launch crawling and technical reporting. QA across 224 internal URLs identified no 4xx or 5xx errors, redirect chains or loops, with remaining redirect, sitemap and hreflang issues documented for remediation.

**Case study focus:** Migration preparation, validation criteria, launch risk, issue classification and follow-up requirements.

**Suggested artifact:** Sanitized redirect mapping template, migration QA checklist and categorized crawl findings.

Do not describe this as an entirely error-free migration; the distinction between the clean measured results and outstanding remediation work is valuable evidence of rigorous QA.&#x20;

Resume October 2026(2).pdf



## **4. AI SaaS content architecture**

2024–2025

Suggested slug: `/work/ai-saas-content-architecture/`

**Category:** Professional · Information architecture · Semantic SEO

**Public summary**

Developed an 18-page pillar-and-cluster content framework for an AI-powered customer support platform. Connected search intent, audience needs, product capabilities, competitive research and technical findings to an actionable publishing strategy that informed website architecture.

**Case study focus:** Translating keyword datasets into page purposes, topical relationships, content formats, internal linking and a coherent publishing roadmap.

**Suggested artifact:** A fictionalized pillar-and-cluster map illustrating the methodology without revealing proprietary keyword research or the client's product strategy.

**Status:** Strategy and architecture deliverable; no unverified organic performance claims.&#x20;

Resume October 2026(2).pdf



## **5. Human-reviewed AI editorial automation**

2024–2025

Suggested slug: `/work/editorial-workflow-automation/`

**Category:** Professional · Applied AI · Workflow engineering

**Public summary**

Developed a Python-assisted workflow converting expert podcast material into structured, SEO-ready articles for a Canadian financial-services organization. Integrated transcription, content structuring, AI-assisted drafting, factual verification and CMS preparation, roughly tripling content-production capacity while preserving human editorial oversight.

**Case study focus:** Source grounding, prompt design, editorial quality control, CMS preparation and the boundaries between automation and human judgment.

**Supporting evidence:** Seven accuracy-sensitive articles were produced during the engagement.

**Suggested artifact:** A pipeline diagram, synthetic transcript, generated outline and sample factual-review checklist.

This project should become a flagship example of applied AI. It demonstrates a real productivity improvement rather than a speculative GEO capability.&#x20;

Resume October 2026(2).pdf



### **Suggested editorial automation figure**

Proposed conceptual figure based on the documented workflow. Validate implementation details before publication.

## **P1 — Additional professional engagements**

These projects broaden the portfolio beyond the five primary case studies and support applications across technical SEO, growth engineering, analytics, content strategy and AI.

**06. Content consolidation for an enterprise data platform**

`/work/enterprise-content-consolidation/`

Developed a content consolidation strategy for a global entertainment-data platform, translating keyword, competitor and share-of-voice research into editorial recommendations, internal-linking standards and a proposed subdomain restructuring.

Emphasize information architecture, topical relationships and the strategic considerations behind consolidating fragmented content. Describe the consolidation as a recommendation unless implementation and results can be verified.&#x20;

Resume October 2026(2).pdf



**07. Webflow optimization for an AI software platform**

`/work/webflow-platform-optimization/`

Contributed to SEO-driven website architecture and UI/UX improvements for an AI software platform. Worked directly within Webflow and its custom theme to support feature implementation, website optimization and content publishing.

This establishes direct CMS implementation experience and collaboration across SEO, development and design.&#x20;

Resume October 2026(2).pdf



**08. Large-scale technical SEO across multi-site portfolios**

`/work/multisite-technical-seo/`

Supported technical SEO across enterprise and multi-location service portfolios spanning thousands to tens of thousands of URLs, contributing to technical auditing, performance analysis, prioritized recommendations and stakeholder reporting.

Position this as a representative agency practice case study. Do not attribute the aggregate 50+ audit count to a single client or imply that every URL received individual optimization.

The résumé archive confirms enterprise and multi-location accounts, while your latest clarification establishes their approximate URL scale.&#x20;

Resume October 2026(2).pdf



**09. Multi-brand digital infrastructure and advisory**

`/work/multibrand-digital-operations/`

Provided ongoing technical advisory across three Atlantic Canadian brands, supporting technical SEO, local search, Google Business Profile, platform strategy, integrations, troubleshooting and digital operations.

Frame this as an example of long-term technical ownership, prioritization and incremental systems improvement rather than a single website launch.&#x20;

Resume October 2026(2).pdf



**10. Professional AI microcredential development**

`/work/applied-ai-microcredential/`

Co-developed the Marketing & Communications stream of an accredited professional AI microcredential, translating prompt engineering, responsible AI, research, tool evaluation and workflow augmentation into an applied curriculum.

The stream reported a 96% completion rate, while the broader initial program reached more than 127 learners.

Focus on instructional architecture, technical communication, responsible AI and collaboration. Distinguish the stream's results from the broader program's results.&#x20;

Resume October 2026(2).pdf



**11. Applied AI for tourism operations**

`/work/applied-ai-tourism-training/`

Co-developed and delivered professional AI training for tourism operators, combining source-based research, prompt refinement, tool evaluation and practical workflow automation. One in-person workshop was sold out, with 32 tourism operators participating.

Include the CLEAN prompting framework and the use of review data as examples of practical instructional methods, while excluding identifiable participant data.&#x20;

Resume October 2026(2).pdf



**12. Technical editorial strategy and publication**

`/work/b2b-technical-editorial/`

Managed an agency's internal B2B SEO newsletter and blog, including topic planning, research, technical writing, editing and recurring publication for marketing and search professionals.

This provides evidence of professional writing, subject-matter understanding and editorial ownership. Mark the publication as retired and include authorized writing samples if available.&#x20;

Resume October 2026(2).pdf



## **P2 — Potential additions requiring more documentation**

The following experiences could eventually become useful projects, but the existing résumés don't provide enough information to substantiate detailed public case studies.

| Project opportunity                     | Documentation needed                                                                |
| --------------------------------------- | ----------------------------------------------------------------------------------- |
| Paid versus organic revenue attribution | Tracking implementation details, contribution, validation and reporting methodology |
| LLM evaluation and quality assurance    | Public-safe evaluation examples and methodology                                     |
| Cloud-based RAG development             | Architecture, retrieval strategy, data sources and evaluation                       |
| Squarespace publishing automation       | Workflow details and defensible productivity measurements                           |
| Technical audit methodology             | Sanitized example deliverables and prioritization framework                         |
| UX experimentation                      | Actual hypotheses, test designs and results                                         |

Do not create fictional case studies to fill these gaps. Use the Lab section for new experiments that reproduce relevant techniques with publicly available or synthetic datasets.

## **8. Improve the existing projects rather than only adding new ones**

The portfolio already contains approximately 20 entries. Adding more content without strengthening existing material would increase breadth at the expense of depth.

Prioritize the following improvements.

| Existing project           | Recommended enhancement                                                              |
| -------------------------- | ------------------------------------------------------------------------------------ |
| SEO Rankings Report        | Include sample output, configuration examples and data-flow diagram                  |
| Good Robot Brewing         | Show system architecture, implementation dependencies and documented QA              |
| WordPress Venue Management | Illustrate the recurrence model, event generation, URLs and structured data          |
| Eastward                   | Explain geographic taxonomy, routing and content modelling                           |
| PCP Economic Dashboard     | Show aggregation methodology, data freshness and dashboard design decisions          |
| MRC                        | Document custom routing, design system, glossary architecture and technical SEO      |
| Organized Chaos Arts       | Separate currently implemented functionality from planned membership features        |
| WooCommerce to Trexity     | Show order eligibility, shipment creation, duplicate prevention and failure handling |
| Hyrule Merchant            | Explain build-time generation, validation and data provenance                        |
| This portfolio             | Turn into a substantial cross-platform design-system case study                      |

The PCP dashboard in particular deserves more technical storytelling. Your earlier application material describes two substantive analytical challenges: outdated census data and the construction of a regional aggregate that did not correspond to an official Statistics Canada geography. Those are excellent examples of decision-making under imperfect data conditions.&#x20;

Resume October 2026(2).pdf



### **Reconsider some project dates**

The new `projects.ts` currently assigns 2025 to PCP, WordPress Venue Management, Eastward, WooCommerce to Trexity and several other projects.

Your previous résumé and portfolio materials identify several of these as 2026 projects.

Verify whether each date represents initial development, release or the broader engagement. Do not automatically change them all to 2026, but ensure the public chronology is intentional and consistent.

## **9. Introduce a stronger content taxonomy**

The existing category system answers the question: *What kind of project is this?*

Extend it to answer two additional questions: *What capabilities does this demonstrate?* and *What actually happened?*

```
type EngagementType =
  | "agency"
  | "consulting"
  | "independent"
  | "open-source"
  | "educational";

type DeliveryStatus =
  | "delivered"
  | "live"
  | "recommendation"
  | "in-progress"
  | "prototype"
  | "retired";

type Visibility =
  | "public"
  | "anonymized";
```

Extend the project model accordingly.

```
type ProjectEvidence = {
  label: string;
  value?: string;
  scope?: string;
  methodology?: string;
};

type ProjectExtensions = {
  engagementType: EngagementType;
  deliveryStatus: DeliveryStatus;
  visibility: Visibility;
  evidence?: ProjectEvidence[];
  featuredRank?: number;
  relatedProjectSlugs?: string[];
  blocks?: ProjectBlock[];
  updatedAt?: string;
};
```

Avoid relying entirely on free-text `status` values. The existing data mixes delivery state, source-code availability, context and project category into this one field.

For example, `Public source code` and `Live commercial site` describe different properties.

Separating them makes filtering, presentation, maintenance and validation much easier.

### **Refactor project identifiers**

The existing project identifiers are derived from categories unless manually overridden.

If project numbering depends on array position or category ordering, it may change whenever a new project is introduced.

Either establish immutable project identifiers or remove numbering where it doesn't provide meaningful navigation. The engineering-journal aesthetic does not require every project to resemble a ticket.

## **10. Establish a client confidentiality policy**

The current repository is public. Treat everything committed to it as public, including material that isn't rendered in the application.

This is particularly important when incorporating content from previous résumés.

| Safe to publish, subject to agreements | Do not publish without authorization       |
| -------------------------------------- | ------------------------------------------ |
| Broad industry descriptions            | Confidential client names                  |
| General technical methodology          | Proprietary keyword datasets               |
| Original explanatory diagrams          | Search Console property exports            |
| Approved aggregate metrics             | Revenue and attribution data               |
| Synthetic examples                     | Internal tickets or private correspondence |
| Personal contribution descriptions     | Unreleased product strategies              |
| Authorized public repositories         | Private infrastructure configurations      |

Anonymization must extend beyond the visible title.

Review repository history, metadata, URLs, image filenames, alt text, structured data, source-code comments and downloadable artifacts for identifying information.

Exact metrics and niche industry descriptions can also make engagements identifiable when combined with other public information. Confirm permission before retaining exact numbers such as 226%, or use rounded values or qualitative descriptions where necessary.

**Do not copy the full résumé compilation into the public repository.** It contains identifiable client engagements, application-specific letters and private interview preparation material.

Add a short disclosure to anonymized case studies:

> This engagement is presented in anonymized form to respect client confidentiality. The technical approach and personal contribution are described accurately; illustrative artifacts use synthetic or generalized data.

## **11. Improve the Experience and About pages**

### **Experience**

The new Experience page is considerably stronger than the original timeline. Preserve the promotion, responsibilities, achievements and education.

However, several individual achievements currently link to the same MacMillan practice page.

Once the new projects are created, update those links to the corresponding case studies.

For example:

| Experience highlight            | Destination                        |
| ------------------------------- | ---------------------------------- |
| Organic click growth            | B2B SaaS organic growth            |
| React marketplace investigation | Marketplace rendering architecture |
| Migration QA                    | Enterprise migration QA            |
| Pillar-and-cluster strategy     | AI SaaS content architecture       |
| AI-assisted content workflows   | Editorial workflow automation      |
| Professional AI training        | Applied AI microcredential         |

Rename the Experience page headline to something more personal and useful than a list of disciplines.

Suggested H1: **Professional experience & education**

The content below already provides the necessary specificity.

### **About**

The current About page repeats much of the professional summary and primarily directs visitors toward other pages.

This is an opportunity to introduce a more personal narrative that distinguishes the individual from the consultancy.

Suggested copy:

## How I approach technical work

My background is somewhat unconventional: an English degree, full-stack development training, agency SEO, software automation and independent consulting.

What connects those disciplines is an interest in making complex things understandable and useful. I enjoy investigating how a system works, identifying where it breaks down, and developing solutions that make the next person's work easier.

In technical SEO, that means looking beyond individual ranking changes to understand the architecture, content and processes that influence discoverability. In development, it means building with accessibility, maintainability and clear ownership in mind. In applied AI, it means understanding where automation adds value and where human judgment needs to remain involved.

I work best where research, implementation and measurement remain connected. I'm particularly interested in large-scale search architecture, emerging AI-search technologies and the tools that make technical work more repeatable.

Through Manny Roy Consulting, I apply these principles to client projects. This portfolio is a more technical and personal record of the systems I've built, the problems I've investigated and the ideas I'm continuing to explore.

Include a professional photograph if desired, ideally the same recognizable image used on MRC or LinkedIn. Keep it secondary to the written introduction.

## **12. Reframe the capabilities section**

The homepage currently uses the heading **Where I can help**, which reads like consultancy messaging.

Replace it with **Areas of practice** or **How I work**.

Avoid capability descriptions that read like condensed ATS keyword lists. Each should articulate an approach, followed by tools and supporting projects.

| Capability                          | Suggested description                                                                                                                                                 |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Technical SEO & search architecture | I investigate how websites are crawled, rendered, indexed and discovered, translating technical findings into practical implementation priorities.                    |
| Web engineering & infrastructure    | I build and maintain web systems with an emphasis on reusable architecture, accessibility, performance and long-term ownership.                                       |
| Data & automation                   | I develop repeatable workflows that turn disparate data into reliable information, reducing manual work and supporting better decisions.                              |
| Applied AI & GEO research           | I explore how language models interact with information, drawing on evaluation, source verification and structured content to investigate emerging search behaviours. |

Update `src/data/capabilities.ts` to include the new individual case studies rather than primarily linking to general practice pages.

# **13. Technical refinement and QA**

The static-export architecture is appropriate for this portfolio. There is no compelling reason to introduce a backend, database or external CMS at this point.

Retain the current Next.js implementation and address the following refinements.

| Priority | Finding                                    | Developer instruction                                                                                                                             |
| -------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| P0       | Live deployment not independently verified | Confirm that the new static export is being served at the canonical domain and that all deep links return 200 responses.                          |
| P0       | Public project confidentiality             | Validate all content, metadata, artifacts and downloadable files before publishing.                                                               |
| P0       | Résumé download                            | Ensure the PDF contains only the intended general-purpose résumé and is current.                                                                  |
| P1       | Structured data                            | Introduce a stable Person `@id` and reference it consistently from the WebSite, ProfilePage and project entities.                                 |
| P1       | Social metadata                            | Provide project-specific Open Graph imagery; `summary_large_image` is declared but no corresponding image is specified in the inspected metadata. |
| P1       | Static sitemap                             | Use actual content-modified dates instead of resetting every page's `lastModified` to the build date.                                             |
| P1       | Media optimization                         | Since Next.js image optimization is disabled for static export, generate optimized image variants before deployment.                              |
| P1       | Navigation accessibility                   | Test mobile menu keyboard behavior, Escape, focus restoration, zoom and background interaction.                                                   |
| P1       | Project validation                         | Check related-project references, capability references, unique identifiers, required alt text and permitted visibility states.                   |
| P2       | Analytics                                  | Add appropriate résumé download, case study engagement and outbound repository link measurements.                                                 |
| P2       | Regression testing                         | Add automated accessibility, broken-link and visual regression checks.                                                                            |

### **Correct the distinction between related entities**

The root layout currently includes MRC in the Person entity's `sameAs` array.

The consultancy is a related commercial entity, not necessarily an equivalent representation of the individual.

Consider modelling the relationship using separate identifiers and an appropriate relationship such as `founder`, rather than treating the person and consultancy as interchangeable entities.

This is a particularly worthwhile refinement for a technical SEO and GEO portfolio.

### **Refine the design-system implementation**

Do not undertake a full design-system extraction yet. The current use of shared MRC styles and portfolio-specific semantic overrides is reasonable for a project at this stage.

However, the coexistence of Ghost-oriented classes such as `.gh-inner`, MRC-specific prefixes and portfolio-specific blocks will eventually become harder to reason about.

Gradually separate:

```
styles/
├── foundations/
├── composition/
├── utilities/
├── themes/
│   └── portfolio.css
└── blocks/
    ├── masthead.css
    ├── hero.css
    ├── project-feature.css
    ├── project-index.css
    ├── project-article.css
    ├── technical-figure.css
    └── experience.css
```

Remove inherited components and styles that have no role in the portfolio after confirming they are unused.

Build abstractions when the need for them becomes apparent rather than trying to make the two codebases structurally identical.

# **14. Recommended homepage composition**

The revised homepage should have a more deliberate editorial hierarchy.

### ***Manny Roy***

Work　Experience　Lab　About

TECHNICAL SEO / SOFTWARE / AUTOMATION

# **Building systems that are easier to find, use and maintain.**

Technical SEO specialist and full-stack developer based in Atlantic Canada.

Explore my work

View résumé

## **50+**

Technical audits

## **226%**

Avg. click growth

## **10k+**

Portfolio URL scale

## **\~3×**

Editorial capacity

## **Selected work**

All projects

FEATURED / SEARCH AUTOMATION

## **SEO Rankings Report**

Making recurring organic performance analysis repeatable.

JAVASCRIPT SEO

Marketplace rendering

WEB INFRASTRUCTURE

Good Robot Brewing

SEARCH ANALYTICS

B2B SaaS organic growth

APPLIED AI

Editorial automation

## **Areas of practice**

Technical search

Web engineering

Data & automation

Applied AI

## **From the lab**

Experiments, independent builds and ongoing research.

Hyrule Merchant　·　Eastward　·　Newfie

## **Let's talk about good technical work.**

Email　·　LinkedIn　·　GitHub

Proposed homepage wireframe. Illustrative artifacts and sample metric treatments are not verified project visuals.

Notice the variation in scale: one major featured project, a compact evidence section, smaller supporting projects, a capability overview and an understated Lab preview.

This retains the shared MRC foundations but produces a different visual composition and reading experience.

# **15. Implementation roadmap**

**Developer backlog**

0 / 26 completed

**P0 — Content and credibility**

Verify the new production deployment and deep links.

Audit all project dates, statuses, claims and résumé consistency.

Establish and apply the client confidentiality policy.

Separate the five priority agency engagements into dedicated project pages.

Correct attribution of metrics and link them to their primary evidence.

**P1 — Art direction and UX**

Prototype the lighter portfolio masthead.

Condense homepage introduction and improve contact access.

Implement flagship, standard and compact project presentations.

Introduce capability-based project browsing.

Add a Lab preview to the homepage.

Rewrite capability descriptions and the About page.

**P1 — Case study infrastructure**

Extend the project schema with evidence, delivery status and visibility.

Introduce typed content blocks for diagrams, figures, tables and code.

Make case study narrative sections flexible.

Add related-project navigation and optional tables of contents.

Produce genuine or explicitly illustrative technical artifacts for flagship projects.

**P2 — Catalogue expansion**

Add enterprise content consolidation and Webflow optimization.

Add multi-site technical SEO and multi-brand advisory.

Add AI microcredential and tourism training projects.

Add technical editorial experience and authorized writing samples.

Develop this portfolio's design-system case study.

**P2 — Technical QA**

Validate canonical URLs, structured data, sitemap and Open Graph previews.

Optimize project media for static delivery.

Test mobile navigation and accessibility.

Implement meaningful portfolio interaction measurements.

Establish automated content, accessibility and regression checks.

## **Definition of done**

The next iteration should satisfy the following acceptance criteria:

- A hiring manager can establish professional specialization and inspect relevant evidence within seconds of arriving.
- Every significant professional accomplishment has an independently shareable destination.
- Projects clearly differentiate completed work, recommendations, collaborative contributions and experiments.
- Technical claims are supported by documented outcomes, artifacts or transparent methodologies.
- The website remains recognizable as a sibling of MRC without behaving like another consultancy website.
- Primary content is available in statically generated HTML.
- The project catalogue can expand without requiring redesigns or duplicated content.
- Confidential client information is excluded from all public assets and repository content.

## **Final design principle**

The portfolio should evolve from a collection of projects into a **curated body of professional evidence**.

The strongest opportunity is not to add more decorative elements or demonstrate more frameworks. It is to communicate the depth of the work that has already been completed: the investigations, architectural recommendations, engineering decisions, analytical methods, measurable improvements and collaborative responsibilities that are currently more apparent in the résumé archive than on the website.

Preserve the excellent technical foundation of the rebuild. Invest the next iteration in making the evidence visible, interesting and easy to investigate.
