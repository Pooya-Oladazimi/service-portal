import '../ui/incubators/style.css';
import IncubatorsStatus from '../ui/incubators/status';
import IncubatorProjects from '../ui/incubators/projects';


export default function Incubators() {

  return (
    <div className="md:col-span-3">
      <div className="gird grid-rows-1">
        <p className="header-1" key={'Incubatorsstatusheader'}>Incubators</p>
        <IncubatorsStatus key={'Incubatorsstatus'}></IncubatorsStatus>
        <br />
        <br />
        <p className="header-1" key={'IncubatorProjectsHeader'}>Projects</p>
        <IncubatorProjects key={'IncubatorProjects'}></IncubatorProjects>
      </div>
    </div>
  );
}
