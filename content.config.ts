import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      type: 'page',
      source: 'docs/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        // Shorter label for the sidebar nav; falls back to `title` when
        // the full page title is too long to sit in the nav rail.
        navTitle: z.string().optional()
      })
    })
  }
})
