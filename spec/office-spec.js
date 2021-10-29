'use strict';

describe('Office: ', () => {
  let office;
  let spyMeetingRoom;

  beforeEach(() => {
    office = new Office();
    spyMeetingRoom = jasmine.createSpy('Room 1');
  });

  describe('new Office object (constructor method): ', () => {
    it('should have an empty list of "all meeting rooms" by default', () => {
      expect(office.allMeetingRooms).toEqual([]);
    });
  });

  describe('addMeetingRoom: ', () => {
    it('should add a new meeting room to the office', () => {
      office.addMeetingRoom(spyMeetingRoom);
      expect(office.allMeetingRooms).toEqual([spyMeetingRoom]);
    });
  });

  // Class: Office, method: addMeetingRoom(), removeMeetingRoom(), attribute: allMeetingRooms = [ ] array

});
