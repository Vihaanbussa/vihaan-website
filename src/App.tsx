import { Fragment, useEffect, useState, type ReactNode } from "react"

import { useTheme } from "@/components/theme-provider"
import {
  assetUrl,
  awardSpotlights,
  cardInsights,
  currentFocus,
  internships,
  leadership,
  metrics,
  projects,
  research,
  skillGroups,
  type DetailItem,
  type GalleryImage,
} from "@/data"
import { cn } from "@/lib/utils"

/* ---------------------------------------------------------------- content */

// Section and item order follows the resume: experience, projects, research,
// leadership, then awards. Items not named here sort last, in data order.
function orderBy<T extends { id: string }>(items: T[], ids: string[]) {
  const rank = new Map(ids.map((id, index) => [id, index]))
  return [...items].sort(
    (a, b) => (rank.get(a.id) ?? ids.length) - (rank.get(b.id) ?? ids.length)
  )
}

type WorkSection = {
  id: string
  label: string
  noun: string
  description: string
  items: DetailItem[]
}

const workSections: WorkSection[] = [
  {
    id: "experience",
    label: "Experience",
    noun: "roles",
    description:
      "Where I've worked: AI infrastructure, health analytics, dialysis care, and teaching robotics.",
    items: orderBy(internships, ["karini", "hsr", "dci", "robotix"]),
  },
  {
    id: "projects",
    label: "Projects",
    noun: "case studies",
    description: "Things I've built, each written up as a short case study.",
    items: orderBy(projects, [
      "elderhelper",
      "investedu",
      "care",
      "dialysense",
    ]),
  },
  {
    id: "research",
    label: "Research",
    noun: "studies",
    description:
      "Research I've done on prediction, computer vision, and model evaluation.",
    items: orderBy(research, ["nfl-predictor", "nfl-ai", "exercise-ai"]),
  },
  {
    id: "leadership",
    label: "Leadership",
    noun: "programs",
    description:
      "Clubs, conferences, and programs I've run, from robotics to Model UN to a national backpack drive.",
    items: orderBy(leadership, [
      "robotics-club",
      "mun",
      "nriva",
      "tsa",
      "woodland",
    ]),
  },
]

const email = "vbussa@berkeley.edu"

const contactLinks = [
  { label: "Email", value: email, href: `mailto:${email}` },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vihaanbussa",
    href: "https://linkedin.com/in/vihaanbussa",
  },
  {
    label: "GitHub",
    value: "github.com/Vihaanbussa",
    href: "https://github.com/Vihaanbussa",
  },
  {
    label: "Instagram",
    value: "@vihaanbussa18",
    href: "https://instagram.com/vihaanbussa18",
  },
]

const aboutFacts = [
  {
    label: "School",
    value:
      "UC Berkeley, B.A. Computer Science, College of Computing, Data Science, and Society. Expected May 2029.",
  },
  {
    label: "Coursework",
    value:
      "Computer Programs, Data Structures and Algorithms, Linear Algebra/Differential Equations, Economics (in progress)",
  },
  { label: "Academics", value: "GPA 4.0/4.0" },
  {
    label: "Testing",
    value:
      "ACT 36 superscore, 35 composite; PSAT 1490 (National Merit Finalist)",
  },
  {
    label: "AP scores",
    value:
      "5s: AP Physics C Mechanics, AP CSA, AP Calculus BC, AP Chemistry, AP Statistics, AP Research. 4: AP Physics C E&M.",
  },
]

type Page = { id: string; label: string; blurb: string; count?: string }

const pages: Page[] = [
  {
    id: "about",
    label: "About",
    blurb: "A bit about me, a few numbers, and what I'm focused on right now.",
  },
  ...workSections.map((section) => ({
    id: section.id,
    label: section.label,
    blurb: section.description,
    count: `${section.items.length} ${section.noun}`,
  })),
  {
    id: "awards",
    label: "Awards",
    blurb:
      "Competitions I've won or placed in, across entrepreneurship, DECA, robotics, hardware, TSA, and academics.",
    count: `${awardSpotlights.length} awards`,
  },
  {
    id: "contact",
    label: "Contact",
    blurb: "Email me, or find me wherever else I am online.",
    count: `${contactLinks.length} links`,
  },
]

