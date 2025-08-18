import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Loader } from '@/components/ui/loader'

const Home = lazy(() => import('@/pages/Home'))

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <Suspense fallback={<div className="container py-24"><Loader /></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}
