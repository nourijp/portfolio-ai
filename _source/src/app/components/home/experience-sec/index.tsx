import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2021-2025",
            title: "Communications Manager",
            company: "CiraConnect",
            type: "Fulltime",
            description: "Led SaaS communications, documentation, training, and adoption support across teams. Coordinated cross-functional teams to clarify changes and improve rollout readiness, driving a 28% increase in adoption and 22% reduction in support requests."
        },
        {
            year: "2021-Present",
            title: "Content & Product Manager",
            company: "Aya & Sura, LLC",
            type: "Remote",
            description: "Led product communication, content development, and digital learning support. Leading development of an iOS learning app focused on shared progress and habit-building."
        },
        {
            year: "2009-Present",
            title: "Founder & Community Growth",
            company: "MManga",
            type: "Remote",
            description: "Built and scaled a digital content platform. Led content and communications strategy, growing audiences to 44K+ across platforms."
        },
        {
            year: "2017-2020",
            title: "Instructor & Communications Coach",
            company: "JET Programme",
            type: "Fulltime",
            description: "Delivered communication-focused instruction and coordinated programs requiring clear communication, planning, and stakeholder alignment in Tokyo, Japan."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;