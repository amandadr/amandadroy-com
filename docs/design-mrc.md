# **One design language, two distinct experiences**

The approach you're describing is an established design challenge that sits at the intersection of **brand architecture, multi-brand design systems, art direction and user-centred design**.

Having reviewed your existing [MRC design system documentation](https://github.com/amandadr/mrc-ghost-custom/tree/main/docs-site/docs/design-system?utm_source=chatgpt.com), I think you've already built an excellent foundation for this. Your use of CUBE CSS, semantic colour roles, compositional primitives, typography tokens and documented design standards makes it possible to create a second website that inherits the same design philosophy without inheriting the same visual identity wholesale.

I would approach these sites as **sibling identities within a shared personal brand ecosystem**.

They should feel as though they were designed by the same person, with the same values and standards, but for fundamentally different purposes.

## **1. What makes the two websites different?**

The distinction goes much deeper than audience or subject matter. Each website represents a different relationship between you and the visitor.

THE CONSULTANCY

# **Manny Roy Consulting**

*Technology should work for your business, not the other way around.*

Visitor's question

Can I trust this person to understand and solve my business problem?

Design personality

Warm, reassuring, approachable, grounded, knowledgeable.

Discuss your project

THE PRACTITIONER

# **Manny Roy**

*Technical SEO, software engineering and systems thinking.*

Visitor's question

How does this person think, what can they build, and what could they contribute to our team?

Design personality

Precise, curious, analytical, expressive, technically confident.

Explore selected work

Conceptual comparison using your existing MRC palette, rather than introducing a new brand palette.

MRC is fundamentally a **relationship-building and service-oriented experience**. Its design should reduce uncertainty, make complex subjects approachable and help prospective clients recognize their problems in your offerings.

Your portfolio is an **evidence-driven and exploratory experience**. Its design should encourage investigation, demonstrate technical depth and help people form an informed opinion about your abilities.

| Dimension           | mannyroy.com                      | amandadroy.com                                 |
| ------------------- | --------------------------------- | ---------------------------------------------- |
| Identity            | The consultancy                   | The individual                                 |
| Primary audience    | Business owners and organizations | Hiring managers, engineers and technical peers |
| Value proposition   | What I can do for you             | What I know, build and contribute              |
| Emotional goal      | Confidence and reassurance        | Respect and intellectual curiosity             |
| Content orientation | Business problems and outcomes    | Decisions, implementation and evidence         |
| Language            | Accessible and plain-spoken       | Technically precise and reflective             |
| Reading experience  | Guided discovery                  | Self-directed exploration                      |
| Primary conversion  | Consulting inquiry                | Interview or professional conversation         |
| Design analogy      | An approachable consulting studio | An engineering journal and exhibition          |

Both websites establish trust, but they should establish it differently.

MRC establishes trust through **understanding**.

Your portfolio establishes trust through **demonstration**.

## **2. The design methodologies that address this**

There isn't a single methodology that covers this entire problem. Instead, several complementary disciplines give you a framework for making decisions at different levels.

### **Brand architecture — defining the relationship**

David Aaker and Erich Joachimsthaler's *The Brand Relationship Spectrum* is a foundational work in brand strategy. It describes how related identities can share brand equity while maintaining different degrees of independence.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://cmr.berkeley.edu\&sz=32)

California Management Review



Adaptation of the Brand Relationship Spectrum. Your two websites are personal and commercial expressions of one identity, rather than conventional corporate subbrands.

You don't need to invent a completely separate brand for amandadroy.com. You already have accumulated brand equity through MRC, including your typography, colours, writing style and professional philosophy.

However, the individual should not be visually subordinate to the consultancy.

Conceptually, I'd organize your brand architecture like this:

The personal identity is the common foundation. The consultancy and portfolio express different aspects of it.

### **Multi-brand design systems — shared foundations, distinct expressions**

This is the most directly applicable methodology to your development work.

A multi-brand design system separates reusable design decisions from the way individual brands or products express those decisions.

Adobe's [Spectrum design token system](https://spectrum.adobe.com/page/design-tokens?utm_source=chatgpt.com) is a particularly good reference. It describes shared foundational decisions, semantic tokens and platform-specific adaptations that allow experiences to differ while retaining a common design language.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://spectrum.adobe.com\&sz=32)

spectrum.adobe.com



The important distinction is between three levels:

| Level            | Function                     | Example                                          |
| ---------------- | ---------------------------- | ------------------------------------------------ |
| Primitive tokens | Available design values      | Maroon, olive, 16px, 32px                        |
| Semantic tokens  | Intended use of those values | Primary action, page background, section spacing |
| Component tokens | Context-specific decisions   | Hero padding, project card border                |

For your two websites, I'd share the primitives while allowing semantic assignments and component treatments to differ.

**The same palette does not need to produce the same interface.**

### **CUBE CSS and compositional design**

You've already incorporated one of the most suitable methodologies into MRC: CUBE CSS.

CUBE CSS separates macro-level layout from component styling. Its composition layer determines flow, rhythm and relationships between elements without imposing their decorative appearance.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://cube.fyi\&sz=32)

CUBE CSS



Your existing primitives include:

- Container
- Stack
- Cluster
- Grid
- Split
- Switcher

These should transfer almost unchanged into the portfolio.

The way you compose them, however, should differ significantly.

This is also a central principle of Every Layout: a small vocabulary of independent layout primitives can produce many distinct interfaces without requiring a new layout system for each one.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://every-layout.dev\&sz=32)

every-layout.dev



Think of the primitives as your shared grammar. MRC and the portfolio are different things you're writing with that grammar.

### **Art direction — establishing the visual character**

Art direction provides the expressive layer above your design system.

It determines what the combination of typography, imagery, composition, colour and rhythm communicates about the subject.

This is how magazines, books and editorial websites can use the same grid and typography system while producing visually distinct stories.

The design system establishes your constraints. Art direction determines how you work within those constraints.

### **User-centred design and visual hierarchy**

The prominence of content should be determined by the visitor's objectives, not by the convenience of reusing an existing component.

Nielsen Norman Group's research on [visual hierarchy](https://www.nngroup.com/articles/principles-visual-design/?utm_source=chatgpt.com) discusses how scale, spacing, placement and colour guide attention according to the relative importance of information. Its work on [progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/?utm_source=chatgpt.com) is equally relevant to deciding how much technical information should be presented upfront.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://www.nngroup.com\&sz=32)

NN/G+1



For MRC, a visitor needs to establish that you understand their situation before they investigate technical details.

For the portfolio, a visitor needs to establish your technical competence before deciding how deeply to investigate.

That alone should produce substantially different homepage designs.

## **3. Establish your shared design DNA**

Reviewing your existing MRC design documentation, I would retain considerably more than just the colour palette.

Your current system already includes:

**Colour foundations**

Cream

\#F0E8E0

Paper

\#FAF6F0

Ink

\#2A261A

Olive

\#706830

Maroon

\#804050

Mustard

\#E8C868

**Typographic foundations**

# **Aa**

**IBM Plex Serif**

Editorial expression

# **Aa**

**IBM Plex Sans**

Readable communication

# `Aa`

**Monospace**

Technical information

**Spacing system**

4

8

12

16

24

32

48

64

96

**Shared standards**

Mobile-first design

Content-driven layouts

Accessible colour pairings

72ch prose width

Predictable spacing

Reduced-motion support

Semantic HTML

Clarity over decoration

Based on your existing MRC colour, typography, spacing and composition documentation. The typographic samples are illustrative.

These are excellent candidates for a platform-independent set of foundations.

Here is how I'd decide what to share and what to differentiate:

| Design element            | Strategy                                               |
| ------------------------- | ------------------------------------------------------ |
| Colour palette            | Share, change the proportions and semantic assignments |
| Font families             | Share, change the hierarchy                            |
| Spacing scale             | Share                                                  |
| Border radii              | Share, use different values from the scale             |
| Accessibility standards   | Share completely                                       |
| Layout primitives         | Share completely                                       |
| Iconography               | Share the style, change the frequency                  |
| Interaction states        | Share completely                                       |
| Components                | Selectively reuse or adapt                             |
| Page templates            | Differentiate                                          |
| Imagery and illustrations | Differentiate                                          |
| Information density       | Differentiate                                          |
| Navigation                | Differentiate                                          |
| Voice and tone            | Shared voice, context-dependent tone                   |

This gives you consistency where consistency improves the experience, and variation where variation communicates purpose.

## **4. Colour: same palette, different dominance**

Your palette is one of the most distinctive aspects of MRC. The combination of cream, paper, olive, maroon and mustard feels earthy, warm and somewhat editorial.

I wouldn't replace it with the stereotypical dark-blue-and-cyan developer aesthetic. That would unnecessarily sacrifice your established visual identity.

Instead, change which colours dominate.

**MRC — warm and grounded**

Warm backgrounds, substantial olive sections, maroon actions and mustard accents.

**Portfolio — precise and editorial**

Paper-like backgrounds, stronger ink typography, restrained maroon and selective accents.

Suggested colour dominance, not measured proportions or rigid design quotas.

MRC's documented section rhythm alternates cream, paper, olive and maroon. This gives it the narrative rhythm of a marketing website, helping visitors move through distinct topics.

I'd give the portfolio a more continuous canvas.

| Colour  | MRC application                       | Portfolio application                                   |
| ------- | ------------------------------------- | ------------------------------------------------------- |
| Cream   | Main page background                  | Secondary panels and contextual areas                   |
| Paper   | Cards and alternate sections          | Main reading canvas                                     |
| Olive   | Brand anchor and substantial sections | Secondary labels and subtle accents                     |
| Maroon  | Primary commercial action             | Links, selected emphasis, active navigation             |
| Mustard | Highlights and decorative warmth      | Annotations, experimental labels and highlights         |
| Ink     | Primary text                          | Primary text, strong actions and selected dark surfaces |

The portfolio could therefore feel like a technical publication printed on the same paper stock as MRC's marketing materials.

Maintain your existing contrast standards and revalidate every new colour assignment, particularly when placing text and focus indicators on dark surfaces.

## **5. Typography: the biggest opportunity for differentiation**

You've chosen IBM Plex, which is particularly suitable because its different families already bridge humanistic editorial design and technical communication.

Rather than introducing a new font, I'd adjust which members of the family carry the visual hierarchy.

WEBSITES & DIGITAL SYSTEMS

# ***Good technology makes everyday work easier.***

Practical, reliable solutions built around the way your business actually works.

Serif-led, conversational, generous rhythm.

`01 / TECHNICAL SEO`

# **Making search analysis repeatable.**

A configurable reporting pipeline using Python and the Google Search Console API.

`PYTHON · GSC API · AUTOMATION`

Sans-led, structured, technical annotations.

I'd use the following hierarchy:

| Element                | MRC            | Portfolio                                    |
| ---------------------- | -------------- | -------------------------------------------- |
| Primary headline       | IBM Plex Serif | IBM Plex Sans                                |
| Section headings       | Serif-led      | Sans-led, with selective serif               |
| Body text              | IBM Plex Sans  | IBM Plex Sans                                |
| Long-form case studies | Serif headings | Serif or sans headings, depending on context |
| Metadata               | Sans           | IBM Plex Mono                                |
| Code                   | Monospace      | IBM Plex Mono                                |
| Project identifiers    | Minimal        | Prominent                                    |
| Large metrics          | Sans or serif  | Strong sans or tabular numerals              |

I would consider adding **IBM Plex Mono** to your shared typography system. Currently, your MRC documentation specifies system monospace fonts such as Menlo and Consolas.

Plex Mono could become a stronger part of the portfolio's identity without introducing a completely unrelated typeface.

Use it for project classifications, technologies, figure labels, dates, code and technical metadata — not entire paragraphs.

This small change, combined with sans-led headings, would make the portfolio feel considerably more technical while preserving unmistakable typographic continuity.

## **6. Composition: marketing rhythm versus editorial rhythm**

This is where I think the two websites should diverge most significantly.

Your current MRC homepage is organized around a guided sequence: proposition, audiences, personal introduction, capabilities, technologies, outcomes, work and resources.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://www.mannyroy.com\&sz=32)

Manny Roy Consulting



That organization is appropriate for a business-facing website. It helps people who may not understand technical subjects gradually establish context.

A portfolio should behave more like an organized collection that someone can enter, scan and investigate according to their interests.

MRC　　Services　About

**MRC: section-led composition**

Distinct chapters, generous spacing, changing backgrounds and guided progression.

MANNY ROY　 Work　Lab

## **50+**

## **226%**

## **3+**

**Portfolio: content-led composition**

Compact introduction, immediate evidence, indexed projects and consistent reading surfaces.

Conceptual wireframes showing how identical design foundations can create different page rhythms.

### **Spacing and density**

MRC's current spacing documentation specifies standard desktop section padding of 64px, tight sections of 48px and hero sections of 96px.

I'd keep all of these values available, but change the portfolio's semantic defaults.

| Spacing decision         | MRC     | Portfolio recommendation |
| ------------------------ | ------- | ------------------------ |
| Standard desktop section | 64px    | 48px                     |
| Hero padding             | 96px    | 64px                     |
| Tight section            | 48px    | 32px                     |
| Project list gap         | 32px    | 24px                     |
| Related metadata gap     | 12–16px | 8–12px                   |
| Reading column           | 72ch    | 68–72ch                  |
| Base text                | 16px    | 16–18px                  |

The portfolio can be denser without being cramped. Increase the density of information and relationships rather than shrinking all the typography.

I'd also use horizontal rules more frequently. They establish editorial structure without requiring every content grouping to be enclosed in a card or assigned a different background.

## **7. Differentiate through visual evidence and imagery**

This is another powerful art-direction technique.

### **MRC should emphasize human context**

[Made in SDG Counties Stories | SDG Counties](https://images.openai.com/static-rsc-4/liFgIOsTIh2GJvpymJnOmlj7rxOsjR-Q7XS3oh8WdjTzlr4cin-v91bVXrWZTXHiSdm762jRSjI2asUpDyC6gQySV0Ipi6hbr6Z706mT6vi8p1MBrqdL_UzPXAFoohRyuIqxjHg7kmmZYF5zvX8FBQ7KUdywsfosSICF2JpXtpo?purpose=inline)

[Cozy Cafés | Tourism PEI](https://images.openai.com/static-rsc-4/QEPB7wj1pG4RoQAOb4zL11vg0bGacxpj-G3Gfg6P8OtssR7cOBvGeNF_kkGC-3OPFuHi_YNJ169bRPNrx4fCsJlbd91Mft7WojVevU0ctKZh5vNwQmJO5PWSRCdavo7zIH_za1mm8C5uiGzZMikox32ctRiyZg7U7TMv4yFonb0?purpose=inline)

[Branding Photography for South Shore Small Businesses | South Shore Photography](https://images.openai.com/static-rsc-4/gSUQJzILrKEdICkLydWqmWDERbUdWjn4Hr0hrZObNGHXvD-UYaDayMKu5tC3PGLKqjJULw7nzSaHG0u6bJdEzEzLDI9rOD2lZ5hWTzbe-4zbLg0aTL4FRpfLw9LF-TjP5lIRe1TzT03VC5Mqn0JMifs9XkRtDldXW7pSj9OAbAQ?purpose=inline)

15

MRC's imagery should communicate the environments in which technology is used: people, local businesses, communities, workspaces and real-world outcomes.

Even technical illustrations should help nontechnical visitors understand the role technology plays in their work.

### **The portfolio should emphasize technical artifacts**

[I Built a Portfolio That Thinks Like an Architect (Using Google Gemini + Cloud Run) - DEV Community](https://images.openai.com/static-rsc-4/Hkn_0mOKJQaNQCzQvt2nlrtaRftk9GiXSkjtXA6M-7qtgloPTDwg09glJMr4dcBWIHycEiMbuBlri5PKDXExl_S_zqAM_z9Q4__gsudisj2m0KTd0G6wjF-Trqcc1mSQ90DNpjDJkxh5eS652dESryh4SioCoXFm1a3cDJHS4TM?purpose=inline)

[How to write and present UX case studies that get you noticed](https://images.openai.com/static-rsc-4/kmFDbL7CQHrF5FU1BdUT_5rD9aaan8rgujNKr8c-uOR8KRQEfUVLkGD18Ymky2K4Q2sBqXE9juau3O21_cBZtIdKScxufk-BOd65rObkfpCCntIl1ISj232wcrfqqV9R0KrpBmgFhzsLhDQ8OEQj5GKTFkI4ql-OOUJ6J_UAUiI?purpose=inline)

[API Logic Server - API Logic Server](https://images.openai.com/static-rsc-4/mnukPQ4RZ3NYipz8DwDf8_ULYHFIhnc-ihl-HVqOnGq8HBkUyffD7dOnxbNkYO5ejWxCNzLGnJcgs20X1Hm2Dq_79Or0KYyXtW1dRAzxvd89FMcK1Fn5ORS8-dnbpQJKEgbI5zX-Q8BXW23DXSAAaLmuZQ-c-3WHRRTJ-l1XV0g?purpose=inline)

12

The portfolio's imagery should primarily consist of your actual work:

- Architecture diagrams and data flows
- Website screenshots with meaningful annotations
- Search performance graphs
- Before-and-after technical comparisons
- Code excerpts
- Data models and content schemas
- Test results and engineering documentation

These references illustrate the respective art directions, not content I'd reproduce or substitute for your own work.

The key difference is that MRC imagery often provides **context**, while portfolio imagery provides **evidence**.

## **8. The same component can communicate different things**

Consider a case study about your Python SEO reporting tool.

Both sites could use the same `Split`, `Stack`, `MediaFrame`, `SectionHeader` and `Button` primitives. But the resulting component should communicate different aspects of the project.

SYSTEMS & AUTOMATION

# **Less reporting, more meaningful insights.**

Automating repetitive search analysis gives teams more time to understand what's changing and decide what to do about it.

Explore the business outcome

`TOOL / 001`

Open source

## **SEO Rankings Report**

`Python · GSC API · JSON`

Configurable search performance comparisons with cached API responses and repeatable report generation.

Case study

Source code

Notice that you don't need different border radii, radically different colours or an entirely new visual identity.

The distinction comes from the hierarchy, framing and evidence presented.

This is a useful example of **contextual consistency**: preserve the logic of the interface while adapting its expression to the user's needs.

## **9. Design the portfolio like a publication, not an agency**

If I were developing an art-direction brief for amandadroy.com, it would be something like this:

ART DIRECTION / TECHNICAL PORTFOLIO

# **An engineer's field journal.**

A curated record of technical work, professional growth, experiments and thoughtful engineering decisions. Accessible enough to welcome unfamiliar readers, rigorous enough to withstand scrutiny from technical peers.

**Design qualities**

Precise

Editorial

Investigative

Understated

Human

**Avoid**

Corporate stock aesthetics

Decorative dashboards

Excessive animations

Unnecessary complexity

Generic developer templates

DESIGN PRINCIPLE

**Let the work provide the complexity. Let the interface provide the clarity.**

The concept of an engineering journal also gives you room to express more personality than MRC does.

You can have numbered projects, lab notes, experiment dates, handwritten-style diagram annotations, reflective writing, technical marginalia and carefully selected personal observations.

Those elements would feel at home in a practitioner portfolio but potentially distract from MRC's commercial messaging.

### **Visual inspiration worth investigating**

[這是最有趣、最有互動性的鐘錶文章：來自國外錶友的機芯原理全面解析 - Horoguides 名錶指南 - 台灣](https://images.openai.com/static-rsc-4/Ln59wIFX6vx7evFzNejupZBSbS5ao5oPnA9A2qRj2GHabHA8mBY1026H53cuR1PvOvRjbxWwlxgFQ1npbynLZeCgQWPECxKplJVrxezNvdF447_MqRX8kKzimt5tOnPgA5rnbdHdrkDZNIFXIrH8wv6EqA55TaCuPuHdkC_2POs?purpose=inline)

[**Bartosz Ciechanowski**](https://ciechanow.ski/?utm_source=chatgpt.com)

Exceptional technical storytelling. Diagrams and interactive demonstrations are integrated into clear, readable editorial explanations.

[How I Built My Blog • Josh W. Comeau](https://images.openai.com/static-rsc-4/pTNz9MSXNULBBv0ljJEw3ocH63o-Fa8XCtq19Z0KI9YQhhkRf_bD9yUTamMJwPB1ag7lE3c5rHqL1jmqditeRjHshPVv0i6b-fnelLtxiJl5MRhGLVQ_Y1FwzdICyJKy6I8hig0LtFvAg2OFvaTOCbLYSpw2seOoNxv7lgm0yfg?purpose=inline)

[**Josh Comeau**](https://www.joshwcomeau.com/?utm_source=chatgpt.com)

A useful reference for combining technical credibility with a recognizable personal identity and expressive design.

[Showcase — 🍓 Berry House](https://images.openai.com/static-rsc-4/buGUXsptw7KaDgk3EkyYex69hC5qfFufKUZTfaEbGtQKVxaFuP6dPQ3h2e9ac_Toa2nSmnWIlczMW5oeCTrjWNAjzDWLywfi_Rq1tP-QPUSpqRyy81W-iFYR3TYIDc_Y56Y-zfKeFuPf-bJa6J8DYKiWYVRJ0dso8g2Ko1YY07M?purpose=inline)

[**Piccalilli**](https://piccalil.li/?utm_source=chatgpt.com)

Content-led web design that allows typography, strong visual hierarchy and editorial composition to carry the experience.

[Own Your Web – Issue 10: Links Worth Sharing • Buttondown](https://images.openai.com/static-rsc-4/BnJeN7MazDA0bo_ZVP0UQaXEFXSZU2JFkQavEFsGjBrUA16fzb7Yv1uGZvUBj3mdpoyz7PCkHVkho3Orr719hICUDw-QLzkKSGJG7n1xUHLWHg7i0fhHNu6PE8C90ZaEqG6iLMMM377L0OyT47hVPHtf8PUm8XM61-rLzU9ZNms?purpose=inline)

[**Robin Rendle**](https://robinrendle.com/?utm_source=chatgpt.com)

A particularly relevant reference for personal writing, technical observations and a distinctive editorial identity.

[How Linear builds product - by Lenny Rachitsky](https://images.openai.com/static-rsc-4/fECZJyRxpH7ZJgIplHNWTV5gIrKW7Kapula1zkI0wwyRE1QRB_FpdJjAfUjI4n896o-M7j8Of01VUtpSAXjwkaEh_rQccci1B-FnY6-8US2kByDGLQFeaLClnk-VceAepugu3tgc02qDbZgX9j2hR5Md0rhBZU_1kJBV-_3OVWE?purpose=inline)

[**Linear**](https://linear.app/?utm_source=chatgpt.com)

Worth studying for its disciplined technical typography, product documentation, metadata and information hierarchy — rather than copying its palette.

## **10. Implement this as a platform-independent design system** 

NOTE: This is a future goal, not meant to be implemented right now. MRC will be moving to Next.js as well, soon.

Since MRC is built on Ghost and the portfolio will be built in Next.js, this is an excellent opportunity to separate your design system from its current implementation.

Right now, your MRC system lives largely within the Ghost theme, including prefixed tokens such as `--mrc-bg` and `--mrc-section-padding-block`.

I'd gradually extract the platform-independent concepts.

A conceptual repository structure might look like this:

```
design-system/
├── foundations/
│   ├── colours.css
│   ├── typography.css
│   ├── spacing.css
│   ├── borders.css
│   └── motion.css
├── composition/
│   ├── stack.css
│   ├── cluster.css
│   ├── grid.css
│   ├── split.css
│   └── switcher.css
├── utilities/
├── themes/
│   ├── consultancy.css
│   └── portfolio.css
└── docs/
    ├── principles.md
    ├── accessibility.md
    └── art-direction.md
```

Your Ghost theme and Next.js application would consume the same foundations but implement their own page-level blocks and components.

### **Example: shared primitives**

```
:root {
  --colour-cream: #F0E8E0;
  --colour-paper: #FAF6F0;
  --colour-ink: #2A261A;
  --colour-olive: #706830;
  --colour-maroon: #804050;
  --colour-mustard: #E8C868;

  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;
  --space-9: 6rem;

  --font-sans: "IBM Plex Sans", sans-serif;
  --font-serif: "IBM Plex Serif", serif;
  --font-mono: "IBM Plex Mono", monospace;
}
```

### **Example: two semantic themes**

ConsultancyPortfolio

PRACTICAL DIGITAL SOLUTIONS

# ***Make your technology work for you.***

Reliable websites, integrations and digital systems designed around your business.

Explore services

| Page background | Cream          |
| --------------- | -------------- |
| Primary action  | Maroon         |
| Heading family  | IBM Plex Serif |
| Section padding | 64px           |
| Hero padding    | 96px           |

Toggle between proposed themes to explore the difference in design intent using a shared set of foundations.

```
[data-theme="consultancy"] {
  --colour-bg: var(--colour-cream);
  --colour-surface: var(--colour-paper);
  --colour-action: var(--colour-maroon);
  --colour-eyebrow: var(--colour-olive);

  --font-heading: var(--font-serif);
  --font-label: var(--font-sans);

  --section-padding: var(--space-8);
  --hero-padding: var(--space-9);
}

[data-theme="portfolio"] {
  --colour-bg: var(--colour-paper);
  --colour-surface: var(--colour-cream);
  --colour-action: var(--colour-ink);
  --colour-eyebrow: var(--colour-maroon);

  --font-heading: var(--font-sans);
  --font-label: var(--font-mono);

  --section-padding: var(--space-7);
  --hero-padding: var(--space-8);
}
```

Both sites can use the same semantic CSS rules, while each theme determines how those rules are expressed.

One important architectural consideration: I wouldn't undertake a major refactor of the existing Ghost theme before building the portfolio. Extract the reusable foundations into Next.js first, test the approach, and consolidate the shared code once the abstractions have proven their usefulness.

Avoid creating an elaborate package ecosystem merely to maintain two relatively small websites.

## **11. Extend your component library methodology**

One of the strongest aspects of your existing MRC system is its component-library testing workflow. You've documented fixtures for long headlines, missing CTAs, repeated components and different content quantities.

I'd extend that approach for the portfolio.

Create a component harness that lets you evaluate patterns in both themes and determine whether they belong in the shared system or in a platform-specific implementation.

| Shared component patterns | MRC-specific patterns | Portfolio-specific patterns |
| ------------------------- | --------------------- | --------------------------- |
| Buttons and links         | Audience fit cards    | Project index rows          |
| Section headers           | Service descriptions  | Technical project headers   |
| Media frames              | Engagement process    | Architecture figures        |
| Prose layouts             | Business challenges   | Code excerpts               |
| Navigation primitives     | Consultation CTA      | Résumé download             |
| Breadcrumbs               | Sector navigation     | Project metadata            |
| Related content           | Client outcomes       | Technical decision records  |
| Tables                    | Service FAQs          | Experiment results          |

A design system becomes homogeneous when every requirement is forced into existing components merely to preserve reuse.

Sometimes, the correct decision is to introduce a new block.

This is entirely consistent with CUBE CSS's guidance to avoid excessive variation of existing blocks when their purpose has fundamentally changed.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://cube.fyi\&sz=32)

CUBE CSS



## **12. Let the two websites tell different parts of the same story**

The information architecture and content strategy should reinforce this visual distinction.

Consider Good Robot Brewing as an example.

**Good Robot Brewing**

ON MRC

**Building the foundations for online sales**

Business challenges, operational requirements, customer experience, collaboration and commercial outcomes.

ON YOUR PORTFOLIO

**Engineering an integrated e-commerce system**

Architecture, data mapping, fulfillment logic, custom plugins, DNS/CDN constraints, testing and technical trade-offs.

**On GitHub**

Source code, configuration, installation, implementation details and technical documentation.

The portfolio shouldn't simply reproduce MRC case studies using a new template. That would lead to content redundancy as well as visual homogeneity.

Instead, develop complementary narratives.

For professional engagements, make your personal contribution particularly explicit. For experimental projects, identify the research question, constraints, implementation, results and limitations.

And for the portfolio itself, I would publish a case study about this very design-system exercise. It would demonstrate your understanding of brand architecture, design tokens, compositional CSS, accessibility and cross-platform development.

## **13. Recommended reading and design references**

These are the methodologies I'd study further while planning the rebuild.

| Resource                                                                                                                                                                                              | Why it's relevant                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [The Brand Relationship Spectrum](https://cmr.berkeley.edu/2000/08/42-4-the-brand-relationship-spectrum-the-key-to-the-brand-architecture-challenge/?utm_source=chatgpt.com) — Aaker & Joachimsthaler | Establishing related but distinct identities                     |
| [Spectrum Design Tokens](https://spectrum.adobe.com/page/design-tokens?utm_source=chatgpt.com) — Adobe                                                                                                | Shared design decisions and contextual adaptation                |
| [CUBE CSS](https://cube.fyi/?utm_source=chatgpt.com) — Andy Bell                                                                                                                                      | Separating global styling, composition and contextual blocks     |
| [Every Layout](https://every-layout.dev/?utm_source=chatgpt.com) — Heydon Pickering & Andy Bell                                                                                                       | Creating varied layouts from common primitives                   |
| [5 Principles of Visual Design in UX](https://www.nngroup.com/articles/principles-visual-design/?utm_source=chatgpt.com) — NN/g                                                                       | Hierarchy, balance, scale and visual perception                  |
| [Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/?utm_source=chatgpt.com) — NN/g                                                                                      | Balancing initial simplicity with deeper technical detail        |
| Art Direction for the Web — Andy Clarke                                                                                                                                                               | Applying editorial design and expressive composition to websites |
| Design Systems — Alla Kholmatova                                                                                                                                                                      | Establishing coherent design languages without rigid uniformity  |
| Atomic Design — Brad Frost                                                                                                                                                                            | Component hierarchies and reusable interface patterns            |

Of these, *Design Systems* by Alla Kholmatova and *Art Direction for the Web* by Andy Clarke would be particularly worthwhile for you. The former addresses the systemic side of the challenge, while the latter addresses the expressive side.

You already have considerable experience with the former. Developing your art-direction practices further could make the biggest difference in how you express your design system.

## **14. Validate cohesion without homogeneity**

I'd evaluate your eventual designs using a few simple tests.

**Design validation checklist**

0 / 10

Without logos, the two websites still appear related.

With colour removed, the two layouts still communicate different purposes.

Visitors can identify each website's purpose within five seconds.

A recruiter can immediately find experience, projects and résumé information.

A prospective client can immediately find relevant services and contact information.

Shared components behave consistently across both sites.

Neither site contains components solely because the other site uses them.

Typography, imagery and content density reinforce each site's purpose.

Cross-site navigation feels natural without confusing the visitor.

Both sites meet the same accessibility, performance and maintainability standards.

The second test is particularly valuable. If your only distinguishing design decisions are colour changes, then you've created two themes, but not necessarily two distinct experiences.

## **My recommended design direction**

MANNYROY.COM

# **The consulting studio**

Warm

Serif-led

Human-centred imagery

Generous section rhythm

Guided storytelling

Outcome-oriented

AMANDADROY.COM

# **The technical journal**

Precise

Sans-led with mono accents

Technical artifacts

Continuous editorial canvas

Self-directed exploration

Process-oriented

Your portfolio can be more intellectually expressive, technically detailed and experimental than MRC while still adhering to the same fundamental philosophy.

The common thread should be your commitment to clarity, purposeful systems, accessibility and maintainability. Those principles are already explicitly established in your MRC design SOPs.

**Cohesion comes from shared rules. Distinction comes from purposeful choices within those rules.**

That's the principle I'd use to guide the entire rebuild.
