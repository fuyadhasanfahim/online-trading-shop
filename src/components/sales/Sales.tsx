import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

export default function Sales() {
    const navigate = useNavigate();

    const handleNewSalesNavigate = () => {
        navigate('/new-sales');
    };

    const handleSalesInvoiceNavigate = () => {
        navigate('/sales-invoice/35000009');
    };

    return (
        <>
            <div className="w-full sm:px-6">
                <div className="px-4 md:px-10 py-4 md:py-7">
                    <div className="sm:flex items-center justify-between">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                            Recent sales history
                        </p>
                        <div>
                            <button
                                className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-green-500 hover:bg-green-600 focus:outline-none rounded"
                                onClick={handleNewSalesNavigate}
                            >
                                <p className="text-sm font-medium leading-none text-white">
                                    New Sales
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead className=" border-b border-gray-200">
                            <tr className="h-16 w-full text-sm leading-none text-gray-800">
                                <th className="font-normal text-left pl-4">
                                    Date
                                </th>
                                <th className="font-normal text-left pl-12">
                                    Invoice No.
                                </th>
                                <th className="font-normal text-left pl-12">
                                    Customer Name
                                </th>
                                <th className="font-normal text-left pl-20">
                                    Amount
                                </th>
                                <th className="font-normal text-left pl-20">
                                    User
                                </th>
                                <th className="font-normal text-left pl-16">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="w-full">
                            <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-gray-200">
                                <td className="pl-4 cursor-pointer">
                                    <p className="text-sm font-medium leading-none text-gray-800">
                                        12.09.2024
                                    </p>
                                </td>
                                <td className="pl-12">
                                    <p className="text-sm font-medium leading-none text-gray-800">
                                        35000009
                                    </p>
                                </td>
                                <td className="pl-12">
                                    <p className="font-medium">Hamza al araf</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">130.00</p>
                                </td>
                                <td className="pl-20">
                                    <p className="font-medium">DEMO</p>
                                </td>
                                <td className="pl-20">
                                    <button
                                        onClick={handleSalesInvoiceNavigate}
                                    >
                                        <FontAwesomeIcon icon={faEye} />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
