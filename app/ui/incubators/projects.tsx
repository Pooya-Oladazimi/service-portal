'use client'

import Image from "next/image";
import { Project, InucbatorsStatusCmpProps } from "./types";
import { SelectionInput } from "../commons/snippets";
import { useState, useEffect } from "react";


export default function IncubatorProjects(props: InucbatorsStatusCmpProps) {

  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedConsortium, setSelectedConsortium] = useState<string>("");
  const [projectsList, setProjectsList] = useState<Project[]>(props.projectsJson.projects);

  const statusToSkip = ['Requested', 'First contact', 'Postponed'];

  let projectsStatusOptions = [];
  for (let stat in props.projectsJson.stats) {
    if (!statusToSkip.includes(stat)) {
      let option = { label: stat, value: stat };
      projectsStatusOptions.push(option);
    }
  }


  let consortiumOptions: { label: string, value: string }[] = [];
  for (let project of props.projectsJson.projects) {
    for (let consortia of project.consortium) {
      let option = { label: consortia, value: consortia };
      if (!consortiumOptions.find((el) => el.label === option.label)) {
        consortiumOptions.push(option);
      }
    }
  }


  useEffect(() => {
    let filteredProjectsList: Project[] = [];
    filteredProjectsList = props.projectsJson.projects.filter((p) => {
      if (!selectedConsortium) { return true }
      return p.consortium.includes(selectedConsortium);
    });
    setProjectsList(filteredProjectsList.filter((p) => {
      if (!selectedStatus) { return true };
      return p.status === selectedStatus;
    }));

  }, [selectedStatus, selectedConsortium]);

  return (
    <>
      <div className="grid md:grid-cols-3 mb-4 gap-4" key={"filter-project"}>
        <SelectionInput
          id="status"
          label="Status"
          defaultOptionLabel="any"
          options={projectsStatusOptions}
          onSelection={(e: React.ChangeEvent<HTMLSelectElement>) => { setSelectedStatus(e.target.value) }}
          key={"status-dropdown"}
        />
        <SelectionInput
          id="consortium"
          label="Consortium"
          defaultOptionLabel="any"
          options={consortiumOptions}
          onSelection={(e: React.ChangeEvent<HTMLSelectElement>) => { setSelectedConsortium(e.target.value) }}
          key={"consortium-dropdown"}
        />
      </div>
      <div className="grid md:grid-cols-3 grid-rows-1 gap-8" key={"incubators-grid"}>
        <div className="incubator-project-card" key={"add-project"}>
          <div className="w-full" key={'image'}>
            <Image src={'/img/incubator_placeholder.jpg'} width={150} height={150} alt={"Add your project"} className="mx-auto"></Image>
          </div>
          <p className="header-3" key={'title'}><b>Would you like to collaborate with us as an Incubator?</b></p>
          <a className="btn" href="/incubators/new/" key={"new-incubator-anchor"}>Send us your request</a>
        </div>
        {
          projectsList.map((project: Project) => {
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

      </div>
    </>
  );
}
