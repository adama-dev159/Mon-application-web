export interface InfoDemande {
  id_demande?: number;
  date: string;
  heure: string;
  contenu: string;
  type_de_demande: string;
  id_personne?: number;
}