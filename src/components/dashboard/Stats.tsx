export default function Stats() {
    return (
        <>
            <div className="">
                <dl className="grid gap-4 grid-cols-4">
                    <div className="flex flex-col gap-2 rounded-lg bg-green-200 px-4 py-8 text-center shadow-lg hover:scale-105 duration-300 transition-all">
                        <dt className="order-last text-lg font-semibold text-gray-500">
                            Current Balance
                        </dt>

                        <dd className="font-extrabold text-green-600 text-3xl">
                            BDT: 19,821.00
                        </dd>
                    </div>

                    <div className="flex flex-col gap-2 rounded-lg bg-green-200 px-4 py-8 text-center shadow-lg hover:scale-105 duration-300 transition-all">
                        <dt className="order-last text-lg font-semibold text-gray-500">
                            Current Stock
                        </dt>

                        <dd className="font-extrabold text-green-600 text-3xl">
                            23.00 UN
                        </dd>
                    </div>

                    <div className="flex flex-col gap-2 rounded-lg bg-yellow-200 px-4 py-8 text-center shadow-lg hover:scale-105 duration-300 transition-all">
                        <dt className="order-last text-lg font-semibold text-gray-500">
                            Customer Due
                        </dt>

                        <dd className="font-extrabold text-yellow-600 text-3xl">
                            BDT: 275
                        </dd>
                    </div>

                    <div className="flex flex-col gap-2 rounded-lg bg-red-200 px-4 py-8 text-center shadow-lg hover:scale-105 duration-300 transition-all">
                        <dt className="order-last text-lg font-semibold text-gray-500">
                            Supplier Due
                        </dt>

                        <dd className="font-extrabold text-red-600 text-3xl">
                            BDT: 20
                        </dd>
                    </div>
                </dl>
            </div>
        </>
    );
}
