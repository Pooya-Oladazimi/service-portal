import eventsInfo from './events.json';
import { getCurrentDate } from '../libs/toolkit';


type Event = {
  name: string,
  date: string,
  formal_date: string
}


export default function Events() {

  const now = getCurrentDate();
  const pastEvents = (eventsInfo as Event[]).filter((ev) => ev.formal_date < now);
  const upcomingEvents = (eventsInfo as Event[]).filter((ev) => ev.formal_date >= now);

  pastEvents.sort((o1: Event, o2: Event) => {
    if (o1.formal_date < o2.formal_date) {
      return 1;
    }
    return -1;
  });

  upcomingEvents.sort((o1: Event, o2: Event) => {
    if (o1.formal_date < o2.formal_date) {
      return 1;
    }
    return -1;
  })


  return (
    <div className='col-span-3'>
      <p className='header-2'>Upcoming Events</p>
      <div className='grid grid-cols-4' key={'upcoming'}>
        {
          upcomingEvents.map((ev) => {
            return (
              <div className='card-sm' key={ev.name}>
                <div key={'name'}>
                  <p>{ev.name}</p>
                </div>
                <p key={'date'}>{ev.date}</p>
              </div>
            )
          })
        }
      </div>
      <p className='header-2'>Past Events</p>
      <div className='grid grid-cols-4' key={'past'}>
        {
          pastEvents.map((ev) => {
            return (
              <div className='card-sm' key={ev.name}>
                <div key={'name'}>
                  <p>{ev.name}</p>
                </div>
                <p key={'date'}>{ev.date}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
