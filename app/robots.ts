import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // PREVIEW MODE: Block all crawlers until Raymond approves publication
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
    // VERIFY BEFORE PUBLICATION: Uncomment and update sitemap URL before going live
    // sitemap: "https://www.raymond-cheung.com/sitemap.xml",
  };
}
