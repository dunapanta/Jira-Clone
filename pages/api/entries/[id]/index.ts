import { db } from "database";
import { Entry, IEntry } from "models";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  /* const { id } = req.query;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "El id no es válido " + id });
  } */

  switch (req.method) {
    case "PUT":
      return updateEntry(req, res);
    case "GET":
      return getEntry(req, res);
    case "DELETE":
      return deleteEntry(req, res);
    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  try {
    await db.connect();

    const entry = await Entry.findById(id);

    if (!entry) {
      await db.disconnect();
      return res.status(404).json({ message: "El id no existe" });
    }
    await db.disconnect();
    return res.status(200).json(entry);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Algo ha ido mal" });
  }
};

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connect();

  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(404).json({ message: "El id no existe" });
  }

  //if If want to update description
  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      {
        description,
        status,
      },
      { runValidators: true, new: true }
    );
    return res.status(200).json(updatedEntry!);
  } catch (e) {
    await db.disconnect();
    console.log(e);
    return res.status(400).json({ message: "Error al actualizar" });
  }
};

const deleteEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query;

  await db.connect();

  const entryToDelete = await Entry.findById(id);

  if (!entryToDelete) {
    await db.disconnect();
    return res.status(404).json({ message: "El id no existe" });
  }

  try {
    await Entry.findByIdAndDelete(id);
    await db.disconnect();
    return res.status(200).json({ message: "El registro se ha eliminado" });
  } catch (e) {
    await db.disconnect();
    console.log(e);
    return res.status(400).json({ message: "Error al eliminar" });
  }
};
