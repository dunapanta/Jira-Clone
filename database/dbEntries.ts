import { db } from "database";
import { Entry, IEntry } from "models";
import { isValidObjectId } from "mongoose";

export const getEntryById = async (id: string): Promise<IEntry | null> => {
  if (!isValidObjectId(id)) return null;

  await db.connect();
  const entry = await Entry.findById(id).lean();
  await db.disconnect();

  return entry;
};
