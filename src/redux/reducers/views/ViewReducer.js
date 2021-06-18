import _ from 'lodash';
import { combineReducers } from 'redux';
import * as types from '../../types/ViewTypes';
import * as states from '../../initialStates/views';
import StartupReducer from './StartupReducer';
import SearchReducer from './SearchReducer';
import ProfileReducer from './ProfileReducer';

const MainReducer = (state = _.cloneDeep(states.main), action) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case types.UPDATE_L1:
      newState.l1 = action.payload;
      return newState;
    case types.UPDATE_VIEW:
      newState.currentView = action.payload;
      return newState;
    case types.IS_DARK_MODE:
      newState.isDarkMode = action.payload;
      return newState;
    default:
      return newState;
  }
};

const RecommendedConnectionsReducer = (state = _.cloneDeep([]), action) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case types.UPDATE_RECOMMENDED_CONNECTIONS:
      return action.payload;
    default:
      return newState;
  }
};

const FeedReducer = (state = _.cloneDeep(states.feed), action) => {
  const newState = _.cloneDeep(state);
  let idx;
  switch (action.type) {
    case types.UPDATE_POST_REPOSTS:
      idx = newState.posts.findIndex(post => post._id === action.payload._id);
      newState.posts[idx].reposts = action.payload.reposts;
      return newState;
    case types.UPDATE_POST_LIKES:
      idx = newState.posts.findIndex(post => post._id === action.payload._id);
      newState.posts[idx].likes = action.payload.likes;
      return newState;
    case types.UPDATE_POSTS_ARR:
      newState.posts = action.payload;
      return newState;
    case types.UPDATE_POSTS_OBJ:
      newState.postsObj = action.payload;
      return newState;
    case types.UPDATE_POST_COMMENTS:
      console.log('adding/updating/deleting a comment', action.payload)
      console.log('newState.posts', newState.posts)
      const postIdxComments = newState.posts.findIndex(post => post._id === action.payload.postId);
      console.log('postIdxComments', postIdxComments)
      console.log('newState.posts[postIdxComments]', newState.posts[postIdxComments])
      // newState.posts[postIdxComments].comments = action.payload.commentsArr;
      return newState;
    case types.CLEAR_FEED:
      return _.cloneDeep(initialFeedState);
    default:
      return newState;
  }
};

const MessagesReducer = (state = _.cloneDeep(states.messages), action) => {
  const newState = _.cloneDeep(state);
  const { payload } = action;
  switch (action.type) {
    case types.UPDATE_ACTIVE_CONVERSATION_IDX:
      newState.activeConversationIdx = payload;
      return newState;
    case types.UPDATE_ACTIVE_CONVERSATION_ID:
      newState.activeConversationId = payload;
      return newState;
    case types.UPDATE_ACTIVE_CONVERSATION:
      if (payload.conversationId === undefined || payload.idx === undefined) {
        alert('Please use id or idx');
      }
      newState.activeConversationId = payload.conversationId;
      newState.activeConversationIdx = payload.idx;
      newState.activeConversationObj = null;
      return newState;
    case types.UPDATE_ACTIVE_CONVERSATION_OBJ:
      newState.activeConversationObj = payload;
      return newState;
    case types.UPDATE_PROFILE_MAP:
      newState.profileMap = payload;
      return newState;
    default:
      return newState;
  }
};

const ViewReducer = combineReducers({
  main: MainReducer,
  profile: ProfileReducer,
  messages: MessagesReducer,
  feed: FeedReducer,
  startup: StartupReducer,
  search: SearchReducer,
  recommendedConnections: RecommendedConnectionsReducer,
});

export default ViewReducer;
