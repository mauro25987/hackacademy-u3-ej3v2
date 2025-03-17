import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/components'
import { Error, Ruber, RuberList } from './pages/pages'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/hackacademy-u3-ej3v2/',
      element: <Layout />,
      children: [
        { index: true, element: <RuberList /> },
        { path: '/hackacademy-u3-ej3v2/rubro/:id?', element: <Ruber /> },
        { path: '*', element: <Error /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
