import './globals.css'
import Providers from "@/app/components/providers";
export const metadata = {
  title: 'Wabar',
  description: 'Wabar - new way to share you`r experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}
