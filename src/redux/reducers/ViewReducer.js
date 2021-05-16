import _ from 'lodash';
import { combineReducers } from 'redux';
import * as types from '../types/ViewTypes';

const initialMainState = {
  currentView: 'home',
  l1: 'home',
  l2: '',
  l3: '',
  l4: '',
  isDarkMode: false,
};
const MainReducer = (state = _.cloneDeep(initialMainState), action) => {
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

const initialFeedState = {
  posts: [],
  postsObj: {},
};
const FeedReducer = (state = _.cloneDeep(initialFeedState), action) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case types.UPDATE_POST_LIKES:
      const idx = newState.posts.findIndex(post => post._id === action.payload._id);
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
      const postIdxComments = newState.posts.findIndex(post => post._id === action.payload._id);
      newState.posts[postIdxComments].comments = action.payload.comments;
      return newState;
    case types.CLEAR_FEED:
      return _.cloneDeep(initialFeedState);
    default:
      return newState;
  }
};

const initialProfileState = {
  activeProfileTab: 'posts',
  viewProfile: null,
};
const ProfileReducer = (state = _.cloneDeep(initialProfileState), action) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case types.UPDATE_PROFILE_TAB:
      newState.activeProfileTab = action.payload;
      return newState;
    case types.UPDATE_VIEW_PROFILE:
      return { ...newState, viewProfile: action.payload, ...action.payload };
    case types.CLEAR_PROFILE:
      return _.cloneDeep(initialProfileState);
    default:
      return newState;
  }
};

const initMessagesState = {
  activeConversationIdx: 0,
  activeConversationId: null,
  activeConversationObj: null,
  profileMap: null,
};
const MessagesReducer = (state = _.cloneDeep(initMessagesState), action) => {
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
});

export default ViewReducer;
