/**
 * ÉLEVAGE PRO - Données Bovins ENRICHIES
 * Formation professionnelle complète
 */

const bovinsData = {
    modules: [
        // Module 0: Alimentation et nutrition
        {
            title: "Alimentation et nutrition",
            content: `
                <h4>🌾 Introduction à la nutrition bovine</h4>
                <p>L'alimentation représente <strong>50 à 60% des charges</strong> d'un élevage bovin. 
                Une maîtrise parfaite de la nutrition est donc cruciale pour la rentabilité.</p>
                
                <p>Un bovin adulte consomme environ <strong>2 à 3% de son poids vif</strong> en matière sèche par jour. 
                Pour une vache de 650 kg, cela représente 13 à 19 kg de MS quotidiennement.</p>

                <h4>📊 Le système digestif du ruminant</h4>
                <p>Les bovins possèdent un système digestif unique avec 4 compartiments :</p>
                <ul>
                    <li><strong>Rumen (panse)</strong> : 150-200 L, fermentation microbienne</li>
                    <li><strong>Réseau (bonnet)</strong> : tri des particules</li>
                    <li><strong>Feuillet</strong> : absorption d'eau</li>
                    <li><strong>Caillette</strong> : digestion enzymatique (estomac vrai)</li>
                </ul>

                <div class="lesson-tip">
                    <div class="lesson-tip-title">🔬 La microflore ruminale</div>
                    <p>Le rumen contient des milliards de bactéries, protozoaires et champignons qui fermentent 
                    les fibres végétales. Cette microflore doit être préservée par une alimentation stable 
                    et des transitions alimentaires progressives (minimum 15 jours).</p>
                </div>

                <h4>🥬 Les catégories d'aliments</h4>
                
                <p><strong>1. Fourrages grossiers (base de la ration)</strong></p>
                <ul>
                    <li><strong>Herbe pâturée</strong> : 0,85-1,0 UFL/kg MS, la plus économique</li>
                    <li><strong>Foin de prairie</strong> : 0,60-0,75 UFL/kg MS</li>
                    <li><strong>Ensilage de maïs</strong> : 0,90-0,95 UFL/kg MS, très énergétique</li>
                    <li><strong>Ensilage d'herbe</strong> : 0,75-0,90 UFL/kg MS</li>
                    <li><strong>Paille</strong> : 0,40 UFL/kg MS, lest et rumination</li>
                </ul>

                <p><strong>2. Concentrés énergétiques</strong></p>
                <ul>
                    <li><strong>Céréales</strong> : orge (1,15 UFL), maïs grain (1,20 UFL), blé (1,18 UFL)</li>
                    <li><strong>Pulpes</strong> : betterave déshydratée, pulpe de pomme de terre</li>
                    <li><strong>Coproduits</strong> : drêches de brasserie, corn gluten feed</li>
                </ul>

                <p><strong>3. Concentrés protéiques</strong></p>
                <ul>
                    <li><strong>Tourteau de soja</strong> : 50% MAT, référence protéique</li>
                    <li><strong>Tourteau de colza</strong> : 35% MAT, moins cher</li>
                    <li><strong>Tourteau de lin</strong> : oméga 3, qualité du lait</li>
                    <li><strong>Luzerne déshydratée</strong> : protéines + fibres</li>
                </ul>

                <h4>📈 Besoins selon le stade physiologique</h4>
                
                <table style="width:100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background: var(--color-primary); color: white;">
                        <th style="padding: 10px; border: 1px solid #ddd;">Stade</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">Énergie (UFL)</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">Protéines (PDI)</th>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">Vache tarie</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">6-7 UFL</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">450-550 g</td>
                    </tr>
                    <tr style="background: #f9f9f9;">
                        <td style="padding: 10px; border: 1px solid #ddd;">Production 20L/j</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">14-15 UFL</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">1400-1500 g</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">Production 35L/j</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">20-22 UFL</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">2200-2400 g</td>
                    </tr>
                </table>

                <h4>💧 L'abreuvement</h4>
                <p>L'eau est le nutriment le plus important. Besoins quotidiens :</p>
                <ul>
                    <li>Vache tarie : 40-60 L/jour</li>
                    <li>Vache laitière 25L : 100-120 L/jour</li>
                    <li>Vache laitière 40L : 150-180 L/jour</li>
                    <li>Augmentation de 50% par temps chaud</li>
                </ul>

                <div class="lesson-tip">
                    <div class="lesson-tip-title">⚠️ Règle d'or</div>
                    <p>1 kg de lait = 4-5 L d'eau consommée. Vérifiez quotidiennement le fonctionnement 
                    et la propreté des abreuvoirs. Le débit doit être d'au moins 20 L/min.</p>
                </div>

                <h4>🧮 Formulation d'une ration</h4>
                <p>Étapes pour calculer une ration équilibrée :</p>
                <ol>
                    <li>Déterminer les besoins de l'animal (entretien + production)</li>
                    <li>Analyser les fourrages disponibles (analyses laboratoire)</li>
                    <li>Calculer les apports des fourrages</li>
                    <li>Compléter avec concentrés si déficit</li>
                    <li>Vérifier l'équilibre PDIN/PDIE et énergie/protéines</li>
                    <li>Ajouter le CMV adapté</li>
                </ol>
            `,
            quiz: [
                { question: "Quel pourcentage de son poids vif un bovin consomme-t-il en MS/jour ?", options: ["0,5-1%", "2-3%", "5-6%", "8-10%"], correct: 1 },
                { question: "Quel est le volume du rumen d'un bovin adulte ?", options: ["50-80 L", "100-120 L", "150-200 L", "300-400 L"], correct: 2 },
                { question: "Quelle valeur UFL pour l'ensilage de maïs ?", options: ["0,60-0,70", "0,75-0,85", "0,90-0,95", "1,10-1,20"], correct: 2 },
                { question: "Combien de litres d'eau pour 1 kg de lait produit ?", options: ["1-2 L", "4-5 L", "8-10 L", "15-20 L"], correct: 1 },
                { question: "Quelle durée minimale pour une transition alimentaire ?", options: ["3 jours", "7 jours", "15 jours", "30 jours"], correct: 2 },
                { question: "Quel tourteau contient environ 50% de MAT ?", options: ["Colza", "Lin", "Soja", "Tournesol"], correct: 2 },
                { question: "Combien d'UFL pour une vache produisant 35L/jour ?", options: ["10-12", "14-16", "20-22", "28-30"], correct: 2 },
                { question: "Débit minimum d'un abreuvoir ?", options: ["5 L/min", "10 L/min", "20 L/min", "50 L/min"], correct: 2 }
            ]
        },
        // Module 1: Reproduction
        {
            title: "Reproduction et génétique",
            content: `
                <h4>🧬 Physiologie de la reproduction</h4>
                <p>La maîtrise de la reproduction est un facteur clé de rentabilité. 
                L'objectif est d'obtenir un veau par vache et par an.</p>

                <h4>📅 Le cycle œstral</h4>
                <ul>
                    <li><strong>Durée du cycle</strong> : 21 jours (18-24 jours)</li>
                    <li><strong>Durée des chaleurs</strong> : 12-18 heures</li>
                    <li><strong>Ovulation</strong> : 10-15 heures après la fin des chaleurs</li>
                </ul>

                <h4>🔍 Détection des chaleurs</h4>
                <p><strong>Signes primaires (fiables) :</strong></p>
                <ul>
                    <li>Acceptation du chevauchement (réflexe d'immobilité)</li>
                    <li>Écoulement de glaire filante et transparente</li>
                </ul>
                
                <p><strong>Signes secondaires :</strong></p>
                <ul>
                    <li>Agitation, beuglements</li>
                    <li>Chevauchement d'autres vaches</li>
                    <li>Vulve gonflée et rougie</li>
                    <li>Poils ébouriffés sur la croupe</li>
                    <li>Baisse de production laitière</li>
                </ul>

                <div class="lesson-tip">
                    <div class="lesson-tip-title">⏰ Observation optimale</div>
                    <p>Observez le troupeau 3 fois par jour pendant 20 minutes minimum : 
                    matin, midi et soir. 70% des chaleurs commencent entre 18h et 6h.</p>
                </div>

                <h4>💉 Insémination artificielle</h4>
                <p><strong>Règle de l'insémination :</strong></p>
                <ul>
                    <li>Chaleurs détectées le matin → IA le soir</li>
                    <li>Chaleurs détectées le soir → IA le lendemain matin</li>
                    <li>Moment optimal : 12-18h après début des chaleurs</li>
                </ul>

                <h4>🤰 Gestation</h4>
                <ul>
                    <li><strong>Durée</strong> : 280-285 jours (9 mois)</li>
                    <li><strong>Diagnostic</strong> : palpation (42j), échographie (28j), test sanguin (28j)</li>
                    <li><strong>Période sèche</strong> : 60 jours avant vêlage</li>
                </ul>

                <h4>🐄 Le vêlage</h4>
                <p><strong>Signes annonciateurs :</strong></p>
                <ul>
                    <li>48-72h avant : mamelle tendue et gonflée</li>
                    <li>24-48h avant : relâchement des ligaments du bassin</li>
                    <li>6-12h avant : écoulement de mucus, agitation</li>
                </ul>

                <h4>🧬 Amélioration génétique</h4>
                <p><strong>Index de sélection :</strong></p>
                <ul>
                    <li><strong>ISU</strong> : Index de Synthèse UPRA (global)</li>
                    <li><strong>INEL</strong> : Index économique lait</li>
                    <li><strong>Morphologie</strong> : mamelle, aplombs, format</li>
                </ul>
            `,
            quiz: [
                { question: "Durée moyenne du cycle de la vache ?", options: ["14 jours", "21 jours", "28 jours", "35 jours"], correct: 1 },
                { question: "Moment optimal d'insémination après début chaleurs ?", options: ["0-4h", "12-18h", "24-36h", "48-72h"], correct: 1 },
                { question: "Durée de gestation bovine ?", options: ["6 mois", "9 mois", "12 mois", "14 mois"], correct: 1 },
                { question: "Diagnostic échographique possible à partir de ?", options: ["14 jours", "28 jours", "42 jours", "60 jours"], correct: 1 },
                { question: "Durée recommandée du tarissement ?", options: ["30 jours", "45 jours", "60 jours", "90 jours"], correct: 2 },
                { question: "Pourcentage de chaleurs nocturnes ?", options: ["30%", "50%", "70%", "90%"], correct: 2 },
                { question: "ISU signifie ?", options: ["Index Standard Universel", "Index Synthèse UPRA", "Indice Sélection Unifié", "Index Semence Unique"], correct: 1 },
                { question: "Durée des chaleurs ?", options: ["2-4h", "6-8h", "12-18h", "24-36h"], correct: 2 }
            ]
        },
        // Module 2: Santé
        {
            title: "Santé animale et prévention",
            content: `
                <h4>💉 Principes de santé bovine</h4>
                <p>La prévention coûte toujours moins cher que le traitement. 
                Un programme sanitaire rigoureux est la base d'un élevage performant.</p>

                <h4>🦠 Maladies respiratoires</h4>
                <p><strong>BPIE (Bronchopneumonie Infectieuse Enzootique)</strong></p>
                <ul>
                    <li>Causes multifactorielles : virus, bactéries, stress, ventilation</li>
                    <li>Symptômes : toux, fièvre >39,5°C, jetage, dyspnée</li>
                    <li>Prévention : vaccination, logement adapté, allotement</li>
                </ul>

                <h4>🔴 Maladies réglementées</h4>
                <ul>
                    <li><strong>Tuberculose</strong> : IDC annuelle obligatoire</li>
                    <li><strong>Brucellose</strong> : dépistage sérologique</li>
                    <li><strong>Leucose</strong> : contrôle sur lait de tank</li>
                    <li><strong>IBR</strong> : éradication en cours, statut du cheptel</li>
                </ul>

                <h4>🩺 Maladies métaboliques</h4>
                <ul>
                    <li><strong>Fièvre de lait</strong> : hypocalcémie post-partum, vache couchée</li>
                    <li><strong>Acétonémie</strong> : déficit énergétique, odeur acétone</li>
                    <li><strong>Acidose</strong> : excès concentrés, chute du pH ruminal</li>
                </ul>

                <div class="lesson-tip">
                    <div class="lesson-tip-title">🌡️ Température normale</div>
                    <p>Température rectale normale : 38,5 - 39,5°C. Au-delà de 39,5°C = fièvre. 
                    Prenez la température avant toute intervention vétérinaire.</p>
                </div>

                <h4>💊 Programme vaccinal type</h4>
                <table style="width:100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background: var(--color-primary); color: white;">
                        <th style="padding: 8px; border: 1px solid #ddd;">Maladie</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Période</th>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">BVD</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Génisses avant saillie</td>
                    </tr>
                    <tr style="background: #f9f9f9;">
                        <td style="padding: 8px; border: 1px solid #ddd;">IBR</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Selon protocole sanitaire</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Entérotoxémies</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Veaux + vaches gestantes</td>
                    </tr>
                </table>
            `,
            quiz: [
                { question: "Température normale d'un bovin ?", options: ["36-37°C", "38,5-39,5°C", "40-41°C", "42-43°C"], correct: 1 },
                { question: "Fièvre de lait = carence en ?", options: ["Fer", "Calcium", "Magnésium", "Potassium"], correct: 1 },
                { question: "IDC signifie ?", options: ["Index Diagnostic Clinique", "Intradermotuberculination", "Indication Distincte Commune", "Infection Dermique Cutanée"], correct: 1 },
                { question: "IBR est une maladie ?", options: ["Bactérienne", "Virale", "Parasitaire", "Fongique"], correct: 1 },
                { question: "L'acidose est causée par ?", options: ["Manque de concentrés", "Excès de concentrés", "Excès de fourrage", "Manque d'eau"], correct: 1 },
                { question: "Acétonémie = problème de ?", options: ["Protéines", "Énergie", "Minéraux", "Vitamines"], correct: 1 }
            ]
        },
        // Module 3: Logement
        {
            title: "Logement et infrastructures",
            content: `
                <h4>🏗️ Types de stabulations</h4>
                
                <p><strong>Stabulation libre à logettes</strong></p>
                <ul>
                    <li>Logettes individuelles pour le repos</li>
                    <li>Dimensions : 120 x 240 cm minimum</li>
                    <li>Sol béton ou matelas confort</li>
                    <li>Avantages : hygiène, économie de paille</li>
                </ul>

                <p><strong>Stabulation libre aire paillée</strong></p>
                <ul>
                    <li>8-10 m² par vache</li>
                    <li>Paillage quotidien : 8-10 kg/vache/jour</li>
                    <li>Confort optimal pour les animaux</li>
                </ul>

                <h4>🌬️ Ventilation</h4>
                <p>Paramètres essentiels :</p>
                <ul>
                    <li>1 m² d'ouverture pour 20 m² de surface</li>
                    <li>Faîtière ouverte : 5 cm par mètre de largeur</li>
                    <li>Humidité < 80%</li>
                    <li>NH3 < 10 ppm</li>
                </ul>

                <div class="lesson-tip">
                    <div class="lesson-tip-title">💨 Test allumette</div>
                    <p>Allumez une allumette dans le bâtiment. La fumée doit s'évacuer 
                    en moins de 30 secondes. Sinon, améliorez la ventilation.</p>
                </div>

                <h4>💡 Éclairage</h4>
                <ul>
                    <li>Zone de vie : 150-200 lux</li>
                    <li>Aire de traite : 300-400 lux</li>
                    <li>16h de lumière favorisent la production</li>
                </ul>
            `,
            quiz: [
                { question: "Surface aire paillée par vache ?", options: ["3-5 m²", "8-10 m²", "15-20 m²", "25-30 m²"], correct: 1 },
                { question: "Dimensions minimum logette ?", options: ["100x200 cm", "120x240 cm", "150x280 cm", "180x300 cm"], correct: 1 },
                { question: "Paillage quotidien par vache ?", options: ["2-3 kg", "5-6 kg", "8-10 kg", "15-20 kg"], correct: 2 },
                { question: "Humidité maximum bâtiment ?", options: ["60%", "70%", "80%", "90%"], correct: 2 },
                { question: "Durée lumière pour production ?", options: ["8h", "12h", "16h", "24h"], correct: 2 },
                { question: "Éclairement aire traite ?", options: ["50-100 lux", "150-200 lux", "300-400 lux", "500+ lux"], correct: 2 }
            ]
        },
        // Module 4: Économie
        {
            title: "Gestion économique",
            content: `
                <h4>💰 Indicateurs de performance</h4>
                
                <table style="width:100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background: var(--color-primary); color: white;">
                        <th style="padding: 10px; border: 1px solid #ddd;">Indicateur</th>
                        <th style="padding: 10px; border: 1px solid #ddd;">Objectif</th>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">IVV</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">365-380 jours</td>
                    </tr>
                    <tr style="background: #f9f9f9;">
                        <td style="padding: 10px; border: 1px solid #ddd;">Taux réussite IA</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">> 55%</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd;">Taux cellulaire</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">< 200 000/mL</td>
                    </tr>
                    <tr style="background: #f9f9f9;">
                        <td style="padding: 10px; border: 1px solid #ddd;">Coût alimentaire</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">< 100€/1000L</td>
                    </tr>
                </table>

                <h4>📊 Prix de revient du lait</h4>
                <p>Postes de charges (% total) :</p>
                <ul>
                    <li>Alimentation : 50-60%</li>
                    <li>Mécanisation : 15-20%</li>
                    <li>Bâtiments : 10-15%</li>
                    <li>Frais vétérinaires : 3-5%</li>
                </ul>

                <div class="lesson-tip">
                    <div class="lesson-tip-title">📈 Objectif economique</div>
                    <p>Visez un coût de production inférieur au prix de vente du lait. 
                    Chaque euro économisé sur l'alimentation est un euro de marge.</p>
                </div>
            `,
            quiz: [
                { question: "Objectif IVV ?", options: ["300-320 j", "365-380 j", "400-420 j", "450+ j"], correct: 1 },
                { question: "Taux cellules objectif ?", options: ["< 100 000", "< 200 000", "< 400 000", "< 600 000"], correct: 1 },
                { question: "Part alimentation dans charges ?", options: ["20-30%", "35-45%", "50-60%", "70-80%"], correct: 2 },
                { question: "Coût alim objectif /1000L ?", options: ["< 50€", "< 100€", "< 150€", "< 200€"], correct: 1 },
                { question: "Taux réussite IA objectif ?", options: ["> 35%", "> 45%", "> 55%", "> 75%"], correct: 2 }
            ]
        },
        // Module 5: Réglementation
        {
            title: "Réglementation sanitaire",
            content: `
                <h4>📋 Identification bovine</h4>
                <ul>
                    <li>Bouclage dans les 20 jours après naissance</li>
                    <li>2 boucles auriculaires agréées</li>
                    <li>Numéro national à 10 chiffres</li>
                    <li>Passeport individuel obligatoire</li>
                </ul>

                <h4>📚 Documents obligatoires</h4>
                <ul>
                    <li><strong>Registre d'élevage</strong> : inventaire, mouvements, traitements</li>
                    <li><strong>ASDA</strong> : attestation sanitaire pour mouvements</li>
                    <li><strong>Passeports</strong> : accompagnent chaque animal</li>
                </ul>

                <h4>⏰ Délais réglementaires</h4>
                <ul>
                    <li>Notification naissance : 7 jours</li>
                    <li>Notification mouvement : 7 jours</li>
                    <li>Conservation registre : 5 ans</li>
                </ul>

                <div class="lesson-tip">
                    <div class="lesson-tip-title">⚠️ Sanctions</div>
                    <p>Le non-respect de la réglementation peut entraîner des pénalités PAC 
                    et des poursuites pénales. Tenez vos registres à jour !</p>
                </div>
            `,
            quiz: [
                { question: "Délai bouclage veau ?", options: ["7 jours", "20 jours", "30 jours", "45 jours"], correct: 1 },
                { question: "Conservation registre ?", options: ["1 an", "3 ans", "5 ans", "10 ans"], correct: 2 },
                { question: "Notification mouvement ?", options: ["24h", "7 jours", "15 jours", "30 jours"], correct: 1 },
                { question: "ASDA signifie ?", options: ["Attestation Sanitaire", "Autorisation Sortie", "Agrément Sanitaire", "Analyse Sérologique"], correct: 0 },
                { question: "Combien de boucles par animal ?", options: ["1", "2", "3", "4"], correct: 1 }
            ]
        },
        // Module 6: Bien-être
        {
            title: "Bien-être animal",
            content: `
                <h4>💚 Les 5 libertés fondamentales</h4>
                <ol>
                    <li><strong>Faim et soif</strong> : eau et nourriture adaptées</li>
                    <li><strong>Inconfort</strong> : environnement approprié</li>
                    <li><strong>Douleur</strong> : prévention et soins rapides</li>
                    <li><strong>Expression comportement</strong> : espace, interactions sociales</li>
                    <li><strong>Peur et détresse</strong> : manipulation douce</li>
                </ol>

                <h4>🐄 Comportement naturel</h4>
                <ul>
                    <li>Rumination : 8-9 heures/jour (signe de santé)</li>
                    <li>Repos couché : 12-14 heures/jour</li>
                    <li>Alimentation : 4-6 heures/jour</li>
                    <li>Déplacements et interactions sociales</li>
                </ul>

                <h4>📏 Note d'état corporel (NEC)</h4>
                <ul>
                    <li>Échelle de 1 (maigre) à 5 (grasse)</li>
                    <li>Objectif vêlage : 3,5</li>
                    <li>Maximum perte post-vêlage : 1 point</li>
                </ul>

                <div class="lesson-tip">
                    <div class="lesson-tip-title">👀 Observation quotidienne</div>
                    <p>Une vache en bonne santé est alerte, se lève facilement, rumine couchée, 
                    a un pelage brillant et des bouses normales (ni trop liquides, ni trop sèches).</p>
                </div>
            `,
            quiz: [
                { question: "Combien de libertés fondamentales ?", options: ["3", "4", "5", "6"], correct: 2 },
                { question: "Temps rumination/jour ?", options: ["2-3h", "5-6h", "8-9h", "12-14h"], correct: 2 },
                { question: "NEC objectif au vêlage ?", options: ["2,0", "2,5", "3,5", "4,5"], correct: 2 },
                { question: "Temps repos couché/jour ?", options: ["4-6h", "8-10h", "12-14h", "18-20h"], correct: 2 },
                { question: "Perte NEC max post-vêlage ?", options: ["0,5 point", "1 point", "2 points", "3 points"], correct: 1 }
            ]
        }
    ]
};
