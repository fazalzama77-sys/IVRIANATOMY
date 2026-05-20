// =========================================================
// SPLANCHNOLOGY DATA MODULE
// Pushes visceral organ data into the correct regional arrays:
//   atlasData["Head & Neck"]["Splanchnology"]
//   atlasData["Thorax"]["Splanchnology"]
//   atlasData["Abdomen"]["Splanchnology"]
// Must load AFTER the regional data files.
// =========================================================

// ---- HEAD & NECK > SPLANCHNOLOGY ----
atlasData["Head & Neck"]["Splanchnology"].push(
    {
        title: "Digestive System: Oral Cavity & Pharynx",
        desc: `<b>Overview:</b><br>
        • The oral cavity is the portal of the digestive tube.<br>
        • In ruminants, the <b>dental pad</b> replaces upper incisors — adapted for grasping roughage.<br>
        • The <b>Pharynx</b> is a muscular tube common to both respiratory and digestive pathways.<br>
        • Key features: Tongue (torus linguae in Ox), Teeth, Salivary Glands, and Soft Palate.`,
        eliteDesc: `<h3>Oral Cavity and Pharyngeal Architecture</h3>
        <p>The splanchnology of the head begins with the <b>oral cavity (cavum oris)</b>, which in ruminants is specialized for ingestion of large quantities of roughage. The absence of upper incisors and the presence of a cornified <b>dental pad</b> are pathognomonic adaptations.</p>
        <p>The bovine tongue bears a distinctive <b>torus linguae</b> (lingual torus) — a firm dorsal swelling of smooth muscle and connective tissue in the middle third of the tongue that aids in grasping forage.</p>
        <p>The <b>pharynx</b> acts as a critical switching station where the respiratory and digestive tracts cross. It is divided into the oropharynx, nasopharynx, and laryngopharynx. The epiglottis acts as the switching valve during deglutition.</p>
        <p>The <b>salivary glands</b> of ruminants are enormous — the parotid alone can weigh 400 g — because ruminants require vast quantities of alkaline saliva (up to 150 L/day in cattle) to buffer the fermentation acids in the rumen.</p>`,
        comparative: [
            { species: "Ox", note: "Dental pad (pollex dentalis) replaces upper incisors. Large torus linguae. Parotid gland is enormous. Soft palate is relatively short." },
            { species: "Horse", note: "Has upper incisors. Very long, fleshy soft palate — obligate nasal breather. Cannot vomit due to strong cardiac sphincter." },
            { species: "Dog", note: "Has both upper and lower incisors. Soft palate is short. Vomiting reflex is well developed." }
        ],
        clinical: "<b>Pharyngeal Paralysis:</b> Can lead to dysphagia and aspiration pneumonia. <b>Actinobacillosis (Wooden Tongue):</b> Actinobacillus lignieresii causes granulomatous glossitis in cattle — tongue becomes hard and swollen. <b>Calf Diphtheria:</b> Fusobacterium necrophorum causes necrotic stomatitis/pharyngitis in calves."
    },
    {
        title: "Teeth & Age Determination by Dentition",
        desc: `<b>High-Yield Points:</b><br>
        • <b>Heterodont</b> (different shaped teeth) and <b>diphyodont</b> (deciduous + permanent).<br>
        • Dental formula (Permanent Ox): <b>I 0/3, C 0/1, P 3/3, M 3/3 = 32 teeth</b>.<br>
        • Ox has NO upper incisors or canines — replaced by dental pad. The lower 'canine' is incisiform, so 4 lower 'incisors' = I1, I2, I3, C.<br>
        • Horse: I 3/3, C 1/1 (rudimentary in mare), P 3-4/3, M 3/3 = 36-44.<br>
        • Dog: I 3/3, C 1/1, P 4/4, M 2/3 = 42.<br>
        • <b>Age determination by dentition</b>: based on eruption + wear of incisors.`,
        eliteDesc: `<h3>TEETH OF DOMESTIC ANIMALS</h3>
        <p><b>Tooth Structure:</b> Crown (above gum) + Root (in alveolus). Tissues: enamel (hardest), dentine, cementum, pulp (with vessels & nerves).</p>
        <p><b>Types of Teeth:</b> Incisors (I) for cutting; Canines (C) for tearing; Premolars (P) + Molars (M) for grinding (cheek teeth).</p>
        <p><b>Hypsodont vs Brachydont:</b><br>
        • <b>Hypsodont</b> (high-crowned, continuous eruption) — horse, ruminants, rabbit. Adapted to abrasive plant diet.<br>
        • <b>Brachydont</b> (low-crowned, no continuous eruption) — dog, cat, pig, human.</p>
        <p><b>OX DENTAL FORMULA:</b><br>
        Deciduous: 2(Di 0/4, Dc 0/0, Dp 3/3) = 20 teeth.<br>
        Permanent: 2(I 0/3, C 0/1, P 3/3, M 3/3) = 32 teeth.<br>
        Note: lower canine in ox is INCISIFORM (looks like an incisor) → so 4 lower 'incisor-like teeth' on each side.</p>
        <p><b>HORSE DENTAL FORMULA:</b><br>
        Permanent: 2(I 3/3, C 1/1, P 3-4/3, M 3/3) = 36-44 teeth.<br>
        Mare often lacks canines; may have 'wolf tooth' (vestigial P1).</p>
        <p><b>DOG DENTAL FORMULA:</b> 2(I 3/3, C 1/1, P 4/4, M 2/3) = 42.</p>
        <p><b>AGE DETERMINATION BY DENTITION (Cattle):</b><br>
        Examines eruption and wear of permanent lower incisors:<br>
        • Birth — incisors not erupted (deciduous appear in days).<br>
        • 1.5-2 years — central permanent I1 erupt.<br>
        • 2.5-3 years — I2 erupt.<br>
        • 3-3.5 years — I3 erupt.<br>
        • 3.5-4 years — corner 'canine' erupts ('full mouth').<br>
        • Beyond 5 years — wear pattern of incisors used; 'leveling' progresses from medial to lateral with age.</p>
        <p><b>AGE DETERMINATION BY DENTITION (Horse) — 'Galvayne's groove' on the upper corner incisor + cup wear pattern:</b><br>
        • Cups disappear from lower I1 at ~6 yrs, I2 at ~7, I3 at ~8 ('smooth mouth' at 9).<br>
        • Galvayne's groove appears at corner of upper I3 at 10 yrs, halfway down at 15, all the way down at 20, fades by 30.</p>
        <p><b>AGE DETERMINATION (Dog):</b><br>
        Deciduous teeth erupt 3-6 weeks. Permanent: incisors at 3-5 months, canines at 5-6 months, premolars 4-6 months, molars 5-7 months. After 1 year — wear pattern of incisor cusps (cusps level by 4-5 yrs).</p>`,
        comparative: [
            { species: "Ox", note: "32 permanent teeth. NO upper incisors. Hypsodont cheek teeth. 'Full mouth' at ~4 years." },
            { species: "Horse", note: "36-44 teeth (variable). All hypsodont. Galvayne's groove for age." },
            { species: "Dog", note: "42 teeth, brachydont. Carnassial teeth = upper P4 + lower M1 (shearing pair)." },
            { species: "Pig", note: "44 teeth. Tusks = canines (continuous growth in boar). 'Needle teeth' in piglets often clipped." }
        ],
        clinical: "<b>Floating (Horse):</b> Filing sharp enamel points off cheek teeth — routine equine dental care. <b>Wolf Tooth Removal (Horse):</b> Standard before bitting. <b>Dental Tartar / Periodontal Disease (Dog):</b> Common in small breeds — leads to systemic illness. <b>Age Verification:</b> Required for many sales/insurance — 'mouthing' in cattle/horse."
    },
    {
        title: "Hard & Soft Palate, Tongue, Pharynx",
        desc: `<b>Hard Palate:</b> Bony roof of mouth, formed by palatine processes of incisive + maxillary + palatine bones. Covered with mucosa with transverse ridges (rugae palatinae).<br>
        <b>Soft Palate:</b> Muscular continuation behind hard palate; separates nasopharynx from oropharynx. Long in horse → cannot mouth-breathe.<br>
        <b>Tongue:</b> Muscular organ; Ox has prominent <b>torus linguae</b> (lingual torus). Three types of papillae: filiform (rough surface), fungiform (taste), vallate (large, taste).<br>
        <b>Pharynx:</b> Muscular tube — common to digestive + respiratory. 3 parts: nasopharynx, oropharynx, laryngopharynx.`,
        eliteDesc: `<h3>HARD PALATE, SOFT PALATE, TONGUE & PHARYNX</h3>
        <p><b>HARD PALATE (Palatum durum):</b><br>
        • Bony plate forming the roof of the oral cavity.<br>
        • Formed by palatine processes of incisive (rostral), maxillary (middle), palatine bones (caudal).<br>
        • Covered with thick keratinized mucosa with transverse ridges = <b>rugae palatinae</b> — help direct food back during chewing.<br>
        • Anteriorly (rostrally) has the <b>incisive (palatine) papilla</b> with the openings of the <b>incisive ducts</b> connecting oral cavity to vomeronasal organ (Flehmen behavior).</p>
        <p><b>SOFT PALATE (Palatum molle / Velum palatinum):</b><br>
        • Muscular curtain extending caudally from the hard palate.<br>
        • Separates nasopharynx (above) from oropharynx (below).<br>
        • Free caudal edge has the <b>uvula</b> (small in domestic species) and palatoglossal/palatopharyngeal arches.<br>
        • Muscles: tensor veli palatini, levator veli palatini, palatinus, palatoglossus, palatopharyngeus.<br>
        • <b>Length matters!</b> Horse soft palate is very long → reaches epiglottis caudally → palate seals the oropharynx, making horse an obligate nasal breather (cannot mouth-breathe even during exercise).</p>
        <p><b>TONGUE (Lingua):</b><br>
        • Muscular organ — 3 parts: <b>apex (free tip), body, root</b>.<br>
        • Lingual frenulum — ventral attachment.<br>
        • <b>OX TORUS LINGUAE</b> = firm dorsal swelling on the body of the tongue — pad of muscle + connective tissue used to grasp grass against the dental pad.<br>
        • Mucosal papillae:<br>
          – <b>Filiform</b> — rough, conical, all over dorsal surface; mechanical (cat's tongue is sandpaper because of these).<br>
          – <b>Fungiform</b> — mushroom-shaped; few; contain taste buds.<br>
          – <b>Vallate (Circumvallate)</b> — large, flat-topped, surrounded by a moat; few (4-8); contain numerous taste buds. At root.<br>
          – <b>Foliate</b> — leaf-like; on lateral root.<br>
          – <b>Lenticular</b> — only in ruminants; on torus linguae; mechanical.<br>
        • Innervation: motor — CN XII (hypoglossal); sensory — CN V (general, anterior 2/3) + CN VII (taste, anterior 2/3) + CN IX (general & taste, posterior 1/3) + CN X (epiglottic).</p>
        <p><b>PHARYNX:</b><br>
        • Muscular tube — common to digestive + respiratory; ~10-15 cm in cow.<br>
        • <b>3 parts</b>:<br>
          – <b>Nasopharynx</b> — above soft palate; communicates with nasal cavity (via choanae) and middle ear (via Eustachian tube).<br>
          – <b>Oropharynx</b> — behind soft palate; bounded by tongue + soft palate; communicates with oral cavity (via fauces).<br>
          – <b>Laryngopharynx</b> — caudal to oropharynx; opens into oesophagus + larynx.<br>
        • Pharyngeal recess is dorso-caudal extension above the oesophageal opening.<br>
        • <b>Crossing of pathways</b>: respiratory tract crosses the digestive tract at the pharynx — the epiglottis covers the larynx during swallowing.</p>`,
        comparative: [
            { species: "Ox", note: "Torus linguae present. Lenticular papillae on torus. Soft palate short." },
            { species: "Horse", note: "Very long soft palate — locked over the epiglottis → obligate nasal breather. Soft palate displacement (DDSP) is a performance-limiting condition." },
            { species: "Dog", note: "Sensitive cooling tongue (panting). Brachycephalics have elongated soft palate → BOAS." },
            { species: "Cat", note: "Filiform papillae heavily keratinized → sandpaper tongue for grooming and stripping flesh." }
        ],
        clinical: "<b>Cleft Palate:</b> Congenital — milk regurgitates from nostrils in calf/foal. <b>Pharyngeal Paralysis:</b> CN IX/X lesions → dysphagia. <b>Actinobacillosis (Wooden Tongue):</b> Hard, swollen tongue in cattle. <b>Sublingual Sialocele (Ranula):</b> Obstruction of sublingual duct → cyst under tongue."
    },
    {
        title: "Salivary Glands (Parotid, Mandibular, Sublingual)",
        desc: `<b>3 Major Pairs:</b><br>
        • <b>Parotid Gland</b> — largest in horse and ox; lies caudal to mandibular ramus; serous secretion.<br>
          – Duct: <b>Stensen's (Parotid) duct</b> — opens opposite upper P3-P4 in oral vestibule.<br>
        • <b>Mandibular Gland</b> — under the angle of jaw; mixed seromucous.<br>
          – Duct: <b>Wharton's duct</b> — opens at sublingual caruncle.<br>
        • <b>Sublingual Gland</b> — under tongue; mucous.<br>
          – Polystomatic + monostomatic parts; multiple ducts (rivinian) opening on sublingual fold.<br>
        <br>
        <b>Function:</b> Produce saliva (lubrication, starch digestion in some species, alkaline buffer in ruminants).<br>
        <b>Ruminant salivary output:</b> ~150 L/day in adult cow — buffers rumen pH.`,
        eliteDesc: `<h3>SALIVARY GLANDS</h3>
        <p>Three pairs of major salivary glands + many minor (buccal, lingual, palatine, pharyngeal) glands embedded in the oral mucosa.</p>
        <p><b>1. PAROTID GLAND (Glandula parotis):</b><br>
        • Largest salivary gland in horse and ox.<br>
        • Located in the parotid region — caudal & ventral to the ear, behind the ramus of mandible.<br>
        • Type: <b>Serous</b> (watery, enzyme-poor in ox; rich in amylase in horse).<br>
        • <b>Stenson's duct (Parotid duct, ductus parotideus)</b>:<br>
          – Crosses ventral border of mandible alongside facial artery & vein.<br>
          – Ascends on lateral surface of masseter.<br>
          – Pierces buccinator muscle to open into oral vestibule opposite the <b>upper 3rd-4th cheek tooth (P3-P4 in ox)</b>.<br>
        • <b>Surgical importance:</b> Stenson's duct can be ligated for parotid fistula. Course passes facial nerve & vessels at mandible — risk during dehorning.<br><br>
        <b>2. MANDIBULAR GLAND (Glandula mandibularis):</b><br>
        • Located ventral to parotid, in intermandibular space.<br>
        • Type: <b>Seromucous</b> (mixed).<br>
        • <b>Wharton's duct (Mandibular duct)</b>:<br>
          – Runs on the floor of the mouth.<br>
          – Opens at the <b>sublingual caruncle</b> beside frenulum, just behind lower incisors.<br>
        • Common site for <b>sialocele/ranula</b> if duct ruptures.<br><br>
        <b>3. SUBLINGUAL GLAND (Glandula sublingualis):</b><br>
        • Lies under the floor of mouth, below mucosa.<br>
        • Two parts:<br>
          – <b>Monostomatic part</b> — single duct (Bartholin's duct).<br>
          – <b>Polystomatic part</b> — multiple small ducts (Rivinian ducts) opening directly on the sublingual fold.<br>
        • Type: <b>Mucous</b> (thick, viscous secretion).<br><br>
        <b>SALIVARY OUTPUT:</b><br>
        • Ox: ~100-150 L/day (mostly parotid, alkaline, buffers rumen).<br>
        • Horse: ~10-12 L/day.<br>
        • Dog: ~1 L/day.<br>
        • Saliva = water (99%) + bicarbonate (buffer) + amylase + mucin + lysozyme + immunoglobulins.</p>
        <p><b>FUNCTIONS:</b><br>
        1. Lubrication of food → easier swallowing.<br>
        2. Digestion (amylase in horse/dog; minimal in ox).<br>
        3. Buffering — bicarbonate stabilises rumen pH.<br>
        4. Antibacterial (lysozyme + IgA).<br>
        5. Cooling (panting in dog evaporates saliva).<br>
        6. Taste (dissolves food → reaches taste buds).</p>`,
        comparative: [
            { species: "Ox", note: "Parotid huge — ~400 g; major rumen buffer source." },
            { species: "Horse", note: "Parotid largest of single horse glands; produces saliva only when chewing (NOT continuously like cattle)." },
            { species: "Dog", note: "Mandibular and sublingual most prominent on examination. Sialocele common — Wharton or sublingual duct rupture." },
            { species: "Cat", note: "Smaller glands; cat saliva contains Fel d 1 (allergen for humans)." }
        ],
        clinical: "<b>Parotid Fistula:</b> Wound on Stenson's duct → constant leakage of saliva onto cheek; treat by duct ligation. <b>Sialocele/Ranula (Dog):</b> Mucus accumulation under tongue from ruptured sublingual or mandibular duct. <b>Salivary Calculi:</b> Stones in duct → swelling, pain. <b>Sialography:</b> Contrast study of duct system."
    },
    {
        title: "Larynx, Trachea & Oesophagus",
        desc: `<b>Larynx</b> = voice box; controls airflow + protects airway during swallowing.<br>
        <b>Cartilages (Ox, 5):</b> Thyroid, Cricoid, Arytenoid (paired), Epiglottis. (Horse adds corniculate + cuneiform).<br>
        <b>Vocal folds</b> stretched between thyroid + arytenoid cartilages.<br>
        <b>Innervation:</b> Recurrent laryngeal nerve (CN X) — except cricothyroideus = cranial laryngeal.<br>
        <br>
        <b>Trachea:</b> Cartilaginous tube; in ox ~50 incomplete C-rings; runs in mid-line of neck. <b>Tracheotomy</b> site = mid-cervical region between 3rd & 5th tracheal rings.<br>
        <br>
        <b>Oesophagus:</b> Muscular tube; lies on left of trachea in neck, then crosses to right. Cervical → thoracic → abdominal parts; pierces oesophageal hiatus of diaphragm.`,
        eliteDesc: `<h3>LARYNX, TRACHEA & OESOPHAGUS</h3>
        <p><b>I. LARYNX (Box of Voice):</b><br>
        Located at the entrance of the lower respiratory tract, in the throat. Functions: airway, voice production (phonation), protection of airway during swallowing (cough reflex).</p>
        <p><b>Cartilages of the Larynx (Ox = 5; Horse = up to 7):</b><br>
        • <b>Thyroid cartilage</b> — largest; shield-shaped; forms ventral & lateral walls; in male horse forms 'laryngeal prominence'.<br>
        • <b>Cricoid cartilage</b> — only complete ring of larynx; signet-ring shape (broad part dorsal).<br>
        • <b>Arytenoid cartilages</b> (paired) — pyramid-shaped; carry vocal processes; key for vocal fold movement.<br>
        • <b>Epiglottis</b> — leaf-shaped; covers entrance to larynx during swallowing.<br>
        • <b>Corniculate + Cuneiform cartilages</b> (in horse) — small accessory.</p>
        <p><b>Laryngeal Cavity Subdivisions:</b><br>
        • <b>Vestibule</b> (above vocal folds) — entry from pharynx.<br>
        • <b>Glottis</b> (rima glottidis) — narrow space between vocal folds.<br>
        • <b>Infraglottic cavity</b> — below vocal folds, continuous with trachea.</p>
        <p><b>Innervation:</b><br>
        • <b>Cranial laryngeal nerve</b> (CN X) — sensory + motor to cricothyroideus.<br>
        • <b>Recurrent laryngeal nerve</b> (CN X) — motor to all OTHER intrinsic laryngeal muscles + sensory below vocal folds.<br>
        Damage to recurrent laryngeal → <b>laryngeal hemiplegia ('Roaring')</b> — most common on LEFT (longer nerve loops around aorta).</p>
        <p><b>II. TRACHEA:</b><br>
        Tube carrying air from larynx to bronchi. Walls = ~50 incomplete cartilage C-rings (open dorsally, closed by tracheal muscle), connected by annular ligaments.<br>
        • Lined by ciliated pseudostratified columnar epithelium with goblet cells (mucociliary clearance).<br>
        • Course: cervical (palpable in jugular furrow) → thoracic (mediastinum) → bifurcation at carina (T5-T6).<br>
        • Bovine + porcine specialty: <b>Tracheal bronchus</b> — extra bronchus from trachea to right cranial lobe (proximal to bifurcation).<br>
        • <b>Tracheotomy / Tracheostomy</b>: Mid-cervical region, ventral midline, between 3rd and 5th tracheal rings — emergency airway.</p>
        <p><b>III. OESOPHAGUS:</b><br>
        Muscular tube from pharynx to stomach. Begins dorsal to larynx, descends initially DORSAL to trachea, then crosses to the LEFT side of trachea in the neck, returns to mid-line in the thorax (above heart), pierces the diaphragm at the <b>oesophageal hiatus</b>.<br>
        • <b>Wall layers</b>: Mucosa (stratified squamous epithelium) + submucosa + tunica muscularis (skeletal muscle in cervical part — voluntary; smooth muscle in thoracic part of horse but SKELETAL throughout in ox/dog) + adventitia/serosa.<br>
        • <b>Esophagotomy</b>: Surgery to remove choke (foreign body); cervical region, ventral or lateral approach.<br>
        • <b>Choke:</b> Bolus stuck in cervical oesophagus — common in cattle (potatoes, apples) and horse (pelleted feed).</p>`,
        comparative: [
            { species: "Ox", note: "Tracheal bronchus present; oesophageal muscle skeletal throughout (allows rumination)." },
            { species: "Horse", note: "Long soft palate seals oropharynx → obligate nasal breather. Recurrent laryngeal neuropathy → 'roaring'. Oesophagus muscle becomes smooth in distal third." },
            { species: "Dog", note: "Skeletal muscle throughout; allows voluntary control (regurgitation reflex). Megaesophagus = idiopathic dilatation common in young dogs." }
        ],
        clinical: "<b>Tracheotomy (Cattle):</b> Emergency airway between 3rd-5th rings. <b>Roaring (Horse):</b> Laryngoplasty ('tieback' of left arytenoid). <b>Choke (Ox/Horse):</b> Pass stomach tube + lubricate; surgical oesophagotomy if not relieved. <b>Megaoesophagus (Dog):</b> Aspiration pneumonia + regurgitation."
    },
    {
        title: "Endocrine of Head & Neck: Thyroid & Parathyroid",
        desc: `<b>Thyroid Gland:</b><br>
        • Two lateral lobes (right + left) connected by isthmus, located on either side of trachea, just caudal to larynx (5th-6th tracheal ring in ox).<br>
        • Produces <b>T3 (triiodothyronine), T4 (thyroxine)</b> — regulate metabolism. Calcitonin (from C-cells) lowers blood Ca²⁺.<br>
        <br>
        <b>Parathyroid Glands:</b><br>
        • Small (rice-grain sized); paired; secrete <b>PTH (parathormone)</b> — raises blood Ca²⁺.<br>
        • <b>External parathyroid (Cranial):</b> usually outside thyroid capsule, near common carotid.<br>
        • <b>Internal parathyroid (Caudal):</b> embedded in thyroid tissue.<br>
        <br>
        <b>Clinical:</b> Iodine deficiency → goiter (visible enlargement). Parathyroid tumours → hyperparathyroidism → hypercalcaemia.`,
        eliteDesc: `<h3>THYROID & PARATHYROID GLANDS</h3>
        <p><b>THYROID GLAND (Glandula thyreoidea):</b><br>
        Located on both sides of the trachea, just caudal to the larynx (at the level of the first few tracheal rings — typically 5th-6th in ox). Two lateral lobes connected ventrally by a thin isthmus (well-developed in dog, narrow in horse, may be cord-like in ox).</p>
        <p><b>Histology:</b> Built of follicles — spherical structures lined by follicular cells (synthesise T3/T4 stored as thyroglobulin in colloid lumen). Between follicles: parafollicular ('C') cells secreting calcitonin.</p>
        <p><b>Hormones:</b><br>
        • <b>T4 (thyroxine)</b> + <b>T3 (triiodothyronine)</b> — regulate basal metabolic rate, growth, development. Iodine essential.<br>
        • <b>Calcitonin</b> — from C-cells; lowers blood Ca²⁺ by inhibiting osteoclasts.</p>
        <p><b>Vasculature:</b> Cranial thyroid artery (from common carotid) + caudal thyroid artery (often inconstant).<br>
        Innervation: cervical sympathetic + parasympathetic via vagus.</p>
        <p><b>PARATHYROID GLANDS:</b><br>
        Tiny, paired glands (~grain of rice). Two pairs in domestic species:<br>
        • <b>External (cranial) parathyroid</b> — usually OUTSIDE thyroid capsule, in carotid sheath area, lateral to common carotid; the more accessible.<br>
        • <b>Internal (caudal) parathyroid</b> — usually EMBEDDED in thyroid tissue.</p>
        <p><b>Hormone:</b> Parathormone (PTH) — RAISES blood Ca²⁺ by:<br>
        1. Mobilising Ca²⁺ from bone (osteoclast activation).<br>
        2. Increasing Ca²⁺ reabsorption in kidney.<br>
        3. Activating vitamin D → increases gut Ca²⁺ absorption.<br>
        Antagonist of calcitonin.</p>`,
        comparative: [
            { species: "Ox", note: "Thyroid lobes elongated. Iodine-deficient pastures cause endemic goiter in calves." },
            { species: "Horse", note: "Thyroid easily palpable in some horses. Equine thyroid neoplasia common in geriatric." },
            { species: "Dog", note: "Hypothyroidism = #1 endocrinopathy in dogs (Golden Retriever, Doberman). Hyperthyroidism extremely rare in dog (common in cat)." },
            { species: "Cat", note: "<b>Hyperthyroidism</b> from thyroid adenoma — most common feline endocrine disease in old cats." }
        ],
        clinical: "<b>Goiter (Iodine deficiency):</b> Compensatory thyroid enlargement; congenital in calves born to deficient cows. <b>Hypothyroidism (Dog):</b> Lethargy, weight gain, alopecia, 'tragic facial expression'. <b>Hyperthyroidism (Cat):</b> Weight loss despite polyphagia, tachycardia, hyperactivity. <b>Hypoparathyroidism:</b> Tetany (low Ca²⁺), seizures."
    },
    {
        title: "Sense Organs of Head: Eye, Ear",
        desc: `<b>EYE (Bulbus oculi):</b><br>
        • 3 tunics — fibrous (sclera + cornea), vascular (uvea: choroid + ciliary body + iris), nervous (retina).<br>
        • Lens, vitreous + aqueous humour.<br>
        • <b>Tapetum lucidum</b> — reflective layer in choroid → eye-shine in domestic animals (NOT in pig/human).<br>
        • Eyelids (upper, lower, third) + lacrimal apparatus + extra-ocular muscles (CN III, IV, VI).<br>
        <br>
        <b>EAR:</b><br>
        • <b>External ear</b> — pinna + auditory canal + tympanic membrane.<br>
        • <b>Middle ear</b> — air-filled tympanic cavity, 3 ossicles (malleus, incus, stapes), Eustachian tube.<br>
        • <b>Internal ear</b> — bony + membranous labyrinth: cochlea (hearing) + vestibule + 3 semicircular canals (balance).<br>
        • Innervation: CN VIII (vestibulocochlear).`,
        eliteDesc: `<h3>EYE & EAR</h3>
        <p><b>I. EYE — THREE TUNICS:</b></p>
        <p><b>1. Fibrous Tunic (outer):</b><br>
        • <b>Sclera</b> — opaque white, posterior 5/6.<br>
        • <b>Cornea</b> — transparent, anterior 1/6; main refractive surface.<br>
        • Limbus = junction between sclera and cornea.</p>
        <p><b>2. Vascular Tunic (Uvea, middle):</b><br>
        • <b>Choroid</b> — pigmented, vascular layer; contains <b>tapetum lucidum</b> (a reflecting iridescent area at the dorsal fundus, made of crystals — gives 'eye shine' in domestic animals at night). Tapetum is ABSENT in pig and human.<br>
        • <b>Ciliary body</b> — produces aqueous humour; ciliary muscle controls lens shape (accommodation).<br>
        • <b>Iris</b> — pigmented diaphragm; central pupil. Sphincter pupillae (CN III/parasympathetic) = constricts; dilator pupillae (sympathetic) = dilates.</p>
        <p><b>3. Nervous Tunic (Retina):</b><br>
        • Photoreceptors: <b>Rods</b> (low light, night vision) + <b>Cones</b> (colour, daylight; very few in cattle, more in primates).<br>
        • Bipolar cells → ganglion cells → optic nerve (CN II) → optic chiasma → optic tract → lateral geniculate → visual cortex.<br>
        • <b>Optic disc (blind spot)</b> = where optic nerve exits; no photoreceptors.</p>
        <p><b>OTHER EYE STRUCTURES:</b><br>
        • <b>Lens</b> — transparent biconvex; held by zonular fibres of ciliary body.<br>
        • <b>Aqueous humour</b> (anterior + posterior chambers) — produced by ciliary body, drained at iridocorneal angle.<br>
        • <b>Vitreous body</b> — gel filling the space between lens and retina.<br>
        • <b>Eyelids</b> — upper, lower, and a <b>third eyelid (nictitating membrane)</b> at medial canthus.<br>
        • <b>Lacrimal apparatus</b> — lacrimal gland (above eye) → tears → lacrimal puncta (medial canthus) → nasolacrimal duct → nasal cavity.<br>
        • <b>Extraocular muscles</b> — 4 recti (dorsal, ventral, medial, lateral), 2 obliques, retractor bulbi (only in domestic animals — pulls eye into orbit).<br>
        Innervation: CN III (oculomotor — most), CN IV (trochlear — dorsal oblique only), CN VI (abducens — lateral rectus + retractor bulbi).</p>
        <p><b>II. EAR — THREE PARTS:</b></p>
        <p><b>1. External Ear (Auris externa):</b><br>
        • <b>Pinna (auricle)</b> — funnel; supported by auricular cartilage. Erect/floppy/movable depending on species.<br>
        • <b>External auditory canal</b> — vertical part + horizontal part in dogs.<br>
        • <b>Tympanic membrane (eardrum)</b> — thin oval membrane separating outer from middle ear.</p>
        <p><b>2. Middle Ear (Auris media):</b><br>
        • Air-filled <b>tympanic cavity</b> in petrous temporal bone.<br>
        • <b>Three auditory ossicles</b> (malleus, incus, stapes) form a chain transmitting vibrations from tympanic membrane to oval window.<br>
        • <b>Eustachian (auditory) tube</b> — connects middle ear to nasopharynx; equalises pressure. <b>Diverticulum of this tube = guttural pouch in horse</b>.<br>
        • <b>Tympanic bulla</b> — bony enclosure of middle ear.</p>
        <p><b>3. Internal Ear (Auris interna):</b><br>
        • Bony labyrinth (in petrous temporal) + Membranous labyrinth (inside).<br>
        • <b>Cochlea</b> — spiral, snail-shaped; contains organ of Corti (hearing receptor).<br>
        • <b>Vestibule</b> — central chamber; contains utricle + saccule (linear acceleration + gravity sensors).<br>
        • <b>3 Semicircular canals</b> (perpendicular planes) — angular acceleration / rotation sensors.<br>
        • Innervation: <b>CN VIII (Vestibulocochlear)</b> — cochlear branch (hearing), vestibular branch (balance).</p>`,
        comparative: [
            { species: "Cattle", note: "Tapetum present (golden-yellow). Eyes lateral → wide field of view (~330°)." },
            { species: "Horse", note: "Largest eye of any land mammal. 'Visual streak' on retina. Two blind spots — directly in front and directly behind." },
            { species: "Dog/Cat", note: "Tapetum highly developed (yellow-green). Cone-rich area centralis but no human-like fovea." },
            { species: "Fowl", note: "Pecten oculi — vascular structure projecting into vitreous (avascular retina). Highest visual acuity in raptors (4× human)." }
        ],
        clinical: "<b>Conjunctivitis & Keratitis</b> (cornea inflammation) — common with foreign bodies, IBR (cattle). <b>Cataract</b> (lens opacity) — common in old dogs, diabetic dogs. <b>Glaucoma</b> — increased intraocular pressure → blindness. <b>Otitis externa</b> — common in floppy-eared dogs. <b>Vestibular disease</b> — head tilt, nystagmus."
    }
);


