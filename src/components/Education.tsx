import { GraduationCap } from "lucide-react";
import { education } from "../data/cvData";

export default function Education() {
    return (
        <section id="education" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <p className="text-primary-400 font-medium mb-2">— 03</p>
                    <h2 className="section-title gradient-text">Education</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {education.map((edu, i) => (
                        <div key={i} className="glass-card p-6 hover:bg-white/10 transition-all group">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                                    <GraduationCap size={22} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-display text-lg font-semibold text-white mb-1">{edu.degree}</h3>
                                    <p className="text-primary-400 text-sm font-medium mb-1">{edu.institution}</p>
                                    <p className="text-xs text-gray-500 mb-3">{edu.period}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}