export interface ChatbotService {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const chatbotServices: ChatbotService[] = [
  {
    id: "website-development",
    name: "Website Development",
    icon: "🌐",
    description:
      "We create modern, responsive and business-focused websites designed to strengthen your online presence and help generate business enquiries.",
  },
  {
    id: "ai-integration",
    name: "AI Development",
    icon: "🤖",
    description:
      "We help businesses integrate AI into websites, applications and workflows to automate tasks and improve customer interaction.",
  },
  {
    id: "e-commerce-development",
    name: "E-Commerce Development",
    icon: "📱",
    description:
      "We help businesses maintain their social media presence through content planning, posting, creative content, engagement and ongoing account management.",
  },
  {
    id: "custom-software",
    name: "Custom Software Development",
    icon: "🛠️",
    description:
      "Every business has unique requirements. Our custom software development services help build software solutions around your specific requirements. Rather than forcing businesses to adapt their processes to fit an off-the-shelf solution, we build scalable and intuitive solutions that align with your business workflows and can scale as your business grows.",
  },
  {
    id: "application-development",
    name: "Application Development",
    icon: "📲",
    description:
      "We develop customized web and mobile applications based on your business requirements, from planning and UI/UX to development and deployment.",
  },
];

export function getServiceById(id: string): ChatbotService | undefined {
  return chatbotServices.find((s) => s.id === id);
}
