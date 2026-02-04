/**
 * ÉLEVAGE PRO - Données Ovins/Caprins
 */

const ovinsCaprinsData = {
    modules: [
        {
            title: "Alimentation et nutrition",
            content: `
                <h4>🌿 Besoins nutritionnels</h4>
                <p>Les ovins et caprins consomment 2,5 à 4% de leur poids en matière sèche/jour.</p>
                <ul>
                    <li><strong>Caprins</strong> : préfèrent fourrages ligneux</li>
                    <li><strong>Ovins</strong> : meilleurs valorisateurs de l'herbe</li>
                    <li><strong>Base</strong> : pâturage, foins, concentrés, minéraux</li>
                </ul>
                <div class="lesson-tip">
                    <div class="lesson-tip-title">💡 Abreuvement</div>
                    <p>Chèvre laitière : 8-15 L/jour. Brebis allaitante : 6-10 L/jour.</p>
                </div>
            `,
            quiz: [
                { question: "Les caprins préfèrent :", options: ["L'herbe rase", "Les fourrages ligneux", "Les céréales", "L'ensilage"], correct: 1 },
                { question: "Eau/jour pour chèvre laitière ?", options: ["1-2 L", "4-6 L", "8-15 L", "20-30 L"], correct: 2 },
                { question: "Premier aliment du nouveau-né ?", options: ["Eau", "Foin", "Colostrum", "Concentrés"], correct: 2 }
            ]
        },
        {
            title: "Reproduction et génétique",
            content: `
                <h4>🐑 Cycle reproducteur</h4>
                <ul>
                    <li>Brebis : cycle 17 jours, gestation 5 mois</li>
                    <li>Chèvre : cycle 21 jours, gestation 5 mois</li>
                    <li>Monte naturelle : 1 bélier pour 30-40 brebis</li>
                </ul>
                <div class="lesson-tip">
                    <div class="lesson-tip-title">💡 Effet mâle</div>
                    <p>L'introduction d'un bélier après séparation synchronise les chaleurs.</p>
                </div>
            `,
            quiz: [
                { question: "Durée gestation brebis ?", options: ["3 mois", "5 mois", "7 mois", "9 mois"], correct: 1 },
                { question: "Brebis par bélier ?", options: ["10-15", "20-25", "30-40", "50-60"], correct: 2 },
                { question: "Cycle de la chèvre ?", options: ["14 jours", "17 jours", "21 jours", "28 jours"], correct: 2 }
            ]
        },
        {
            title: "Santé animale et prévention",
            content: `
                <h4>💉 Principales maladies</h4>
                <ul>
                    <li><strong>Parasites</strong> : strongles, grande douve, coccidiose</li>
                    <li><strong>Piétin</strong> : boiterie bactérienne contagieuse</li>
                    <li><strong>Entérotoxémie</strong> : clostridiose mortelle</li>
                </ul>
                <p>Méthode FAMACHA : évaluation de l'anémie par muqueuses oculaires.</p>
            `,
            quiz: [
                { question: "FAMACHA évalue :", options: ["Le poids", "L'anémie", "La température", "L'appétit"], correct: 1 },
                { question: "Le piétin cause :", options: ["Fièvre", "Boiteries", "Diarrhées", "Avortements"], correct: 1 },
                { question: "La grande douve affecte :", options: ["Poumons", "Foie", "Cœur", "Reins"], correct: 1 }
            ]
        },
        {
            title: "Logement et infrastructures",
            content: `
                <h4>🏠 Bâtiments</h4>
                <ul>
                    <li>Brebis : 1,5-2 m² par animal</li>
                    <li>Chèvre : 1,5-2 m² par animal</li>
                    <li>Clôtures caprins : minimum 1,20 m de haut</li>
                    <li>Râteliers : 30-40 cm par animal</li>
                </ul>
            `,
            quiz: [
                { question: "Surface par brebis ?", options: ["0,5 m²", "1,5-2 m²", "4-5 m²", "8-10 m²"], correct: 1 },
                { question: "Hauteur clôture chèvres ?", options: ["0,80 m", "1,00 m", "1,20 m", "1,50 m"], correct: 2 },
                { question: "Linéaire râtelier ?", options: ["10-15 cm", "30-40 cm", "50-60 cm", "80 cm"], correct: 1 }
            ]
        },
        {
            title: "Gestion économique",
            content: `
                <h4>💰 Rentabilité</h4>
                <ul>
                    <li>Production laitière chèvre : 600-1000 L/an</li>
                    <li>GMQ agneaux : 250-350 g/jour</li>
                    <li>Alimentation : 45-55% des charges</li>
                </ul>
                <p>La transformation fromagère multiplie la valeur ajoutée par 3 à 5.</p>
            `,
            quiz: [
                { question: "Production chèvre/an ?", options: ["200-400 L", "600-1000 L", "1500-2000 L", "3000+ L"], correct: 1 },
                { question: "GMQ agneaux ?", options: ["100-150 g/j", "250-350 g/j", "500-600 g/j", "800+ g/j"], correct: 1 },
                { question: "Mortalité objectif ?", options: ["< 5%", "< 10%", "< 20%", "< 30%"], correct: 1 }
            ]
        },
        {
            title: "Réglementation sanitaire",
            content: `
                <h4>📋 Obligations</h4>
                <ul>
                    <li>Identification : 2 boucles électroniques avant 6 mois</li>
                    <li>Registre d'élevage : conservation 5 ans</li>
                    <li>Prophylaxie : brucellose, tremblante, FCO</li>
                </ul>
            `,
            quiz: [
                { question: "Âge identification ?", options: ["1 mois", "3 mois", "6 mois", "12 mois"], correct: 2 },
                { question: "Conservation registre ?", options: ["1 an", "3 ans", "5 ans", "10 ans"], correct: 2 },
                { question: "La tremblante est causée par :", options: ["Virus", "Bactérie", "Prion", "Parasite"], correct: 2 }
            ]
        },
        {
            title: "Bien-être animal",
            content: `
                <h4>💚 Bien-être</h4>
                <ul>
                    <li>Animaux grégaires : groupes stables</li>
                    <li>Chèvres : besoin de stimulation, structures pour grimper</li>
                    <li>État corporel idéal : 2,5 à 3,5</li>
                </ul>
            `,
            quiz: [
                { question: "Ovins/caprins sont :", options: ["Solitaires", "Grégaires", "Territoriaux", "Nocturnes"], correct: 1 },
                { question: "État corporel idéal ?", options: ["1,0-1,5", "2,5-3,5", "4,0-4,5", "5,0"], correct: 1 },
                { question: "Chèvres ont besoin de :", options: ["Solitude", "Stimulation", "Silence", "Espace réduit"], correct: 1 }
            ]
        }
    ]
};
