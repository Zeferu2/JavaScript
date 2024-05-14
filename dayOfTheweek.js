let dayOfWeek = 8;
let nameofDay;

switch (dayOfWeek) {
    case 1:
        nameofDay = 'Sunday';
        break;
    case 2:
        nameofDay = 'Monday';
        break;
    case 3:
        nameofDay = 'Tuesday';
        break;
    case 4:
        nameofDay = 'Wednesday';
        break;
    case 5:
        nameofDay = 'Thursday';
        break;
    case 6:
        nameofDay = 'Friday';
        break;
    case 7:
        nameofDay = 'Saturday';
        break;
   
    default:
        nameofDay = 'Invalid Day';
}

console.log(
    `Day of the weak: ${nameofDay}
     In put day of the weak: ${dayOfWeek}`);