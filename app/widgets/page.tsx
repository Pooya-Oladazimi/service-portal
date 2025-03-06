'use client'

import '../ui/widgets/styles.css';
import { InfoAlert } from "../ui/commons/snippets";
import Link from "next/link";
import { BookOpenIcon, SearchIcon, ListIcon } from '../ui/commons/icons';


export default function Widgets() {


  return (
    <div className="md:col-span-3">
      <p className="header-1">TS4NFDI Service Portal lookup service</p>
      <p className="text-justify">
        Here you can look after terms and terminologies from variaty of Teminologies Service supported by our API Gateway. The UI component to build this
        lookup come from our <a href="https://ts4nfdi.github.io/terminology-service-suite/comp/latest/?path=/docs/overview--docs">TSS Widgets</a>
      </p>
      <InfoAlert
        title="A bit about TSS Widgets"
        body={`The Terminology Service Suite project, derived from the
        <a href="https://semanticlookup.zbmed.de/" target="_blank">SemLookP</a>project and
        now hosted on GitHub under the
        <a href="https://github.com/ts4nfdi" target="_blank">TS4NFDI</a>repository,
        is a collection of interactive widgets
        designed to ease the integration of terminology service functions into third-party
        applications. In its Storybook, you will find an interactive documentation of
        the widget component library. The widgets are built using React and TypeScript
        and can be used in both React and plain HTML applications. The functionality
        and arguments are the same for the React and plain HTML versions. `
        }
      />
      <div className="grid md:grid-cols-3 grid-rows-1 gap-10 mt-20">
        <Link href={"/widgets/termLookup/"}>
          <div className="function-big-btn">
            <BookOpenIcon size="10" />
            <b className='inline text-xl'>Term Lookup</b>
          </div>
        </Link>
        <Link href={"/widgets/terminologyList/"}>
          <div className="function-big-btn">
            <ListIcon size="10" />
            <b className='inline text-xl'>Terminology List</b>
          </div>
        </Link>
        <Link href={"/widgets/search/"}>
          <div className="function-big-btn">
            <SearchIcon size="10" />
            <b className='inline text-xl'>Search</b>
          </div>
        </Link>
      </div>

    </div>
  );
}
