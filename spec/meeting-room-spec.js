'use strict';

describe('MeetingRoom: ', () => {
  let meetingRoom;

  beforeEach(() => {
    meetingRoom = new MeetingRoom("Test Meeting Room");
  });

  describe('new meetingRoom object (constructor method): ', () => {
    it('should have a name', () => {
      expect(meetingRoom.name).toEqual("Test Meeting Room");
    });

  });

});