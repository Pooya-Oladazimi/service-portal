'use client'

import { AutocompleteWidget } from "@ts4nfdi/terminology-service-suite";
import { QueryClient, QueryClientProvider } from "react-query";


export default function Widgets() {
  const queryClient = new QueryClient();
  return (
    <div className="md:col-span-10 row-span-1">
      <p className="header-1">TSS Widgets</p>
      <QueryClientProvider client={queryClient}>
        <AutocompleteWidget
          api="https://ts4nfdi-api-gateway.prod.km.k8s.zbmed.de/api-gateway/"
          hasShortSelectedLabel
          parameter="ontology=mesh,efo&type=class&collection=nfdi4health&fieldList=description,label,iri,ontology_name,type,short_form"
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
