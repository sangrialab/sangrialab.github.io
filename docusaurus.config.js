module.exports = {
  title: 'Journey',
  tagline: '物有所不足，智有所不明',
  url: 'https://sangrialab.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'sangrialab', // Usually your GitHub org/user name.
  projectName: 'sangrialab.github.io', // Usually your repo name.
  customFields: {
    deploymentBranch: 'master',
  },
  themeConfig: {
    navbar: {
      title: 'My Lab',
      logo: {
        alt: "sangria's Lab",
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'about',
          activeBasePath: 'about',
          label: 'About',
          position: 'left',
        },
        { to: 'docs/develop', label: 'Develop', position: 'left', activeBasePath: 'docs/develop' },
        { to: 'docs/design', label: 'Design', position: 'left', activeBasePath: 'docs/design' },
        { to: 'blog', label: 'Blog', position: 'left' },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: 'develop',
              to: 'docs/develop',
            },
            {
              label: 'design',
              to: 'docs/design',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: '博客',
              href: 'https://sangrialab.github.io/blog',
            },
            {
              label: 'Github',
              href: 'https://github.com/sangrialab',
            }
          ],
        },
        {
          title: '资源',
          items: [
            {
              label: '国内镜像站点 🇨🇳',
              to: 'https://sangrialab.gitee.io',
            },
            {
              label: '海外站点 🌏',
              href: 'https://sangrialab.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sangria's Lab. Built with Docusaurus`,
    },
    // prism: {
    //   theme: require('prism-react-renderer/themes/github'),
    // }
  },
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:  'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
