"use client";

import { useState} from "react";
import { createCategory } from "@/actions/_category-actions";
import { SaveCategoryBtn } from "@/components/ui/dashboard/categories/buttons";
import Link from "next/link";
import { toast } from "sonner";

export default function CategoryCreateForm({parentcategory}) {
  const [parentCategoryValue, setParentCategoryValue] = useState("");

  const _createCategory = async (formData) => {
    const result = await createCategory(formData);
    if (result?.error) {
      toast.error(result.error);
    } 
  };


  return (

    <div className=" flex flex-col justify-center items-center border-2 border-gray-200 rounded-md ">
      <form action={_createCategory} className="rounded-md p-10 w-full bg-gray-50 ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <input
              type="hidden"
              name="parent_category_name"
              defaultValue={parentCategoryValue}
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
              name="parent_category"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="parent-category-error"
            >
              <option value=""></option>
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
