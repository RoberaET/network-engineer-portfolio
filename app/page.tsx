"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, MapPin, Phone, Shield, Network, Award, Download, Send } from "lucide-react"
import Image from "next/image"
import Lanyard from "@/components/Lanyard"
import GlassIcons from "@/components/GlassIcons"
import SpotlightCard from "@/components/SpotlightCard";
import TiltedCard from "@/components/TiltedCard";
import DecryptedText from "@/components/DecryptedText";
import GradientText from "@/components/GradientText";
import LightRays from "@/components/LightRays";


export default function Portfolio() {
  const glassIconItems = [
    { 
      icon: <Download className="h-6 w-6" />, 
      color: 'blue', 
      label: 'Download Resume',
      onClick: () => window.open('https://drive.google.com/file/d/1SnumzvnIO9-Ddfyr35es2RE2bCqTZ8z2/view?usp=drive_link', '_blank')
    },
    { 
      icon: <Mail className="h-6 w-6" />, 
      color: 'green', 
      label: 'Get In Touch',
      onClick: () => window.open('mailto:robera4553@gmail.com?subject=Network Engineering Opportunity&body=Hello Robera,%0D%0A%0D%0AI hope this email finds you well. I came across your portfolio and would like to discuss potential opportunities.%0D%0A%0D%0ABest regards,', '_blank')
    }
  ];

  const skills = [
    "Network Security",
    "Firewall Configuration",
    "Penetration Testing",
    "Network Design",
    "Cisco Technologies",
    "Fortinet Solutions",
    "Vulnerability Assessment",
    "Security Auditing",
    "TCP/IP",
    "Routing & Switching",
    "VPN Implementation",
    "Incident Response",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="text-lg md:text-2xl font-bold text-gray-900">ROBERA MEKONNEN</span>
            </div>
            <nav className="flex space-x-4 md:space-x-8">
              <a 
                href="#home" 
                className="text-sm md:text-base text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('home')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-sm md:text-base text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                About
              </a>
              <a 
                href="#skills" 
                className="text-sm md:text-base text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('skills')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Skills
              </a>
              <a 
                href="#contact" 
                className="text-sm md:text-base text-gray-700 hover:text-blue-600 transition-colors duration-300 hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Lanyard Component */}
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

      {/* Hero Section */}
      <section className="py-0 px-4 sm:px-6 lg:px-8" id="home">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-6">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="text-4xl md:text-6xl font-bold"
              >
                Network Engineer & Cybersecurity Professional
              </GradientText>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              <DecryptedText
                text="I'm a Certified Computer Engineer with expertise in data center engineering, network installation, and system administration. I hold a Bachelor of Science in Computer Engineering and a Bachelor of Arts in Management, giving me both the technical skills and the business mindset to tackle complex IT challenges. My experience spans virtualization, Active Directory management, and network troubleshooting, supported by certifications in Cisco Networking (CCNA), Penetration Testing, and Fortinet Cybersecurity Associate. I'm passionate about building secure, efficient, and future‑ready IT solutions that bridge technology and strategy."
                speed={30}
                maxIterations={15}
                sequential={true}
                revealDirection="start"
                animateOn="hover"
                className="text-xl text-gray-600"
                encryptedClassName="text-xl text-gray-400"
              />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassIcons items={glassIconItems} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated to building robust network infrastructures and implementing comprehensive cybersecurity measures
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Summary</h3>
              <div className="space-y-4 text-gray-600 text-justify">
                <p>
                  I&apos;m a Computer Engineering graduate with a strong focus on network engineering and cybersecurity. My technical foundation spans the full IT spectrum — from designing, configuring, and optimizing network infrastructure to securing complex systems against modern cyber threats. I&apos;ve built hands-on expertise with industry-standard platforms, particularly Cisco and Fortinet technologies, through both academic training and real-world experience. I&apos;m driven by the challenge of making systems not just work, but work securely and efficiently at scale.
                </p>
                <p>
                  My passion for cybersecurity goes beyond the basics — I continuously stay ahead of emerging threats, attack surfaces, and adversarial tactics. I specialize in ethical hacking, vulnerability assessment, and building layered security architectures that proactively defend digital assets. Whether it&apos;s penetration testing or ensuring compliance with global standards, I view cybersecurity not as a standalone function but as an essential pillar of business resilience and operational integrity.
                </p>
                <p>
                  In addition to my engineering background, I hold a Bachelor&apos;s degree in Management from Addis Ababa University. This dual-discipline education has sharpened my abilities in leadership, team coordination, strategic planning, and business operations. It allows me to bridge the gap between technical execution and business decision-making — ensuring that the systems I design not only function well but also align with organizational goals, budgets, and growth trajectories.
                </p>
                <p>
                  By combining deep technical knowledge with strategic business insight, I operate effectively at the intersection of IT, innovation, and leadership. I&apos;m committed to building secure, scalable, and forward-thinking solutions that enable organizations to thrive in a fast-moving digital world — all while remaining adaptable, compliant, and resilient.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <SpotlightCard spotlightColor="rgba(59, 130, 246, 1.0)" className="bg-gray-900 border-gray-700">
                <div className="pb-4">
                  <h3 className="flex items-center text-white text-lg font-semibold">
                    <Network className="mr-2 h-5 w-5 text-blue-400" />
                    Network Engineering
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Designing and implementing scalable network infrastructures with focus on performance, reliability,
                  and security compliance.
                </p>
              </SpotlightCard>

              <SpotlightCard spotlightColor="rgba(239, 68, 68, 1.0)" className="bg-gray-900 border-gray-700">
                <div className="pb-4">
                  <h3 className="flex items-center text-white text-lg font-semibold">
                    <Shield className="mr-2 h-5 w-5 text-red-400" />
                    Cybersecurity
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Implementing comprehensive security frameworks, conducting penetration testing, and ensuring regulatory compliance across enterprise environments.
                </p>
              </SpotlightCard>

              <SpotlightCard spotlightColor="rgba(34, 197, 94, 1.0)" className="bg-gray-900 border-gray-700">
                <div className="pb-4">
                  <h3 className="flex items-center text-white text-lg font-semibold">
                    <Award className="mr-2 h-5 w-5 text-green-400" />
                    Strategic Leadership
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Driving organizational success by aligning teams, processes, and technology with long-term business goals. Skilled in cross-functional collaboration, decision-making, and resource management.
                </p>
              </SpotlightCard>

              <SpotlightCard spotlightColor="rgba(168, 85, 247, 1.0)" className="bg-gray-900 border-gray-700">
                <div className="pb-4">
                  <h3 className="flex items-center text-white text-lg font-semibold">
                    <Award className="mr-2 h-5 w-5 text-purple-400" />
                    Project & Operations Management
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Planning, executing, and optimizing projects with a focus on efficiency, timelines, and stakeholder value. Experienced in managing operations that scale sustainably across growing tech environments.
                </p>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Certifications
            </h2>
            <p className="text-lg text-gray-600">
              Industry-recognized certifications demonstrating expertise in networking and cybersecurity
            </p>
          </div>

          {/* Pixel Cards Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            <TiltedCard
              imageSrc="/img1.png"
              altText="CCNA Certification"
              captionText="CCNA - Cisco Certified Network Associate"
              containerHeight="280px"
              containerWidth="100%"
              imageHeight="280px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
            
            <TiltedCard
              imageSrc="/img2.png"
              altText="Ethical Hacker Certification"
              captionText="Ethical Hacker - Certified Ethical Hacker"
              containerHeight="280px"
              containerWidth="100%"
              imageHeight="280px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
            
            <TiltedCard
              imageSrc="/img3.png"
              altText="FCA Cybersecurity Certification"
              captionText="FCA - Fortinet Certified Associate"
              containerHeight="280px"
              containerWidth="100%"
              imageHeight="280px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
            
            <TiltedCard
              imageSrc="/img4.png"
              altText="FCF Cybersecurity Certification"
              captionText="FCF - Fortinet Certified Fundamentals"
              containerHeight="280px"
              containerWidth="100%"
              imageHeight="280px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600">Core competencies in network engineering and cybersecurity</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm font-medium hover:bg-blue-50 hover:border-blue-300 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={3}
            lightSpread={2}
            rayLength={3}
            fadeDistance={2}
            saturation={1.7}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-300">Ready to discuss network security solutions and opportunities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300">robera4553@gmail.com</p>
            </div>

            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+251 94155 2458</p>
            </div>

            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Addis Ababa, Ethiopia</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-12">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
              onClick={() => window.open('https://linkedin.com/in/roberamekonnen', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
              onClick={() => window.open('https://t.me/robera_mekonnen', '_blank')}
            >
              <Send className="mr-2 h-5 w-5" />
              Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 Network Engineer Portfolio. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
} 