// Logos that need a backdrop to stay legible (white-on-transparent, etc.).
const logoBackdrop: Record<string, string> = {
  hsr: "bg-neutral-950",
  karini: "bg-white",
}

/* ---------------------------------------------------------------- routing */

type Route =
  | { kind: "home" }
  | { kind: "page"; page: Page }
  | { kind: "detail"; section: WorkSection; item: DetailItem; index: number }

function parseRoute(hash: string): Route {
  const path = hash.replace(/^#\/?/, "").replace(/\/+$/, "")
  if (!path) return { kind: "home" }

  const [first, second] = path.split("/")
  const page = pages.find((entry) => entry.id === first)
  if (page && !second) return { kind: "page", page }

  const id = second ?? first
  for (const section of workSections) {
    const index = section.items.findIndex((entry) => entry.id === id)
    if (index >= 0) {
      return { kind: "detail", section, item: section.items[index], index }
    }
  }
  return { kind: "home" }
}

function routeTitle(route: Route) {
  if (route.kind === "page") return `${route.page.label} · Vihaan Bussa`
  if (route.kind === "detail") return `${route.item.title} · Vihaan Bussa`
  return "Vihaan Bussa"
}

function useRoute() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener("hashchange", onChange)
    return () => window.removeEventListener("hashchange", onChange)
  }, [])

  useEffect(() => {
    document.title = routeTitle(parseRoute(hash))
    window.scrollTo(0, 0)
  }, [hash])

  return { hash, route: parseRoute(hash) }
}

/* ---------------------------------------------------------------- helpers */

const mono = "font-mono text-xs leading-6 text-muted-foreground tabular-nums"

function pad(n: number) {
  return String(n).padStart(2, "0")
}

// Screenshots and documents are letterboxed; photographs are cropped to fit.
function fitsContain(photo: GalleryImage) {
  return (
    /\.png$/i.test(photo.url) ||
    /screenshot|mobile-app|documentation|impact-report|analytics|dashboard|interface|schematic/i.test(
      `${photo.url} ${photo.caption}`
    )
  )
}

/* ---------------------------------------------------------------- app */

export default function App() {
  const { hash, route } = useRoute()

  return (
    <div className="mx-auto max-w-3xl px-6 pt-8 pb-16 sm:pt-12 sm:pb-24">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-10 focus:bg-background focus:px-3 focus:py-2 focus:underline"
      >
        Skip to content
      </a>
      <SiteHeader route={route} />
      {/* Keyed on the hash so each page mounts fresh and fades up. */}
      <main id="main" key={hash} className="motion-safe:animate-fade-up">
        {route.kind === "home" && <HomePage />}
        {route.kind === "page" && route.page.id === "about" && <AboutPage />}
        {route.kind === "page" && route.page.id === "awards" && <AwardsPage />}
        {route.kind === "page" && route.page.id === "contact" && (
          <ContactPage />
        )}
        {route.kind === "page" &&
          workSections
            .filter((section) => section.id === route.page.id)
            .map((section) => <WorkPage key={section.id} section={section} />)}
        {route.kind === "detail" && (
          <DetailPage
            section={route.section}
            item={route.item}
            index={route.index}
          />
        )}
      </main>
      <SiteFooter />
    </div>
  )
}

function SiteHeader({ route }: { route: Route }) {
  const activeId =
    route.kind === "page"
      ? route.page.id
      : route.kind === "detail"
        ? route.section.id
        : null

  return (
    <header className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
      <div className="flex items-center gap-4">
        <a
          href="#/"
          className="font-medium transition-colors hover:text-accent"
          aria-current={route.kind === "home" ? "page" : undefined}
        >
          Vihaan Bussa
        </a>
        <ThemeSwitch />
      </div>
      <nav
        aria-label="Main navigation"
        className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs leading-6 tabular-nums"
      >
        {pages.map((page, index) => {
          const active = activeId === page.id
          return (
            <a
              key={page.id}
              href={`#/${page.id}`}
              aria-current={active ? "page" : undefined}
              className={cn(
                "nav-underline pb-0.5 hover:text-foreground",
                active ? "text-foreground" : "text-muted-foreground"
              )}
            >
              <span className="text-muted-foreground/70">{pad(index + 1)}</span>{" "}
              {page.label}
            </a>
          )
        })}
      </nav>
    </header>
  )
}

