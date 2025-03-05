'use client'

import dynamic from 'next/dynamic';
import { AutocompleteWidgetProps } from '@ts4nfdi/terminology-service-suite';

const AutocompleteWidget = dynamic<AutocompleteWidgetProps>(() =>
  import("@ts4nfdi/terminology-service-suite").then((mod) => mod.AutocompleteWidget)
  , { ssr: false }) as React.ComponentType<AutocompleteWidgetProps>;;

import { QueryClient, QueryClientProvider } from "react-query";
import { AutoCompleteSelectedTermType } from './types';


type CmpType = {
  setSelectedTerm: (term: AutoCompleteSelectedTermType) => void
}

export default function AutoCompleteTSS(props: CmpType) {
  const queryClient = new QueryClient();

  function handleSelection(terms: AutoCompleteSelectedTermType[]) {
    props.setSelectedTerm(terms[0]);
  }

  return (
    <>
      <p className="header-2">AutocompleteWidget</p>
      <QueryClientProvider client={queryClient}>
        <p>
          <b>
            Seleced a term and see its detiled metadata on the Metadatawidget on the right side
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </b>
        </p>
        <p>
          You can use this widget to search and pick classes, properties, individuals,
          and terminologies from variaty of Terminology Service supported by our Gateway.
          To try and check the possible options use:
          <a
            href={process.env.NEXT_PUBLIC_AUTOCOMPLETE_DOCUMENTATION_URL}
            target='_blank'
          >AutocompleteWidget Storybook</a>
        </p>
        <p><b>API:</b> {process.env.NEXT_PUBLIC_API_GATEWAY_ENDPOINT}</p>
        {/* <p> */}
        {/*   <b>Parameters: </b> */}
        {/*   {process.env.NEXT_PUBLIC_API_GATEWAY_DEFAULT_PARAMETERS} */}
        {/* </p> */}
        <div className='w-full'>
          <AutocompleteWidget
            api={process.env.NEXT_PUBLIC_API_GATEWAY_ENDPOINT as string}
            hasShortSelectedLabel={true}
            parameter={process.env.NEXT_PUBLIC_API_GATEWAY_DEFAULT_PARAMETERS as string}
            placeholder="Search for a Concept"
            preselected={[]}
            selectionChangedEvent={handleSelection}
            showApiSource={true}
            ts4nfdiGateway={true}
            singleSelection={true}
          />
        </div>
      </QueryClientProvider>
    </>
  );
}
