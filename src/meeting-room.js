'use strict';

class MeetingRoom {
  
  constructor(name, roomAvailable) {
    this.name = name;
    this.roomAvailable = true;
  }

  isAvailable() {
    if (this.roomAvailable === true) {
      return "This room is available";
    } else {
      return "Sorry, this room is not available";
    }
  }

  enterMeetingRoom() {
    return this.roomAvailable = false;
  }

  leaveMeetingRoom() {
    return this.roomAvailable = true;
  }

}
