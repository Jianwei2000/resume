import { useEffect, useState } from "react";
import "../styles/Navbar.scss";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#banner", "#skills", "#portfolio", "#exp"];
      let currentSection = "";

      // 判斷哪一個區塊在視窗內
      sections.forEach((section) => {
        const element = document.querySelector(section);
        if (
          element &&
          element.getBoundingClientRect().top <= window.innerHeight / 2 &&
          element.getBoundingClientRect().bottom >= window.innerHeight / 2
        ) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 滾動到對應區塊的函數
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="navbar">
        <a href="/resume/" className="logo">
          JianWei
        </a>
        <div className="ham" onClick={handleMenu}>
          <div className="middle"></div>
        </div>
        <nav className={menuOpen ? "isOpen" : ""}>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#banner");
            }}
            className={activeSection === "#banner" ? "active" : ""}
          >
            About
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#skills");
            }}
            className={activeSection === "#skills" ? "active" : ""}
          >
            Skills
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#portfolio");
            }}
            className={activeSection === "#portfolio" ? "active" : ""}
          >
            Portfolio
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#exp");
            }}
            className={activeSection === "#exp" ? "active" : ""}
          >
            Experience
          </a>
        </nav>
      </div>
    </>
  );
}
