import Image from "next/image";
import { readJsonFile } from "@/app/libs/utils";
import {
  PeopleJsonData,
  SectionData,
  PersonData
} from "./types";
import { CSSProperties } from "react";


export default async function AboutPeople() {
  const [imgW, imgH] = [150, 150];
  const peopleJson = await readJsonFile('app/ui/about/people.json') as PeopleJsonData;
  const imageContainerSyle = {
    position: "relative",
    width: `${imgW}px`,
    height: `${imgH}px`,
    margin: 'auto'
  } as CSSProperties;

  return (
    <>
      {
        peopleJson?.['sections'].map((section: SectionData) => {
          return (
            <>
              <p className="header-2" key={"header-ppl"}><b>{section.title}</b></p>
              <div className="grid md:grid-cols-3 sm:grid-rows-1 gap-4" key={section.title}>
                {
                  section.persons.map((person: PersonData) => {
                    return (
                      <div className="card" key={person.name}>
                        <div style={{ ...imageContainerSyle }} key={person.imagePath}>
                          <Image src={"/img/" + person.imagePath} alt={person.name} fill style={{ objectFit: "contain" }}></Image>
                        </div>
                        <div className="pt-2" key={"person-detail"}>
                          <p className="text-lg" key={"name"}><b>{person.name}</b></p>
                          <p className="mb-2" key={"affiliation"}>{person.affiliation}</p>
                          <a href={person.orcid} className="orcid-id-btn" target="_blank" key={"orcid"}>ID</a>
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
