export interface statusPropsType {
  statusImageUrl: string[];
  Name: string;
  time: Date;
  viewed: boolean;
}

// Example dummy array
export const statuses: statusPropsType[] = [
  {
    statusImageUrl: [
      "https://picsum.photos/seed/1/400/400",
      "https://picsum.photos/seed/2/400/400",
    ],
    Name: "Amina",
    time: new Date("2025-12-01T08:15:00.000Z"),
    viewed: false,
  },
  {
    statusImageUrl: ["https://picsum.photos/seed/3/400/400"],
    Name: "Kwesi",
    time: new Date("2025-12-01T12:30:00.000Z"),
    viewed: true,
  },
  {
    statusImageUrl: [
      "https://picsum.photos/seed/4/400/400",
      "https://picsum.photos/seed/5/400/400",
      "https://picsum.photos/seed/6/400/400",
    ],
    Name: "Sara",
    time: new Date("2025-11-30T22:45:00.000Z"),
    viewed: false,
  },
  {
    statusImageUrl: ["https://picsum.photos/seed/7/400/400"],
    Name: "Michael",
    time: new Date("2025-11-30T18:10:00.000Z"),
    viewed: true,
  },
  {
    statusImageUrl: [
      "https://picsum.photos/seed/8/400/400",
      "https://picsum.photos/seed/9/400/400",
    ],
    Name: "Nadia",
    time: new Date("2025-11-29T16:05:00.000Z"),
    viewed: true,
  },
];
