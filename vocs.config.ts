import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Charlotte Food Not Bombs',
  sidebar: [
    {
      text: 'Home Page',
      link: '/',
    },
    {
      text: 'Other FNB Chapters',
      link: '/other-fnb-chapters',
    },
    {
      text: 'How To Guides',
      collapsed: false,
      items: [
        {
          text: 'How To Set Up An Open Collective',
          link: '/how-to-guides/how-to-set-up-an-open-collective',
        },
        {
          text: 'How To Make A Site Like This',
          link: '/how-to-guides/how-to-make-a-site-like-this',
        }
      ]
    },
  ],
})
