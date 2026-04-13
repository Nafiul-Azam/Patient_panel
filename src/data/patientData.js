export const patientProfile = {
  name: "Nafisa Rahman",
  patientId: "PT-2026-0147",
  phone: "+880 1712-345678",
  email: "nafisa.rahman@example.com",
  dob: "1998-06-14",
  gender: "Female",
  age: 27,
  bloodGroup: "B+",
  address: "Dhanmondi, Dhaka",
  emergencyContact: "+880 1811-223344",
  registeredDate: "2025-11-20",
  preferredLanguage: "Bangla",
  profileCompleteness: 88,
};

export const navItems = [
  { path: "/patient/dashboard", label: "Dashboard", icon: "dashboard" },
  { path: "/patient/history", label: "My Visits", icon: "history" },
  { path: "/patient/reports", label: "Reports", icon: "reports" },
  { path: "/patient/messages", label: "Messages", icon: "messages" },
  { path: "/patient/profile", label: "Profile", icon: "profile" },
];

export const quickActions = [
  "View Prescription",
  "View Lab Report",
  "Billing History",
  "Contact Doctor",
  "Download Money Receipt",
];

export const activeVisit = {
  admitted: true,
  admissionReference: "ADM-100842",
  tokenNumber: "A-17",
  status: "Waiting",
  doctor: "Dr. Farzana Karim",
  department: "Medicine",
  chamber: "Room 302",
  nextAppointment: "2026-04-16 10:30 AM",
  followUpDate: "2026-04-24",
};

export const notifications = [
  {
    id: 1,
    title: "Lab report ready",
    message: "CBC report for 11 Apr is now approved and ready to download.",
    type: "info",
    unread: true,
    date: "2h ago",
  },
  {
    id: 2,
    title: "Follow-up reminder",
    message: "Your follow-up consultation is scheduled on 24 Apr.",
    type: "follow-up",
    unread: true,
    date: "Today",
  },
  {
    id: 3,
    title: "Billing due",
    message: "A pending due of BDT 600 is available for test package.",
    type: "alert",
    unread: false,
    date: "Yesterday",
  },
];

export const visits = [
  {
    id: "VIS-9081",
    date: "2026-04-11",
    doctor: "Dr. Farzana Karim",
    department: "Medicine",
    type: "Follow-up",
    complaint: "Mild chest discomfort and fatigue",
    status: "Completed",
    followUp: "2026-04-24",
    lab: "Available",
    prescription: "Available",
  },
  {
    id: "VIS-9002",
    date: "2026-03-18",
    doctor: "Dr. Samiul Islam",
    department: "Cardiology",
    type: "Consultation",
    complaint: "Palpitation episodes",
    status: "Lab Pending",
    followUp: "2026-04-05",
    lab: "Pending",
    prescription: "Available",
  },
  {
    id: "VIS-8891",
    date: "2026-02-20",
    doctor: "Dr. Samiul Islam",
    department: "Cardiology",
    type: "Consultation",
    complaint: "Blood pressure review",
    status: "Completed",
    followUp: "2026-03-18",
    lab: "Available",
    prescription: "Available",
  },
];

export const prescription = {
  clinic: "Update Specialized Clinic",
  date: "2026-04-11",
  doctor: "Dr. Farzana Karim",
  department: "Medicine",
  diagnosis: "Mild gastric irritation with dehydration tendency",
  medicines: [
    { name: "Esomeprazole 20mg", dosage: "1 + 0 + 1", duration: "14 days" },
    { name: "ORS Sachet", dosage: "As needed", duration: "5 days" },
    { name: "Domperidone 10mg", dosage: "1 + 1 + 1", duration: "3 days" },
  ],
  advice: ["Drink 2.5L water daily", "Avoid spicy food for 1 week"],
  tests: ["CBC", "Serum Electrolytes"],
  nextFollowUp: "2026-04-24",
};

