import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';

const Courses = ({handleSelect}) => {
    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('course.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    }, [])
    return (
        <div className='w-3/4 grid grid-cols-3 gap-5'>
           {
                courses.map((course, idx) => <Course key={idx} handleSelect={handleSelect} course={course}></Course> )
            }
        </div>
    );
};

Courses.propTypes = {
    handleSelect: PropTypes.func,
};

export default Courses;
