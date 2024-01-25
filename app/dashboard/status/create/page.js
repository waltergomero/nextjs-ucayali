import StatusCreateForm from "@/components/ui/dashboard/status/create-form";
import {fetchStatusTypeId} from "@/actions/_status-actions";
import Breadcrumbs from "@/components/ui/breadcrumbs";

export default async function StatusCreatePage() {
  const statustypeid = await fetchStatusTypeId();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Users", href: "/dashboard/status" },
          {
            label: "Add New Status",
            href: "/dashboard/status/create",
            active: true,
          },
        ]}
      />
      <StatusCreateForm statustypeid={statustypeid}/>
    </main>
  );
}
