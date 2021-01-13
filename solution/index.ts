import courses from './courses';
import studyGroups from './studyGroups';

type Course = {
    id: number,
    studyGroupId: number,
    title: string,
    keywords: string[],
    eventType: string
};

type StudyGroup = {
    id: number,
    courseId: number,
    title: string,
    keywords: string[],
    eventType: string
};

type SearchEventsOptions = {
    query: string | number,
    eventType: 'courses' | 'groups'
};

function searchEvents(options: SearchEventsOptions) {
    let events: (Course | StudyGroup)[] = options.eventType == 'courses' ? courses : studyGroups;
    return events.filter((event: Course | StudyGroup) => {
        if (typeof options.query == 'number') {
            return true ? event.id === options.query : false;
        }

        if (typeof options.query == 'string') {
            return true ? event.keywords.includes(options.query) : false;
        }
    })
}

let enrolledEvents: (Course | StudyGroup)[] = [];
function enroll(event: Course | StudyGroup) {
  enrolledEvents.push(event);
}

let results = searchEvents({query: 'art', eventType: 'courses'});
enroll(results[0]);

console.log(enrolledEvents);
