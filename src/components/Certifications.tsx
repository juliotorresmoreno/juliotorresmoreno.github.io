import { Award } from "lucide-react";
import { certifications } from "../data/cvData";

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <p className="text-primary-400 font-medium mb-2">— 05</p>
                    <h2 className="section-title gradient-text">Certifications</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {certifications.map((cat) => (
                        <div key={cat.category} className="glass-card p-6 hover:bg-white/10 transition-all group">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400 group-hover:scale-110 transition-transform">
                                    <Award size={20} />
                                </div>
                                <h3 className="font-display text-lg font-semibold text-white">{cat.category}</h3>
                            </div>
                            <ul className="space-y-2">
                                {cat.items.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-gray-400 text-sm">
                                        <span className="text-primary-400 mt-1">▸</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}