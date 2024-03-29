'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function UploadImageDialog({ categories }) {
  const cat = categories;

  const [selectedImage, setSelectedImnage] = useState(null);

  const handlerUploadImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImnage(e.target.files[0]);
    }
  };


  const removeSelectedImage = () => {
    setSelectedImnage();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex h-10 items-center rounded-lg bg-orange-500 px-4 text-sm font-medium text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
        >
          Upload Images
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[475px]">
        <DialogHeader>
          <DialogTitle>Upload Image</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div>
            <Input
              id="picture"
              required
              type="file"
              onChange={handlerUploadImage}
            />
            </div>
            {selectedImage && (
              <div style={styles.preview}>
                <img
                  src={URL.createObjectURL(selectedImage)}
                  style={styles.image}
                  alt="Thumb"
                />
                <button onClick={removeSelectedImage} style={styles.delete}>
                  Remove this image
                </button>
              </div>
            )}

          <div className="grid grid-cols-4 items-center gap-4">
            <label
              htmlFor="parent_category"
              className="mb-2 block text-sm font-medium"
            >
              Category:
            </label>

            <select
              name="categoryid"
              required
              className="peer col-span-3 block w-full cursor-pointer rounded-md border border-gray-200  py-2 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="parent-category-error"
            >
              <option value=""></option>
              {categories?.map((c) => (
                <option key={c._id.toString()} value={c._id.toString()}>
                  {c.category_name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Description:
            </Label>
            <Input id="description" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" variant="blue">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// Just some styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  preview: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  image: { maxWidth: 425, maxHeight: '90%' },
  delete: {
    cursor: 'pointer',
    padding: 10,
    background: 'red',
    color: 'white',
    border: 'none',
  },
};
