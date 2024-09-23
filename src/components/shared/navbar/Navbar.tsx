import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartLine,
    faShoppingCart,
    faUsers,
    faBalanceScale,
    faBoxOpen,
    faFileInvoiceDollar,
    faClipboardList,
    faExchangeAlt,
    faChevronDown,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

const navItems = [
    { title: 'Dashboard', path: '/', icon: faChartLine },
    { title: 'Sales', path: '/sales', icon: faShoppingCart },
    { title: 'Purchases', path: '/purchases', icon: faFileInvoiceDollar },
    { title: 'Quotations', path: '/quotations', icon: faClipboardList },
    { title: 'Customers', path: '/customers', icon: faUsers },
    { title: 'Products', path: '/products', icon: faBoxOpen },
    { title: 'Supplier', path: '/supplier', icon: faUsers },
    {
        title: 'Ledgers',
        icon: faBalanceScale,
        ledgers: [
            {
                title: 'Supplier Ledger',
                path: '/supplier-ledger',
                icon: faUsers,
            },
            {
                title: 'Customer Ledger',
                path: '/customer-ledger',
                icon: faUsers,
            },
        ],
    },
    { title: 'Balance', path: '/balance', icon: faBalanceScale },
    { title: 'New Expense', path: '/new-expense', icon: faFileInvoiceDollar },
    { title: 'Stock', path: '/stock', icon: faBoxOpen },
    { title: 'Return', path: '/return', icon: faExchangeAlt },
];

export default function Navbar() {
    const location = useLocation();

    return (
        <div className="flex h-screen flex-col justify-between border-e bg-gray-800 text-gray-100">
            <div className="px-4 py-6">
                <div className="text-center text-2xl font-semibold">
                    <Link to={'/'}>Online Trading Shop</Link>
                </div>

                <ul className="mt-6 space-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            {item.ledgers ? (
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary
                                        className={`flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700`}
                                    >
                                        <span className="text-lg font-medium flex items-center gap-2">
                                            <FontAwesomeIcon icon={item.icon} />
                                            {item.title}
                                        </span>
                                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                            <FontAwesomeIcon
                                                icon={faChevronDown}
                                            />
                                        </span>
                                    </summary>
                                    <ul className="mt-2 space-y-1 px-4">
                                        {item.ledgers.map(
                                            (ledger, ledgerIndex) => (
                                                <li key={ledgerIndex}>
                                                    <Link
                                                        to={ledger.path}
                                                        className={`rounded-lg px-4 py-2 text-lg font-medium flex items-center gap-2 ${
                                                            location.pathname ===
                                                            ledger.path
                                                                ? 'bg-gray-100 text-gray-700'
                                                                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                                                        }`}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={ledger.icon}
                                                        />
                                                        {ledger.title}
                                                    </Link>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </details>
                            ) : (
                                <Link
                                    to={item.path}
                                    className={`rounded-lg px-4 py-2 text-lg font-medium flex items-center gap-2 ${
                                        location.pathname === item.path
                                            ? 'bg-gray-100 text-gray-700'
                                            : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                                    }`}
                                >
                                    <FontAwesomeIcon icon={item.icon} />
                                    {item.title}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                <button className="flex items-center gap-2 bg-gray-800 p-4 hover:bg-gray-700 w-full justify-center">
                    <FontAwesomeIcon icon={faSignOut} />
                    Log Out
                </button>
            </div>
        </div>
    );
}
