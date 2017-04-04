import { Event } from '../models/event';

export class EventDummyData {

    getEvents(): Event[] {
        let e1 = new Event();
        e1.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor rhoncus erat, imperdiet sollicitudin nulla luctus et. Donec ut mauris euismod, viverra tortor a, gravida arcu. Curabitur finibus vestibulum pretium. Nunc auctor, sem aliquam consequat ultricies, lacus leo condimentum felis, dapibus aliquet elit odio pellentesque tellus. Phasellus velit metus, lobortis id varius vel, maximus at neque. Cras facilisis maximus urna et blandit. Duis porttitor sed dui quis convallis. Sed posuere erat fermentum tempor congue. Curabitur commodo est ac massa pellentesque, id elementum tortor venenatis. Donec ac mauris sit amet odio lacinia finibus vitae eget mauris. Nulla viverra facilisis lacus ut rutrum. Maecenas suscipit sit amet ante a ornare. Sed pulvinar lorem non odio auctor aliquet. Sed ornare enim eget velit mollis gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget ultricies urna.";
        e1.eventDate = new Date();
        e1.creationDate = new Date();
        e1.title = "Title1";
        e1.location = "BCIT";

        let e2 = new Event();
        e2.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor rhoncus erat, imperdiet sollicitudin nulla luctus et. Donec ut mauris euismod, viverra tortor a, gravida arcu. Curabitur finibus vestibulum pretium. Nunc auctor, sem aliquam consequat ultricies, lacus leo condimentum felis, dapibus aliquet elit odio pellentesque tellus. Phasellus velit metus, lobortis id varius vel, maximus at neque. Cras facilisis maximus urna et blandit. Duis porttitor sed dui quis convallis. Sed posuere erat fermentum tempor congue. Curabitur commodo est ac massa pellentesque, id elementum tortor venenatis. Donec ac mauris sit amet odio lacinia finibus vitae eget mauris. Nulla viverra facilisis lacus ut rutrum. Maecenas suscipit sit amet ante a ornare. Sed pulvinar lorem non odio auctor aliquet. Sed ornare enim eget velit mollis gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget ultricies urna.";
        e2.eventDate = new Date();
        e2.creationDate = new Date();
        e2.title = "Title2";
        e2.location = "Vancouver";

        let e3 = new Event();
        e3.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor rhoncus erat, imperdiet sollicitudin nulla luctus et. Donec ut mauris euismod, viverra tortor a, gravida arcu. Curabitur finibus vestibulum pretium. Nunc auctor, sem aliquam consequat ultricies, lacus leo condimentum felis, dapibus aliquet elit odio pellentesque tellus. Phasellus velit metus, lobortis id varius vel, maximus at neque. Cras facilisis maximus urna et blandit. Duis porttitor sed dui quis convallis. Sed posuere erat fermentum tempor congue. Curabitur commodo est ac massa pellentesque, id elementum tortor venenatis. Donec ac mauris sit amet odio lacinia finibus vitae eget mauris. Nulla viverra facilisis lacus ut rutrum. Maecenas suscipit sit amet ante a ornare. Sed pulvinar lorem non odio auctor aliquet. Sed ornare enim eget velit mollis gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget ultricies urna.";
        e3.eventDate = new Date();
        e3.creationDate = new Date();
        e3.title = "Title3";
        e3.location = "Edmonton";

        let array: Event[] = new Array<Event>();

        array.push(e1, e2, e3);

        return array;
    }
}