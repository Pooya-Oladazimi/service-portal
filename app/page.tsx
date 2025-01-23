import Image from 'next/image';


export default function Home() {
  return (
    <div className='container grid md:grid-cols-10 sm:grid-rows-1 gap-4'>
      <div className='md:col-span-4 sm:row-span-1 mx-auto'>
        <Image
          src={"/logo.png"}
          width={400}
          height={400}
          alt="TS4NFDI Logo"
        />
      </div>
      <div className='md:col-span-6 sm:row-span-1'>
        <p className='text-justify'>
          Terminology Services 4 NFDI (TS4NFDI) is a cross-domain service for the provision, curation, development,
          harmonization, and mapping of terminologies. It aims to facilitate consensus-building and interoperability
          of services across disciplines to achieve a shared knowledge representation and knowledge engineering
          framework. The service seeks to integrate and converge individual solutions into a standardized,
          interoperable, and sustainable service suite with Service Wrapper, API Gateway, mapping service,
          and reusable GUI widgets.
        </p>
      </div>
    </div>
  );
}
