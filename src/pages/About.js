import React from "react";

const About = () => {
    return (
        <div className="flex flex-col bg-blue-100 items-center w-5/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
            <div className="text-2xl my-4 font-bold">Domain : Education and Technology</div>
            <div className="text-xl my- font-semibold">Problem Statement : Develop a streamlined platform for addressing the lack of personalized mentorship 
                using efficient mentor matching, and ensuring tailored and effective mentorship experiences. 
            </div>
            <div className="text-xl my-4 font">
                Description : The solution should help solve the lack of mentorship in education. Many students struggle 
                to find mentors aligned with their goals and interests. Existing systems often lack efficiency and 
                user-friendliness, affecting mentor-student connections. Because there is no such platform, students cannot 
                get guidance specific to their individual needs. This problem requires the development of a system that 
                allows students to easily input their preferences and provides a smoother process for mentor matching, 
                ensuring personalized, effective mentorship experiences for educational and career growth.

            </div>
        </div>
    );
};

export default About;