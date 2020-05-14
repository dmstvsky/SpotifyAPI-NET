const versions = require('./versions.json');

module.exports = {
  title: 'SpotifyAPI-NET',
  tagline: '🔊 A Client for the Spotify Web API, written in C#/.NET',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'JohnnyCrazy', // Usually your GitHub org/user name.
  projectName: 'SpotifyAPI-NET', // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ['csharp'],
    },
    navbar: {
      title: 'SpotifyAPI-NET',
      logo: {
        alt: 'SpotifyAPI-NET',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
          items: [
            {
              label: 'Current/Next',
              to: 'docs/next/home',
            },
            {
              label: versions[0],
              to: 'docs/home',
            },
            ...versions.slice(1).map((version) => ({
              label: version,
              to: `docs/${version}/home`,
            }))
          ]
        },
        { to: 'news', label: 'News', position: 'left' },
        {
          href: 'https://www.nuget.org/packages/SpotifyAPI.Web/',
          label: 'NuGET',
          position: 'right',
        },
        {
          href: 'https://github.com/JohnnyCrazy/SpotifyAPI-NET',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Jonas Dellinger. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          path: 'news',
          routeBasePath: 'news',
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Jonas Dellinger.`,
          },
          // Please change this to your repo.
          editUrl:
            'https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};