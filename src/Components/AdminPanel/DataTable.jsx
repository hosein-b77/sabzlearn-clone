import React from 'react';

const DataTable = ({ title, headers, children }) => {

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-bold text-blue-600 mb-4">لیست {title}</h2>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">R</th>
                        {
                            headers.length>0 &&(
                                headers.map((header,index)=>{
                                    return(
                                        <th key={index} className="py-2 px-4 border-b">{header}</th>
                                    )
                                })
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        children
                    }
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
