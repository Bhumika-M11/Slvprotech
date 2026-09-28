export type SubService = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  subServices?: SubService[];
  features: string[];
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription:
      "Build high-performance websites and digital experiences that help grow your business.",
    description:
      "At SLV.Protech, we provide professional web development services to help businesses build powerful digital experiences that help grow their business. From business websites and web applications to SaaS platforms, custom portals, and WordPress websites, we build secure, responsive, and high-performance digital experiences to meet the specific requirements of your business.",
    subServices: [
      {
        title: "Business Website Development",
        description:
          "Professional websites that represent your brand. We create responsive, fast, intuitive and SEO-friendly business websites that communicate your brand and services effectively while providing a powerful experience across all devices.",
      },
      {
        title: "Web Application Development",
        description:
          "Scalable web applications built around your business requirements. We develop custom web applications, business management applications, customer portals, admin dashboards, CRM applications and database-driven platforms.",
      },
      {
        title: "SaaS Development",
        description:
          "Build, launch and scale your SaaS product. We develop cloud-based applications with features such as multi-tenant architecture, subscription management, payment integration, authentication, dashboards and APIs.",
      },
      {
        title: "Custom Portals",
        description:
          "Secure and intuitive portals for customers, employees, partners, vendors and other users. Custom portals can include role-based access, dashboards, document management, notifications, reports and third-party integrations.",
      },
      {
        title: "WordPress Development",
        description:
          "Flexible and SEO-friendly WordPress websites for businesses, startups, organizations and professionals. We provide custom themes, plugins, WooCommerce development, redesigns, SEO optimization, security and maintenance.",
      },
    ],
    features: [
      "Business Website Development",
      "Custom Website Development",
      "Responsive Web Development",
      "Web Application Development",
      "Corporate Website Development",
      "API & Third-Party Integration",
      "Website Maintenance & Support",
      "Performance Optimization",
      "SEO-Friendly Website Development",
      "SaaS Development",
      "Custom Portals",
      "WordPress Development",
    ],
    benefits: [
      "Professional online presence",
      "Responsive experience across devices",
      "Fast and high-performance websites",
      "Scalable digital solutions",
      "Secure development",
      "SEO-friendly architecture",
      "Easy website management",
      "Long-term business growth",
    ],
  },

  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription:
      "Create powerful mobile apps for Android and iOS with smooth performance and intuitive experiences.",
    description:
      "Our mobile app development services allow businesses to turn their ideas into reality. We build mobile applications that deliver smooth performance, intuitive navigation, and a powerful experience. Whether you need a business application or a customer-centric mobile app, our mobile application development experts can help build a solution that meets your specific requirements.",
    features: [
      "Android App Development",
      "iOS App Development",
      "Cross-Platform App Development",
      "Custom Mobile App Development",
      "Business Mobile Applications",
      "UI/UX Design",
      "API Integration",
      "Payment Gateway Integration",
      "App Maintenance & Support",
      "App Performance Optimization",
    ],
    benefits: [
      "Reach customers on mobile",
      "Smooth and intuitive user experience",
      "Support Android and iOS users",
      "Digitize business processes",
      "Improve customer engagement",
      "Integrate business APIs",
      "Secure payment workflows",
      "Scalable mobile applications",
    ],
  },

  {
    slug: "ai-development",
    title: "AI Development",
    shortDescription:
      "Build smarter solutions with artificial intelligence to automate processes and improve customer experiences.",
    description:
      "At SLV.Protech, we provide advanced AI development services that help businesses automate processes, improve customer experiences, increase productivity, and make better use of their data. From AI-powered applications and intelligent chatbots to voice agents, business automation, and AI integrations, we build practical solutions tailored to your business needs.",
    subServices: [
      {
        title: "AI Application Development",
        description:
          "Intelligent AI applications built for your business. We develop AI-powered applications that can automate tasks, analyze information, generate content, assist users, improve decision-making and solve specific business challenges.",
      },
      {
        title: "AI Chatbot Development",
        description:
          "Intelligent AI chatbots for better customer engagement. Our chatbots can understand user queries, provide relevant responses, assist customers, qualify leads and connect with your business systems.",
      },
      {
        title: "AI Voice Agents",
        description:
          "Conversational AI voice agents that can understand spoken language and respond naturally. They can support customer calls, lead qualification, appointment scheduling, inbound assistance and automated outbound calls.",
      },
      {
        title: "AI Automation",
        description:
          "Automate repetitive processes with AI. We build intelligent workflows for lead management, customer support, document processing, data entry, communication, reporting and other business operations.",
      },
      {
        title: "AI Integration",
        description:
          "Connect AI with your existing business systems. We integrate AI technologies with websites, mobile applications, CRM systems, databases, APIs, business software and other digital platforms.",
      },
    ],
    features: [
      "AI Application Development",
      "AI Chatbot Development",
      "AI Voice Bots",
      "Generative AI Solutions",
      "AI Automation",
      "AI-Powered Business Solutions",
      "AI API Integration",
      "Intelligent Virtual Assistants",
      "Machine Learning Solutions",
      "AI Integration for Websites & Apps",
    ],
    benefits: [
      "Reduce repetitive work",
      "Automate business processes",
      "Improve customer response time",
      "Increase operational productivity",
      "Build intelligent customer experiences",
      "Integrate AI into existing systems",
      "Make better use of business data",
      "Create practical AI-powered solutions",
    ],
  },

  {
    slug: "e-commerce-development",
    title: "E-Commerce Development",
    shortDescription:
      "Build powerful online stores that help businesses sell products and manage their digital storefront.",
    description:
      "Our e-commerce development services help businesses build powerful online stores. We develop e-commerce websites that make it easier for customers to discover products and make purchases. From start-ups and small businesses to large-scale e-commerce websites, we build solutions that are intuitive, secure, and optimized for performance and conversions.",
    features: [
      "Custom E-Commerce Website Development",
      "Online Store Development",
      "Product Catalog Development",
      "Shopping Cart Development",
      "Payment Gateway Integration",
      "Order Management Systems",
      "Inventory Management",
      "Customer Account Integration",
      "E-Commerce UI/UX Design",
      "E-Commerce Website Maintenance",
    ],
    benefits: [
      "Sell products online",
      "Easy product discovery",
      "Smooth shopping experience",
      "Secure checkout workflows",
      "Centralized order management",
      "Inventory management",
      "Mobile-friendly shopping",
      "Scalable online storefront",
    ],
  },

  {
    slug: "custom-software",
    title: "Custom Software Development",
    shortDescription:
      "Software solutions designed around your business requirements, workflows and operational goals.",
    description:
      "Every business has unique requirements. Our custom software development services help build software solutions around your specific requirements. Rather than forcing businesses to adapt their processes to fit an off-the-shelf solution, we build scalable and intuitive solutions that align with your business workflows and can scale as your business grows.",
    features: [
      "Custom Business Software",
      "Enterprise Software Development",
      "CRM Development",
      "ERP Solutions",
      "Business Process Automation",
      "Custom Web Applications",
      "API Development & Integration",
      "Database Management Solutions",
      "Software Modernization",
      "Software Maintenance & Support",
    ],
    benefits: [
      "Software designed around your workflow",
      "Automate repetitive processes",
      "Centralize business information",
      "Improve operational efficiency",
      "Reduce manual processes",
      "Integrate existing systems",
      "Scalable business software",
      "Long-term technology support",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
