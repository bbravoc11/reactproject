import {POSTS} from '../shared/posts';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';

export const initialState = {
	posts: POSTS,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
};

export const Reducer = (state = initialState, action) => {
	return state;
}