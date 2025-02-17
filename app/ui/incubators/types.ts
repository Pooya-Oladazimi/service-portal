export type Person = {
  person: string,
  consortium: string[]
}

export type Project = {
  title: string,
  description: string,
  consortium: string[],
  contactPersons: Person[],
  logo: string,
  logoW?: number,
  logoH?: number
}

export type ProjectStatus = "In preparation" | "Running" | "Requested" | "Finished" | "First contact" | "Postponed";

export type IncubatorProjectList = {
  projects: Project[],
  stats: {
    [key in ProjectStatus]: number
  }
}

export type InucbatorsStatusCmpProps = {
  projectsJson: IncubatorProjectList
}
