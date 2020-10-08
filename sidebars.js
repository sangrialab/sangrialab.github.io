module.exports = {
  Intro: {
    'My Lab': ['index'],
  },
  Develop: [
    'develop/README',
    {
      type: 'category',
      label: 'project',
      collapsed: false,
      items: [
        'develop/project/docker'
      ],
    }
  ],
  Design: [
    'design/index',
    {
      type: 'category',
      label: '设计资源',
      collapsed: false,
      items: [
        'design/resources/material'
      ],
    },
    {
      type: 'category',
      label: '设计基础',
      collapsed: false,
      items: [
        'design/articles/layout'
      ],
    },
  ]
};
