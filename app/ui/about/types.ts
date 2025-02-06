export type PersonData = {
  imagePath: string,
  name: string,
  affiliation: string,
  orcid: string
}

export type SectionData = {
  title: string,
  persons: PersonData[]
}

export type PeopleJsonData = {
  sections: SectionData[]
}
