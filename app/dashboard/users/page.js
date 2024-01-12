import Search from '@/components/ui/search';
import Table from '@/components/ui/users/table';
import { CreateUser } from '@/components/ui/users/buttons';
import {  poppins } from '@/components/ui/fonts';
import { Suspense } from 'react';

export default async function Page({ searchParams,}) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;


  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${poppins.className} text-2xl`}>Users</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-2">
        <Search placeholder="Search users..." />
        <CreateUser />
      </div>
      <Suspense key={query + currentPage} >
        <Table query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}