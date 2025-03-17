import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Modal } from '../components/components'

function RuberList() {
  const [showModal, setShowModal] = useState(false)
  const rubers = useSelector(state => state.rubers)

  useEffect(() => {
    document.title = 'HackList'
  }, [])

  return (
    <>
      <ul className="space-y-3">
        {rubers.length > 0 &&
          rubers.map(ruber => (
            <li
              className="rounded-lg border bg-gray-100 p-4 hover:border-red-800 hover:shadow-inner"
              key={ruber.id}
            >
              <Link to={`/hackacademy-u3-ej3v2/rubro/${ruber.id}`} key={ruber.id}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="mr-2 text-lg font-semibold text-gray-800">{ruber.name}</span>
                    <span className="font-semibold text-gray-800">
                      ({ruber.complet}/{ruber.total})
                    </span>
                  </div>
                  <span className="text-sm italic text-gray-600">{ruber.description}</span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  creado el: <span className="font-semibold italic">{ruber.date}</span>
                </div>
              </Link>
            </li>
          ))}
      </ul>
      <div>
        <button
          className="mt-4 rounded-lg border-2 border-white bg-blue-800 px-4 py-1 font-semibold text-white hover:bg-blue-400"
          onClick={() => setShowModal(true)}
        >
          Agregar
        </button>
      </div>

      {showModal && <Modal setShowModal={setShowModal} />}
    </>
  )
}

export default RuberList
