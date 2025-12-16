// src/components/Footer/FooterLink.jsx
import { MdChevronLeft } from "react-icons/md";

function FooterLink({ label }) {
  return (
    <li className="text-sm md:text-base">
      <button
        type="button"
        className="
          group
          inline-flex items-center gap-2
          text-slate-100
          hover:text-[#d4b777]
          transition-colors duration-150
        "
      >
        <span>{label}</span>
        <span
          className="
            flex h-4 w-4 items-center justify-center
            rounded-full bg-transparent
          "
        >
          <MdChevronLeft
            className="
              text-base
              text-slate-50
              group-hover:text-[#d4b777]
              transition-colors duration-150
            "
          />
        </span>
      </button>
    </li>
  );
}

export default FooterLink;