function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()
  const dark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark mode"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="group/switch inline-flex items-center gap-2 font-mono text-xs leading-6 text-muted-foreground transition-colors hover:text-foreground"
    >
      <span className="relative inline-block h-4 w-7 rounded-full border border-border bg-muted transition-colors group-hover/switch:border-muted-foreground/60">
        <span
          className={cn(
            "absolute top-0.5 left-0.5 size-2.5 rounded-full bg-foreground transition-transform duration-200 ease-out",
            dark && "translate-x-3"
          )}
        />
      </span>
      <span className="hidden sm:inline">{dark ? "Dark" : "Light"}</span>
    </button>
  )
}

function SiteFooter() {
  return (
    <footer
      className={cn(
        mono,
        "mt-24 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border pt-5"
      )}
    >
      <span>© {new Date().getFullYear()} Vihaan Bussa</span>
      <span aria-hidden="true">·</span>
      <span className="inline-flex items-center gap-2">
        <img
          src={assetUrl("/cal-logo-blue-gold.png")}
          alt="Cal"
          width={20}
          height={15}
          className="h-[15px] w-5 rounded-[2px] object-cover"
        />
        Computer Science at UC Berkeley, Class of 2029
      </span>
    </footer>
  )
}

/* ---------------------------------------------------------------- building blocks */

function TextLink({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  const external = /^https?:/.test(href)
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn(
        "text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent",
        className
      )}
    >
      {children}
      {external && <span aria-hidden="true"> ↗</span>}
    </a>
  )
}

function Ledger({
  title,
  count,
  description,
  children,
  className,
}: {
  title?: string
  count?: ReactNode
  description?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section className={className}>
      {title && (
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-medium">{title}</h2>
          {count !== undefined && <span className={mono}>{count}</span>}
        </div>
      )}
      {description && (
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      )}
      <div
        className={cn(
          "divide-y divide-border border-y border-border",
          title && "mt-5"
        )}
      >
        {children}
      </div>
    </section>
  )
}

function Row({
  label,
  trailing,
  href,
  children,
}: {
  label: ReactNode
  trailing?: ReactNode
  href?: string
  children: ReactNode
}) {
  // Phones stack the label above the content; wider screens get a ledger gutter.
  const className =
    "grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1 py-4 sm:grid-cols-[6.5rem_minmax(0,1fr)_auto] sm:gap-x-6 sm:gap-y-0"
  const inner = (
    <>
      <span className={cn(mono, "col-span-full sm:col-span-1")}>{label}</span>
      <div className="min-w-0 leading-6">{children}</div>
      <div className="flex items-start gap-3">
        {trailing}
        {href && (
          <span
            aria-hidden="true"
            className={cn(
              mono,
              "text-accent transition-transform duration-200 ease-out group-hover:translate-x-0.5"
            )}
          >
            →
          </span>
        )}
      </div>
    </>
  )

  if (href) {
    // Linked rows tint on hover, bleeding slightly past the hairlines.
    return (
      <a
        href={href}
        className={cn(
          className,
          "group -mx-3 rounded-sm px-3 transition-colors duration-200 hover:bg-muted/70"
        )}
      >
        {inner}
      </a>
    )
  }
  return <div className={className}>{inner}</div>
}

function RowTitle({ children }: { children: ReactNode }) {
  return (
    <span className="font-medium underline decoration-accent/40 underline-offset-4 transition-colors group-hover:text-accent group-hover:decoration-accent">
      {children}
    </span>
  )
}

function Pager({
  prev,
  next,
}: {
  prev?: { href: string; label: string }
  next?: { href: string; label: string }
}) {
  return (
    <nav
      aria-label="Pagination"
      className={cn(mono, "mt-16 flex justify-between gap-6")}
    >
      {prev ? (
        <a href={prev.href} className="transition-colors hover:text-foreground">
          ← {prev.label}
        </a>
      ) : (
        <span />
      )}
      {next && (
        <a
          href={next.href}
          className="text-right transition-colors hover:text-foreground"
        >
          {next.label} →
        </a>
      )}
    </nav>
  )
}

