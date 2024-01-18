import Image from 'next/image';
import { UpdateCategory, DeleteCategory } from '@/components/ui/categories/buttons';
import { fetchFilteredCategories } from '@/actions/_category-actions';
import { Fragment } from 'react';

export default async function CategoryTable({ query, currentPage }) {
  const category = await fetchFilteredCategories(query, currentPage);

  return (
    <Fragment>
      <div className="mt-2 flow-root border">
        <div className="inline-block min-w-full align-middle">
          <div className=" md:pt-0">
            <div className="md:hidden">
              {category &&
                category?.map((c) => (
                  <div
                    key={c._id.toString()}
                    className="mb-2 w-full rounded-md bg-white p-4"
                  >
                    <div className="flex items-center justify-between border-b pb-4">
                      <div>
                        <div className="mb-2 flex items-center">
                          <p>Name: {c.category_name}</p>
                        </div>
                          <p className="text-sm text-gray-500">Type Id: {c.parent_category}</p>
                          <p className="text-sm text-gray-500">Is Active?: {c.isActive ? 'Yes' : 'No'} </p>
                      </div>
                    </div>
                    <div className="flex w-full items-center justify-between pt-4">
                      <div className="flex justify-end gap-2">
                        <UpdateCategory id={c._id.toString()} />
                        <DeleteCategory id={c._id.toString()} />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <table className="hidden min-w-full rounded-md border border-gray-200 bg-gray-200 text-gray-900 md:table">
              <thead className="rounded-md text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-4 font-medium sm:pl-6">
                  Category Name: 
                  </th>
                  <th scope="col" className="px-4 py-4 font-medium sm:pl-6">
                  Parent Category
                  </th>
                  <th scope="col" className="px-3 py-4 font-medium">
                    isActive
                  </th>
                  <th scope="col" className="relative py-3 pl-6 pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {category &&
                  category?.map((c) => (
                    <tr
                      key={c._id.toString()}
                      className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                    >
                      <td className="whitespace-nowrap px-3 py-1 text-sm">
                      {c.category_name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-1 text-sm">
                      {c.parent_category_name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-1 text-sm">
                        {c.isActive ? 'Yes' : 'No'}
                      </td>
                      <td className="whitespace-nowrap py-1 pl-6 pr-3">
                        <div className="flex justify-end gap-3">
                          <UpdateCategory id={c._id.toString()} />
                          <DeleteCategory id={c._id.toString()} />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
