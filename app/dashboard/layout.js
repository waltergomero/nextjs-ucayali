import SideNav from "@/components/ui/dashboard/sidenav";
import { Toaster, toast } from "sonner";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden ">
      <Toaster richColors position="top-right" />
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-4">{children}</div>
    </div>
  );
}
