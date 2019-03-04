
console.log("hello")
/* 
Create a new project sub-directory in your workspace/javascript directory.
Paste the array of student objects above into your JavaScript file.
Copy the createStudentComponent function into your code.
Add the following styles to your CSS.
*/

// 1. pasting the array 
const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]
// ======================== practice 1 ===========================

// Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.
const studentContainer = document.querySelector("#container")

// const createPassingComponenet = (name, subject, info, className) => {
//     return `
//     <div class="student">
//         <h1 class="xx-large ${className}">${name}</h1>
//         <section class="bordered dashed section--padded">${subject}</section>
//         <aside class="pushRight">${info}</aside>
//     </div>
//     `
// }
// for (const student of students) {
//     //let studentComponent = ""
//     if (student.score >= 60) {
//         studentContainer.innerHTML += createPassingComponenet(
//             student.name,
//             student.score,
//             student.subject,
//             "passing"
//         )
//     } else {
//         studentContainer.innerHTML += createPassingComponenet(
//             student.name,
//             student.score,
//             student.subject,
//             "failing"
//         )
//     }
// }
// ======================== practice 2 ===========================
/* 
Instead of defining four arguments for the createStudentComponent function, and then passing the individual properties when it is invoked, refactor the function to accept the entire object as a single argument.

Then refactor your string interpolation code to use the object properties.
*/
// const createPassingComponenet = (obj) => {
//     if (obj.score >= 60) {
//         return `
//         <div class="student">
//             <h1 class="xx-large passing">${obj.name}</h1>
//             <section class="bordered dashed section--padded">${obj.subject}</section>
//             <aside class="pushRight">${obj.info}</aside>
//         </div>
//         `
//     }else {
//         return `
//         <div class="student">
//             <h1 class="xx-large failing">${obj.name}</h1>
//             <section class="bordered dashed section--padded">${obj.subject}</section>
//             <aside class="pushRight">${obj.info}</aside>
//         </div>
//         `
//     }
// }

// for (const student of students) {
//     studentContainer.innerHTML += createPassingComponenet(
//         student
//     )
// }

// ======================== challenge 1 ===========================
/*
Write functions that build the sub-components of the larger student component.

h1
section
aside

Invoke those functions inside the createStudentComponent function to build the parent <div>.

*/
let h1 = (objName) => {
    return `<h1 class="xx-large passing">${objName}</h1>`
}

let section = (objSubject) => {
    return `<section class="bordered dashed section--padded">${objSubject}</section>`
}

let aside = (objInfo) => {
    return `<aside class="pushRight">${objInfo}</aside>`
}


const createStudentComponent = (student) => `
        <div id="student">
            ${h1(student.name)}
            ${section(student.subject)}
            ${aside(student.info)}
        </div>
    `

for (const student of students) { 
    studentContainer.innerHTML += createStudentComponent(
        student
    )
}

