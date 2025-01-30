import Image from "next/image";



export default function AboutPeople() {
  const [imgW, imgH] = [150, 150];

  return (
    <>
      <p className="header-2"><b>Principal Investigators</b></p>
      <div className="grid grid-rows-1">
        <div className="grid md:grid-cols-3 sm:grid-rows-1">
          <div className="card">
            <Image src="/rb.jpg" width={imgW} height={imgH} alt="Baum, Roman" className="mx-auto"></Image>
            <div className="pt-2">
              <p className="text-lg"><b>Baum, Roman</b></p>
              <p className="mb-2">ZB MED - Information Centre for Life Sciences, Cologne </p>
              <a href="https://orcid.org/0000-0001-5246-9351" className="orcid-id-btn" target="_blank">ID</a>
            </div>
          </div>
          <div className="card">
            <Image src="/nk.png" width={imgW} height={imgH} alt="Karam, Naouel" className="mx-auto"></Image>
            <div className="pt-2">
              <p className="text-lg"><b>Karam, Naouel</b></p>
              <p className="mb-2">Institute for Applied Informatics (InfAI), Leipzig</p>
              <a href="https://orcid.org/0000-0002-6762-6417" className="orcid-id-btn" target="_blank">ID</a>
            </div>
          </div>
          <div className="card">
            <Image src="/ok.png" width={imgW} height={imgH} alt="Koepler, Oliver" className="mx-auto"></Image>
            <div className="pt-2">
              <p className="text-lg"><b>Koepler, Oliver</b></p>
              <p className="mb-2">TIB - Leibniz Information Centre for Science and Technology, Hannover</p>
              <a href="https://orcid.org/0000-0003-3385-4232" className="orcid-id-btn" target="_blank">ID</a>
            </div>
          </div>
        </div>
      </div>
      <p className="header-2"><b>Project Team Members</b></p>
      <div className="grid grid-rows-1">
        <div className="grid grid-cols-3">
          <div className="card">
            <Image src="/blank.jpg" width={imgW} height={imgH} alt="Sasse, Julia" className="mx-auto"></Image>
            <div className="pt-2">
              <p className="text-lg"><b>Sasse, Julia</b></p>
              <p className="mb-2">ZB MED - Information Centre for Life Sciences, Cologne </p>
              <a href="https://orcid.org/0000-0002-0660-7597" className="orcid-id-btn" target="_blank">ID</a>
            </div>
          </div>
          <div className="card">
            <Image src="/blank.jpg" width={imgW} height={imgH} alt="Bouazzouni, Syphax" className="mx-auto"></Image>
            <div className="pt-2">
              <p className="text-lg"><b>Bouazzouni, Syphax</b></p>
              <p className="mb-2">Institute for Applied Informatics (InfAI), Leipzig</p>
              <a href="https://orcid.org/0000-0002-2069-8739" className="orcid-id-btn" target="_blank">ID</a>
            </div>
          </div>
          <div className="card">
            <Image src="/blank.jpg" width={imgW} height={imgH} alt="Oladazimi, Pooya" className="mx-auto"></Image>
            <div className="pt-2">
              <p className="text-lg"><b>Oladazimi, Pooya</b></p>
              <p className="mb-2">TIB - Leibniz Information Centre for Science and Technology, Hannover</p>
              <a href="https://orcid.org/0000-0002-5117-070X" className="orcid-id-btn" target="_blank">ID</a>
            </div>
          </div>
        </div>
      </div>
      <p className="header-2"><b>Project Team Members</b></p>
      <div className="grid grid-rows-1">
        <div className="grid grid-cols-3">
          <div className="card">
            <Image src="/blank.jpg" width={imgW} height={imgH} alt="Fillies, Jan" className="mx-auto"></Image>
            <div className="pt-2">
              <p className="text-lg"><b>Fillies, Jan</b></p>
              <p className="mb-2">Institute for Applied Informatics (InfAI), Leipzig</p>
              <a href="https://orcid.org/0000-0002-2997-4656" className="orcid-id-btn" target="_blank">ID</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
