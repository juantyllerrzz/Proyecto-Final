import { Request, Response } from "express";
import { incidents } from "../data/incidents.data";
import { AppError } from "../errors/app-error";
import { CreateIncidentDto } from "../dtos/incident.dto";


export class IncidentController {


  getAll = async (req: Request, res: Response) => {

    res.status(200).json({
      ok: true,
      data: incidents
    });

  };



  getById = async (req: Request, res: Response) => {

    const id = Number(req.params.id);


    const incident = incidents.find(
      item => item.id === id
    );


    if (!incident) {

      throw new AppError(
        404,
        "Incident not found"
      );

    }


    res.status(200).json({
      ok: true,
      data: incident
    });

  };



  getCritical = async (req: Request, res: Response) => {

    const criticalIncidents = incidents.filter(
      incident => incident.priority === "CRITICAL"
    );


    res.status(200).json({
      ok: true,
      data: criticalIncidents
    });

  };



  getPending = async (req: Request, res: Response) => {

    const pendingIncidents = incidents.filter(
      incident =>
        incident.status === "OPEN" ||
        incident.status === "IN_PROGRESS"
    );


    res.status(200).json({
      ok: true,
      data: pendingIncidents
    });

  };



  getStats = async (req: Request, res: Response) => {


    const total = incidents.length;


    const open = incidents.filter(
      incident => incident.status === "OPEN"
    ).length;


    const inProgress = incidents.filter(
      incident => incident.status === "IN_PROGRESS"
    ).length;


    const resolved = incidents.filter(
      incident => incident.status === "RESOLVED"
    ).length;


    const critical = incidents.filter(
      incident => incident.priority === "CRITICAL"
    ).length;



    res.status(200).json({

      ok: true,

      data: {
        total,
        open,
        inProgress,
        resolved,
        critical
      }

    });

  };



  create = async (req: Request, res: Response) => {


    const data = req.body as CreateIncidentDto;


    const newIncident = {

      id:
        incidents.length > 0
          ? Math.max(...incidents.map(i => i.id)) + 1
          : 1,

      ...data,

      status: "OPEN" as const,

      createdAt: new Date().toISOString()

    };


    incidents.push(newIncident);


    res.status(201).json({

      ok: true,

      data: newIncident

    });


  };



  update = async (req: Request, res: Response) => {


    const id = Number(req.params.id);


    const index = incidents.findIndex(
      item => item.id === id
    );


    if (index === -1) {

      throw new AppError(
        404,
        "Incident not found"
      );

    }


    incidents[index] = {

      ...incidents[index],

      ...req.body,

      id

    };


    res.status(200).json({

      ok: true,

      data: incidents[index]

    });


  };



  changeStatus = async (
    req: Request,
    res: Response
  ) => {


    const id = Number(req.params.id);



    const incident = incidents.find(
      item => item.id === id
    );



    if (!incident) {

      throw new AppError(
        404,
        "Incident not found"
      );

    }



    const newStatus = req.body.status;



    const allowedTransitions: Record<string, string[]> = {


      OPEN: [
        "IN_PROGRESS",
        "RESOLVED"
      ],


      IN_PROGRESS: [
        "RESOLVED"
      ],


      RESOLVED: []

    };



    const possible =
      allowedTransitions[incident.status] ?? [];



    if (!possible.includes(newStatus)) {


      res.status(400).json({

        ok: false,

        message:
          `Invalid transition from ${incident.status} to ${newStatus}`

      });


      return;

    }



    incident.status = newStatus;



    res.status(200).json({

      ok: true,

      data: incident

    });


  };



  remove = async (
    req: Request,
    res: Response
  ) => {


    const id = Number(req.params.id);



    const index = incidents.findIndex(
      item => item.id === id
    );



    if (index === -1) {

      throw new AppError(
        404,
        "Incident not found"
      );

    }



    incidents.splice(index, 1);



    res.status(204).send();


  };


}