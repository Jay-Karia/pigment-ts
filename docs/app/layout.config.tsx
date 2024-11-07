import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: '🎨 PigmentTS',
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: "Getting Started",
      url: "/getting-started"
    },
    {
      text: "Playground",
      url: "https://pigment-ts.vercel.app/",
    }
  ],
  githubUrl: 'https://github.com/Jay-Karia/pigment-ts',
};
