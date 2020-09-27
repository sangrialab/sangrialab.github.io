module.exports = {
  Intro: {
    'My Lab': ['index'],
  },
  Develop: [
    'develop/README',
    {
      type: 'category',
      label: 'nodejs',
      collapsed: false,
      items: [
        // 'develop/nodejs/doc1'
      ],
    },
    {
      type: 'category',
      label: 'react',
      collapsed: false,
      items: [
        // 'develop/react/doc2'
      ],
    },
    {
      type: 'category',
      label: 'vue',
      collapsed: false,
      items: [
        // 'develop/vue/doc3'
      ],
    },
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
  ]
};
