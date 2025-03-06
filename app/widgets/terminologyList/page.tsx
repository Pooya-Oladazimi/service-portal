'use client'

import { LeftArrowIcon } from "@/app/ui/commons/icons";
import TerminologyListWidgetTSS from "@/app/ui/widgets/terminologyList";


export default function TerminologtList() {



  return (
    <div className="md:col-span-3">
      <a className="btn" href="/widgets/"><LeftArrowIcon /> Back to Lookup selection</a>
      <p className="header-1">Terminology List</p>
      <div className="grid md:grid-cols-1 grid-rows-1 gap-10">
        <div className="overflow-hidden break-words widget-box">
          <TerminologyListWidgetTSS />
        </div>
      </div>
    </div>
  )
}
