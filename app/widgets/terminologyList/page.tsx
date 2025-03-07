'use client'

import { LeftArrowIcon } from "@/app/ui/commons/icons";
import TerminologyListWidgetTSS from "@/app/ui/widgets/terminologyList";


export default function TerminologtList() {



  return (
    <div className="md:col-span-3">
      <a className="btn" href="/widgets/"><LeftArrowIcon /> Back to Lookup selection</a>
      <p className="header-1">Terminology List</p>
      <TerminologyListWidgetTSS />
    </div>
  )
}
