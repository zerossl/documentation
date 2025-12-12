export default {
    title: 'ZeroSSL Documentation',
    description: 'API and ACME Documentation',
    base: '/your-repo-name/', // Important for GitHub Pages

    themeConfig: {
        logo: '/logo.png',

        nav: [
            { text: 'API', link: '/api/' },
            { text: 'ACME', link: '/acme/' },
            { text: 'GitHub', link: 'https://github.com/zerossl/documentation/' }
        ],

        sidebar: {
            '/api/': [
                {
                    text: 'Getting Started',
                    items: [
                        { text: 'Introduction', link: '/api/' },
                        { text: 'Authentication', link: '/api/authentication' },
                    ]
                },
                {
                    text: 'Reference',
                    items: [
                        { text: 'Endpoints', link: '/api/endpoints' },
                        { text: 'Error Codes', link: '/api/error-codes' },
                    ]
                }
            ],

            '/acme/': [
                {
                    text: 'ACME API',
                    items: [
                        { text: 'Overview', link: '/acme/' },
                        { text: 'Getting Started', link: '/acme/getting-started' },
                        { text: 'Error Codes', link: '/acme/error-codes' },
                    ]
                }
            ]
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/zerossl/documentation' }
        ],

        search: {
            provider: 'local'
        }
    }
}