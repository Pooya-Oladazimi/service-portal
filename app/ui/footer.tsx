import Image from "next/image"; Image


export default function Footer() {
  return (
    <footer className="grid grid-rows-1 bg-white">
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-1">
          <Image
            src={'/base.png'}
            width={200}
            height={200}
            alt="Base4nfdi Logo"
          />
        </div>
        <div className="col-span-1">
          <Image
            src={'/dfg.gif'}
            width={200}
            height={200}
            alt="Base4nfdi Logo"
          />
        </div>
        <div className="col-span-2">
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
      </div>
      <div className="bg-[#455469] text-white text-center">
        <a href="">Contact</a>|
        <a href="" target="_blank">Imprint</a>|
        <a href="" target="_blank">Terms of Use</a>|
        <a href="" target="_blank">Privacy Policy</a>|
        <a href="https://base4nfdi.de/accessibility" target="_blank">Accessibility</a>
      </div>
    </footer>
  );
}
