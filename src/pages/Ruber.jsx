import { nanoid } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react'
import { FaCirclePlus, FaPencil, FaTrash } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { addProduct, delRuber, editRuber } from '../reducer/rubersSlice'
import { RuberProduct } from './../components/components'

function Ruber() {
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const ruber = useSelector(state => state.rubers.find(ruber => ruber.id === params.id))

  const [product, setProduct] = useState('')
  const [IsEditing, setIsEditing] = useState(false)
  const [nameRuber, setNameRuber] = useState(ruber.name)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(
      addProduct({
        idRuber: params.id,
        id: nanoid(),
        product,
      })
    )
    setProduct('')
  }

  useEffect(() => {
    document.title = 'Rubro'
  }, [])

  const isEditRuberIcon = IsEditing ? (
    <input
      type="text"
      value={nameRuber}
      onChange={e => setNameRuber(e.target.value)}
      onBlur={() => {
        setIsEditing(false)
        nameRuber.trim() === ''
          ? (ruber.name, setNameRuber(ruber.name))
          : dispatch(editRuber({ idRuber: ruber.id, name: nameRuber }))
      }}
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
            onClick={() => setIsEditing(true)}
          />
          <FaTrash
            className="cursor-pointer text-red-800 hover:text-red-400"
            onClick={() => {
              dispatch(delRuber({ id: params.id }))
              navigate('/')
            }}
          />
        </div>
      </div>
      <h3 className="mb-2 text-right text-xs italic">{ruber.description}</h3>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="relative">
          <button>
            <FaCirclePlus className="absolute right-2 top-1/2 -translate-y-1/2 transform text-blue-800 hover:text-blue-400" />
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

      <RuberProduct ruber={ruber} params={params} />

      <button className="mt-4 rounded-lg border-2 border-white bg-red-800 px-4 py-1 font-semibold text-white hover:bg-red-400">
        <Link to="/">Volver</Link>
      </button>
    </>
  )
}

export default Ruber
