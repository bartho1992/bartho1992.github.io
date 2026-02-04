/**
 * ÉLEVAGE PRO - Données Cuniculture ENRICHIES
 * Formation professionnelle complète
 */

const cunicultureData = {
    modules: [
        {
            title: "Alimentation et nutrition",
            content: `
                <h4>🥕 Physiologie digestive du lapin</h4>
                <p>Le lapin est un herbivore monogastrique avec une particularité unique : 
                la <strong>cæcotrophie</strong>.</p>

                <h4>📊 Besoins nutritionnels</h4>
                <table>
                    <tr>
                        <th>Nutriment</th>
                        <th>Croissance</th>
                        <th>Reproduction</th>
                        <th>Entretien</th>
                    </tr>
                    <tr>
                        <td>Protéines</td>
                        <td>16-18%</td>
                        <td>17-18%</td>
                        <td>12-14%</td>
                    </tr>
                    <tr>
                        <td>Fibres (cellulose)</td>
                        <td>14-16%</td>
                        <td>14-16%</td>
                        <td>15-18%</td>
                    </tr>
                    <tr>
                        <td>Énergie (kcal ED/kg)</td>
                        <td>2500-2600</td>
                        <td>2600-2700</td>
                        <td>2300-2400</td>
                    </tr>
                    <tr>
                        <td>Calcium</td>
                        <td>0,8-1,0%</td>
                        <td>1,0-1,2%</td>
                        <td>0,6-0,8%</td>
                    </tr>
                </table>

                <h4>🔄 La cæcotrophie</h4>
                <p>Le lapin produit deux types de crottes :</p>
                <ul>
                    <li><strong>Crottes dures</strong> : déchets éliminés</li>
                    <li><strong>Cæcotrophes</strong> : crottes molles réingérées, riches en vitamines B et protéines</li>
                </ul>

                <div class="lesson-tip">
                    <div class="lesson-tip-title">🌾 Importance des fibres</div>
                    <p>Un minimum de 14% de fibres est essentiel pour prévenir les troubles digestifs 
                    (entérites, météorisation). Le foin de bonne qualité doit toujours être disponible.</p>
                </div>

                <h4>💧 Consommation</h4>
                <ul>
                    <li><strong>Aliment</strong> : 130-180 g/jour (adulte)</li>
                    <li><strong>Eau</strong> : 150-300 mL/jour (plus en lactation)</li>
                    <li><strong>Lapine allaitante</strong> : jusqu'à 400 g aliment + 500 mL eau</li>
                </ul>
            `,
            quiz: [
                { question: "Consommation granulés adulte/jour ?", options: ["50-80 g", "130-180 g", "300-400 g", "500+ g"], correct: 1 },
                { question: "La cæcotrophie est ?", options: ["Maladie", "Ingestion crottes molles", "Reproduction", "Mue"], correct: 1 },
                { question: "Fibres minimum dans la ration ?", options: ["5-8%", "10-12%", "14-16%", "25-30%"], correct: 2 },
                { question: "Eau consommée/jour adulte ?", options: ["50-80 mL", "150-300 mL", "500-800 mL", "1 L+"], correct: 1 },
                { question: "Protéines en croissance ?", options: ["8-10%", "12-14%", "16-18%", "22-24%"], correct: 2 },
                { question: "Consommation lapine allaitante ?", options: ["100 g", "250 g", "400 g", "600 g"], correct: 2 },
                { question: "Cæcotrophes riches en ?", options: ["Eau", "Vitamines B", "Calcium", "Graisses"], correct: 1 },
                { question: "Foin sert à apporter ?", options: ["Protéines", "Fibres", "Eau", "Vitamines"], correct: 1 }
            ]
        },
        {
            title: "Reproduction et génétique",
            content: `
                <h4>🐇 Paramètres reproducteurs</h4>
                <table>
                    <tr>
                        <th>Paramètre</th>
                        <th>Valeur</th>
                    </tr>
                    <tr>
                        <td>Maturité sexuelle mâle</td>
                        <td>4-5 mois</td>
                    </tr>
                    <tr>
                        <td>Maturité sexuelle femelle</td>
                        <td>4-5 mois</td>
                    </tr>
                    <tr>
                        <td>Durée de gestation</td>
                        <td>31 jours (30-33)</td>
                    </tr>
                    <tr>
                        <td>Taille de portée</td>
                        <td>6-12 lapereaux</td>
                    </tr>
                    <tr>
                        <td>Poids naissance</td>
                        <td>50-70 g</td>
                    </tr>
                    <tr>
                        <td>Sevrage</td>
                        <td>28-35 jours</td>
                    </tr>
                </table>

                <h4>📅 Conduites de reproduction</h4>
                <ul>
                    <li><strong>Intensive</strong> : saillie 1-2 jours post-partum (8-9 portées/an)</li>
                    <li><strong>Semi-intensive</strong> : saillie 10-14 jours post-partum (6-7 portées/an)</li>
                    <li><strong>Extensive</strong> : après sevrage (4-5 portées/an)</li>
                </ul>

                <h4>🔍 Diagnostic de gestation</h4>
                <p>Palpation abdominale réalisable à partir du <strong>12ème jour</strong> après la saillie. 
                Les embryons sont palpables comme de petites billes.</p>

                <div class="lesson-info">
                    <div class="lesson-info-title">🧬 Races principales</div>
                    <p><strong>Chair</strong> : Néo-Zélandais Blanc, Californien, Hyplus
                    <br><strong>Fourrure</strong> : Rex, Angora
                    <br><strong>Géantes</strong> : Géant des Flandres, Bélier Français</p>
                </div>
            `,
            quiz: [
                { question: "Durée gestation lapine ?", options: ["21 jours", "31 jours", "45 jours", "60 jours"], correct: 1 },
                { question: "Taille portée moyenne ?", options: ["2-3", "6-12", "15-20", "25+"], correct: 1 },
                { question: "Âge sevrage ?", options: ["7-14 jours", "28-35 jours", "60 jours", "90 jours"], correct: 1 },
                { question: "Palpation possible à partir de ?", options: ["5 jours", "12 jours", "21 jours", "28 jours"], correct: 1 },
                { question: "Maturité sexuelle ?", options: ["2 mois", "4-5 mois", "8-10 mois", "12 mois"], correct: 1 },
                { question: "Poids naissance lapereau ?", options: ["20-30 g", "50-70 g", "100-150 g", "200 g"], correct: 1 },
                { question: "Portées/an en intensif ?", options: ["3-4", "6-7", "8-9", "12+"], correct: 2 },
                { question: "Race chair principale ?", options: ["Angora", "Néo-Zélandais", "Bélier", "Nain"], correct: 1 }
            ]
        },
        {
            title: "Santé animale et prévention",
            content: `
                <h4>💉 Principales maladies</h4>
                
                <table>
                    <tr>
                        <th>Maladie</th>
                        <th>Agent</th>
                        <th>Symptômes</th>
                        <th>Prévention</th>
                    </tr>
                    <tr>
                        <td>Myxomatose</td>
                        <td>Virus (moustiques)</td>
                        <td>Œdèmes face, yeux, oreilles</td>
                        <td>Vaccination</td>
                    </tr>
                    <tr>
                        <td>VHD (RHD)</td>
                        <td>Virus</td>
                        <td>Mort brutale, hémorragies</td>
                        <td>Vaccination</td>
                    </tr>
                    <tr>
                        <td>Pasteurellose</td>
                        <td>Bactérie</td>
                        <td>Rhinite, abcès, pneumonie</td>
                        <td>Biosécurité, ventilation</td>
                    </tr>
                    <tr>
                        <td>Coccidiose</td>
                        <td>Protozoaire</td>
                        <td>Diarrhée, amaigrissement</td>
                        <td>Hygiène, anticoccidiens</td>
                    </tr>
                    <tr>
                        <td>Entéropathie</td>
                        <td>Multifactoriel</td>
                        <td>Diarrhée grave, mortalité</td>
                        <td>Alimentation, hygiène</td>
                    </tr>
                </table>

                <h4>💊 Programme vaccinal</h4>
                <ul>
                    <li><strong>Vaccin combiné Myxo-VHD</strong> : à partir de 5 semaines</li>
                    <li><strong>Rappel</strong> : tous les 6 mois à 1 an selon épidémiologie</li>
                </ul>

                <div class="lesson-warning">
                    <div class="lesson-warning-title">⚠️ VHD2</div>
                    <p>Une nouvelle souche (VHD2 ou RHDV2) plus virulente circule depuis 2010. 
                    Vérifiez que votre vaccin protège aussi contre cette souche.</p>
                </div>
            `,
            quiz: [
                { question: "Myxomatose transmise par ?", options: ["Air", "Eau", "Moustiques/puces", "Alimentation"], correct: 2 },
                { question: "VHD signifie ?", options: ["Virus Hépatique", "Viral Hemorrhagic Disease", "Vaccination Hygiène", "Vétérinaire"], correct: 1 },
                { question: "Rappel vaccin tous les ?", options: ["1 mois", "6-12 mois", "3 ans", "Jamais"], correct: 1 },
                { question: "Coccidiose cause ?", options: ["Toux", "Diarrhée", "Paralysie", "Cécité"], correct: 1 },
                { question: "Vaccination possible à partir de ?", options: ["2 semaines", "5 semaines", "3 mois", "6 mois"], correct: 1 },
                { question: "Pasteurellose affecte ?", options: ["Peau", "Voies respiratoires", "Os", "Yeux"], correct: 1 },
                { question: "VHD2 apparue en ?", options: ["1990", "2000", "2010", "2020"], correct: 2 },
                { question: "Prévention entéropathie ?", options: ["Vaccin", "Alimentation + hygiène", "Antibiotiques", "Isolation"], correct: 1 }
            ]
        },
        {
            title: "Logement et infrastructures",
            content: `
                <h4>🏠 Types de logement</h4>
                
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Dimensions min</th>
                        <th>Avantages</th>
                        <th>Inconvénients</th>
                    </tr>
                    <tr>
                        <td>Cage maternité</td>
                        <td>60 x 50 cm + nid</td>
                        <td>Contrôle individuel</td>
                        <td>Espace limité</td>
                    </tr>
                    <tr>
                        <td>Cage engraissement</td>
                        <td>Grillage ou caillebotis</td>
                        <td>Hygiène, surveillance</td>
                        <td>Bien-être discuté</td>
                    </tr>
                    <tr>
                        <td>Parcs collectifs</td>
                        <td>0,3-0,5 m²/lapin</td>
                        <td>Bien-être, comportement</td>
                        <td>Hiérarchie, blessures</td>
                    </tr>
                    <tr>
                        <td>Élevage sol</td>
                        <td>Variable</td>
                        <td>Naturel</td>
                        <td>Parasitisme, creusage</td>
                    </tr>
                </table>

                <h4>🌡️ Ambiance</h4>
                <table>
                    <tr>
                        <th>Paramètre</th>
                        <th>Optimal</th>
                        <th>Limite</th>
                    </tr>
                    <tr>
                        <td>Température</td>
                        <td>15-20°C</td>
                        <td>5-30°C</td>
                    </tr>
                    <tr>
                        <td>Humidité</td>
                        <td>60-70%</td>
                        <td>50-80%</td>
                    </tr>
                    <tr>
                        <td>Ammoniac (NH3)</td>
                        <td>< 5 ppm</td>
                        <td>< 20 ppm</td>
                    </tr>
                    <tr>
                        <td>Ventilation</td>
                        <td>3-5 m³/h/kg</td>
                        <td>Éviter courants d'air</td>
                    </tr>
                </table>

                <div class="lesson-tip">
                    <div class="lesson-tip-title">🐰 Le lapin et la chaleur</div>
                    <p>Le lapin ne transpire pas et régule sa température par les oreilles. 
                    Au-dessus de 28°C, risque de stress thermique. Prévoir ventilation et brumisation.</p>
                </div>
            `,
            quiz: [
                { question: "Température optimale ?", options: ["5-10°C", "15-20°C", "25-30°C", "35°C"], correct: 1 },
                { question: "Surface cage maternité ?", options: ["30x30 cm", "60x50 cm", "100x100 cm", "2 m²"], correct: 1 },
                { question: "Gaz toxique à surveiller ?", options: ["Oxygène", "Ammoniac", "Azote", "CO2"], correct: 1 },
                { question: "Humidité idéale ?", options: ["30-40%", "60-70%", "80-90%", "> 95%"], correct: 1 },
                { question: "Régulation température via ?", options: ["Peau", "Respiration", "Oreilles", "Queue"], correct: 2 },
                { question: "Surface parc/lapin ?", options: ["0,1 m²", "0,3-0,5 m²", "1 m²", "2 m²"], correct: 1 },
                { question: "Risque au-dessus de 28°C ?", options: ["Rien", "Stress thermique", "Immunité", "Croissance"], correct: 1 },
                { question: "Ventilation recommandée ?", options: ["0,5 m³/h/kg", "3-5 m³/h/kg", "10 m³/h/kg", "20 m³/h/kg"], correct: 1 }
            ]
        },
        {
            title: "Gestion économique",
            content: `
                <h4>💰 Performances économiques</h4>
                
                <table>
                    <tr>
                        <th>Indicateur</th>
                        <th>Objectif rationnel</th>
                    </tr>
                    <tr>
                        <td>IC global</td>
                        <td>3,2-3,5 kg aliment/kg vif</td>
                    </tr>
                    <tr>
                        <td>GMQ (engraissement)</td>
                        <td>40-45 g/jour</td>
                    </tr>
                    <tr>
                        <td>Poids abattage</td>
                        <td>2,3-2,5 kg à 70-77 jours</td>
                    </tr>
                    <tr>
                        <td>Rendement carcasse</td>
                        <td>58-62%</td>
                    </tr>
                    <tr>
                        <td>Productivité/femelle</td>
                        <td>50-60 lapins sevrés/an</td>
                    </tr>
                    <tr>
                        <td>Mortalité naissance-vente</td>
                        <td>< 15%</td>
                    </tr>
                </table>

                <h4>💵 Structure des coûts</h4>
                <ul>
                    <li><strong>Alimentation</strong> : 55-65%</li>
                    <li><strong>Reproducteurs</strong> : 10-15%</li>
                    <li><strong>Bâtiments</strong> : 10-15%</li>
                    <li><strong>Santé</strong> : 3-5%</li>
                </ul>

                <div class="lesson-success">
                    <div class="lesson-success-title">📈 Optimisation de la marge</div>
                    <p>• Maîtriser l'IC (objectif < 3,5)
                    <br>• Réduire la mortalité (< 15%)
                    <br>• Maximiser la productivité numérique
                    <br>• Valoriser les coproduits (peaux, fumier)</p>
                </div>
            `,
            quiz: [
                { question: "IC optimal lapin ?", options: ["1-1,5", "2-2,5", "3,2-3,5", "5-6"], correct: 2 },
                { question: "Poids abattage ?", options: ["1 kg", "2,3-2,5 kg", "4 kg", "6 kg"], correct: 1 },
                { question: "Lapins sevrés/mère/an ?", options: ["10-20", "30-40", "50-60", "100+"], correct: 2 },
                { question: "Part alimentation dans charges ?", options: ["30-40%", "55-65%", "80%", "90%"], correct: 1 },
                { question: "GMQ en engraissement ?", options: ["15-20 g/j", "40-45 g/j", "60-70 g/j", "90 g/j"], correct: 1 },
                { question: "Âge abattage ?", options: ["30-40 j", "70-77 j", "100-120 j", "6 mois"], correct: 1 },
                { question: "Mortalité acceptable ?", options: ["< 5%", "< 15%", "< 30%", "< 50%"], correct: 1 },
                { question: "Rendement carcasse ?", options: ["40-45%", "58-62%", "70-75%", "85%"], correct: 1 }
            ]
        },
        {
            title: "Réglementation sanitaire",
            content: `
                <h4>📋 Cadre réglementaire</h4>
                <table>
                    <tr>
                        <th>Obligation</th>
                        <th>Détails</th>
                    </tr>
                    <tr>
                        <td>Registre d'élevage</td>
                        <td>Inventaire, traitements, mouvements</td>
                    </tr>
                    <tr>
                        <td>Conservation ordonnances</td>
                        <td>5 ans</td>
                    </tr>
                    <tr>
                        <td>Délais d'attente</td>
                        <td>Respecter avant abattage</td>
                    </tr>
                    <tr>
                        <td>Abattage</td>
                        <td>Abattoir agréé ou dérogation fermière</td>
                    </tr>
                </table>

                <h4>🥩 Vente directe</h4>
                <ul>
                    <li><strong>Dérogation fermière</strong> : jusqu'à 50 lapins/semaine</li>
                    <li><strong>Conditions</strong> : vente directe, marché local</li>
                    <li><strong>Au-delà</strong> : passage obligatoire en abattoir agréé</li>
                </ul>

                <div class="lesson-info">
                    <div class="lesson-info-title">📝 Traçabilité</div>
                    <p>Conservez tous les documents : bons de livraison aliment, 
                    factures reproducteurs, ordonnances, résultats d'analyses. 
                    Durée légale de conservation : 5 ans.</p>
                </div>
            `,
            quiz: [
                { question: "Registre élevage est ?", options: ["Facultatif", "Obligatoire", "Payant", "Annuel"], correct: 1 },
                { question: "Vente viande exige ?", options: ["Rien", "Abattoir agréé ou dérogation", "Véto", "Laboratoire"], correct: 1 },
                { question: "Délai d'attente concerne ?", options: ["Vente", "Reproduction", "Traitements", "Alimentation"], correct: 2 },
                { question: "Dérogation fermière jusqu'à ?", options: ["10 lapins/sem", "50 lapins/sem", "200 lapins/sem", "Illimité"], correct: 1 },
                { question: "Conservation documents ?", options: ["1 an", "3 ans", "5 ans", "10 ans"], correct: 2 },
                { question: "Ordonnances conservées ?", options: ["6 mois", "1 an", "5 ans", "Perpétuel"], correct: 2 },
                { question: "Registre contient ?", options: ["Recettes", "Traitements + mouvements", "Photos", "Plans"], correct: 1 },
                { question: "Abattoir agréé délivre ?", options: ["Certificat", "Estampille sanitaire", "Diplôme", "Médaille"], correct: 1 }
            ]
        },
        {
            title: "Bien-être animal",
            content: `
                <h4>💚 Besoins comportementaux</h4>
                <p>Le lapin est un animal social avec des besoins spécifiques 
                de plus en plus pris en compte en élevage.</p>

                <h4>🐰 Enrichissements</h4>
                <table>
                    <tr>
                        <th>Enrichissement</th>
                        <th>Fonction</th>
                    </tr>
                    <tr>
                        <td>Plateforme/étage</td>
                        <td>Surveillance, exercice</td>
                    </tr>
                    <tr>
                        <td>Objets à ronger</td>
                        <td>Usure des dents, occupation</td>
                    </tr>
                    <tr>
                        <td>Foin/substrat</td>
                        <td>Grattage, nidification</td>
                    </tr>
                    <tr>
                        <td>Contact congénères</td>
                        <td>Besoin social</td>
                    </tr>
                </table>

                <h4>📏 Évolutions réglementaires</h4>
                <ul>
                    <li>Tendance vers l'abandon des cages grillagées classiques</li>
                    <li>Développement des parcs enrichis</li>
                    <li>Augmentation des surfaces minimales</li>
                    <li>Labels bien-être en développement</li>
                </ul>

                <div class="lesson-success">
                    <div class="lesson-success-title">🌟 Indicateurs bien-être</div>
                    <p>• Pelage propre et brillant
                    <br>• Absence de lésions aux pattes (pododermatite)
                    <br>• Comportement actif et curieux
                    <br>• Absence de stéréotypies (mordillage barreaux)</p>
                </div>
            `,
            quiz: [
                { question: "Enrichissement essentiel ?", options: ["Musique", "Objets à ronger", "Lumière colorée", "Parfums"], correct: 1 },
                { question: "Tendance logement ?", options: ["Plus de cages", "Parcs enrichis", "Isolation", "Extérieur seul"], correct: 1 },
                { question: "Besoin social lapin ?", options: ["Solitude", "Contact congénères", "Bruit", "Obscurité"], correct: 1 },
                { question: "Plateforme sert à ?", options: ["Dormir", "Surveillance + exercice", "Manger", "Boire"], correct: 1 },
                { question: "Objets à ronger pour ?", options: ["Décoration", "Usure dents", "Nourriture", "Transport"], correct: 1 },
                { question: "Pododermatite affecte ?", options: ["Oreilles", "Pattes", "Yeux", "Dents"], correct: 1 },
                { question: "Stéréotypie = ?", options: ["Bonne santé", "Comportement anormal répétitif", "Reproduction", "Alimentation"], correct: 1 },
                { question: "Pelage sain est ?", options: ["Terne", "Propre et brillant", "Ébouriffé", "Mouillé"], correct: 1 }
            ]
        }
    ]
};
