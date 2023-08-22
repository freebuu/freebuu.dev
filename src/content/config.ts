import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    badge: z.string().optional(),
    mediumLink: z.string().optional(),
});

const jobSchema = z.object({
    employer: z.string(),
    position: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.coerce.date().optional(),
});


export type BlogSchema = z.infer<typeof blogSchema>;
export type JobSchema = z.infer<typeof jobSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const jobCollection = defineCollection({ schema: jobSchema });

export const collections = {
    'blog': blogCollection,
    'job': jobCollection,
}