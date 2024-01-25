import Search from '@/components/ui/search';
import Table from '@/components/ui/dashboard/gallery/table';
import { UploadImages } from '@/components/ui/dashboard/gallery/buttons';
import {  poppins } from '@/components/ui/fonts';
import { Suspense } from 'react';
import UploadUnSignedImages from '@/components/ui/dashboard/gallery/imageUploadUnSigned';
//import UploadSignedImages from '@/components/ui/gallery/imageUploadSigned';
import {UploadImageDialog} from '@/components/ui/dashboard/gallery/upload-dialogbox';
import {fetchCategories} from '@/actions/_category-actions'

export const metadata = {  title: 'Image Gallery',};

export default async function GalleryPage({ searchParams,}) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  
  const categories = await fetchCategories();
  console.log("categories from db: ", categories)

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${poppins.className} text-2xl`}>Photo Gallery</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-2">
        <Search placeholder="Search for images..." />
        <UploadImageDialog categories={categories}/>
        <UploadUnSignedImages />
      </div>
      <Suspense key={query + currentPage} >
        <Table query={query} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}