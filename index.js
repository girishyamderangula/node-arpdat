// run `node index.js` in the terminal

let testCase2 = 
[
    { 
        name: "Leo Messi", 
        dob: "31-12-1995",
        sub: 
        { 
            biology: 100, chemistry: 80
        } 
    }, 
    
    {   name: "Cristiano Ronaldo",
        dob: "31-05-1992",
        sub: 
        { 
            biology: 80, chemistry: 100
        } 
    },
    
    { 
        name: "Virat Kohli",
        dob: "31-12-1995",
        sub: 
        { 
           biology: 30, chemistry: 40 
        } 
    },
    
    {
        name: "Rohit Sharma",
        dob: "31-12-1995",
        sub:
        {
            biology: 40,chemistry: 30  
        }
    },
    
    {
        name: "Viswanathan Anand",
        dob: "12-12-1994",
        sub:
        {
        biology: 99, chemistry: 10
        }
    },
    
];
let result = [];

testCase2.forEach
(
    student =>
    {
        result.push
        (
            {
              name: student.name,
              Totalmarks: Object.values(student.sub).reduce((a, b, c)  =>  (a + b + c ))
            }
        )
    }
);
console.log(result)