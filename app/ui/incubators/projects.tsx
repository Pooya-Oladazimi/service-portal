'use client'

import Image from "next/image";
import { Project, InucbatorsStatusCmpProps } from "./types";
import { SelectionInput } from "../commons/snippets";
import React, { useState, useEffect } from "react";
import Link from "next/link";


export default function IncubatorProjects(props: InucbatorsStatusCmpProps) {

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
        <div className="incubator-project-card" key={"add-project"}>
          <div className="w-full" key={'image'}>
            <Image src={'/img/incubator_placeholder.jpg'} width={150} height={150} alt={"Add your project"} className="mx-auto"/>
          </div>
          <p className="header-3" key={'title'}><b>Would you like to collaborate with us as an Incubator?</b></p>
          <p className="header-4" >Status</p>
          <div className="flex flex-wrap gap-2 mb-10" >
            <span className="status-badge" key={'first contact'}>We could help you</span>
            <span className="cycle-badge" key={'Cycle ?'}>Cycle ?</span>
          </div>
          <p className="header-4" >Related Consortia</p>
          <div className="flex flex-wrap gap-2 mb-10" key={'tags'}>
            <span className="name-badge" key={'NFDI-consortia'}>some NFDI consortia</span>
            <span className="name-badge" key={'no-consortia'}>no consortia - external</span>
          </div>
          <p className="header-4" >Duration</p>
          <p key={'in-the-future'}>6 months somewhere in the future. The next incubator cycle will start in Q3/2025.</p>
          <p className="header-4" >Description</p>
          <p className="text-justify" key={'contact-us-description'}>
            Have you considered one or more of the possible goals listed below? However, you may not have the resources
            or expertise to make it happen. Terminology Services 4 NFDI (TS4NFDI) can provide the assistance you need
            to bring your use case to life.
            <br/><br/>
            We offer incubator projects to interested parties to support them in the interaction, integration or
            handling of terminology services. TS4NFDI will offer at least two incubator cycles per year. These cycles
            will be user-driven and will include requirements analysis, service integration, testing and user feedback.
            Each cycle is expected to span six months, during which TS4NFDI will allocate resources
            (e.g. developer capacity) to support your specific use case.
          </p>
          <p className="header-4" >Possible Goals</p>
          <ul>
            <li className="list-disc ml-6 text-justify mb-2" key={'goal1'}>Hosting of terminologies</li>
            <li className="list-disc ml-6 text-justify mb-2" key={'goal2'}>Setup a terminology service</li>
            <li className="list-disc ml-6 text-justify mb-2" key={'goal3'}>Adding terminology services to the API Gateway</li>
            <li className="list-disc ml-6 text-justify mb-2" key={'goal4'}>Integration of TSS widgets</li>
            <li className="list-disc ml-6 text-justify mb-2" key={'goal5'}>Provision of collection(s) via API Gateway</li>
          </ul>
          <Link className="btn mt-5 float-right" href="/incubators/new/" key={"new-incubator-anchor"}>Send us your request</Link>
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
                    <Image src={'/img/' + project.logo} width={project.logoW ?? 150} height={project.logoH ?? 150} alt={project.title} className="mx-auto"/>
                  </div>
                  <p className="header-3" key={'title'}><b>{project.title}</b></p>
                  <p className="header-4" >Status</p>
                  <div className="flex flex-wrap gap-2 mb-10" >
                    <span className="status-badge" key={project.status}>{project.status}</span>
                    <span className="cycle-badge" key={project.cycle}>Cycle {project.cycle}</span>
                  </div>
                  {
                    project.consortium.length !== 0 && (
                      <div>
                        <p className="header-4" >Related Consortia</p>
                        <div className="flex flex-wrap gap-2 mb-10" key={'tags'}>
                          {
                            project.consortium.map((consortia) => {
                              return (
                                  <span className="name-badge" key={consortia}>{consortia}</span>
                              )
                            })
                          }
                        </div>
                      </div>
                    )
                  }
                  <p className="header-4" >Duration</p>
                  <p key={'period'}>{`From ${project.start} To ${project.end}`}</p>
                  <p className="header-4" >Description</p>
                  <p className="text-justify" key={'description'}>{project.description}</p>
                  <div>
                    {
                      project.goals.length !== 0 && (
                        <div>
                          <p className="header-4" >Goals</p>
                          <ul>
                            {
                              project.goals.map((goals) => {
                                return (
                                  <li className="list-disc ml-6 text-justify mb-2 hover:bg-blue" key={goals}>{goals}</li>
                                )
                              })
                            }
                          </ul>
                        </div>
                      )
                    }
                  </div>
                  {
                    project.publications !== undefined && (
                      <div>
                        <p className="header-4" >Publications</p>
                        <ul key={project.publications}>
                          {
                            project.publications.map((publication) => {
                              return (
                                <li className="list-disc ml-6 text-justify mb-2 hover:underline">
                                  <a className="" href={publication} target={"_blank"} key={publication}>{publication}</a>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    )
                  }
                  {
                    project.activityPage !== undefined && (
                      <div>
                        <a className="btn float-right mt-5" href={project.activityPage} target={"_blank"} >Activity Page</a>
                      </div>
                      )
                  }
                </div>
              </>
            )
          })
        }

      </div>
    </>
  );
}
