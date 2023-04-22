import { NameSpace } from '../../const';
import { State } from '../../types/state';

const getError = (state: State) => state[NameSpace.App].error;

export { getError };
