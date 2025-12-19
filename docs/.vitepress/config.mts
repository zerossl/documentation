
// .vitepress/config.mts
import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'ZeroSSL',
    description: 'Complete API and ACME documentation for SSL certificate management',

    // Important if you're deploying under /documentation/
    base: process.env.NODE_ENV === 'production'
        ? '/documentation/'
        : '/',

    head: [
        ['link', { rel: 'icon', href: '/zerossl_logo.svg' }], // see section 2
        ['meta', { name: 'theme-color', content: '#4169E1' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: 'ZeroSSL Documentation' }],
        ['meta', { property: 'og:description', content: 'Complete API and ACME documentation' }]
    ],

    themeConfig: {
        // Logo in top-left navbar
        logo: '/zerossl_logo.svg',
        siteTitle: '',

        nav: [
            { text: 'Home', link: '/' },
            { text: 'REST API', link: '/api/' },
            { text: 'ACME', link: '/acme/' },
            { text: 'ZeroSSL.com', link: 'https://zerossl.com', target: '_blank' },
            { text: 'Help Center', link: 'https://support.zerossl.com', target: '_blank' }
        ],

        sidebar: {
            '/api/': [
                {
                    text: 'REST API',
                    items: [{ text: 'Overview', link: '/api/overview' }]
                },
                {
                    text: 'Certificate Management',
                    items: [
                        { text: 'Create Certificate', link: '/api/create-certificate' },
                        { text: 'Get Certificate', link: '/api/get-certificate' },
                        { text: 'List Certificates', link: '/api/list-certificates' },
                        { text: 'Download Certificate (ZIP)', link: '/api/download-certificate' },
                        { text: 'Download Certificate (inline)', link: '/api/download-certificate-inline' },
                        { text: 'Cancel Certificate', link: '/api/cancel-certificate' },
                        { text: 'Revoke Certificate', link: '/api/revoke-certificate' }
                    ]
                },
                {
                    text: 'Domain Verification',
                    items: [
                        { text: 'Verify Domains', link: '/api/verify-domains' },
                        { text: 'Verification Status', link: '/api/verification-status' },
                        { text: 'Resend Verification', link: '/api/resend-verification' }
                    ]
                },
                {
                    text: 'Utilities',
                    items: [
                        { text: 'Validate CSR', link: '/api/validate-csr' },
                        { text: 'Generate EAB Credentials', link: '/api/generate-eab-credentials' },
                        { text: 'Error Codes', link: '/api/error-codes' }
                    ]
                }
            ],
            '/acme/': [
                {
                    text: 'ACME',
                    items: [
                        { text: 'Overview', link: '/acme/' },
                        { text: 'Getting Started', link: '/acme/getting-started' },
                        { text: 'EAB Credentials', link: '/acme/generate-eab-credentials' },
                        { text: 'Error Codes', link: '/acme/error-codes' }
                    ]
                }
            ]
        },

        socialLinks: [{ icon: 'github', link: 'https://github.com/zerossl/documentation' }],

        footer: {
            message: 'Part of Sectigo',
            copyright: 'Copyright © 2025 ZeroSSL'
        },

        editLink: {
            pattern: 'https://github.com/zerossl/documentation/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },

        // Search configuration
        search: {
            provider: 'local',
            options: {
                placeholder: 'Search Documentation...',
                translations: {
                    button: {
                        buttonText: 'Search',
                        buttonAriaLabel: 'Search Documentation'
                    },
                    modal: {
                        displayDetails: 'Display detailed list',
                        resetButtonTitle: 'Reset search',
                        backButtonTitle: 'Close search',
                        noResultsText: 'No results for',
                        footer: {
                            selectText: 'to select',
                            selectKeyAriaLabel: 'enter',
                            navigateText: 'to navigate',
                            navigateUpKeyAriaLabel: 'up arrow',
                            navigateDownKeyAriaLabel: 'down arrow',
                            closeText: 'to close',
                            closeKeyAriaLabel: 'escape'
                        }
                    }
                }
            }
        },

        outline: {
            level: [2, 3],
            label: 'On this page'
        }
    }
})
