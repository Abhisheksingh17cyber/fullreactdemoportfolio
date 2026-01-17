import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  const doctorInfo = {
    name: "Dr. Gari",
    title: "World-Class Surgeon",
    specialization: "Cardiothoracic & Minimally Invasive Surgery",
    experience: "25+",
    surgeries: "15,000+",
    successRate: "99.2%",
    awards: "50+",
    email: "contact@drgari.com",
    phone: "+1 (555) 123-4567",
    address: "123 Medical Center Drive, Suite 500, New York, NY 10001",
    bio: "With over 25 years of experience in advanced surgical procedures, Dr. Gari has revolutionized minimally invasive surgery techniques. His pioneering work in robotic-assisted surgery has earned him international recognition and numerous awards.",
    education: [
      { degree: "M.D.", institution: "Harvard Medical School", year: "1998" },
      { degree: "Surgical Residency", institution: "Johns Hopkins Hospital", year: "2003" },
      { degree: "Fellowship - Cardiothoracic Surgery", institution: "Mayo Clinic", year: "2005" }
    ],
    certifications: [
      "American Board of Surgery",
      "American Board of Thoracic Surgery",
      "Fellow, American College of Surgeons (FACS)",
      "Robotic Surgery Certification - Intuitive Surgical"
    ],
    services: [
      {
        title: "Minimally Invasive Surgery",
        description: "Advanced laparoscopic and robotic-assisted procedures with minimal scarring and faster recovery.",
        icon: "surgery"
      },
      {
        title: "Cardiothoracic Surgery",
        description: "Expert treatment for heart and chest conditions including bypass surgery and valve repair.",
        icon: "heart"
      },
      {
        title: "Robotic Surgery",
        description: "State-of-the-art da Vinci robotic surgical system for precise, controlled procedures.",
        icon: "robot"
      },
      {
        title: "Trauma Surgery",
        description: "Emergency surgical care for acute injuries and life-threatening conditions.",
        icon: "emergency"
      },
      {
        title: "Oncological Surgery",
        description: "Surgical treatment of cancerous tumors with focus on complete removal and preservation.",
        icon: "cancer"
      },
      {
        title: "Reconstructive Surgery",
        description: "Restoration of form and function following injury, disease, or congenital conditions.",
        icon: "reconstruct"
      }
    ],
    stats: [
      { value: "25+", label: "Years Experience" },
      { value: "15,000+", label: "Surgeries Performed" },
      { value: "99.2%", label: "Success Rate" },
      { value: "50+", label: "Awards & Honors" }
    ],
    testimonials: [
      {
        name: "James Morrison",
        role: "Heart Surgery Patient",
        content: "Dr. Gari saved my life. His expertise in minimally invasive heart surgery meant I was back on my feet in weeks instead of months. Truly exceptional care.",
        rating: 5,
        image: "patient1"
      },
      {
        name: "Sarah Chen",
        role: "Cancer Survivor",
        content: "The precision and care Dr. Gari showed during my tumor removal surgery was remarkable. His entire team made me feel confident throughout the entire process.",
        rating: 5,
        image: "patient2"
      },
      {
        name: "Michael Rodriguez",
        role: "Trauma Patient",
        content: "After my accident, Dr. Gari's quick thinking and surgical skill saved both my life and my quality of life. I can't thank him enough.",
        rating: 5,
        image: "patient3"
      },
      {
        name: "Emily Thompson",
        role: "Cardiac Patient",
        content: "World-class surgeon with a compassionate touch. Dr. Gari took the time to explain everything and put my family at ease.",
        rating: 5,
        image: "patient4"
      }
    ],
    publications: [
      { title: "Advances in Minimally Invasive Cardiac Surgery", journal: "Journal of Thoracic Surgery", year: "2023" },
      { title: "Robotic Surgery: A New Paradigm", journal: "Annals of Surgery", year: "2022" },
      { title: "Long-term Outcomes of TAVR Procedures", journal: "New England Journal of Medicine", year: "2021" }
    ],
    socialLinks: {
      linkedin: "https://linkedin.com/in/drgari",
      twitter: "https://twitter.com/drgari",
      researchgate: "https://researchgate.net/profile/drgari"
    }
  };

  const value = {
    isMenuOpen,
    setIsMenuOpen,
    activeSection,
    setActiveSection,
    isLoading,
    setIsLoading,
    doctorInfo
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
