import { GitBranch, Link2, Globe, Briefcase, ExternalLink } from "lucide-react";
import { personalInfo } from "../data/cvData";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="animate-fade-up">
                    <p className="text-primary-400 font-medium mb-4 flex items-center gap-2">
                        <span className="w-8 h-px bg-primary-400" />
                        Hi, I'm
                    </p>
                    <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 leading-tight">
                        <span className="gradient-text">{personalInfo.name}</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-6">
                        {personalInfo.role}
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg leading-relaxed mb-8">
                        {personalInfo.summary}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                        <a
                            href={personalInfo.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-500 rounded-lg font-medium transition-all hover:scale-105"
                        >
                            <Link2 size={18} /> LinkedIn
                        </a>
                        <a
                            href={personalInfo.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 glass-card hover:bg-white/10 transition-all hover:scale-105"
                        >
                            <GitBranch size={18} /> GitHub
                        </a>
                        <a
                            href={personalInfo.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 glass-card hover:bg-white/10 transition-all hover:scale-105"
                        >
                            <Globe size={18} /> Website
                        </a>
                        <a
                            href={personalInfo.links.onnasoft}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 glass-card hover:bg-white/10 transition-all hover:scale-105"
                        >
                            <Briefcase size={18} /> OnnaSoft
                        </a>
                        <a
                            href={personalInfo.links.platzi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 glass-card hover:bg-white/10 transition-all hover:scale-105"
                        >
                            <ExternalLink size={18} /> Platzi
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}