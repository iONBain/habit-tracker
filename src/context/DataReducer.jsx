export const initialState = {
    habits: [],
    optionsGoal: [],
    optionsTimeOfDay: [],
    optionsStartDate:[],
    showPopup:false
  };
  
  export function dataReducer(state, action) {
    switch (action.type) {
      case "SET_HABITS":
        return {
          ...state,
          habits: action.payload.map((habit) => ({
            ...habit
          }))
        };
  
      
      default:
        throw new Error("Error in reducer");
    }
  }
  