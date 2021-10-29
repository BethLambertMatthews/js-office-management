'use strict';

describe('MeetingRoom: ', () => {
  let meetingRoom;

  beforeEach(() => {
    meetingRoom = new MeetingRoom("Test Meeting Room", true);
  });

  describe('new meetingRoom object (constructor method): ', () => {
    it('should have a name', () => {
      expect(meetingRoom.name).toEqual("Test Meeting Room");
    });

    it('should be "available" by default', () => {
      expect(meetingRoom.roomAvailable).toEqual(true);
    });
  });

  describe('isAvailable: ', () => {
    it('should check if a meeting room is "available" ', () => {
      expect(meetingRoom.isAvailable()).toEqual("This room is available");
    });

    it('should display an error if meeting room is "not available" ', () => {
      meetingRoom.enterMeetingRoom(); // sets the room to "not available"
      expect(meetingRoom.isAvailable()).toEqual("Sorry, this room is not available");
    });
  });

  describe('enterMeetingRoom: ', () => {
    it('should make the meeting room "not available" when someone enters', () => {
      meetingRoom.enterMeetingRoom();
      expect(meetingRoom.roomAvailable).toEqual(false);
    });

    it('should not be possible to enter a room which is "not available" ', () => {
      meetingRoom.enterMeetingRoom(); // sets the room to "not available"
      expect(meetingRoom.enterMeetingRoom()).toEqual("Sorry, this room is not available");
      expect(meetingRoom.roomAvailable).toEqual(false);
    });
  });

  describe('leaveMeetingRoom: ', () => {
    it('should make the meeting room "available" when someone leaves', () => {
      meetingRoom.enterMeetingRoom(); // sets the room to "not available"
      meetingRoom.leaveMeetingRoom();
      expect(meetingRoom.roomAvailable).toEqual(true);
    });

    it('should not be possible to leave a room which is already empty and "available" ', () => {
      meetingRoom.enterMeetingRoom(); // sets the room to "not available"
      meetingRoom.leaveMeetingRoom(); // sets the room to "available"
      expect(meetingRoom.leaveMeetingRoom()).toEqual("This room is available");
      expect(meetingRoom.roomAvailable).toEqual(true);
    });
  });

});
