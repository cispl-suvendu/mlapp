import './globals.css'
import { RootContextProvider } from '@/context/RootContext'


export const metadata = {
  title: 'Ml App',
  description: 'services at your home',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RootContextProvider>
          {children}
        </RootContextProvider>
      </body>
    </html>
  )
}
