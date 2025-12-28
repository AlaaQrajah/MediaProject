import { useState } from "react";
import clsx from "clsx";
import { MdCameraAlt } from "react-icons/md";

export default function Avatar({ src, alt, size = "md", editable = false, onImageChange, className }) {
    const [preview, setPreview] = useState(src);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);
            if (onImageChange) onImageChange(file);
        }
    };

    const sizeClasses = {
        sm: "w-10 h-10",
        md: "w-24 h-24",
        lg: "w-32 h-32",
        xl: "w-40 h-40",
    };

    return (
        <div className={clsx("relative inline-block", className)}>
           
            <div
                className={clsx(
                    "rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-200",
                    sizeClasses[size]
                )}
            >
                <img
                    src={preview || "https://via.placeholder.com/150"}
                    alt={alt || "Avatar"}
                    className="w-full h-full object-cover"
                />
            </div>

           
            {editable && (
                <label
                    className="absolute bottom-0 right-0 bg-[#c5a365] text-white p-2 rounded-full cursor-pointer hover:bg-[#b08e55] transition-colors shadow-md transform translate-x-1/4 translate-y-1/4"
                    title="تغيير الصورة"
                >
                    <MdCameraAlt size={20} />
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                </label>
            )}
        </div>
    );
}
