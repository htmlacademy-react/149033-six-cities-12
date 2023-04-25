import { AuthorizationStatus } from '../../const';
import { UserTypeProcess } from '../../types/state';
import { makeFakeUserData } from '../../utils/mocks';
import { checkAuthAction, loginAction, logoutAction } from './api-actions';
import { userProcess } from './user-process';

const fakeUserData = makeFakeUserData();

describe('Reducer: userProcess', () => {
  let state: UserTypeProcess;

  beforeEach(() => {
    state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userData: null,
    };
  });

  it('Should return initial state without additional parameters', () => {
    expect(userProcess.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual(state);
  });

  describe('Action: checkAuthAction', () => {
    it('should update the status to "Auth" and return "userProcess" if checkAuthAction fulfilled', () => {
      expect(
        userProcess.reducer(state, {
          type: checkAuthAction.fulfilled.type,
          payload: fakeUserData,
        })
      ).toEqual({
        authorizationStatus: AuthorizationStatus.Auth,
        userData: fakeUserData,
      });
    });

    it('should update the status to "NoAuth" if checkAction rejected', () => {
      expect(
        userProcess.reducer(state, { type: checkAuthAction.rejected.type })
      ).toEqual({
        authorizationStatus: AuthorizationStatus.NoAuth,
        userData: null,
      });
    });
  });

  describe('Action: loginAction', () => {
    it('should update the status to "Auth" and return "userProcess" if loginAction.fulfilled', () => {
      expect(
        userProcess.reducer(state, {
          type: loginAction.fulfilled.type,
          payload: fakeUserData,
        })
      ).toEqual({
        authorizationStatus: AuthorizationStatus.Auth,
        userData: fakeUserData,
      });
    });

    it('should update the status to "NoAuth" if loginAction rejected', () => {
      expect(
        userProcess.reducer(state, { type: loginAction.rejected.type })
      ).toEqual({
        authorizationStatus: AuthorizationStatus.NoAuth,
        userData: null,
      });
    });
  });

  describe('Action: logoutAction', () => {
    it('should update the status to "NoAuth" if logoutAction.fulfilled', () => {
      expect(
        userProcess.reducer(state, { type: logoutAction.fulfilled.type })
      ).toEqual({
        authorizationStatus: AuthorizationStatus.NoAuth,
        userData: null,
      });
    });
  });
});
