import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Passenger {
    id: string;
    name: string;
    type: string;
    seat: string;
}

export default function SelectPaxPage() {
    const navigate = useNavigate();

    // Dummy data based on the design
    const [passengers] = useState<Passenger[]>([
        { id: '1', name: 'ALEX HUUM', type: 'ADT', seat: 'Seat 12A' },
        { id: '2', name: 'Somsee Kuum', type: 'ADT', seat: 'Seat 12B' }
    ]);

    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set(['1']));

    const toggleSelection = (id: string) => {
        const newSelection = new Set(selectedIds);
        if (newSelection.has(id)) {
            newSelection.delete(id);
        } else {
            newSelection.add(id);
        }
        setSelectedIds(newSelection);
    };

    const isAllSelected = selectedIds.size === passengers.length;

    const toggleAll = () => {
        if (isAllSelected) {
            setSelectedIds(new Set());
        } else {
            setSelectedIds(new Set(passengers.map(p => p.id)));
        }
    };

    const handleContinue = () => {
        if (selectedIds.size > 0) {
            navigate('/pax-info');
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
                            <p className="text-sm text-gray-500 leading-tight">Select Passengers</p>
                        </div>
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                        Step 2 of 5
                    </div>
                </div>

                {/* Progress Indicator Line */}
                <div className="h-1 w-full bg-gray-100">
                    <div className="h-full bg-[#008cc9] w-2/5 transition-all duration-300"></div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 pb-32">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

                    <div className="p-6 md:p-8 border-b border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Passengers</h2>
                        <p className="text-gray-600">Choose passengers for check-in</p>
                    </div>

                    <div className="p-6 md:p-8 bg-white flex flex-col gap-4">
                        {passengers.map((pax) => {
                            const isSelected = selectedIds.has(pax.id);
                            return (
                                <div
                                    key={pax.id}
                                    onClick={() => toggleSelection(pax.id)}
                                    className={`
                    relative p-4 md:p-5 rounded-lg border-2 cursor-pointer transition-all
                    ${isSelected
                                            ? 'border-[#008cc9] bg-[#f0f9fc]'
                                            : 'border-gray-200 hover:border-gray-300'}
                  `}
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className={`font-bold text-lg ${isSelected ? 'text-[#005c8a]' : 'text-gray-900'} mb-2`}>
                                                {pax.name}
                                            </h3>
                                            <div className="flex items-center gap-3">
                                                <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                                                    {pax.type}
                                                </span>
                                                <span className="text-sm text-gray-600">
                                                    {pax.seat}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Corner Checkmark */}
                                    {isSelected && (
                                        <div className="absolute top-0 right-0 w-0 h-0 border-t-[36px] border-t-[#008cc9] border-l-[36px] border-l-transparent rounded-tr-md">
                                            <svg className="absolute -top-[30px] -left-4 w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Floating Select All / Clear All Button */}
                <div className="flex justify-end mt-6">
                    <button
                        onClick={toggleAll}
                        className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        {isAllSelected ? (
                            <>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Clear All
                            </>
                        ) : (
                            <>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Select All
                            </>
                        )}
                    </button>
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
                        disabled={selectedIds.size === 0}
                        className={`flex-1 py-3.5 px-6 rounded-lg font-bold text-white transition-all ${selectedIds.size > 0
                                ? 'bg-[#008cc9] hover:bg-[#007ab3] shadow-md'
                                : 'bg-[#89c8df] cursor-not-allowed text-white/90'
                            }`}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
