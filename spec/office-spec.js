'use strict';

describe('Office: ', () => {
  let office;

  beforeEach(() => {
    office = new Office();
  });

    describe('new Office object (constructor method): ', () => {
      it('should have an empty list of "all meeting rooms" by default', () => {
        expect(office.allMeetingRooms).toEqual([]);
      });
  });
});
