import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
        category: z.string().optional(),
        draft: z.boolean().default(false),
        author: z.string().default('Kerry from Dream Digital'),
        seoTitle: z.string().optional(),
        seoDescription: z.string().optional()
      })
    })
  }
})