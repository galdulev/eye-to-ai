# CPO Synthesis: Final Quality Assurance Report
## "Scaling Good" — Aggregated Findings from 14-Step Review

**Date:** March 11, 2026
**Document type:** Cross-referenced delta analysis + prioritized action list
**Inputs:** 14-step QA review findings + existing `rewrite_plan.md` (81 findings, 12 strengths, 7 critical issues)

---

## I. CROSS-REFERENCE TABLE

Each finding from the 14 review steps, categorized and mapped against the rewrite plan's current coverage.

**Legend:**
- **A** = Addressed by rewrite plan
- **P** = Partially addressed
- **N** = Not addressed at all

---

### Step 1: Structural Architect

| # | Finding | Category | Rewrite Plan Status | Notes |
|---|---------|----------|-------------------|-------|
| 1.1 | Only 4 genuine chapter-to-chapter dependencies exist | (f) Structural | **P** | Plan reframes as "gravitational pull" (Phase 0D) but still claims sequence is meaningful |
| 1.2 | 8 of 17 chapters have ZERO dependency on any prior chapter | (f) Structural | **P** | "Where Framework Breaks" (2B) partially addresses, but no chapter reordering considered |
| 1.3 | Layer 2↔3 is co-dependent, not sequential | (c) Logical flaw | **N** | Plan does not address the mutual dependency between Feedback Loops and Operating System |
| 1.4 | Layer 4→5 is aspirational, not structural | (c) Logical flaw | **P** | "Where Framework Breaks" acknowledges boundary conditions |
| 1.5 | Sequential claim is "partially true, directionally correct but overstated" | (c) Logical flaw | **P** | Plan softens from "iron law" to "gravitational pull" — Step 6 says this is insufficient |

### Step 2: Competitive Landscape

| # | Finding | Category | Rewrite Plan Status | Notes |
|---|---------|----------|-------------------|-------|
| 2.1 | Ann Mei Chang's *Lean Impact* is most dangerous uncited competitor | (b) Attribution | **A** | Cited in Phase 0B + Ch 2 |
| 2.2 | Donald Summers' *Scaling Altruism* (2024, Wiley) — near-identical title | (g) Positioning | **N** | Title/subtitle not addressed in rewrite plan at all |
| 2.3 | 5 uncited books: Summers, Seelos & Mair, Vu Le, Foster/Kim/Christiansen, Gregory & Howard | (b) Attribution | **N** | Rewrite plan cites Chang, Pallotta, Kania & Kramer, Collins, Morino, IDEO — but none of these 5 |
| 2.4 | "For the first time" is overreaching | (b) Attribution | **P** | Plan reframes as "first integration" — Step 2 recommends "first sequential framework" instead |
| 2.5 | "Integration is the contribution" claim is partially credible | (c) Logical flaw | **A** | Plan positions this correctly |

### Step 3: Audience Fit

| # | Finding | Category | Rewrite Plan Status | Notes |
|---|---------|----------|-------------------|-------|
| 3.1 | Target audience ($1M budget, 12 staff) would rate 7/10 | — | **A** | Audience named in Phase 0C |
| 3.2 | Chapters 2, 12 "interesting but not my reality"; Ch 9 "out of touch" | (e) Missing content | **P** | Ch 9 addressed; Ch 2 partially; Ch 12 partially |
| 3.3 | Book assumes resources target audience doesn't have | (e) Missing content | **P** | Ch 2 grant-funded reality added; but CRM/data staff/development team assumptions persist across Chs 5, 13, 14 |
| 3.4 | 6 missing topics: staff retention, board management, grant reporting burden, compliance overhead, ED burnout, managing up to funders | (e) Missing content | **P** | Staff mental health (Ch 9), board composition (Ch 10) addressed. Grant reporting, compliance, ED burnout, managing up to funders: **NOT addressed** |
| 3.5 | Top 3 actionable tools (Empathy Gap Audit, Retrospective Guide, Dignity Test) | — | **A** | Protected in rewrite plan |

### Step 4: Fact Checker

| # | Finding | Category | Rewrite Plan Status | Notes |
|---|---------|----------|-------------------|-------|
| 4.1 | Amazon profitability: "20 years" is wrong (actual ~9 years) | (a) Factual error | **A** | Fixed in Ch 8 |
| 4.2 | Donor attrition: "70%" is wrong (actual ~80%) | (a) Factual error | **A** | Fixed in Ch 13-14 |
| 4.3 | Salary gap: "30%" is management-only, not sector-wide | (a) Factual error | **A** | Fixed in Prologue |
| 4.4 | Child welfare algorithm: wrong year and location | (a) Factual error | **A** | Fixed in Ch 6 |
| 4.5 | Supercomputers: "most" should be "all" | (a) Factual error | **A** | Fixed in Ch 15 |
| 4.6 | Overhead myth origin date "1997" unsupported | (a) Factual error | **N** | Not mentioned in rewrite plan |
| 4.7 | 6 unverifiable anonymized case studies | (c) Logical flaw | **P** | Author's Note discloses methodology; individual anecdotes not all tagged |

### Step 5: Attribution Auditor

