import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
import {Fade} from "@mui/material";

const publicSans = Public_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ryhthm - Music Streaming',
  description: 'bla bla bla',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={publicSans.className}>
        <Fade in>
          <div>
            {children}
          </div>
        </Fade>
      </body>
    </html>
  )
}
