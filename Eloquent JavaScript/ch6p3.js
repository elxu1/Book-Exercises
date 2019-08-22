/*
Make the Group class from the previous exercise iterable. Refer to the section
about the iterator interface earlier in the chapter if you aren’t clear on the
exact form of the interface anymore.
If you used an array to represent the group’s members, don’t just return the
iterator created by calling the Symbol.iterator method on the array. That
would work, but it defeats the purpose of this exercise.
It is okay if your iterator behaves strangely when the group is modified during
iteration.
*/

// From previous exercise
class Group {
  constructor(){
    this.values = [];
  }
  
  add(newValue){
    // Add if the value isn't there
    if(!this.has(newValue)){
      this.values.push(newValue); 
    }
  }
  
  delete(value){
    let index = this.values.indexOf(value);
    if(index != -1){
      this.values.splice(index, 1);
    }
  }
  
  has(value){
    return (this.values.indexOf(value) != -1);
  }
  
  getValue(index){
    return this.values[index];
  }
  
  get length(){
    return this.values.length;
  }
  
  static from(group){
    let newGroup = new Group();
    for(let value of group){
      if(!newGroup.has(value)){
         newGroup.add(value);
      }
    }
    return newGroup;
  }
  
  [Symbol.iterator] = function(){
    return new GroupIterator(this);
  }

}

class GroupIterator{
  constructor(group){
    this.group = group;
    this.index = 0;
  }
  
  // Iterator interface
  // Next function that returns an object
  // Properties are value and done
  next(){
    if(this.index == this.group.length){ 
      return {done: true};
    } else {
      let groupItr = {
        value: this.group.getValue(this.index),
        done: false
      };
      this.index++;
      return groupItr;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
