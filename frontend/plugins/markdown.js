import { defineNuxtPlugin } from '#app'

import MarkdownIt from 'markdown-it'

export default defineNuxtPlugin(() => {
  const markdown = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true
  })
  return {
    provide: {
      markdown
    }
  }
})
