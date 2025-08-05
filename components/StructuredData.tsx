export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Robera Mekonnen",
    "jobTitle": "Network Engineer",
    "description": "Expert Network Engineer specializing in network security, firewall configuration, and penetration testing",
    "url": "https://robera.vercel.app",
    "image": "https://robera.vercel.app/profile-image.jpg",
    "email": "robera4553@gmail.com",
    "telephone": "+251941552458",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Addis Ababa",
      "addressCountry": "Ethiopia"
    },
    "sameAs": [
      "https://linkedin.com/in/roberamekonnen",
      "https://t.me/robera_mekonnen"
    ],
    "knowsAbout": [
      "Network Security",
      "Penetration Testing", 
      "Firewall Configuration",
      "Cisco Technologies",
      "Network Infrastructure",
      "Cybersecurity",
      "VPN Implementation",
      "Incident Response"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "CCNA - Cisco Certified Network Associate"
      },
      {
        "@type": "EducationalOccupationalCredential", 
        "credentialCategory": "Ethical Hacker - Certified Ethical Hacker"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "FCA - Fortinet Certified Associate"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "FCF - Fortinet Certified Fundamentals"
      }
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Addis Ababa University"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Network Engineer"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
} 