import '../ui/incubators/style.css';
import IncubatorsStatus from '../ui/incubators/status';
import IncubatorProjects from '../ui/incubators/projects';
import { readJsonFile } from '../libs/utils';
import { IncubatorProjectList } from '../ui/incubators/types';


export default async function Incubators() {


  const projectsJson = await readJsonFile('/app/ui/incubators/projects.json') as IncubatorProjectList;

  return (
    <div className="md:col-span-3">
      <div className="gird grid-rows-1">
        <p className="header-1" key={'Incubatorsstatusheader'}>Incubators</p>
        <IncubatorsStatus key={'Incubatorsstatus'} projectsJson={projectsJson}></IncubatorsStatus>
        <br />
        <br />
        <p className="header-1" key={'IncubatorProjectsHeader'}>Projects</p>
        <IncubatorProjects key={'IncubatorProjects'}></IncubatorProjects>
      </div>
    </div>
  );
}
