import Card from "../ui/Card";

export default function SpecialtyCardSkeleton() {
    return (
        <Card className="flex flex-col overflow-hidden border-none shadow-md h-full animate-pulse">
            
            <div className="flex items-center justify-center h-44 md:h-48 bg-gray-200">
                <svg className="w-10 h-10 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023" />
                </svg>
            </div>

           
            <div className="flex-1 px-4 py-4 space-y-3">
                <div className="h-2.5 bg-gray-200 rounded-full w-3/4 mb-2"></div>
                <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-1/3"></div>
                </div>
            </div>

            
            <div className="mt-auto px-4 pb-4">
                <div className="flex justify-between items-center mb-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                </div>
                <div className="h-9 bg-gray-200 rounded-lg w-full"></div>
            </div>
        </Card>
    );
}
