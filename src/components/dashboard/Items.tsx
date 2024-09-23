import { Link } from 'react-router-dom';
import { items } from './Dashboard';

type ItemsProps = {
    payload: items[];
};
export default function Items({ payload }: ItemsProps) {
    return (
        <>
            <div className="grid grid-cols-5 m-6 gap-5">
                {payload.map((item, index) => (
                    <div
                        key={index}
                        className="ring-1 ring-gray-200 rounded-md shadow-md p-14 hover:scale-105 duration-300 transition-all"
                    >
                        <Link to={item.href}>
                            <img src={item.img} alt={item.title} className="" />
                            <h3 className="text-center mx-auto w-full mt-2 text-lg font-medium">
                                {item.title}
                            </h3>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}