function PageFrame({ page, children }: { page: Page; children: ReactNode }) {
  const index = pages.findIndex((entry) => entry.id === page.id)
  const prev = pages[index - 1]
  const next = pages[index + 1]

  return (
    <div className="mt-14 sm:mt-20">
      <header className="flex items-baseline justify-between gap-4">
        <h1 className="text-2xl font-medium tracking-tight">{page.label}</h1>
        <span className={mono}>
          {pad(index + 1)} / {pad(pages.length)}
        </span>
      </header>
      <p className="mt-2 text-muted-foreground">{page.blurb}</p>
      <div className="mt-10">{children}</div>
      <Pager
        prev={
          prev
            ? { href: `#/${prev.id}`, label: prev.label }
            : { href: "#/", label: "Home" }
        }
        next={next ? { href: `#/${next.id}`, label: next.label } : undefined}
      />
    </div>
  )
}

function Thumb({ item }: { item: DetailItem }) {
  const first = item.photos?.[0]
  if (!first) return null
  const isLogo = first.url.startsWith("/logos/")
  return (
    <img
      src={assetUrl(first.url)}
      alt=""
      loading="lazy"
      className={cn(
        "size-12 shrink-0 rounded-sm object-cover saturate-[.85] transition-[filter] duration-300 group-hover:saturate-100 sm:size-14",
        isLogo && "bg-muted object-contain p-2",
        !isLogo && fitsContain(first) && "bg-muted object-contain p-1",
        logoBackdrop[item.id]
      )}
    />
  )
}

/* ---------------------------------------------------------------- pages */

function HomePage() {
  return (
    <div className="mt-14 space-y-20 sm:mt-24">
      <section className="grid gap-10 sm:grid-cols-[minmax(0,1fr)_16rem] sm:items-start sm:gap-14">
        <div className="space-y-6">
          <p className={mono}>Vihaan Bussa · UC Berkeley, Computer Science</p>
          <h1 className="text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl">
            I build practical software{" "}
            <span className="text-muted-foreground">
              across finance, healthcare, and applied AI.
            </span>
          </h1>
          <p className="text-muted-foreground">
            I&apos;m Vihaan, a freshman studying Computer Science at UC
            Berkeley. I like building things people actually use, from
            InvestEDU, which teaches teens to invest, to Project CARE, which
            helps dialysis patients, with a few ML projects in between.
          </p>
          <p className="flex flex-wrap gap-x-6 gap-y-2">
            <TextLink href="#/projects">View projects →</TextLink>
            <TextLink href={`mailto:${email}`}>Email me</TextLink>
          </p>
        </div>
        <figure className="order-first sm:order-last">
          <img
            src={assetUrl("/headshot.png")}
            alt="Vihaan Bussa"
            width={512}
            height={512}
            className="size-48 rounded-sm object-cover sm:size-64"
          />
          <figcaption className={cn(mono, "mt-3")}>
            Student founder and software builder
          </figcaption>
        </figure>
      </section>

      <Ledger title="Index" count={`${pages.length} pages`}>
        {pages.map((page, index) => (
          <Row
            key={page.id}
            href={`#/${page.id}`}
            label={pad(index + 1)}
            trailing={
              page.count && (
                <span className={cn(mono, "hidden sm:inline")}>
                  {page.count}
                </span>
              )
            }
          >
            <RowTitle>{page.label}</RowTitle>
            <p className="mt-1 text-sm text-muted-foreground">{page.blurb}</p>
          </Row>
        ))}
      </Ledger>
    </div>
  )
}

