import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/case-studies" }),
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    role: z.string(),
    timeframe: z.string(),
    order: z.number(),
    hook: z.string(),
    stack: z.array(z.string()),
    repoUrl: z.string().url().optional(),
    repoLabel: z.string().optional(),
    repoNote: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { caseStudies, blog };
