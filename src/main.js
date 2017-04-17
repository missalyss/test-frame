function dailyPlanner(day) {
  if(!day){
  return "Put an argument in, weirdo!"
  }

  var test = day.toLowerCase()

  if(test === 'saturday' || test === 'sunday'){
    return 'Weekend🍾'
  } else if (test === 'friday'){
    return 'TGIF!'
  } else if (test === 'monday' || test === 'tuesday' || test === 'wednesday' || test === 'thursday'){
    return 'working'
  } else{
    return 'That is not a day'
  }
}

module.exports = dailyPlanner
