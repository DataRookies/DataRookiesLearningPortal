module.exports = {
  title: 'Learning Portal',
  tagline: 'Links to tutorials, classes, and various resources to help build your data skills!',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'DataRookies',
  projectName: 'DataRookiesLearningPortal',
  themeConfig: {
    navbar: {
      title: 'DataRookies',
      logo: {
        alt: 'DataRookies Logo',
        src: 'img/DR-profpic.png',
      },
      links: [
        {to: 'docs/overview', label: 'Learning Portal', position: 'left'},
        {
          href: 'https://github.com/DataRookies/DataRookiesLearningPortal',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/DataRookies/DataRookiesLearningPortal',
            },
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/datarookies/shared_invite/enQtNTE0NzE5NjY0Mjc0LWMwMTA4ODAxMjU2ZmI0NjdjNmExYTdjZGJlMTQ2NDcxZDhjNzk0MThjNDUzY2VhODk3MmM4NTIyMmRmOGYwZjI',
            },
            {
              label: 'Facebook',
              href: 'https://fb.me/datarookies',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DataRookies. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/DataRookies/DataRookiesLearningPortal/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
