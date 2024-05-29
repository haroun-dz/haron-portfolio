import React from "react";
import { LuEggFried, LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/hero.png";
import dera from "@/public/dera.png";
import {
  ATTESTATIONaichouche1,
  ATTESTATIONaichouche2,
  ATTESTATIONaichouche3,
  ATTESTATIONaichouche4,
} from "@/lib/utils";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Attesstations",
    hash: "#attestations",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "HCM : DIRECTEUR TECHNIQUE",
    location: "Blida , Algeria",
    description: `Résponsable de l'étude et du suivie
Fabrication et control
Géstion de projet`,
    icon: React.createElement(LuEggFried),
    date: "JAN 2023 A CE JOUR",
  },
  {
    title: "EURL BAYTIMOD : INGENIEUR STRUCTURE",
    location: "Blida , Algeria",
    description: `Résponsable de l'étude et du suivie , 
Fabrication et control , 
Géstion de projet`,
    icon: React.createElement(LuGraduationCap),
    date: "JUL 2021 / DEC 2021",
  },
  {
    title: "BET AICHOUCHE : GÉRANT",
    location: "Blida , Algeria",
    description: `Responsable d’étude et dessin ,
Superviseur ,
Consultant`,
    icon: React.createElement(LuGraduationCap),
    date: `AUG 2019 A CE JOUR`,
  },
  {
    title: "ENG SCHOOL BLIDA : OWNER,MANAGER, INSTUCTOR AND TRAINER",
    location: "Blida , Algeria",
    description: `en charge du calcul des effets
climatiques (RNV13) et sismiques
(RPA03), structures en acier, béton
armé, sap2000, Etabs, Robot, Tekla
structure, Autocad.`,
    icon: React.createElement(LuGraduationCap),
    date: `DEC 2018 A CE JOUR`,
  },

  {
    title: "SAAD DAHLEB BLIDA’S UNIVERSITY : INSTRUCTOR",
    location: "Blida , Algeria",
    description: `En charge du calcul des effets
climatiques (RNV13) et sismiques
(RPA03), structures en acier, béton
armé, sap2000, Etabs, Robot, Tekla
structure, Autocad.`,
    icon: React.createElement(LuGraduationCap),
    date: "FEB 2019 / JUN 2019",
  },
] as const;
export const attestationsData = [
  {
    url: "/attestations/ATTESTATION.-aichouche 1.pdf",
    title: "Attestation 1",
    imageUrl: ATTESTATIONaichouche1,
  },
  {
    url: "/attestations/ATTESTATION.-aichouche 2.pdf",
    title: "Attestation 2",
    imageUrl: ATTESTATIONaichouche2,
  },
  {
    url: "/attestations/ATTESTATION.-aichouche 3.pdf",
    title: "Attestation 3",
    imageUrl: ATTESTATIONaichouche3,
  },
  {
    url: "/attestations/ATTESTATION.-aichouche 4.pdf",
    title: "Attestation 4",
    imageUrl: ATTESTATIONaichouche4,
  },
] as const;
export const projectsData = [
  {
    title: "AADL AIN NAADJA",
    projects: [
      "Projet 1 : 100 LOGEMENTS PUBLICS AIDES « LPA » 3 Bloc en R+8 ",
      "Projet 2 : Bloc Promotionnelle en R+6",
    ],

    adress: "CITE LOUZ- COMMUNE THENIA. BOUMERDES",
    imageUrl: corpcommentImg,
  },
  {
    title: "SARL PAVILLON MODERNE",

    projects: [
      "Ensemble immobilier à usage d'habitation de 04 blocs avec 2 blocs en r+mezzanine+08+02 sous-sol +01 entre sol +01 attique et 2 blocs en r+mezzanine+05+02 sous-sol +01 entre sol",
    ],
    imageUrl: dera,
    adress: "184, section : 14, boufarik, blida",
  },
  {
    title: "NAFTAL",

    projects: ["Projet : Abri de voiture et Abri de groupe Electrogène "],
    imageUrl: dera,
    adress: " site Ouled Mhia, Ain chriki,Elhachimia, Gare omar, beni mansour",
  },
  {
    title: "استثمار بلفاضل",

    projects: ["Projet : UNITÉ DE PRODUCTION D'EMBALLAGE DES OEUFS"],
    imageUrl: dera,
    adress: "ZONE . D'ACTIVITÉ. DÉPOT BAGHAI. KHENCHELA LOT N° 25+26",
  },
  {
    title: " مزارع الروبيان_الغذاء الفاخر",

    projects: ["مبنى هنجر مشروع مزارع الروبيان_الغذاء الفاخر : Projet 1"],
    imageUrl: dera,
    adress: "في مستورة المملكة العربية السعودية",
    dir: "rtl",
  },
  {
    title: " RESIDENCE NARCISSE",

    projects: ["Projet : Résidence en sous-sol , rdc + 9"],
    imageUrl: dera,
    adress: "08, rue des freres merakchi,belouizdad",
  },
  {
    title: " BANQUE AL BARAKA",

    projects: ["Projet : : Résidence en entre-sol , rdc + 7"],
    imageUrl: dera,
    adress: "n° 13 rue djabali rabah belouizdad",
  },
  {
    title: "SAKEN IMMOBILIERE",

    projects: [
      "Projet 1 : RESIDENCE DOHA 1 2sous sol/ rdc+6+attique Bloc central piscine",
      "Projet 2 : RESIDENCE DOHA 2 2sous sol/ rdc+6+attique",
    ],
    imageUrl: dera,
    adress: "dit verte rive commune de bordj el-kiffan, wilaya d'alger",
  },
  {
    title: " D.E.P KHENCHELA",

    projects: [
      "Projet : ETUDE ET SUIVIE POUR REALISATION D' UN LYCEE 800/attestations/200 R kais",
    ],
    imageUrl: dera,
    adress: "Commune de KHENCHELA",
  },
] as const;
export const formatorData = [
  {
    title:
      "Formation de 1 semaine pour le compte de la société ROUIBA ECLAIRAGE",
    projects: [
      "- THEME : Formation sur le DTR-C2-47 RNV 2013 Pour des Ossature Métallique spéciale ",
      "- Etude d’un mat de drapeau",
      "- Panneau solaire posé sur un bâtiment",
      "- Toiture isolée à un versant [parking solaire]",
      "- MAT à grand hauteur",
      "- MAT de diffusion à grande hauteur",
      "",
    ],

    adress: "",
    imageUrl: corpcommentImg,
  },
  {
    title: "Formation de 12 Jours pour le compte de la société GCB DCM",
    projects: [
      "THEME : Formation avancé sur le ROBOT STRUCUTRE ANALYSIS sur des structure suivante ",
      " - Etude d’un hangar avec mezzanine",
      " - Etude d’un pont roulant",
      " - Etude d’un bâtiment habitation en CM R+5",
      " - Etude d’une structure en treilles",
      " - Etude d’une structure en PRS et profilées légers",
      " - Etudes des escaliers",
    ],

    adress: "",
    imageUrl: corpcommentImg,
  },
  {
    title:
      "Formation de 1 semaine pour le compte de la société COSIDER CANALISATION BUREAU D‘ETUDE OULED FAYET",
    projects: [
      "THEME : Formation le ROBOT STRUCUTRE ANALYSIS sur des structure suivante ",
      " - Etude d’un hangar",
      " - Etude d’un bâtiment habitation en CM R+5",
      " ",
      " ",
      " ",
    ],

    adress: "",
    imageUrl: corpcommentImg,
  },
  {
    title:
      "Formation de 10 semaines pour le compte de la société COSIDER CANALISATION",
    projects: [
      "THEME : Logiciel ROBOT STRUCTURE ANALYSES en Béton et Charpente métallique ",
      " - Etude d’un hangar ",
      " - Etude d’un bâtiment habitation en CM R+5",
      " - Etude d’un bâtiment habitation en BA R+5",
      "  ",
      " ",
      " ",
      " ",
    ],

    adress: "",
    imageUrl: corpcommentImg,
  },
  {
    title:
      "Formation de 4 semaines pour le compte de la société COSIDER CANALISATION Pole C06 Hassi R’mel",
    projects: [
      "THEME : Logiciel TEKLA STRUCTURE en Charpente métallique. ",
      " - TEKLA MODELISATION 3D",
      " - TEKLA DESSIN 2D",
      " - ATELIER DE MODELISATION ET DE DESSIN",
    ],

    adress: "",
    imageUrl: corpcommentImg,
  },
  {
    title:
      "Formation de 1 semaine pour le compte de la société BATIMETAL CHARPENTE CENTRE",
    projects: [
      "THEME : Formation avancé sur le ROBOT STRUCUTRE ANALYSIS sur des structure suivante. ",
      " - Etude d’un hangar ",
      " - Etude d’un bâtiment habitation en CM R+5",
    ],

    adress: "",
    imageUrl: corpcommentImg,
  },
  {
    title: "Formation de 3 semaines pour le compte de la société INFRAFER",
    projects: [
      "THEME : Logiciel ROBOT STRUCTURE ANALYSES en Béton et Charpente métallique. ",
      " - Etude d’un bâtiment habitation en BA R+5",
      " - Etude d’une charpente métallique (hangar)",
      " - Etude de diverse structure spéciale (mur de soutènement, poutre précontrainte....)",
    ],

    adress: "",
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  "ROBOT",
  "IDEA STATICA",
  "ETABS",
  "TEKLA",
  "AUTOCAD ASD",
  "Gestion de projet.",
  "Fabrication et assemblage de constructions métalliques",
  "Conception de structures en acier et en béton",
] as const;
