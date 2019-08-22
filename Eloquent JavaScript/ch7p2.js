/*
Can you write a robot that finishes the delivery task faster than goalOrientedRobot? 
If you observe that robot’s behavior, what obviously stupid things does it do? 
How could those be improved?
If you solved the previous exercise, you might want to use your compareRobots
function to verify whether you improved the robot.
*/

function yourRobot(village, route){
  // Drop them off if they are conveniently on route
  let {place, parcels} = village;
  
  if(route.length == 0){
    // Go get all the parcels first
    for(let parcel of parcels){
      if(parcel.place != place){
        route = findRoute(roadGraph, place, parcel.place);
      }
    }
    
    // If all the parcels are picked up
    if(route.length == 0){
      route = findRoute(roadGraph, place, parcels[0].address);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

memory = [];

runRobotAnimation(VillageState.random(), yourRobot, memory);