| # | Finding | Category | Rewrite Plan Status | Notes |
|---|---------|----------|-------------------|-------|
| 5.1 | Program-Community Fit not original (Chang preceded it) | (b) Attribution | **A** | Chang cited in Ch 2 |
| 5.2 | Founder Trap = founder's syndrome (well-documented concept) | (b) Attribution | **N** | Plan protects Founder Trap chapter without adding founder's syndrome citation |
| 5.3 | Unit Economics of Impact = cost-effectiveness analysis (CEA/SROI) | (b) Attribution | **N** | No citation of CEA or SROI literature |
| 5.4 | Generosity Paradox = Crutchfield & Grant, *Forces for Good* (2007) | (b) Attribution | **N** | Crutchfield & Grant not cited anywhere in rewrite plan |
| 5.5 | Empathy Gap term: Loewenstein (2005) coined it | (b) Attribution | **N** | Loewenstein not cited |
| 5.6 | Missing: Foster/Kim/Christiansen (SSIR) | (b) Attribution | **N** | Not in rewrite plan |
| 5.7 | Pattern: credits tech sources, fails to credit nonprofit-sector sources | (b) Attribution | **P** | "Standing on Shoulders" (0B) and "nonprofits got there first" (Ch 3) address the pattern, but specific nonprofit scholars still missing |
| 5.8 | Only 2 of 8 "Original" labels defensible (Debt Inventory, Dignity Test) | (b) Attribution | **P** | Appendix B update (3A) adds evidence status, but "Original" labels not revised |

### Step 6: Framework Validator

| # | Finding | Category | Rewrite Plan Status | Notes |
|---|---------|----------|-------------------|-------|
| 6.1 | Layer 1→2 genuinely sequential | — | **A** | N/A — positive finding |
| 6.2 | Layer 2↔3 co-dependent | (c) Logical flaw | **N** | Not addressed |
| 6.3 | Layer 3→4: Ch 11's own anecdote contradicts the sequential claim | (c) Logical flaw | **A** | Ch 11 "confront the counter-example" addresses this |
| 6.4 | Layer 4→5: grassroots movements succeed without Layer 4 | (c) Logical flaw | **P** | "Where Framework Breaks" (2B) covers some counter-examples |
| 6.5 | PIH, GiveDirectly, Wikipedia, AMF, Habitat all violate stack order | (c) Logical flaw | **P** | 2B addresses PIH (founder-as-superpower) and AMF; others not named |
| 6.6 | Recommendation: abandon sequential claim entirely; replace with diagnostic + gravity + feedback | (f) Structural | **N** | Plan uses "gravitational pull" but retains "build in order" and "each layer depends on the one below it" in multiple locations |

### Step 7: Evidence Gap Analyst

| # | Finding | Category | Rewrite Plan Status | Notes |
|---|---------|----------|-------------------|-------|
| 7.1 | Book demands evidence but provides none that its framework works | (c) Logical flaw | **A** | Author's Note + Conclusion "MVP" admission |
| 7.2 | Zero of 37+ tools field-tested | (c) Logical flaw | **P** | Appendix updates (3A, 3B) add status notes — but don't create evidence |
| 7.3 | "Supported by evidence" sentence in Ch 15 (with no evidence) is the most dangerous sentence | (a) Factual error | **N** | **CRITICAL GAP** — rewrite plan does not address this specific sentence at all |
| 7.4 | Only 1 of 9 major anecdotes names a real org (Kulan) | (c) Logical flaw | **P** | Author's Note discloses; individual anecdotes not strengthened |
| 7.5 | Housing program 22%→61% claim is strongest data but unverifiable | (c) Logical flaw | **N** | Rewrite plan protects housing anecdote without addressing verifiability |
| 7.6 | "Organizations report" language (Empathy Gap Audit) has no data behind it | (c) Logical flaw | **N** | Not addressed |

### Step 8: Tone Scanner

| # | Finding | Category | Rewrite Plan Status | Notes |
|---|---------|----------|-------------------|-------|
| 8.1 | 17 sector-dismissive generalizations | (d) Tone | **A** | Phase 2C tone pass + specific chapter fixes |
| 8.2 | 4 rated "inaccurate and condescending" | (d) Tone | **A** | Specific lines targeted in Ch 1, 4, 5 |
| 8.3 | Tech-positive : Nonprofit-positive ratio is 8:2 | (d) Tone | **P** | Prologue + Ch 3 additions help; but overall ratio not systematically rebalanced |
| 8.4 | "Bless your heart" framing (praises character, criticizes competence) | (d) Tone | **P** | Individual instances fixed; structural pattern not explicitly diagnosed or resolved |
| 8.5 | Line 183 most condescending sentence | (d) Tone | **A** | Rewritten in Ch 1 |
| 8.6 | Negative:Positive ratio 3.4:1 | (d) Tone | **P** | Additions bring ratio closer to balanced, but 2C tone pass is a "sweep" — no specific target ratio |

### Step 9: Narrative Analyst

