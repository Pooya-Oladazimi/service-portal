'use client'

import AutoCompleteTSS from "../ui/widgets/autocomplete";
import MetadataWidgetTSS from "../ui/widgets/MetadataWidget";
import '../ui/widgets/styles.css';
import { useState } from 'react';
import { AutoCompleteSelectedTermType } from "../ui/widgets/types";


export default function Widgets() {
  const [selectedTerm, setSelectedTerm] = useState<AutoCompleteSelectedTermType>({});


  return (
    <div className="md:col-span-3">
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
      <div className="grid md:grid-cols-3 grid-rows-1 gap-10">
        <div className="md:col-span-1 overflow-hidden break-words widget-box">
          <AutoCompleteTSS setSelectedTerm={(term: AutoCompleteSelectedTermType) => { setSelectedTerm(term) }} />
        </div>
        <div className="md:col-span-2 widget-box">
          <MetadataWidgetTSS selectedTerm={selectedTerm} />
        </div>
      </div>

    </div>
  );
}
