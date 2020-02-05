import { Router } from 'express';

const createSalesRoute = ({ salesController }) => {
  const router = Router();
  const { index, show, create } = salesController;

  router.get('/', index);
  router.get('/:product_id', show);
  router.post('/', create);

  return router;
};

export default createSalesRoute;
