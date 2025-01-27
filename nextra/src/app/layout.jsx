/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import config from '../../docs-config.json'

export const metadata = {
  metadataBase: new URL('https://github.com'),
  project: {
    link: config.githubRepo,
  },
  title: {
    template: `%s - ${config.projectName}`,
  },
  description: config.projectDescription,
  applicationName: config.projectName
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>{config.projectName}</b>{' '}
          <span style={{ opacity: '60%' }}>{config.projectVersion}</span>
        </div>
      }
      // chatLink={config.discordLink}
      projectLink={config.githubRepo}
    />
  )

  const footer = (
    <div style={{ textAlign: 'center' }}>
    
    </div>
  )
  
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        {config.banner.show ? 
        <Layout
          banner= {<Banner storageKey={config.projectName}>
              {config.banner.content}
          </Banner>}
          navbar={navbar}
          footer={footer}
          editLink="Edit this page on GitHub"
          docsRepositoryBase={config.githubRepo}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
        : 
        <Layout
          navbar={navbar}
          footer={footer}
          editLink="Edit this page on GitHub"
          docsRepositoryBase={config.githubRepo}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      }
      </body>
    </html>
  )
}