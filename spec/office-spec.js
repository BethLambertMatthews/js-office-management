'use strict';

describe('Office: ', () => {
  let office;
  let spyMeetingRoom;

  beforeEach(() => {
    office = new Office();
    spyMeetingRoom = jasmine.createSpyObj('Room 1',['this.name']);
  });

  describe('new Office object (constructor method): ', () => {
    it('should have an empty list of "all meeting rooms" by default', () => {
      expect(office.allMeetingRooms()).toEqual([]);
    });
  });

  describe('addMeetingRoom: ', () => {
    it('should add a new meeting room to the office', () => {
      office.addMeetingRoom(spyMeetingRoom);
      expect(office.allMeetingRooms()).toEqual([spyMeetingRoom]);
    });
  });

  describe('removeMeetingRoom: ', () => {
    it('should remove a meeting room from the office', () => {
      office.addMeetingRoom(spyMeetingRoom);
      office.removeMeetingRoom(spyMeetingRoom);
      expect(office.allMeetingRooms()).toEqual([]);
    });
  });
  
});
