import { skills } from "../data/cvData";

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <p className="text-primary-400 font-medium mb-2">— 04</p>
                    <h2 className="section-title gradient-text">Technologies</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="glass-card p-6 hover:bg-white/10 transition-all">
                            <h3 className="font-display text-lg font-semibold mb-4 text-primary-300">{category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span key={skill} className="tag hover:bg-primary-500/20 transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}