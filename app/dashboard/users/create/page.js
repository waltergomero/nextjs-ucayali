import UserForm from '@/components/ui/users/create-form';
import Breadcrumbs from '@/components/ui/users/breadcrumbs';

 
export default async function Page() {

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Users', href: '/dashboard/users/create' },
          {
            label: 'Create User',
            href: '/dashboard/users/create',
            active: true,
          },
        ]}
      />
      <UserForm  />
    </main>
  );
}