| # | Finding | Category | Rewrite Plan Status | Notes |
|---|---------|----------|-------------------|-------|
| 9.1 | Food van (Ch 17) = strongest moment | — | **A** | Protected |
| 9.2 | No story in Ch 7 (Organizational Debt) — biggest missed opportunity | (e) Missing content | **N** | Plan adds conceptual paragraphs to Ch 7, not a human story |
| 9.3 | No stories in Chs 12-14 (dead zone) | (e) Missing content | **N** | Plan adds 1-2 paragraphs to Ch 12, nothing narrative to Chs 13-14 |
| 9.4 | Medical clown thread introduced in Prologue then ABANDONED | (f) Structural | **N** | Plan protects Prologue's clown passage but does not thread it through the book |
| 9.5 | No closing story in Conclusion | (e) Missing content | **N** | Plan adds philosophical/methodological content to Conclusion, not a story |
| 9.6 | 8 of 17 chapters lack a compelling human story | (e) Missing content | **N** | Not addressed systematically |
| 9.7 | Book has no narrative arc — sequence of parables, not a spine | (f) Structural | **N** | Not addressed |

### Step 10: Market Positioning

| # | Finding | Category | Rewrite Plan Status | Notes |
|---|---------|----------|-------------------|-------|
| 10.1 | Title "Scaling Good" collides with "Scaling Altruism" (Wiley 2024) | (g) Positioning | **N** | Not addressed |
| 10.2 | "Hi-Tech" in subtitle is dated and alienating | (g) Positioning | **N** | Not addressed |
| 10.3 | "Innovate, Scale, and Succeed" is commodity subtitle language | (g) Positioning | **N** | Not addressed |
| 10.4 | USP (Impact Stack as framework) invisible in title/subtitle | (g) Positioning | **N** | Not addressed |
| 10.5 | Target audience clarity: 2/10 — nothing signals the $500K-$5M reader | (g) Positioning | **P** | Audience named in text (Phase 0C), but NOT reflected in title/subtitle/cover |
| 10.6 | Recommended rename to "The Impact Stack" | (g) Positioning | **N** | Not addressed |
| 10.7 | One-line hook: "Your nonprofit doesn't have a passion problem. It has an operating system problem." | (g) Positioning | **N** | Not addressed |

### Step 11: Hostile Academic

| # | Finding | Category | Rewrite Plan Status | Notes |
|---|---------|----------|-------------------|-------|
| 11.1 | Self-refutation attack (5/5 severity) | (c) Logical flaw | **A** | Author's Note + Conclusion |
| 11.2 | Attribution attack (4/5 severity) | (b) Attribution | **P** | Major sources cited; 5+ still missing |
| 11.3 | Sequentialism attack (3/5 severity) | (c) Logical flaw | **P** | "Gravitational pull" reframe helps; counter-examples in 2B help; but book still says "in order" |
| 11.4 | Anecdote verifiability (3/5 severity) | (c) Logical flaw | **P** | Author's Note helps; individual cases not strengthened |
| 11.5 | Race blind spots (3/5 severity) | (e) Missing content | **P** | Three chapters add racial equity paragraphs; still no standalone treatment |
| 11.6 | "Supported by evidence" sentence = most dangerous in book | (a) Factual error | **N** | **CRITICAL GAP** — not addressed in rewrite plan |

### Step 12: Seasoned Practitioner

| # | Finding | Category | Rewrite Plan Status | Notes |
|---|---------|----------|-------------------|-------|
| 12.1 | Ch 9 "out of touch" | (e) Missing content | **A** | Agile realism section added |
| 12.2 | Ch 15 "giving away competitive advantage" concern | (c) Logical flaw | **A** | Economic precision added |
| 12.3 | "Never says the word 'race'" | (e) Missing content | **P** | Racial equity paragraphs in Ch 3, 6, 17 — but "race" still not named in most of the book |
| 12.4 | "Describes our world without inhabiting it" | (d) Tone | **P** | Reality-grounding additions help; tone pass helps; but fundamental outsider-looking-in framing persists |
| 12.5 | "The book is useful. It is not brave." | (d) Tone | **P** | Additions make it more honest; whether it becomes "brave" depends on execution of racial equity content |

### Step 13: Equity Reviewer

| # | Finding | Category | Rewrite Plan Status | Notes |
|---|---------|----------|-------------------|-------|
| 13.1 | "Racism" does not appear in the book | (e) Missing content | **P** | Ch 3, 6, 17 additions use "racial equity" and "structural racism" language |
| 13.2 | Tech-to-nonprofit pipeline has colonial overtones | (d) Tone | **P** | Prologue "what nonprofits know" + Ch 3 "nonprofits got there first" partially addresses |
| 13.3 | Dignity Test examines documents, not power structures | (e) Missing content | **N** | Plan protects Dignity Test as-is; no expansion to "Power and Dignity Audit" |
| 13.4 | Ch 17 doesn't name racism as root cause | (e) Missing content | **A** | Ch 17 racial equity paragraphs directly address this |
| 13.5 | 10+ missing frameworks (structural racism, white saviorism, nonprofit industrial complex, mutual aid, Indigenous governance, abolitionist approaches, White Supremacy Culture, scholars of color) | (e) Missing content | **N** | None of these frameworks or scholars are integrated |
| 13.6 | Recommendation: add racial equity chapter | (e) Missing content | **N** | Plan's rule 3 ("no chapters added or removed") prevents this |
| 13.7 | Expand Dignity Test into "Power and Dignity Audit" | (e) Missing content | **N** | Not addressed |
| 13.8 | Would be received poorly in racial equity circles | (d) Tone | **P** | Additions reduce vulnerability but don't fully resolve |

