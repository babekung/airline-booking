import { useNavigate } from 'react-router-dom';

interface BoardingPassData {
    id: string;
    name: string;
    type: string;
    pnr: string;
    terminal: string;
    gate: string;
    flight: string;
    from: {
        airport: string;
        city: string;
        code: string;
        date: string;
        time: string;
        utc: string;
    };
    to: {
        airport: string;
        city: string;
        code: string;
        date: string;
        time: string;
        utc: string;
    };
    seat: string;
    zone: string;
    seq: string;
    boardingTime: string;
    showWallet: boolean;
}

export default function BoardingPassPage() {
    const navigate = useNavigate();

    const passes: BoardingPassData[] = [
        {
            id: '1',
            name: 'ALEX HUUM',
            type: 'ADT',
            pnr: 'ABC123',
            terminal: '1',
            gate: '40',
            flight: 'QL123',
            from: {
                airport: 'Suvarnabhumi Airport',
                city: 'Bangkok',
                code: 'BKK',
                date: '19 Feb 2026',
                time: '14:54',
                utc: 'UTC'
            },
            to: {
                airport: 'Changi International Airport',
                city: 'Singapore',
                code: 'SIN',
                date: '20 Feb 2026',
                time: '17:54',
                utc: 'UTC'
            },
            seat: '12A',
            zone: '1',
            seq: '023',
            boardingTime: '21:14',
            showWallet: true
        },
        {
            id: '2',
            name: 'Somsee Kuum',
            type: 'ADT',
            pnr: 'ABC123',
            terminal: '1',
            gate: '40',
            flight: 'QL123',
            from: {
                airport: 'Suvarnabhumi Airport',
                city: 'Bangkok',
                code: 'BKK',
                date: '19 Feb 2026',
                time: '14:54',
                utc: 'UTC'
            },
            to: {
                airport: 'Changi International Airport',
                city: 'Singapore',
                code: 'SIN',
                date: '20 Feb 2026',
                time: '17:54',
                utc: 'UTC'
            },
            seat: '12B',
            zone: '1',
            seq: '024',
            boardingTime: '21:14',
            showWallet: false
        }
    ];

    return (
        <div className="min-h-screen bg-[#f8fbff] flex flex-col">
            {/* Top Navigation */}
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
                            <p className="text-sm text-gray-500 leading-tight">Boarding Pass</p>
                        </div>
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                        Step 5 of 5
                    </div>
                </div>

                {/* Progress Indicator Line */}
                <div className="h-1 w-full bg-gray-100 flex">
                    <div className="h-full bg-[#008cc9] w-full transition-all duration-300"></div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-8 pb-32 flex flex-col gap-8">

                {passes.map((pass) => (
                    <div key={pass.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        {/* Header */}
                        <div className="bg-[#008cc9] p-5 flex items-center justify-between text-white">
                            <div className="flex items-center gap-2">
                                <svg className="w-6 h-6 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                <span className="font-bold text-lg tracking-wide">Qoomlee</span>
                            </div>
                            <span className="font-semibold text-sm">Boarding Pass</span>
                        </div>

                        <div className="p-6">
                            {/* Passenger Info */}
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Passenger</div>
                                    <div className="text-xl font-bold text-gray-900 leading-none mb-2">{pass.name}</div>
                                    <div className="text-sm text-gray-600">{pass.type} • PNR: {pass.pnr}</div>
                                </div>
                                <div className="flex gap-6 text-right">
                                    <div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Terminal</div>
                                        <div className="text-2xl font-bold text-gray-900 leading-none">{pass.terminal}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Gate</div>
                                        <div className="text-2xl font-bold text-gray-900 leading-none">{pass.gate}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Route */}
                            <div className="bg-[#f8fbff] rounded-xl p-5 mb-6 flex justify-between items-center relative overflow-hidden">
                                <div className="text-center w-5/12">
                                    <div className="text-xs text-gray-500 truncate mb-2">{pass.from.airport}, {pass.from.city}</div>
                                    <div className="text-5xl font-black text-[#008cc9] tracking-tight">{pass.from.code}</div>
                                    <div className="text-xs text-gray-500 mt-2">{pass.from.date}</div>
                                </div>

                                <div className="w-2/12 flex flex-col items-center justify-center relative">
                                    <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dashed border-gray-300 -z-10 transform -translate-y-1/2"></div>
                                    <div className="bg-[#f8fbff] px-2 text-[#008cc9] mb-1">
                                        <svg className="w-6 h-6 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </div>
                                    <div className="bg-gray-100 rounded-full px-3 py-1 text-xs font-bold text-gray-600">
                                        {pass.flight}
                                    </div>
                                </div>

                                <div className="text-center w-5/12">
                                    <div className="text-xs text-gray-500 truncate mb-2">{pass.to.airport}, {pass.to.city}</div>
                                    <div className="text-5xl font-black text-[#008cc9] tracking-tight">{pass.to.code}</div>
                                    <div className="text-xs text-gray-500 mt-2">{pass.to.date}</div>
                                </div>
                            </div>

                            {/* Grid Details */}
                            <div className="grid grid-cols-4 gap-4 mb-6">
                                <div className="bg-[#f8fbff] rounded-lg p-3 text-center">
                                    <div className="text-xs text-gray-500 uppercase mb-1">Seat</div>
                                    <div className="text-xl font-bold text-gray-900">{pass.seat}</div>
                                </div>
                                <div className="bg-[#f8fbff] rounded-lg p-3 text-center">
                                    <div className="text-xs text-gray-500 uppercase mb-1">Zone</div>
                                    <div className="text-xl font-bold text-gray-900">{pass.zone}</div>
                                </div>
                                <div className="bg-[#f8fbff] rounded-lg p-3 text-center">
                                    <div className="text-xs text-gray-500 uppercase mb-1">Seq</div>
                                    <div className="text-xl font-bold text-gray-900">{pass.seq}</div>
                                </div>
                                <div className="bg-[#f8fbff] rounded-lg p-3 text-center">
                                    <div className="text-xs text-gray-500 uppercase mb-1">Boarding</div>
                                    <div className="text-xl font-bold text-[#008cc9]">{pass.boardingTime}</div>
                                </div>
                            </div>

                            {/* Time Details */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-[#f8fbff] rounded-lg p-4">
                                    <div className="text-xs text-gray-500 uppercase mb-1">Departure</div>
                                    <div className="flex items-baseline gap-1 mb-1">
                                        <span className="text-2xl font-bold text-gray-900">{pass.from.time}</span>
                                        <span className="text-sm text-gray-500 font-medium">{pass.from.utc}</span>
                                    </div>
                                    <div className="text-xs text-gray-500">{pass.from.date}</div>
                                </div>
                                <div className="bg-[#f8fbff] rounded-lg p-4">
                                    <div className="text-xs text-gray-500 uppercase mb-1">Arrival</div>
                                    <div className="flex items-baseline gap-1 mb-1">
                                        <span className="text-2xl font-bold text-gray-900">{pass.to.time}</span>
                                        <span className="text-sm text-gray-500 font-medium">{pass.to.utc}</span>
                                    </div>
                                    <div className="text-xs text-gray-500">{pass.to.date}</div>
                                </div>
                            </div>

                            {/* Perforated Line */}
                            <div className="relative mb-8">
                                <div className="absolute inset-x-0 border-t-2 border-dashed border-gray-200"></div>
                                <div className="absolute -left-8 top-1/2 w-5 h-5 bg-[#f8fbff] rounded-full transform -translate-y-1/2"></div>
                                <div className="absolute -right-8 top-1/2 w-5 h-5 bg-[#f8fbff] rounded-full transform -translate-y-1/2"></div>
                            </div>

                            {/* Barcode & Wallet */}
                            <div className="flex flex-col items-center">
                                <div className="border border-gray-200 rounded-lg p-4 w-full mb-3 flex items-center justify-center">
                                    {/* Simulate barcode with lines */}
                                    <div className="flex space-x-1 h-16 w-3/4 max-w-xs mx-auto justify-center">
                                        {[...Array(40)].map((_, i) => (
                                            <div key={i} className={`bg-gray-900 ${i % 3 === 0 ? 'w-1' : i % 5 === 0 ? 'w-2' : 'w-0.5'}`}></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="text-xs text-gray-500 mb-6">Scan at security and boarding gate</div>

                                {pass.showWallet && (
                                    <button className="w-full bg-black text-white rounded-xl py-3.5 px-4 flex items-center justify-center gap-2 font-semibold hover:bg-gray-900 transition-colors">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zM5 6h14a1 1 0 011 1v1H4V7a1 1 0 011-1zm14 11H5a1 1 0 01-1-1v-4h16v4a1 1 0 01-1 1z" />
                                            <rect x="5" y="14" width="4" height="2" rx="1" />
                                        </svg>
                                        Add to Apple Wallet
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sticky Bottom Actions */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-20">
                <div className="max-w-4xl mx-auto flex gap-4">
                    <button
                        onClick={() => navigate('/')}
                        className="flex-1 py-3.5 px-6 rounded-lg font-bold text-white bg-[#008cc9] hover:bg-[#007ab3] shadow-md transition-all text-center"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
}
