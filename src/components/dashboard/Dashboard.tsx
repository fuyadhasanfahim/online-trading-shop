import Items from './Items';
import Stats from './Stats';

export interface items {
    title: string;
    href: string;
    img: string;
}

const items: items[] = [
    {
        title: 'Sales',
        href: '/sales',
        img: 'https://app.gsarwar.com/assets/sales-BSfi051m.png',
    },
    {
        title: 'Purchase',
        href: '/purchase',
        img: 'https://app.gsarwar.com/assets/purchase-Doxe2y_l.png',
    },
    {
        title: 'Customer',
        href: '/customer',
        img: 'https://app.gsarwar.com/assets/customer-dygDKZuW.png',
    },
    {
        title: 'Invoice',
        href: '/invoice',
        img: 'https://app.gsarwar.com/assets/invoice-B37Z-ijT.png',
    },
    {
        title: 'Product',
        href: '/product',
        img: 'https://app.gsarwar.com/assets/add_product-BIAHaVdX.png',
    },
    {
        title: 'Stock Report',
        href: '/stock-report',
        img: 'https://app.gsarwar.com/assets/stock_report-BdgwI1te.png',
    },
    {
        title: 'Sales Report',
        href: '/sales-report',
        img: 'https://app.gsarwar.com/assets/sales_report-DDiq2VcQ.png',
    },
    {
        title: 'Purchase Report',
        href: '/purchase-report',
        img: 'https://app.gsarwar.com/assets/purchase_report-CopmO_9m.png',
    },
    {
        title: 'Balance',
        href: '/balance',
        img: 'https://app.gsarwar.com/assets/balance-BtsCmYub.png',
    },
];

export default function Dashboard() {
    return (
        <>
            <div className="col-span-8">
                <Stats />
                <Items payload={items} />
            </div>
        </>
    );
}
