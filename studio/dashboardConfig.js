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
                  buildHookId: '61a5402e59645e005dd198b9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-scc2uefj',
                  apiId: '50fa4b52-d993-44e4-9eec-0a151cda56c7'
                },
                {
                  buildHookId: '61a5402ed158c8005e4aedff',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-v6aas57v',
                  apiId: '20ae109c-3e76-49b2-a784-8e514b073a2b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alexrohleder/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-v6aas57v.netlify.app', category: 'apps'}
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
