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
    if (this.roomAvailable === false) {
      return this.isAvailable();
    } else {
      return this.roomAvailable = false;
    }
  }

  leaveMeetingRoom() {
    if (this.roomAvailable === true) {
      return this.isAvailable();
    } else {
      return this.roomAvailable = true;
    }
  }

}
