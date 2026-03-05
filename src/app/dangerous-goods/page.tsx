import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DangerousGoodsPage() {
    const navigate = useNavigate();
    const [accepted, setAccepted] = useState(false);

    const handleContinue = () => {
        if (accepted) {
            navigate('/boarding-pass');
        }
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
                            <p className="text-sm text-gray-500 leading-tight">Dangerous Goods</p>
                        </div>
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                        Step 4 of 5
                    </div>
                </div>

                {/* Progress Indicator Line */}
                <div className="h-1 w-full bg-gray-100 flex">
                    <div className="h-full bg-[#008cc9] w-4/5 transition-all duration-300"></div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 pb-40">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

                    <div className="p-6 md:p-8 border-b border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Dangerous Goods Declaration</h2>
                        <p className="text-gray-600">A mandatory safety and legal declaration as required by Thai law (CAAT/AOT).</p>
                    </div>

                    <div className="p-6 md:p-8 bg-white space-y-6">
                        <p className="font-bold text-[#d92d20] text-lg">
                            For the safety of the flight, the transport of specific hazardous items is strictly forbidden.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            By continuing, you confirm that you and those in your booking are NOT carrying the following Dangerous Goods in your carry-on or checked baggage, which are prohibited under all circumstances:
                        </p>

                        <ul className="space-y-4 text-gray-700 pl-2">
                            <li className="flex gap-3">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>Explosives (e.g., Fireworks, Flares, Ammunition, Toy Caps, Gunpowder).</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>Flammable Items (e.g., Flammable Gases, Gasoline, Lighter Fluid, Aerosol Paints, Strike-Anywhere Matches).</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>Corrosives & Poisons (e.g., Acids, Bleach, Pesticides, Toxic or Infectious Substances).</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>Lithium Battery-Powered Vehicles (e.g., Hoverboards, Self-Balancing Wheels, Mini-Segways are forbidden in all baggage).</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-gray-400 mt-1">•</span>
                                <span>Other items like Tear Gas, Pepper Spray, or Radioactive Material.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Sticky Bottom Actions */}
            <div className="fixed bottom-0 left-0 right-0 bg-[#f8fbff] border-t border-gray-200 p-4 z-20 flex flex-col items-center">

                <label className="flex items-center gap-3 mb-6 cursor-pointer group">
                    <div className="relative flex items-center">
                        <input
                            type="checkbox"
                            className="peer sr-only"
                            checked={accepted}
                            onChange={(e) => setAccepted(e.target.checked)}
                        />
                        <div className={`w-6 h-6 border-2 rounded flex items-center justify-center transition-all ${accepted ? 'bg-[#008cc9] border-[#008cc9]' : 'border-gray-400 bg-white group-hover:border-[#008cc9]'
                            }`}>
                            {accepted && (
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            )}
                        </div>
                    </div>
                    <span className="text-gray-800 font-medium select-none">
                        I understand and accept the dangerous goods policy.
                    </span>
                </label>

                <div className="max-w-4xl w-full mx-auto flex gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-1/3 py-3.5 px-6 rounded-lg font-bold text-gray-700 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-center transition-all"
                    >
                        Back
                    </button>

                    <button
                        onClick={handleContinue}
                        disabled={!accepted}
                        className={`w-2/3 py-3.5 px-6 rounded-lg font-bold text-white transition-all ${accepted
                                ? 'bg-[#008cc9] hover:bg-[#007ab3] shadow-md'
                                : 'bg-[#89c8df] cursor-not-allowed text-white/90'
                            }`}
                    >
                        Accept & Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
