'use strict';

class Office {

  constructor() {
    this.allMeetingRooms = [];
  }

  addMeetingRoom(meetingRoom) {
    return this.allMeetingRooms.push(meetingRoom);
  }

}
