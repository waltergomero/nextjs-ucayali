import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/components/ui/users/breadcrumbs';
import { fetchFilteredUsers } from '@/app/actions/user-actions';
 
export default async function Page() {
  const users = await fetchFilteredUsers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form users={users} />
    </main>
  );
}