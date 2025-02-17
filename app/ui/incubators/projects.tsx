import Image from "next/image";
import { Project, Person, InucbatorsStatusCmpProps } from "./types";


export default function IncubatorProjects(props: InucbatorsStatusCmpProps) {

  const projectsJson = props.projectsJson.projects;

  return (
    <div className="grid md:grid-cols-3 grid-rows-1 gap-8">
      {
        projectsJson.map((project: Project) => {
          return (
            <div className="incubator-project-card" key={project.title}>
              <div className="w-full" key={'image'}>
                <Image src={'/img/' + project.logo} width={project.logoW ?? 150} height={project.logoH ?? 150} alt={project.title} className="mx-auto"></Image>
              </div>
              <p className="header-3" key={'title'}><b>{project.title}</b></p>
              <div className="flex flex-wrap gap-2 mb-10" key={'tags'}>
                <span className="status-badge" key={project.status}>{project.status}</span>
                {
                  project.consortium.map((consortia) => {
                    return (
                      <span className="name-badge" key={consortia}>{consortia}</span>
                    )
                  })
                }
              </div>
              <p key={'period'}>{`From ${project.start} To ${project.end}`}</p>
              <p key={'description'}>{project.description}</p>
              <br />
              <p className="header-4">People</p>
              {
                project.contactPersons.map((personData: Person) => {
                  return (
                    <ul key={personData.person}>
                      <li>{personData.person} {personData.consortium.length !== 0 ? `(${personData.consortium})` : ""}</li>
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
