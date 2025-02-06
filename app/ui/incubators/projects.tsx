import Image from "next/image";
import { readJsonFile } from "@/app/libs/utils";
import { IncubatorProjectList, Project, Person } from "./types";


export default async function IncubatorProjects() {

  const projectsJson = await readJsonFile('/app/ui/incubators/projects.json') as IncubatorProjectList;


  return (
    <div className="grid md:grid-cols-3 grid-rows-1 gap-8">
      {
        projectsJson.projects.map((project: Project) => {
          return (
            <div className="incubator-project-card" key={project.title}>
              <div className="w-full" key={'image'}>
                <Image src={'/img/' + project.logo} width={project.logoW ?? 200} height={project.logoH ?? 200} alt={project.title} className="mx-auto"></Image>
              </div>
              <p className="header-3" key={'title'}><b>{project.description}</b></p>
              {/* <p key={'description'}>{project.description}</p> */}
              <p className="header-4">People</p>
              {
                project.contactPersons.map((personData: Person) => {
                  return (
                    <ul key={personData.person}>
                      <li>{personData.person} ({personData.consortium})</li>
                    </ul>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  );
}
