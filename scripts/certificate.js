/**
 * ÉLEVAGE PRO - Certificate Generator
 * Génération de certificats PDF avec jsPDF
 */

const CertificateManager = {
    /**
     * Génère un certificat PDF
     */
    generateCertificate(animalType, animalName, userName) {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a4'
        });

        const width = doc.internal.pageSize.getWidth();
        const height = doc.internal.pageSize.getHeight();
        const centerX = width / 2;

        // Couleurs
        const primaryColor = [45, 106, 79];
        const accentColor = [212, 163, 115];
        const textColor = [26, 26, 46];

        // Bordure décorative
        doc.setDrawColor(...primaryColor);
        doc.setLineWidth(3);
        doc.rect(10, 10, width - 20, height - 20);

        doc.setLineWidth(1);
        doc.rect(15, 15, width - 30, height - 30);

        // Coins décoratifs
        this.drawCornerDecoration(doc, 20, 20, primaryColor);
        this.drawCornerDecoration(doc, width - 20, 20, primaryColor, true);
        this.drawCornerDecoration(doc, 20, height - 20, primaryColor, false, true);
        this.drawCornerDecoration(doc, width - 20, height - 20, primaryColor, true, true);

        // En-tête
        doc.setFontSize(14);
        doc.setTextColor(...primaryColor);
        doc.text('ÉLEVAGE PRO - Formation Professionnelle', centerX, 35, { align: 'center' });

        // Titre principal
        doc.setFontSize(40);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(...textColor);
        doc.text('CERTIFICAT DE FORMATION', centerX, 55, { align: 'center' });

        // Ligne décorative
        doc.setDrawColor(...accentColor);
        doc.setLineWidth(2);
        doc.line(centerX - 80, 62, centerX + 80, 62);

        // Texte de certification
        doc.setFontSize(14);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(...textColor);
        doc.text('Ce certificat atteste que', centerX, 80, { align: 'center' });

        // Nom du participant
        doc.setFontSize(28);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(...primaryColor);
        doc.text(userName || 'Apprenant', centerX, 95, { align: 'center' });

        // Ligne sous le nom
        doc.setDrawColor(...accentColor);
        doc.setLineWidth(0.5);
        doc.line(centerX - 60, 100, centerX + 60, 100);

        // Description
        doc.setFontSize(14);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(...textColor);
        doc.text('a suivi avec succès la formation complète en', centerX, 115, { align: 'center' });

        // Nom de la formation
        doc.setFontSize(24);
        doc.setFont(undefined, 'bold');
        doc.setTextColor(...primaryColor);
        doc.text(`Élevage ${animalName}`, centerX, 130, { align: 'center' });

        // Modules validés
        doc.setFontSize(11);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(...textColor);
        const modules = [
            'Alimentation et nutrition',
            'Reproduction et génétique',
            'Santé animale et prévention',
            'Logement et infrastructures',
            'Gestion économique',
            'Réglementation sanitaire',
            'Bien-être animal'
        ];

        doc.text('Modules validés :', centerX, 145, { align: 'center' });
        doc.setFontSize(9);
        doc.text(modules.join(' • '), centerX, 152, { align: 'center' });

        // Date et signature
        const today = new Date();
        const dateStr = today.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });

        doc.setFontSize(12);
        doc.text(`Délivré le ${dateStr}`, centerX - 60, 175, { align: 'center' });

        // Zone signature
        doc.setDrawColor(...textColor);
        doc.setLineWidth(0.5);
        doc.line(centerX + 20, 180, centerX + 100, 180);
        doc.setFontSize(10);
        doc.text('Signature', centerX + 60, 185, { align: 'center' });

        // Numéro unique
        const certNumber = `EP-${animalType.toUpperCase().substring(0, 3)}-${Date.now().toString(36).toUpperCase()}`;
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text(`N° ${certNumber}`, centerX, 195, { align: 'center' });

        // Téléchargement
        doc.save(`Certificat_${animalName.replace(/\s/g, '_')}_${userName.replace(/\s/g, '_')}.pdf`);
    },

    /**
     * Dessine une décoration de coin
     */
    drawCornerDecoration(doc, x, y, color, flipX = false, flipY = false) {
        const size = 15;
        const dirX = flipX ? -1 : 1;
        const dirY = flipY ? -1 : 1;

        doc.setDrawColor(...color);
        doc.setLineWidth(1.5);

        // Lignes du coin
        doc.line(x, y, x + (size * dirX), y);
        doc.line(x, y, x, y + (size * dirY));
    },

    /**
     * Vérifie si un certificat peut être généré
     */
    canGenerateCertificate(animalType) {
        return ProgressManager.isFormationComplete(animalType);
    }
};
