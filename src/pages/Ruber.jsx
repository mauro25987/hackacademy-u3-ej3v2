import { nanoid } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'
import { FaCirclePlus, FaPencil, FaTrash } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router'
import { addProduct, delRuber, editRuber } from '../reducer/rubersSlice'
import { RuberProduct } from './../components/components'

function Ruber() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const ruber = useSelector(state => state.rubers.find(ruber => ruber.id === id))

  const [product, setProduct] = useState('')
  const [nameRuber, setNameRuber] = useState('')
  const [editinRuberId, setEditinRuberId] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(
      addProduct({
        idRuber: id,
        id: nanoid(),
        product,
      })
    )
    setProduct('')
  }

  const handleEditRuberName = () => {
    if (nameRuber.trim() === '') {
      setNameRuber(ruber.name)
    } else {
      dispatch(editRuber({ idRuber: id, name: nameRuber }))
    }
    setEditinRuberId(null)
    setNameRuber('')
  }

  useEffect(() => {
    document.title = 'Rubro'
  }, [])

  const isEditRuberIcon =
    editinRuberId === id ? (
      <input
        type="text"
        value={nameRuber}
        onChange={e => setNameRuber(e.target.value)}
        onBlur={handleEditRuberName}
        className="mr-2 w-48 rounded-lg border-2 border-gray-300 px-4 duration-200 focus:border-indigo-500 focus:outline-none sm:mr-0 sm:w-64"
        autoFocus
      />
    ) : (
      <h1 className="text-lg font-semibold text-gray-800">{ruber.name}</h1>
    )

  return (
    <>
      <h2 className="mb-8 text-center text-xl font-semibold text-gray-900">Lista de compras</h2>
      <div className="flex items-center justify-between">
        {isEditRuberIcon}
        <div className="flex items-center">
          <FaPencil
            className="mx-1 cursor-pointer text-violet-800 hover:text-violet-400"
            onClick={() => setEditinRuberId(id)}
          />
          <FaTrash
            className="cursor-pointer text-red-800 hover:text-red-400"
            onClick={() => {
              dispatch(delRuber({ id }))
              navigate('/react-todo-js/')
            }}
          />
        </div>
      </div>
      <h3 className="mb-2 text-right text-xs italic">{ruber.description}</h3>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="relative">
          <button className="absolute top-1/2 right-2 -translate-y-1/2 transform text-blue-800 hover:text-blue-400">
            <FaCirclePlus />
          </button>

          <input
            className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 duration-200 placeholder:text-center placeholder:text-sm placeholder:italic focus:border-indigo-500 focus:outline-none"
            id="product"
            name="product"
            value={product}
            type="text"
            placeholder="Agregar nuevo producto"
            required
            onChange={e => setProduct(e.target.value)}
          />
        </div>
      </form>

      <RuberProduct ruber={ruber} />

      <button className="mt-4 rounded-lg border-2 border-white bg-red-800 px-4 py-1 font-semibold text-white hover:bg-red-400">
        <Link to="/react-todo-js/">Volver</Link>
      </button>
    </>
  )
}

export default Ruber
