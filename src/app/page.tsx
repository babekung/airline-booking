import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="p-8 text-center max-w-md mx-auto">
            <h1 className="text-3xl font-semibold mb-6">Airline Booking</h1>
            <Link
                to="/checkin"
                className="block w-full bg-blue-600 text-white rounded-md py-3 font-medium hover:bg-blue-700 transition"
            >
                Go to Check-in
            </Link>
        </div>
    );
}
