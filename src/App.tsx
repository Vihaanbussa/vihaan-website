import { Fragment, useEffect, useState, type ReactNode } from "react"

import {
  assetUrl,
  awardSpotlights,
  cardInsights,
  currentFocus,
  internships,
  leadership,
  metrics,
  navItems,
  projects,
  research,
  technicalSkills,
  type DetailItem,
  type GalleryImage,
} from "@/data"
import { cn } from "@/lib/utils"

type WorkSection = {
  id: string
  label: string
  description: string
  items: DetailItem[]
}

const workSections: WorkSection[] = [
  {
    id: "projects",
    label: "Projects",
    description:
      "Finance, healthcare, and hardware projects, each written up as a short case study.",
    items: projects,
  },
  {
    id: "research",
    label: "Research",
    description:
      "Academic explorations in prediction, computer vision, and model evaluation.",
    items: research,
  },
  {
    id: "experience",
    label: "Experience",
    description:
      "Practical work across AI infrastructure, health analytics, and STEM education.",
    items: internships,
  },
  {
    id: "leadership",
    label: "Leadership",
    description:
      "Student organizations, civic engagement, robotics mentorship, and nationwide volunteer coordination.",
    items: leadership,
  },
]

const email = "bussavihaan@gmail.com"

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
  { label: "School", value: "UC Berkeley, freshman studying Computer Science" },
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

// Logos that need a backdrop to stay legible (white-on-transparent, etc.).
const logoBackdrop: Record<string, string> = {
  hsr: "bg-neutral-950 p-1.5",
  karini: "bg-white p-1.5",
}

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener("hashchange", onChange)
    return () => window.removeEventListener("hashchange", onChange)
  }, [])

  return hash
}

function findItem(id: string) {
  for (const section of workSections) {
    const item = section.items.find((entry) => entry.id === id)
    if (item) return { item, section }
  }
  return null
}

function routeFor(hash: string) {
  return hash.startsWith("#/") ? findItem(hash.slice(2)) : null
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

export default function App() {
  const hash = useHash()
  const route = routeFor(hash)

  useEffect(() => {
    const current = routeFor(hash)
    if (current) {
      document.title = `${current.item.title} · Vihaan Bussa`
      window.scrollTo(0, 0)
      return
    }

    document.title = "Vihaan Bussa"
    const anchor = hash.slice(1)
    if (anchor) document.getElementById(anchor)?.scrollIntoView()
  }, [hash])

  return (
    <div className="mx-auto max-w-2xl px-6 pt-10 pb-16 sm:pt-14 sm:pb-24">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-10 focus:bg-background focus:px-3 focus:py-2 focus:underline"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        {route ? (
          <DetailPage item={route.item} section={route.section} />
        ) : (
          <IndexPage />
        )}
      </main>
      <SiteFooter />
    </div>
  )
}

