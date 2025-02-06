import '../ui/incubators/style.css';
import IncubatorsStatus from '../ui/incubators/status';


export default function Incubators() {

  return (
    <div className="md:col-span-3">
      <div className="gird grid-rows-1">
        <p className="header-1" key={'Incubatorsstatusheader'}>Incubators Projects</p>
        <IncubatorsStatus key={'Incubatorsstatus'}></IncubatorsStatus>
      </div>
    </div>
  );
}
