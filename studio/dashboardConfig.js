export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '62ae2b9eade873390e79dda0',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-22-studio',
                  apiId: '0bd20d8c-0d2d-4ea3-a375-0b6e8c239ff7'
                },
                {
                  buildHookId: '62ae2b9ed9b48a36ffd43518',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-22',
                  apiId: 'd2db06d7-3bb8-4e39-b5d8-f4118e44ddf9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andybywire/sanity-eleventy-22',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-22.netlify.app', category: 'apps'}
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
