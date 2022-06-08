// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

what if we want to make the value of 'key1' i.e 'objvalue1' as the key of our any object named 'obj'??
Eg: this is what our object should look like:
  // const obj = {
  //     objkey1 : "myvalue1",
  //     objkey2 : "myvalue2",
  // }

this is how it shall be done:

  // const obj = {
  //     [key1] : value1,
  //     [key2] : value2
  // }

another way to do this:

  const obj = {}; //declaring an empty object

  obj[key1] = value1;
  obj[key2] = value2;
  console.log(obj);

