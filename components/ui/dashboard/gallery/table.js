import Image from 'next/image';
import { UpdateUser, DeleteUser } from '@/components/ui/dashboard/users/buttons';
import { fetchFilteredUsers } from '@/actions/_user-actions';
import { Fragment } from 'react';
import { CldUploadWidget } from 'next-cloudinary';

export default async function UsersTable({ query, currentPage }) {
  const users = await fetchFilteredUsers(query, currentPage);

  return (
    <Fragment>
      <div className="mt-2 flow-root border">
        <div className="inline-block min-w-full align-middle">
          <div className=" md:pt-0">

            <h1>render images</h1>
          </div>
        </div>
      </div>

    </Fragment>
  );
}
