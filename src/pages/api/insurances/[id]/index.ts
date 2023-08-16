import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware, notificationHandlerMiddleware } from 'server/middlewares';
import { insuranceValidationSchema } from 'validationSchema/insurances';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.insurance
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getInsuranceById();
    case 'PUT':
      return updateInsuranceById();
    case 'DELETE':
      return deleteInsuranceById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getInsuranceById() {
    const data = await prisma.insurance.findFirst(convertQueryToPrismaUtil(req.query, 'insurance'));
    return res.status(200).json(data);
  }

  async function updateInsuranceById() {
    await insuranceValidationSchema.validate(req.body);
    const data = await prisma.insurance.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
  async function deleteInsuranceById() {
    await notificationHandlerMiddleware(req, req.query.id as string);
    const data = await prisma.insurance.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
