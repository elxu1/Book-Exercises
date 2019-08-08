/*
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
*/
for(let i = 0; i < 7; i++){
  let layer = "#";
  console.log(layer.repeat(i+1))
}