// ---- THORAX > SPLANCHNOLOGY ----
atlasData["Thorax"]["Splanchnology"].push(
    {
        title: "Respiratory System: Lungs & Pleura",
        desc: `<b>Overview:</b><br>
        • The lungs are the primary organs of respiration.<br>
        • Ruminant lungs are <b>highly lobulated</b> (interlobular septa of connective tissue).<br>
        • The <b>Tracheal Bronchus</b> (Bronchus trachealis) is a unique feature of the Ox and Pig — it directly supplies the right cranial lobe from the trachea, proximal to the bifurcation.<br>
        • Pleural cavity contains a small amount of serous fluid for frictionless lung movement.`,
        eliteDesc: `<h3>Thoracic Viscera: Pulmonology</h3>
        <p>The bovine respiratory system is characterized by its high degree of <b>lobulation</b> and the presence of the <b>bronchus trachealis</b>. This extra bronchus arises from the trachea proximal to the carina and supplies the right cranial lobe, completely independently of the main bronchial tree.</p>
        <p>This anatomical feature is clinically significant as it can be a site for localized infections (right cranial lobe pneumonia) or selective inhalation of foreign bodies during forced feeding or drenching.</p>
        <p>The interlobular septa in cattle lungs are thick and visible on gross examination, making lobular pneumonia easy to identify at necropsy. The horse, by contrast, has very thin septa making true lobular pneumonia rare.</p>
        <p>The bovine <b>pleural cavity</b> is divided by the mediastinum. Unlike in dogs, the two pleural cavities are more distinctly separated — right-sided effusion does not always affect the left side.</p>`,
        comparative: [
            { species: "Ox", note: "Tracheal bronchus present. Highly lobulated with thick interlobular septa. Right cranial lobe supplied directly from trachea." },
            { species: "Horse", note: "No tracheal bronchus. Lungs are poorly lobulated (septa thin or absent). More susceptible to diffuse pneumonia." },
            { species: "Pig", note: "Also has a tracheal bronchus, similar to the Ox. Three lobes on left, four on right (plus accessory/cardiac lobe)." },
            { species: "Dog", note: "No tracheal bronchus. Three lobes on left (cranial, middle, caudal), four on right (cranial, middle, caudal, accessory)." }
        ],
        clinical: "<b>Enzootic Pneumonia in Calves:</b> Typically begins in the right cranial lobe, possibly due to the independent tracheal bronchus directing inhaled pathogens. <b>Auscultation Tip:</b> The right cranial lobe must be auscultated cranially and high on the thorax in cattle. <b>Pleuropneumonia:</b> Fibrinous exudate can seal the pleural surfaces — pathognomonic fibrous tags ('jellyfish') seen at necropsy."
    },
    {
        title: "Cardiovascular System: The Bovine Heart",
        desc: `<b>Overview:</b><br>
        • Located in the middle mediastinum, with apex pointing ventrocaudally to the left.<br>
        • Features <b>Ossa Cordis</b> (ossified cartilages at the aortic root) in older cattle — unique among domestic species.<br>
        • Pericardium = fibrous outer layer + serous inner layer (visceral = epicardium).<br>
        • The reticulum lies directly against the diaphragm, which is separated from the pericardium by a thin membrane.`,
        eliteDesc: `<h3>Unique Bovine Cardiac Architecture</h3>
        <p>The bovine heart is remarkable for the development of <b>Ossa Cordis</b> — one or two ossified nodules (formerly cartilaginous) located at the base of the aorta, adjacent to the aortic valve. These are pathognomonic of Bos taurus and are absent in all other domestic species. They are best palpated post-mortem at the aortic root.</p>
        <p>The pericardium is attached ventrally to the sternum via the <b>sternopericardiac ligament</b>. The thin median partition between the pericardium and the diaphragm means that foreign bodies from the reticulum that penetrate the diaphragm have immediate access to the pericardial space.</p>
        <p><b>Cardiac Position:</b> The bovine heart occupies the 3rd to 6th intercostal spaces, with the apex reaching to the left of the midsternal line. Auscultation: Left side (3rd-5th ICS, lower third) for mitral and aortic valves; right side (3rd-4th ICS) for tricuspid.</p>`,
        comparative: [
            { species: "Ox", note: "Ossa Cordis present at aortic root. Heart base at 3rd-6th ICS. Pericardium closely related to diaphragm and reticulum." },
            { species: "Horse", note: "No Ossa Cordis. Aortic valve has three semilunar cusps. Large heart relative to body (up to 10 kg in Thoroughbreds)." },
            { species: "Dog", note: "No Ossa Cordis in normal dogs (cats may have os cordis rarely). Heart is more globular. Rate 60-140 bpm." }
        ],
        clinical: "<b>Traumatic Reticulopericarditis (Hardware Disease):</b> Swallowed metal objects (wire, nails) settle in the reticulum, pierce the reticular wall and diaphragm, and reach the pericardial space. Causes septic pericarditis — 'washing machine' heart sounds on auscultation. Diagnosis: Grunt test, rumenocentesis, radiography. Treatment: Rumenotomy, magnets (prevention). <b>Endocarditis:</b> Bacterial infection of heart valves, often secondary to foot rot or septicemia."
    }
);

