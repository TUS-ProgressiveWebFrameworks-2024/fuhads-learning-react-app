const Day = () => {
//created an array of days of the week 
    const WeekDays=[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",


    ];
const date = new Date ();

const dayAsNumber= date.getDay();

return <div>Today is {WeekDays[dayAsNumber]}</div>;
}
export default Day;