/**
 * ÉLEVAGE PRO - Données Aquaculture ENRICHIES
 * Formation professionnelle complète
 */

const aquacultureData = {
    modules: [
        {
            title: "Alimentation et nutrition",
            content: `
                <h4>🐟 Nutrition piscicole</h4>
                <p>L'alimentation représente <strong>50 à 60% des coûts de production</strong> 
                en aquaculture. La maîtrise nutritionnelle est cruciale pour la rentabilité.</p>

                <h4>📊 Besoins selon l'espèce</h4>
                <table>
                    <tr>
                        <th>Espèce</th>
                        <th>Régime</th>
                        <th>Protéines</th>
                        <th>Lipides</th>
                        <th>Température</th>
                    </tr>
                    <tr>
                        <td>Truite arc-en-ciel</td>
                        <td>Carnivore</td>
                        <td>40-48%</td>
                        <td>15-25%</td>
                        <td>10-18°C</td>
                    </tr>
                    <tr>
                        <td>Carpe commune</td>
                        <td>Omnivore</td>
                        <td>28-35%</td>
                        <td>5-10%</td>
                        <td>18-25°C</td>
                    </tr>
                    <tr>
                        <td>Tilapia</td>
                        <td>Omnivore</td>
                        <td>28-35%</td>
                        <td>5-8%</td>
                        <td>25-30°C</td>
                    </tr>
                    <tr>
                        <td>Silure africain</td>
                        <td>Carnivore</td>
                        <td>35-42%</td>
                        <td>10-15%</td>
                        <td>25-30°C</td>
                    </tr>
                    <tr>
                        <td>Bar/Loup</td>
                        <td>Carnivore</td>
                        <td>45-50%</td>
                        <td>15-20%</td>
                        <td>15-25°C</td>
                    </tr>
                </table>

                <h4>🍽️ Types d'aliments</h4>
                <ul>
                    <li><strong>Granulés extrudés</strong> : flottants ou coulants, standard industriel</li>
                    <li><strong>Aliments complets</strong> : équilibrés pour chaque stade</li>
                    <li><strong>Farines de poisson</strong> : source protéique traditionnelle</li>
                    <li><strong>Alternatives végétales</strong> : soja, colza (durabilité)</li>
                </ul>

                <div class="lesson-tip">
                    <div class="lesson-tip-title">📈 Indice de Conversion</div>
                    <p>L'IC en aquaculture est excellent comparé aux animaux terrestres :
                    <br>• Truite : 1,0-1,3 kg aliment/kg gain
                    <br>• Tilapia : 1,4-1,8
                    <br>• Carpe extensive : 1,8-2,5
                    <br>C'est bien meilleur que les bovins (6-8) ou porcs (2,5-3)</p>
                </div>
            `,
            quiz: [
                { question: "Taux protéines poissons carnivores ?", options: ["15-20%", "25-30%", "40-50%", "60-70%"], correct: 2 },
                { question: "Température optimale truite ?", options: ["5-8°C", "10-18°C", "25-30°C", "35°C"], correct: 1 },
                { question: "IC truite ?", options: ["0,5-0,8", "1,0-1,3", "3-4", "5-6"], correct: 1 },
                { question: "Part alimentation dans coûts ?", options: ["20-30%", "40-45%", "50-60%", "80%"], correct: 2 },
                { question: "Régime alimentaire tilapia ?", options: ["Carnivore strict", "Omnivore", "Herbivore", "Détritivore"], correct: 1 },
                { question: "Alternative végétale aux farines ?", options: ["Viande", "Soja", "Lait", "Œufs"], correct: 1 },
                { question: "Température tilapia ?", options: ["5-10°C", "15-20°C", "25-30°C", "35-40°C"], correct: 2 },
                { question: "IC comparé aux bovins est ?", options: ["Similaire", "Moins bon", "Bien meilleur", "Variable"], correct: 2 }
            ]
        },
        {
            title: "Reproduction et génétique",
            content: `
                <h4>🥚 Reproduction piscicole</h4>
                
                <table>
                    <tr>
                        <th>Technique</th>
                        <th>Description</th>
                        <th>Espèces</th>
                    </tr>
                    <tr>
                        <td>Naturelle (étang)</td>
                        <td>Frayères aménagées</td>
                        <td>Carpe, tilapia</td>
                    </tr>
                    <tr>
                        <td>Stripping</td>
                        <td>Extraction manuelle des gamètes</td>
                        <td>Truite, saumon</td>
                    </tr>
                    <tr>
                        <td>Induction hormonale</td>
                        <td>Injection HCG ou LHRH</td>
                        <td>Silure, perche</td>
                    </tr>
                </table>

                <h4>📅 Cycle de production truite</h4>
                <ul>
                    <li><strong>Œufs fécondés</strong> : incubation 400-500°C.jours</li>
                    <li><strong>Alevinage</strong> : 2-5 g, phase critique</li>
                    <li><strong>Pré-grossissement</strong> : 5-50 g</li>
                    <li><strong>Grossissement</strong> : jusqu'au poids commercial</li>
                </ul>

                <h4>🎯 Poids commerciaux</h4>
                <table>
                    <tr>
                        <th>Produit</th>
                        <th>Poids</th>
                        <th>Durée élevage</th>
                    </tr>
                    <tr>
                        <td>Truite portion</td>
                        <td>250-350 g</td>
                        <td>12-18 mois</td>
                    </tr>
                    <tr>
                        <td>Truite grande taille</td>
                        <td>2-4 kg</td>
                        <td>24-36 mois</td>
                    </tr>
                    <tr>
                        <td>Tilapia</td>
                        <td>300-500 g</td>
                        <td>6-9 mois</td>
                    </tr>
                    <tr>
                        <td>Carpe</td>
                        <td>1-2 kg</td>
                        <td>2-3 ans</td>
                    </tr>
                </table>

                <div class="lesson-info">
                    <div class="lesson-info-title">🧬 Amélioration génétique</div>
                    <p>Sélection sur : vitesse de croissance, résistance maladies, 
                    rendement filet, qualité chair. Les lignées sélectionnées 
                    améliorent l'IC de 10-15% par génération.</p>
                </div>
            `,
            quiz: [
                { question: "Stripping c'est ?", options: ["Nettoyage", "Extraction manuelle gamètes", "Transport", "Tri"], correct: 1 },
                { question: "Phase critique en élevage ?", options: ["Œufs", "Alevinage", "Grossissement", "Vente"], correct: 1 },
                { question: "Incubation dépend de ?", options: ["Lumière", "Température (°C.jours)", "Salinité", "Pression"], correct: 1 },
                { question: "Poids truite portion ?", options: ["100-150 g", "250-350 g", "500-700 g", "1 kg+"], correct: 1 },
                { question: "Durée élevage truite portion ?", options: ["3-6 mois", "12-18 mois", "3 ans", "5 ans"], correct: 1 },
                { question: "Induction hormonale utilise ?", options: ["Antibiotiques", "HCG ou LHRH", "Vitamines", "Sel"], correct: 1 },
                { question: "Tilapia poids commercial ?", options: ["100-150 g", "300-500 g", "1-2 kg", "5 kg"], correct: 1 },
                { question: "Sélection améliore IC de ?", options: ["1-2%", "10-15%", "30-40%", "50%"], correct: 1 }
            ]
        },
        {
            title: "Santé animale et prévention",
            content: `
                <h4>💉 Pathologies piscicoles</h4>
                
                <table>
                    <tr>
                        <th>Maladie</th>
                        <th>Agent</th>
                        <th>Symptômes</th>
                        <th>Réglementée</th>
                    </tr>
                    <tr>
                        <td>SHV</td>
                        <td>Virus</td>
                        <td>Hémorragies, mortalité</td>
                        <td>Oui - Cat. 1</td>
                    </tr>
                    <tr>
                        <td>NHI</td>
                        <td>Virus</td>
                        <td>Exophtalmie, ascite</td>
                        <td>Oui - Cat. 1</td>
                    </tr>
                    <tr>
                        <td>Furonculose</td>
                        <td>Bactérie</td>
                        <td>Ulcères, furoncles</td>
                        <td>Surveillance</td>
                    </tr>
                    <tr>
                        <td>Ichthyophthirius</td>
                        <td>Protozoaire</td>
                        <td>Points blancs</td>
                        <td>Non</td>
                    </tr>
                    <tr>
                        <td>Saprolegnia</td>
                        <td>Champignon</td>
                        <td>Mycose cotonneuse</td>
                        <td>Non</td>
                    </tr>
                </table>

                <h4>🔬 Prévention</h4>
                <ul>
                    <li><strong>Qualité de l'eau</strong> : O2, pH, NH3, température</li>
                    <li><strong>Densités adaptées</strong> : éviter surpeuplement</li>
                    <li><strong>Quarantaine</strong> : tout nouveau lot</li>
                    <li><strong>Désinfection</strong> : matériel entre bassins</li>
                </ul>

                <div class="lesson-warning">
                    <div class="lesson-warning-title">🚨 SHV et NHI</div>
                    <p>Ces maladies virales sont réglementées (catégorie 1). 
                    En cas de suspicion : déclaration obligatoire, restrictions de mouvements, 
                    possible abattage sanitaire. Les exploitations sont classées selon leur statut.</p>
                </div>
            `,
            quiz: [
                { question: "SHV est ?", options: ["Bactérie", "Virus", "Parasite", "Champignon"], correct: 1 },
                { question: "Points blancs = ?", options: ["Stress", "Ichthyophthirius", "Nourriture", "Froid"], correct: 1 },
                { question: "Paramètre eau crucial ?", options: ["Couleur", "Oxygène dissous", "Courant seul", "Profondeur"], correct: 1 },
                { question: "SHV et NHI sont ?", options: ["Bénignes", "Réglementées cat. 1", "Rares", "Inexistantes"], correct: 1 },
                { question: "Prévention principale ?", options: ["Médicaments", "Qualité eau + hygiène", "Température haute", "Densité max"], correct: 1 },
                { question: "Saprolegnia est ?", options: ["Virus", "Bactérie", "Champignon", "Parasite"], correct: 2 },
                { question: "Quarantaine pour ?", options: ["Tous poissons", "Nouveaux lots", "Reproducteurs", "Vente"], correct: 1 },
                { question: "Furonculose causée par ?", options: ["Virus", "Bactérie", "Parasite", "Champignon"], correct: 1 }
            ]
        },
        {
            title: "Logement et infrastructures",
            content: `
                <h4>🏠 Systèmes d'élevage</h4>
                
                <table>
                    <tr>
                        <th>Système</th>
                        <th>Caractéristiques</th>
                        <th>Densité</th>
                        <th>Espèces</th>
                    </tr>
                    <tr>
                        <td>Étangs</td>
                        <td>Extensif, faible intrant</td>
                        <td>0,5-2 t/ha</td>
                        <td>Carpe, tilapia</td>
                    </tr>
                    <tr>
                        <td>Bassins béton/terre</td>
                        <td>Intensif, eau courante</td>
                        <td>20-50 kg/m³</td>
                        <td>Truite, bar</td>
                    </tr>
                    <tr>
                        <td>Cages flottantes</td>
                        <td>Lac ou mer</td>
                        <td>15-30 kg/m³</td>
                        <td>Saumon, bar</td>
                    </tr>
                    <tr>
                        <td>RAS (circuit fermé)</td>
                        <td>Recirculation, haute techno</td>
                        <td>50-100+ kg/m³</td>
                        <td>Toutes</td>
                    </tr>
                </table>

                <h4>💧 Paramètres eau essentiels</h4>
                <table>
                    <tr>
                        <th>Paramètre</th>
                        <th>Eau froide (truite)</th>
                        <th>Eau chaude (tilapia)</th>
                    </tr>
                    <tr>
                        <td>Température</td>
                        <td>10-18°C</td>
                        <td>25-30°C</td>
                    </tr>
                    <tr>
                        <td>Oxygène dissous</td>
                        <td>> 6 mg/L</td>
                        <td>> 4 mg/L</td>
                    </tr>
                    <tr>
                        <td>pH</td>
                        <td>6,5-8,0</td>
                        <td>6,5-9,0</td>
                    </tr>
                    <tr>
                        <td>Ammoniac (NH3)</td>
                        <td>< 0,02 mg/L</td>
                        <td>< 0,05 mg/L</td>
                    </tr>
                    <tr>
                        <td>Nitrites (NO2)</td>
                        <td>< 0,1 mg/L</td>
                        <td>< 0,5 mg/L</td>
                    </tr>
                </table>

                <div class="lesson-info">
                    <div class="lesson-info-title">🔄 RAS - Recirculating Aquaculture System</div>
                    <p>Système intensif où l'eau est recyclée (90-99%). Avantages : 
                    indépendance climatique, biosécurité, faible empreinte eau. 
                    Investissement élevé mais maîtrise totale.</p>
                </div>
            `,
            quiz: [
                { question: "RAS signifie ?", options: ["Ration Alimentaire Standard", "Recirculating Aquaculture System", "Région Aquacole Sud", "Reproduction Assistée"], correct: 1 },
                { question: "O2 minimum truites ?", options: ["2 mg/L", "4 mg/L", "6 mg/L", "10 mg/L"], correct: 2 },
                { question: "pH optimal eau douce ?", options: ["4-5", "6,5-8", "9-10", "12"], correct: 1 },
                { question: "Densité étang extensif ?", options: ["0,5-2 t/ha", "10-20 t/ha", "50 t/ha", "100 t/ha"], correct: 0 },
                { question: "NH3 max truite ?", options: ["< 0,02 mg/L", "< 0,5 mg/L", "< 1 mg/L", "< 5 mg/L"], correct: 0 },
                { question: "RAS recycle quelle part eau ?", options: ["10-20%", "50-60%", "90-99%", "100%"], correct: 2 },
                { question: "Densité bassins intensifs ?", options: ["1-5 kg/m³", "20-50 kg/m³", "200 kg/m³", "500 kg/m³"], correct: 1 },
                { question: "Cages flottantes en ?", options: ["Rivière seule", "Lac ou mer", "Bassin béton", "Étang"], correct: 1 }
            ]
        },
        {
            title: "Gestion économique",
            content: `
                <h4>💰 Rentabilité aquacole</h4>
                
                <table>
                    <tr>
                        <th>Indicateur</th>
                        <th>Truite intensif</th>
                        <th>Étang extensif</th>
                    </tr>
                    <tr>
                        <td>IC</td>
                        <td>1,0-1,3</td>
                        <td>1,8-2,5</td>
                    </tr>
                    <tr>
                        <td>Production/m³ ou ha</td>
                        <td>20-50 kg/m³</td>
                        <td>1-3 t/ha</td>
                    </tr>
                    <tr>
                        <td>Cycle production</td>
                        <td>12-18 mois</td>
                        <td>2-3 ans</td>
                    </tr>
                    <tr>
                        <td>Prix vente</td>
                        <td>4-7€/kg</td>
                        <td>2-4€/kg</td>
                    </tr>
                </table>

                <h4>💵 Structure des coûts (intensif)</h4>
                <ul>
                    <li><strong>Alimentation</strong> : 50-60%</li>
                    <li><strong>Alevins</strong> : 10-15%</li>
                    <li><strong>Énergie (pompes, O2)</strong> : 10-20%</li>
                    <li><strong>Main d'œuvre</strong> : 10-15%</li>
                </ul>

                <h4>📊 Commercialisation</h4>
                <ul>
                    <li><strong>Vente vif</strong> : grossistes, mareyeurs</li>
                    <li><strong>Transformation</strong> : fumage, filets</li>
                    <li><strong>Vente directe</strong> : pêche à la ligne, marchés</li>
                    <li><strong>Labels</strong> : Bio, Label Rouge</li>
                </ul>

                <div class="lesson-success">
                    <div class="lesson-success-title">📈 Facteurs de succès</div>
                    <p>• Maîtriser l'IC (chaque 0,1 point gagné compte)
                    <br>• Minimiser mortalité (< 10% objectif)
                    <br>• Valoriser par transformation directe
                    <br>• Diversifier les marchés</p>
                </div>
            `,
            quiz: [
                { question: "IC truite intensif ?", options: ["0,5", "1,0-1,3", "3", "5"], correct: 1 },
                { question: "Poids truite portion ?", options: ["100 g", "250-350 g", "500 g", "1 kg"], correct: 1 },
                { question: "% charges alimentation ?", options: ["20-30%", "40-45%", "50-60%", "80%"], correct: 2 },
                { question: "Prix truite intensif ?", options: ["1-2€/kg", "4-7€/kg", "15-20€/kg", "30€/kg"], correct: 1 },
                { question: "Production étang/ha ?", options: ["100-300 kg", "1-3 t", "10-15 t", "50 t"], correct: 1 },
                { question: "Mortalité objectif ?", options: ["< 1%", "< 10%", "< 25%", "< 50%"], correct: 1 },
                { question: "Transformation permet ?", options: ["Coûts", "Valorisation", "Pertes", "Problèmes"], correct: 1 },
                { question: "Cycle truite portion ?", options: ["3-6 mois", "12-18 mois", "3-4 ans", "5 ans"], correct: 1 }
            ]
        },
        {
            title: "Réglementation sanitaire",
            content: `
                <h4>📋 Cadre légal</h4>
                <table>
                    <tr>
                        <th>Obligation</th>
                        <th>Seuil/Détails</th>
                    </tr>
                    <tr>
                        <td>Autorisation piscicole</td>
                        <td>Toute exploitation commerciale</td>
                    </tr>
                    <tr>
                        <td>ICPE</td>
                        <td>> 20 tonnes production/an</td>
                    </tr>
                    <tr>
                        <td>Déclaration création étang</td>
                        <td>Selon superficie et département</td>
                    </tr>
                    <tr>
                        <td>Registre élevage</td>
                        <td>Mouvements, traitements, mortalités</td>
                    </tr>
                </table>

                <h4>🦠 Maladies réglementées</h4>
                <ul>
                    <li><strong>Catégorie 1</strong> : SHV, NHI (éradication)</li>
                    <li><strong>Surveillance</strong> : Rénibactériose, Gyrodactylose</li>
                    <li><strong>Zonage</strong> : statut indemne, surveillance, infecté</li>
                </ul>

                <h4>💧 Rejets</h4>
                <p>Contrôle qualité rejets : MES, DBO5, azote. Peut nécessiter 
                traitement avant rejet en milieu naturel.</p>

                <div class="lesson-info">
                    <div class="lesson-info-title">🏷️ Traçabilité</div>
                    <p>Obligatoire pour la mise sur le marché. Numéro d'agrément sanitaire, 
                    étiquetage (espèce, méthode production, origine), documents de transport.</p>
                </div>
            `,
            quiz: [
                { question: "ICPE obligatoire si ?", options: ["> 5 t/an", "> 20 t/an", "> 100 t/an", "Toujours"], correct: 1 },
                { question: "SHV et NHI = catégorie ?", options: ["Bénigne", "1 (éradication)", "Surveillance", "Inexistante"], correct: 1 },
                { question: "Registre élevage obligatoire ?", options: ["Non", "Oui", "Seulement > 50 t", "Facultatif"], correct: 1 },
                { question: "Autorisation piscicole ?", options: ["Facultative", "Obligatoire commercial", "Gratuite", "Annuelle"], correct: 1 },
                { question: "Rejets contrôlés sur ?", options: ["Couleur", "MES, DBO5, azote", "Bruit", "Odeur"], correct: 1 },
                { question: "Traçabilité obligatoire pour ?", options: ["Élevage", "Mise sur marché", "Interne", "Export seul"], correct: 1 },
                { question: "Zonage concerne ?", options: ["Géographie", "Statut sanitaire", "Climat", "Sol"], correct: 1 },
                { question: "Agrément sanitaire = ?", options: ["Option", "Numéro obligatoire vente", "Diplôme", "Formation"], correct: 1 }
            ]
        },
        {
            title: "Bien-être animal",
            content: `
                <h4>💚 Bien-être piscicole</h4>
                <p>Le bien-être des poissons est un sujet émergent avec des critères 
                spécifiques reconnus scientifiquement.</p>

                <h4>📏 Critères de bien-être</h4>
                <table>
                    <tr>
                        <th>Critère</th>
                        <th>Indicateur</th>
                    </tr>
                    <tr>
                        <td>Qualité eau</td>
                        <td>O2, pH, NH3, température optimaux</td>
                    </tr>
                    <tr>
                        <td>Densité</td>
                        <td>Adaptée à l'espèce, pas de surpopulation</td>
                    </tr>
                    <tr>
                        <td>Alimentation</td>
                        <td>Régulière, adaptée aux besoins</td>
                    </tr>
                    <tr>
                        <td>Comportement</td>
                        <td>Nage normale, appétit, absence agression</td>
                    </tr>
                    <tr>
                        <td>État physique</td>
                        <td>Pas de lésions, nageoires intactes</td>
                    </tr>
                </table>

                <h4>🔪 Abattage</h4>
                <ul>
                    <li><strong>Étourdissement</strong> : recommandé avant mise à mort</li>
                    <li><strong>Méthodes</strong> : électronarcose, percussion, CO2</li>
                    <li><strong>Objectif</strong> : perte de conscience immédiate</li>
                </ul>

                <div class="lesson-success">
                    <div class="lesson-success-title">🌟 Bonnes pratiques</div>
                    <p>• Éviter manipulations stressantes
                    <br>• Réduire temps de jeûne avant transport
                    <br>• Maintenir paramètres eau optimaux
                    <br>• Former le personnel aux pratiques respectueuses</p>
                </div>
            `,
            quiz: [
                { question: "Bien-être = densités ?", options: ["Maximales", "Adaptées à l'espèce", "Minimales", "Variables"], correct: 1 },
                { question: "Étourdissement recommandé ?", options: ["Non", "Oui", "Interdit", "Optionnel"], correct: 1 },
                { question: "Indicateur bien-être ?", options: ["Couleur eau", "Comportement normal", "Bruit", "Odeur"], correct: 1 },
                { question: "Électronarcose sert à ?", options: ["Stimuler", "Étourdir", "Nourrir", "Traiter"], correct: 1 },
                { question: "Nageoires intactes = ?", options: ["Mauvais signe", "Bon bien-être", "Maladie", "Stress"], correct: 1 },
                { question: "Manipulation stressante ?", options: ["Recommandée", "À éviter", "Obligatoire", "Bénéfique"], correct: 1 },
                { question: "Jeûne avant transport ?", options: ["Long", "Réduit", "Inutile", "Permanent"], correct: 1 },
                { question: "Formation personnel ?", options: ["Facultative", "Recommandée", "Interdite", "Coûteuse"], correct: 1 }
            ]
        }
    ]
};
