import { ProjectController } from '../entities/project/project.controller';
import { Project, ProjectSchema } from '../entities/project/project.model';
import { ProjectService } from '../entities/project/project.svc';
import { Router, Request, Response } from 'express';

const projectController = new ProjectController(new ProjectService(Project(ProjectSchema())));
const projRouter = Router();

// Create a new project
projRouter.post('/', async (req: Request, res: Response) => {
  try {
    const project = await projectController.createProject(req.body);
    res.status(200).json({ ok: true, data: project });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, data: "Couldn't create your project :(" });
  }
});
// Add feature to project
projRouter.post('/:id/features', async (req: Request, res: Response) => {
  try {
    const project = await projectController.addFeature(req.params.id, req.body);
    res.status(200).json({ ok: true, data: project });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, data: "Couldn't create your project :(" });
  }
});
// Get one project.
projRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await projectController.getSingleProject(id);
    res.status(200).json({ ok: true, data: project });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, data: "Couldn't retrieve your project :(" });
  }
});
// Get all projects.
projRouter.get('/', async (req: Request, res: Response) => {
  try {
    const projects = await projectController.getManyProjects();
    res.status(200).json({ ok: true, data: projects });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, data: "Couldn't retrieve all your projects :(" });
  }
});

// Remove a project.
projRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const project = await projectController.deleteProject(id);
    res.status(200).json({ ok: true, data: 'Project removed!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, data: "Couldn't remove your project :(" });
  }
});

// Update one project.
projRouter.put('/:id', async (req: Request, res: Response) => {
  try {
    const { project } = req.body;
    const updated = await projectController.updateProject(project);
    res.status(200).json({ ok: true, data: updated });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, data: "Couldn't update your project :(" });
  }
});

export { projRouter };
