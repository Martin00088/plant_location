"use client";

import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";

const AddLocation = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Planta agregada");
  };

  return (
    <Dialog>
      <div className="flex justify-end">
        <DialogTrigger asChild>
          <Button>Agregar Planta</Button>
        </DialogTrigger>
      </div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Agregar Planta</DialogTitle>
          <DialogDescription>
            Complete la informacion requerida para añadir una nueva planta.
          </DialogDescription>
        </DialogHeader>
        <div className="py-2 items-center ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              id="fixedCost"
              type="number"
              placeholder="Ingrese el costo fijo..."
              className="mb-2"
              {...register("cost", { required: true })}
            />
            <Input
              id="capacity"
              type="number"
              placeholder="Ingrese la capacidad..."
              {...register("capacity")}
            />
            <DialogFooter>
              <Button type="submit">Agregar</Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddLocation;
