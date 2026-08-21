import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { PersonneService } from './personne';
import { InfoDemandeService } from './info-demande';

@Component({
  selector: 'app-workflow',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule],
  templateUrl: './workflow.html',
  styleUrl: './workflow.css'
})
export class WorkflowComponent {
  ongletActif = signal<'accueil' | 'demande' | 'suggestion'>('accueil');
  messageErreur = signal<string | null>(null);
  messageSucces = signal<string | null>(null);

  constructor(
    private personneService: PersonneService,
    private infoDemandeService: InfoDemandeService
  ) {}

  changerOnglet(onglet: 'accueil' | 'demande' | 'suggestion') {
    this.ongletActif.set(onglet);
    this.messageErreur.set(null);
    this.messageSucces.set(null);
  }

  envoyer(nom: string, email: string, texte: string, type: 'demande' | 'suggestion') {
    const contenu = texte.trim();
    const nomTrim = nom.trim();
    const emailTrim = email.trim();

    if (!nomTrim || !emailTrim || !contenu) {
      this.messageErreur.set('Merci de remplir tous les champs avant d\'envoyer.');
      this.messageSucces.set(null);
      return;
    }

    this.personneService.createPersonne({ name: nomTrim, mail: emailTrim }).subscribe({
      next: (personneCreee: any) => {
        const idPersonne = personneCreee.id;

        const maintenant = new Date();
        const date = maintenant.toISOString().slice(0, 10);
        const time = maintenant.toTimeString().slice(0, 8);

        this.infoDemandeService.createInfoDemande({
          date,
          time,
          contenu,
          type_donnee: type,
          id_personne: idPersonne
        }).subscribe({
          next: () => {
            this.messageErreur.set(null);
            this.messageSucces.set('Votre message a bien été envoyé, merci !');
            setTimeout(() => this.changerOnglet('accueil'), 2000);
          },
          error: () => {
            this.messageErreur.set('Erreur lors de l\'envoi de votre demande.');
          }
        });
      },
      error: () => {
        this.messageErreur.set('Erreur lors de l\'enregistrement de vos informations.');
      }
    });
  }
}