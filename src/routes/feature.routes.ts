import { FeatureController } from '../entities/feature/feature.controller';
import { FeatureType, Feature, FeatureSchema } from '../entities/feature/feature.model';
import { FeatureService } from '../entities/feature/feature.svc';
import { Router, Request, Response } from 'express';

const featureController = new FeatureController(new FeatureService(Feature(FeatureSchema())));
const featRouter = Router();

// Create a new feature
featRouter.post('/', async (req: Request, res: Response) => {
  try {
    const feature = await featureController.createFeature(req.body);
    res.status(200).json({ ok: true, data: feature });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, data: "Couldn't create your feature :(" });
  }
});
// Get one feature.
featRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const feature = await featureController.getSingleFeature(id);
    res.status(200).json({ ok: true, data: feature });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, data: "Couldn't retrieve your feature :(" });
  }
});
// Get all features.
featRouter.get('/', async (req: Request, res: Response) => {
  try {
    const features = await featureController.getManyFeatures();
    res.status(200).json({ ok: true, data: features });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, data: "Couldn't retrieve all your features :(" });
  }
});

// Remove a feature.
featRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const feature = await featureController.deleteFeature(id);
    res.status(200).json({ ok: true, data: 'Feature removed!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, data: "Couldn't remove your feature :(" });
  }
});

// Update one feature.
featRouter.put('/:id', async (req: Request, res: Response) => {
  try {
    const { feature } = req.body;
    const updated = await featureController.updateFeature(feature);
    res.status(200).json({ ok: true, data: updated });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, data: "Couldn't update your feature :(" });
  }
});

export { featRouter };
