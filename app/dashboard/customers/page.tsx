import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import { CustomersTableSkeleton } from '@/app/ui/skeletons'; // Make sure this skeleton exists and is correct
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({ searchParams }: { searchParams: any }) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.query || '';

  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Suspense key={query} fallback={<CustomersTableSkeleton />}>
        <TableWrapper query={query} />
      </Suspense>
    </div>
  );
}

// This is a new async component that does the actual data fetching.
// Because it's a separate component inside Suspense, it doesn't
// block the rendering of the main page.
async function TableWrapper({ query }: { query: string }) {
  const customers = await fetchFilteredCustomers(query);
  return <CustomersTable customers={customers} />;
}
