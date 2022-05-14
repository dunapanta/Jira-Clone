interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "PENDIENTE Tarea 1",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "PENDIENTE Tarea 2",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "PROGRESO Tarea 3",
      status: "in-progress",
      createdAt: Date.now() - 100000,
    },
    {
      description: "TERMINADA Tarea 4",
      status: "finished",
      createdAt: Date.now(),
    },
  ],
};
