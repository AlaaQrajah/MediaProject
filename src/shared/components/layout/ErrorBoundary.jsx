import React from "react";
import { MdErrorOutline } from "react-icons/md";
import Button from "../ui/Button";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null });
        window.location.href = "/"; 
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 text-center" dir="rtl">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full border border-slate-100">
                        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <MdErrorOutline className="text-4xl text-red-500" />
                        </div>

                        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">عذراً، حدث خطأ غير متوقع!</h1>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            نواجه مشكلة بسيطة في عرض هذه الصفحة. لا تقلق، يمكنك المحاولة مرة أخرى أو العودة للصفحة الرئيسية.
                        </p>

                        <div className="flex flex-col gap-3">
                            <Button
                                onClick={() => window.location.reload()}
                                className="bg-[#004733] hover:bg-[#003723] w-full py-3"
                            >
                                تحديث الصفحة
                            </Button>
                            <button
                                onClick={this.handleReset}
                                className="text-gray-500 hover:text-[#004733] font-medium transition-colors py-2"
                            >
                                العودة للصفحة الرئيسية
                            </button>
                        </div>
 
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <div className="mt-8 text-left text-xs bg-gray-100 p-4 rounded overflow-auto max-h-32 text-red-800" dir="ltr">
                                {this.state.error.toString()}
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
