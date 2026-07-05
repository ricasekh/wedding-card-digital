// Wedding Configuration File - Muhammad Rasekh Banday & Mir Maleeha Yousuf
const baseUrl = import.meta.env.BASE_URL || './';

export const weddingConfig = {
  couple: {
    bride: "Mir Maleeha Yousuf",
    groom: "Muhammad Rasekh Banday",
    brideShort: "Maleeha",
    groomShort: "Rasekh",
    hosts: "Mr. & Mrs. Mir Mohammad Yousuf",
    monogram: "R & M",
    hashtag: "#RasekhWedsMaleeha",
    weddingDate: "2026-10-04T12:00:00", // Sunday, 04 October 2026 at 12:00 PM
    formattedDate: "Sunday, 04 October 2026",
    formattedTime: "12:00 Noon",
    bismillah: "In the name of Allah, the Most Gracious, the Most Merciful.",
    invitationMessage: "Mr. & Mrs. Mir Mohammad Yousuf request the pleasure of your gracious presence at the wedding of their Daughter",
    tagline: "We request the honor of your presence as we celebrate our Nikkah & Wedding.",
    subtitle: "Together with their families",
    artwork: `${baseUrl}images/kashmir_mountains.jpg`,
    image: `${baseUrl}images/hero_couple.jpg`
  },

  music: {
    title: "Kashmiri Ambient / Acoustic Strings",
    url: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-wedding-acoustic-113824.mp3"
  },

  venues: {
    ceremony: {
      title: "Hotel Northern Residency",
      time: "12:00 Noon",
      address: "Sanat Nagar Chowk, Srinagar, Jammu & Kashmir",
      googleMapsUrl: "https://maps.google.com/?q=Hotel+Northern+Residency+Sanat+Nagar+Srinagar",
      appleMapsUrl: "https://maps.apple.com/?q=Hotel+Northern+Residency+Sanat+Nagar+Srinagar",
      image: `${baseUrl}images/kashmir_mountains.jpg`,
      note: "Buffet to be served from 12:00 PM to 3:00 PM."
    },
    reception: {
      title: "Sanat Nagar Banquet",
      time: "12:00 Noon",
      address: "Sanat Nagar Chowk, Srinagar, Jammu & Kashmir",
      googleMapsUrl: "https://maps.google.com/?q=Sanat+Nagar+Srinagar",
      appleMapsUrl: "https://maps.apple.com/?q=Sanat+Nagar+Srinagar",
      image: `${baseUrl}images/ceremony_venue.jpg`,
      note: "Gracious presence requested."
    }
  },

  itinerary: [
    {
      time: "12:00 Noon",
      title: "Gracious Arrival & Welcome",
      description: "Arrival of guests at Hotel Northern Residency, Sanat Nagar Chowk.",
      icon: "Church"
    },
    {
      time: "12:30 PM",
      title: "Traditional Kashmiri Feast / Lunch",
      description: "Buffet to be served from 12:00 PM to 3:00 PM.",
      icon: "Utensils"
    },
    {
      time: "1:30 PM",
      title: "Nikkah Blessing & Celebrations",
      description: "Celebrating the union of Rasekh & Maleeha.",
      icon: "Sparkles"
    }
  ],

  ourStory: [
    {
      year: "2024",
      title: "First Met",
      description: "A blessed journey that brought two families together in Srinagar.",
      image: `${baseUrl}images/kashmir_mountains.jpg`
    },
    {
      year: "2026",
      title: "The Nikkah",
      description: "Beginning our story in the heart of Kashmir surrounded by loved ones.",
      image: `${baseUrl}images/ceremony_venue.jpg`
    }
  ],

  gallery: [
    { id: 1, src: `${baseUrl}images/kashmir_mountains.jpg`, caption: "Kashmir Mountains" },
    { id: 2, src: `${baseUrl}images/ceremony_venue.jpg`, caption: "Sanat Nagar Estate" },
    { id: 3, src: `${baseUrl}images/hero_couple.jpg`, caption: "Celebration Moments" }
  ],

  dressCode: {
    style: "Traditional & Formal Elegance",
    description: "Guests are warmly invited to wear traditional festive Kashmiri attire or formal evening wear.",
    palette: [
      { name: "Forest Emerald Green", hex: "#1B4332" },
      { name: "Sapphire Blue", hex: "#1D3557" },
      { name: "Ivory Cream", hex: "#F3ECE1" },
      { name: "Royal Gold Accent", hex: "#D4AF37" }
    ]
  },

  giftRegistry: {
    message: "Your presence and prayers for Rasekh & Maleeha are the most treasured blessings.",
    iban: "Contact Family for Details",
    bankName: "Jammu & Kashmir Bank",
    swift: "JAKA0SANAT"
  },

  rsvp: {
    whatsappNumber: "919149602047",
    deadline: "September 25, 2026",
    contactPerson: "Mr. Mir Mohammad Yousuf (9149602047)"
  }
};
