import * as fromBusinessOwner from './business-owner.actions';

describe('loadBusinessOwners', () => {
  it('should return an action', () => {
    expect(fromBusinessOwner.loadBusinessOwners().type).toBe('[BusinessOwner] Load BusinessOwners');
  });
});