export const prescriptionSheets = {
  "VIS-9081": {
    doctorName: "Dr. Amina Rahman",
    doctorDepartment: "General Medicine",
    patientName: "Nafisa Rahman",
    date: "13 Apr 2026",
    age: "27",
    gender: "Female",
    weight: "58 kg",
    diagnosisTitle: "Fever and chest discomfort",
    assistantNote:
      "Vitals stable. Continue hydration and monitor cough frequency.",
    symptoms:
      "Low fever for 2 days, mild fatigue, chest heaviness while climbing stairs.",
    observations:
      "No acute distress. Pulse regular. Mild throat congestion with soft chest sounds.",
    diagnosis:
      "Probable viral upper respiratory tract infection with reflux-associated discomfort.",
    advice:
      "Warm fluids, avoid cold drinks, maintain rest, and follow dose timing strictly.",
    testRecommendation:
      "CBC, CRP, Chest X-ray (if fever persists over 3 days).",
    additionalNotes:
      "Seek emergency support if chest pain increases or breathing becomes difficult.",
    followUpDate: "2026-04-24",
    medicines: [
      {
        name: "Paracetamol 500mg",
        dose: "1 tab",
        frequency: "SOS (max 3/day)",
        duration: "3 days",
      },
      {
        name: "Pantoprazole 20mg",
        dose: "1 tab",
        frequency: "Before breakfast",
        duration: "7 days",
      },
      {
        name: "Levocetirizine 5mg",
        dose: "1 tab",
        frequency: "At night",
        duration: "5 days",
      },
    ],
  },
  "VIS-9002": {
    doctorName: "Dr. Samiul Islam",
    doctorDepartment: "Cardiology",
    patientName: "Nafisa Rahman",
    date: "18 Mar 2026",
    age: "27",
    gender: "Female",
    weight: "58 kg",
    diagnosisTitle: "Palpitation episodes",
    assistantNote: "Episode mostly stress-triggered. ECG observation advised.",
    symptoms:
      "Intermittent palpitation, mild dizziness, no fainting episode reported.",
    observations:
      "BP borderline elevated, pulse regular during examination, no edema noted.",
    diagnosis:
      "Likely stress-related sinus tachycardia; rule out electrolyte imbalance.",
    advice:
      "Reduce caffeine, maintain sleep cycle, and complete suggested investigations.",
    testRecommendation: "ECG, Serum Electrolytes, Thyroid Profile",
    additionalNotes:
      "If palpitation lasts more than 10 minutes with chest pain, go to emergency.",
    followUpDate: "2026-04-05",
    medicines: [
      {
        name: "Propranolol 10mg",
        dose: "1 tab",
        frequency: "1+0+1",
        duration: "10 days",
      },
      {
        name: "ORS Sachet",
        dose: "1 sachet",
        frequency: "As needed",
        duration: "5 days",
      },
    ],
  },
  "VIS-8891": {
    doctorName: "Dr. Samiul Islam",
    doctorDepartment: "Cardiology",
    patientName: "Nafisa Rahman",
    date: "20 Feb 2026",
    age: "27",
    gender: "Female",
    weight: "58 kg",
    diagnosisTitle: "Blood pressure review",
    assistantNote: "Blood pressure controlled compared to previous visit.",
    symptoms: "Occasional mild headache, otherwise stable.",
    observations: "BP improved, no red-flag symptoms at this time.",
    diagnosis: "Controlled elevated blood pressure with medication adherence.",
    advice: "Continue low-salt diet and daily 30-minute walk.",
    testRecommendation: "Routine BP monitoring chart",
    additionalNotes: "Bring BP chart in next follow-up.",
    followUpDate: "2026-03-18",
    medicines: [
      {
        name: "Amlodipine 5mg",
        dose: "1 tab",
        frequency: "0+0+1",
        duration: "30 days",
      },
    ],
  },
};

export const reports = [
  {
    id: "REP-701",
    title: "CBC Panel",
    department: "Pathology",
    date: "2026-04-11",
    status: "Approved",
    orderedBy: "Dr. Farzana Karim",
  },
  {
    id: "REP-688",
    title: "Lipid Profile",
    department: "Biochemistry",
    date: "2026-03-19",
    status: "Approved",
    orderedBy: "Dr. Samiul Islam",
  },
  {
    id: "REP-660",
    title: "ECG Observation",
    department: "Cardiology",
    date: "2026-03-18",
    status: "Under Review",
    orderedBy: "Dr. Samiul Islam",
  },
];

export const billingSummary = {
  totalPaid: 15400,
  totalDue: 600,
  recentPayment: 1800,
};

export const payments = [
  {
    id: "INV-1020",
    type: "Consultation Fee",
    method: "bKash",
    amount: 1200,
    date: "2026-04-11",
    status: "Paid",
  },
  {
    id: "INV-1017",
    type: "Lab Test Fee",
    method: "Card",
    amount: 1800,
    date: "2026-04-11",
    status: "Paid",
  },
  {
    id: "INV-1001",
    type: "Package Fee",
    method: "Cash",
    amount: 600,
    date: "2026-03-18",
    status: "Due",
  },
];

export const conversations = [
  {
    id: 1,
    name: "Dr. Farzana Karim",
    role: "Doctor",
    unread: 2,
    status: "replied",
    lastMessage: "Please continue your medicines and hydrate well.",
  },
  {
    id: 2,
    name: "Patient Support Desk",
    role: "Support",
    unread: 0,
    status: "open",
    lastMessage: "Your billing query has been forwarded to accounts.",
  },
];

export const chatMessages = [
  {
    id: 1,
    from: "doctor",
    text: "How are you feeling today?",
    time: "10:20 AM",
  },
  {
    id: 2,
    from: "patient",
    text: "Much better. Still slight discomfort after meals.",
    time: "10:22 AM",
  },
  {
    id: 3,
    from: "doctor",
    text: "Please follow the prescription and update me in 2 days.",
    time: "10:24 AM",
  },
];

export const supportCategories = [
  "Admission issue",
  "Billing issue",
  "Report issue",
  "Appointment issue",
  "Technical issue",
];

export const visitFilters = [
  "All",
  "Recent",
  "Follow-up",
  "Completed",
  "Pending",
  "Prescription",
  "Reports Available",
];
