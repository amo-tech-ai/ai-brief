import React from 'react';
import { ChartBarIcon, HeartIcon, MegaphoneIcon, UsersIcon } from '../components/icons';

export const agentData: { [key: string]: any } = {
  sales: {
    id: 'sales',
    icon: <ChartBarIcon className="w-12 h-12 text-amo-orange" />,
    title: "AI Sales Agent",
    subtitle: "Your autonomous agent for lead qualification, meeting scheduling, and closing deals 24/7.",
    features: [
      "24/7 Lead Engagement & Qualification",
      "Automated Calendar Booking",
      "Personalized Follow-Up Sequences",
      "Seamless CRM Integration (HubSpot, Salesforce)",
      "Instant Responses via Web & WhatsApp",
      "Intelligent Objection Handling"
    ],
    description: "Never let a lead go cold again. Our AI Sales Agent engages potential customers the moment they show interest, qualifies them based on your criteria, and books meetings directly into your team's calendar. It's your most dedicated sales development representative, working tirelessly around the clock.",
    useCases: [
        { name: 'Real Estate', description: 'Instantly qualify buyer and seller leads and schedule property viewings.' },
        { name: 'SaaS', description: 'Book demos with qualified enterprise leads automatically.' },
        { name: 'Consulting', description: 'Schedule initial consultations without the back-and-forth emails.' },
    ],
    roi: [
        { metric: '+45%', label: 'Increase in Qualified Leads' },
        { metric: '-90%', label: 'Reduction in Lead Response Time' },
        { metric: '24/7', label: 'Lead Coverage' },
    ]
  },
  support: {
    id: 'support',
    icon: <HeartIcon className="w-12 h-12 text-amo-orange" />,
    title: "AI Support Agent",
    subtitle: "Deliver instant, accurate, and empathetic customer support, reducing ticket volume and increasing satisfaction.",
    features: [
        "Instant First-Response Resolution",
        "Multi-language Support",
        "Access to Knowledge Base & Docs",
        "Smart Ticket Triaging & Escalation",
        "Order Status & Tracking Lookups",
        "Gathers Customer Feedback Automatically"
    ],
    description: "Free up your human support team to handle high-value interactions. Our AI Support Agent resolves up to 80% of common customer queries instantly, providing accurate information from your knowledge base and integrating with your existing helpdesk software for a seamless experience.",
     useCases: [
        { name: 'E-commerce', description: 'Handle order tracking, returns, and product questions instantly.' },
        { name: 'SaaS', description: 'Provide 24/7 technical support and user guidance.' },
        { name: 'Service Businesses', description: 'Answer FAQs and manage booking inquiries automatically.' },
    ],
    roi: [
        { metric: '-75%', label: 'Reduction in Support Tickets' },
        { metric: '+30%', label: 'Increase in CSAT Scores' },
        { metric: '80%', label: 'First-Contact Resolution Rate' },
    ]
  },
  marketing: {
    id: 'marketing',
    icon: <MegaphoneIcon className="w-12 h-12 text-amo-orange" />,
    title: "AI Marketing Agent",
    subtitle: "Your autonomous content creator, campaign manager, and performance analyst.",
    features: [
        "On-Brand Content Generation (Posts, Blogs, Ads)",
        "Social Media Scheduling & Publishing",
        "Audience Segmentation & Personalization",
        "A/B Testing & Performance Analysis",
        "Competitor & Trend Monitoring",
        "Automated Reporting"
    ],
    description: "Put your marketing strategy on autopilot. The AI Marketing Agent understands your brand voice, generates high-quality content, and optimizes your campaigns based on real-time performance data. It's a full marketing team in one autonomous system.",
     useCases: [
        { name: 'Startups', description: 'Generate consistent, high-quality content with a small team.' },
        { name: 'Agencies', description: 'Automate content creation and reporting for multiple clients.' },
        { name: 'Established Brands', description: 'Scale personalized marketing efforts across all channels.' },
    ],
    roi: [
        { metric: '-95%', label: 'Time Spent on Content Creation' },
        { metric: '+50%', label: 'Increase in Organic Engagement' },
        { metric: '2x', label: 'Content Output' },
    ]
  },
};
