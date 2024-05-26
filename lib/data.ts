import React from "react";
import { LuEggFried, LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/hero.png";
import dera from "@/public/dera.png";
import ATTESTATIONaichouche1 from "@/public/attestations/ATTESTATION.-aichouche 1.png";
import ATTESTATIONaichouche2 from "@/public/attestations/ATTESTATION.-aichouche 2.png";
import ATTESTATIONaichouche3 from "@/public/attestations/ATTESTATION.-aichouche 3.png";
import ATTESTATIONaichouche4 from "@/public/attestations/ATTESTATION.-aichouche 4.png";

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
    title: " D.E.P KHENCHELA",

    projects: [
      "Projet : ETUDE ET SUIVIE POUR REALISATION D' UN LYCEE 800/attestations/200 R kais",
    ],
    imageUrl: dera,
    adress: "Commune de KHENCHELA",
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
