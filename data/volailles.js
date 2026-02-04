/**
 * ÉLEVAGE PRO - Données Volailles ENRICHIES
 * Formation professionnelle complète
 */

const volaillesData = {
    modules: [
        {
            title: "Alimentation et nutrition",
            content: `
                <h4>🌽 Besoins nutritionnels des volailles</h4>
                <p>L'alimentation représente <strong>60 à 70% du coût de production</strong> en aviculture. 
                Une nutrition optimisée est donc essentielle pour la rentabilité.</p>

                <h4>📊 Besoins selon le type de production</h4>
                
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Protéines</th>
                        <th>Énergie (kcal/kg)</th>
                        <th>Calcium</th>
                    </tr>
                    <tr>
                        <td>Poussin démarrage</td>
                        <td>22-24%</td>
                        <td>2900-3000</td>
                        <td>1,0%</td>
                    </tr>
                    <tr>
                        <td>Poulet croissance</td>
                        <td>20-22%</td>
                        <td>3100-3200</td>
                        <td>0,9%</td>
                    </tr>
                    <tr>
                        <td>Poulet finition</td>
                        <td>18-20%</td>
                        <td>3200-3300</td>
                        <td>0,85%</td>
                    </tr>
                    <tr>
                        <td>Poule pondeuse</td>
                        <td>16-18%</td>
                        <td>2700-2800</td>
                        <td>3,5-4,0%</td>
                    </tr>
                </table>

                <h4>🥣 Composition de l'aliment</h4>
                <ul>
                    <li><strong>Céréales</strong> : maïs, blé, orge (60-70% de la ration)</li>
                    <li><strong>Protéines</strong> : tourteau de soja, farine de poisson</li>
                    <li><strong>Calcium</strong> : carbonate de calcium, coquilles d'huîtres</li>
                    <li><strong>CMV</strong> : complément minéral vitaminé</li>
                </ul>

                <div class="lesson-tip">
                    <div class="lesson-tip-title">💧 Eau - Nutriment essentiel</div>
                    <p>Une poule boit environ <strong>2 fois son poids d'aliment</strong> en eau. 
                    Par temps chaud, cette quantité peut tripler. L'eau doit toujours être fraîche, 
                    propre et accessible. Un jour sans eau = plusieurs jours de production perdus.</p>
                </div>

                <h4>📈 Consommation alimentaire</h4>
                <ul>
                    <li><strong>Poule pondeuse</strong> : 120-150 g/jour</li>
                    <li><strong>Poulet chair (total)</strong> : 4,5-5 kg en 42 jours</li>
                    <li><strong>Canard</strong> : 150-200 g/jour</li>
                    <li><strong>Caille</strong> : 25-30 g/jour</li>
                </ul>

                <div class="lesson-warning">
                    <div class="lesson-warning-title">⚠️ Mycotoxines</div>
                    <p>Les mycotoxines dans les aliments peuvent causer mortalité, 
                    baisse de ponte et immunodépression. Stockez les aliments au sec 
                    et vérifiez régulièrement leur qualité.</p>
                </div>
            `,
            quiz: [
                { question: "Consommation d'une poule pondeuse par jour ?", options: ["50-80 g", "120-150 g", "200-250 g", "300+ g"], correct: 1 },
                { question: "Taux de protéines en phase démarrage poussin ?", options: ["10-15%", "16-18%", "22-24%", "30-35%"], correct: 2 },
                { question: "Rapport eau/aliment chez la poule ?", options: ["0,5x", "1x", "2x", "5x"], correct: 2 },
                { question: "Taux de calcium pour pondeuse ?", options: ["0,5-1%", "2-2,5%", "3,5-4%", "5-6%"], correct: 2 },
                { question: "Part des charges liée à l'alimentation ?", options: ["30-40%", "50-55%", "60-70%", "80-90%"], correct: 2 },
                { question: "Énergie aliment finition (kcal/kg) ?", options: ["2500-2700", "2800-3000", "3200-3300", "3500-3700"], correct: 2 },
                { question: "Les mycotoxines proviennent de ?", options: ["Eau", "Moisissures", "Vaccins", "Génétique"], correct: 1 },
                { question: "Consommation totale poulet chair sur 42 jours ?", options: ["2-3 kg", "4,5-5 kg", "7-8 kg", "10+ kg"], correct: 1 }
            ]
        },
        {
            title: "Reproduction et génétique",
            content: `
                <h4>🥚 Physiologie reproductive</h4>
                <p>La poule possède un seul ovaire fonctionnel (gauche). Un œuf met environ 
                <strong>25-26 heures</strong> à se former, de l'ovulation à la ponte.</p>

                <h4>📋 Paramètres de reproduction</h4>
                <table>
                    <tr>
                        <th>Espèce</th>
                        <th>Maturité sexuelle</th>
                        <th>Durée incubation</th>
                        <th>Ratio mâle/femelles</th>
                    </tr>
                    <tr>
                        <td>Poule</td>
                        <td>18-22 semaines</td>
                        <td>21 jours</td>
                        <td>1 coq / 8-12 poules</td>
                    </tr>
                    <tr>
                        <td>Canard</td>
                        <td>24-28 semaines</td>
                        <td>28 jours</td>
                        <td>1 canard / 4-6 canes</td>
                    </tr>
                    <tr>
                        <td>Caille</td>
                        <td>6-8 semaines</td>
                        <td>17-18 jours</td>
                        <td>1 mâle / 3-4 femelles</td>
                    </tr>
                    <tr>
                        <td>Dinde</td>
                        <td>28-32 semaines</td>
                        <td>28 jours</td>
                        <td>1 mâle / 8-10 femelles</td>
                    </tr>
                </table>

                <h4>🔬 Incubation artificielle</h4>
                <ul>
                    <li><strong>Température</strong> : 37,5-37,8°C (critique)</li>
                    <li><strong>Humidité</strong> : 55-60% puis 70% à l'éclosion</li>
                    <li><strong>Retournement</strong> : minimum 3x/jour</li>
                    <li><strong>Mirage</strong> : J7 et J18 pour éliminer les clairs</li>
                </ul>

                <div class="lesson-info">
                    <div class="lesson-info-title">📊 Sélection génétique moderne</div>
                    <p>Les souches ponte modernes produisent 300-320 œufs/an. 
                    Les souches chair atteignent 2,5 kg en 35-42 jours avec un IC de 1,6-1,8.</p>
                </div>
            `,
            quiz: [
                { question: "Durée incubation œuf de poule ?", options: ["14 jours", "21 jours", "28 jours", "35 jours"], correct: 1 },
                { question: "Nombre de poules par coq ?", options: ["2-4", "8-12", "20-25", "30-40"], correct: 1 },
                { question: "Température optimale d'incubation ?", options: ["35°C", "37,5-37,8°C", "40°C", "42°C"], correct: 1 },
                { question: "Durée formation d'un œuf ?", options: ["8-10h", "15-18h", "25-26h", "48h"], correct: 2 },
                { question: "Maturité sexuelle poule ?", options: ["8-10 sem", "18-22 sem", "30-35 sem", "40+ sem"], correct: 1 },
                { question: "Humidité à l'éclosion ?", options: ["40%", "55%", "70%", "85%"], correct: 2 },
                { question: "Œufs/an souche ponte moderne ?", options: ["150-180", "220-250", "300-320", "400+"], correct: 2 },
                { question: "Durée incubation canard ?", options: ["21 jours", "28 jours", "35 jours", "42 jours"], correct: 1 }
            ]
        },
        {
            title: "Santé animale et prévention",
            content: `
                <h4>💉 Principales maladies avicoles</h4>
                
                <table>
                    <tr>
                        <th>Maladie</th>
                        <th>Agent</th>
                        <th>Symptômes</th>
                        <th>Prévention</th>
                    </tr>
                    <tr>
                        <td>Newcastle</td>
                        <td>Virus</td>
                        <td>Respiratoires, nerveux, mortalité</td>
                        <td>Vaccination</td>
                    </tr>
                    <tr>
                        <td>Gumboro</td>
                        <td>Virus</td>
                        <td>Immunodépression, diarrhée</td>
                        <td>Vaccination</td>
                    </tr>
                    <tr>
                        <td>Coccidiose</td>
                        <td>Protozoaire</td>
                        <td>Diarrhée sanglante, mortalité</td>
                        <td>Anticoccidiens, hygiène</td>
                    </tr>
                    <tr>
                        <td>Mycoplasmose</td>
                        <td>Bactérie</td>
                        <td>Respiratoires, sinusite</td>
                        <td>Biosécurité, antibiotiques</td>
                    </tr>
                </table>

                <h4>💊 Programme vaccinal type (poulet chair)</h4>
                <ul>
                    <li><strong>J1</strong> : Marek (en couvoir)</li>
                    <li><strong>J7</strong> : Newcastle + Bronchite infectieuse</li>
                    <li><strong>J14</strong> : Gumboro</li>
                    <li><strong>J21</strong> : Rappel Newcastle</li>
                </ul>

                <div class="lesson-warning">
                    <div class="lesson-warning-title">🦠 Biosécurité obligatoire</div>
                    <p>La biosécurité est votre première ligne de défense :
                    <br>• Changez de chaussures et vêtements à l'entrée
                    <br>• Lavez-vous les mains entre chaque bâtiment
                    <br>• Limitez les visiteurs au strict minimum
                    <br>• Désinfectez tout matériel entrant</p>
                </div>

                <h4>🌡️ Paramètres de surveillance</h4>
                <ul>
                    <li>Mortalité quotidienne < 0,1%</li>
                    <li>Consommation d'eau et d'aliment stable</li>
                    <li>Comportement actif, plumage lisse</li>
                    <li>Absence de bruits respiratoires anormaux</li>
                </ul>
            `,
            quiz: [
                { question: "La maladie de Newcastle est ?", options: ["Bactérienne", "Virale", "Parasitaire", "Fongique"], correct: 1 },
                { question: "La coccidiose affecte principalement ?", options: ["Poumons", "Intestins", "Cerveau", "Peau"], correct: 1 },
                { question: "Première mesure de biosécurité ?", options: ["Musique", "Changement chaussures/vêtements", "Parfum", "Climatisation"], correct: 1 },
                { question: "Vaccination Gumboro généralement à ?", options: ["J1", "J7", "J14", "J28"], correct: 2 },
                { question: "Mortalité quotidienne acceptable ?", options: ["< 0,1%", "< 0,5%", "< 1%", "< 2%"], correct: 0 },
                { question: "Vaccination Marek se fait ?", options: ["En couvoir (J1)", "J7", "J14", "J21"], correct: 0 },
                { question: "Mycoplasmose est causée par ?", options: ["Virus", "Bactérie", "Champignon", "Parasite"], correct: 1 },
                { question: "Signe de bonne santé chez la volaille ?", options: ["Plumage ébouriffé", "Léthargie", "Plumage lisse", "Isolement"], correct: 2 }
            ]
        },
        {
            title: "Logement et infrastructures",
            content: `
                <h4>🏠 Densités d'élevage recommandées</h4>
                
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Standard</th>
                        <th>Label/Bio</th>
                        <th>Surface extérieure</th>
                    </tr>
                    <tr>
                        <td>Poulet chair</td>
                        <td>18-22/m²</td>
                        <td>10-12/m²</td>
                        <td>2 m²/sujet (plein air)</td>
                    </tr>
                    <tr>
                        <td>Pondeuse sol</td>
                        <td>7-9/m²</td>
                        <td>6/m²</td>
                        <td>4 m²/poule (plein air)</td>
                    </tr>
                    <tr>
                        <td>Pondeuse cage</td>
                        <td>750 cm²/poule</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Caille</td>
                        <td>30-40/m²</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </table>

                <h4>🔧 Équipements essentiels</h4>
                <ul>
                    <li><strong>Abreuvoirs</strong> : 1 pipette/10 sujets ou 2,5 cm linéaire/sujet</li>
                    <li><strong>Mangeoires</strong> : 4-5 cm linéaire/sujet</li>
                    <li><strong>Nids</strong> : 1 nid pour 4-5 pondeuses</li>
                    <li><strong>Perchoirs</strong> : 15-20 cm linéaire/poule</li>
                </ul>

                <h4>🌡️ Ambiance du bâtiment</h4>
                <table>
                    <tr>
                        <th>Paramètre</th>
                        <th>Poussin (J1)</th>
                        <th>Adulte</th>
                    </tr>
                    <tr>
                        <td>Température</td>
                        <td>32-34°C</td>
                        <td>18-22°C</td>
                    </tr>
                    <tr>
                        <td>Humidité</td>
                        <td>60-70%</td>
                        <td>50-70%</td>
                    </tr>
                    <tr>
                        <td>NH3 (ammoniac)</td>
                        <td>< 10 ppm</td>
                        <td>< 20 ppm</td>
                    </tr>
                    <tr>
                        <td>CO2</td>
                        <td>< 3000 ppm</td>
                        <td>< 3000 ppm</td>
                    </tr>
                </table>

                <div class="lesson-tip">
                    <div class="lesson-tip-title">💨 Ventilation</div>
                    <p>Une bonne ventilation évacue l'humidité, l'ammoniac et le CO2 tout en 
                    apportant de l'oxygène frais. Débit minimum : 0,7 m³/h/kg de poids vif.</p>
                </div>
            `,
            quiz: [
                { question: "Densité standard poulets chair ?", options: ["5-10/m²", "18-22/m²", "30-40/m²", "50+/m²"], correct: 1 },
                { question: "Surface extérieure plein air/pondeuse ?", options: ["1 m²", "2 m²", "4 m²", "10 m²"], correct: 2 },
                { question: "Combien de poules par nid ?", options: ["1-2", "4-5", "10-12", "20+"], correct: 1 },
                { question: "Température poussin J1 ?", options: ["22-24°C", "26-28°C", "32-34°C", "38-40°C"], correct: 2 },
                { question: "Teneur max ammoniac adulte ?", options: ["5 ppm", "10 ppm", "20 ppm", "50 ppm"], correct: 2 },
                { question: "Perchoir par poule ?", options: ["5-10 cm", "15-20 cm", "30-40 cm", "50+ cm"], correct: 1 },
                { question: "Humidité optimale ?", options: ["30-40%", "50-70%", "80-90%", "> 90%"], correct: 1 },
                { question: "Densité pondeuses Label au sol ?", options: ["6/m²", "12/m²", "18/m²", "25/m²"], correct: 0 }
            ]
        },
        {
            title: "Gestion économique",
            content: `
                <h4>💰 Performances zootechniques cibles</h4>
                
                <table>
                    <tr>
                        <th>Indicateur</th>
                        <th>Poulet chair standard</th>
                        <th>Poulet Label</th>
                    </tr>
                    <tr>
                        <td>Poids vif</td>
                        <td>2,2-2,5 kg à 42j</td>
                        <td>2,1-2,3 kg à 81j</td>
                    </tr>
                    <tr>
                        <td>IC (Indice de Conversion)</td>
                        <td>1,6-1,8</td>
                        <td>2,4-2,8</td>
                    </tr>
                    <tr>
                        <td>GMQ</td>
                        <td>55-60 g/jour</td>
                        <td>25-30 g/jour</td>
                    </tr>
                    <tr>
                        <td>Mortalité</td>
                        <td>< 4%</td>
                        <td>< 3%</td>
                    </tr>
                </table>

                <h4>📊 Performances ponte</h4>
                <ul>
                    <li><strong>Pic de ponte</strong> : 92-95% vers 26-30 semaines</li>
                    <li><strong>Production annuelle</strong> : 280-320 œufs/poule</li>
                    <li><strong>IC ponte</strong> : 2,1-2,3 kg aliment/kg œufs</li>
                    <li><strong>Poids moyen œuf</strong> : 60-65 g</li>
                </ul>

                <h4>💵 Structure des coûts</h4>
                <ul>
                    <li><strong>Alimentation</strong> : 65-75%</li>
                    <li><strong>Poussins/poulettes</strong> : 10-15%</li>
                    <li><strong>Énergie</strong> : 5-10%</li>
                    <li><strong>Santé</strong> : 2-4%</li>
                </ul>

                <div class="lesson-success">
                    <div class="lesson-success-title">✅ Clés de la rentabilité</div>
                    <p>1. Maîtriser l'IC (chaque point gagné = économie majeure)
                    <br>2. Minimiser la mortalité
                    <br>3. Optimiser le taux d'occupation des bâtiments
                    <br>4. Négocier les prix des intrants</p>
                </div>
            `,
            quiz: [
                { question: "IC optimal poulet standard ?", options: ["0,8-1,0", "1,6-1,8", "2,5-3,0", "4,0+"], correct: 1 },
                { question: "Œufs/poule/an en production ?", options: ["100-150", "200-250", "280-320", "400+"], correct: 2 },
                { question: "Part alimentation dans charges ?", options: ["30-40%", "50-60%", "65-75%", "90%"], correct: 2 },
                { question: "Poids poulet standard à 42 jours ?", options: ["1,2-1,5 kg", "2,2-2,5 kg", "3,5-4 kg", "5+ kg"], correct: 1 },
                { question: "Mortalité acceptable poulet chair ?", options: ["< 1%", "< 4%", "< 10%", "< 15%"], correct: 1 },
                { question: "Pic de ponte à quelle semaine ?", options: ["15-18 sem", "26-30 sem", "40-45 sem", "52 sem"], correct: 1 },
                { question: "GMQ poulet standard ?", options: ["20-25 g/j", "35-40 g/j", "55-60 g/j", "80-90 g/j"], correct: 2 },
                { question: "Poids moyen œuf ?", options: ["40-45 g", "50-55 g", "60-65 g", "75-80 g"], correct: 2 }
            ]
        },
        {
            title: "Réglementation sanitaire",
            content: `
                <h4>📋 Obligations réglementaires</h4>
                
                <table>
                    <tr>
                        <th>Seuil</th>
                        <th>Obligation</th>
                    </tr>
                    <tr>
                        <td>> 250 volailles</td>
                        <td>Déclaration d'activité (DDPP)</td>
                    </tr>
                    <tr>
                        <td>> 5000 places poulets</td>
                        <td>Autorisation préfectorale (ICPE)</td>
                    </tr>
                    <tr>
                        <td>> 40 000 places</td>
                        <td>Étude d'impact environnemental</td>
                    </tr>
                    <tr>
                        <td>Tous élevages</td>
                        <td>Registre d'élevage obligatoire</td>
                    </tr>
                </table>

                <h4>🦠 Surveillance sanitaire</h4>
                <ul>
                    <li><strong>Influenza aviaire</strong> : surveillance renforcée automne/hiver</li>
                    <li><strong>Salmonelles</strong> : contrôle obligatoire en ponte et chair</li>
                    <li><strong>Plan biosécurité</strong> : obligatoire pour tous les élevages</li>
                </ul>

                <div class="lesson-warning">
                    <div class="lesson-warning-title">🦆 Influenza aviaire</div>
                    <p>En période de risque (IAHP), les mesures peuvent inclure :
                    <br>• Mise à l'abri obligatoire des volailles
                    <br>• Interdiction de rassemblements
                    <br>• Surveillance renforcée des mortalités
                    <br>• Restriction des mouvements</p>
                </div>

                <h4>📝 Documents à tenir</h4>
                <ul>
                    <li>Registre d'élevage (mouvements, traitements)</li>
                    <li>Résultats analyses réglementaires</li>
                    <li>Plan de biosécurité</li>
                    <li>Ordonnances vétérinaires</li>
                </ul>
            `,
            quiz: [
                { question: "Déclaration obligatoire à partir de ?", options: ["50 volailles", "100 volailles", "250 volailles", "1000 volailles"], correct: 2 },
                { question: "Période risque principal Influenza ?", options: ["Été", "Automne-hiver", "Printemps", "Toute l'année"], correct: 1 },
                { question: "Document obligatoire pour tous ?", options: ["Passeport", "Registre élevage", "Carte identité", "Permis"], correct: 1 },
                { question: "ICPE poulet à partir de ?", options: ["1000 places", "5000 places", "20 000 places", "50 000 places"], correct: 1 },
                { question: "Contrôle salmonelles obligatoire ?", options: ["Non", "Oui", "Facultatif", "Annuel"], correct: 1 },
                { question: "Plan biosécurité est ?", options: ["Facultatif", "Recommandé", "Obligatoire", "Payant"], correct: 2 },
                { question: "Registre conservé combien de temps ?", options: ["1 an", "3 ans", "5 ans", "10 ans"], correct: 2 },
                { question: "DDPP signifie ?", options: ["Direction Départementale Protection Populations", "Déclaration Dépôt", "Document Production", "Dossier Denrées"], correct: 0 }
            ]
        },
        {
            title: "Bien-être animal",
            content: `
                <h4>💚 Les 5 libertés fondamentales</h4>
                <ol>
                    <li><strong>Absence de faim et de soif</strong> : eau et aliment accessibles</li>
                    <li><strong>Absence d'inconfort</strong> : environnement adapté</li>
                    <li><strong>Absence de douleur et maladie</strong> : soins préventifs et curatifs</li>
                    <li><strong>Liberté d'exprimer comportements naturels</strong> : espace, enrichissements</li>
                    <li><strong>Absence de peur et détresse</strong> : manipulation douce</li>
                </ol>

                <h4>🐔 Comportements naturels essentiels</h4>
                <ul>
                    <li><strong>Grattage/Picage</strong> : recherche de nourriture naturelle</li>
                    <li><strong>Bain de poussière</strong> : hygiène du plumage, élimination parasites</li>
                    <li><strong>Perchage</strong> : repos en hauteur (instinct anti-prédateurs)</li>
                    <li><strong>Nidification</strong> : ponte dans un endroit calme et sombre</li>
                </ul>

                <h4>🏡 Enrichissements recommandés</h4>
                <table>
                    <tr>
                        <th>Enrichissement</th>
                        <th>Bénéfice</th>
                    </tr>
                    <tr>
                        <td>Perchoirs</td>
                        <td>Repos, expression comportement naturel</td>
                    </tr>
                    <tr>
                        <td>Bacs à poussière</td>
                        <td>Hygiène, réduction stress</td>
                    </tr>
                    <tr>
                        <td>Objets à picorer</td>
                        <td>Réduction picage entre congénères</td>
                    </tr>
                    <tr>
                        <td>Accès extérieur</td>
                        <td>Lumière naturelle, exercice</td>
                    </tr>
                </table>

                <div class="lesson-success">
                    <div class="lesson-success-title">🌟 Indicateurs de bien-être</div>
                    <p>• Plumage en bon état (pas de picage)
                    <br>• Pattes saines (pas de pododermatite)
                    <br>• Comportement actif et curieux
                    <br>• Bonne répartition dans l'espace
                    <br>• Vocalisations normales</p>
                </div>
            `,
            quiz: [
                { question: "Comportement naturel essentiel ?", options: ["Nager", "Gratter/picorer", "Grimper arbres", "Creuser"], correct: 1 },
                { question: "Enrichissement pour hygiène plumage ?", options: ["Musique", "Bac poussière", "Parfums", "Lumière colorée"], correct: 1 },
                { question: "Bain de poussière sert à ?", options: ["Rafraîchir", "Éliminer parasites", "Jouer", "Dormir"], correct: 1 },
                { question: "Nombre de libertés fondamentales ?", options: ["3", "4", "5", "6"], correct: 2 },
                { question: "Perchoir répond à quel besoin ?", options: ["Alimentation", "Repos en hauteur", "Reproduction", "Bain"], correct: 1 },
                { question: "Signe de mauvais bien-être ?", options: ["Picage", "Plumage lisse", "Activité", "Curiosité"], correct: 0 },
                { question: "Pododermatite affecte ?", options: ["Bec", "Plumes", "Pattes", "Yeux"], correct: 2 },
                { question: "Accès extérieur apporte ?", options: ["Stress", "Lumière naturelle", "Maladies", "Prédateurs"], correct: 1 }
            ]
        }
    ]
};
