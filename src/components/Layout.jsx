import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-md">
        <h2 className="fond-bold mb-6 text-center text-3xl text-gray-800 hover:text-orange-900">
          <Link to="/">HackList</Link>
        </h2>
        <Outlet />
      </div>
    </main>
  )
}

export default Layout
