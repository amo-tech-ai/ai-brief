import React from 'react';
import { GitHubIcon, LinkedInIcon } from './icons';

const SiteFooter: React.FC = () => {
    const LinkColumn: React.FC<{ title: string; links: { href: string; text: string }[] }> = ({ title, links }) => (
        <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">{title}</h3>
            <ul className="mt-4 space-y-4">
                {links.map(link => (
                    <li key={link.href}>
                        <a href={link.href} className="text-base text-gray-600 hover:text-gray-900">{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <footer className="bg-white border-t border-gray-200" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <a href="#/" className="flex items-center space-x-2">
                             <div className="bg-breef-text-primary text-white w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl">
                                A
                            </div>
                            <span className="font-bold text-breef-text-primary text-2xl">AMO AI</span>
                        </a>
                        <p className="text-gray-500 text-base">
                            Turn ideas into AI-powered applications. Smarter automation, measurable growth, real results.
                        </p>
                        <div className="flex space-x-6">
                             <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">LinkedIn</span>
                                <LinkedInIcon className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">GitHub</span>
                                <GitHubIcon className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <LinkColumn title="Solutions" links={[
                                    { href: "#/services/ai-web-dev", text: "AI Web Dev" },
                                    { href: "#/services/ai-app-dev", text: "AI App Dev" },
                                    { href: "#/services/social-media", text: "Social Media AI" },
                                    { href: "#/services/whatsapp", text: "WhatsApp AI" },
                                ]} />
                            </div>
                            <div className="mt-12 md:mt-0">
                                <LinkColumn title="Company" links={[
                                    { href: "#/about", text: "About" },
                                    { href: "#/process", text: "Process" },
                                    { href: "#/projects", text: "Projects" },
                                    { href: "#/contact", text: "Contact" },
                                ]} />
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                             <div>
                                <LinkColumn title="AI Tool" links={[
                                    { href: "#/brief-generator", text: "Start New Brief" },
                                    { href: "#/dashboard", text: "My Dashboard" },
                                ]} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">&copy; {new Date().getFullYear()} AMO AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;