'use client'

import dynamic from 'next/dynamic';
import { ResourcesWidgetProps } from '@ts4nfdi/terminology-service-suite';

const ResourcesWidget = dynamic<ResourcesWidgetProps>(() =>
  import("@ts4nfdi/terminology-service-suite").then((mod) => mod.ResourcesWidget)
  , { ssr: false }) as React.ComponentType<ResourcesWidgetProps>;

import { QueryClient, QueryClientProvider } from "react-query";


export default function TerminologyListWidgetTSS() {
  const queryClient = new QueryClient();

  return (
    <>
      <p className='header-2'>ResourcesWidget</p>
      <QueryClientProvider client={queryClient}>
        <ResourcesWidget
          actions={[]}
          api="https://www.ebi.ac.uk/ols4/api/"
          initialEntriesPerPage={100}
          initialSortDir="asc"
          initialSortField="config.preferredPrefix"
          onNavigate={function noRefCheck() { }}
          pageSizeOptions={[
            10,
            25,
            50,
            100
          ]}
          parameter=""
        //targetLink="https://semanticlookup.zbmed.de/dev/"
        />
      </QueryClientProvider>
    </>
  );
}

