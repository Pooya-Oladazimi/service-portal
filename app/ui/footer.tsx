import Image from "next/image";


export default function Footer() {
  return (
    <footer className="grid grid-rows-[1fr-auto] text-xs sm:text-base md:text-x1 h-10 bottom-0 inset-x-0 mt-auto">
      <div className="grid grid-cols-3 gap-2 bg-white p-10">
        < div className="col-span-1" >
          <Image
            src={'/base.png'}
            width={200}
            height={200}
            alt="Base4nfdi Logo"
          />
        </div >
        <div className="col-span-1">
          <Image
            src={'/dfg.gif'}
            width={300}
            height={300}
            alt="Base4nfdi Logo"
          />
        </div>
        <div className="col-span-1">
          Resources
          <ul>
            <li>
              <a href="https://ts4nfdi.github.io/terminology-service-suite/comp/latest/?path=/docs/overview--docs" target="_blank">
                TSS Widgets
              </a>
            </li>
            <li>
              <a href="https://github.com/ts4nfdi" target="_blank">GitHub</a>
            </li>
          </ul>
        </div>
      </div >
      <div className="bg-ts4nfdi-brand-color text-white text-center">
        <a className="text-white pr-4 pl-4" href='/contact'>Contact</a>|
        <a className="text-white pr-4 pl-4" href="https://www.zbmed.de/en/legal-notice" target="_blank">Imprint</a>|
        <a className="text-white pr-4 pl-4" href="https://www.zbmed.de/en/privacy-policy" target="_blank">Privacy Policy</a>|
        <a className="text-white pr-4 pl-4" href="https://base4nfdi.de/accessibility" target="_blank">Accessibility</a>
      </div>
    </footer >
  );
}
