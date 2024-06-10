import React from 'react';

const AdminIndexPageCard = ({ title, amount, percentage, description }) => {
    
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 grow">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-3xl font-bold text-blue-700 "><span className='text-blue-800'>--</span>{title}<span className='text-blue-800'>--</span></h3>
                {/* <span className="text-2xl">{title === 'فروش' ? '🛒' : '💰'}</span> */}
            </div>
            <div className="flex gap-x-16 items-baseline mb-2">
                <span className="text-2xl font-bold">{amount}</span>
                {/* <span className="text-green-500 ml-1">{percentage}</span> */}
            </div>
            {/* <p className="text-gray-500">{description}</p> */}
        </div>
    );
};

export default AdminIndexPageCard;
