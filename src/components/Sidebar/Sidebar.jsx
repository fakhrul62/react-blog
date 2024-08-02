import PropTypes from 'prop-types';

const Sidebar = ({title, credit, price}) => {
    return (
        <div className='w-1/4'>
            <div className='bg-white rounded-xl p-6 sticky top-24'>
                <h3 className='font-bold text-blue-600 text-lg'>Credit Hour Remaining {20-credit} hr</h3>
                <hr className='my-4' />
                <h3 className='font-bold text-black text-xl mb-5'>Course Name</h3>
                <div className='px-6'>
                    <ol className='list-decimal'>
                        {
                            title.map((title, idx)=> <li className='text-gray-600' key={idx}>{title}</li>)
                        }
                    </ol>
                </div>
                <hr className='my-4' />
                <h3 className='font-semibold text-zinc-600'>Total Credit Hour : {credit} </h3>
                <hr className='my-4' />
                <h3 className='font-semibold text-zinc-600'>Total Price : {price} USD </h3>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    title: PropTypes.any,
    credit: PropTypes.any,
    price: PropTypes.any,
};

export default Sidebar;