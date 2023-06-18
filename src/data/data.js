const habits = [
    {
      id:"1",
      title: "Running",
      timeOfDay: "Morning",
      goal: "Daily Once",
      startDate: "Today",
      isArchived:false,
      repeat:"Weekly"
    },
    {
      id:"2",
      title: "Drinking Water",
      timeOfDay: "Morning",
      goal: "Daily Thrice",
      startDate: "Tomorrow",
      isArchived:false,
      repeat:"Daily"
    },
    {
      id:"3",
      title: "Meditating",
      timeOfDay: "Anytime",
      goal: "Daily Twice",
      startDate: "Next Week",
      isArchived:false,
      repeat:"Daily"
    },
    {
      id:"4",
      title: "Reading",
      timeOfDay: "Evening",
      goal: "Daily Twice",
      startDate: "Next Month",
      isArchived:false,
      repeat:"Weekly"
    },
    {
      id:"5",
      title: "Yoga",
      timeOfDay: "Morning",
      goal: "Daily Thrice",
      startDate: "Today",
      isArchived:true,
      repeat:"Weekly"
    },
    {
      id:"6",
      title: "Journaling",
      timeOfDay: "Night",
      goal: "Daily Once",
      startDate: "Tomorrow",
      isArchived:true,
      repeat:"Monthly"
    },
    {
      id:"7",
      title: "Walking",
      timeOfDay: "Afternoon",
      goal: "Daily Twice",
      startDate: "Next Week",
      isArchived:false,
      repeat:"Monthly"
    },
    {
      id:"8",
      title: "Stretching",
      timeOfDay: "Anytime",
      goal: "Daily Once",
      startDate: "Next Month",
      isArchived:true,
      repeat:"Daily"
    }
  ];



const optionsGoal = ["Daily Once", "Daily Twice", "Daily Thrice"]
const optionsRepeat = ["Daily", "Weekly", "Monthly"]
const optionsTimeOfDay = ["Anytime","Morning","Afternoon","Evening","Night"]
const optionsStartDate = ["Today","Tomorrow", "Next Week","Next Month"]



export {habits,optionsGoal,optionsStartDate,optionsTimeOfDay,optionsRepeat}