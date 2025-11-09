import React, { usestate} from 'react'


const Hero = () => {
    const [student,setstudent]=
    useState({
        name: "student name",
        age: null,
        subject: 'unknown'
    })
    const handleStudentInfo = () => {
        student({
            name:"nadia",
            age:20,
            subject:'cse'
        })
    }
console.log(student);
return(
    <div className='h-screen w-full bg-red-300 flex flex-row item-center justify-center gap-x-20'>

        <button oneclick= {handleStudentInfo}>change student info</button>
        </div>
)



}
export default Hero