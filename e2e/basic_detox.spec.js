const { reloadApp } = require('detox-expo-helpers');

describe('Creating a message', () => {
  beforeEach(async () => {
    await reloadApp();
  });
  
  it('should add the message to the list', async () => {
    await expect(element(by.id('onlyView'))).toBeVisible();
  });
});
