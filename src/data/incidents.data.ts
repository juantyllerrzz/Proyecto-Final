import { Incident } from "../models/incident.model";


export const incidents: Incident[] = [

  {
    id: 1,
    title: "Proyector sin señal",
    description:
      "El proyector no reconoce ningún computador conectado.",
    reporter: "Carlos Díaz",
    location: "Aula 201",
    priority: "MEDIUM",
    status: "OPEN",
    estimatedMinutes: 30,
    createdAt: new Date().toISOString()
  },

  {
    id: 2,
    title: "Computador no enciende",
    description:
      "El equipo no muestra señales de energía.",
    reporter: "Laura Gómez",
    location: "Laboratorio 304",
    priority: "HIGH",
    status: "OPEN",
    estimatedMinutes: 45,
    createdAt: new Date().toISOString()
  },

  {
    id: 3,
    title: "Falla de conexión WiFi",
    description:
      "El equipo pierde conexión constantemente.",
    reporter: "Miguel Torres",
    location: "Oficina 407",
    priority: "CRITICAL",
    status: "IN_PROGRESS",
    estimatedMinutes: 60,
    createdAt: new Date().toISOString()
  },

  {
    id: 4,
    title: "Impresora bloqueada",
    description:
      "La impresora no responde a solicitudes.",
    reporter: "Ana Torres",
    location: "Piso 2",
    priority: "LOW",
    status: "OPEN",
    estimatedMinutes: 20,
    createdAt: new Date().toISOString()
  },

  {
    id: 5,
    title: "Aplicación cerrada inesperadamente",
    description:
      "El software se cierra al iniciar.",
    reporter: "Pedro Ruiz",
    location: "Sala sistemas",
    priority: "HIGH",
    status: "RESOLVED",
    estimatedMinutes: 50,
    createdAt: new Date().toISOString()
  }

];
