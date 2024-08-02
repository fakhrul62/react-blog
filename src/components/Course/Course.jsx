import PropTypes from 'prop-types';
import { FaDollarSign } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa6";


const Course = ({course, handleSelect}) => {
    const {image, title, description, price, credit} = course;
    return (
        <div className='bg-white rounded-xl p-6'>
            <img className='w-full object-cover' src={image} alt={title} />
            <h3 className='mt-3 font-bold text-lg'>{title}</h3>
            <p className='mt-3 text-gray-500 text-base'>{description}</p>
            <div className='flex justify-between items-center mt-3'>
                <span className='flex items-center gap-1 text-gray-500'><FaDollarSign className='text-gray-800' /> Price: {price}</span>
                <span className='flex items-center gap-2 text-gray-500'><FaBookOpen className='text-gray-800' />Credit: {credit}hr</span>
            </div>
            <button onClick={()=> handleSelect(title, credit, price)} className='bg-blue-600 w-full py-2 rounded-xl mt-4 text-white font-semibold' type="button">Select</button>
            
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.any,
    handleSelect: PropTypes.func,
};

export default Course;