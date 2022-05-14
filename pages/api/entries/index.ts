import { db } from "database";
import { Entry, IEntry } from "models";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | IEntry[]
  | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //Endpoints for create and get entries
  switch (req.method) {
    case "GET":
      return genEntries(res);
    case "POST":
      return postEntry(req, res);
    default:
      return res.status(400).json({ message: "Recurso no existe" });
  }
}

const genEntries = async (res: NextApiResponse<Data>) => {
  await db.connect();
  const entries = await Entry.find().sort({ createdAt: "ascending" });
  await db.disconnect();

  res.status(200).json(entries);
};

const postEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ message: "Faltan datos" });
  }
  const entry = new Entry({ description, createdAt: Date.now() });

  try {
    await db.connect();
    await entry.save();
    await db.disconnect();
    return res.status(200).json(entry);
  } catch (error) {
    await db.disconnect();
    console.log(error);
    return res.status(500).json({ message: "Error al guardar" });
  }
};
