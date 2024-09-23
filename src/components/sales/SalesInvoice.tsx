import { useEffect, useRef, useState } from 'react';

export default function SalesInvoice() {
    const printSectionRef = useRef<HTMLDivElement>(null);
    const [currentTime, setCurrentTime] = useState('');

    const getCurrentDateTime = () => {
        const now = new Date();
        return now.toLocaleString();
    };

    useEffect(() => {
        setCurrentTime(getCurrentDateTime());
    }, []);

    const handlePrint = () => {
        if (printSectionRef.current) {
            window.print();
        }
    };

    return (
        <>
            <div className="-mt-7 bg-white mx-auto w-full max-w-4xl">
                <div
                    ref={printSectionRef}
                    id="printSection"
                    className="m-5 p-5 bg-white border-[1px] border-black"
                >
                    <div className="space-y-10 pb-[5px] border-b-[1px] border-b-[#000] ">
                        <div className="w-1/2 text-base font-semibold">
                            <h3>Online Treading Shop</h3>
                        </div>
                        <div className="w-1/2">
                            <p>
                                Shop Address: Mozumdarhat, Sundarganj, Gaibandha
                            </p>
                            <p>Mobile: 01795616264, 01767201923</p>
                        </div>
                    </div>
                    <div className="space-y-5">
                        <h2>Customer Invoice</h2>
                        <p>INV - 35000009</p>
                    </div>

                    <table className="w-full my-[10px] table-auto border-collapse border">
                        <tbody>
                            <tr>
                                <td className="border border-black px-4 py-2">
                                    Bill to:
                                </td>
                                <td className="w-[20%] border border-black px-4 py-2">
                                    Invoice number
                                </td>
                                <td className="w-[18%] text-center border border-black px-4 py-2">
                                    35000009
                                </td>
                            </tr>
                            <tr>
                                <td
                                    rowSpan={2}
                                    className="border border-black px-4 py-2"
                                >
                                    <p>Hamza al araf</p>
                                    <p>Bazar be</p>
                                    <p>01782592127</p>
                                </td>
                                <td className="border border-black px-4 py-2">
                                    Invoice date
                                </td>
                                <td className="text-center border border-black px-4 py-2">
                                    12.09.2024
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black px-4 py-2">
                                    Delivery date
                                </td>
                                <td className="border border-black px-4 py-2">
                                    12.09.2024
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="w-full my-[10px] table-auto border-collapse border">
                        <thead>
                            <tr>
                                <th className="w-[12%] border border-black px-4 py-2">
                                    ID
                                </th>
                                <th className="border border-black px-4 py-2">
                                    Product Name
                                </th>
                                <th className="w-[8%] border border-black px-4 py-2">
                                    QTY
                                </th>
                                <th className="w-[10%] border border-black px-4 py-2">
                                    Unit
                                </th>
                                <th className="w-[8%] border border-black px-4 py-2">
                                    Rate
                                </th>
                                <th className="w-[12%] border border-black px-4 py-2">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center border border-black px-4 py-2">
                                    33300001
                                </td>
                                <td className="text-center border border-black px-4 py-2">
                                    Plastic jharu
                                </td>
                                <td className="text-center border border-black px-4 py-2">
                                    2
                                </td>
                                <td className="text-center border border-black px-4 py-2">
                                    Piece
                                </td>
                                <td className="text-center border border-black px-4 py-2">
                                    65
                                </td>
                                <td className="text-right border border-black px-4 py-2">
                                    130.00
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="w-full my-[10px] table-auto border-collapse border">
                        <tbody>
                            <tr>
                                <td className="border border-black px-4 py-2">
                                    Total
                                </td>
                                <td className="text-right w-[38%] border border-black px-4 py-2">
                                    130.00
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black px-4 py-2">
                                    Discount
                                </td>
                                <td className="text-right border border-black px-4 py-2">
                                    N/A
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black px-4 py-2">
                                    Grand Total
                                </td>
                                <td className="text-right border border-black px-4 py-2">
                                    130.00
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black px-4 py-2">
                                    Paid Amount
                                </td>
                                <td className="text-right border border-black px-4 py-2">
                                    130.00
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-black px-4 py-2">
                                    Due Amount
                                </td>
                                <td className="text-right border border-black px-4 py-2">
                                    0.00
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="mt-10">
                        <div className="flex justify-between">
                            <p>Received by</p>
                            <p>Authorized Signature</p>
                        </div>
                        <p className="mt-10">Time of printing: {currentTime}</p>
                    </div>
                </div>
                <div className="flex justify-end mb-5 no-print">
                    <button
                        className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-green-500 hover:bg-green-600 focus:outline-none rounded"
                        onClick={handlePrint}
                    >
                        <p className="text-sm font-medium leading-none text-white">
                            Print
                        </p>
                    </button>
                </div>
            </div>
        </>
    );
}
