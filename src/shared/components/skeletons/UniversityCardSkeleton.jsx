

export default function UniversityCardSkeleton() {
    return (
        <div role="status" className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full animate-pulse">
         
            <div className="flex items-center justify-center h-48 bg-gray-200">
                <svg className="w-10 h-10 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                </svg>
            </div>

          
            <div className="p-5 flex-1 flex flex-col space-y-4">
                
                <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-2"></div>

                 
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                        <div className="h-2 bg-gray-200 rounded-full w-24"></div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                        <div className="h-2 bg-gray-200 rounded-full w-32"></div>
                    </div>
                </div>
 
                <div className="space-y-2 mt-2">
                    <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                </div>

                
                <div className="pt-4 mt-auto">
                    <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
                </div>
            </div>
        </div>
    );
}
