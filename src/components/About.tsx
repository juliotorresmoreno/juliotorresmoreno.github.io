import { Cake, Code2, Cloud, ShieldCheck } from "lucide-react";
import { personalInfo, softSkills } from "../data/cvData";

const highlights = [
    { icon: Code2, label: "Backend Specialist", desc: "Node.js · TypeScript · Golang" },
    { icon: Cloud, label: "AWS Cloud", desc: "EC2 · Lambda · S3 · RDS" },
    { icon: ShieldCheck, label: "Fintech Security", desc: "Secure & scalable solutions" },
    { icon: Cake, label: "Birthday", desc: personalInfo.birthday },
];

export default function About() {
    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <p className="text-primary-400 font-medium mb-2">— 01</p>
                    <h2 className="section-title gradient-text">About Me</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {highlights.map(({ icon: Icon, label, desc }) => (
                        <div key={label} className="glass-card p-6 hover:bg-white/10 transition-all group">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400 group-hover:scale-110 transition-transform">
                                    <Icon size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">{label}</h3>
                                    <p className="text-gray-400 text-sm">{desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="glass-card p-8">
                    <h3 className="font-display text-xl font-semibold mb-6 text-primary-300">Strategic Skills</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {softSkills.map((skill) => (
                            <div key={skill.title}>
                                <h4 className="font-semibold mb-2">{skill.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}