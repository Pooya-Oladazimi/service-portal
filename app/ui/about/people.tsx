import Image from "next/image";


import { promises as fs } from "fs";


type personData = {
  imagePath: string,
  name: string,
  affiliation: string,
  orcid: string
}

type sectionData = {
  title: string,
  persons: personData[]
}

export default async function AboutPeople() {
  const [imgW, imgH] = [150, 150];

  async function readJsonFile(filePath: string) {
    try {
      const file = await fs.readFile(process.cwd() + '/app/ui/about/people.json', 'utf8');
      const data = JSON.parse(file);
      return data;
    } catch (e) {
      console.error("Error reading YAML file:", e);
      return null;
    }
  }

  const peopleJson = await readJsonFile('') as sectionData[];
  console.log(peopleJson)


  return (
    <>
      <p className="header-2"><b>Principal Investigators</b></p>
      <div className="grid grid-rows-1">
        <div className="grid md:grid-cols-3 sm:grid-rows-1">
          {
            //@ts-ignore
            peopleJson['sections'][0]['persons'].map((person: personData) => {
              return (
                <div className="card">
                  <Image src={person.imagePath} width={imgW} height={imgH} alt={person.name} className="mx-auto"></Image>
                  <div className="pt-2">
                    <p className="text-lg"><b>{person.name}</b></p>
                    <p className="mb-2">{person.affiliation}</p>
                    <a href={person.orcid} className="orcid-id-btn" target="_blank">ID</a>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
      <p className="header-2"><b>Project Team Members</b></p>
      <div className="grid grid-rows-1">
        <div className="grid grid-cols-3">
          {
            //@ts-ignore
            peopleJson['sections'][1]['persons'].map((person: personData) => {
              return (
                <div className="card">
                  <Image src={person.imagePath} width={imgW} height={imgH} alt={person.name} className="mx-auto"></Image>
                  <div className="pt-2">
                    <p className="text-lg"><b>{person.name}</b></p>
                    <p className="mb-2">{person.affiliation}</p>
                    <a href={person.orcid} className="orcid-id-btn" target="_blank">ID</a>
                  </div>
                </div>
              );
            })
          }

        </div>
      </div>
      <p className="header-2"><b>Former Project Team Members</b></p>
      <div className="grid grid-rows-1">
        <div className="grid grid-cols-3">
          {
            //@ts-ignore
            peopleJson['sections'][2]['persons'].map((person: personData) => {
              return (
                <div className="card">
                  <Image src={person.imagePath} width={imgW} height={imgH} alt={person.name} className="mx-auto"></Image>
                  <div className="pt-2">
                    <p className="text-lg"><b>{person.name}</b></p>
                    <p className="mb-2">{person.affiliation}</p>
                    <a href={person.orcid} className="orcid-id-btn" target="_blank">ID</a>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
}
