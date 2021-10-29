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
  });

  describe('enterMeetingRoom: ', () => {
    it('should make the meeting room "not available" when someone enters', () => {
      meetingRoom.enterMeetingRoom();
      expect(meetingRoom.roomAvailable).toEqual(false);
    });
  });

  describe('leaveMeetingRoom: ', () => {
    it('should make the meeting room "available" when someone leaves', () => {
      meetingRoom.enterMeetingRoom(); // sets the room to "not available"
      meetingRoom.leaveMeetingRoom();
      expect(meetingRoom.roomAvailable).toEqual(true);
    });
  });


  // Class: MeetingRoom, method: leaveMeetingRoom, attribute: roomAvailable => true
});