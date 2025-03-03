import Image from "next/image";
import { Project, InucbatorsStatusCmpProps } from "./types";


export default function IncubatorProjects(props: InucbatorsStatusCmpProps) {

  const projectsJson = props.projectsJson.projects;
  const statusToSkip = ['Requested', 'First contact', 'Postponed'];

  return (
    <div className="grid md:grid-cols-3 grid-rows-1 gap-8" key={"incubators-grid"}>
      {
        projectsJson.map((project: Project) => {
          if (statusToSkip.includes(project.status)) {
            return;
          }
          return (
            <>
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
              </div>
            </>
          )
        })
      }
      <div className="incubator-project-card" key={"add-project"}>
        <div className="w-full" key={'image'}>
          <Image src={'/img/incubator_placeholder.jpg'} width={150} height={150} alt={"Add your project"} className="mx-auto"></Image>
        </div>
        <p className="header-3" key={'title'}><b>Not able to find your project?</b></p>
        <a className="btn" href="/incubators/new/">Add my incubator project</a>
      </div>
    </div>
  );
}
