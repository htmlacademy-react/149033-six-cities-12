import { AppDataState, appData, changeError } from './app-data';

describe('reducer: appData', () => {
  let state: AppDataState;

  beforeEach(() => {
    state = {
      error: null,
    };
  });

  it('Should return initial state without additional parameters', () => {
    expect(appData.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual(
      state
    );
  });

  it('changeError test', () => {
    expect(
      appData.reducer(
        state,
        changeError('error')
      )
    ).toEqual({ ...state, error: 'error'});
  });

});
