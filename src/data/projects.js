import electrotransImage from "../assets/electrotrans-homepage.png";
import smitelImage from "../assets/smitel-homepage.png";
import passKeeperImage from "../assets/passkeeper-homepage.png";

export const projects = [
  {
    title: "Smitel Group",
    category: "Desarrollo Web / WordPress",
    description:
      "Sitio web corporativo desarrollado y optimizado durante el periodo de prácticas en Smalldev mediante WordPress y maquetadores visuales.",
    tech: ["WordPress", "Divi", "Elementor", "CSS", "PHP"],
    link: "https://smitelgroup.com/",
    image: smitelImage,
    thumbnailFit: "natural",
  },
  {
    title: "Electrotrans",
    category: "Desarrollo Web / WordPress",
    description:
      "Sitio web desarrollado durante mis prácticas de DAW en Smalldev para Electrotrans, utilizando WordPress y los maquetadores visuales Elementor y Divi.",
    tech: ["WordPress", "Divi", "Elementor", "CSS", "PHP"],
    link: "https://electrotrans.es/",
    image: electrotransImage,
    thumbnailFit: "natural",
  },
  {
    title: "PassKeeper",
    category: "Desarrollo Web",
    description:
      "Aplicación web tipo bóveda para gestión segura de credenciales, desarrollada como proyecto final DAW con PHP, MySQL, HTML, CSS y JavaScript.",
    tech: ["PHP", "MySQL", "JavaScript", "Seguridad"],
    link: "https://github.com/Jediex69/PassKeeper",
    image: passKeeperImage,
    thumbnailFit: "natural",
  },
  {
    title: "CTF Reports",
    category: "Ciberseguridad",
    description:
      "Repositorio de writeups técnicos sobre laboratorios de pentesting, reconocimiento, explotación y escalada de privilegios.",
    tech: ["Kali Linux", "Nmap", "Wireshark", "Netcat", "Metasploit", "Burp Suite"],
  },
  {
    title: "Proyectos DAW",
    category: "Full Stack Junior",
    description:
      "Ejercicios y proyectos académicos orientados a desarrollo web, bases de datos, interfaces y programación backend.",
    tech: ["Java", "C#", "SQL", "Laravel"],
  },
];