### Step 14: Actionability Auditor

| # | Finding | Category | Rewrite Plan Status | Notes |
|---|---------|----------|-------------------|-------|
| 14.1 | Only 5 of 57 tools (9%) are ready to use | (e) Missing content | **N** | No new tool content created in rewrite plan |
| 14.2 | 39 tools (68%) are conceptual only — named but never provided | (e) Missing content | **N** | Plan adds evidence status labels (3A, 3B) but doesn't build actual tools |
| 14.3 | vs. IDEO: no step-by-step instructions, time estimates, materials lists | (e) Missing content | **N** | Not addressed |
| 14.4 | "Excellent manifesto that oversells itself as a toolkit" | (c) Logical flaw | **P** | Author's Note reframes as "Minimum Viable Program" — but Appendix C still lists 57 tools as if they exist |

---

## II. CATEGORY SUMMARY

### (a) Factual Errors — MUST FIX

| # | Finding | Status |
|---|---------|--------|
| 4.1 | Amazon profitability timeline | **A** |
| 4.2 | Donor attrition rate | **A** |
| 4.3 | Salary gap magnitude | **A** |
| 4.4 | Child welfare algorithm year/location | **A** |
| 4.5 | Supercomputers "most" vs "all" | **A** |
| 4.6 | Overhead myth 1997 date unsupported | **N** |
| 7.3 | "Supported by evidence" sentence with NO evidence | **N** |
| 11.6 | Same as 7.3 — the most dangerous sentence in the book | **N** |

**Verdict:** 6 of 8 factual errors addressed. The 2 unaddressed ones include **the single most dangerous sentence in the book** (the "supported by evidence" claim in Ch 15, line 715).

### (b) Attribution Gaps — MUST FIX

| # | Finding | Status |
|---|---------|--------|
| 2.1 | Ann Mei Chang, *Lean Impact* | **A** |
| 5.1 | Program-Community Fit ← Chang | **A** |
| 5.2 | Founder Trap ← founder's syndrome literature | **N** |
| 5.3 | Unit Economics of Impact ← CEA/SROI | **N** |
| 5.4 | Generosity Paradox ← Crutchfield & Grant (2007) | **N** |
| 5.5 | Empathy Gap ← Loewenstein (2005) | **N** |
| 5.6 | Foster/Kim/Christiansen (SSIR) | **N** |
| 2.3 | Summers, Seelos & Mair, Vu Le, Gregory & Howard | **N** |
| 5.7 | Systematic pattern of crediting tech, not nonprofit | **P** |
| 5.8 | 6 of 8 "Original" labels not defensible | **P** |

**Verdict:** Only 2 of 10 attribution gaps fully addressed. This is the rewrite plan's largest blind spot. The Appendix B "Original" labels are an invitation for hostile reviewers.

### (c) Logical Flaws — SHOULD FIX

| # | Finding | Status |
|---|---------|--------|
| 1.3 | Layer 2↔3 co-dependency | **N** |
| 1.5 | Sequential claim overstated | **P** |
| 6.6 | Should abandon sequential claim entirely | **N** |
| 7.1 | Self-refutation (demands evidence, provides none) | **A** |
| 7.5 | Housing program data unverifiable | **N** |
| 7.6 | "Organizations report" with no data | **N** |
| 14.4 | Manifesto overselling as toolkit | **P** |
| 11.3 | Sequentialism attack surface | **P** |

**Verdict:** The self-refutation gap is closed. The sequential claim remains over-strong. Two evidence claims (housing data, "organizations report") are exposed and unresolved.

### (d) Tone Issues — SHOULD FIX

| # | Finding | Status |
|---|---------|--------|
| 8.1-8.6 | 17 dismissive generalizations, 3.4:1 ratio, "bless your heart" framing | **P** |
| 12.4 | "Describes our world without inhabiting it" | **P** |
| 13.2 | Colonial overtones of tech-to-nonprofit pipeline | **P** |
| 13.8 | Would be received poorly in racial equity circles | **P** |

**Verdict:** The rewrite plan addresses tone at the sentence level. The *structural* tone issue — tech positioned as competence-holder, nonprofits as character-holders — is partially addressed by additions but not fully resolved because the fundamental transfer-of-knowledge framing remains.

### (e) Missing Content — SHOULD ADD

| # | Finding | Status |
|---|---------|--------|
| 3.4 | Grant reporting burden, compliance overhead, ED burnout, managing up to funders | **N** |
| 9.2 | Story for Ch 7 (Organizational Debt) | **N** |
| 9.3 | Stories for Chs 12-14 (dead zone) | **N** |
| 9.5 | Closing story for Conclusion | **N** |
| 9.6 | 8 of 17 chapters lack human stories | **N** |
| 13.3 | Dignity Test doesn't examine power | **N** |
| 13.5 | 10+ missing equity frameworks and scholars of color | **N** |
| 13.6 | Racial equity chapter recommendation | **N** |
| 13.7 | "Power and Dignity Audit" expansion | **N** |
| 14.1 | 52 of 57 tools not ready to use | **N** |
| 14.2 | 39 tools conceptual only | **N** |
| 14.3 | No step-by-step instructions, time estimates, materials | **N** |

