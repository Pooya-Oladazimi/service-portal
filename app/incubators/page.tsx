import '../ui/incubators/style.css';
import IncubatorsStatus from '../ui/incubators/status';
import IncubatorProjects from '../ui/incubators/projects';
import { IncubatorProjectList } from '../ui/incubators/types';
import projectsJson from '../ui/incubators/projects.json';


export default async function Incubators() {

  return (
    <div className="md:col-span-3 w-full">
      <div className="gird grid-rows-1">
        <p className="header-1" key={'Incubatorsstatusheader'}>Incubators</p>
        <IncubatorsStatus key={'Incubatorsstatus'} projectsJson={projectsJson as IncubatorProjectList}></IncubatorsStatus>
        <br />
        <br />
        <p className="header-1" key={'IncubatorProjectsHeader'}>Projects</p>
        <IncubatorProjects key={'IncubatorProjects'} projectsJson={projectsJson as IncubatorProjectList}></IncubatorProjects>
      </div>
    </div>
  );
}
