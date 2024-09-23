import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
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
    return (
        <div className="h-dvh w-full py-6 px-2 space-y-6 z-50">
            <div className="text-center text-2xl font-semibold">
                <Link to={'/'}>Online Trading Shop</Link>
            </div>

            <nav className="">
                <ul className="space-y-2 my-20">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            {item.ledgers ? (
                                <Menu>
                                    <MenuButton className="w-full text-left px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <FontAwesomeIcon icon={item.icon} />
                                            {item.title}
                                        </div>
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </MenuButton>
                                    <MenuItems className="mt-2 space-y-1">
                                        {item.ledgers.map(
                                            (ledger, ledgerIndex) => (
                                                <MenuItem key={ledgerIndex}>
                                                    {({ active }) => (
                                                        <Link
                                                            to={ledger.path}
                                                            className={`px-4 py-2 rounded-lg transition flex items-center gap-2 ${
                                                                active
                                                                    ? 'bg-blue-500'
                                                                    : 'bg-gray-700'
                                                            }`}
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    ledger.icon
                                                                }
                                                            />
                                                            {ledger.title}
                                                        </Link>
                                                    )}
                                                </MenuItem>
                                            ),
                                        )}
                                    </MenuItems>
                                </Menu>
                            ) : (
                                <Link
                                    to={item.path}
                                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition flex items-center gap-2"
                                >
                                    <FontAwesomeIcon icon={item.icon} />
                                    {item.title}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition flex items-center gap-2 w-full">
                <FontAwesomeIcon icon={faSignOut} />
                Log Out
            </button>
        </div>
    );
}
