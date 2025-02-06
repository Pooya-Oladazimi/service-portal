export type personData = {
  imagePath: string,
  name: string,
  affiliation: string,
  orcid: string
}

export type sectionData = {
  title: string,
  persons: personData[]
}

export type peopleJsonData = {
  sections: sectionData[]
}
