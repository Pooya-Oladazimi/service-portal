'use client'

import dynamic from 'next/dynamic';


type AutocompleteWidgetProps = {
  api: string;
  hasShortSelectedLabel: boolean;
  parameter: string;
  placeholder: string;
  preselected: never[];
  selectionChangedEvent: () => void;
  showApiSource: boolean;
  singleSelection: boolean;
  ts4nfdiGateway: boolean;
};

const AutocompleteWidget = dynamic<AutocompleteWidgetProps>(() =>
  import("@ts4nfdi/terminology-service-suite").then((mod) => mod.AutocompleteWidget)
  , { ssr: false }) as React.ComponentType<AutocompleteWidgetProps>;;

import { QueryClient, QueryClientProvider } from "react-query";


export default function Widgets() {
  const queryClient = new QueryClient();
  return (
    <div className="md:col-span-8 sm:row-span-1">
      <p className="header-1">TSS Widgets</p>
      <p className="text-justify">
        The Terminology Service Suite project, derived from the
        <a href="https://semanticlookup.zbmed.de/" target="_blank">SemLookP</a>project and
        now hosted on GitHub under the
        <a href="https://github.com/ts4nfdi" target="_blank">TS4NFDI</a>repository,
        is a collection of interactive widgets
        designed to ease the integration of terminology service functions into third-party
        applications. In this Storybook, you will find an interactive documentation of
        the widget component library. The widgets are built using React and TypeScript
        and can be used in both React and plain HTML applications. The functionality
        and arguments are the same for the React and plain HTML versions. Only the code
        snippet you get when you click {"Show code"} in the Storybook is different.
      </p>
      <p className="header-2">AutocompleteWidget</p>
      <QueryClientProvider client={queryClient}>
        <p><b>API:</b> https://ts4nfdi-api-gateway.prod.km.k8s.zbmed.de/api-gateway/</p>
        <p>
          <b>Parameters: </b>
          ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form
        </p>
        <AutocompleteWidget
          api={"https://ts4nfdi-api-gateway.prod.km.k8s.zbmed.de/api-gateway/"}
          hasShortSelectedLabel={true}
          parameter={"ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form"}
          placeholder="Search for a Concept"
          preselected={[]}
          selectionChangedEvent={function noRefCheck() { }}
          showApiSource={true}
          singleSelection={true}
          ts4nfdiGateway={true}
        />
      </QueryClientProvider>
    </div>
  );
}
