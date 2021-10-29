'use strict';

class Office {
  constructor() {
    this._officeRooms = [];  // _officeRooms private object
  }

  allMeetingRooms() {
    return this._officeRooms;  // method accesses private object
  }

  addMeetingRoom(meetingRoom) {
    return this._officeRooms.push(meetingRoom);
  }

  removeMeetingRoom(meetingRoom) {
    return this._officeRooms.pop(meetingRoom);
  }
}
