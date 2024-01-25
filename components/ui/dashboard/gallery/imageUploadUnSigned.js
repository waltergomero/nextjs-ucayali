'use client'

import { CldUploadWidget } from 'next-cloudinary';
import { ArrowUturnUpIcon} from "@heroicons/react/24/outline";
 
const UploadUnSignedImages = () => {
  return (
    <div>

        <CldUploadWidget uploadPreset="gallery">

        {({ open }) => {
            return (
            <button onClick={() => open()} 
            className="flex h-10 items-center rounded-lg bg-orange-500 px-4 text-sm font-medium text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                <span className="hidden md:block">Upload Images</span>{" "}
                <ArrowUturnUpIcon className="h-5 md:ml-4" />
            </button>
            );
        }}
        </CldUploadWidget>
    </div>
  )
}

export default UploadUnSignedImages