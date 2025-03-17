import { useState } from 'react'
import { FaPencil, FaTrash } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { checkProduct, delProduct, editProduct } from '../reducer/rubersSlice'

function RuberProduct({ ruber, params }) {
  const dispatch = useDispatch()
  const [isEditingProduct, setEditingProduct] = useState(null)
  const [name, setName] = useState('')

  return (
    <ul className="space-y-2">
      {ruber.products.length > 0 ? (
        ruber.products.map(prod => (
          <li key={prod.id} className="rounded-lg bg-gray-100 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  className="mr-2 h-3 w-3 rounded-full bg-gray-200"
                  type="checkbox"
                  checked={prod.check}
                  onChange={e => {
                    dispatch(
                      checkProduct({
                        idRuber: params.id,
                        id: prod.id,
                        check: e.target.checked,
                      })
                    )
                  }}
                />
                {isEditingProduct === prod.id ? (
                  <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onBlur={() => {
                      name.trim() === ''
                        ? setName(prod.name)
                        : dispatch(editProduct({ idRuber: params.id, id: prod.id, name }))
                      setEditingProduct(null)
                    }}
                    className="mr-2 w-48 rounded-lg border-2 border-gray-300 px-4 duration-200 focus:border-indigo-500 focus:outline-none sm:mr-0 sm:w-64"
                    autoFocus
                  />
                ) : (
                  <h1
                    className={`text-md ${prod.check ? 'text-gray-500 line-through' : 'text-black no-underline'} `}
                  >
                    {prod.name}
                  </h1>
                )}
              </div>
              <div className="flex items-center">
                <FaPencil
                  className="mx-1 cursor-pointer text-violet-800 hover:text-violet-400"
                  onClick={() => {
                    setName(prod.name)
                    setEditingProduct(prod.id)
                  }}
                />
                <FaTrash
                  className="cursor-pointer text-red-800 hover:text-red-400"
                  onClick={() => {
                    dispatch(
                      delProduct({
                        idRuber: params.id,
                        id: prod.id,
                        check: prod.check,
                      })
                    )
                  }}
                />
              </div>
            </div>
          </li>
        ))
      ) : (
        <li className="rounded-lg bg-gray-100 p-4">
          <div className="text-center text-sm font-semibold text-gray-500">No hay productos</div>
        </li>
      )}
    </ul>
  )
}
export default RuberProduct
