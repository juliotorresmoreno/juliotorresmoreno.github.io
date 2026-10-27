import { Briefcase } from "lucide-react";
import { experience } from "../data/cvData";

export default function Experience() {
    return (
        <section id="experience" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <p className="text-primary-400 font-medium mb-2">— 02</p>
                    <h2 className="section-title gradient-text">Work Experience</h2>
                </div>

                <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-10">
                    {experience.map((job, i) => (
                        <div key={i} className="relative pl-8 md:pl-10 group">
                            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-900 group-hover:scale-125 transition-transform" />
                            <div className="glass-card p-6 hover:bg-white/10 transition-all">
                                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                                    <div>
                                        <h3 className="font-display text-xl font-semibold text-white">{job.role}</h3>
                                        <p className="text-primary-400 font-medium">{job.company}</p>
                                    </div>
                                    <span className="text-sm text-gray-400 whitespace-nowrap flex items-center gap-1">
                                        <Briefcase size={14} /> {job.period}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">{job.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {job.tags.map((tag) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}