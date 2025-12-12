
import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'ZeroSSL Documentation',
    description: 'API and ACME documentation',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Getting Started', link: '/getting-started' },
            { text: 'API', link: '/api/' },
            { text: 'ACME', link: '/acme/' }
        ],
        sidebar: {
            '/api/': [
                { text: 'API Docs', items: [
                        { text: 'Overview', link: '/api/overview' },
                        { text: 'Create Certificate', link: '/api/create-certificate' },
                        { text: 'Download Certificate', link: '/api/download-certificate' },
                        { text: 'Error Codes', link: '/api/error-codes' },
                        { text: 'Generate EAB Credentials', link: '/api/generate-eab-credentials' },
                        { text: 'Get Certificate', link: '/api/get-certificate' },
                        { text: 'List Certificates', link: '/api/list-certificates' },
                        { text: 'Resend Verification', link: '/api/resend-verification' },
                        { text: 'Revoke Certificate', link: '/api/revoke-certificate' },
                        { text: 'Validate CSR', link: '/api/validate-csr' },
                        { text: 'Verification Status', link: '/api/verification-status' },
                        { text: 'Verify Domains', link: '/api/verify-domains' },
                    ] }
            ],
            '/acme/': [
                { text: 'ACME Docs', items: [
                        { text: 'Overview', link: '/acme/overview' },
                        { text: 'Getting Started', link: '/acme/getting-started' },
                    ] }
            ],
            '/': [
                { text: 'Guides', items: [
                        { text: 'Getting Started', link: '/getting-started' },
                        { text: 'API', link: '/api/' },
                        { text: 'ACME', link: '/acme/' }
                    ] }
            ]
        }
    }
})
