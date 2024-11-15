// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Modern Money Studio',
  tagline: 'Simple Agent-Based Teaching Models',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://modern-money-studio.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'danodriscoll', // Usually your GitHub org/user name.
  projectName: 'danodriscoll', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarCollapsed: false,
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
        },
        blog: false, // Disable the blog plugin
        // blog: {
        //   showReadingTime: false,
        //   blogSidebarCount: 0,
        //   postsPerPage: 5
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-09ELXCMLS6',
          anonymizeIP: true,
        },        
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },      
      // Replace with your project's social card
      image: 'img/development_icon.png',
      navbar: {
        title: 'Modern Money Studio',
        logo: {
          alt: 'ModernMoney Logo',
          src: 'img/development_icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'modelSidebar',
            position: 'left',
            label: 'Models',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {to: '/blog/tags', label: 'Tags', position: 'left'},
          {to: '/gilt-edged-mini', label: 'Gilt Edged Mini', position: 'right'},
          {
            href: 'https://www.danielodriscoll.me.uk/',
            label: 'Personal Site',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },      
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} ModernMoney Studio.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
