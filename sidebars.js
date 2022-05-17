module.exports = {
  Intro: {
    'My Lab': ['index'],
  },
  Develop: [
    'develop/README',
    {
      type: 'category',
      label: 'Project',
      collapsed: false,
      items: [
        'develop/project/overview',
        {
          type: 'category',
          label: 'NestJs',
          collapsed: true,
          items: [
            'develop/project/nestjs/doc'
          ],
        },
        {
          type: 'category',
          label: 'Audio',
          collapsed: false,
          items: [
            'develop/project/audio/mp3'
          ],
        },
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