// ---- ABDOMEN > SPLANCHNOLOGY ----
atlasData["Abdomen"]["Splanchnology"].push(
    {
        title: "Digestive System: The Ruminant Stomach",
        desc: `<b>Overview:</b><br>
        • Four-compartment stomach: <b>Reticulum, Rumen, Omasum, Abomasum</b> (in topographic order).<br>
        • Rumen is the largest (up to 150L in adult cow) — acts as a fermentation vat.<br>
        • Reticulum has a honeycomb mucosal pattern — also called the 'hardware stomach'.<br>
        • Omasum (many-plies / psalterium) filters particles; Abomasum is the true glandular stomach.`,
        eliteDesc: `<h3>The Complex Gastric Apparatus of Ruminants</h3>
        <p>Ruminants are characterized by a massive composite stomach that dominates the left and ventral abdominal cavity. The first three compartments (<b>proventriculi</b>) are non-glandular and lined with stratified squamous epithelium, while the <b>abomasum</b> is glandular and represents the homolog of the simple stomach.</p>
        <p><b>Reticulum:</b> The most cranial compartment, pressed against the diaphragm (3rd-8th ribs on right, to 6th-7th on left). Its mucosa has a honeycomb (reticular) pattern. The reticuloruminal fold separates it from the rumen but allows passage of digesta.</p>
        <p><b>Rumen:</b> Occupies the entire left side of the abdominal cavity, from diaphragm to pelvis. Divided by muscular pillars (coronary, longitudinal, accessory) into ventral and dorsal sacs. Site of primary fermentation by microflora generating VFAs. Gas accumulation causes bloat.</p>
        <p><b>Omasum:</b> On the right side, spherical with leaf-like folds (laminae omasi) that trap and squeeze digesta. The omasal canal connects to the abomasum via the omasoabomasal orifice.</p>
        <p><b>Abomasum:</b> The 'true' stomach — glandular, secretes HCl and pepsin. Located on the ventral abdominal floor, right of midline. Can undergo displacement (LDA/RDA) in high-producing dairy cows.</p>`,
        comparative: [
            { species: "Ox", note: "Four-compartment stomach. Rumen capacity ~150L. High salivary buffering capacity (150L/day alkaline saliva). Teat-canal reflex suckles milk past proventriculi directly to abomasum in calves." },
            { species: "Horse", note: "Simple single-compartment stomach (monogastric). Small capacity (~15L). Pyloric sphincter is strong — unable to vomit. Cecum and colon are massive (hindgut fermentation)." },
            { species: "Pig", note: "Monogastric with a well-developed diverticulum gastri. Gastric ulcers common near pars oesophagea." },
            { species: "Dog", note: "Simple stomach. Prone to gastric dilatation-volvulus (GDV) — stomach rotates on its axis, trapping gas. Emergency." }
        ],
        clinical: "<b>Left Displacement of Abomasum (LDA):</b> Abomasum slips under rumen to lie between rumen and left abdominal wall — 'ping' on percussion-auscultation. Common in fresh dairy cows (high-grain diet). <b>Right Displacement / Volvulus (RDA/RVA):</b> More severe, abomasum rotates clockwise — emergency surgery. <b>Ruminal Bloat:</b> Frothy (legume) or free-gas (vagal indigestion) bloat — distension of left paralumbar fossa. <b>Vagal Indigestion:</b> Damage to vagal nerve branches disrupts reticulo-omasal flow — 'papple' shape (distended right flank from omasal/reticular impaction)."
    },
    {
        title: "Digestive System: Small Intestine (Duodenum, Jejunum, Ileum)",
        desc: `<b>High-Yield Points:</b><br>
        • Three parts: <b>Duodenum, Jejunum, Ileum</b>. Total length in ox ~ 40 m.<br>
        • <b>Duodenum</b>: short, fixed; receives bile + pancreatic ducts. S-shaped sigmoid flexure cranially.<br>
        • <b>Jejunum</b>: longest, most coiled, suspended by long mesentery — fills the right flank in ox arranged around the supraomental recess.<br>
        • <b>Ileum</b>: terminal short part; ends at <b>ileocecal orifice</b>.<br>
        • Lies almost entirely on the <b>RIGHT side</b> of abdomen in ox (rumen occupies left).<br>
        • Surgical access in cattle = <b>right paralumbar fossa laparotomy</b>.<br>
        • Blood supply: cranial mesenteric artery. Drained via portal vein → liver.`,
        eliteDesc: `<h3>Bovine Small Intestine</h3>
        <p>The bovine small intestine averages <b>40 metres</b> long with a small diameter (~5 cm). It lies almost entirely in the <b>right half</b> of the abdominal cavity because the massive rumen occupies the left.</p>
        <p><b>Duodenum (~1 m):</b> Begins at the pylorus on the right side, runs cranially, makes the <b>sigmoid (cranial) flexure</b>, then turns caudally as the descending duodenum along the right flank, crosses behind the root of the mesentery (caudal flexure), and returns cranially as the ascending duodenum to become the jejunum. The <b>major duodenal papilla</b> (bile duct opening) is in the proximal duodenum; the <b>minor duodenal papilla</b> (accessory pancreatic duct) opens further distally.</p>
        <p><b>Jejunum:</b> The longest part, hanging in coils from a long mesentery on the right side. It is arranged peripherally around the <b>supraomental recess</b> (the pocket formed by the greater omentum). This anatomical arrangement is the basis for the surgical approach via the right flank.</p>
        <p><b>Ileum:</b> The short terminal segment that runs cranio-dorsally and opens into the cecum at the <b>ileocecal orifice</b>; the <b>ileocecal fold</b> (a peritoneal band from ileum to cecum) is the surgeon's landmark to identify the ileum during laparotomy.</p>
        <p><b>Vasculature:</b> The entire small intestine is supplied by the <b>cranial mesenteric artery</b>; venous blood drains into the <b>portal vein</b> and goes first to the liver. Lymphatics drain to the <b>cranial mesenteric lymph nodes</b>.</p>`,
        comparative: [
            { species: "Ox", note: "~40 m long. Small intestine on right side. Coils arranged peripherally around supraomental recess." },
            { species: "Horse", note: "Small intestine ~22 m. Duodenum forms a distinctive S-shape; jejunum is mobile and prone to volvulus → colic." },
            { species: "Dog", note: "Short small intestine (~4 m). Mobile mesentery — common site of intussusception in pups." },
            { species: "Pig", note: "Long, coiled small intestine. Spiral colon distinguishes pig from other species at necropsy." }
        ],
        clinical: "<b>Enterotomy:</b> Surgical opening of intestine to remove obstruction (e.g. linear foreign body in dogs, phytobezoar in calves) — done via right flank in ox. <b>Intussusception:</b> One segment telescopes into the next; common at the ileocecal junction. <b>Johne's Disease (Paratuberculosis):</b> Mycobacterium avium subsp. paratuberculosis causes thickened corrugated ileum with chronic diarrhoea and weight loss in cattle."
    },
    {
        title: "Digestive System: Large Intestine (Cecum, Colon, Rectum)",
        desc: `<b>High-Yield Points:</b><br>
        • Parts: <b>Cecum → Ascending colon (with spiral loop) → Transverse → Descending colon → Rectum</b>.<br>
        • <b>Cecum</b> in ox: blind sac, ~75 cm long, lies in upper right flank; apex points caudally.<br>
        • <b>Spiral colon</b> = unique disc-shaped coil with centripetal & centrifugal turns — diagnostic of ruminants at necropsy.<br>
        • Site for <b>Caecal Biopsy</b> and <b>cecocentesis</b> in cattle = right paralumbar fossa.<br>
        • Functions: water absorption, microbial fermentation (cecum), faecal pellet formation.<br>
        • Rectum is covered later under pelvic viscera.`,
        eliteDesc: `<h3>Bovine Large Intestine</h3>
        <p><b>Cecum:</b> A blind tube ~75 cm long, lying in the dorsal right flank. The base receives the ileum and continues as the colon; the free apex points caudally. The cecum is the site of secondary microbial fermentation in ruminants.</p>
        <p><b>Ascending Colon:</b> Has three parts — proximal loop, <b>spiral loop (ansa spiralis)</b>, and distal loop. The spiral loop is a flat disc-shaped coil with <b>centripetal turns</b> spiralling inward to a central flexure, then <b>centrifugal turns</b> spiralling back outward. This is <b>pathognomonic</b> for ruminants.</p>
        <p><b>Transverse Colon:</b> Crosses the midline cranial to the root of the mesentery.</p>
        <p><b>Descending Colon:</b> Continues into the pelvic cavity as the rectum. Forms the <b>sigmoid flexure</b> just before becoming rectum.</p>
        <p><b>Surgical importance:</b> Cecal dilatation/torsion in dairy cattle presents as right-sided ping. The right flank is the standard surgical window (cecotomy).</p>
        <p><b>Blood supply:</b> Cranial mesenteric artery (cecum, ascending, transverse) and caudal mesenteric artery (descending colon, rectum).</p>`,
        comparative: [
            { species: "Ox", note: "Spiral colon present (centripetal + centrifugal coils). Cecum simple blind sac." },
            { species: "Horse", note: "Massive cecum (~30 L) with bands (taenia) and sacculations (haustra). Large colon U-shaped with pelvic, sternal, diaphragmatic flexures — major colic sites." },
            { species: "Dog", note: "Small comma-shaped cecum. Simple short colon (no spiral). No taenia/haustra." },
            { species: "Pig", note: "Spiral colon also present, but spiral coils are conical (cone-shaped) rather than flat as in ox." }
        ],
        clinical: "<b>Cecal Dilatation/Volvulus (cattle):</b> Right-sided ping high in flank; treated by right flank cecotomy. <b>Caecal Biopsy:</b> Right paralumbar fossa approach. <b>Equine Colic:</b> The pelvic flexure of the large colon is the most common site of impaction. <b>Megacolon (cats/dogs):</b> Chronic constipation → dilated atonic colon."
    },
    {
        title: "Digestive Accessory: Liver",
        desc: `<b>High-Yield Points:</b><br>
        • Largest gland in body. Lies almost entirely on the <b>RIGHT side</b> in ox (pushed by rumen).<br>
        • Ox liver = <b>undivided</b> grossly — has only shallow fissures (no true lobes); divided into right, left, quadrate, caudate lobes.<br>
        • <b>Caudate lobe</b> bears prominent <b>renal impression</b> (from right kidney) — diagnostic of ruminants.<br>
        • <b>Gall bladder PRESENT</b> in ox, sheep, dog (ABSENT in horse).<br>
        • <b>Porta hepatis</b>: entry of portal vein, hepatic artery; exit of bile duct.<br>
        • <b>Liver biopsy site (cow):</b> Right 11th intercostal space, on a line from the tuber coxae.`,
        eliteDesc: `<h3>Bovine Liver</h3>
        <p>The liver in cattle is the largest visceral gland (~5 kg in adult cow). It is displaced almost entirely to the right side of the abdomen because of the massive rumen. It lies obliquely against the diaphragm from the 7th rib (cranially) to the last rib (caudally) on the right side.</p>
        <p><b>Lobation:</b> Unlike the dog (well-lobed) the bovine liver is grossly undivided, with only shallow fissures separating the <b>left, right, quadrate</b> (between gall bladder and round ligament) and <b>caudate</b> lobes. The caudate lobe bears a deep <b>renal impression</b> from the right kidney — a key feature of bovine liver.</p>
        <p><b>Surfaces:</b> Diaphragmatic (parietal) and visceral. The visceral surface bears the <b>porta hepatis</b> — the entry/exit point for portal vein, hepatic artery, hepatic duct, lymphatics and nerves.</p>
        <p><b>Bile pathway:</b> Hepatic ducts → cystic duct → <b>gall bladder</b> (storage) → bile duct → opens at major duodenal papilla. The horse lacks a gall bladder (continuous bile flow).</p>
        <p><b>Liver Biopsy:</b> In adult cow, biopsy needle is inserted in the <b>right 11th intercostal space</b>, at the intersection with a horizontal line from the tuber coxae, directed cranio-medially toward the opposite elbow.</p>`,
        comparative: [
            { species: "Ox", note: "Mostly right-sided, undivided gross appearance, prominent renal impression on caudate lobe. Gall bladder present." },
            { species: "Horse", note: "NO gall bladder. Bile flows continuously into duodenum. Liver lies more centrally." },
            { species: "Dog", note: "Well-lobed (6 lobes). Gall bladder present in fossa between right medial and quadrate lobes." },
            { species: "Pig", note: "Liver has well-marked interlobular septa giving it a 'tiled' appearance microscopically. Gall bladder present." }
        ],
        clinical: "<b>Liver Biopsy:</b> Right 11th ICS in cattle — used for diagnosis of fatty liver, copper toxicity, fluke. <b>Fascioliasis (Liver Fluke):</b> Fasciola hepatica → cholangitis, weight loss, sub-mandibular oedema ('bottle jaw'). <b>Hepatic Lipidosis (Fatty Liver):</b> Common in early-lactation high-producing cows in negative energy balance."
    },
    {
        title: "Digestive Accessory: Pancreas",
        desc: `<b>High-Yield Points:</b><br>
        • Mixed exocrine + endocrine gland.<br>
        • In ox: lies in <b>right side</b>, related to dorsal surface of liver and right kidney; partly within the lesser omentum.<br>
        • Two lobes (right + left) joined by a body — wraps around the portal vein.<br>
        • <b>Ducts:</b> Ox typically has only the <b>accessory pancreatic duct</b> opening at the minor duodenal papilla. (Horse: only main duct. Dog: usually both.)<br>
        • Endocrine = <b>Islets of Langerhans</b> → insulin (β cells), glucagon (α cells).`,
        eliteDesc: `<h3>Pancreas</h3>
        <p>The pancreas is a soft, lobulated, pale yellow-pink gland with both exocrine and endocrine roles. The <b>exocrine portion</b> (>98% by mass) secretes pancreatic juice (trypsin, chymotrypsin, lipase, amylase). The <b>endocrine portion</b> consists of microscopic islets (Islets of Langerhans) producing insulin, glucagon, somatostatin, and pancreatic polypeptide.</p>
        <p><b>Topography in Ox:</b> The pancreas lies on the right side of the abdomen, in the lesser omentum, attached to the dorsal surface of the liver and the right kidney. It is roughly L-shaped — a right lobe extending caudally, and a left lobe extending toward the spleen.</p>
        <p><b>Ducts:</b><br>
        • <b>Pancreatic duct (main):</b> Drains with bile duct at the major duodenal papilla — present in horse and many dogs.<br>
        • <b>Accessory pancreatic duct:</b> Opens at the minor duodenal papilla, more distal. In ox, only this duct is functional.</p>`,
        comparative: [
            { species: "Ox", note: "Only the accessory pancreatic duct functional. Opens at minor duodenal papilla." },
            { species: "Horse", note: "Only the main pancreatic duct (no accessory) — drains with bile duct." },
            { species: "Dog", note: "Both ducts usually present — main duct opens with bile, accessory duct opens separately." },
            { species: "Pig", note: "Only accessory duct present (like ox). Pancreas extracts historically used for insulin commercial production." }
        ],
        clinical: "<b>Acute Pancreatitis (dogs):</b> Classic 'praying' posture with cranial abdominal pain — often after fatty meal. <b>Diabetes Mellitus:</b> Loss of β-cell function (Type 1) or insulin resistance (Type 2) — common in older cats and dogs. <b>Exocrine Pancreatic Insufficiency (EPI):</b> German Shepherds — chronic diarrhoea with undigested food."
    },
    {
        title: "Lymphoid Organ: Spleen",
        desc: `<b>High-Yield Points:</b><br>
        • Largest lymphoid organ. Stores blood, filters old RBCs, immune surveillance.<br>
        • <b>Ox spleen:</b> Flat, oblong, bluish-grey. Lies between the LEFT side of the rumen and the diaphragm — under the last few ribs (10th-13th) on the LEFT side.<br>
        • Held by <b>gastrosplenic + phrenicosplenic + renosplenic ligaments</b>.<br>
        • Has a <b>hilus</b> on visceral surface for vessels (splenic artery from celiac).<br>
        • <b>Splenectomy site (cattle):</b> Left dorsal flank, between last 2 ribs.`,
        eliteDesc: `<h3>The Bovine Spleen</h3>
        <p>The spleen is a flat, elongated, oblong organ measuring ~50 × 12 cm in the adult cow. Its colour is bluish-grey to brown. It lies entirely on the <b>left</b> side of the abdomen, sandwiched between the dorsal sac of the rumen (visceral surface) and the diaphragm (parietal surface), under cover of the last few ribs (approximately 10th to 13th).</p>
        <p><b>Attachments:</b> Gastrosplenic ligament (to rumen), phrenicosplenic ligament (to diaphragm), renosplenic ligament (to left kidney). The spleen does not contact the left abdominal wall directly because of the rumen.</p>
        <p><b>Vessels:</b> Splenic artery (from celiac artery) and splenic vein (drains into portal system).</p>
        <p><b>Functions:</b> Storage of erythrocytes (especially in horse), removal of senescent RBCs, hematopoiesis in fetal life, antigen filtration via white pulp.</p>`,
        comparative: [
            { species: "Ox", note: "Flat, oblong, dorsally placed on left under last ribs. Hilus near dorsal border." },
            { species: "Horse", note: "Sickle/triangular shape. Very large reservoir of RBCs (~12 L). Located in left flank — palpable per rectum." },
            { species: "Dog", note: "Elongated tongue-shape; very mobile. Common site of hemangiosarcoma in older large breeds (Golden Retriever, GSD)." },
            { species: "Pig", note: "Long, narrow, strap-like spleen." }
        ],
        clinical: "<b>Splenectomy:</b> Indicated for ruptured spleen, splenic torsion, or neoplasia. Left flank approach in cattle. <b>Splenic Rupture (dog):</b> Hemangiosarcoma rupture → acute abdomen + collapse. <b>Anthrax:</b> Spleen massively enlarged, soft, tar-like — DO NOT cut open suspected anthrax carcasses."
    },
    {
        title: "Urinary System: Kidneys & Ureters",
        desc: `<b>High-Yield Points:</b><br>
        • Two retroperitoneal organs in sublumbar region.<br>
        • <b>Ox kidney = LOBULATED ('bunch of grapes')</b> — only ruminants have this externally lobed kidney.<br>
        • Right kidney: more cranial, fixed, contacts caudate lobe of liver. Left kidney: more caudal, MOBILE — pushed across midline by rumen ('floating' or wandering left kidney).<br>
        • Functional unit = <b>nephron</b>. No single renal pelvis in ox — calyces drain directly into ureter.<br>
        • Ureter passes caudally over psoas muscles → opens into bladder at trigone.<br>
        • Palpable per rectum in cow (left kidney especially).`,
        eliteDesc: `<h3>Ruminant Urinary System</h3>
        <p><b>Bovine Kidneys:</b> The most distinctive feature is <b>external lobation</b> — the kidney surface is divided into 15-20 lobes by deep grooves, giving a 'bunch of grapes' appearance. This is unique to ruminants among domestic species.</p>
        <p><b>Right kidney:</b> Lies under the last rib and first 2-3 lumbar transverse processes; relatively fixed; bears a clear impression on the caudate lobe of the liver.</p>
        <p><b>Left kidney:</b> Suspended by a long mesoduodenum/peritoneal fold and is pushed across the midline by the dorsal sac of the rumen — hence called the <b>'wandering' or floating kidney</b>. It typically lies just right of the midline at the level of L3-L5 and is the kidney that can be readily palpated per rectum in the cow.</p>
        <p><b>Internal Structure:</b> Ox kidney is <b>multipyramidal</b> — many renal pyramids, each with its own papilla draining into a calyx. There is <b>NO renal pelvis</b> in ox; instead the calyces directly converge to form the ureter.</p>
        <p><b>Ureter:</b> Long muscular tube descending from the renal hilus along the dorsal abdominal wall (retroperitoneal), crosses the pelvic brim, and enters the dorsal bladder wall obliquely at the <b>trigone</b> — this oblique entry acts as a one-way valve preventing reflux during bladder distension.</p>`,
        comparative: [
            { species: "Ox", note: "Lobulated, multipyramidal, NO renal pelvis. Left kidney 'floats' to right of midline." },
            { species: "Horse", note: "Heart-shaped (right) and bean-shaped (left). Smooth surface, unipyramidal with renal pelvis. Mucus in normal urine." },
            { species: "Dog", note: "Bean-shaped, smooth surface, unipyramidal. Right kidney more cranial (against liver). Common site of chronic kidney disease in older animals." },
            { species: "Pig", note: "Bean-shaped, smooth surface but multipyramidal internally (compromise type)." },
            { species: "Fowl", note: "Three lobes (cranial, middle, caudal); lodged in renal fossa of synsacrum. Drain via ureter to cloaca — no urinary bladder." }
        ],
        clinical: "<b>Pyelonephritis:</b> Ascending bacterial infection (Corynebacterium renale in cattle) — pus and blood in urine. <b>Urolithiasis (Water Belly):</b> Stones (especially struvite) lodge in male urethra — emergency in steers/wethers. <b>Renal palpation per rectum:</b> Routine part of pre-purchase exam in cattle and horses. <b>Hydronephrosis:</b> Dilation due to ureteral obstruction."
    },
    {
        title: "Mammary Gland (Udder)",
        desc: `<b>High-Yield Points:</b><br>
        • <b>Cow udder:</b> 4 separate quarters (2 fore + 2 hind) with 4 teats — each quarter functionally INDEPENDENT.<br>
        • Each teat has ONE streak canal, ONE teat sinus, ONE gland sinus.<br>
        • Suspended by <b>median (elastic, paired)</b> + <b>lateral (fibrous)</b> suspensory ligaments — lifelong support, key for udder conformation.<br>
        • Blood supply: <b>External pudendal artery</b> (main) via inguinal canal → <b>'milk vein'</b> = subcutaneous abdominal vein (visible on ventral abdomen of dairy cow).<br>
        • Lymph: drains to <b>supramammary (mammary) lymph nodes</b> → palpate in mastitis.<br>
        • Innervation: genitofemoral, ilioinguinal, perineal nerves.`,
        eliteDesc: `<h3>The Bovine Udder</h3>
        <p>The udder of the cow is a single mass formed by <b>4 fused mammae</b>, each anatomically and functionally <b>independent</b>: milk produced in one quarter cannot pass to another. The 4 quarters are arranged as 2 fore-quarters and 2 hind-quarters; the hind quarters are typically larger and produce ~60% of the milk.</p>
        <p><b>Internal Architecture of one quarter:</b> Alveoli → small ducts → <b>lactiferous (gland) sinus</b> → <b>teat sinus</b> → <b>streak canal (papillary duct)</b> → exterior. The streak canal is closed by the <b>Sphincter of Fürstenberg</b> — a smooth muscle ring whose tightness determines milking ease and resistance to ascending mastitis.</p>
        <p><b>Suspensory Apparatus:</b><br>
        • <b>Median suspensory ligament</b> (paired): elastic (yellow elastic tissue), in the midline — allows the udder to expand and recoil with milk volume.<br>
        • <b>Lateral suspensory ligaments:</b> fibrous (collagen), from sub-pelvic tendon — provide rigid lateral support.<br>
        Failure of these ligaments → <b>broken/pendulous udder</b> in old cows.</p>
        <p><b>Vasculature:</b> The principal artery is the <b>external pudendal artery</b>, which enters the udder through the <b>inguinal canal</b>. Venous drainage is partly via the same route (deep) and partly via the <b>cranial superficial epigastric vein = 'milk vein'</b> — the prominent S-shaped vein on the ventral abdomen of the dairy cow, used for IV injection in some cases.</p>
        <p><b>Lymphatics:</b> Drain to the <b>supramammary (mammary) lymph nodes</b> located dorsocaudal to the gland — these are routinely palpated in cases of mastitis.</p>`,
        comparative: [
            { species: "Cow", note: "4 quarters, 4 teats, 1 streak canal each. Functionally independent." },
            { species: "Mare", note: "Single mammary gland mass with 2 teats; each teat has 2 streak canals (drains 2 lobes)." },
            { species: "Bitch", note: "Usually 5 pairs of mammae (2 thoracic, 2 abdominal, 1 inguinal); each teat has 7-16 ducts/streak canals. Common site of mammary tumours." },
            { species: "Sow", note: "Multiple pairs (6-8 pairs) along the milk-line from thorax to inguinal region; each teat has 2 streak canals." }
        ],
        clinical: "<b>Mastitis:</b> Most common and economically important disease of dairy cattle — diagnosed by California Mastitis Test (CMT), supramammary LN enlargement, and milk culture. <b>Teat Stenosis:</b> Stricture of the streak canal. <b>Pendulous Udder:</b> Failure of median suspensory ligament — risk of injury. <b>Mammary tumours (bitch):</b> ~50% malignant; recommend ovariohysterectomy + mastectomy."
    },
    {
        title: "Endocrine Glands of Abdomen: Adrenal Glands",
        desc: `<b>High-Yield Points:</b><br>
        • Paired, retroperitoneal, on craniomedial pole of each kidney.<br>
        • <b>Cortex</b> (outer, mesodermal): zona glomerulosa (mineralocorticoids — aldosterone), zona fasciculata (glucocorticoids — cortisol), zona reticularis (sex steroids).<br>
        • <b>Medulla</b> (inner, neuroectodermal — modified sympathetic ganglion): chromaffin cells → adrenaline + noradrenaline.<br>
        • Right adrenal: more cranial, often heart-shaped in ox.<br>
        • Left adrenal: bean-shaped, related to the floating left kidney.<br>
        • Other endocrine in abdomen: pancreatic islets (already covered).`,
        eliteDesc: `<h3>Adrenal (Suprarenal) Glands</h3>
        <p>Each adrenal gland is a small flattened organ (~5 cm × 2 cm in cattle) lying retroperitoneally on the cranio-medial pole of its kidney. They are made of two embryologically and functionally distinct parts:</p>
        <p><b>Cortex</b> (mesodermal origin) — produces steroid hormones in three concentric zones:<br>
        • <b>Zona glomerulosa</b> (outer) → aldosterone (regulates Na+/K+, blood pressure).<br>
        • <b>Zona fasciculata</b> (middle, thickest) → cortisol (glucocorticoid; stress response).<br>
        • <b>Zona reticularis</b> (inner) → adrenal androgens.</p>
        <p><b>Medulla</b> (neuroectodermal — a modified sympathetic ganglion) — chromaffin cells secrete catecholamines (adrenaline 80%, noradrenaline 20%) → 'fight or flight' response.</p>
        <p><b>Vasculature:</b> Multiple small arteries from the aorta and renal artery (cranial, middle, caudal adrenal arteries). One central vein drains directly to caudal vena cava (right) or renal vein (left).</p>`,
        comparative: [
            { species: "Ox", note: "Right gland heart-shaped, left bean-shaped. Cortex pale yellow; medulla reddish-brown." },
            { species: "Horse", note: "Larger and more elongated. Strong cortisol response to stress (laminitis link)." },
            { species: "Dog", note: "Small, bean-shaped. Common diseases: hyperadrenocorticism (Cushing's) and hypoadrenocorticism (Addison's)." }
        ],
        clinical: "<b>Cushing's Disease (HAC):</b> Excess cortisol → polyuria/polydipsia, pot belly, alopecia (especially old dogs). <b>Addison's Disease:</b> Adrenal insufficiency — collapse, hyperkalemia. <b>Pheochromocytoma:</b> Catecholamine-secreting medullary tumour."
    }
);

