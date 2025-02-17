import { InucbatorsStatusCmpProps, ProjectStatus } from "./types";


export default function IncubatorsStatus(props: InucbatorsStatusCmpProps) {
  const stats = props.projectsJson.stats;


  return (
    <>

      <div className="grid md:grid-cols-3 grid-rows-1 gap-10">
        {
          Object.keys(stats).map((key) => {
            let status = key as ProjectStatus;
            return (
              <div className="status-card" key={status}>
                <p className="lg:text-xl ">{status}: <b>{stats[status]}</b></p>
              </div>
            )
          })
        }

        {/* <div className="flex lg:gap-10 md:gap-3 status-card" key={'completed'}> */}
        {/*   <div className="relative w-[160px] h-[160px] ml-6"> */}
        {/*     <Image src={'/img/completed.png'} fill alt="completed"></Image> */}
        {/*   </div> */}
        {/*   <p className="lg:text-xl ">Completed: <b>{completed}</b></p> */}
        {/* </div> */}
      </div>
    </>
  );
}
