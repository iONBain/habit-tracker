import { habits } from "../data/data";

export const initialState = {
    habits: [],
    optionsGoal: [],
    optionsTimeOfDay: [],
    optionsStartDate:[],
    showPopup:false,
    editHabit:{}
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
      case "SET_SHOW_POPUP":
        return {
          ...state,
          showPopup:action.payload
        }
      case "ADD_HABIT":
        return {
          ...state,
          habits: [...state.habits, action.payload]
        }
      case "SET_EDIT_HABIT":
        return {
          ...state,
          editHabit: action.payload
        }
      case "ARCHIVE_HABIT":
        return {
          ...state,
          habits: habits.map(habit=> habit.id === action.payload ? {...habit, isArchived:true }: habit)
        }
      case "DELETE_HABIT":
        return {
          ...state,
          habits: [...habits].filter(habit=> habit.id !== action.payload)
        }
      default:
        throw new Error("Error in reducer");
    }
  }
  