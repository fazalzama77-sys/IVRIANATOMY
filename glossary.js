// =========================================================
// GLOSSARY — UG-friendly tooltip definitions for tough terms
// =========================================================
// Usage: glossary.decorate(rootElement) scans the rendered HTML
// inside rootElement and wraps known terms with a hover-tooltip.
// Terms are matched longest-first to avoid partial overlap.
// =========================================================

const glossary = {

    // Term → simple UG-level definition. Add freely.
    terms: {
        // ---------- POSTURE / GAIT ----------
        "anticlinal vertebra": "The single vertebra in the back whose spine stands vertical. Spines in front of it slope back; spines behind slope forward. T13 in ox, T16 in horse.",
        "plantigrade": "Walking on the entire sole of the foot — heel and toes both touching the ground. Bears, humans.",
        "digitigrade": "Walking on the toes only (heel raised). Dogs, cats.",
        "unguligrade": "Walking on the tip of the toe (hoof). Horse, ox.",
        "synsarcosis": "A 'muscle joint' — bones connected by muscles instead of bony joints. The forelimb is attached to the trunk this way (no clavicle).",

        // ---------- BONES ----------
        "ossa cordis": "Two small bones in the fibrous skeleton of the heart at the base of the aorta — only in adult ruminants.",
        "carina": "The deep bony keel on the underside of a bird's sternum, where the powerful flight muscles attach.",
        "notarium": "Fused cranial thoracic vertebrae (T1–T5) in birds — gives the back rigidity for flight.",
        "synsacrum": "Fusion of last thoracic + lumbar + sacral + first caudal vertebrae into one rigid bone in birds.",
        "pygostyle": "Fused last few caudal vertebrae in birds — supports the tail feathers.",
        "tarsometatarsus": "A single fused bone in birds = distal tarsals + metatarsals fused together.",
        "tibiotarsus": "A single fused bone in birds = tibia + proximal tarsals fused together.",
        "uncinate process": "Backward-pointing bony process on bird ribs that overlaps the next rib — strengthens the chest wall for flight.",
        "fovea capitis": "A small pit on the head of the femur where the round ligament attaches.",
        "tuber calcanei": "The bony point that sticks up at the back of the hock — 'point of the hock' — where the Achilles tendon attaches.",
        "tuber coxae": "The 'hook bone' — palpable cranio-lateral angle of the ilium (rump corner) in cattle.",
        "tuber ischiadicum": "The 'pin bone' — caudal palpable corner of the ischium next to the tail base in cattle.",
        "tuber sacrale": "The dorsomedial angle of the ilium where the rump meets the sacrum — the highest point of the croup.",

        // ---------- LIGAMENTS / CONNECTIVE ----------
        "lacertus fibrosus": "A fibrous band linking the biceps brachii tendon to the extensor carpi radialis tendon — part of the equine stay apparatus.",
        "intercapital ligament": "A ligament that joins the heads of the right and left ribs across the floor of the vertebral canal — protects the disc from bulging.",
        "ligamentum flavum": "Yellow elastic ligament between vertebral arches — the 'pop' you feel when placing an epidural needle.",
        "nuchal ligament": "Big elastic ligament running from skull → withers — passively holds up the heavy head of a grazing animal.",
        "supraspinous ligament": "Long fibrous band along the tips of all spinous processes; resists over-flexion of the back.",
        "round ligament": "Inside the hip joint — runs from the fovea capitis on the femur to the acetabular fossa.",
        "accessory ligament": "An EXTRA ligament in horses, anchoring the femoral head to the prepubic tendon — limits abduction.",
        "prepubic tendon": "Strong tendinous insertion on the cranial pubic brim — anchors the abdominal wall and rectus abdominis to the pelvis.",

        // ---------- VESSELS ----------
        "rete mirabile": "Latin for 'wonderful net' — a network of intertwined small vessels that buffers blood pressure or exchanges heat (e.g. at the giraffe skull base).",
        "pampiniform plexus": "A network of veins around the testicular artery in the spermatic cord — cools the incoming arterial blood.",
        "cisterna chyli": "Sac-like dilation in the abdomen (dorsal to aorta) where the thoracic duct begins.",
        "azygos vein": "Unpaired vein draining the intercostal spaces. RIGHT in ox/horse; LEFT (hemiazygos) in dog/pig/cat.",
        "ventral coccygeal artery": "Artery under the tail — the standard pulse and blood-collection site in cattle.",

        // ---------- NERVES ----------
        "recurrent laryngeal nerve": "Branch of the vagus that loops around a chest artery and runs back UP to the larynx. Damage → roaring in horses.",
        "phrenic nerve": "Cervical-origin nerve (C5–C7) — the SOLE motor nerve to the diaphragm.",
        "lumbosacral plexus": "Network formed by ventral branches of last lumbar + first sacral spinal nerves — gives rise to femoral, obturator, sciatic, pudendal nerves.",
        "pudendal nerve": "Sacral nerve (S2–S4) — supplies perineum, scrotum, prepuce, vulva, penis.",

        // ---------- ORGANS ----------
        "trachealis muscle": "Smooth muscle that closes the dorsal gap of the C-shaped tracheal cartilages.",
        "tracheal bronchus": "Extra bronchus arising from the right side of the trachea BEFORE the bifurcation — present in ox, sheep, pig (NOT in horse, dog).",
        "mediastinum": "The thin median wall between the right and left pleural sacs — contains heart, trachea, oesophagus.",
        "centrum tendineum": "Y-shaped central tendon of the diaphragm — non-contractile; forms the roof of the dome.",
        "aortic hiatus": "Most dorsal opening in the diaphragm — passes aorta, azygos vein, thoracic duct.",
        "oesophageal hiatus": "Middle opening in the diaphragm — passes oesophagus and the two vagal trunks.",
        "caval foramen": "Most ventral opening in the diaphragm (in tendinous centre) — passes the caudal vena cava only.",

        // ---------- CLINICAL / DISEASE ----------
        "auscultation": "Listening to internal body sounds with a stethoscope.",
        "percussion": "Tapping the body wall and judging the sound (resonant = air, dull = fluid/solid).",
        "paracentesis thoracis": "Inserting a needle through the chest wall to remove fluid or air from the pleural cavity.",
        "roaring": "Laryngeal hemiplegia in horses — left recurrent laryngeal nerve paralysis → loud whistling on inspiration during exercise.",
        "choke": "Oesophageal obstruction — a food bolus stuck in the gullet. Common at thoracic inlet and base of heart.",
        "hardware disease": "Traumatic reticulopericarditis — a swallowed wire or nail pierces the reticulum and reaches the pericardium → infection of heart sac.",
        "calving paralysis": "Damage to the obturator nerve during difficult calving → cow's hind legs splay sideways = 'downer cow'.",
        "downer cow": "A cow that cannot rise after calving — usually due to obturator/femoral nerve damage or metabolic disease.",
        "stay apparatus": "A passive locking system in the limbs (especially in horses) that lets the animal stand and sleep with minimal muscle effort.",
        "reciprocal apparatus": "Tendinous link in the horse hindlimb (peroneus tertius + superficial digital flexor) — when the stifle flexes, the hock automatically flexes with it.",
        "epidural anaesthesia": "Local anaesthetic injected into the epidural space (around the dura) — blocks spinal nerves.",
        "patellar desmotomy": "Cutting the medial patellar ligament in horses to release a patella stuck over the medial trochlear ridge ('upward fixation').",

        // ---------- SHORT TECH TERMS ----------
        "synovial joint": "A joint with a fluid-filled cavity, allowing free movement (knee, elbow, etc.).",
        "synchondrosis": "Bone-to-bone joint joined by cartilage with NO cavity — almost no movement.",
        "synostosis": "When two bones fuse together as one bone (e.g. radius and ulna in ox).",
        "aponeurosis": "A flat, sheet-like tendon connecting muscle to bone or to another muscle.",
        "synovial bursa": "A small fluid-filled sac that reduces friction where a tendon crosses a bony point.",
        "synovial sheath": "A tube of synovial membrane wrapping around a tendon to let it glide smoothly.",

        // ---------- HISTOLOGY ----------
        "haematoxylin and eosin": "The standard pink-and-blue histology stain. Haematoxylin stains nuclei deep blue/purple; eosin stains cytoplasm pink.",
        "h&e": "Short for haematoxylin and eosin — the standard routine histology stain.",
        "basophilic": "Stains BLUE-PURPLE with the dye haematoxylin — usually because of nucleic acids (DNA, RNA, ribosomes).",
        "eosinophilic": "Stains PINK-RED with eosin — usually proteins, mitochondria, collagen, RBCs.",
        "argyrophilic": "Stains BLACK with silver salts — used to demonstrate reticular fibres in lymph nodes, spleen, liver.",
        "pas stain": "Periodic Acid-Schiff stain — colours basement membranes, glycogen, mucus magenta-pink.",
        "lacuna": "A small cavity in cartilage or bone matrix that houses a single cell (chondrocyte or osteocyte).",
        "canaliculi": "Tiny channels in bone connecting lacunae — let osteocytes pass nutrients to each other.",
        "haversian system": "The functional unit of compact bone — a central canal with vessels surrounded by concentric lamellae of bone (an 'osteon').",
        "osteon": "Another name for a Haversian system — the cylindrical structural unit of compact bone.",
        "appositional growth": "Growth in width by adding new tissue on the surface (used for cartilage and bone growth in thickness).",
        "interstitial growth": "Growth in length by cells dividing inside the existing matrix (only cartilage does this; bone cannot).",
        "rete testis": "A network of channels inside the testis that collects sperm from the seminiferous tubules and sends them to the epididymis.",
        "blood-testis barrier": "Tight junctions between Sertoli cells that isolate developing sperm from the immune system.",
        "graafian follicle": "The fully mature ovarian follicle just before ovulation — has a fluid antrum + cumulus oophorus around the egg.",
        "corpus luteum": "The yellow body left behind on the ovary after ovulation — secretes progesterone to support pregnancy.",
        "corpus albicans": "The white scar that replaces a regressed corpus luteum after the cycle ends or pregnancy is over.",
        "cumulus oophorus": "The cluster of follicular cells that hold the oocyte in a Graafian follicle.",
        "zona pellucida": "Glycoprotein coat surrounding the mammalian egg — sperm must drill through it to fertilize.",
        "torus linguae": "Firm dorsal swelling on the body of the bovine tongue — used to grip grass against the dental pad.",
        "dental pad": "Cornified pad on the upper jaw of ruminants that replaces the missing upper incisors.",
        "mucociliary escalator": "Coordinated upward beating of cilia + sticky mucus blanket that clears debris from the airways.",
        "type i pneumocyte": "Thin squamous cell lining the alveolus — the actual gas-exchange surface.",
        "type ii pneumocyte": "Cuboidal alveolar cell that secretes surfactant + acts as a stem cell to replace Type I cells.",
        "surfactant": "Lipid-protein mixture (mostly DPPC) that reduces surface tension in alveoli and prevents collapse.",
        "podocyte": "Specialised epithelial cell of the kidney glomerulus with foot processes — forms the filtration slit diaphragm.",
        "macula densa": "Cluster of distal convoluted tubule cells where the tubule touches its parent afferent arteriole — senses NaCl and helps regulate blood pressure.",
        "juxtaglomerular cells": "Modified smooth muscle cells in the wall of the afferent arteriole that release renin when blood pressure drops.",
        "nephron": "The functional unit of the kidney — renal corpuscle + proximal tubule + Loop of Henle + distal tubule + collecting duct.",
        "hassall's corpuscles": "Whorl-like structures in the medulla of the thymus made of degenerated epithelial cells — diagnostic for thymus on histology slides.",
        "germinal center": "Pale-staining centre of an active lymphoid follicle where B-cells are proliferating and producing antibodies.",
        "tapetum lucidum": "Reflective layer in the choroid that gives animals 'eye-shine' at night — improves vision in low light. Absent in pigs and humans.",

        // ---------- EMBRYOLOGY ----------
        "gametogenesis": "Formation of gametes (sperm or eggs) — uses meiosis to halve the chromosome number from 2n to n.",
        "spermatogenesis": "Production of sperm in the seminiferous tubules of the testis.",
        "oogenesis": "Production of eggs in the ovary — starts in fetal life, pauses at meiosis I until ovulation.",
        "meiosis": "Two-step cell division that produces haploid gametes; meiosis I splits homologous pairs, meiosis II splits sister chromatids.",
        "spermiogenesis": "Maturation of round spermatids into streamlined spermatozoa with head, midpiece and tail.",
        "capacitation": "Final maturation of sperm in the female tract that lets it fertilize an egg — removes glycoprotein coat.",
        "acrosome reaction": "Release of enzymes from the sperm head's acrosome that lets it drill through the zona pellucida.",
        "zygote": "The single diploid cell formed when sperm and egg fuse — the very first stage of an embryo.",
        "cleavage": "The rapid mitotic divisions of the zygote without cell growth — the embryo gets more cells but stays the same size.",
        "morula": "Solid ball of cells (~16-32 blastomeres) — looks like a tiny mulberry; forms before the blastocyst.",
        "blastocyst": "Hollow stage of the mammalian embryo with an outer trophoblast + inner cell mass + fluid-filled blastocoel.",
        "trophoblast": "Outer cell layer of the blastocyst — forms the placenta and foetal membranes (NOT the embryo proper).",
        "inner cell mass": "Cluster of cells inside the blastocyst that becomes the embryo proper.",
        "gastrulation": "The process where a 2-layered embryonic disc becomes 3-layered (ectoderm, mesoderm, endoderm).",
        "primitive streak": "Linear thickening on the epiblast that marks the start of gastrulation — cells dive in here to make mesoderm and endoderm.",
        "notochord": "Rod of mesoderm beneath the developing nervous system; signals overlying ectoderm to form the neural plate. Persists in adult only as the nucleus pulposus of intervertebral discs.",
        "neural tube": "Tube of ectoderm that becomes the brain and spinal cord — formed by neurulation.",
        "neural crest": "Cells that pinch off from the edges of the neural tube and migrate to form PNS, melanocytes, adrenal medulla, parts of the skull.",
        "somite": "Block of paraxial mesoderm; gives rise to vertebrae, ribs, skeletal muscle, and dermis of the back.",
        "yolk sac": "Earliest foetal membrane — first site of blood cell formation; origin of primordial germ cells in mammals.",
        "amnion": "Innermost foetal membrane — encloses the embryo in amniotic fluid.",
        "allantois": "Outpouching of the embryonic hindgut; in mammals fuses with chorion to make the chorioallantoic placenta; stores foetal urine.",
        "chorion": "Outermost foetal membrane — touches the maternal endometrium and forms the foetus's part of the placenta.",
        "placentome": "A cotyledon (foetal) + caruncle (maternal) unit in the cotyledonary placenta of ruminants.",
        "freemartin": "A sterile heifer twin of a male calf — masculinised in utero by hormones and cells exchanged through shared placental vessels.",
        "monozygotic twins": "Identical twins formed when one fertilised egg splits — same genome, same sex.",
        "dizygotic twins": "Fraternal twins from two separate ovulations + two sperm — different genomes, may be different sex.",
        "patent urachus": "The allantoic stalk fails to close at birth → urine drips from the umbilicus of the calf or foal.",
        "patent ductus arteriosus": "The fetal shunt between pulmonary trunk and aorta stays open after birth → continuous 'machinery' heart murmur (most common heart defect in dogs).",
        "schistosomus reflexus": "A foetal monster with the body wall opened up and viscera exposed — a common cause of dystocia in cattle.",
        "teratogen": "Anything (drug, virus, plant toxin, radiation) that causes a congenital defect when it acts during pregnancy.",

        // ---------- ADDITIONAL CLINICAL TERMS ----------
        "paracentesis": "Inserting a needle into a body cavity to drain fluid — e.g., paracentesis thoracis for pleural effusion.",
        "rumenocentesis": "Tapping the rumen with a needle through the left flank — used to sample rumen fluid or relieve gas bloat.",
        "laparotomy": "Surgical opening of the abdominal cavity — done via the flank or ventral midline.",
        "rumenotomy": "Surgical opening of the rumen — used to remove hardware or relieve obstruction.",
        "abomasotomy": "Surgical opening of the abomasum — used to correct displacement or remove obstructions.",
        "cystotomy": "Surgical opening of the urinary bladder — done to remove bladder stones.",
        "urethrotomy": "Surgical incision of the urethra to relieve stone obstruction (water belly in steers).",
        "caesarean section": "Surgical delivery of the foetus through an incision in the abdominal wall and uterus — standing left flank approach is standard in cows.",
        "rumen": "First and largest compartment of the ruminant stomach — non-glandular fermentation vat.",
        "reticulum": "Second compartment of the ruminant stomach — has a honeycomb mucosal pattern; site of 'hardware disease'.",
        "omasum": "Third compartment of the ruminant stomach — many leaf-like folds (laminae) that squeeze water out of digesta.",
        "abomasum": "Fourth compartment of the ruminant stomach — the only true glandular stomach; secretes HCl and pepsin.",
        "guttural pouch": "A large air-filled diverticulum of the auditory tube in the horse — unique to equids; site of mycosis and empyema.",
        "stenson's duct": "The duct of the parotid salivary gland — opens in the mouth opposite the upper 3rd-4th cheek tooth.",
        "wharton's duct": "The duct of the mandibular salivary gland — opens at the sublingual caruncle near the lower incisors."
    },

    // Pre-build the regex (longest-first, case-insensitive, word-boundary).
    _regex: null,
    _lookup: null,
    _buildIndex() {
        const sortedTerms = Object.keys(glossary.terms)
            .sort((a, b) => b.length - a.length)
            .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        if (sortedTerms.length === 0) return;
        glossary._regex = new RegExp(`\\b(${sortedTerms.join('|')})\\b`, 'gi');

        // Lower-cased lookup map for retrieving definitions
        glossary._lookup = {};
        Object.keys(glossary.terms).forEach((t) => {
            glossary._lookup[t.toLowerCase()] = glossary.terms[t];
        });
    },

    // Walk text nodes inside `root` and wrap matches in <span class="gloss-term">.
    // SAFE: only operates on text nodes — never touches existing HTML.
    decorate(root) {
        if (!root) return;
        if (!glossary._regex) glossary._buildIndex();
        if (!glossary._regex) return;

        // Skip these — already-decorated or interactive nodes
        const SKIP = new Set(['SCRIPT', 'STYLE', 'A', 'BUTTON', 'INPUT', 'TEXTAREA', 'CODE', 'PRE']);
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
                let p = node.parentNode;
                while (p) {
                    if (!p.tagName) break;
                    if (SKIP.has(p.tagName)) return NodeFilter.FILTER_REJECT;
                    if (p.classList && p.classList.contains('gloss-term')) return NodeFilter.FILTER_REJECT;
                    p = p.parentNode;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        const targets = [];
        let n;
        while ((n = walker.nextNode())) targets.push(n);

        targets.forEach((textNode) => {
            const text = textNode.textContent;
            if (!glossary._regex.test(text)) return;
            glossary._regex.lastIndex = 0;

            const frag = document.createDocumentFragment();
            let lastIdx = 0;
            let m;
            while ((m = glossary._regex.exec(text)) !== null) {
                if (m.index > lastIdx) {
                    frag.appendChild(document.createTextNode(text.slice(lastIdx, m.index)));
                }
                const span = document.createElement('span');
                span.className = 'gloss-term';
                span.textContent = m[0];
                span.dataset.def = glossary._lookup[m[0].toLowerCase()] || '';
                span.setAttribute('tabindex', '0');
                span.setAttribute('aria-label', `Definition: ${span.dataset.def}`);
                frag.appendChild(span);
                lastIdx = m.index + m[0].length;
            }
            if (lastIdx < text.length) {
                frag.appendChild(document.createTextNode(text.slice(lastIdx)));
            }
            textNode.parentNode.replaceChild(frag, textNode);
        });
    },

    // Optional: lookup function for use elsewhere
    define(term) {
        if (!glossary._lookup) glossary._buildIndex();
        return glossary._lookup[term.toLowerCase()] || null;
    }
};

if (typeof window !== 'undefined') window.glossary = glossary;
