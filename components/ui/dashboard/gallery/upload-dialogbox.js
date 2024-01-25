import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import DdlCategories from '@/components/ui/dashboard/categories/ddl-categories'

export function UploadImageDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline"
        className="flex h-10 items-center rounded-lg bg-orange-500 px-4 text-sm font-medium text-white transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
        Upload Images</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Image</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
        <DdlCategories/>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-left">
              Description:
            </Label>
            <Input id="description"  className="col-span-3" />
          </div>
          <p>wefhwef 9uwehfohweof wehfohwef  wehfwehf whef wef 0iwehif wef   qwefhwfeh 0wehf wefh qweifhwhef wefh wefh qwefwehfhweiwu weue</p>
        </div>


        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
