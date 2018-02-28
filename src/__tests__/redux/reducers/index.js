import { navigation, app } from '../../../redux/reducers';
import actionGenerator from '../../../redux/actions';
import { pages, actions } from '../../../redux/constants';

describe('reducers', () => {
  describe('navigation reducer', () => {
    test('should return new state with page set to dispatched payload', () => {
      expect(navigation(
        { page: pages.LEADER_BOARD },
        actionGenerator(actions.SWITCH_PAGE, pages.QUIZ),
      ))
        .toEqual({
          page: pages.QUIZ,
        });
    });
  });

  describe('app reducer', () => {
    describe('should return default state with empty array of questions', () => {
      test(`when ${actions.SET_QUESTIONS} is dispatched without prevState`, () => {
        expect(app(undefined, actionGenerator(actions.SET_QUESTIONS, [])))
          .toEqual({
            questions: [],
          });
      });
    });

    describe('should return default state with empty array of questions', () => {
      test(`when ${actions.SET_QUESTIONS} is dispatched without prevState`, () => {
        const currentState = {
          questions: [
            {
              id: 1,
              question: 'sample question',
              options: ['a', 'b', 'c', 'd'],
            },
            {
              id: 2,
              question: 'sample question',
              options: ['a', 'b', 'c', 'd'],
            },
          ],
        };

        expect(app(currentState, actionGenerator(actions.SET_QUESTIONS, [])))
          .toEqual({
            questions: [],
          });
      });
    });
  });
});

