import React from 'react'
import {fetchCategories} from '@/actions/_category-actions'

const DdlCategories = async () => {

    const categories = await fetchCategories();

  return (
    <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="parent_category" className="mb-2 block text-sm font-medium">
            Category:
          </label>

            <select
              name="categoryid"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 col-span-3"
              aria-describedby="parent-category-error"
            >
              <option value=""></option>
              {categories.map((c) => (
                <option key={c._id.toString()} value={c._id.toString()}>
                  {c.category_name}
                </option>
              ))}
            </select>
        </div>
  )
}

export default DdlCategories