function AboutPage() {
  return (
    <PageFrame page={pages[0]}>
      <Ledger>
        <Row label="Bio">
          <div className="space-y-4">
            <p>
              I&apos;m a Computer Science freshman at UC Berkeley, and I like
              turning curiosity into things that work. I started programming at
              13 with Python, and that has grown into web development, machine
              learning, product design, and applied research.
            </p>
            <p className="text-muted-foreground">
              I got into Y Combinator Startup School 2026, which puts ambitious
              technical builders in a room with YC partners and each other to
              think harder about building things people want.
            </p>
          </div>
        </Row>

        <Row label="Numbers">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="font-medium tabular-nums">{metric.value}</dt>
                <dd className="mt-0.5 text-sm leading-5 text-muted-foreground">
                  {metric.label}
                </dd>
              </div>
            ))}
          </dl>
        </Row>

        {aboutFacts.map((fact) => (
          <Row key={fact.label} label={fact.label}>
            {fact.value}
          </Row>
        ))}

        <Row label="Berkeley">
          <div className="flex items-center gap-6">
            <img
              src={assetUrl("/uc-berkeley-logo.svg")}
              alt="UC Berkeley"
              className="h-6 w-auto dark:invert"
            />
            <img
              src={assetUrl("/uc-berkeley-seal.svg")}
              alt="UC Berkeley seal"
              className="size-10 object-contain"
            />
          </div>
        </Row>

        <Row label="Focus">
          <ul className="space-y-4">
            {currentFocus.map((item) => (
              <li key={item.title}>
                <p className="font-medium">{item.title}</p>
                <p className="mt-0.5 text-sm leading-6 text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </Row>

        {skillGroups.map((group) => (
          <Row key={group.label} label={group.label}>
            <p className="text-muted-foreground">{group.items.join(", ")}</p>
          </Row>
        ))}
      </Ledger>
    </PageFrame>
  )
}

function WorkPage({ section }: { section: WorkSection }) {
  const page = pages.find((entry) => entry.id === section.id) ?? pages[0]
  return (
    <PageFrame page={page}>
      <Ledger>
        {section.items.map((item, index) => (
          <Row
            key={item.id}
            href={`#/${section.id}/${item.id}`}
            label={pad(index + 1)}
            trailing={<Thumb item={item} />}
          >
            <RowTitle>{item.title}</RowTitle>
            <p className={cn(mono, "mt-0.5")}>{item.kicker}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
          </Row>
        ))}
      </Ledger>
    </PageFrame>
  )
}

function AwardsPage() {
  const page = pages.find((entry) => entry.id === "awards") ?? pages[0]
  return (
    <PageFrame page={page}>
      <Ledger>
        {awardSpotlights.map((award) => (
          <Row key={award.title} label={award.year}>
            <p className="font-medium">{award.title}</p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {award.context}
            </p>
          </Row>
        ))}
      </Ledger>
    </PageFrame>
  )
}

function ContactPage() {
  const page = pages[pages.length - 1]
  return (
    <PageFrame page={page}>
      <Ledger>
        {contactLinks.map((link) => (
          <Row key={link.label} label={link.label}>
            <TextLink href={link.href}>{link.value}</TextLink>
          </Row>
        ))}
        <Row label="Location">Berkeley, CA</Row>
        <Row label="School">
          UC Berkeley, B.A. Computer Science, expected May 2029
        </Row>
      </Ledger>
    </PageFrame>
  )
}

function DetailPage({
  section,
  item,
  index,
}: {
  section: WorkSection
  item: DetailItem
  index: number
}) {
  const insight = cardInsights[item.id]
  const tags = item.tags ?? item.skills
  const photos = item.photos ?? []
  const logo = photos.find((photo) => photo.url.startsWith("/logos/"))
  const gallery = photos.filter((photo) => photo !== logo)
  const prev = section.items[index - 1]
  const next = section.items[index + 1]

  return (
    <div className="mt-14 sm:mt-20">
      <p className={mono}>
        <a
          href={`#/${section.id}`}
          className="transition-colors hover:text-foreground"
        >
          ← {section.label}
        </a>
        <span className="mx-2" aria-hidden="true">
          /
        </span>
        {pad(index + 1)} of {pad(section.items.length)}
      </p>

      <header className="mt-8 grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-10">
        <div>
          <h1 className="text-2xl font-medium tracking-tight text-balance sm:text-3xl">
            {item.title}
          </h1>
          <p className="mt-2 text-muted-foreground">{item.kicker}</p>
          <p className="mt-6 leading-7">{item.overview ?? item.description}</p>
        </div>
        {logo && (
          <img
            src={assetUrl(logo.url)}
            alt={logo.caption}
            className={cn(
              "h-10 w-auto max-w-40 rounded-sm object-contain p-1.5 sm:order-last",
              logoBackdrop[item.id]
            )}
          />
        )}
      </header>

      <Ledger className="mt-10">
        {insight && <Row label="Role">{insight.role}</Row>}
        {item.duration && <Row label="When">{item.duration}</Row>}
        {item.links && item.links.length > 0 && (
          <Row label="Links">
            <p className="flex flex-wrap gap-x-5 gap-y-1">
              {item.links.map((link) => (
                <TextLink key={link.label} href={link.url}>
                  {link.label}
                </TextLink>
              ))}
            </p>
          </Row>
        )}
        {insight && <Row label="Highlights">{insight.metrics.join(" · ")}</Row>}
        {tags && tags.length > 0 && (
          <Row label="Stack">
            <span className="text-muted-foreground">{tags.join(", ")}</span>
          </Row>
        )}
      </Ledger>

      {insight && (
        <div className="mt-10 space-y-3 text-muted-foreground">
          <p>{insight.impact}</p>
          <p>{insight.build}</p>
          <p>{insight.direction}</p>
        </div>
      )}

      {gallery.length > 0 && <Gallery photos={gallery} className="mt-12" />}

      <Ledger className="mt-12">
        {item.details && (
          <Row label="Details">
            <p className="whitespace-pre-line text-muted-foreground">
              <EmphasizedText text={item.details} />
            </p>
          </Row>
        )}
        {item.impactNarrative && (
          <Row label="Outcome">
            <p className="text-muted-foreground">{item.impactNarrative}</p>
          </Row>
        )}
        <ListRow label="What I did" items={item.responsibilities} />
        <ListRow label="Wins" items={item.achievements} />
        <ListRow label="By the numbers" items={item.keyMetrics} />
        <ListRow
          label="Hard parts"
          items={item.challenges?.map(
            (challenge) => `${challenge.problem}: ${challenge.solution}`
          )}
        />
        <ListRow label="Budget" items={item.budget} />
        <ListRow label="Compliance" items={item.compliance} />
        <ListRow label="Up next" items={item.future} />
      </Ledger>

      <Pager
        prev={
          prev
            ? { href: `#/${section.id}/${prev.id}`, label: prev.title }
            : { href: `#/${section.id}`, label: section.label }
        }
        next={
          next
            ? { href: `#/${section.id}/${next.id}`, label: next.title }
            : {
                href: `#/${section.id}`,
                label: `All ${section.label.toLowerCase()}`,
              }
        }
      />
    </div>
  )
}

function ListRow({ label, items }: { label: string; items?: string[] }) {
  if (!items?.length) return null
  return (
    <Row label={label}>
      <ul className="space-y-1 text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className={cn(mono, "shrink-0")}>
              –
            </span>
            <span>
              <EmphasizedText text={item} />
            </span>
          </li>
        ))}
      </ul>
    </Row>
  )
}

function Gallery({
  photos,
  className,
}: {
  photos: GalleryImage[]
  className?: string
}) {
  return (
    <div
      className={cn(
        "grid gap-x-6 gap-y-8",
        photos.length > 1 && "sm:grid-cols-2",
        className
      )}
    >
      {photos.map((photo, index) => (
        <figure key={`${photo.url}-${index}`}>
          <img
            src={assetUrl(photo.url)}
            alt={photo.caption}
            loading="lazy"
            className={cn(
              "aspect-[4/3] w-full rounded-sm bg-muted",
              fitsContain(photo) ? "object-contain" : "object-cover"
            )}
          />
          <figcaption className={cn(mono, "mt-2 leading-5")}>
            <span className="text-foreground">Fig. {pad(index + 1)}</span>{" "}
            {photo.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

// Bolds the "Label:" prefixes the content uses to structure long paragraphs.
const labelPattern = /([A-Z][A-Za-z' &/-]{1,36}:)/g
const isLabel = /^[A-Z][A-Za-z' &/-]{1,36}:$/

function EmphasizedText({ text }: { text: string }) {
  return (
    <>
      {text.split(labelPattern).map((part, index) => {
        if (!part) return null
        return isLabel.test(part) ? (
          <strong
            key={`${part}-${index}`}
            className="font-medium text-foreground"
          >
            {part}
          </strong>
        ) : (
          <Fragment key={`${part}-${index}`}>{part}</Fragment>
        )
      })}
    </>
  )
}
