import type {Metadata} from 'next'
import {Geist, Geist_Mono} from 'next/font/google'
import AppProvider from '@/providers/AppProvider'
import '@/styles/globals.css'
import {NextIntlClientProvider} from 'next-intl'
import {getLocale, getMessages} from 'next-intl/server'
import {NuqsAdapter} from 'nuqs/adapters/next/app'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Tran Van Hoang - Mobile & Front-end Developer',
	description: 'Tran Van Hoang - Mobile & Front-end Developer',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const locale = await getLocale()
	const messages = await getMessages()

	return (
		<html lang={locale}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<NuqsAdapter>
					<AppProvider>
						<NextIntlClientProvider messages={messages}>
							{children}
						</NextIntlClientProvider>
					</AppProvider>
				</NuqsAdapter>
			</body>
		</html>
	)
}
