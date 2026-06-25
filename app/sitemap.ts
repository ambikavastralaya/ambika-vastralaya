import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ambikavastralaya.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },

    {
      url: `${baseUrl}/collections/bridal`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/collections/work-odhani`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/collections/rajputi-poshak`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/collections/sarees`,
      lastModified: new Date(),
      priority: 0.9,
    },

    {
      url: `${baseUrl}/collections/fabric`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}