// ---- HINDLIMB & PELVIS > SPLANCHNOLOGY (Pelvic Viscera) ----
atlasData["Hindlimb & Pelvis"]["Splanchnology"].push(
    {
        title: "Pelvic Cavity: Boundaries & Peritoneal Reflections",
        desc: `<b>High-Yield Points:</b><br>
        • <b>Pelvic cavity</b> = bony funnel from pelvic inlet (sacral promontory + ilium + pubis) to pelvic outlet.<br>
        • <b>Roof</b>: sacrum + first few coccygeal vertebrae.<br>
        • <b>Floor</b>: pubis + ischium (pelvic symphysis).<br>
        • <b>Side walls</b>: shafts of ilium + ischium + sacrosciatic ligament.<br>
        • <b>Pelvic inlet (anterior aperture):</b> sacral promontory above, pectineal line of pubis below — measured for pelvimetry / dystocia prediction.<br>
        • Peritoneum forms pouches: <b>pararectal, rectovaginal/rectogenital, vesicogenital, pubovesical fossae</b>.<br>
        • Most of the pelvic viscera (rectum, bladder, urethra, accessory glands) become <b>retroperitoneal</b> caudally.`,
        eliteDesc: `<h3>The Pelvic Cavity</h3>
        <p>The pelvic cavity is the funnel-shaped space inside the bony pelvis. Its <b>inlet (anterior aperture)</b> is bounded by the sacral promontory (dorsally), the shafts of ilium (laterally), and the pectineal line of pubis (ventrally) — through this opening the fetus must pass during parturition, and its diameters (conjugate, transverse, oblique) are routinely measured for pelvimetry in heifers.</p>
        <p>The <b>outlet (posterior aperture)</b> is bounded by the first coccygeal vertebra (dorsally), the sacrosciatic ligaments (laterally), and the ischial arch (ventrally).</p>
        <p><b>Peritoneal Reflections:</b> The peritoneum entering the pelvic cavity from the abdomen forms several pouches:<br>
        • <b>Pararectal fossae</b> — beside the rectum.<br>
        • <b>Rectogenital pouch</b> (rectovaginal in female; rectovesical in male) — between rectum and uterus/bladder.<br>
        • <b>Vesicogenital pouch</b> (in female) — between bladder and uterus.<br>
        • <b>Pubovesical pouch</b> — between pubis and bladder.<br>
        Caudally, the peritoneum stops short and the rest of the pelvic organs become retroperitoneal.</p>`,
        comparative: [
            { species: "Cow", note: "Pelvic inlet wider, rounded — adapted for calving. Sacrum less inclined." },
            { species: "Mare", note: "Pelvic inlet large oval. Sacrum more horizontal. Foaling normally easy." },
            { species: "Bitch", note: "Narrow pelvis relative to fetus head — dystocia common in brachycephalic breeds." }
        ],
        clinical: "<b>Pelvimetry in heifers:</b> Internal measurement of pelvic inlet (Rice pelvimeter) before first breeding to predict dystocia risk. <b>Pelvic Fractures:</b> Common after road accidents — careful rectal exam to detect crepitus before forced breeding/calving. <b>Adhesions:</b> Pelvic peritoneal pouches are sites of fibrin deposition after pelvic peritonitis or dystocia."
    },
    {
        title: "Digestive: Rectum & Anal Canal",
        desc: `<b>High-Yield Points:</b><br>
        • <b>Rectum</b> = terminal part of the colon, lies in pelvic cavity dorsal to bladder/genital tract.<br>
        • Cranial part is <b>peritonealized</b>; caudal part (~last 15 cm) is <b>retroperitoneal</b> — clinically important for safe rectal palpation.<br>
        • <b>Anal canal</b>: short terminal segment with two sphincters → <b>internal anal sphincter</b> (smooth, involuntary) + <b>external anal sphincter</b> (striated, voluntary, supplied by pudendal nerve).<br>
        • <b>Anus</b>: external opening, surrounded by skin (anocutaneous line at junction).<br>
        • Site for <b>caudal epidural anaesthesia</b> (S5-Cy1) — paralyses anal sphincter for procedures.`,
        eliteDesc: `<h3>Rectum and Anus</h3>
        <p>The <b>rectum</b> is the terminal part of the large intestine, lying in the pelvic cavity dorsal to the urogenital organs and ventral to the sacrum. It runs roughly straight (hence 'rectum'). The cranial portion is suspended by the mesorectum and covered by peritoneum; the caudal ~15 cm becomes <b>retroperitoneal</b> — this section can be torn during rough rectal palpation, leading to fatal peritonitis.</p>
        <p>The <b>anal canal</b> is the very short terminal segment lined by stratified squamous epithelium. It is surrounded by two sphincters:<br>
        • <b>Internal anal sphincter:</b> smooth muscle, involuntary, autonomic control.<br>
        • <b>External anal sphincter:</b> striated muscle, voluntary, innervated by the <b>caudal rectal nerves (branches of pudendal nerve)</b> — paralysis after sacral fractures or epidural overdose.</p>
        <p><b>Anus:</b> The external opening, closed by the sphincters and surrounded by hairy skin. The mucocutaneous junction is called the <b>anocutaneous line</b>.</p>
        <p><b>Vasculature & Innervation:</b> Caudal rectal artery (from internal pudendal); innervation as above. The <b>pelvic plexus</b> on the lateral wall of the rectum carries parasympathetic fibres governing defecation.</p>`,
        comparative: [
            { species: "Cow", note: "Long, accessible per rectum — routine for pregnancy diagnosis, palpation of pelvic organs." },
            { species: "Horse", note: "Wall very thin and easily torn during rectal exam — major cause of euthanasia in clinical practice." },
            { species: "Dog", note: "Short rectum. Anal sacs (paranal sinuses) lie at 4 and 8 o'clock — common site of impaction/abscess." },
            { species: "Fowl", note: "No true anus — rectum opens into the cloaca, which has urodeum, coprodeum, proctodeum compartments." }
        ],
        clinical: "<b>Rectal tear (horse):</b> Grade 1-4 based on depth — Grade 4 (full thickness) is life-threatening. <b>Anal sac disease (dog):</b> Impaction or infection — scooting behaviour. <b>Caudal Epidural:</b> S5-Cy1 site — anaesthesia for prolapse correction, dystocia, perineal surgery. <b>Rectal Prolapse:</b> Common in piglets, lambs after coughing/diarrhoea/parturition."
    },
    {
        title: "Urinary: Urinary Bladder & Pelvic Urethra",
        desc: `<b>High-Yield Points:</b><br>
        • <b>Bladder</b> lies on the floor of the pelvic cavity (when empty) and extends into the abdomen when full.<br>
        • Parts: apex (cranial), body, neck (caudal); <b>trigone</b> = triangular area where 2 ureters enter and urethra exits.<br>
        • Held by 3 ligaments: <b>median + 2 lateral umbilical ligaments</b> (vestiges of fetal urachus & umbilical arteries).<br>
        • <b>Cystotomy site</b> (cattle): cranial midline of bladder via paramedian/ventral midline approach.<br>
        • <b>Urethra (Pelvic part)</b>:<br>
          – <b>Female:</b> short (~10 cm), opens at vestibule. Suburethral diverticulum in cow — catches catheter.<br>
          – <b>Male:</b> long, in two parts — pelvic urethra (intra-pelvic) + penile urethra. <b>Sigmoid flexure</b> in ruminants/pig.`,
        eliteDesc: `<h3>Urinary Bladder & Pelvic Urethra</h3>
        <p><b>Urinary Bladder:</b> A muscular reservoir lying on the pelvic floor, dorsal to the pubis, ventral to the rectum (male) or to the uterus/vagina (female). It has three parts: apex, body, and neck. Internally, the <b>trigone</b> is a smooth triangular area bounded by the two ureteric openings (dorsally) and the urethral opening (caudally).</p>
        <p><b>Wall layers:</b> Mucosa (transitional epithelium) → submucosa → smooth muscle (the <b>detrusor</b>, in 3 layers) → serosa.</p>
        <p><b>Ligaments:</b><br>
        • <b>Median ligament</b> (vestige of urachus) attaches bladder apex to ventral abdominal wall.<br>
        • <b>Lateral ligaments (× 2)</b> contain the round ligaments of the bladder (remnants of umbilical arteries).</p>
        <p><b>Female Urethra:</b> Short tube (~10 cm in cow) running from bladder neck to the floor of the vestibule, where it opens at the <b>external urethral orifice</b>. Just caudal to this opening is the <b>suburethral diverticulum</b> — a blind pouch unique to cow that catches a urinary catheter (must lift the catheter dorsally to enter the urethra).</p>
        <p><b>Male Urethra:</b> Much longer, divided into:<br>
        • <b>Pelvic part:</b> from bladder neck through the pelvic cavity, surrounded by accessory glands and the urethralis muscle. Contains the <b>colliculus seminalis</b> where deferent ducts and vesicular gland ducts open.<br>
        • <b>Penile part:</b> exits over the ischial arch and runs through the penis to the external urethral orifice. In bull, ram, boar — bears a <b>sigmoid flexure</b> for retraction of penis.</p>`,
        comparative: [
            { species: "Cow", note: "Has suburethral diverticulum in vestibule — must elevate catheter tip to enter urethra." },
            { species: "Mare", note: "Urethra opens directly without diverticulum — easy catheterization." },
            { species: "Steer/Wether", note: "Male urethra long with sigmoid flexure → prone to obstruction by uroliths. Sites of lodging: sigmoid flexure, ischial arch, distal urethral process." },
            { species: "Dog", note: "Os penis with urethral groove — uroliths get lodged at the caudal end of os penis." }
        ],
        clinical: "<b>Cystotomy:</b> Surgical opening of bladder for cystic calculi — paramedian/ventral midline approach in male cattle. <b>Catheterization (cow):</b> Lift the catheter over the suburethral diverticulum; rectal palpation can guide. <b>Obstructive Urolithiasis (Water Belly):</b> In castrated male ruminants, struvite stones lodge at sigmoid flexure or urethral process → ruptured bladder = 'water belly'. <b>Urethrotomy:</b> Surgical incision through perineum/scrotum to relieve obstruction. <b>Patent Urachus:</b> Foal/calf — urine leaks from umbilicus."
    },
    {
        title: "Male Reproductive — Pelvic & External Genitalia",
        desc: `<b>High-Yield Points:</b><br>
        • <b>Testis</b> in scrotum (extra-pelvic) — spermatogenesis at 4°C below body temp. Held by spermatic cord.<br>
        • <b>Epididymis</b> (head, body, tail) — sperm maturation/storage.<br>
        • <b>Ductus (Vas) Deferens</b> ascends in spermatic cord → through inguinal canal → to pelvic urethra at colliculus seminalis.<br>
        • <b>Accessory sex glands</b> (in pelvis, surrounding pelvic urethra):<br>
          – <b>Vesicular glands</b> (lobulated, paired) — bulk of seminal fluid in bull.<br>
          – <b>Prostate</b> — body + disseminate part.<br>
          – <b>Bulbourethral (Cowper's)</b> — paired, near ischial arch.<br>
        • <b>Penis (Bull):</b> <b>Fibroelastic</b> with permanent <b>sigmoid flexure</b> (caudal to scrotum). Erection by straightening of flexure (limited blood swell).<br>
        • <b>Spermatic cord</b>: vas deferens, testicular artery (pampiniform plexus → counter-current heat exchange), vein, lymphatics, nerves, cremaster muscle.`,
        eliteDesc: `<h3>Male Reproductive System</h3>
        <p><b>Testes:</b> Paired oval glands in the scrotum, the position keeps them ~4°C below core body temperature — required for spermatogenesis. The <b>tunica albuginea</b> covers each testis; <b>mediastinum testis</b> runs through the centre and gives rise to the <b>rete testis</b> connecting seminiferous tubules to efferent ductules.</p>
        <p><b>Epididymis:</b> Closely applied to one side of testis. Three parts: head (caput), body (corpus), tail (cauda). Sperm undergo maturation here; the cauda is the main storage site.</p>
        <p><b>Ductus (Vas) Deferens:</b> Continues from cauda epididymis, ascends inside the <b>spermatic cord</b>, traverses the <b>inguinal canal</b>, and runs caudally over the bladder to open with the duct of vesicular gland into the pelvic urethra at the <b>colliculus seminalis</b>. The terminal dilation is the <b>ampulla</b> of the ductus deferens.</p>
        <p><b>Spermatic Cord</b> contents (mnemonic 'PVTNL + cremaster + ductus'): <b>P</b>ampiniform plexus (counter-current heat exchanger, central role in thermoregulation), <b>V</b>asa (testicular artery, deferential artery), <b>T</b>esticular nerves, <b>N</b>erves of cremaster, <b>L</b>ymphatics. The cord is enclosed by tunica vaginalis (parietal + visceral layers) — the route of indirect inguinal hernia.</p>
        <p><b>Accessory Sex Glands</b> (around pelvic urethra in bull):<br>
        • <b>Vesicular glands</b> — lobulated, paired; produce most of the ejaculate volume.<br>
        • <b>Prostate</b> — body + disseminate part embedded in the urethralis muscle.<br>
        • <b>Bulbourethral (Cowper's) glands</b> — paired, at ischial arch; pre-ejaculate cleanser.</p>
        <p><b>Penis:</b> The bull, ram, boar penis is <b>fibroelastic</b> — small cavernous space, mostly dense collagen + elastic tissue. It has a permanent <b>sigmoid flexure</b> caudal to the scrotum that straightens during erection (the penis lengthens but does not greatly thicken). The <b>retractor penis muscle</b> pulls the penis back into the prepuce. The horse and dog have a <b>musculocavernous</b> penis (large blood-engorged erection); the dog also has an <b>os penis</b>.</p>
        <p><b>Inguinal Canal:</b> Oblique passage through the abdominal wall, with a <b>deep (internal) inguinal ring</b> (in the transverse fascia) and a <b>superficial (external) inguinal ring</b> (slit in the aponeurosis of external oblique). Transmits the spermatic cord (male) or round ligament of uterus (female), external pudendal artery to udder (cow), and is the site of inguinal/scrotal hernia.</p>
        <p><b>Pre-pubic Tendon:</b> Strong fibrous attachment of the rectus abdominis and pectineus to the cranial border of the pubis. Important in heavy pregnant mares — rupture leads to ventral abdominal swelling and inability to foal.</p>`,
        comparative: [
            { species: "Bull", note: "Fibroelastic penis with sigmoid flexure. Vesicular glands very large and lobulated. Scrotum pendulous." },
            { species: "Stallion", note: "Musculocavernous penis (large erection). No sigmoid flexure. Vesicular glands smooth-walled." },
            { species: "Boar", note: "Spiral/corkscrew tip of glans. Very large bulbourethral glands. Sigmoid flexure present." },
            { species: "Dog", note: "Os penis with bulbus glandis (locking 'tie' during mating). Prostate is the only accessory gland — common BPH and prostatitis in older dogs." },
            { species: "Tom Cat", note: "Small spines on glans penis — induced ovulation in queen." }
        ],
        clinical: "<b>Castration:</b> Open or closed technique; testes + part of cord removed. Critical to control hemorrhage from testicular artery. <b>Vasectomy:</b> Used in teaser bulls — sterile but libidinous. <b>Inguinal/Scrotal Hernia:</b> Bowel through inguinal canal — common in young pigs and stallions. <b>Cryptorchidism:</b> Failure of testis to descend → infertile + tumour-prone. <b>Persistent Frenulum:</b> Strap of tissue prevents penile extension in young bulls. <b>BPH (dog):</b> Benign prostatic hyperplasia in intact older males — tenesmus, stranguria. <b>Pre-pubic tendon rupture (mare):</b> Late pregnancy emergency."
    },
    {
        title: "Female Reproductive — Pelvic Genitalia",
        desc: `<b>High-Yield Points:</b><br>
        • <b>Ovary</b> (abdominal in mare/bitch, pelvic in cow/sow) — gametogenesis + steroid production.<br>
        • <b>Uterine tube (oviduct)</b>: infundibulum (with fimbriae) → ampulla (fertilization site) → isthmus.<br>
        • <b>Uterus (Cow)</b> = <b>BICORNUATE</b> — short body + 2 long horns. Has <b>cotyledons</b> (caruncles + cotyledon = placentome).<br>
        • <b>Cervix</b> (cow) — thick, fibromuscular, with <b>3-4 transverse rings (annular folds)</b> — clinically vital landmark for AI ('cervix is the rifle barrel').<br>
        • <b>Vagina</b> + <b>Vestibule</b> (separated by external urethral orifice + suburethral diverticulum) → <b>Vulva</b> with two labia.<br>
        • <b>Broad ligament (mesometrium)</b>: peritoneal fold suspending uterus + ovary; contains uterine vessels.<br>
        • Blood: <b>uterine artery</b> (palpable per rectum in late pregnancy = 'fremitus' / pregnancy thrill).`,
        eliteDesc: `<h3>Female Reproductive Tract</h3>
        <p><b>Ovary:</b> Almond-shaped gonad. In cow & sow it lies in the pelvic cavity at first oestrus and migrates somewhat cranially; in mare & bitch it sits in the sublumbar abdominal region. Surface in cow is smooth with bulging follicles and a corpus luteum (CL); the mare ovary has a single <b>ovulation fossa</b> through which all ovulations occur.</p>
        <p><b>Uterine Tube (Oviduct / Fallopian Tube):</b> Three parts — <b>infundibulum</b> (funnel with fimbriae, catches the ovulated oocyte), <b>ampulla</b> (site of fertilization), <b>isthmus</b> (narrow part joining the uterus at the uterotubal junction). Lined by ciliated and secretory epithelium.</p>
        <p><b>Uterus (Cow):</b> A <b>bicornuate</b> uterus with a short body (~3 cm) and two long curving horns (~30 cm each). The horns curl ventrally like a ram's horn. The endometrium of the cow bears <b>~80-120 caruncles</b> — non-glandular knob-like elevations where, during pregnancy, the fetal cotyledons attach to form <b>placentomes</b> (cotyledonary placentation, characteristic of ruminants).</p>
        <p><b>Cervix (Cow):</b> Thick, hard, fibromuscular tube ~10 cm long. The lumen is interrupted by <b>3-4 transverse cervical rings (annular folds)</b> — the trans-cervical insertion of an AI gun feels like 'threading a rifle barrel'. Outside oestrus, it is firmly closed and forms a thick mucus plug (especially during pregnancy).</p>
        <p><b>Vagina:</b> Distensible muscular tube from cervix to external urethral orifice. The fornix lies around the cervix.</p>
        <p><b>Vestibule:</b> The part of the genital tract caudal to the external urethral orifice; floor bears the <b>suburethral diverticulum</b> (cow) and lateral walls bear the openings of the <b>major vestibular (Bartholin's) glands</b>.</p>
        <p><b>Vulva:</b> External part — two <b>labia</b> meet at dorsal & ventral commissures. The clitoris lies in the ventral commissure (homolog of male penis).</p>
        <p><b>Broad Ligament (Mesometrium + Mesosalpinx + Mesovarium):</b> Double sheet of peritoneum suspending the entire tract from the sublumbar region; carries uterine, ovarian and vaginal vessels and nerves.</p>
        <p><b>Pregnancy Diagnosis Per Rectum (cow):</b> ~30-35 d — membrane slip; ~45 d — amniotic vesicle palpable; ~90 d — fremitus in middle uterine artery; >120 d — fetus directly palpable.</p>`,
        comparative: [
            { species: "Cow", note: "Bicornuate, cotyledonary placenta (~80-120 caruncles). Cervix with 3-4 annular rings. Suburethral diverticulum in vestibule." },
            { species: "Mare", note: "Bipartite uterus (short horns, large body). Diffuse microcotyledonary placenta. Single ovulation fossa on ovary." },
            { species: "Bitch", note: "Bicornuate with very long horns and tiny body. Zonary placenta (a band around the chorionic sac). Marginal hematoma → 'green sign' at parturition." },
            { species: "Sow", note: "Very long uterine horns (up to 1.5 m) for litter pregnancy. Diffuse placenta." },
            { species: "Fowl", note: "Only LEFT ovary and oviduct functional — right side regresses. Oviduct: infundibulum, magnum, isthmus, uterus (shell gland), vagina." }
        ],
        clinical: "<b>Caesarean Section (cow):</b> Standing left flank approach (most common) — incise lateral surface of uterus over a hindlimb of fetus. <b>Ovariohysterectomy (Spay):</b> Standard sterilization in dog/cat; for cow it is rare ('flank spay'). <b>Pyometra (Bitch):</b> Closed-cervix is emergency — toxaemia. <b>Retained Placenta (Cow):</b> >12 h post-calving — common with milk fever, dystocia, twins. <b>Vaginal/Uterine Prolapse:</b> Common in late pregnancy/post-partum — caudal epidural needed for replacement. <b>AI Technique:</b> Rectovaginal — operator's hand grips cervix per rectum and threads AI gun through the cervical rings to deposit semen at the body of uterus."
    }
);
