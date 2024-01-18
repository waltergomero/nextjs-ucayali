import Search from '@/components/ui/search';
import Table from '@/components/ui/gallery/table';
import { UploadImages } from '@/components/ui/gallery/buttons';
import {  poppins } from '@/components/ui/fonts';
import { Suspense } from 'react';
import UploadUnSignedImages from '@/components/ui/gallery/uploadUnSigned';

export const metadata = {  title: 'Image Gallery',};

export default async function GalleryPage({ searchParams,}) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
 
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${poppins.className} text-2xl`}>Photo Gallery</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-2">
        <Search placeholder="Search for images..." />
        <UploadUnSignedImages />
      </div>
      <Suspense key={query + currentPage} >
        <Table query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}