**Verdict:** This is the largest category of unaddressed findings. The rewrite plan deliberately chose "additive paragraphs, not new chapters" — but this means the narrative gaps, tool gaps, and equity depth gaps remain open.

### (f) Structural Weaknesses — CONSIDER RESTRUCTURING

| # | Finding | Status |
|---|---------|--------|
| 1.1-1.2 | Minimal actual dependencies; chapters are modular | **P** |
| 9.4 | Medical clown thread abandoned | **N** |
| 9.7 | No narrative arc — sequence of parables | **N** |
| 6.6 | Sequential framing should be replaced with diagnostic model | **N** |

**Verdict:** The rewrite plan's rule 3 ("reframe, don't restructure") prevents addressing these. The narrative arc finding is significant — a book with a spine is more memorable and persuasive than a sequence of independent chapters.

### (g) Positioning / Market Issues — STRATEGIC DECISIONS

| # | Finding | Status |
|---|---------|--------|
| 10.1 | Title collision with *Scaling Altruism* | **N** |
| 10.2 | "Hi-Tech" is dated | **N** |
| 10.3 | Commodity subtitle language | **N** |
| 10.4 | USP invisible in title | **N** |
| 10.5 | No audience signal in packaging | **P** |
| 10.6 | Rename to "The Impact Stack" | **N** |
| 10.7 | One-line hook | **N** |
| 2.2 | *Scaling Altruism* title collision in search | **N** |

**Verdict:** Market positioning is entirely absent from the rewrite plan. This is a strategic decision the author must confront — the content fixes are irrelevant if the book can't be found or distinguished from its near-identical competitor.

---

## III. MINIMUM VIABLE FIX

**The 10 changes that produce maximum credibility improvement for minimum effort.**

If the author has 2-3 days and must choose, these are the changes — in priority order — that close the most dangerous exposure:

### 1. Fix the "supported by evidence" sentence (Ch 15, line 715)
**Category:** Factual error. **Effort:** 15 minutes. **Impact:** Removes the single most dangerous sentence in the book — the one that uses the book's own logic against itself.
- **Change:** "This sounds like wishful thinking. It is not. It is an observable pattern, supported by evidence from both the technology sector and the small number of non-profits that have embraced radical sharing." →
  "This sounds like wishful thinking. I believe it is not — but I want to be honest about the evidence. In the technology sector, open-source projects like Linux, Apache, and TensorFlow provide robust empirical support. In the nonprofit sector, the evidence is thinner: the pattern is observable in organizations like Creative Commons, Khan Academy, and the Montessori movement, but has not been systematically studied. Crutchfield and Grant's *Forces for Good* (2007) documented a related finding — that high-impact nonprofits share leadership and credit rather than hoarding it — which provides directional support. I present this as a strong hypothesis, not a proven law."
- **Also cite:** Crutchfield & Grant, *Forces for Good* (2007) in endnotes.

### 2. Fix the 6 remaining "Original" labels in Appendix B
**Category:** Attribution. **Effort:** 1 hour. **Impact:** Prevents the most predictable hostile review attack.
- Program-Community Fit: Change "Original" → "Adapted. Builds on product-market fit (Andreessen/Rachleff) and Ann Mei Chang's *Lean Impact* (2018) application to nonprofits."
- Empathy Gap Audit: Change "Original" → "Original diagnostic tool. Term 'empathy gap' from Loewenstein (2005); the audit framework and its four questions are original."
- Unit Economics of Impact: Change "Original" → "Adapted. Integrates cost-effectiveness analysis (CEA) and social return on investment (SROI) traditions into a practitioner-accessible format."
- The Founder Trap: Change "Original" → "Original framing. Builds on the widely documented 'founder's syndrome' pattern in nonprofit management literature."
- The Generosity Paradox: Change "Original" → "Original framing. The underlying pattern was documented by Crutchfield and Grant in *Forces for Good* (2007). The term and the open-source analogy are original."
- The Funding Stack: Keep "Original" — this is defensible.

### 3. Add the Author's Note on Methodology (Phase 0A)
**Category:** Logical flaw. **Effort:** 2 hours. **Impact:** Neutralizes the self-refutation attack, the anecdote verifiability attack, and the "untested tools" attack in one page.
- Already in rewrite plan. Execute as specified.

### 4. Add "Standing on Shoulders" paragraph (Phase 0B) — EXPANDED
**Category:** Attribution. **Effort:** 1.5 hours. **Impact:** Closes the remaining attribution gaps with a single, honest paragraph.
- Already in rewrite plan — but **expand the citation list** to include:
  - Ann Mei Chang, *Lean Impact* (2018)
  - Dan Pallotta, *Uncharitable* (2008)
  - Crutchfield & Grant, *Forces for Good* (2007)
  - Kania & Kramer, "Collective Impact" (2011)
  - Mario Morino, *Leap of Reason* (2011)
  - Jim Collins, *Good to Great and the Social Sectors* (2005)
  - IDEO.org, *Field Guide to Human-Centered Design*
  - George Loewenstein on the empathy gap (2005)
  - Foster, Kim & Christiansen, "Ten Nonprofit Funding Models" (SSIR, 2009)
  - The founder's syndrome literature in nonprofit management
  - Cost-effectiveness analysis and SROI traditions

