import { Transaction } from '../types';
export const initialTransactions: Transaction[] = [
  { id: 1, datum: '2026-11-21', beschreibung: 'Gehalt -  Soft Outlet Metzingen', kategorie: 'Gehalt', art: 'Einnahme', betrag: 3850.00, konto: 'Girokonto' },
  { id: 2, datum: '2026-11-20', beschreibung: 'REWE Metzingen', kategorie: 'Lebensmittel', art: 'Ausgabe', betrag: -86.45, konto: 'Girokonto' },
  { id: 3, datum: '2026-11-19', beschreibung: 'Miete - Stuttgart Mitte', kategorie: 'Miete', art: 'Ausgabe', betrag: -950.00, konto: 'Girokonto' },
  { id: 4, datum: '2026-11-18', beschreibung: 'Freelance Projekt - React', kategorie: 'Freelance', art: 'Einnahme', betrag: 650.00, konto: 'Girokonto' },
];
