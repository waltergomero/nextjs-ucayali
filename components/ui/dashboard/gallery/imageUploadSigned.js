'use client'

import { CldUploadWidget } from 'next-cloudinary';
 
const UploadSignedImages =   () => {
  return (
    <div>
        <CldUploadWidget signatureEndpoint="/api/imagesignature">
        {({ open }) => {
            return (
            <button onClick={() => open()}>
                Upload Signed Image
            </button>
            );
        }}
        </CldUploadWidget>
    </div>
  )
}

export default UploadSignedImages