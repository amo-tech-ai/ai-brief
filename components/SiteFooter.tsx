import React from 'react';
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, ChatBubbleIcon, YouTubeIcon } from './icons';

const SiteFooter: React.FC = () => {
    const solutionsLinks = [
        { href: "#/services/ai-web-dev", text: "AI Development" },
        { href: "#/services/whatsapp", text: "WhatsApp Automation" },
        { href: "#/services/automation", text: "Process Automation" },
        { href: "#/services/event-systems", text: "Event Systems" },
        { href: "#/services/multi-agent", text: "Multi-Agent Systems" },
        { href: "#/services/backend-apis", text: "Backend APIs" },
    ];

    const resourcesLinks = [
        { href: "#/projects", text: "Case Studies" },
        { href: "#/blog", text: "Blog" },
        { href: "#/roi-calculator", text: "ROI Calculator" },
        { href: "#/docs", text: "Documentation" },
        { href: "#/faq", text: "FAQ & Support" },
    ];

    const legalLinks = [
        { href: "#/privacy", text: "Privacy Policy" },
        { href: "#/terms", text: "Terms of Service" },
    ];

    const socialLinks = [
        { href: "#", label: "LinkedIn", icon: <LinkedInIcon className="h-6 w-6" /> },
        { href: "#", label: "GitHub", icon: <GitHubIcon className="h-6 w-6" /> },
        { href: "#", label: "YouTube", icon: <YouTubeIcon className="h-6 w-6" /> },
        { href: "#", label: "WhatsApp", icon: <ChatBubbleIcon className="h-6 w-6" /> },
    ];
    
    const LinkColumn: React.FC<{ title: string; links: { href: string; text: string }[] }> = ({ title, links }) => (
        <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">{title}</h3>
            <ul className="mt-4 space-y-3">
                {links.map(link => (
                    <li key={link.text}>
                        <a href={link.href} className="text-base text-gray-300 hover:text-white transition-colors duration-300">{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <footer className="bg-amo-process-dark" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                {/* Main footer content grid */}
                <div className="pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Brand & Contact */}
                    <div className="space-y-6">
                        <a href="#/" className="flex items-center space-x-2">
                             <div className="bg-white/10 text-white w-10 h-10 flex items-center justify-center rounded-lg font-bold text-xl">A</div>
                            <span className="font-bold text-white text-2xl">AMO AI</span>
                        </a>
                        <p className="text-gray-400 text-base">
                            We build AI-powered platforms with speed, automation, and reliability.
                        </p>
                        <div className="space-y-3">
                            <a href="mailto:info@amoai.co" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                <MailIcon className="h-5 w-5" /> <span>info@amoai.co</span>
                            </a>
                            <a href="tel:+14165003053" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                <PhoneIcon className="h-5 w-5" /> <span>+1 416-500-3053</span>
                            </a>
                             <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                                <ChatBubbleIcon className="h-5 w-5" /> <span>Chat on WhatsApp</span>
                            </a>
                        </div>
                        <div className="flex space-x-6 pt-2">
                             {socialLinks.map(social => (
                                <a key={social.label} href={social.href} className="text-gray-400 hover:text-white transition-colors">
                                    <span className="sr-only">{social.label}</span>
                                    {social.icon}
                                </a>
                             ))}
                        </div>
                    </div>

                    {/* Column 2: Solutions */}
                    <LinkColumn title="Solutions" links={solutionsLinks} />
                    
                    {/* Column 3: Resources */}
                    <LinkColumn title="Resources" links={resourcesLinks} />

                    {/* Column 4: Legal & CTA */}
                    <div>
                        <LinkColumn title="Legal" links={legalLinks} />
                        <div className="mt-8">
                            <a href="#/contact" className="inline-block bg-gradient-to-r from-amo-orange to-amber-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-orange-500/30 hover:scale-105 transform transition-all duration-300">
                                Book a Consultation
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
                    <p className="text-base text-gray-400 md:order-1">&copy; {new Date().getFullYear()} AMO AI — All Rights Reserved</p>
                    <div className="mt-4 flex flex-col sm:flex-row sm:space-x-6 md:mt-0 md:order-2 text-sm text-gray-400">
                        <span>SOC Live Applications</span>
                        <span className="hidden sm:inline">&bull;</span>
                        <span>6-Week Delivery</span>
                        <span className="hidden sm:inline">&bull;</span>
                        <span>Production-Ready Code</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
