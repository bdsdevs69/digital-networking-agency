import type { MetadataRoute } from "next";
import { GUIDES } from "@/content/guides";
import { guideDates } from "@/content/guideDates";
import { SERVICES } from "@/content/services";
import { OUTLETS } from "@/content/outlets";
import { CASE_STUDIES } from "@/content/caseStudies";
import { REGIONS } from "@/content/regions";
import { VISA_PAGE, TOP_LISTS_PAGE } from "@/content/landings";
import { GLOSSARY } from "@/content/glossary";
import { COMPARISONS } from "@/content/comparisons";

const SITE = "https://www.digitalnetworkingagency.com";

// Stable, per-section content dates. Previously this used `new Date()`, which
// stamped every URL with the build time — so all URLs shared one timestamp that
// changed on every deploy. Google discounts that as a freshness signal. Bump the
// relevant constant when that section's content actually changes.
const UPDATED = {
  home: new Date("2026-08-12"),
  guides: new Date("2026-08-12"),
  outlets: new Date("2026-08-12"),
  services: new Date("2026-06-20"),
  cases: new Date("2026-07-10"),
  reviews: new Date("2026-08-11"),
  contact: new Date("2026-08-11"),
  hubs: new Date("2026-09-15"),
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = UPDATED.home;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE}/guides`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE}/pr-for`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE}/get-featured-in`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE}/contact`,
      lastModified: UPDATED.contact,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE}/case-studies`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE}/reviews`,
      lastModified: UPDATED.reviews,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE}/results`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE}/publications`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE}/compare`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE}/refunds`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const guideRoutes: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
    url: `${SITE}/guides/${guide.slug}`,
    lastModified: new Date(guideDates(guide.slug).modified),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE}/pr-for/${service.slug}`,
    lastModified: UPDATED.services,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const outletRoutes: MetadataRoute.Sitemap = OUTLETS.map((o) => ({
    url: `${SITE}/get-featured-in/${o.slug}`,
    lastModified: UPDATED.outlets,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const caseRoutes: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: `${SITE}/case-studies/${c.slug}`,
    lastModified: UPDATED.cases,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Country hubs and standalone landings only enter the sitemap once their
  // content exists, so an empty collection never publishes a 404 URL.
  const hubRoutes: MetadataRoute.Sitemap = [
    ...(REGIONS.length ? [`${SITE}/pr-in`, ...REGIONS.map((r) => `${SITE}/pr-in/${r.slug}`)] : []),
    ...(VISA_PAGE ? [`${SITE}/pr-for-eb1a-o1-visa`] : []),
    ...(TOP_LISTS_PAGE ? [`${SITE}/get-featured-in-top-lists`] : []),
    ...(GLOSSARY ? [`${SITE}/glossary`] : []),
    ...COMPARISONS.map((c) => `${SITE}/compare/${c.slug}`),
  ].map((url) => ({
    url,
    lastModified: UPDATED.hubs,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...hubRoutes, ...guideRoutes, ...serviceRoutes, ...outletRoutes, ...caseRoutes];
}
