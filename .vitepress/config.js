export default {
    // Site metadata
    title: 'ZeroSSL Documentation',
    description: 'API and ACME Documentation for ZeroSSL',

    // GitHub Pages deployment (change to your repo name)
    base: '/documentation/',

    // Theme configuration
    themeConfig: {
        // Logo in navbar
        logo: '/logo.svg',

        // Top navigation
        nav: [
            { text: 'Home', link: '/' },
            { text: 'API', link: '/api/' },
            { text: 'ACME', link: '/acme/' },
            {
                text: 'ZeroSSL.com',
                link: 'https://zerossl.com',
                target: '_blank'
            }
        ],

        // Sidebar navigation
        sidebar: {
            // API Documentation Sidebar
            '/api/': [
                {
                    text: 'Getting Started',
                    collapsed: false,
                    items: [
                        { text: 'Introduction', link: '/api/' },
                        { text: 'Authentication', link: '/api/authentication' },
                        { text: 'Quick Start', link: '/api/quick-start' }
                    ]
                },
                {
                    text: 'Endpoints',
                    collapsed: false,
                    items: [
                        { text: 'Certificates', link: '/api/certificates' },
                        { text: 'Validation', link: '/api/validation' },
                        { text: 'Revocation', link: '/api/revocation' }
                    ]
                },
                {
                    text: 'Reference',
                    collapsed: false,
                    items: [
                        { text: 'Error Codes', link: '/api/error-codes' },
                        { text: 'Rate Limits', link: '/api/rate-limits' }
                    ]
                }
            ],

            // ACME Documentation Sidebar
            '/acme/': [
                {
                    text: 'ACME API',
                    collapsed: false,
                    items: [
                        { text: 'Overview', link: '/acme/' },
                        { text: 'Getting Started', link: '/acme/getting-started' },
                        { text: 'EAB Credentials', link: '/acme/eab-credentials' },
                        { text: 'Error Codes', link: '/acme/error-codes' }
                    ]
                }
            ]
        },

        // Social links in navbar
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/zerossl/documentation'
            }
        ],

        // Footer
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024 ZeroSSL'
        },

        // Edit link on each page
        editLink: {
            pattern: 'https://github.com/zerossl/documentation/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },

        // Search (local search is built-in)
        search: {
            provider: 'local'
        },

        // Table of contents on the right side
        outline: {
            level: [2, 3],
            label: 'On this page'
        }
    },

    // Additional head tags
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: 'ZeroSSL Documentation' }],
        ['meta', { property: 'og:description', content: 'Complete API and ACME documentation' }]
    ]
}