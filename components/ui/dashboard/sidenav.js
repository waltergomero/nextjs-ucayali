import Link from 'next/link';
import NavLinks from '@/components/ui/dashboard/nav-links';
import AcmeLogo from '@/components/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut, auth } from '@/auth';

export default async function SideNav() {
  const session = await auth()
  console.log(session)
  return (
    <div className="flex h-full flex-col border border-gray-200">
      <Link
        className="flex h-15items-end justify-start bg-blue-600 p-4 md:h-15"
        href="/">
        <div className="w-32 text-white md:w-40">     
         <span> email: </span> {session?.user.email}
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6 bold" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
