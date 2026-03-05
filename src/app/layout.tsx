import { Outlet, Link, useLocation } from 'react-router-dom';

export default function RootLayout() {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-[#f5f7f9] flex flex-col font-sans">
            {/* Header */}
            <header className="bg-white py-4 px-8 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-2">
                    {/* Logo Placeholder */}
                    <svg className="w-8 h-8 text-[#009bde]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                    </svg>
                    <div>
                        <span className="text-xl font-bold text-[#1d2939]">Qoomlee</span>
                        <span className="block text-xs text-[#009bde] font-semibold -mt-1 tracking-wide">Airline</span>
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <div className="relative">
                        <Link
                            to="/"
                            className={`font-medium transition-colors ${location.pathname === '/' ? 'text-[#009bde] font-semibold' : 'text-gray-600 hover:text-[#009bde]'}`}
                        >
                            Home
                        </Link>
                        {location.pathname === '/' && (
                            <div className="absolute -bottom-5 left-0 right-0 h-0.5 bg-[#009bde]"></div>
                        )}
                    </div>
                    <a href="#" className="text-gray-600 font-medium hover:text-[#009bde] transition-colors">Flights</a>
                    <div className="relative">
                        <Link
                            to="/checkin"
                            className={`font-medium transition-colors ${location.pathname.includes('/checkin') ? 'text-[#009bde] font-semibold' : 'text-gray-600 hover:text-[#009bde]'}`}
                        >
                            Check-in
                        </Link>
                        {location.pathname.includes('/checkin') && (
                            <div className="absolute -bottom-5 left-0 right-0 h-0.5 bg-[#009bde]"></div>
                        )}
                    </div>
                    <a href="#" className="text-gray-600 font-medium hover:text-[#009bde] transition-colors">Manage Booking</a>
                    <a href="#" className="text-gray-600 font-medium hover:text-[#009bde] transition-colors">Contact</a>
                </nav>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col">
                <Outlet />
            </main>
        </div>
    );
}
