import type { MetadataRoute } from "next";
import { insights } from "@/data/insights";

// VERIFY BEFORE PUBLICATION: Update baseUrl with the final domain
const baseUrl = "https://www.raymond-cheung.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: baseUrl, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/expertise`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/advisory`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/training-speaking`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/insights`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/privacy`, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const insightRoutes = insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...insightRoutes];
}
