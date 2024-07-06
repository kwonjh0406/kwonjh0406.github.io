// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '개발새발',
  tagline: '공부한 내용을 찾아보기 쉽게 정리해둔 공간입니다.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kwonjh0406.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kwonjh0406', // Usually your GitHub org/user name.
  projectName: 'kwonjh0406.github.io', // Usually your repo name.

  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko-kr',
    locales: ['ko-kr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs : {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/kwonjh0406/kwonjh0406.github.io/tree/main/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/kwonjh0406/kwonjh0406.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'frameworks',
				path: 'technology/frameworks',
				routeBasePath: 'frameworks',
				sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/kwonjh0406/kwonjh0406.github.io/tree/main/',
			},
		],
    [
			'@docusaurus/plugin-content-docs',
			{
				id: 'languages',
				path: 'technology/languages',
				routeBasePath: 'languages',
				sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/kwonjh0406/kwonjh0406.github.io/tree/main/',
			},
		],
    [
			'@docusaurus/plugin-content-docs',
			{
				id: 'tools',
				path: 'technology/tools',
				routeBasePath: 'tools',
				sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/kwonjh0406/kwonjh0406.github.io/tree/main/',
			},
		],
    [
			'@docusaurus/plugin-content-docs',
			{
				id: 'algorithm',
				path: 'computer-science/algorithm',
				routeBasePath: 'algorithm',
				sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/kwonjh0406/kwonjh0406.github.io/tree/main/',
			},
		],
    [
			'@docusaurus/plugin-content-docs',
			{
				id: 'computer-architecture',
				path: 'computer-science/computer-architecture',
				routeBasePath: 'computer-architecture',
				sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/kwonjh0406/kwonjh0406.github.io/tree/main/',
			},
		],
    [
			'@docusaurus/plugin-content-docs',
			{
				id: 'database',
				path: 'computer-science/database',
				routeBasePath: 'database',
				sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/kwonjh0406/kwonjh0406.github.io/tree/main/',
			},
		],
    [
			'@docusaurus/plugin-content-docs',
			{
				id: 'datastructure',
				path: 'computer-science/datastructure',
				routeBasePath: 'datastructure',
				sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/kwonjh0406/kwonjh0406.github.io/tree/main/',
			},
		],
    [
			'@docusaurus/plugin-content-docs',
			{
				id: 'network',
				path: 'computer-science/network',
				routeBasePath: 'network',
				sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/kwonjh0406/kwonjh0406.github.io/tree/main/',
			},
		],
    [
			'@docusaurus/plugin-content-docs',
			{
				id: 'operating-system',
				path: 'computer-science/operating-system',
				routeBasePath: 'operating-system',
				sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/kwonjh0406/kwonjh0406.github.io/tree/main/',
			},
		],
	],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '개발새발',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: '기술 정리',
            type: 'dropdown',
            position: 'left',
            items: [
              {
                to: 'frameworks/intro',
                label: '프레임워크',
              },
              {
                to: 'languages/intro',
                label: '언어',
              },
              {
                to: 'tools/intro',
                label: '도구',
              },
            ],
          },
          {
            label: 'CS 정리',
            type: 'dropdown',
            position: 'left',
            items: [
              {
                to: 'algorithm/intro',
                label: '알고리즘',
              },
              {
                to: 'computer-architecture/intro',
                label: '컴퓨터구조',
              },
              {
                to: 'database/intro',
                label: '데이터베이스',
              },
              {
                to: 'datastructure/intro',
                label: '자료구조',
              },
              {
                to: 'network/intro',
                label: '네트워크',
              },
              {
                to: 'operating-system/intro',
                label: '운영체제',
              },
            ],
          },
          {to: '/blog', label: '블로그', position: 'left'},
          {
            href: 'https://github.com/kwonjh0406',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} 개발새발, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
