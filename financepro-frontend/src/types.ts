export interface Transaction {
  id: number;
  datum: string;
  beschreibung: string;
  kategorie: string;
  art: 'Einnahme' | 'Ausgabe';
  betrag: number;
  konto: string;
}