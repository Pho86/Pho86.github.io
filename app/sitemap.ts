import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.BASE_URL || "https://pho86.github.io/";
    return [
        {
            url: baseUrl,
            priority: 1,
        }
    ];
}
