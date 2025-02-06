import Image from "next/image";
import { readJsonFile } from "@/app/libs/utils";
import {
  peopleJsonData,
  sectionData,
  personData
} from "./types";


export default async function AboutPeople() {
  const [imgW, imgH] = [150, 150];
  const peopleJson = await readJsonFile('/app/ui/about/people.json') as peopleJsonData;

  return (
    <>
      {
        peopleJson['sections'].map((section: sectionData) => {
          return (
            <>
              <p className="header-2"><b>{section.title}</b></p>
              <div className="grid md:grid-cols-3 sm:grid-rows-1 gap-4">
                {
                  section.persons.map((person: personData) => {
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
            </>
          )
        })
      }
    </>
  );
}
