import SideNav from '@/components/ui/dashboard/sidenav';
import { Toaster } from "sonner"

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-8">
      <Toaster position="top-center" richColors="true" />
        {children}</div>
    </div>
  );
}
