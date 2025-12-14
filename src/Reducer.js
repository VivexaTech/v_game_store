export default function Reducer(state, action){
    switch(action.type){
    case "loaddata":
      return {
        ...state,
        loading: true,
      };
        
    case "success":
      return {
        loading: false,
        deals: action.payload,
      };  
    }
}