export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f76aed3c22cce930fd8d887',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-cxb7bb7i',
                  apiId: 'f1129260-b89a-4d8a-8c8b-670711097cf9'
                },
                {
                  buildHookId: '5f76aed3ddbcd37aaece57fd',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8zv8d4br',
                  apiId: '15feceb9-d26e-4f16-92b5-b0de912551ef'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jlixerkun/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8zv8d4br.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
