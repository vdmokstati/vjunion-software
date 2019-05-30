export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cf0154add34a5ae632a1a07',
                  title: 'Sanity Studio',
                  name: 'vjunion-software-studio',
                  apiId: '967d0896-3b65-4001-80a2-eaa8270c29b0'
                },
                {
                  buildHookId: '5cf0154a905957af23c9ee7d',
                  title: 'Blog Website',
                  name: 'vjunion-software',
                  apiId: '78bb27d0-e281-4ff5-87d7-6bafa806ddbf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vdmokstati/vjunion-software',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://vjunion-software.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
