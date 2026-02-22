
import { notFound } from 'next/navigation';
import { ReactLenis } from 'lenis/react';
import Hero from '../common/Hero';
import Benefits from '../_components/Benefits';
import { servicesGhostwritingData } from '../constant';
import ServicesSection from '../_components/ServicesSection';

// ────────────────────────────────────────────────
//  All services (array — easy to extend)
const services = [
  {
    slug: 'ghostwriting',
    title: 'GhostWriting',
    servicesSectionData: servicesGhostwritingData[0],
    // Data: CustomEmpower[0],
    // timeLine: stepsDataCustomSoftware[0],
    sections: [
      { Component: Hero },
      { Component: Benefits },
      { Component: ServicesSection, props: servicesGhostwritingData[0] },
      //   { Component: Success },
      //   { Component: TimeLine, props: stepsDataCustomSoftware[0] },
      // { Component: Empower, props: CustomEmpower[0] },
      //   { Component: Blogs },
      //   { Component: Engage },
      //   { Component: Faq, props: { items: Faq_softwareeng_SoftwareDevelopment } },
      //   { Component: Cta },
    ],
  },
];

// Helper to find service by slug
function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}

// ────────────────────────────────────────────────
//  Static params
// ────────────────────────────────────────────────
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// ────────────────────────────────────────────────
//  Page component
// ────────────────────────────────────────────────
export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <ReactLenis root>
      <main className="min-h-screen bg-background antialiased pt-2">
        {service.sections.map(({ Component, props = {} }, index) => (
          <Component key={index} {...props} />
        ))}

        {/* Optional universal CTA at the bottom — same across all services */}
        {/* <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-muted/40 text-center">
          <div className="container mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Ready to get started with {service.title}?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground md:text-xl">
              Let’s talk about how Virtuosoft can help you achieve your goals.
            </p>
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground shadow-lg transition hover:bg-primary/90 hover:shadow-xl"
              >
                Talk to our team →
              </a>
            </div>
          </div>
        </section> */}
      </main>
    </ReactLenis>
  );
}

// ────────────────────────────────────────────────
//  Optional: dynamic metadata
// ────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Service Not Found | Virtuosoft' };
  }

  return {
    title: `${service.title} | DigitalAlchemy`,
    description:
      service.hero?.bottomDescription ||
      `Professional ${service.title} services by DigitalAlchemy - custom, scalable, and built for your success.`,
  };
}