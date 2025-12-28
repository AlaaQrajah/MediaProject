

export default function NotificationSkeleton() {
    return (
        <div role="status" className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-white animate-pulse">
           
            <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full shrink-0">
                <svg className="w-5 h-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </div>

            
            <div className="flex-1 space-y-2.5">
                <div className="flex items-center justify-between">
                    <div className="h-2.5 bg-gray-200 rounded-full w-32"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-16"></div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[330px]"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[300px]"></div>
            </div>
        </div>
    );
}
