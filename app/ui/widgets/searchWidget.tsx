
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
      <p>Search in the collection <b>DataPLANT</b> hosted by TIB (OLS4: https://api.terminology.tib.eu/api/)</p>
      <QueryClientProvider client={queryClient}>
        <SearchResultsListWidget
          api="https://api.terminology.tib.eu/api/"
          initialItemsPerPage={10}
          itemsPerPageOptions={[
            10,
            25,
            50,
            100
          ]}
          parameter="classification=DataPLANT&schema=collection&fieldList=description,label,iri,ontology_name,type,short_form"
          preselected={[]}
          query="*"
          targetLink=""
          useLegacy={false}

        />
      </QueryClientProvider>
    </>
  );
}