### 5. Reframe the sequential claim — go further than current plan (Phase 0D)
**Category:** Logical flaw. **Effort:** 2 hours. **Impact:** Eliminates the sequentialism attack surface.
- Current plan: "gravitational pull" reframe. **This is not enough.** Steps 1, 6, and 11 all converge on the same verdict.
- **Additional change needed:** Remove "in order" from line 143 and "You cannot skip ahead" from line 807. Replace with: "The sequence is not a rigid ladder. Organizations routinely work on multiple layers at once, and some succeed by entering the stack at Layer 3 or Layer 4. But there is a gravitational pull: weaknesses in a lower layer create drag on everything above. The Impact Stack is a *diagnostic* — a tool for identifying which layer is causing friction — not a prescription for a fixed build order."
- In Appendix A (line 836): Change "Start at Layer 1 and build up" → "Use as a diagnostic. Start where the friction is greatest."

### 6. Fix the 5 specific factual errors already identified
**Category:** Factual error. **Effort:** 1.5 hours total. **Impact:** Makes the book fact-checkable.
- Already in rewrite plan: Amazon (Ch 8), donor attrition (Ch 13-14), salary gap (Prologue), algorithm (Ch 6), supercomputers (Ch 15).
- **Add:** Fix or footnote the 1997 overhead myth date.
- Execute all 6 as specified.

### 7. Fix line 183 and the 4 "inaccurate and condescending" passages
**Category:** Tone. **Effort:** 1 hour. **Impact:** Removes the most quotable ammunition for hostile reviewers.
- Already in rewrite plan. Execute as specified — particularly the Ch 1 rewrite of "In Silicon Valley, that would be malpractice."

### 8. Add the racial equity paragraphs to Ch 3, Ch 6, and Ch 17
**Category:** Missing content. **Effort:** 3 hours. **Impact:** The book goes from "never says the word 'race'" to having a substantive (if not comprehensive) racial equity thread.
- Already in rewrite plan. Execute as specified. These three additions are the minimum needed to prevent the book being dismissed in equity-aware circles.

### 9. Add the "What nonprofits know that tech doesn't" paragraph (Prologue)
**Category:** Tone. **Effort:** 30 minutes. **Impact:** Rebalances the tech-positive/nonprofit-positive ratio from 8:2 to something closer to 6:4 — and earns the right to the critiques that follow.
- Already in rewrite plan. Execute as specified.

### 10. Rename Appendix C from "Toolkit Index" to "Concept & Tool Index" and add status labels
**Category:** Logical flaw. **Effort:** 1 hour. **Impact:** Prevents the "overselling as toolkit" critique by being honest about what exists and what is proposed.
- For each of the 57 listed tools, add a status column:
  - **Ready to use:** Empathy Gap Audit worksheet, Dignity Test checklist, Organizational Debt Inventory worksheet, Unit Economics of Impact calculator, Retrospective facilitation guide
  - **Framework provided:** (tools where the chapter gives enough structure to implement) — approximately 13 more
  - **Concept only — template forthcoming:** (tools that are named but have no actionable content) — the remaining ~39
- This is honest and turns a vulnerability into a roadmap.

**Total Minimum Viable Fix effort: ~14-16 hours (2 working days)**

---

## IV. FULL REVISION ROADMAP

Organized by effort tier and impact tier.

### Tier 1: Must Do (Credibility) — Days 1-3

