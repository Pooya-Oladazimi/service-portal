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

export type IncubatorProjectList = {
  projects: Project[]
}
