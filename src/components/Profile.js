import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Profile = () => {
  return (
    <div className='flex flex-col justify-between items-center'>
      <div className='flex w-full justify-between'>
        <Link className="mx-10 w-3/12 my-10" to="/">
          <img src={logo} className='rounded-full' alt="Logo" loading="lazy" height={250} width={250} />
        </Link>
        <div className='flex flex-col w-7/12 mr-10 my-5 justify-between'>
          <div className='flex justify-between gap-x-10 my-4'>
            <h3 className='pt-4 mr-8'>UserName</h3>
            <button className=" bg-violet-300 rounded-2xl px-6 py-2 mx-8">Edit Profile</button>
          </div>
          <div className='flex justify-between text-xl my-4'>
            <span><p> 1200 problems solved || 4500 points </p></span>
          </div>
          <div>
            <p className='text-xl'>
            Description : The solution should help solve the lack of mentorship in education. Many students struggle 
                to find mentors aligned with their goals and interests. Existing systems often lack efficiency and 
                user-friendliness, affecting mentor-student connections. Because there is no such platform, students cannot 
                get guidance specific to their individual needs. 
            </p>
          </div>
        </div>
      </div>
      <div>
          <Link className="px-8" to="/">
            <img src={logo} alt="Logo" loading="lazy" />
          </Link>
          <Link className="px-8" to="/">
            <img src={logo} alt="Logo" loading="lazy" />
          </Link>
        </div>
    </div>
  );
};

export default Profile;
