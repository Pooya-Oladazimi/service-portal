
'use client'

import dynamic from 'next/dynamic';
import { SearchResultsListWidgetProps } from '@ts4nfdi/terminology-service-suite';

const SearchResultsListWidget = dynamic<SearchResultsListWidgetProps>(() =>
  import("@ts4nfdi/terminology-service-suite").then((mod) => mod.SearchResultsListWidget)
  , { ssr: false }) as React.ComponentType<SearchResultsListWidgetProps>;

import { QueryClient, QueryClientProvider } from "react-query";


export default function SearchResultsListWidgetTSS() {
  const queryClient = new QueryClient();

  return (
    <>
      <p className='header-2'>SearchResultsListWidget</p>
      <QueryClientProvider client={queryClient}>
        <SearchResultsListWidget
          api="https://semanticlookup.zbmed.de/api/"
          initialItemsPerPage={10}
          itemsPerPageOptions={[
            10,
            25,
            50,
            100
          ]}
          parameter="collection=safety&fieldList=description,label,iri,ontology_name,type,short_form"
          preselected={[]}
          query="d*"
          targetLink=""
          useLegacy
        />
      </QueryClientProvider>
    </>
  );
}

