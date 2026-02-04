/**
 * ÉLEVAGE PRO - Données Apiculture ENRICHIES
 * Formation professionnelle complète
 */

const apicultureData = {
    modules: [
        {
            title: "Alimentation et nutrition",
            content: `
                <h4>🍯 Nutrition naturelle des abeilles</h4>
                <p>L'abeille collecte et transforme des ressources naturelles pour assurer 
                les besoins énergétiques et protéiques de la colonie.</p>

                <h4>📊 Les ressources alimentaires</h4>
                <table>
                    <tr>
                        <th>Ressource</th>
                        <th>Origine</th>
                        <th>Fonction</th>
                        <th>Stock/colonie</th>
                    </tr>
                    <tr>
                        <td>Nectar → Miel</td>
                        <td>Fleurs mellifères</td>
                        <td>Énergie (glucides)</td>
                        <td>15-25 kg pour l'hiver</td>
                    </tr>
                    <tr>
                        <td>Pollen</td>
                        <td>Étamines des fleurs</td>
                        <td>Protéines, lipides</td>
                        <td>2-3 kg réserve</td>
                    </tr>
                    <tr>
                        <td>Eau</td>
                        <td>Sources naturelles</td>
                        <td>Régulation température</td>
                        <td>Collecte quotidienne</td>
                    </tr>
                    <tr>
                        <td>Propolis</td>
                        <td>Résine végétale</td>
                        <td>Désinfection, colmatage</td>
                        <td>100-300 g/an</td>
                    </tr>
                </table>

                <h4>🥄 Nourrissement artificiel</h4>
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Composition</th>
                        <th>Période</th>
                        <th>Usage</th>
                    </tr>
                    <tr>
                        <td>Sirop léger (50/50)</td>
                        <td>1 kg sucre + 1 L eau</td>
                        <td>Printemps</td>
                        <td>Stimulation développement</td>
                    </tr>
                    <tr>
                        <td>Sirop lourd (2/1)</td>
                        <td>2 kg sucre + 1 L eau</td>
                        <td>Automne</td>
                        <td>Constitution réserves</td>
                    </tr>
                    <tr>
                        <td>Candi</td>
                        <td>Pâte sucrée solide</td>
                        <td>Hiver</td>
                        <td>Nourrissement urgence</td>
                    </tr>
                </table>

                <div class="lesson-warning">
                    <div class="lesson-warning-title">⚠️ Risques sanitaires</div>
                    <p>Ne jamais nourrir avec du miel du commerce (risque de loque américaine).
                    Utiliser exclusivement du sucre cristal blanc ou des sirops spéciaux apiculture.</p>
                </div>
            `,
            quiz: [
                { question: "Source de protéines pour abeilles ?", options: ["Nectar", "Pollen", "Eau", "Miel"], correct: 1 },
                { question: "Sirop 2/1 sert à ?", options: ["Stimulation printemps", "Réserves hivernales", "Traitement", "Nettoyage"], correct: 1 },
                { question: "Le candi est utilisé en ?", options: ["Été", "Printemps", "Hiver", "Automne"], correct: 2 },
                { question: "Réserve miel pour l'hiver ?", options: ["5-10 kg", "15-25 kg", "30-40 kg", "50+ kg"], correct: 1 },
                { question: "Le pollen apporte ?", options: ["Glucides", "Protéines", "Eau", "Cire"], correct: 1 },
                { question: "Sirop stimulation printanière ?", options: ["1/2", "50/50", "2/1", "3/1"], correct: 1 },
                { question: "Propolis sert à ?", options: ["Nourriture", "Désinfection", "Eau", "Lumière"], correct: 1 },
                { question: "Risque du miel du commerce ?", options: ["Goût", "Loque américaine", "Prix", "Couleur"], correct: 1 }
            ]
        },
        {
            title: "Reproduction et génétique",
            content: `
                <h4>👑 Organisation de la colonie</h4>
                <table>
                    <tr>
                        <th>Caste</th>
                        <th>Nombre</th>
                        <th>Durée vie</th>
                        <th>Rôle</th>
                    </tr>
                    <tr>
                        <td>Reine</td>
                        <td>1 seule</td>
                        <td>3-5 ans</td>
                        <td>Ponte (1500-2000 œufs/jour)</td>
                    </tr>
                    <tr>
                        <td>Ouvrières</td>
                        <td>30 000-60 000</td>
                        <td>6 sem (été) / 6 mois (hiver)</td>
                        <td>Toutes les tâches</td>
                    </tr>
                    <tr>
                        <td>Faux-bourdons</td>
                        <td>500-2 000</td>
                        <td>3-4 mois</td>
                        <td>Fécondation reines vierges</td>
                    </tr>
                </table>

                <h4>🔄 Cycle de développement</h4>
                <table>
                    <tr>
                        <th>Stade</th>
                        <th>Reine</th>
                        <th>Ouvrière</th>
                        <th>Faux-bourdon</th>
                    </tr>
                    <tr>
                        <td>Œuf</td>
                        <td>3 jours</td>
                        <td>3 jours</td>
                        <td>3 jours</td>
                    </tr>
                    <tr>
                        <td>Larve</td>
                        <td>5 jours</td>
                        <td>6 jours</td>
                        <td>7 jours</td>
                    </tr>
                    <tr>
                        <td>Nymphe</td>
                        <td>8 jours</td>
                        <td>12 jours</td>
                        <td>14 jours</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>16 jours</strong></td>
                        <td><strong>21 jours</strong></td>
                        <td><strong>24 jours</strong></td>
                    </tr>
                </table>

                <h4>🐝 L'essaimage</h4>
                <p>L'essaimage est la reproduction naturelle de la colonie. La vieille reine 
                quitte la ruche avec environ 50% des abeilles pour former une nouvelle colonie.</p>

                <div class="lesson-info">
                    <div class="lesson-info-title">🧬 Élevage de reines</div>
                    <p>Techniques : picking (greffage), méthode Miller, Jenter/Nicot.
                    Critères de sélection : douceur, productivité, résistance aux maladies, faible essaimage.</p>
                </div>
            `,
            quiz: [
                { question: "Durée vie de la reine ?", options: ["1 an", "3-5 ans", "10 ans", "20 ans"], correct: 1 },
                { question: "Nombre ouvrières par ruche ?", options: ["5 000-10 000", "15 000-25 000", "30 000-60 000", "100 000+"], correct: 2 },
                { question: "L'essaimage est ?", options: ["Maladie", "Reproduction naturelle", "Traitement", "Récolte"], correct: 1 },
                { question: "Développement reine (œuf→adulte) ?", options: ["12 jours", "16 jours", "21 jours", "24 jours"], correct: 1 },
                { question: "Ponte journalière de la reine ?", options: ["100-200", "500-800", "1500-2000", "5000+"], correct: 2 },
                { question: "Durée vie ouvrière en été ?", options: ["2 semaines", "6 semaines", "3 mois", "1 an"], correct: 1 },
                { question: "Rôle des faux-bourdons ?", options: ["Travail", "Fécondation", "Défense", "Ponte"], correct: 1 },
                { question: "Développement ouvrière ?", options: ["16 jours", "21 jours", "24 jours", "30 jours"], correct: 1 }
            ]
        },
        {
            title: "Santé animale et prévention",
            content: `
                <h4>💉 Principales maladies et parasites</h4>
                
                <table>
                    <tr>
                        <th>Pathologie</th>
                        <th>Agent</th>
                        <th>Symptômes</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>Varroa destructor</td>
                        <td>Acarien</td>
                        <td>Abeilles déformées, affaiblissement</td>
                        <td>Traitements obligatoires</td>
                    </tr>
                    <tr>
                        <td>Loque américaine</td>
                        <td>Bactérie (spores)</td>
                        <td>Couvain putréfié, odeur</td>
                        <td>Destruction obligatoire</td>
                    </tr>
                    <tr>
                        <td>Loque européenne</td>
                        <td>Bactérie</td>
                        <td>Larves jaunâtres</td>
                        <td>Transvasement, antibiotiques</td>
                    </tr>
                    <tr>
                        <td>Nosémose</td>
                        <td>Champignon</td>
                        <td>Diarrhée, ventre gonflé</td>
                        <td>Hygiène, stimulation</td>
                    </tr>
                    <tr>
                        <td>Frelon asiatique</td>
                        <td>Prédateur</td>
                        <td>Prédation devant ruches</td>
                        <td>Pièges, réduction entrée</td>
                    </tr>
                </table>

                <h4>💊 Lutte contre Varroa</h4>
                <ul>
                    <li><strong>Acide oxalique</strong> : dégouttement ou sublimation (hiver)</li>
                    <li><strong>Acide formique</strong> : diffuseur (été/automne)</li>
                    <li><strong>Thymol</strong> : Apilife Var, Thymovar (été)</li>
                    <li><strong>Biotechniques</strong> : retrait couvain mâle, encagement reine</li>
                </ul>

                <div class="lesson-warning">
                    <div class="lesson-warning-title">🔴 Loque américaine</div>
                    <p>Maladie réglementée à déclaration obligatoire. Les spores peuvent 
                    survivre 40 ans. Seule la destruction par le feu élimine le risque.
                    Jamais de récupération de matériel contaminé.</p>
                </div>
            `,
            quiz: [
                { question: "Varroa est ?", options: ["Virus", "Bactérie", "Acarien", "Champignon"], correct: 2 },
                { question: "Loque américaine impose ?", options: ["Traitement", "Destruction", "Quarantaine", "Vaccination"], correct: 1 },
                { question: "Acide oxalique utilisé en ?", options: ["Été", "Printemps", "Hiver", "Automne"], correct: 2 },
                { question: "Le frelon asiatique est ?", options: ["Maladie", "Prédateur", "Parasite", "Virus"], correct: 1 },
                { question: "Nosémose affecte ?", options: ["Ailes", "Intestins", "Yeux", "Pattes"], correct: 1 },
                { question: "Durée survie spores loque ?", options: ["1 an", "10 ans", "40 ans", "100 ans"], correct: 2 },
                { question: "Thymol s'utilise en ?", options: ["Hiver", "Été", "Printemps", "Toute l'année"], correct: 1 },
                { question: "Biotechnique anti-varroa ?", options: ["Sirop", "Retrait couvain mâle", "Enfumage", "Nourrissement"], correct: 1 }
            ]
        },
        {
            title: "Logement et infrastructures",
            content: `
                <h4>🏠 Types de ruches</h4>
                
                <table>
                    <tr>
                        <th>Type</th>
                        <th>Cadres corps</th>
                        <th>Avantages</th>
                        <th>Utilisation</th>
                    </tr>
                    <tr>
                        <td>Dadant</td>
                        <td>10-12 cadres</td>
                        <td>Standard France, grand volume</td>
                        <td>Production miel</td>
                    </tr>
                    <tr>
                        <td>Langstroth</td>
                        <td>10 cadres</td>
                        <td>Standard international</td>
                        <td>Transhumance</td>
                    </tr>
                    <tr>
                        <td>Warré</td>
                        <td>8 cadres petits</td>
                        <td>Apiculture naturelle</td>
                        <td>Amateur, bio</td>
                    </tr>
                    <tr>
                        <td>Kenyane (TBH)</td>
                        <td>Barrettes</td>
                        <td>Simple, économique</td>
                        <td>Pays en développement</td>
                    </tr>
                </table>

                <h4>📍 Emplacement du rucher</h4>
                <ul>
                    <li><strong>Exposition</strong> : sud/sud-est, protégé vents nord</li>
                    <li><strong>Environnement</strong> : diversité florale dans 3 km</li>
                    <li><strong>Eau</strong> : point d'eau à proximité (< 500 m)</li>
                    <li><strong>Distances légales</strong> : 20-100 m des voies selon département</li>
                </ul>

                <h4>🔧 Équipements de l'apiculteur</h4>
                <table>
                    <tr>
                        <th>Équipement</th>
                        <th>Usage</th>
                        <th>Coût indicatif</th>
                    </tr>
                    <tr>
                        <td>Enfumoir</td>
                        <td>Calmer les abeilles</td>
                        <td>25-60€</td>
                    </tr>
                    <tr>
                        <td>Combinaison + voile</td>
                        <td>Protection</td>
                        <td>50-150€</td>
                    </tr>
                    <tr>
                        <td>Lève-cadres</td>
                        <td>Manipulation</td>
                        <td>15-30€</td>
                    </tr>
                    <tr>
                        <td>Extracteur</td>
                        <td>Récolte miel</td>
                        <td>300-1500€</td>
                    </tr>
                </table>

                <div class="lesson-tip">
                    <div class="lesson-tip-title">💡 Conseil</div>
                    <p>Commencez avec 2-3 ruches minimum pour pouvoir comparer et intervenir. 
                    Une ruche isolée est plus difficile à gérer.</p>
                </div>
            `,
            quiz: [
                { question: "Ruche la plus répandue en France ?", options: ["Warré", "Langstroth", "Dadant", "Kenyane"], correct: 2 },
                { question: "Exposition idéale rucher ?", options: ["Nord", "Sud/sud-est", "Ouest", "Ombre"], correct: 1 },
                { question: "Outil essentiel de l'apiculteur ?", options: ["Marteau", "Enfumoir", "Scie", "Pelle"], correct: 1 },
                { question: "Rayon butinage abeilles ?", options: ["500 m", "1 km", "3 km", "10 km"], correct: 2 },
                { question: "Nombre ruches pour débuter ?", options: ["1", "2-3", "10", "20"], correct: 1 },
                { question: "Coût extracteur basique ?", options: ["50-100€", "300-1500€", "2000-3000€", "5000€"], correct: 1 },
                { question: "Dadant a combien de cadres ?", options: ["6-8", "10-12", "15-18", "20+"], correct: 1 },
                { question: "Distance point d'eau ?", options: ["< 100 m", "< 500 m", "< 2 km", "< 5 km"], correct: 1 }
            ]
        },
        {
            title: "Gestion économique",
            content: `
                <h4>💰 Productions et rendements</h4>
                
                <table>
                    <tr>
                        <th>Production</th>
                        <th>Rendement/ruche/an</th>
                        <th>Prix vente</th>
                    </tr>
                    <tr>
                        <td>Miel toutes fleurs</td>
                        <td>15-25 kg</td>
                        <td>8-12€/kg</td>
                    </tr>
                    <tr>
                        <td>Miel de cru (lavande, châtaignier...)</td>
                        <td>10-20 kg</td>
                        <td>15-25€/kg</td>
                    </tr>
                    <tr>
                        <td>Pollen frais</td>
                        <td>2-4 kg</td>
                        <td>30-50€/kg</td>
                    </tr>
                    <tr>
                        <td>Propolis</td>
                        <td>100-200 g</td>
                        <td>50-100€/kg</td>
                    </tr>
                    <tr>
                        <td>Gelée royale</td>
                        <td>200-500 g</td>
                        <td>1000-2000€/kg</td>
                    </tr>
                    <tr>
                        <td>Essaims</td>
                        <td>1-2 par ruche productive</td>
                        <td>120-180€/essaim</td>
                    </tr>
                </table>

                <h4>💵 Investissements de départ</h4>
                <ul>
                    <li><strong>Ruche complète peuplée</strong> : 200-300€</li>
                    <li><strong>Équipement apiculteur</strong> : 150-300€</li>
                    <li><strong>Matériel de miellerie (petit)</strong> : 500-1500€</li>
                    <li><strong>Formation</strong> : 150-400€</li>
                </ul>

                <div class="lesson-success">
                    <div class="lesson-success-title">📈 Seuil de rentabilité</div>
                    <p>En moyenne, une exploitation devient rentable à partir de 150-200 ruches 
                    en activité principale. En activité complémentaire, 30-50 ruches peuvent 
                    générer un revenu intéressant.</p>
                </div>
            `,
            quiz: [
                { question: "Rendement miel moyen/ruche/an ?", options: ["5-10 kg", "15-25 kg", "40-50 kg", "100+ kg"], correct: 1 },
                { question: "Prix miel de cru ?", options: ["5-7€/kg", "15-25€/kg", "40-50€/kg", "100€/kg"], correct: 1 },
                { question: "Coût ruche peuplée ?", options: ["50-100€", "200-300€", "500-800€", "1000€"], correct: 1 },
                { question: "Production gelée royale/ruche ?", options: ["5-10 g", "50-100 g", "200-500 g", "1-2 kg"], correct: 2 },
                { question: "Prix essaim nu ?", options: ["50-80€", "120-180€", "300-400€", "500€"], correct: 1 },
                { question: "Seuil rentabilité pro ?", options: ["20-30 ruches", "50-100 ruches", "150-200 ruches", "500 ruches"], correct: 2 },
                { question: "Prix propolis ?", options: ["10-20€/kg", "50-100€/kg", "200-300€/kg", "500€/kg"], correct: 1 },
                { question: "Coût formation débutant ?", options: ["Gratuit", "150-400€", "1000€", "2000€"], correct: 1 }
            ]
        },
        {
            title: "Réglementation sanitaire",
            content: `
                <h4>📋 Obligations administratives</h4>
                
                <table>
                    <tr>
                        <th>Obligation</th>
                        <th>Détails</th>
                        <th>Sanctions</th>
                    </tr>
                    <tr>
                        <td>Déclaration rucher</td>
                        <td>Annuelle (01/09 au 31/12)</td>
                        <td>Pas d'indemnisation</td>
                    </tr>
                    <tr>
                        <td>Numéro NAPI</td>
                        <td>Attribué à la déclaration</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Distances légales</td>
                        <td>Variable selon département</td>
                        <td>Amendes, déplacement</td>
                    </tr>
                    <tr>
                        <td>Registre d'élevage</td>
                        <td>Traitements, mouvements</td>
                        <td>Sanctions sanitaires</td>
                    </tr>
                </table>

                <h4>🦠 Maladies à déclaration obligatoire</h4>
                <ul>
                    <li><strong>Loque américaine</strong> : catégorie 1 (destruction)</li>
                    <li><strong>Loque européenne</strong> : catégorie 2</li>
                    <li><strong>Nosémose</strong> : surveillance</li>
                    <li><strong>Varroose</strong> : surveillance</li>
                    <li><strong>Petit coléoptère</strong> : danger sanitaire de 1ère catégorie</li>
                </ul>

                <div class="lesson-info">
                    <div class="lesson-info-title">📱 Déclaration en ligne</div>
                    <p>La déclaration se fait sur mesdemarches.agriculture.gouv.fr
                    Conservez votre récépissé et affichez votre numéro NAPI sur chaque rucher.</p>
                </div>
            `,
            quiz: [
                { question: "Déclaration rucher quand ?", options: ["Janvier-Mars", "Avril-Juin", "Septembre-Décembre", "Toute l'année"], correct: 2 },
                { question: "NAPI signifie ?", options: ["Numéro Apiculteur", "Norme Apicole", "Nature Abeilles", "Nectar Premium"], correct: 0 },
                { question: "Loque américaine impose ?", options: ["Rien", "Déclaration + destruction", "Traitement", "Exportation"], correct: 1 },
                { question: "Fréquence déclaration ?", options: ["Mensuelle", "Annuelle", "Tous les 5 ans", "Unique"], correct: 1 },
                { question: "Registre élevage obligatoire ?", options: ["Non", "Oui", "Seulement > 50 ruches", "Seulement pro"], correct: 1 },
                { question: "Où déclarer les ruches ?", options: ["Mairie", "Préfecture", "Site agriculture.gouv", "Vétérinaire"], correct: 2 },
                { question: "Petit coléoptère est ?", options: ["Bénin", "Danger de 1ère catégorie", "Favorable", "Inexistant"], correct: 1 },
                { question: "NAPI doit être affiché ?", options: ["À la maison", "Sur chaque rucher", "Nulle part", "En mairie"], correct: 1 }
            ]
        },
        {
            title: "Bien-être animal",
            content: `
                <h4>💚 Bien-être de la colonie</h4>
                <p>Le bien-être des abeilles repose sur le respect de leur biologie et 
                la préservation de leur environnement.</p>

                <h4>✅ Bonnes pratiques</h4>
                <ul>
                    <li><strong>Réserves alimentaires</strong> : laisser 15-20 kg de miel pour l'hiver</li>
                    <li><strong>Manipulations</strong> : par beau temps, courtes et efficaces</li>
                    <li><strong>Traitements</strong> : dans les règles, au bon moment</li>
                    <li><strong>Génétique</strong> : favoriser souches adaptées localement</li>
                </ul>

                <h4>🌿 Environnement favorable</h4>
                <table>
                    <tr>
                        <th>Facteur</th>
                        <th>Impact positif</th>
                        <th>Impact négatif</th>
                    </tr>
                    <tr>
                        <td>Flore diversifiée</td>
                        <td>Nutrition équilibrée</td>
                        <td>Monoculture = carence</td>
                    </tr>
                    <tr>
                        <td>Absence pesticides</td>
                        <td>Santé des butineuses</td>
                        <td>Mortalité, désorientation</td>
                    </tr>
                    <tr>
                        <td>Eau propre</td>
                        <td>Régulation thermique</td>
                        <td>Contamination</td>
                    </tr>
                </table>

                <div class="lesson-warning">
                    <div class="lesson-warning-title">🚫 Dangers pour les abeilles</div>
                    <p>Les néonicotinoïdes (certains maintenant interdits) et certains pesticides 
                    causent mortalité directe, désorientation et affaiblissement immunitaire.
                    Communiquez avec les agriculteurs voisins.</p>
                </div>
            `,
            quiz: [
                { question: "Miel à laisser pour l'hiver ?", options: ["5-10 kg", "15-20 kg", "30-40 kg", "50 kg"], correct: 1 },
                { question: "Danger majeur pour abeilles ?", options: ["Froid", "Pesticides", "Lumière", "Bruit"], correct: 1 },
                { question: "Environnement idéal ?", options: ["Monoculture", "Diversité florale", "Ville", "Désert"], correct: 1 },
                { question: "Quand manipuler les ruches ?", options: ["Par temps froid", "Par beau temps", "La nuit", "Sous la pluie"], correct: 1 },
                { question: "Favoriser quelle génétique ?", options: ["Importée", "Adaptée localement", "Unique", "Hybride commercial"], correct: 1 },
                { question: "Eau pour les abeilles sert à ?", options: ["Nettoyer", "Régulation température", "Transport", "Défense"], correct: 1 },
                { question: "Impact monoculture ?", options: ["Positif", "Carences nutritionnelles", "Neutre", "Améliore santé"], correct: 1 },
                { question: "Communication agriculteurs ?", options: ["Inutile", "Importante", "Interdite", "Payante"], correct: 1 }
            ]
        }
    ]
};
