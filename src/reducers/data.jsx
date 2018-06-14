// @flow
import { 
  POST_REQUEST,
  GET_POSTS_SUCCES,
  GET_POSTS_FAILUR,
} from '../actions/getPostAction';

type startState = {
  result: Array<any>,
  error: string,
  isLoading: boolean
}

const initialState:startState = {
  result: [],
  error: '',
  isLoading: false
};

export default function AllPosts(state:startState = initialState, action:any){
  switch (action.type) {
    case GET_POSTS_SUCCES:
      return {
        ...state, 
        result: action.payload,
        isLoading: true 
      };
    case GET_POSTS_FAILUR:
      return { 
        ...state, 
        error: action.payload,
        isLoading: true
       };  
    default:
      return state;
  }
};
