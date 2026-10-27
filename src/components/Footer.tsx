import { Globe, Link2, GitBranch } from "lucide-react";
import { personalInfo } from "../data/cvData";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-12 mt-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="gradient-text font-display text-2xl font-bold mb-4">Julio Cesar Torres Moreno</p>
                <p className="text-gray-500 text-sm mb-6">FullStack Developer · Backend Specialist · AWS Cloud</p>
                <div className="flex justify-center gap-4 mb-8">
                    <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer"
                        className="p-3 glass-card hover:bg-primary-500/20 transition-colors rounded-xl">
                        <Link2 size={20} />
                    </a>
                    <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer"
                        className="p-3 glass-card hover:bg-primary-500/20 transition-colors rounded-xl">
                        <GitBranch size={20} />
                    </a>
                    <a href={personalInfo.links.website} target="_blank" rel="noopener noreferrer"
                        className="p-3 glass-card hover:bg-primary-500/20 transition-colors rounded-xl">
                        <Globe size={20} />
                    </a>
                </div>
                <p className="text-xs text-gray-600">© {new Date().getFullYear()} · Built with React + Tailwind CSS</p>
            </div>
        </footer>
    );
}