const habits = [
    {
      title: "Running",
      timeOfDay: "Morning",
      goal: "Daily Once",
      startDate: "Today",
      isArchived:false
    },
    {
      title: "Drinking Water",
      timeOfDay: "Morning",
      goal: "Daily Thrice",
      startDate: "Tomorrow",
      isArchived:false
    },
    {
      title: "Meditating",
      timeOfDay: "Anytime",
      goal: "Daily Twice",
      startDate: "Next Week",
      isArchived:false
    },
    {
      title: "Reading",
      timeOfDay: "Evening",
      goal: "Daily Twice",
      startDate: "Next Month",
      isArchived:false
    },
    {
      title: "Yoga",
      timeOfDay: "Morning",
      goal: "Daily Thrice",
      startDate: "Today",
      isArchived:true
    },
    {
      title: "Journaling",
      timeOfDay: "Night",
      goal: "Daily Once",
      startDate: "Tomorrow",
      isArchived:true
    },
    {
      title: "Walking",
      timeOfDay: "Afternoon",
      goal: "Daily Twice",
      startDate: "Next Week",
      isArchived:false
    },
    {
      title: "Stretching",
      timeOfDay: "Anytime",
      goal: "Daily Once",
      startDate: "Next Month",
      isArchived:true
    }
  ];



const optionsGoal = ["Daily Once", "Daily Twice", "Daily Thrice"]
const optionsTimeOfDay = ["Anytime","Morning","Afternoon","Evening","Night"]
const optionsStartDate = ["Today","Tomorrow", "Next Week","Next Month"]



export {habits,optionsGoal,optionsStartDate,optionsTimeOfDay}