"use client";

import { createStatus } from "@/actions/_status-actions";
import { SaveStatusBtn } from "@/components/ui/status/buttons";
import Link from "next/link";
import { toast } from "sonner";

export default function StatusCreateForm({statustypeid}) {
  const _createStatus = async (formData) => {
    const result = await createStatus(formData);
    if (result?.error) {
      toast.error(result.error);
    } 
  };

  return (

    <div className=" flex flex-col justify-center items-center border-2 border-gray-200 rounded-md ">
      <form action={_createStatus} className="rounded-md p-10 w-full bg-gray-50 ">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block  tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="first_name"
            >
              Status Name:
            </label>
            <input
              type="text"
              name="status_name"
              required
              className="appearance-none block w-full text-sm text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Type Id:
          </label>
          <div className="relative">
            <select
              name="status_typeid"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="customer-error"
            >
              <option value="" disabled>
              </option>
                  {statustypeid}
            </select>
          </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/status"
            className="flex h-10 items-center rounded-lg bg-gray-400 px-4 text-sm font-medium text-gray-100 transition-colors hover:bg-gray-500"
          >
            Cancel
          </Link>
          <SaveStatusBtn/>
        </div>
      </form>
    </div>
    
  );
}
