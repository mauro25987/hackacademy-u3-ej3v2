import { createBrowserRouter, RouterProvider } from 'react-router'
import { Layout } from './components/components'
import { Error, Ruber, RuberList } from './pages/pages'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/react-todo-js/',
      element: <Layout />,
      children: [
        { index: true, element: <RuberList /> },
        { path: '/react-todo-js/rubro/:id?', element: <Ruber /> },
        { path: '*', element: <Error /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
