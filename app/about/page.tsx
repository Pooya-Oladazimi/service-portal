import AboutPeople from "../ui/about/people";


export default function About() {
  return (
    <div className="md:col-span-3 grid grid-rows-1">
      <div className="grid grid-rows-1 mb-2" key={'goals'}>
        <p className="text-justify" key={1}>
          <b>Terminology Services 4 NFDI (TS4NFDI)</b> is a cross-domain initiative aimed at standardizing,
          harmonizing, and enhancing the management of terminologies across scientific disciplines within the
          German National Research Data Infrastructure (NFDI). Terminologies are critical for ensuring the semantic interoperability
          of research data, allowing researchers to clearly understand and reuse data across various disciplines.
          TS4NFDI addresses the complexities involved in managing diverse terminological resources by providing
          unified access to several terminology services through an integrated service architecture.
        </p>
        <p className="text-justify" key={2}>
          In the ongoing integration phase, TS4NFDI will extend features and available service components:
        </p>
        <ul>
          <li className="text-justify" key={1}>
            The Service Portal offers personalized access via Integration of IAM4NFDI and enables users to
            manage terminologies, entity sets, and access to licensed terminologies.
          </li>
          <li className="text-justify" key={2}>
            A Mapping Service, based on the Simple Standard for Sharing Ontology Mappings (SSSOM)
            and leveraging the Cocoda platform, will facilitate the creation, curation, and accessibility of terminology mappings.
          </li>
          <li className="text-justify" key={3}>
            TS4NFDI will enhance Terminology Curation Workflows to enable instant application of curated terminologies.
          </li>
          <li className="text-justify" key={4}>
            The backend architecture will be extended to integrate external terminology sources such as ICONCLASS.
          </li>
          <li className="text-justify" key={5}>
            The Terminology Service Suite (TSS) will gain new functionalities, including integration with the
            ANTELOPE tool for enhanced terminology search, visualization, and entity linking.
          </li>
          <li className="text-justify" key={6}>
            TSS widgets will be adapted for integration into Wikibase and the KGI4NFDI basic service.
          </li>
        </ul>
      </div>
      <AboutPeople key={'people'} />

    </div>
  );
}
