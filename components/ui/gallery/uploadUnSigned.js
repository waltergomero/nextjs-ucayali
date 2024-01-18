'use client'

import { CldUploadWidget } from 'next-cloudinary';
 
const UploadUnSignedImages = () => {
  return (
    <div>
        <CldUploadWidget uploadPreset="gallery">
        {({ open }) => {
            return (
            <button onClick={() => open()}>
                Upload an Image
            </button>
            );
        }}
        </CldUploadWidget>
    </div>
  )
}

export default UploadUnSignedImages