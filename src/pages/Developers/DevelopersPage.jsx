import SEO from "../../shared/components/layout/SEO";
import SectionWrapper from "../../shared/components/ui/SectionWrapper";
import SectionHeader from "../../shared/components/ui/SectionHeader";
import DevAlaa from "../../assets/developers/dev-alaa.png";
import DevAbdulrazzaq from "../../assets/developers/dev-abdulrazzaq.png";
import DevMosab from "../../assets/developers/dev-mosab.png";
import DevAbdulgani from "../../assets/developers/dev-abdulgani.png";

const DEVELOPERS = [
    { name: "علاء قراجة", role: "Full Stack Developer", image: DevAlaa },
    { name: "عبد الرزاق", role: "Frontend Developer", image: DevAbdulrazzaq },
    { name: "مصعب", role: "Backend Developer", image: DevMosab },
    { name: "عبد الغني", role: "UI/UX Designer", image: DevAbdulgani },
];

export default function DevelopersPage() {
    return (
        <>
            <SEO title="المطورون" description="فريق العمل القائم على مشروع بوابة الجامعات." />
            <SectionWrapper>
                <SectionHeader
                    title="فريق المطورين"
                    subtitle="نخبة من المبدعين يعملون لتقديم أفضل تجربة لكم"
                    center
                />
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-5xl mx-auto">
                    {DEVELOPERS.map((dev, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300 ring-2 ring-transparent group-hover:ring-[#004733]/20">
                                <img src={dev.image} alt={dev.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-1">{dev.name}</h3>
                            <p className="text-[#004733] font-medium">{dev.role}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
}
