import Search from '@/components/ui/search';
import Table from '@/components/ui/dashboard/categories/table';
import { CreateCategory } from '@/components/ui/dashboard/categories/buttons';
import {  poppins } from '@/components/ui/fonts';
import { Suspense } from 'react';

export const metadata = {  title: 'Categories',};

export default async function CategoryPage({ searchParams,}) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
 
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${poppins.className} text-2xl`}>categories</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-2">
        <Search placeholder="Search for categories..." />
        <CreateCategory />
      </div>
      <Suspense key={query + currentPage} >
        <Table query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}