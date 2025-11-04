import React from 'react';
import {
    ArrowRightIcon,
    ChatBubbleLeftRightIcon,
    CheckIcon,
    CodeIcon,
    DevicePhoneMobileIcon,
    MegaphoneIcon
} from '../components/icons';

const servicesData: { [key: string]: any } = {
    'ai-web-dev': {
        icon: <CodeIcon className="w-12 h-12 text-amo-orange"/>,
        title: "AI Web Design & Development",
        subtitle: "From prompt to pixel — build production-ready websites with AI-assisted design, copy, and code.",
        features: [
            "AI-Generated Branding & UI Kits",
            "Dynamic, Personalized User Experiences",
            "Automated Content & SEO Optimization",
            "Intelligent E-commerce Solutions"
        ],
        description: "We merge cutting-edge AI with expert design to create web experiences that are not just beautiful, but intelligent. Our AI-driven process accelerates development, enhances creativity, and delivers websites that adapt to your users in real time."
    },
    'ai-app-dev': {
        icon: <DevicePhoneMobileIcon className="w-12 h-12 text-amo-orange"/>,
        title: "AI App Development",
        subtitle: "Adaptive apps that learn, automate, and analyze in real time — for web, mobile, and desktop.",
         features: [
            "Predictive Analytics & User Insights",
            "Natural Language Processing (NLP) Interfaces",
            "Computer Vision & Image Recognition",
            "Scalable AI Model Integration"
        ],
        description: "Build smarter applications that go beyond static functionality. We develop AI-powered mobile and web apps that provide predictive insights, automate complex tasks, and create truly personalized user journeys."
    },
    'social-media': {
        icon: <MegaphoneIcon className="w-12 h-12 text-amo-orange"/>,
        title: "Social Media Automation",
        subtitle: "Generate on-brand content, schedule campaigns, and measure performance automatically.",
         features: [
            "AI Content Creation & Curation",
            "Audience Growth & Engagement Bots",
            "Performance Analytics & Reporting",
            "Automated Ad Campaign Management"
        ],
        description: "Transform your social media strategy with AI. We build custom solutions to automate content creation, optimize your posting schedule, engage with your audience at scale, and provide deep insights into what drives results."
    },
    'whatsapp': {
        icon: <ChatBubbleLeftRightIcon className="w-12 h-12 text-amo-orange"/>,
        title: "WhatsApp AI Assistant",
        subtitle: "Engage customers 24/7 through personalized AI messaging on WhatsApp and social channels.",
         features: [
            "24/7 Automated Customer Support",
            "AI-Powered Sales & Lead Qualification",
            "Personalized Marketing Broadcasts",
            "Seamless CRM & E-commerce Integration"
        ],
        description: "Deploy an intelligent AI assistant on the world's most popular messaging app. Our WhatsApp chatbots provide instant support, qualify leads, and drive sales, delivering a conversational experience your customers will love."
    },
};

const CTASection = () => (
    <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-breef-text-primary sm:text-4xl">
                Ready to Build Your AI Vision?
            </h2>
            <p className="mt-4 text-lg leading-6 text-breef-text-secondary">
                Let's turn your concept into a reality. Start by creating a project brief with our AI assistant.
            </p>
            <a
                href="#/brief-generator"
                className="mt-8 w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-amo-orange hover:bg-opacity-90 sm:w-auto"
            >
                Start Your AI Brief <ArrowRightIcon className="ml-2 w-5 h-5"/>
            </a>
        </div>
    </section>
);


interface ServiceDetailPageProps {
    serviceId: string | undefined;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceId }) => {
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold text-breef-text-primary tracking-tight sm:text-5xl">
              Service Not Found
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-breef-text-secondary">
              The service you're looking for doesn't exist. Please check the URL or return to our services page.
            </p>
            <div className="mt-10">
              <a
                href="#/services"
                className="inline-block bg-amo-orange text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-opacity-90 transition-all"
              >
                Back to Services
              </a>
            </div>
          </div>
        </div>
      );
  }

  return (
    <div className="bg-white">
      <main>
        {/* Hero Section */}
        <div className="relative bg-gray-50 pt-32 pb-20 lg:pt-48 lg:pb-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="animate-scale-in">{service.icon}</div>
                    <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-breef-text-primary tracking-tight animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                        {service.title}
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-breef-text-secondary animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        {service.subtitle}
                    </p>
                </div>
            </div>
        </div>

        {/* Content Section */}
        <div className="py-20 lg:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                    <div>
                        <h2 className="text-3xl font-extrabold text-breef-text-primary animate-fade-in-up" style={{ animationDelay: '400ms' }}>What We Build</h2>
                        <p className="mt-4 text-lg text-breef-text-secondary animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                            {service.description}
                        </p>
                    </div>
                    <div className="mt-12 lg:mt-0 space-y-4">
                        {service.features.map((feature: string, index: number) => (
                             <div key={feature} className="flex items-start p-4 bg-gray-50/80 rounded-lg animate-fade-in-up" style={{ animationDelay: `${600 + index * 100}ms`}}>
                                <div className="flex-shrink-0">
                                    <CheckIcon className="w-6 h-6 text-amo-orange" />
                                </div>
                                <p className="ml-4 text-md font-medium text-breef-text-primary">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </main>
      <CTASection />
    </div>
  );
};

export default ServiceDetailPage;