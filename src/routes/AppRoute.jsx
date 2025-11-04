import { Routes, Route } from "react-router-dom"
import Songs from "@pages/Songs"
import TestingPage from "@pages/testing"
import NotFound from "@pages/NotFound"
const AppRoute = () => {
  return (
    <Routes>
      <Route path='/songs' element={<Songs />} />
      <Route path='/testing' element={<TestingPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoute
