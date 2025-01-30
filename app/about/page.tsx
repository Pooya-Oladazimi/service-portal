import AboutPeople from "../ui/about/people";


export default function About() {
  return (
    <div className="md:col-span-10 sm:row-span-1 gap-4">
      <div className="grid grid-rows-1 mb-20">
        <p className="header-1">Goals</p>
        <p className="text-justify">
          Currently, TS4NFDI is in the initialization phase with the following goals:
          to create a comprehensive overview of all consortia and the terminologies and
          related services in use – as well as their requirements and relevant use cases.
          Based on the development of a detailed architecture, a first pilot should at least
          integrate three different terminology service platforms into an aligned terminology
          service backend.
        </p>
      </div>
      <AboutPeople />

    </div>
  );
}
