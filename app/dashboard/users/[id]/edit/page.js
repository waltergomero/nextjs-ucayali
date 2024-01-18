import UserEditForm from "@/components/ui/users/edit-form";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import {fetchUserById} from '@/actions/_user-actions'
import notFound from "./not-found";

export default async function UserEditPage({params}) {
  const id = params.id;

  const [user] = await Promise.all([fetchUserById(id)]);

  if (!user) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Users", href: "/dashboard/users" },
          {
            label: "Update User Information",
            href: `/dashboard/users/${id}/edit`,
            active: true,
          },
        ]}
      />
      <UserEditForm user={user}/>
    </main>
  );
}
