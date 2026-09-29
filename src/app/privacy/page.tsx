import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../components/site-shell";
import { CookieSettingsButton } from "../components/cookie-consent";
import { contactInfo } from "../site-data";

export const metadata: Metadata = {
  title: "Privacy Policy | Offshore Molds",
  description:
    "How Offshore Molds collects, uses, and protects information when you visit offshoremolds.com or contact us, including cookies and your choices.",
};

const lastUpdated = "September 29, 2026";

function Section({ title, children }: Readonly<{ title: string; children: React.ReactNode }>) {
  return (
    <section className="border-t border-[#e1e5e7] pt-8">
      <h2 className="text-xl font-black uppercase tracking-[0.04em] text-[#222222] sm:text-2xl">{title}</h2>
      <div className="mt-4 grid gap-4 text-base leading-7 text-[#3f3f46]">{children}</div>
    </section>
  );
}

function List({ items }: Readonly<{ items: string[] }>) {
  return (
    <ul className="grid gap-2 pl-5 [list-style:square] marker:text-[#BD1816]">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#eef1f2] text-[#222222]">
      <SiteHeader />

      <section className="bg-[#061525] px-4 pt-32 pb-14 text-white sm:px-6 sm:pt-36 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="border-l-4 border-[#BD1816] pl-4 text-sm font-extrabold uppercase tracking-[0.18em]">
            Offshore Molds, Inc.
          </p>
          <h1 className="mt-6 text-4xl font-black uppercase leading-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
            Last updated {lastUpdated}
          </p>
        </div>
      </section>

      <div className="px-4 py-14 sm:px-6 lg:px-8">
        <article className="mx-auto grid max-w-4xl gap-10 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-lg leading-8 text-[#3f3f46]">
            Offshore Molds, Inc. (&ldquo;OMI,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) operates www.offshoremolds.com.
            This policy explains what information we collect when you visit the site or contact us, how we use it, and
            the choices you have.
          </p>

          <Section title="Information you give us">
            <p>
              When you email us, call us, or send a request for quote, we receive your name, contact details, company,
              and any project information and files you choose to share. We use it to respond, prepare quotes, and
              manage the tooling programs that follow.
            </p>
          </Section>

          <Section title="Information collected automatically">
            <p>When you browse the site, we and our service providers automatically collect:</p>
            <List
              items={[
                "the pages you view, the site that referred you, and how long you spend on the site;",
                "your IP address and your browser and device type;",
                "a random identifier kept in your browser for the length of your visit, so the pages you view in one visit can be grouped together.",
              ]}
            />
          </Section>

          <Section title="Business visitor analytics">
            <p>
              We use your IP address to identify the organization whose network you are browsing from, such as your
              employer, and combine it with business information about that organization (for example its industry,
              size, and location) from third-party data providers. This helps us understand which companies are
              interested in our services so we can follow up with them.
            </p>
            <p>
              Visits are recorded at the company level. We do not try to identify which individual visited. We may
              reach out to relevant people at interested companies using business contact information from these
              providers. Visits from home internet providers and mobile networks are not matched to a company.
            </p>
          </Section>

          <Section title="Cookies and similar technologies">
            <p>
              We use cookies and similar technologies, such as your browser&rsquo;s local and session storage, to
              remember your cookie choice, to group the pages you view during a visit, and to understand how the site is
              used. We also use Vercel Web Analytics and Speed Insights, which measure page views and site performance
              in aggregate without using cookies.
            </p>
          </Section>

          <Section title="Your choices">
            <List
              items={[
                "Use Cookie Settings at the bottom of any page to accept or decline visitor analytics. If you decline, we stop collecting visitor analytics in your browser.",
                "We honor Global Privacy Control and Do Not Track. When your browser sends either signal, visitor analytics do not run.",
                "You can block or clear cookies and site storage in your browser settings.",
              ]}
            />
            <div>
              <CookieSettingsButton className="inline-flex min-h-11 cursor-pointer items-center border border-[#004ff9] px-5 text-sm font-extrabold uppercase tracking-[0.12em] text-[#004ff9] transition hover:bg-[#004ff9] hover:text-white" />
            </div>
          </Section>

          <Section title="How we use information">
            <List
              items={[
                "To respond to inquiries and requests for quote, and to provide our services.",
                "To understand which organizations are interested in our services and follow up with them.",
                "To operate, secure, and improve the site.",
                "To comply with legal obligations.",
              ]}
            />
          </Section>

          <Section title="How we share information">
            <p>
              We share information with service providers that host the site and our systems, supply IP-to-organization
              and business data, and help us manage customer relationships. They may use it only to provide services to
              us. We may also disclose information when required by law, to protect our rights, or as part of a merger
              or sale of our business. We do not sell your personal information.
            </p>
          </Section>

          <Section title="Retention and security">
            <p>
              We keep information only as long as we need it for the purposes above or as required by law, then delete
              it or keep it in a form that no longer identifies you. We use reasonable safeguards to protect it, but no
              method of transmission or storage is completely secure.
            </p>
          </Section>

          <Section title="International visitors">
            <p>
              OMI is based in the United States and supports customers from offices in the U.S. and China. Information
              we collect is processed in the United States, and project information you send for quoting or tooling may
              be handled by our team in China.
            </p>
          </Section>

          <Section title="Children">
            <p>
              This site is intended for businesses. It is not directed to children, and we do not knowingly collect
              information from children.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              Depending on where you live, you may have the right to ask for access to, correction of, or deletion of
              your personal information. To make a request, email{" "}
              <a href={`mailto:${contactInfo.generalEmail}`} className="font-semibold text-[#004ff9] underline underline-offset-2">
                {contactInfo.generalEmail}
              </a>
              .
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy from time to time. The date at the top shows when it last changed.
            </p>
          </Section>

          <Section title="Contact us">
            <address className="not-italic">
              Offshore Molds, Inc.
              <br />
              {contactInfo.usOffice[0]}
              <br />
              {contactInfo.usOffice[1]}
              <br />
              <a href={`mailto:${contactInfo.generalEmail}`} className="font-semibold text-[#004ff9] underline underline-offset-2">
                {contactInfo.generalEmail}
              </a>
              <br />
              <a href={contactInfo.phoneHref} className="font-semibold text-[#004ff9] underline underline-offset-2">
                {contactInfo.phone}
              </a>
            </address>
          </Section>
        </article>
      </div>

      <SiteFooter />
    </main>
  );
}
