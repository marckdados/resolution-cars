import prisma from "../config/database.js";
import { Cars, CarsEntity } from "../protocols.js";

async function getCars(): Promise<CarsEntity[]> {
  return await prisma.cars.findMany();
}

async function getCar(id: number): Promise<CarsEntity> {
  return await prisma.cars.findUnique({
    where: {
      id,
    },
  });
}

async function getCarWithLicensePlate(
  licensePlate: string
): Promise<CarsEntity> {
  return await prisma.cars.findUnique({
    where: {
      licensePlate,
    },
  });
}

async function createCar(car: Cars): Promise<void> {
  await prisma.cars.create({
    data: car,
  });
}

async function deleteCar(id: number): Promise<void> {
  await prisma.cars.delete({
    where: {
      id,
    },
  });
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar,
};

export default carRepository;
