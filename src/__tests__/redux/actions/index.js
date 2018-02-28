import actionGenerator from '../../../redux/actions';

describe('actionGenerator', () => {
  describe('should return undefined', () => {
    test('when action is not a string', () => {
      const action = actionGenerator(3);
      expect(action).toBe(undefined);
    });
  });

  describe('should return an object', () => {
    test('with \'type\' as a string', () => {
      const action = actionGenerator('');
      expect(typeof action.type).toBe('string');
    });

    test('with corect \'type\' and \'payload\'', () => {
      expect(actionGenerator('TEST_ACTION', 3))
        .toEqual({
          type: 'TEST_ACTION',
          payload: 3,
        });
    });
  });
});
