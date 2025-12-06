export interface userList {
  firstName: string;
  profilePictureUrl: string;
  isStatusActive: boolean;
  messageSeen: boolean;
  time: Date;
  messagePreview: string;
  id: string;
}

// Example dummy data array for type userList
export const DummyUsers: userList[] = [
  {
    id: "1",
    firstName: "Amina",
    profilePictureUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    isStatusActive: true,
    messageSeen: false,
    time: new Date("2025-11-29T14:23:00Z"),
    messagePreview: "Hey — are we still on for tomorrow?",
  },
  {
    id: "2",
    firstName: "Kwesi",
    profilePictureUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    isStatusActive: false,
    messageSeen: true,
    time: new Date("2025-11-29T09:05:00Z"),
    messagePreview: "Thanks for sending that file.",
  },
  {
    id: "3",
    firstName: "Sara",
    profilePictureUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    isStatusActive: true,
    messageSeen: true,
    time: new Date("2025-11-28T22:45:00Z"),
    messagePreview: "What do you think of the new design?",
  },
  {
    id: "4",
    firstName: "Michael",
    profilePictureUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    isStatusActive: false,
    messageSeen: false,
    time: new Date("2025-11-28T18:12:00Z"),
    messagePreview: "Can we reschedule the meeting to next week?",
  },
  {
    id: "5",
    firstName: "Nadia",
    profilePictureUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    isStatusActive: true,
    messageSeen: true,
    time: new Date("2025-11-27T15:30:00Z"),
    messagePreview: "Sure — I’ll get back to you soon 🙋🏽‍♀️",
  },
];
