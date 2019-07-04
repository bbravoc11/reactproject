import { createStore, combineReducers } from 'redux';
import { Posts } from './posts';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

export const storeConfig = () => {
	const store = createStore(
			combineReducers({
				posts: Posts,
				comments: Comments,
				promotions: Promotions,
				leaders: Leaders
			})
		);
	return store;
}