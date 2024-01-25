"use client";

import { updateCategory } from "@/actions/_category-actions";
import { SaveCategoryBtn } from "@/components/ui/dashboard/categories/buttons";
import Link from "next/link";
import { toast } from "sonner";

export default function CategoryEditForm({category, parentcategory}) {

  const _updateCategory = async (formData) => {
    const result = await updateCategory(formData);
    if (result?.error) {
      toast.error(result.error);
    } 
  };

  return (

    <div className=" flex flex-col justify-center items-center border-2 border-gray-200 rounded-md ">
      <form action={_updateCategory} className="rounded-md p-10 w-full bg-gray-50 ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <input
              type="hidden"
              name="id"
              defaultValue={category._id.toString()}
             />
            <label
              className="block  tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="category_name"
            >
              Category Name:
            </label>
            <input
              type="text"
              name="category_name"
              defaultValue={category.category_name}
              required
              className="appearance-none block w-full text-sm text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label htmlFor="parent_category" className="mb-2 block text-sm font-medium">
            Parent Category:
          </label>
          <div className="relative">
            <select
              name="parent_category_id"
              defaultValue={category.parent_category_id.toString()}
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="parent-category-error"
            >
              <option value="">
              </option>
              {parentcategory.map((pc) => (
                <option key={pc._id.toString()} value={pc._id.toString()}>
                  {pc.category_name}
                </option>
              ))}
            </select>
          </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block  tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="notes"
            >
              Notes:
            </label>
            <textarea
              type="text"
              name="notes"
              className="appearance-none block w-full text-sm text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <fieldset>
              <legend className="mb-2 block text-sm font-medium">
                Is Active?
              </legend>
              <div className="rounded-md border border-gray-200 bg-white px-[14px] py-2">
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <input
                      name="isactive"
                      type="radio"
                      value="true"
                      defaultChecked={category.isActive === true}
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
                    />
                    <label
                      htmlFor="yes"
                      className="ml-2 flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300"
                    >
                      {" "}
                      Yes{" "}
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      name="isactive"
                      type="radio"
                      value="false"
                      defaultChecked={category.isActive === false}
                      className="h-4 w-4 border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
                    />
                    <label
                      htmlFor="no"
                      className="ml-2 flex items-center gap-1.5  px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300"
                    >
                      {" "}
                      No{" "}
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/categories"
            className="flex h-10 items-center rounded-lg bg-gray-400 px-4 text-sm font-medium text-gray-100 transition-colors hover:bg-gray-500"
          >
            Cancel
          </Link>
          <SaveCategoryBtn/>
        </div>
      </form>
    </div>
    
  );
}
