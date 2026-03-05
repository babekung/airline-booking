import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CheckinPage() {
    const [pnr, setPnr] = useState('');
    const [lastName, setLastName] = useState('');
    const navigate = useNavigate();

    const isFormValid = pnr.trim() !== '' && lastName.trim() !== '';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isFormValid) {
            navigate('/select-pax');
        }
    };

    return (
        <>
            {/* Blue Banner */}
            <div className="bg-[#0eb1e6] text-white py-14 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Online Check-in</h1>
                <p className="text-xl mb-2">Fly Smart. Fly Qoomlee.</p>
                <p className="text-sm md:text-base opacity-90">Check in online and save time at the airport</p>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 w-full flex flex-col lg:flex-row gap-8">

                {/* Left Column (Forms & Cards) */}
                <div className="flex-1 flex flex-col gap-6">

                    {/* Retrieve Booking Form Area */}
                    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-[#1d2939] mb-8">Retrieve Your Booking</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#009bde] focus:ring-1 focus:ring-[#009bde] transition-colors bg-white text-gray-900"
                                    placeholder="Your last name"
                                />
                            </div>

                            <div>
                                <label htmlFor="pnr" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Booking reference (PNR)
                                </label>
                                <input
                                    type="text"
                                    id="pnr"
                                    value={pnr}
                                    onChange={(e) => setPnr(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#009bde] focus:ring-1 focus:ring-[#009bde] transition-colors uppercase bg-white text-gray-900"
                                    placeholder="ABC123 OR 1234567890123"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={!isFormValid}
                                className={`w-full py-3.5 px-6 rounded-lg text-white font-bold text-lg transition-all ${isFormValid
                                        ? 'bg-[#008cc9] hover:bg-[#007ab3]'
                                        : 'bg-[#89c8df] cursor-not-allowed'
                                    }`}
                            >
                                Retrieve Booking
                            </button>

                            <div className="bg-[#f0f9fc] text-[#475467] text-sm p-4 rounded-lg flex gap-2 items-start mt-6">
                                <span className="font-semibold text-[#009bde]">Tip:</span>
                                <p>Online check-in opens 24 hours before departure and closes 2 hours before departure.</p>
                            </div>
                        </form>
                    </div>

                    {/* Bottom Cards Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Flight Status Card */}
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#f0f9fc] flex items-center justify-center text-[#009bde]">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-lg text-gray-900">Flight Status</h3>
                            </div>
                            <p className="text-gray-600 text-sm mb-6 flex-1">
                                Track your flight in real-time. Get updates on departure, arrival, gate changes, and delays.
                            </p>
                            <a href="#" className="text-[#009bde] font-semibold text-sm flex items-center gap-1 hover:underline">
                                Check Status →
                            </a>
                        </div>

                        {/* Baggage Rules Card */}
                        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[#f0f9fc] flex items-center justify-center text-[#009bde]">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-lg text-gray-900">Baggage Rules</h3>
                            </div>
                            <p className="text-gray-600 text-sm mb-6 flex-1">
                                Economy: 1 carry-on (7kg) + checked (23kg).<br />
                                Business: 2 carry-ons + 2 checked bags (32kg each).
                            </p>
                            <a href="#" className="text-[#009bde] font-semibold text-sm flex items-center gap-1 hover:underline">
                                Learn More →
                            </a>
                        </div>

                    </div>
                </div>

                {/* Right Column (Travel Tips Panel) */}
                <div className="lg:w-80 w-full">
                    <div className="bg-[#f8fbff] rounded-xl shadow-sm p-6 border border-blue-50 h-full">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="bg-[#009bde] text-white p-2 rounded-lg">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-bold text-xl text-gray-900">Travel Tips</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="text-[#009bde] mt-0.5">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm">Arrive Early</h4>
                                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">Arrive 2-3 hours before international flights, 1-2 hours for domestic.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="text-[#009bde] mt-0.5">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm">Valid Documents</h4>
                                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">Ensure your passport is valid for 6 months beyond your travel dates.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="text-[#009bde] mt-0.5">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm">Mobile Boarding</h4>
                                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">Download your boarding pass to your phone for quick access.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="text-[#009bde] mt-0.5">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm">Pack Smart</h4>
                                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">Keep liquids in containers ≤100ml and place in a clear bag.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="text-[#009bde] mt-0.5">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm">Stay Informed</h4>
                                    <p className="text-gray-600 text-sm mt-1 leading-relaxed">Check visa requirements and travel advisories for your destination.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-blue-100/50 text-center">
                            <p className="text-xs text-gray-500 mb-2">Need help? Contact our 24/7 support team</p>
                            <a href="tel:+1-800-QOOMLEE" className="font-bold text-[#009bde]">+1-800-QOOMLEE</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
