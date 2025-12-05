// importance for react

const Course={
    courseNAMe:"kowshik and jS",
    Price:"free",
    CourseTIME:"22_hour"
}

// normally use ----COurse.COurseNAME

// but here we use object destructure
const{courseNAMe:ck}=Course
console.log(ck)


// HOW TO CREATE JSON
// {
//    " name":"kowshik",
//     "COURSEname":"learn jS",
//    " Price":"121"
// }