// nested destructuring 

**refer to array destructuring and Object destructuring for more clear understanding.

const users = [
    {userId: 1,firstName: 'harshit', gender: 'male'},
    {userId: 2,firstName: 'mohit', gender: 'male'},
    {userId: 3,firstName: 'nitish', gender: 'male'},
]

const [user1, user2, user3] = users;
        ==> user1 assigned the 1st element of the array users i.e the first object inside the array
        ==> user2 assigned the 2nd element of the array users i.e the second object inside the array
        ==> user3 assigned the 3rd element of the array users i.e the third object inside the array
        

const [ {a}, {b}, {c} ] = arrayName ===> {a} means destructuring object which is stored as the first element of the array
                                    ===> {b} means destructuring object which is stored as the second element of the array
                                    ===> {c} means destructuring object which is stored as the third element of the array
THIS IS DONE BELOW:

const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
    

console.log(user1firstName);
console.log(userId);
console.log(user3gender);
