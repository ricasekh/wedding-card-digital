// Wedding configuration — Muhammad Rasekh Banday & Mir Maleeha Yousuf
const baseUrl = import.meta.env.BASE_URL || './';

export const weddingConfig = {
  couple: {
    bride: "Mir Maleeha Yousuf",
    groom: "Muhammad Rasekh Banday",
    brideShort: "Maleeha",
    groomShort: "Rasekh",
    hosts: "Mr. & Mrs. Mir Mohammad Yousuf",
    monogram: "R&M",
    initials: ["R", "M"],
    hashtag: "#RasekhWedsMaleeha",
    weddingDate: "2026-10-04T12:00:00+05:30",
    formattedDate: "Sunday, 04 October 2026",
    formattedTime: "12:00 Noon",
    bismillah: "In the name of Allah, the Most Gracious, the Most Merciful",
    invitationMessage:
      "Mr. & Mrs. Mir Mohammad Yousuf request the pleasure of your gracious presence at the wedding of their daughter",
    subtitle: "Together with their families",
    city: "Srinagar, Kashmir",
  },

  music: {
    title: "Erik Satie — Gymnopédie No. 1",
    // self-hosted so it works reliably (and offline) for every guest
    url: `${baseUrl}audio/gymnopedie-no-1.mp3`,
    credit: "Music: Gymnopédie No. 1, perf. Kevin MacLeod (incompetech.com) · CC BY 4.0",
  },

  venues: [
    {
      label: "The Nikkah & Feast",
      title: "Hotel Northern Residency",
      time: "12:00 Noon onwards",
      address: "Sanat Nagar Chowk, Srinagar, Jammu & Kashmir",
      googleMapsUrl: "https://maps.google.com/?q=Hotel+Northern+Residency+Sanat+Nagar+Srinagar",
      appleMapsUrl: "https://maps.apple.com/?q=Hotel+Northern+Residency+Sanat+Nagar+Srinagar",
      image: `${baseUrl}images/ceremony_venue.jpg`,
      note: "Buffet: gentlemen 12–3 PM · ladies from 4 PM",
    },
  ],

  schedule: [
    {
      time: "12:00",
      meridiem: "Noon",
      title: "Gracious Arrival",
      description: "Welcome of guests at Hotel Northern Residency, Sanat Nagar Chowk.",
    },
    {
      time: "12–3",
      meridiem: "PM",
      title: "Feast for Gentlemen",
      description: "Traditional wazwan buffet served for the gents, noon until three.",
    },
    {
      time: "4:00",
      meridiem: "PM",
      title: "Feast for Ladies",
      description: "Buffet served for the ladies from four in the afternoon.",
    },
  ],

  story: [
    {
      year: "2025",
      title: "Two Families, One City",
      description:
        "A blessed journey that brought two families together in the heart of Srinagar.",
      image: `${baseUrl}images/kashmir_mountains.jpg`,
    },
    {
      year: "2026",
      title: "The Nikkah",
      description:
        "Beginning our story in Kashmir's golden autumn, beneath the chinar leaves.",
      image: `${baseUrl}images/ceremony_venue.jpg`,
    },
  ],

  dressCode: {
    style: "Traditional & Formal Elegance",
    description:
      "Guests are warmly invited to wear traditional festive Kashmiri attire or formal wear, in the season's colours.",
    palette: [
      { name: "Forest Emerald", hex: "#1B4332" },
      { name: "Sapphire", hex: "#1D3557" },
      { name: "Ivory Cream", hex: "#F3ECE1" },
      { name: "Royal Gold", hex: "#C19A49" },
    ],
  },

  rsvp: {
    whatsappNumber: "919149602047",
    deadline: "25 September 2026",
    contactPerson: "Mr. Mir Mohammad Yousuf",
    contactPhone: "+91 91496 02047",
  },

  calendar: {
    title: "Wedding of Rasekh & Maleeha",
    description:
      "Nikkah & wedding celebration of Muhammad Rasekh Banday and Mir Maleeha Yousuf.",
    location: "Hotel Northern Residency, Sanat Nagar Chowk, Srinagar, Jammu & Kashmir",
    // UTC times: 12:00 noon IST on 04 Oct 2026 = 06:30 UTC
    startUTC: "20261004T063000Z",
    endUTC: "20261004T113000Z",
  },
};
