import { nanoid } from '@reduxjs/toolkit'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addRuber } from '../reducer/rubersSlice'

function Modal({ setShowModal }) {
  const [ruber, setRuber] = useState({ name: '', description: '' })
  const dispatch = useDispatch()

  const setDateTime = () => {
    const date = new Date()
    const [year, month, day] = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    return `${year}-${month}-${day}`
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(
      addRuber({
        id: nanoid(),
        name: ruber.name,
        description: ruber.description,
        date: setDateTime(),
        total: 0,
        complet: 0,
      })
    )
    setRuber({ name: '', description: '' })
    setShowModal(false)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center gap-5 rounded bg-white pt-5 sm:p-5">
          <div className="mb-4 text-2xl font-semibold">Formulario de Rubro</div>
          <div className="self-end">
            <label htmlFor="name" className="m-3 font-semibold">
              Rubro:
            </label>
            <input
              className="mr-2 w-48 rounded-lg border-2 border-gray-300 px-4 duration-200 placeholder:text-center placeholder:text-sm placeholder:italic focus:border-indigo-500 focus:outline-none sm:mr-0 sm:w-64"
              id="name"
              name="name"
              value={ruber.name}
              type="text"
              placeholder="Nombre de Rubro"
              required
              onChange={e => setRuber({ ...ruber, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="self-end">
            <label htmlFor="description" className="m-3 font-semibold">
              Descripcion:
            </label>
            <input
              className="mr-2 w-48 rounded-lg border-2 border-gray-300 px-4 duration-200 placeholder:text-center placeholder:text-sm placeholder:italic focus:border-indigo-500 focus:outline-none sm:mr-0 sm:w-64"
              id="description"
              name="description"
              value={ruber.description}
              type="text"
              placeholder="Descripcion de Rubro"
              onChange={e => setRuber({ ...ruber, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="m-5 rounded-sm bg-blue-500 px-6 py-2 font-bold text-white hover:bg-blue-700">
              Agregar
            </button>
            <button
              className="m-5 rounded-sm bg-red-500 px-6 py-2 font-bold text-white hover:bg-red-700"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Modal
