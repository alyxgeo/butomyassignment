import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import PageNotFound from "./Pages/PageNotFound"
import AppLayout from "./components/AppLayout"

import AboutUs from './Pages/AboutUS'
import MakeUp from './Pages/MakeUp'
import ShopAll from './Pages/ShopAll'
import HowTo from './Pages/HowTo'
import Cart from "./Pages/Cart"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import WishList from "./Pages/WishList"



const queryClient = new QueryClient({

  defauloptions: {
    queries: {
      staleTime: 60 * 1000
    }
  }
})



const App = () => {

  return (

    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <BrowserRouter>
        <Routes>

          <Route element={<AppLayout />}>

            <Route index element={<Navigate replace to='home' />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/makeup" element={<MakeUp />} />
            <Route path="/shop" element={<ShopAll />} />
            <Route path="/howto" element={<HowTo />} />

          </Route>
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>

    </QueryClientProvider>
  )
}

export default App