function SiteHeader() {
  return (
    <header className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 text-sm">
      <a href="#" className="font-medium">
        Vihaan Bussa
      </a>
      <nav
        aria-label="Main navigation"
        className="flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground"
      >
        {navItems.map(([href, label]) => (
          <a key={href} href={`#${href}`} className="hover:text-foreground">
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="mt-24 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
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
        Computer Science freshman at UC Berkeley
      </span>
    </footer>
  )
}

function IndexPage() {
  return (
    <div className="mt-20 space-y-20 sm:mt-28 sm:space-y-24">
      <section id="home" className="space-y-6">
        <img
          src={assetUrl("/headshot.png")}
          alt="Vihaan Bussa"
          width={72}
          height={72}
          className="size-18 rounded-md object-cover"
        />
        <div>
          <h1 className="font-medium">Vihaan Bussa</h1>
          <p className="text-muted-foreground">
            Student founder and software builder
          </p>
        </div>
        <p className="text-xl leading-8 font-medium tracking-tight text-balance">
          Building practical software across finance, healthcare, and applied
          AI.
        </p>
        <p className="text-muted-foreground">
          I&apos;m Vihaan Bussa, a freshman studying Computer Science at UC
          Berkeley, building products, research, and community programs with
          measurable outcomes, from InvestEDU&apos;s financial education
          platform to Project CARE&apos;s dialysis support tools.
        </p>
        <p className="flex flex-wrap gap-x-5 text-sm">
          <a href="#projects" className="underline">
            View work
          </a>
          <a href={`mailto:${email}`} className="underline">
            Contact
          </a>
        </p>
      </section>

      <Section
        id="awards"
        title="Selected awards"
        description="Major awards across entrepreneurship, DECA, robotics, hardware engineering, TSA, and academics."
      >
        <ul className="space-y-6">
          {awardSpotlights.map((award) => (
            <li
              key={award.title}
              className="grid gap-x-6 gap-y-1 sm:grid-cols-[6.5rem_1fr]"
            >
              <span className="text-sm text-muted-foreground tabular-nums">
                {award.year}
              </span>
              <div>
                <p className="font-medium">{award.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {award.context}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="about" title="About">
        <div className="space-y-4 text-muted-foreground">
          <p>
            I&apos;m a UC Berkeley Computer Science freshman who likes turning
            technical curiosity into useful work. My programming journey began
            at age 13 with Python and has grown into web development, machine
            learning, product design, and applied research.
          </p>
          <p>
            I was accepted to Y Combinator Startup School 2026, which brings
            together ambitious technical builders to learn from YC partners,
            meet peers, and think more clearly about building products people
            want.
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="font-medium tabular-nums">{metric.value}</dt>
              <dd className="mt-1 text-sm leading-5 text-muted-foreground">
                {metric.label}
              </dd>
            </div>
          ))}
        </dl>

        <dl className="mt-10 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-[6.5rem_1fr]">
          {aboutFacts.map((fact) => (
            <Fragment key={fact.label}>
              <dt className="text-muted-foreground">{fact.label}</dt>
              <dd className="leading-6">{fact.value}</dd>
            </Fragment>
          ))}
        </dl>

        <div className="mt-8 flex items-center gap-6">
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
      </Section>

      <Section id="focus" title="Focus">
        <ul className="space-y-6">
          {currentFocus.map((item) => (
            <li key={item.title}>
              <p className="font-medium">{item.title}</p>
              <p className="mt-1 text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {workSections.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          title={section.label}
          description={section.description}
        >
          <ul className="space-y-8">
            {section.items.map((item) => (
              <li key={item.id}>
                <a href={`#/${item.id}`} className="group block">
                  <p className="font-medium group-hover:underline">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {item.kicker}
                  </p>
                  <p className="mt-2 text-muted-foreground">
                    {item.description}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      ))}

      <Section
        id="stack"
        title="Stack"
        description="Tools used across product, AI, research, and data work."
      >
        <p className="text-muted-foreground">{technicalSkills.join(", ")}</p>
      </Section>

      <Section id="contact" title="Contact">
        <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[6.5rem_1fr]">
          {contactLinks.map((link) => (
            <Fragment key={link.label}>
              <dt className="text-sm leading-6 text-muted-foreground">
                {link.label}
              </dt>
              <dd>
                <ExternalLink href={link.href}>{link.value}</ExternalLink>
              </dd>
            </Fragment>
          ))}
          <dt className="text-sm leading-6 text-muted-foreground">Location</dt>
          <dd>San Francisco Bay Area</dd>
          <dt className="text-sm leading-6 text-muted-foreground">School</dt>
          <dd>UC Berkeley, Computer Science</dd>
        </dl>
      </Section>
    </div>
  )
}

function DetailPage({
  item,
  section,
}: {
  item: DetailItem
  section: WorkSection
}) {
  const insight = cardInsights[item.id]
  const tags = item.tags ?? item.skills
  const photos = item.photos ?? []
  const logo = photos.find((photo) => photo.url.startsWith("/logos/"))
  const gallery = photos.filter((photo) => photo !== logo)
  const meta = [item.kicker, item.duration].filter(Boolean).join(" · ")

  return (
    <div className="mt-16 sm:mt-20">
      <a
        href={`#${section.id}`}
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← {section.label}
      </a>

      <article className="mt-10 space-y-12">
        <header className="space-y-5">
          {logo && (
            <img
              src={assetUrl(logo.url)}
              alt={logo.caption}
              className={cn(
                "h-9 w-auto max-w-40 rounded-sm object-contain",
                logoBackdrop[item.id]
              )}
            />
          )}
          <div>
            <h1 className="text-xl font-medium tracking-tight">{item.title}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{meta}</p>
          </div>
          <p className="leading-7">{item.overview ?? item.description}</p>
          {item.links && item.links.length > 0 && (
            <p className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
              {item.links.map((link) => (
                <ExternalLink key={link.label} href={link.url}>
                  {link.label}
                </ExternalLink>
              ))}
            </p>
          )}
        </header>

        {insight && (
          <div className="space-y-3 text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">
                {insight.role}.
              </span>{" "}
              {insight.impact}
            </p>
            <p>{insight.build}</p>
            <p>{insight.direction}</p>
            <p className="text-sm">{insight.metrics.join(" · ")}</p>
          </div>
        )}

        {gallery.length > 0 && <Gallery photos={gallery} />}

        {item.details && (
          <Block title="Details">
            <p className="whitespace-pre-line">
              <EmphasizedText text={item.details} />
            </p>
          </Block>
        )}
        {item.impactNarrative && (
          <Block title="Outcome">
            <p>{item.impactNarrative}</p>
          </Block>
        )}
        <ListBlock title="Responsibilities" items={item.responsibilities} />
        <ListBlock title="Achievements" items={item.achievements} />
        <ListBlock title="Key metrics" items={item.keyMetrics} />
        <ListBlock
          title="Challenges and solutions"
          items={item.challenges?.map(
            (challenge) => `${challenge.problem}: ${challenge.solution}`
          )}
        />
        <ListBlock title="Budget" items={item.budget} />
        <ListBlock title="Compliance" items={item.compliance} />
        <ListBlock title="Future work" items={item.future} />

        {tags && tags.length > 0 && (
          <p className="text-sm text-muted-foreground">{tags.join(" · ")}</p>
        )}
      </article>

      <p className="mt-16">
        <a
          href={`#${section.id}`}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          ← Back to {section.label.toLowerCase()}
        </a>
      </p>
    </div>
  )
}

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-10">
      <h2 className="font-medium">{title}</h2>
      {description && (
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      )}
      <div className="mt-6">{children}</div>
    </section>
  )
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-sm font-medium">{title}</h2>
      <div className="mt-2 leading-7 text-muted-foreground">{children}</div>
    </section>
  )
}

function ListBlock({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null
  return (
    <Block title={title}>
      <ul className="list-disc space-y-1 pl-5 marker:text-muted-foreground/60">
        {items.map((item) => (
          <li key={item}>
            <EmphasizedText text={item} />
          </li>
        ))}
      </ul>
    </Block>
  )
}

function Gallery({ photos }: { photos: GalleryImage[] }) {
  return (
    <div className={cn("grid gap-6", photos.length > 1 && "sm:grid-cols-2")}>
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
          <figcaption className="mt-2 text-xs leading-5 text-muted-foreground">
            {photo.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

function ExternalLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  const external = /^https?:/.test(href)
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="underline decoration-muted-foreground/40 underline-offset-4 hover:decoration-foreground"
    >
      {children}
      {external && <span aria-hidden="true"> ↗</span>}
    </a>
  )
}

// Bolds the "Label:" prefixes the content uses to structure long paragraphs.
const labelPattern = /([A-Z][A-Za-z &/.-]{1,36}:)/g
const isLabel = /^[A-Z][A-Za-z &/.-]{1,36}:$/

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
