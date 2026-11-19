import { Icons } from "@/components/icons";
import { House } from "lucide-react";
import { Braces, FileCode, Palette, LayoutGrid, Gamepad2 } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";

export const DATA = {
  name: "Kevin Vilchis Vargas",
  initials: "KV",
  url: "https://kedwered.github.io",
  location: "México",
  locationLink: "https://www.google.com/maps/place/México",
  description:
    "Estudiante de Ingeniería en Desarrollo y Gestión de Software. Me gusta hacer videojuegos, páginas web y automatizaciones que le quiten trabajo repetitivo a la gente.",
  summary:
    "Soy estudiante de [Ingeniería en Desarrollo y Gestión de Software en la Universidad Tecnológica Fidel Velázquez](/#education). Me gusta convertir ideas en cosas que funcionan, ya sea un videojuego, una página web o un script que le ahorre tiempo a alguien. En [Grupo Ancor](/#work) automaticé procesos de costos y cobros conectando APIs, y ahora estoy armando este portafolio para seguir aprendiendo y mostrar lo que hago.",
  avatarUrl: "/picofme.png",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "Sobre mí" },
    work: { order: 2, enabled: true, heading: "Experiencia", presentLabel: "Actualidad" },
    education: { order: 3, enabled: true, heading: "Educación" },
    skills: { order: 4, enabled: true, heading: "Habilidades" },
    projects: {
      order: 5, enabled: true,
      label: "Mis proyectos",
      heading: "Lo que he estado construyendo",
      text: "Estos son algunos de los proyectos en los que he trabajado, desde videojuegos hasta automatizaciones y mi propio portafolio.",
    },
    hackathons: {
      order: 7, enabled: false,
      label: "Hackathons",
      heading: "Me gusta construir cosas",
      text: "",
    },
    photos: {
      order: 6, enabled: false,
      heading: "Fotos",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contacto",
      heading: "Hablemos",
      text: "¿Quieres platicar o tienes una idea en mente? Escríbeme a mi correo o por LinkedIn y te respondo en cuanto pueda.",
    },
  },
  photos: [],
  skills: [
    { name: "Python", icon: Python },
    { name: "JavaScript", icon: Braces },
    { name: "HTML", icon: FileCode },
    { name: "CSS", icon: Palette },
    { name: "Bootstrap", icon: LayoutGrid },
    { name: "Godot", icon: Gamepad2 },
  ],
  navbar: [
    { href: "/", icon: House, label: "Inicio" },
  ],
  contact: {
    email: "kv11elxe@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/KedWered",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kevin-vilchis-vargas-733b25349",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Enviar correo",
        url: "mailto:kv11elxe@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Grupo Ancor",
      href: "#",
      badges: [],
      location: "México",
      title: "Desarrollador de automatización", // CAMBIAR: tu puesto real
      logoUrl: "https://avatar.vercel.sh/grupo-ancor?size=40",
      start: "Mes 08/05/2025", // CAMBIAR: fecha de inicio
      end: "Mes 18/08/2025", // CAMBIAR: fecha de fin (o quita esta línea si sigues ahí)
      description:
        "Automaticé procesos de costos y cobros conectando distintos sistemas mediante APIs, para reducir el trabajo manual y los errores en el día a día del equipo.",
    },
  ],
  education: [
    {
      school: "Universidad Tecnológica Fidel Velázquez",
      href: "#",
      degree: "Ingeniería en Desarrollo y Gestión de Software",
      logoUrl: "https://avatar.vercel.sh/utfv?size=40",
      start: "2023", // CAMBIAR: año de inicio
      end: "Actualidad",
    },
  ],
  projects: [
    {
      title: "Aura Battle",
      href: "#",
      dates: "Mes AAAA - Mes AAAA", // CAMBIAR
      active: true,
      description:
        "Videojuego desarrollado en Godot. Aquí puedes contar de qué trata, qué hiciste tú y qué fue lo más retador de hacerlo.",
      technologies: ["Godot"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Automatización de costos y cobros",
      href: "#",
      dates: "Mes AAAA - Mes AAAA", // CAMBIAR
      active: false,
      description:
        "Proyecto realizado en Grupo Ancor para automatizar el cálculo de costos y el seguimiento de cobros, conectando los sistemas de la empresa por medio de APIs.",
      technologies: ["Python", "APIs"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Mi portafolio",
      href: "https://kedwered.github.io",
      dates: "Noviembre 2026 - Actualidad",
      active: true,
      description:
        "Este mismo sitio. Lo armé a partir de una plantilla de Astro y lo publiqué con GitHub Pages para tener un lugar donde mostrar mis proyectos.",
      technologies: ["Astro", "TailwindCSS", "GitHub Pages"],
      links: [
        {
          type: "Sitio",
          href: "https://kedwered.github.io",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Código",
          href: "https://github.com/KedWered/KedWered.github.io",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;