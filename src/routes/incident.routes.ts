import { Router } from "express";

import { IncidentController } from "../controllers/incident.controller";

import { authMiddleware } from "../middlewares/auth.middleware";
import { adminMiddleware } from "../middlewares/admin.middleware";

import { validateId } from "../middlewares/validate-id.middleware";
import { validateIncident } from "../middlewares/validate-incident.middleware";
import { validatePriority } from "../middlewares/validate-priority.middleware";
import { validateTime } from "../middlewares/validate-time.middleware";


const router = Router();

const controller = new IncidentController();



// Obtener todos
router.get(
  "/",
  controller.getAll
);



// Obtener críticos
router.get(
  "/critical",
  controller.getCritical
);



// Obtener pendientes
router.get(
  "/pending",
  controller.getPending
);



// Estadísticas
router.get(
  "/stats",
  controller.getStats
);



// Obtener por ID
router.get(
  "/:id",
  validateId,
  controller.getById
);



// Crear incidente
router.post(
  "/",
  authMiddleware,
  validateIncident,
  validatePriority,
  validateTime,
  controller.create
);



// Actualizar incidente
router.put(
  "/:id",
  authMiddleware,
  validateId,
  validateIncident,
  validatePriority,
  validateTime,
  controller.update
);



// Cambiar estado
router.patch(
  "/:id/status",
  authMiddleware,
  validateId,
  controller.changeStatus
);



// Eliminar
router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  validateId,
  controller.remove
);



export default router;