Everything in the Minimum Viable Fix above, plus:
- Phase 2A endnotes (expanded to include the 5 new citations from MVF #4)
- Phase 0C audience naming
- Ch 2 cite Chang + grant-funded MVP reality
- Ch 7 victim-blaming correction + deliberate debt concept
- Ch 8 cite Pallotta
- Ch 9 Agile realism + staff mental health

### Tier 2: Should Do (Depth) — Days 4-6

- Ch 3 "nonprofits got there first" + cite HCD lineage
- Ch 4 condescension fixes + cite Morino
- Ch 5 observability precision + softening
- Ch 10 board composition paragraph
- Ch 11 confront counter-example + beneficiary agency in fundraising
- Ch 12 funding concentration counter-evidence + cite Bridgespan
- Ch 15 economic precision of Generosity Paradox
- Ch 16 cite Kania & Kramer + mergers/exit
- Ch 17 legal constraints paragraph
- Conclusion philosophical nuance + "practicing what you preach" admission + stack reframe
- "Where This Framework Breaks" section (Appendix or Conclusion)
- Full tone pass (Phase 2C)

### Tier 3: Should Do (Narrative) — Days 7-8

**These are NOT in the rewrite plan and represent NEW work:**
- **Write a human story for Ch 7 (Organizational Debt).** This is the single biggest narrative missed opportunity. A story of an org drowning in knowledge debt when a key employee leaves — the "cold coffee" opening of the Prologue is a seed for this, but Ch 7 needs its own.
- **Thread the medical clown through the book.** The Prologue introduces a powerful metaphor (reading the room, meeting the person where they are, ego-free attention) and then abandons it. Thread it back at minimum in Ch 1 (the Empathy Gap Audit is clown-work: see the person, not the chart), Ch 3 (the Dignity Test is clown-work: let them boss you around), and the Conclusion (bring the red nose back for the closing image).
- **Add a closing story to the Conclusion.** Return to a character — ideally the Kulan founder, or a composite — and show them two years later, with one layer of the stack built. End the book with a human, not an exhortation.
- **Add at least one story to the Ch 12-14 dead zone.** A real (or disclosed-composite) donor journey, or a funding crisis survived.

### Tier 4: Consider Doing (Strategic) — Decision Points

These require author-level strategic decisions, not editorial fixes:

| Decision | Options | Recommendation |
|----------|---------|----------------|
| **Title/subtitle** | Keep "Scaling Good" / Rename to "The Impact Stack" / Other | Rename. "Scaling Good" collides with "Scaling Altruism." "The Impact Stack" names the USP. Subtitle: drop "Hi-Tech," name the audience. E.g., "The Impact Stack: A Framework for Nonprofits Ready to Build What Works." |
| **Racial equity chapter** | Add a standalone chapter / Integrate paragraphs throughout (current plan) / Add an extended author's note on positionality | At minimum, add a 2-page "Author's Note on Race, Power, and Positionality" in front matter alongside the methodology note. Ideal: add a half-chapter ("Interlude: What This Book Doesn't Say") between Parts 3 and 4 that directly confronts race, the nonprofit industrial complex, and the colonial overtones of tech-to-nonprofit knowledge transfer. |
| **Toolkit: build real tools or honest labeling** | Develop 10-15 actual downloadable tools / Label everything honestly in print and create a companion website for future tools | Create 10 real tools (PDF/worksheet format) for the 10 most-referenced concepts. Host on a companion site. In the book, provide the 5 that already exist and reference the site for others. |
| **Dignity Test expansion** | Keep as-is (document audit) / Expand to Power and Dignity Audit (power structure audit) | Expand. Add 3 power-focused questions: "Who decided what this program would look like?" "Whose knowledge was treated as expertise in that decision?" "If beneficiaries had veto power over program design, what would they change?" This makes the Dignity Test the book's most distinctive and cited tool. |
| **Sequential vs. Diagnostic framing** | Keep "gravitational pull" reframe / Fully commit to diagnostic model | Fully commit. Rename "The Impact Stack" visual to show feedback loops between layers, not just upward arrows. Add a "Stack Diagnostic" one-pager that asks "which layer is your weakest?" as the entry point. This is more honest *and* more useful. |

### Tier 5: Post-Publication (Ongoing)

- Commission field-testing of the 5 ready tools with 3-5 organizations
- Publish results (even negative) on companion website
- Build 2-3 additional tools per quarter based on practitioner feedback
- Track which "Original" concepts get cited and by whom — this is the real evidence the framework adds value

---

## V. DELTA ANALYSIS: What This 14-Step Review Adds Beyond the Rewrite Plan

The rewrite plan is strong editorial work. It addresses most sentence-level problems and the biggest credibility threats. Here is what it misses:

### Critical New Findings (Not in Rewrite Plan)

| # | Finding | Source Step | Why It Matters |
|---|---------|-----------|----------------|
| **D1** | The "supported by evidence" sentence in Ch 15 is the single most dangerous sentence in the book — it uses the book's own standard against itself | Steps 7, 11 | Two independent reviewers flagged the same sentence as the #1 vulnerability. The rewrite plan's Ch 15 edits fix "most supercomputers" and add economic precision but **never touch this sentence**. |
| **D2** | 6 of 8 "Original" labels in Appendix B are not defensible | Step 5 | The rewrite plan adds evidence-status notes (3A) but does not revise the "Original" labels themselves. A reviewer checking Appendix B will find false originality claims within 10 minutes. |
| **D3** | 4 specific missing citations: Crutchfield & Grant, Loewenstein, founder's syndrome literature, CEA/SROI | Step 5 | The rewrite plan cites 6 major sources but misses these 4, which correspond to 4 of the book's 8 "original" concepts. |
| **D4** | The medical clown metaphor is introduced and abandoned | Step 9 | The Prologue's most distinctive image — the one that differentiates this book from every other nonprofit management book — is never invoked again. This is a narrative design failure, not an editorial one. |
| **D5** | 8 of 17 chapters have no human story; Chs 12-14 are a "dead zone" | Step 9 | The rewrite plan adds *arguments* and *paragraphs* but never adds *stories*. The book's strongest chapters (Prologue, Ch 3, Ch 17) succeed because of stories. The weakest lack them. |
| **D6** | The book has no narrative arc | Step 9 | The rewrite plan treats each chapter as an independent editorial unit. The Narrative Analyst identified that the book reads as a sequence of parables, not a narrative with a spine. No single revision addresses this; it requires threading a recurring motif (the medical clown) or character (the Kulan founder) through the whole book. |
| **D7** | All market positioning is unaddressed: title, subtitle, hook, competitive search footprint | Step 10 | The rewrite plan improves the book's *content* but not its *packaging*. A book that can't be distinguished from *Scaling Altruism* in a bookstore or Amazon search has a distribution problem that no amount of good writing can fix. |
| **D8** | 52 of 57 tools are not ready to use; the book oversells itself as a toolkit | Step 14 | The rewrite plan adds label notes to Appendix C but does not create any actual tools. The Author's Note reframes the book as a "Minimum Viable Program," which helps — but Appendix C still lists 57 tools as if they exist. This is a bait-and-switch that practitioners will notice immediately. |
| **D9** | The Dignity Test examines documents but not power structures | Steps 13, 12 | The rewrite plan protects the Dignity Test as a "competitive moat" (Rewrite Philosophy, rule 1). But two reviewers independently said it needs expansion. The current test checks for respectful language; it does not check for who held decision-making power, whose knowledge was centered, or whether beneficiaries had any structural authority. |
| **D10** | Layer 2↔3 co-dependency is never addressed | Steps 1, 6 | The structural analysis found that Feedback Loops (Layer 2) and the Operating System (Layer 3) are mutually dependent — you need systems to measure, and you need measurement to know which systems to build. The rewrite plan softens the sequential claim but never acknowledges this specific co-dependency, which undermines the stack's architecture at its core. |
| **D11** | 10+ equity frameworks and scholars of color entirely absent | Step 13 | The rewrite plan adds racial equity paragraphs to 3 chapters. But it cites zero scholars of color, zero frameworks from critical race theory, zero frameworks from the nonprofit industrial complex critique, and zero Indigenous or abolitionist approaches. The additions use the author's voice to discuss race — they don't bring other voices into the conversation. |
| **D12** | "1997" date for overhead myth origin is unsupported | Step 4 | Minor factual fix missed by the rewrite plan. |

---

## VI. FINAL VERDICT

### The Book's Current State

"Scaling Good" is a **7/10 manuscript** — strong enough to publish, not strong enough to survive serious scrutiny. Its architecture (the Impact Stack) is genuinely useful. Its best passages (the Prologue, Ch 3's housing program, Ch 17's food van, the Dignity Test) are excellent. Its five-layer framework fills a real gap in the nonprofit management literature.

But it has three structural vulnerabilities that, uncorrected, will define how the book is received:

1. **The credibility gap.** The book demands evidence-based practice while providing no evidence its framework works, claims originality for concepts that have prior art, and asserts a claim is "supported by evidence" without providing any. A hostile reviewer can dismantle the book using only the book's own standards.

2. **The equity gap.** The book never says the word "racism" as a standalone analytical concept. It positions a whiter industry as the competence-holder and a more diverse sector as the character-holder. Its most distinctive tool (the Dignity Test) examines language but not power. In 2026, this is not a cosmetic issue — it determines whether the book is taken seriously by a large portion of its target audience.

3. **The packaging gap.** The title collides with a Wiley-published competitor. The subtitle is dated. The USP is invisible. The toolkit promise is unfulfilled. A reader browsing Amazon cannot tell what this book is, who it's for, or why it's different.

### The Rewrite Plan's Adequacy

The existing `rewrite_plan.md` is **good editorial work that addresses approximately 60% of the total findings.** It is strongest on:
- Factual corrections (5 of 6 errors fixed)
- Tone adjustments (systematic and well-targeted)
- Self-awareness additions (Author's Note, Conclusion admission)
- Sector-balancing content (Prologue, Ch 3, Ch 7 additions)

It is weakest on:
- Attribution (only 2 of 10 gaps fully closed)
- Narrative (no stories added, no arc created, medical clown abandoned)
- Market positioning (entirely absent)
- Toolkit reality (no tools built)
- Equity depth (paragraphs added, but no frameworks or scholars of color integrated)
- The single most dangerous sentence in the book (Ch 15, line 715)

### Path to Publication-Readiness

| Tier | What It Achieves | Effort |
|------|-----------------|--------|
| **Minimum Viable Fix** (this document, Section III) | Closes the 3 most dangerous attack vectors: factual errors, attribution gaps, self-refutation. Makes the book *defensible*. | 2 days |
| **Minimum Viable Fix + Rewrite Plan Tiers 1-2** | All of the above + tonal rebalancing, racial equity thread, boundary conditions, full endnotes. Makes the book *credible*. | 6-7 days |
| **Full revision including Tier 3 (Narrative)** | All of the above + human stories in dead-zone chapters, medical clown threading, closing story. Makes the book *memorable*. | 8-9 days |
| **Full revision including Tier 4 (Strategic decisions)** | All of the above + title change, Dignity Test expansion, real toolkit, equity depth. Makes the book *distinctive*. | 12-15 days + ongoing |

### The Bottom Line

The rewrite plan, executed as written, produces a **defensible and credible** book — a solid 8/10. This CPO synthesis adds three things the rewrite plan does not:

1. **Attribution safety** — fixing the "Original" labels and the "supported by evidence" sentence eliminates the two most exploitable vulnerabilities.
2. **Narrative spine** — threading the medical clown and adding stories to dead chapters makes the book a *reading experience*, not just a reference manual.
3. **Market differentiation** — the title/subtitle decision is the single highest-leverage change the author can make for commercial viability.

Execute the Minimum Viable Fix first. Then execute the rewrite plan. Then make the strategic decisions in Tier 4. The book is closer to good than it knows. The gap between what it is and what it could be is exactly the kind of gap it teaches organizations to close.
