import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />} path="/">
        <Route element={<Home />} path="/" />
        <Route element={<History />} path="/history" />
      </Route>
    </Routes>
  )
}
