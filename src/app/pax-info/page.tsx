import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PaxDetails {
    id: string;
    name: string;
    nationality: string;
    countryCode: string;
    phone: string;
    countryName: string;
}

export default function PaxInfoPage() {
    const navigate = useNavigate();

    // Simulated initial state based on selected passengers
    const [passengers, setPassengers] = useState<PaxDetails[]>([
        { id: '1', name: 'ALEX HUUM', nationality: 'TH', countryCode: '+66', phone: '811234567', countryName: 'Thailand' },
        { id: '2', name: 'Somsee Kuum', nationality: 'US', countryCode: '+1', phone: '5551234567', countryName: 'United States' }
    ]);

    const updatePassenger = (id: string, field: keyof PaxDetails, value: string) => {
        setPassengers(pax => pax.map(p =>
            p.id === id ? { ...p, [field]: value } : p
        ));
    };

    const handleContinue = () => {
        // In a real app, validate here before navigating
        navigate('/dangerous-goods');
    };

    return (
        <div className="min-h-screen bg-[#f8fbff] flex flex-col">
            {/* Top Navigation / Progress Bar */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-gray-800">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div>
                            <h1 className="font-bold text-gray-900 leading-tight">Check-in</h1>
                            <p className="text-sm text-gray-500 leading-tight">Passenger Details</p>
                        </div>
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                        Step 3 of 5
                    </div>
                </div>

                {/* Progress Indicator Line */}
                <div className="h-1 w-full bg-gray-100 flex">
                    <div className="h-full bg-[#008cc9] w-3/5 transition-all duration-300"></div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 pb-32">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

                    <div className="p-6 md:p-8 border-b border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Passenger Details</h2>
                        <p className="text-gray-600">Enter required information for each passenger</p>
                    </div>

                    <div className="p-6 md:p-8 bg-white flex flex-col gap-6">
                        {passengers.map((pax, index) => (
                            <div key={pax.id} className="border border-gray-200 rounded-xl p-5 md:p-6 bg-white">
                                <h3 className="font-bold text-lg text-gray-900 mb-6">
                                    {index + 1}. {pax.name}
                                </h3>

                                <div className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Nationality
                                        </label>
                                        <input
                                            type="text"
                                            value={pax.nationality}
                                            onChange={(e) => updatePassenger(pax.id, 'nationality', e.target.value.toUpperCase())}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009bde] focus:border-transparent transition-all bg-white text-gray-900 uppercase"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <div className="flex gap-3">
                                            <div className="w-1/3 sm:w-1/4 relative">
                                                <select
                                                    value={pax.countryCode}
                                                    onChange={(e) => {
                                                        updatePassenger(pax.id, 'countryCode', e.target.value);
                                                        // Very simple mock country name update
                                                        updatePassenger(pax.id, 'countryName', e.target.value === '+66' ? 'Thailand' : 'United States');
                                                    }}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009bde] focus:border-transparent appearance-none bg-white text-gray-900"
                                                >
                                                    <option value="+66">🇹🇭 +66</option>
                                                    <option value="+1">🇺🇸 +1</option>
                                                    <option value="+44">🇬🇧 +44</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="flex-1 text-sm text-gray-500 absolute mt-[52px] ml-1">
                                                {pax.countryName}
                                            </div>

                                            <div className="w-2/3 sm:w-3/4">
                                                <input
                                                    type="tel"
                                                    value={pax.phone}
                                                    onChange={(e) => updatePassenger(pax.id, 'phone', e.target.value)}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009bde] focus:border-transparent transition-all bg-white text-gray-900"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sticky Bottom Actions */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-20">
                <div className="max-w-4xl mx-auto flex gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex-1 py-3.5 px-6 rounded-lg font-bold text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-center transition-all"
                    >
                        Back
                    </button>

                    <button
                        onClick={handleContinue}
                        className="flex-1 py-3.5 px-6 rounded-lg font-bold text-white bg-[#008cc9] hover:bg-[#007ab3] shadow-md transition-all"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
