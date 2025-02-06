import Image from "next/image";


export default function IncubatorsStatus() {
  const [imgW, imgH] = [200, 200];
  const [completed, ongoing, pending] = [0, 3, 0];


  return (
    <>
      <div className="grid md:grid-cols-3 gap-10 grid-rows-1">
        <div className="flex lg:gap-10 md:gap-3 status-card" key={'completed'}>
          <div className="relative w-[160px] h-[160px] ml-6">
            <Image src={'/img/completed.png'} fill alt="completed"></Image>
          </div>
          <p className="lg:text-xl ">Completed: <b>{completed}</b></p>
        </div>
        <div className="flex lg:gap-10 md:gap-3 status-card" key={'ongoing'}>
          <div className="relative w-[200px] h-[200px]">
            <Image src={'/img/ongoing.png'} fill alt="ongoing"></Image>
          </div>
          <p className="lg:text-xl ">In Progress: <b>{ongoing}</b></p>
        </div>
        <div className="flex lg:gap-10 md:gap-3 status-card" key={'pending'}>
          <div className="relative w-[200px] h-[200px]">
            <Image src={'/img/pending.png'} fill alt="pending"></Image>
          </div>
          <p className="lg:text-xl">Planned: <b>{pending}</b></p>
        </div>
      </div>
    </>
  );
}
