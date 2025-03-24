'use client'

import { Project, IncubatorsStatusCmpProps } from "./types";
import { SelectionInput } from "../commons/snippets";
import React, { useState, useEffect } from "react";
import ProjectCard from "./projectCard";
import IncubatorRequestCard from "./requestCard";


export default function IncubatorProjects(props: IncubatorsStatusCmpProps) {

  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedConsortium, setSelectedConsortium] = useState<string>("");
  const [projectsList, setProjectsList] = useState<Project[]>(props.projectsJson?.projects ?? []);

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
    let filteredProjectsList: Project[];
    filteredProjectsList = props.projectsJson.projects.filter((p) => {
      if (!selectedConsortium) { return true }
      return p.consortium.includes(selectedConsortium);
    });
    setProjectsList(filteredProjectsList.filter((p) => {
      if (!selectedStatus) { return true }
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
        <IncubatorRequestCard />
        {
          projectsList.map((project: Project) => {
            if (!statusToSkip.includes(project.status)) {
              return (<ProjectCard incubator={project} key={project.title} />)
            }
          })
        }

      </div>
    </>
  );
}




