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
      res.status(200).json({ message: "POST request successful" });
      break;
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
