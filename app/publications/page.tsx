import publicationsInfo from './publications.json';

type Publication = {
  citation: string,
  doi: string,
  type: "presentatoin" | "proposal" | "poster" | "software"
}

export default function Publications() {
  return (
    <div className="col-span-3">
      {
        (publicationsInfo as Publication[]).map((pub: Publication, i: number) => {
          return (
            <div className='card' key={pub.doi}>
              <div className='inline' key={"citation"}>{`${i + 1}. ${pub.citation}`}</div>
              <span className='name-badge' key={"type"}>{pub.type}</span>
              <br />
              <a href={pub.doi} target='_blank' key={"doi"}>{pub.doi}</a>
            </div>
          )
        })

      }
    </div>
  );
}
