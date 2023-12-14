import Image from 'next/image';
import { UpdateUser, DeleteUser } from '@/components/ui/users/buttons';
import { UserIcon} from "@heroicons/react/24/outline";
//import InvoiceStatus from '@/app/ui/invoices/status';

import { fetchFilteredUsers } from '@/app/actions/user-actions';

export default async function UsersTable({query, currentPage,}) {

  const data = await fetchFilteredUsers(query, currentPage);
  const users = data.users;

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {users && users?.map((user) => (
              <div
                key={user._id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src="/user-icon.png"
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${user.first_name}'s profile picture`}
                      />
                      <p>{user.last_name + " " + user.first_name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  {/* <InvoiceStatus status={invoice.status} /> */}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex justify-end gap-2">
                    <UpdateUser id={user._id} />
                    <DeleteUser id={user._id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  First Name
                </th>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Last Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  isAdmin?
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  isActive
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users && users?.map((user) => (
                <tr
                  key={user._id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/user-icon.png"
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${user.last_name + " " + user.first_name}'s profile picture`}
                      />
                      <p>{user.first_name}</p>
                    </div>
                  </td>

                  <td className="whitespace-nowrap px-3 py-3">
                    {user.last_name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.isAdmin ? "Yes" : "No"}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.isActive ? "Yes" : "No"}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateUser id={user._id} />
                      <DeleteUser id={user._id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
