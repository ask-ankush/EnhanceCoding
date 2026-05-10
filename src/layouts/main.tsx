import Footer from '../components/footer'
import Header from '../components/header/index'
import type { ReactNode } from 'react'

interface MainLayoutProps {
    children: ReactNode
    showFooterMain?: boolean
}

export default function MainLayout({ children, showFooterMain = true }: MainLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="grow pt-16">
                {children}
            </main>
            <Footer showFooterMain={showFooterMain} />
        </div>
    )
}
