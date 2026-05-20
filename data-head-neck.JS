// =========================================================
// HEAD & NECK DATA MODULE
// Contains: Osteology, Myology, Arthrology, Neurology, Angiology
// Status: POPULATED - Bovine Skull Anatomy (Standard + Elite Views)
// =========================================================

if (typeof atlasData === 'undefined') {
    var atlasData = {};
}

atlasData["Head & Neck"] = {
    "Osteology": [
        {
            title: "Introduction: Bovine Cranial Architecture",
            desc: `<b>Quick Revision:</b><br>
            • Skull divided into <b>Neurocranium</b> (braincase) and <b>Splanchnocranium</b> (facial skeleton)<br>
            • ~32 individual bones in adult (fusion obscures boundaries)<br>
            • Key feature: Extensive <b>pneumatization</b> - frontal sinuses invade parietal, interparietal, occipital<br>
            • Double-walled cranial vault acts as shock absorber during head-butting<br>
            • Architectural dominant: <b>Frontal bone</b> (forms entire roof)<br>
            • Clinical relevance: Surgical approaches for dehorning, sinus drainage, nerve blocks`,

            eliteDesc: `<h3>Architectural Dynamics of the Bovine Cranium</h3>
            <p>The osteology of the bovine skull (cranium) represents a pinnacle of artiodactyl design, characterized by a pyramidal architecture designed to support a massive masticatory apparatus while affording protection to the central nervous system and special sensory organs. Unlike the carnivorous skull, which prioritizes temporal muscle mass and jaw shear, the bovine skull is engineered for the ceaseless lateral grinding of herbivorous occlusion and the support of defensive cranial appendages.</p>
            
            <p>The skull is anatomically divisible into two primary functional units: the <b>Neurocranium</b> (braincase), comprising the caudal and dorsal protective plates, and the <b>Splanchnocranium</b> (viscerocranium or facial skeleton), which houses the respiratory and digestive portals. In the adult Bos taurus, these divisions are integrated via complex sutural, synchondrotic, and synostotic articulations, forming a rigid unit of approximately 32 individual bones, though fusion often obscures these boundaries in mature specimens.</p>
            
            <p>From a biomechanical perspective, the bovine skull is distinct due to the extensive pneumatization of its dorsal and caudal elements. The frontal sinuses do not merely occupy the frontal bone but invade the parietal, interparietal, and occipital territories, effectively creating a double-walled cranial vault that acts as a shock absorber during head-butting behaviors. This pneumatization dictates the surgical approaches to the cranium, particularly in dehorning and sinus drainage procedures.</p>
            
            <p><b>Comparative Context:</b> The bovine neurocranium is relatively shortened longitudinally but expanded transversely compared to the equine skull. This expansion is largely illusory, driven by the lateral and caudal ballooning of the frontal sinuses rather than an increase in cranial cavity volume.</p>`,

            comparative: [],
            clinical: "Understanding the double-walled pneumatic structure is imperative for surgical interventions. The complexity of the frontal sinus compartments dictates the approach to treating sinusitis and horn fractures."
        },
        {
            title: "Occipital Bone (Os occipitale)",
            desc: `<b>Exam Focus:</b><br>
            • Forms caudal terminus, surrounds foramen magnum<br>
            • <b>Basilar part:</b> Fuses with basisphenoid at 2-3 years (marks skeletal maturity)<br>
            • <b>Condyles:</b> Deeply curved, obliquely oriented for grazing flexion<br>
            • <b>Paracondylar processes:</b> Short, broad, curve medially (horse = straight/vertical)<br>
            • <b>Hypoglossal canal (CN XII):</b> Often double/triple in ox (rare in horse)<br>
            • <b>Squamous part:</b> Restricted to nuchal surface only (displaced dorsally by frontal bone)`,

            eliteDesc: `<h3>Anatomical Topography</h3>
            <p>The occipital bone forms the caudal terminus of the skull, surrounding the foramen magnum and articulating with the atlas (C1). In the ox, the topography of this bone is profoundly altered by the caudal encroachment of the frontal bones, which displace the occipital squama to the ventral-nuchal aspect of the skull.</p>
            
            <h4>Basilar Part (Pars basilaris)</h4>
            <p>This robust, prismatic bar forms the posterior floor of the cranial cavity. Rostrally, it fuses with the basisphenoid at the <b>spheno-occipital synchondrosis</b>, a cartilaginous joint that ossifies between 2 and 3 years of age, marking skeletal maturity. Ventrally, the tuberculum musculare (muscular tubercles) are prominent, rough, and wide, serving as the insertion for the powerful rectus capitis ventralis muscles which flex the head.</p>
            
            <h4>Lateral Parts (Partes laterales)</h4>
            <p>These segments flank the foramen magnum and bear the <b>occipital condyles</b> (condylus occipitalis). The bovine condyles are geometrically complex—deeply curved and obliquely oriented to facilitate the hinge-like flexion required for grazing. Lateral to the condyles project the <b>paracondylar processes</b> (jugular processes). In the ox, these are short, broad, and curve medially, unlike the straight vertical processes of the horse. The hypoglossal canal, transmitting Cranial Nerve XII, pierces the base of the condyles and is frequently double or triple in the ox, a variation rare in the horse.</p>
            
            <h4>Squamous Part (Squama occipitalis)</h4>
            <p>In the ox, this component is entirely restricted to the nuchal (posterior) surface of the skull. It does not contribute to the dorsal roof. It bears the external occipital protuberance, a rugose thickening for the attachment of the funicular part of the ligamentum nuchae, essential for supporting the massive head.</p>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Prominent condyles with distinct separation. Nuchal crest distinct; forms transverse ridge of nuchal surface. Paracondylar processes short, broad, curved medially. Foramen magnum large, circular to oval. Basilar tubercles flattened, less distinct." },
                { species: "Horse (Equus caballus)", note: "Smaller, widely separated condyles allow lateral rotation. Very prominent nuchal crest forms the poll (highest point). Paracondylar processes long, straight, directed ventrally. Foramen magnum triangular to oval. Very prominent muscular tubercles." },
                { species: "Dog (Canis lupus)", note: "Large separated condyles with deep intercondyloid notch. High sharp nuchal crest (except brachycephalic). Short paracondylar processes projecting ventrally by lateral processes of exoccipital. Circular foramen magnum located ventrally. Basioccipital plate-like, tubercles absent." },
                { species: "Pig (Sus scrofa)", note: "Large separated condyles allow substantial flexion for grazing. Prominent nuchal crest projects dorsally as high, thin plate. Very long paracondylar processes directed straight ventrally (paramastoid process). Oval foramen magnum. Prominent rough tubercles for heavy flexor attachment." },
                { species: "Fowl (Gallus domesticus)", note: "Single median condyle located ventral to foramen magnum allows wide rotation (near 180°). Temporal crests replace nuchal crest. Represented by paraoccipital processes. Transversely oval foramen magnum with dorsal notch common in toy breeds. Less prominent, fuses with sphenoid early." }
            ],

            clinical: "<b>Clinical Insight:</b> In Gallus domesticus, the presence of a single occipital condyle forms a highly mobile articulation with the atlas, permitting an extensive range of head rotation. This enhanced mobility is essential for preening, rapid environmental surveillance, precise visual alignment, and predator detection. In contrast, the bi-condylar arrangement of the mammalian skull generally provides greater stability but a comparatively reduced range of rotational movement."
        },
        {
            title: "Sphenoid Bone (Os sphenoidale)",
            desc: `<b>Key Features:</b><br>
            • <b>Keystone</b> of cranial base, terraced structure (presphenoid higher than basisphenoid)<br>
            • <b>Foramen Orbitorotundum:</b> Pathognomonic for ruminants - fusion of foramen rotundum + orbital fissure<br>
            • Transmits: CN III, IV, VI, V1 (ophthalmic), V2 (maxillary)<br>
            • <b>Oval Foramen:</b> For V3 (mandibular nerve) - distinct in ox, absent as discrete foramen in horse<br>
            • <b>Sella Turcica:</b> Deep hypophyseal fossa (houses pituitary) with high thick dorsum sellae<br>
            • <b>NO Alar Canal:</b> Maxillary artery courses on surface (not through bone) - changes surgical approach`,

            eliteDesc: `<h3>The Cranial Base Keystone</h3>
            <p>The sphenoid bone acts as the keystone of the cranial base, situated rostral to the occipital bone. In the ox, the sphenoid is <b>terraced</b>, meaning the rostral portion (presphenoid) sits at a higher elevation than the caudal portion (basisphenoid), reflecting the kyphosis of the cranial base.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Basisphenoid (Os basisphenoidale):</b> The caudal segment. Its dorsal surface features the <b>sella turcica</b> (Turkish saddle), which houses the pituitary gland. The dorsum sellae in the ox is high and thick, creating a deep hypophyseal fossa compared to the horse. The wings (alae) spread laterally to articulate with the temporal bones, forming the oval foramen.</p>
            
            <p><b>Presphenoid (Os praesphenoidale):</b> The rostral segment. Its body is hollow, excavated by the sphenoidal sinus, which communicates with the nasal cavity through the ethmoid meatus. The wings of the presphenoid form the caudal orbital wall and contain the optic canals.</p>
            
            <p><b>Foramen Orbitorotundum:</b> This is a <b>pathognomonic feature of the ruminant skull</b>. In the ox, the foramen rotundum and the orbital fissure fuse to form a single, massive opening. This transmits Cranial Nerves III (Oculomotor), IV (Trochlear), VI (Abducent), and the ophthalmic (V1) and maxillary (V2) branches of the Trigeminal nerve.</p>
            
            <p><b>Oval Foramen (Foramen ovale):</b> A distinct foramen in the ox located in the wing of the basisphenoid, transmitting the mandibular nerve (CN V3). This is absent as a discrete foramen in the horse, where it is represented by a notch in the foramen lacerum.</p>
            
            <p><b>Alar Canal:</b> Absent in the ox. This means the maxillary artery courses on the surface of the pterygoid muscles rather than through a bony conduit, altering the approach for vascular ligation in this region compared to the horse.</p>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Foramen Orbitorotundum present (massive fusion of rotundum + orbital fissure). Alar Canal absent. Foramen Ovale present (large, discrete). Deep sella turcica with prominent hypophyseal fossa. Extremely large sphenoid sinus." },
                { species: "Horse (Equus caballus)", note: "Foramen Orbitorotundum present; similar to ruminants. Alar Canal present (transmits maxillary artery). Foramen Ovale present. Flat; shallow fossa. Communicates with ethmoid labyrinth." },
                { species: "Dog (Canis lupus)", note: "Orbital fissure and Foramen rotundum are separate (no fusion). Alar Canal present (transmits maxillary artery). Absent; replaced by large foramen lacerum. Distinct foramen ovale for CN V. Shallow; indistinct dorsum sellae. Communicates with palatine sinus." },
                { species: "Pig (Sus scrofa)", note: "Orbital fissure and Foramen rotundum are separate. Alar Canal present. Distinct foramen ovale present for CN V. Deep pituitary fossa. Often filled with marrow in small breeds." },
                { species: "Fowl (Gallus domesticus)", note: "Multiple separate foramina for cranial nerves (no fusion). Absent. Absent; replaced by incisura ovalis in foramen lacerum. Shallow; indistinct dorsum sellae. Absent; pneumatized by other systems." }
            ],

            clinical: "<b>Functional Context:</b> The absence of the Alar Canal in the ox means the maxillary artery courses on the surface of the pterygoid muscles rather than through a bony conduit, altering the approach for vascular ligation in this region compared to the horse."
        },
        {
            title: "Ethmoid Bone (Os ethmoidale)",
            desc: `<b>Revision Points:</b><br>
            • Complex cuboidal bone between orbits, separates nasal from cranial cavity<br>
            • <b>Cribriform plate:</b> Horizontal sieve-like plate perforated for olfactory fascicles (CN I)<br>
            • <b>Crista Galli:</b> Short, thick ridge (vs spine-like in pig) - anchor for falx cerebri<br>
            • <b>Perpendicular plate:</b> Forms caudal portion of nasal septum<br>
            • <b>Ethmoidal Labyrinth:</b> 5 endoturbinates, ~18 ectoturbinates<br>
            • <b>First endoturbinate:</b> Forms core of Dorsal Nasal Concha`,

            eliteDesc: `<h3>The Olfactory Center</h3>
            <p>The ethmoid is a complex, cuboidal bone located deep between the orbits, separating the nasal cavity from the cranial cavity. It is the osseous center for olfaction.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Cribriform Plate (Lamina cribrosa):</b> A horizontal sieve-like plate located at the deepest part of the cranial fossa. It is perforated by numerous foramina transmitting the olfactory nerve fascicles (CN I) from the nasal mucosa to the olfactory bulbs.</p>
            
            <p><b>Crista Galli:</b> A median, vertical bony ridge projecting into the cranial cavity from the cribriform plate. In the ox, it is distinct but relatively short and thick compared to the spine-like process in the pig. It serves as an anchor for the falx cerebri.</p>
            
            <p><b>Perpendicular Plate (Lamina perpendicularis):</b> A median vertical plate that extends rostrally to form the caudal osseous portion of the nasal septum. It articulates with the vomer ventrally and the frontal bone dorsally.</p>
            
            <p><b>Ethmoidal Labyrinth:</b> A dense mass of delicate bony scrolls known as ethmoturbinates:</p>
            <ul>
                <li><b>Endoturbinates:</b> The inner row of large scrolls. In the ox, there are usually <b>5 endoturbinates</b>. The first endoturbinate is enormous and forms the core of the Dorsal Nasal Concha.</li>
                <li><b>Ectoturbinates:</b> The outer row of smaller scrolls, numbering approximately <b>18 in the ox</b>.</li>
            </ul>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Large labyrinth; 5 endoturbinates, ~18 ectoturbinates. Crista galli present; thick and low ridge. Perpendicular plate extensive; forms large part of septum. Lateral masses (lamina papyracea) present. Deep olfactory fossae." },
                { species: "Horse (Equus caballus)", note: "Extensive labyrinth; 6 endoturbinates, ~25 ectoturbinates. Crista galli present; prominent. Perpendicular plate extensive. Deep." },
                { species: "Dog (Canis lupus)", note: "Complex labyrinth; 7 endoturbinates, ~20 ectoturbinates. Crista galli present; high and ridge-like. Perpendicular plate extensive. Very deep; houses large olfactory bulbs." },
                { species: "Pig (Sus scrofa)", note: "Massive labyrinth; highly complex lamellae for macrosmatic olfaction. Crista galli absent or vestigial. Perpendicular plate extensive. Deep." },
                { species: "Fowl (Gallus domesticus)", note: "Reduced; simple structure, olfaction is less critical. Very prominent; spine-like projection. Thin; membranous/cartilaginous. Small olfactory lobes." }
            ],

            clinical: "<b>Comparative Note on Fowl:</b> The avian ethmoid is simplified. The olfactory lobes are small, and the turbinates are less convoluted, reflecting the general reliance of birds on vision rather than olfaction (with exceptions like vultures or kiwi)."
        },
        {
            title: "Frontal Bone (Os frontale)",
            desc: `<b>Architectural Dominant:</b><br>
            • Forms <b>entire roof of skull</b> (displaces parietals to nuchal region)<br>
            • <b>Cornual Process:</b> Osseous core of horns, excavated by sinus (infection risk post-dehorning)<br>
            • <b>Supraorbital groove/foramen:</b> Often double in ox; transmits vein/nerve<br>
            • <b>Extensive pneumatization:</b> Frontal sinus invades parietal, interparietal, occipital<br>
            • <b>Temporal line:</b> Pushed laterally by expanded sinus<br>
            • <b>Clinical:</b> Complete bony orbit protects eye during grazing (carnivores have open orbit)`,

            eliteDesc: `<h3>The Architectural Dominant</h3>
            <p>In the bovine species, the frontal bone is the architectural dominant of the cranium. It forms the entire roof of the skull, extending from the nasofrontal suture rostrally to the nuchal crest caudally, effectively displacing the parietal bones to the back of the skull.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Cornual Process (Processus cornualis):</b> In horned breeds, the caudolateral angles of the frontal bone project to form the osseous core of the horns. This process is internally excavated by the <b>Cornual Diverticulum</b> of the frontal sinus. This connection is the pathway for pathogens causing frontal sinusitis following dehorning.</p>
            
            <p><b>Supraorbital Groove & Foramen:</b> A distinct longitudinal groove on the dorsal surface leads to the Supraorbital Foramen (often double in the ox). This transmits the supraorbital vein and nerve (branch of the ophthalmic nerve). The groove marks the lateral limit of the frontal sinus proper in the supraorbital region.</p>
            
            <p><b>Pneumatization:</b> The Frontal Sinus is vast in the ox, separating the internal and external plates of the bone. It is intricate, divided by bony septa, and extends into the cornual process, the nuchal region, and the parietal territories.</p>
            
            <p><b>Temporal Line:</b> A prominent, curved ridge bounding the temporal fossa dorsally. In the ox, this line is pushed laterally by the expanded sinus mass.</p>
            
            <p><b>Zygomatic Process:</b> Joins the zygomatic bone to complete the bony orbit caudally.</p>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Forms entire cranial roof; reaches nuchal crest. Present in horned breeds. Supraorbital foramen present (open groove/foramen, often double). Massive complex sinus with septa extending to horn core. Temporal line pushed laterally." },
                { species: "Horse (Equus caballus)", note: "Restricted to forehead; parietals form the roof. Absent. Supraorbital foramen present. Moderate; confined to frontal bone. Normal position." },
                { species: "Dog (Canis lupus)", note: "Restricted to forehead; parietals form the roof. Absent. Absent (Open orbit; orbital ligament replaces bone). Extensive; covers entire cranium. Normal position." },
                { species: "Pig (Sus scrofa)", note: "Flat/Concave dorsum; heavy supraorbital rim. Absent. Present (located at base of zygomatic process). Large; communicates directly with dorsal conchal sinus. Normal position." },
                { species: "Fowl (Gallus domesticus)", note: "Forms roof of orbit and braincase; fused with other bones. Absent. Absent. Absent/Spongy bone (pneumatized by air sacs). Part of temporal fossa rim (squamosal)." }
            ],

            clinical: "<b>Comparative Insight:</b> The 'complete bony orbit' of the ox and horse is a crucial adaptation for herbivores, providing robust protection for the eye against trauma during grazing in brush, unlike the 'open orbit' of the carnivore which allows for wider jaw opening (temporalis muscle expansion) without bony restriction."
        },
        {
            title: "Parietal & Interparietal Bones",
            desc: `<b>Exam Essentials:</b><br>
            • <b>Parietal:</b> Displaced to lateral/nuchal aspects only (do NOT form skull roof)<br>
            • Fused with interparietal and supraoccipital early in life<br>
            • <b>Interparietal:</b> Distinct in fetus, fuses quickly with parietals/occipital in calf<br>
            • Bears internal occipital protuberance (landmark for tentorium cerebelli)<br>
            • <b>Comparative:</b> In horse/dog, parietals form dorsal roof; in ox, frontal dominates roof`,

            eliteDesc: `<h3>Osteological Displacement</h3>
            <p>The parietal bones in the ox are a remarkable example of osteological displacement. Due to the massive caudal expansion of the frontal bones, the parietals are relegated to the lateral and nuchal aspects of the skull.</p>
            
            <h4>Parietal Bone (Os parietale)</h4>
            <p><b>Location:</b> They form the upper part of the lateral wall of the cranium, situated below the frontal bone and above the occipital bone. They do not form the skull roof (calvaria) as they do in the horse, dog, or human.</p>
            <p><b>Structure:</b> In the adult ox, they are fused with the interparietal and supraoccipital bones. The line of fusion is often indistinct.</p>
            <p><b>Temporal Line:</b> The parietal bone contributes to the temporal line, forming the upper boundary of the temporal fossa.</p>
            
            <h4>Interparietal Bone (Os interparietale)</h4>
            <p>Situated centrally between the parietal bones and the supraoccipital. In the ox, this bone is distinct in the fetus but undergoes rapid fusion.</p>
            <p><b>Ossification:</b> It ossifies from two centers but fuses quickly with the parietals and occipital in the calf.</p>
            <p><b>Internal Occipital Protuberance:</b> The internal surface bears this projection, which is located on the interparietal bone in the ox, serving as a landmark for the tentorium cerebelli.</p>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Parietals: Nuchal/Lateral aspect only; not dorsal. Fuses early with occipital/interparietal. Interparietal: Fuses internally with supraoccipital; rarely distinct in adults." },
                { species: "Horse (Equus caballus)", note: "Parietals: Dorsal; forms cranial roof. Fuses late; distinct sutures visible. Interparietal: Distinct in foals; fuses in adults but remains centrally located." },
                { species: "Dog (Canis lupus)", note: "Parietals: Dorsal; forms cranial roof. Fuses late; distinct sagittal suture. Interparietal: Often fuses with supraoccipital to form large triangular nuchal crest." },
                { species: "Pig (Sus scrofa)", note: "Parietals: Lateral/Nuchal; vertical orientation. Fuses early. Interparietal: Fuses early; indistinguishable." },
                { species: "Fowl (Gallus domesticus)", note: "Parietals: Fused with frontal/occipital. Fuses very early; sutures invisible. Interparietal: Absent or completely fused in embryo; no sutural trace." }
            ],

            clinical: null
        },
        {
            title: "Temporal Bone (Os temporale)",
            desc: `<b>Key Components:</b><br>
            • <b>Squamous part:</b> Mandibular fossa is <b>saddle-shaped</b> (convex-concave) for lateral grinding<br>
            • <b>Petrous part:</b> Hardest bone in body, houses cochlea/vestibular apparatus<br>
            • <b>Tympanic part:</b> Bulla tympanica (laterally compressed, rough, less bulbous than carnivores)<br>
            • <b>Hyoid process:</b> Sheath-like projection enclosing stylohyoid bone<br>
            • <b>Comparative:</b> Fowl lacks TMJ - has quadrate bone instead (kinetic skull)`,

            eliteDesc: `<h3>Composite Structure</h3>
            <p>A complex composite bone forming the lateral wall of the cranial cavity and housing the auditory and vestibular apparatus. It results from the fusion of the squamous, petrous, and tympanic parts.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Squamous Part:</b> Forms the lateral wall of the cranium. It features the <b>mandibular fossa</b> for articulation with the mandible (TMJ). In the ox, this fossa is saddle-shaped (convex-concave) to allow for lateral grinding movements. The zygomatic process projects forward to overlap the temporal process of the zygomatic bone, forming the zygomatic arch.</p>
            
            <p><b>Petrous Part:</b> The hardest bone in the body, housing the cochlea and vestibular apparatus. It projects into the cranial cavity and is not visible externally.</p>
            
            <p><b>Tympanic Part:</b> Forms the Bulla Tympanica (osseous bulla). In the ox, the bulla is laterally compressed, rough, and less bulbous than in carnivores. It bears the external acoustic meatus, which faces laterally.</p>
            
            <p><b>Hyoid Process:</b> The styloid process (vagina processus styloidei) is a sheath-like bony projection that encloses the root of the stylohyoid bone of the hyoid apparatus.</p>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Tympanic bulla compressed laterally; rough surface. Zygomatic process curved; forms wide arch. Small mastoid process; part of nuchal line. Glenoid fossa (TMJ) concave-convex. External acoustic meatus directed laterally." },
                { species: "Horse (Equus caballus)", note: "Tympanic bulla large, bulbous, smooth (shell-like). Zygomatic process short; overlaps zygomatic bone. Small but distinct mastoid process. Convex/Concave; allows lateral grinding. Directed laterally." },
                { species: "Dog (Canis lupus)", note: "Tympanic bulla very large; elongated vertically; flask-shaped. Zygomatic process long; overlaps zygomatic bone. Very long and distinct mastoid process. Convex/Concave; allows grinding. Directed dorsolaterally." },
                { species: "Pig (Sus scrofa)", note: "Tympanic bulla distinct; fused with paraoccipital. Zygomatic process short; robust mastoid. Distinct. Deep groove; strictly hinge-like (ginglymus). Directed ventrolaterally." },
                { species: "Fowl (Gallus domesticus)", note: "Tympanic bulla absent (analogous structures differ). Part of temporal fossa rim (squamosal). Absent. Articulates via Quadrate bone (not TMJ). Not applicable." }
            ],

            clinical: "<b>Comparative Insight (Fowl):</b> Birds lack a direct Temporomandibular Joint (TMJ). Instead, the temporal region articulates with the Quadrate bone, which in turn articulates with the mandible. This 'Quadrato-articular' joint is key to the kinetic skull of the bird, allowing the upper beak to flex upward when the mandible opens—a mechanism absent in mammals."
        },
        {
            title: "Maxilla (Os maxillare)",
            desc: `<b>Principal Upper Jaw Bone:</b><br>
            • <b>Facial tuberosity:</b> Knob-like elevation above 3rd/4th cheek tooth (bovine equivalent of horse's facial crest)<br>
            • <b>Infraorbital foramen:</b> Single (occasionally double), dorsal to first cheek tooth<br>
            • <b>No upper incisors/canines:</b> Only cheek teeth present (dental pad instead)<br>
            • <b>Maxillary sinus:</b> Extensive, extends into palatine/lacrimal<br>
            • <b>Drainage issue:</b> Nasomaxillary opening is high on medial wall (gravity drainage poor)<br>
            • <b>Palatine process:</b> Forms major portion of hard palate`,

            eliteDesc: `<h3>The Facial Skeleton Anchor</h3>
            <p>The maxilla is the principal bone of the upper jaw, carrying the upper cheek teeth (premolars and molars) and forming the lateral walls of the nasal cavity.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Facial Tuberosity (Tuber faciale):</b> A prominent, knob-like rough elevation on the lateral surface, situated above the 3rd or 4th cheek tooth. It serves as an attachment for the buccinator muscle. It is the bovine equivalent of the facial crest in the horse but is less ridge-like.</p>
            
            <p><b>Infraorbital Foramen:</b> Located dorsal to the first cheek tooth; it acts as the exit point for the infraorbital nerve and artery. In the ox, it is single (occasionally double).</p>
            
            <p><b>Alveolar Process:</b> A thick ridge housing the roots of the upper cheek teeth. The ox has no upper incisors or canines; thus, the maxilla lacks alveoli in the rostral region.</p>
            
            <p><b>Maxillary Sinus:</b> A large diverticulum housed within the maxilla. It extends into the palatine bone and the lacrimal bulla. It communicates with the nasal cavity via the nasomaxillary opening, which is situated high on the medial wall, making gravity drainage of pus difficult.</p>
            
            <p><b>Palatine Process:</b> Forms the major portion of the hard palate, fusing with the counterpart at the median palatine suture.</p>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Facial tuberosity knob-like. Single infraorbital foramen above 3rd premolar. 6 cheek teeth (no incisors/canines). Extensive sinus continuous with palatine. Shape: Short and broad." },
                { species: "Horse (Equus caballus)", note: "Facial crest prominent sharp ridge. Single infraorbital foramen above 3rd premolar. 6 cheek teeth + canines (male). Divided into rostral/caudal compartments. Long and narrow." },
                { species: "Dog (Canis lupus)", note: "Smooth surface (no crest). Multiple small foramina. Premolars + Molars + Canines. Small. Long and robust." },
                { species: "Pig (Sus scrofa)", note: "Prominent ridge above canine. Single; above 1st cheek tooth. PM + M + Canines. Large recess rather than true sinus. Short (brachy) to Long (dolicho)." },
                { species: "Fowl (Gallus domesticus)", note: "Absent. Single; above 3rd cheek tooth. Edentulous (no teeth). Pneumatized (antorbital sinus). Slender rod-like (part of upper beak)." }
            ],

            clinical: "<b>Clinical Relevance:</b> Infection from the upper cheek teeth (PM4, M1, M2, M3) can break into the maxillary sinus, causing empyema (pus accumulation). Trephination is performed dorsal to the facial tuberosity, avoiding the nasolacrimal duct and the infraorbital nerve."
        },
        {
            title: "Incisive & Nasal Bones",
            desc: `<b>Incisive Bone (Premaxilla):</b><br>
            • Rostral tip of skull, forms muzzle support<br>
            • <b>Edentulous:</b> Flattened, no alveoli (supports dental pad)<br>
            • <b>Nasoincisive notch:</b> Gap where nasal process doesn't reach nasal bone<br>
            • <b>Interincisive fissure:</b> Gap between incisive bones<br>
            <br><b>Nasal Bones:</b><br>
            • Short, <b>bifid</b> (split) at rostral apex<br>
            • Often does not articulate with incisive bone (creates notch)<br>
            • Forms roof of nasal cavity`,

            eliteDesc: `<h3>Incisive Bone (Os incisivum / Premaxilla)</h3>
            <p>Located at the rostral tip of the skull, the incisive bone forms the skeletal support for the muzzle and the upper dental pad.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Body:</b> In the ox, the body is flattened and lacks alveoli because ruminants have no upper incisors. Instead, it supports the dense fibrous dental pad against which the lower incisors grind.</p>
            
            <p><b>Nasal Process:</b> Extends caudally to articulate with the maxilla and nasal bone. In the ox, there is often a nasoincisive notch where the nasal process does not fully articulate with the nasal bone, leaving a gap.</p>
            
            <p><b>Palatine Process:</b> Forms the rostral tip of the hard palate.</p>
            
            <p><b>Interincisive Fissure:</b> A distinct gap between the nasal process of the incisive bone and the maxilla, covered in life by mucosa.</p>
            
            <h3>Nasal Bone (Os nasale)</h3>
            <p>Paired bones forming the roof of the nasal cavity.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Shape:</b> In the ox, the nasal bones are relatively short and bifid (split) at the rostral end (apex), creating a double-point appearance.</p>
            <p><b>Articulation:</b> Articulates caudally with the frontal bone and laterally with the maxilla. Unlike the horse, it often does not articulate with the incisive bone rostrally, contributing to the nasoincisive notch.</p>
            <p><b>Dorsal Surface:</b> Smooth and convex.</p>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Incisive: Absent teeth (dental pad). Body thin, flattened, fragile. Nasal process does not always reach nasal bone (notch present). Nasal: Apex bifid (notched). Short (compared to head length). Floating rostrally (nasoincisive notch)." },
                { species: "Horse (Equus caballus)", note: "Incisive: 3 incisors present. Strong, thick body. Articulates with nasal bone. Nasal: Apex pointed. Very long. Articulates with incisive bone." },
                { species: "Dog (Canis lupus)", note: "Incisive: 3 incisors present. Small, compressed. Articulates with nasal bone. Nasal: Truncated/Notched. Variable (breed dependent). Articulates with incisive bone." },
                { species: "Pig (Sus scrofa)", note: "Incisive: 3 incisors present. Very strong, snout-like. Articulates with nasal bone. Nasal: Long. Very narrow. Firmly united to incisive." },
                { species: "Fowl (Gallus domesticus)", note: "Incisive: Absent (forms beak tip). Fused, sharp tip. Nasal: Thin, flexible. Fused with Frontal (Kinetic hinge - nasofrontal hinge allows prokinesis)." }
            ],

            clinical: "<b>Fowl Comparison:</b> The nasal bone in chickens forms a nasofrontal hinge with the frontal bone. This is a synovial syndesmosis that allows the upper beak to flex upward relative to the braincase (prokinesis), a key adaptation for avian feeding."
        },
        {
            title: "Lacrimal & Zygomatic Bones",
            desc: `<b>Lacrimal Bone:</b><br>
            • <b>Lacrimal bulla:</b> Unique thin-walled protuberance inside orbit containing sinus<br>
            • <b>Clinical:</b> Fragile - damage during enucleation causes sinusitis<br>
            • Large facial plate, extensive on face<br>
            • Nasolacrimal canal entrance on orbital surface<br>
            <br><b>Zygomatic Bone (Malar):</b><br>
            • Forms ventral orbital margin, rostral zygomatic arch<br>
            • <b>Complete bony orbit:</b> Frontal process joins frontal bone (unlike dog/pig)<br>
            • Extensive facial surface reaching facial tuberosity`,

            eliteDesc: `<h3>Lacrimal Bone (Os lacrimale)</h3>
            <p>Located at the anterior margin of the orbit, articulating with the frontal, zygomatic, and maxillary bones.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Lacrimal Bulla (Bulla lacrimalis):</b> A unique, thin-walled bony protuberance inside the orbit of the ox. It is fragile and contains the lacrimal sinus, a posterior extension of the maxillary sinus. Damage to this bulla during enucleation can lead to sinus infection.</p>
            <p><b>Facial Plate:</b> Large and flat on the face, extending rostrally.</p>
            <p><b>Orbital Plate:</b> Forms the medial wall of the orbit.</p>
            <p><b>Nasolacrimal Canal:</b> The entrance (fossa) leads to the duct carrying tears to the nose. In the ox, it is situated on the orbital surface.</p>
            
            <h3>Zygomatic Bone (Os zygomaticum / Malar)</h3>
            <p>Forms the ventral margin of the orbit and the rostral part of the zygomatic arch.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Facial Surface:</b> Extensive in the ox, extending rostrally to the facial tuberosity.</p>
            <p><b>Frontal Process:</b> Projects dorsally to articulate with the zygomatic process of the frontal bone. This articulation completes the bony orbit caudally, a key distinction from carnivores where the orbit is open.</p>
            <p><b>Temporal Process:</b> Extends caudally to meet the zygomatic process of the temporal bone, forming the zygomatic arch.</p>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Lacrimal: Bulla present (large, fragile). Facial part large. Lacrimal fossa near orbital rim. Zygomatic: Complete orbit (joins frontal). Bifurcated (frontal/temporal procs). Large/broad." },
                { species: "Horse (Equus caballus)", note: "Lacrimal: Absent bulla. Small facial part. Funnel-like; inside orbit. Zygomatic: Complete orbit. Blade-like. Large." },
                { species: "Dog (Canis lupus)", note: "Lacrimal: Absent bulla. Very small (mostly orbital). On orbital rim. Zygomatic: Incomplete orbit (ligamentous closure). Curved bar. Small." },
                { species: "Pig (Sus scrofa)", note: "Lacrimal: Absent bulla. Small. Two foramina usually. Zygomatic: Incomplete orbit (ligamentous closure). Robust. Massive." },
                { species: "Fowl (Gallus domesticus)", note: "Lacrimal: Absent (different drainage). Large (Prefrontal bone). Absent. Zygomatic: Incomplete orbit (jugal bone). Rod-like (jugal). Very thin/rod-like." }
            ],

            clinical: "<b>Clinical Warning:</b> The lacrimal bulla in the ox is thin-walled and easily damaged during surgical procedures such as enucleation (eye removal). Damage can lead to sinusitis as the bulla connects to the maxillary sinus system."
        },
        {
            title: "Palatine, Pterygoid & Vomer",
            desc: `<b>Palatine Bone:</b><br>
            • Horizontal plate: Forms posterior 1/4 of hard palate<br>
            • Extensively pneumatized (palatine sinus)<br>
            • Greater/lesser palatine foramina (nerves/vessels)<br>
            <br><b>Pterygoid Bone:</b><br>
            • Thin strap-like bone on lateral side of choanae<br>
            • <b>Hamulus:</b> Sharp hook-like process for tensor veli palatini pulley<br>
            <br><b>Vomer:</b><br>
            • Unpaired, forms ventral nasal septum<br>
            • Sulcus septi nasi (groove for cartilage)<br>
            • Free sharp caudal border separating choanae`,

            eliteDesc: `<h3>Palatine Bone (Os palatinum)</h3>
            <p>Forms the caudal portion of the hard palate and the lateral wall of the choanae (posterior nares).</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Horizontal Plate:</b> Forms the posterior 1/4 of the hard palate. In the ox, this plate is extensive and hollowed by the Palatine Sinus, which communicates with the maxillary sinus.</p>
            <p><b>Perpendicular Plate:</b> Forms the lateral wall of the nasal cavity caudal to the maxilla. It helps bound the Pterygopalatine fossa.</p>
            <p><b>Foramina:</b> The Greater and Lesser Palatine foramina are located here, transmitting the palatine nerves and vessels to the hard palate.</p>
            
            <h3>Pterygoid Bone (Os pterygoideum)</h3>
            <p>A thin, strap-like bone lying on the lateral side of the choanae.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Hamulus (Hamulus pterygoideus):</b> A thin, hook-like process at the ventral end. It acts as a pulley for the tendon of the tensor veli palatini muscle. In the ox, the hamulus is sharp and distinct.</p>
            <p><b>Structure:</b> In the ox, it is a distinct, thin plate overlapping the pterygoid process of the sphenoid.</p>
            
            <h3>Vomer (Vomer)</h3>
            <p>An unpaired bone forming the ventral part of the nasal septum.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Sulcus Septi Nasi:</b> A deep groove on the dorsal border that receives the cartilaginous nasal septum.</p>
            <p><b>Posterior Border:</b> Free, sharp, and concave, separating the two choanae (posterior nostrils). In the ox, the vomer is deeply grooved and extends far caudally. It sits on the floor of the nasal cavity but does not fuse with the maxilla along its entire length, leaving a gap.</p>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Palatine: Large, pneumatized. Pterygoid: Large, distinct sharp hook. Late fusion. Vomer: Deeply grooved; free caudal border sharp." },
                { species: "Horse (Equus caballus)", note: "Palatine: Narrow; pneumatized. Pterygoid: Distinct grooved hook. Late fusion. Vomer: Fuses with palatine process." },
                { species: "Dog (Canis lupus)", note: "Palatine: Wide; not pneumatized. Pterygoid: Short, quadrate; blunt. Early fusion. Vomer: High vertical plate." },
                { species: "Pig (Sus scrofa)", note: "Palatine: Extensive. Pterygoid: Broad plate. Late fusion. Vomer: Long and broad." },
                { species: "Fowl (Gallus domesticus)", note: "Palatine: Long thin rods; crucial for cranial kinesis. Pterygoid: Rod-like; articulates with Quadrate. Mobile joint. Vomer: Vestigial or absent; thin vertical plate when present." }
            ],

            clinical: "<b>Avian Adaptation:</b> In fowl, the palatine bones are long thin rods articulating with the pterygoids and are crucial for cranial kinesis (transmitting force to move the upper beak)."
        },
        {
            title: "Mandible & Hyoid Apparatus",
            desc: `<b>Mandible (Lower Jaw):</b><br>
            • Only mobile skull bone<br>
            • <b>Symphysis:</b> Ossifies very late/never fully (allows independent movement of halves)<br>
            • <b>Diastema:</b> Large gap between incisors and cheek teeth<br>
            • <b>Coronoid process:</b> Long, curves caudally (for temporalis)<br>
            • <b>Condyle:</b> Saddle-shaped for TMJ<br>
            • <b>Angle:</b> Expanded, rough for masseter/pterygoid insertion<br>
            <br><b>Hyoid Apparatus:</b><br>
            • Stylohyoid: Largest, flattened, muscular angle present<br>
            • <b>Lingual process:</b> Short, tuberous in ox (vs long spur in horse)<br>
            • Supports tongue and larynx`,

            eliteDesc: `<h3>Mandible (Mandibula)</h3>
            <p>The lower jaw; the only mobile bone of the skull.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Symphysis:</b> The joint between the two halves (mandibular synchondrosis). In the ox, this ossifies very late or never fully, allowing some independent movement of the halves.</p>
            <p><b>Diastema:</b> The large gap between the incisors (only lower incisors are present) and the cheek teeth.</p>
            <p><b>Coronoid Process:</b> Long and curves caudally for insertion of the temporalis muscle.</p>
            <p><b>Condylar Process:</b> Concave-convex articular surface for the TMJ.</p>
            <p><b>Angle:</b> The angle of the mandible is expanded and rough for the insertion of the masseter and pterygoid muscles (chewing muscles).</p>
            
            <h3>Hyoid Apparatus (Apparatus hyoideus)</h3>
            <p>A series of bony rods suspending the tongue and larynx from the skull.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Stylohyoid (Stylohyoideum):</b> The largest element in the ox. It is flattened and has a distinct muscular angle near its proximal end.</p>
            <p><b>Epihyoid:</b> Short and cylindrical.</p>
            <p><b>Ceratohyoid:</b> Rod-like.</p>
            <p><b>Basihyoid:</b> The transverse bar connecting the two sides.</p>
            <p><b>Lingual Process:</b> Projects rostrally from the basihyoid into the tongue. In the ox, this is short and tuberous, distinguishing it sharply from the horse.</p>
            <p><b>Thyrohyoid:</b> Connects to the thyroid cartilage of the larynx.</p>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Mandible: Symphysis ossifies very late/never fully. 8 Incisors, 6 Cheek teeth. Coronoid long curved. Saddle-shaped condyle. Large rounded rough angle. Hyoid: Stylohyoid large with angle. Lingual process short, blunt, tuberous." },
                { species: "Horse (Equus caballus)", note: "Mandible: Fibrous symphysis (never fuses). 6 Incisors, 6 Cheek teeth. Coronoid long slender (for temporalis). Convex condyle. Hooked angular process. Hyoid: Stylohyoid large with angle. Lingual process very long, spur-like." },
                { species: "Dog (Canis lupus)", note: "Mandible: Fuses early. I, C, PM, M. Coronoid short small. Cylindrical hinge condyle. Hyoid: Small nodule or fused. Lingual process absent/vestigial." },
                { species: "Pig (Sus scrofa)", note: "Mandible: Fused into single bone. I, C, PM, M. Coronoid wide high. Large rounded condyle. Hyoid: Long distinct bone. Curved rod lingual process." },
                { species: "Fowl (Gallus domesticus)", note: "Mandible: Fuses completely in adult. Edentulous (beak). Surangular distinct bone. Retroarticular process. Articulates with Quadrate. Hyoid: Entoglossal bone supports tongue. Extremely long apparatus curling around skull." }
            ],

            clinical: "<b>Fowl Note:</b> The avian hyoid apparatus is extremely long, curling around the back of the skull in species like woodpeckers, but less so in the fowl. It includes the entoglossal bone inside the tongue, a unique avian feature."
        },
        {
            title: "Nasal Turbinates (Conchae)",
            desc: `<b>Scroll-like Bones in Nasal Cavity:</b><br>
            • Increase surface area for warming/filtering air<br>
            • <b>Dorsal Nasal Concha:</b> Single scroll (from 1st endoturbinate)<br>
            • <b>Ventral Nasal Concha:</b> <b>Double scroll</b> (dorsal + ventral rolls) - unlike horse (single)<br>
            • <b>Middle Concha:</b> Smaller, between dorsal and ventral<br>
            • Highly vascular mucosa<br>
            • <b>Ox:</b> 5 endoturbinates, ~18 ectoturbinates total`,

            eliteDesc: `<h3>The Turbinates (Conchae nasales)</h3>
            <p>Delicate, scroll-like bones within the nasal cavity that increase surface area for warming air and filtration.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Dorsal Nasal Concha:</b> Formed by the first endoturbinate of the ethmoid bone. It is a single scroll.</p>
            <p><b>Ventral Nasal Concha:</b> A separate bone (maxilloturbinate) attached to the maxilla. In the ox, it is a <b>double scroll</b> (rolls dorsal and ventral), unlike the horse which has a single scroll dorsally.</p>
            <p><b>Middle Concha:</b> Smaller, situated between the dorsal and ventral conchae.</p>
            
            <p>The ethmoidal labyrinth contains:</p>
            <ul>
                <li><b>5 Endoturbinates</b> (inner row)</li>
                <li><b>~18 Ectoturbinates</b> (outer row)</li>
            </ul>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Ventral concha is double scroll. Highly vascular. 5 endoturbinates, ~18 ectoturbinates." },
                { species: "Horse (Equus caballus)", note: "Ventral concha double scroll. Dorsal concha encloses large sinus. 6 endoturbinates, ~25 ectoturbinates." },
                { species: "Dog (Canis lupus)", note: "Extremely complex branching (lamellae) for macrosmatic olfaction. 7 endoturbinates, ~20 ectoturbinates." },
                { species: "Pig (Sus scrofa)", note: "Similar to ox; long and narrow turbinates." },
                { species: "Fowl (Gallus domesticus)", note: "Simplified into three cartilaginous/bony folds (rostral, middle, caudal)." }
            ],

            clinical: null
        },
        {
            title: "Frontal & Maxillary Sinuses",
            desc: `<b>Frontal Sinus:</b><br>
            • Most clinically significant sinus in ox<br>
            • Complex system (not simple cavity)<br>
            • <b>Cornual diverticulum:</b> Extends into horn core (opened during dehorning = infection risk)<br>
            • Nuchal and postorbital diverticula<br>
            • Divided by oblique septum into rostral (minor) and caudal (major)<br>
            • Poor drainage (complex meatus communication)<br>
            <br><b>Maxillary Sinus:</b><br>
            • Within maxilla, lacrimal, zygomatic bones<br>
            • Communicates with nasal cavity via high nasomaxillary opening (gravity drainage difficult)<br>
            • Communicates with palatine and lacrimal sinuses`,

            eliteDesc: `<h3>The Paranasal Sinuses</h3>
            <p>The bovine skull is heavily pneumatized. The sinuses are diverticula of the nasal cavity lined with mucous membrane.</p>
            
            <h4>A. The Frontal Sinus (Sinus frontalis)</h4>
            <p>The most clinically significant sinus in the ox. It is not a simple cavity but a complex system of intercommunicating compartments.</p>
            
            <p><b>Boundaries:</b> Extends from the rostral third of the orbit to the nuchal crest, and laterally into the horn core.</p>
            
            <p><b>Diverticula:</b></p>
            <ul>
                <li><b>Cornual Diverticulum:</b> Extends into the process of the horn. <i>Clinical Note: Dehorning in adult cattle opens this sinus, creating a direct portal for infection (frontal sinusitis).</i></li>
                <li><b>Nuchal Diverticulum:</b> Extends caudally into the nuchal region.</li>
                <li><b>Postorbital Diverticulum:</b> Located behind the orbit.</li>
            </ul>
            
            <p><b>Compartmentalization:</b> It is divided into a Rostral Frontal Sinus (minor) and a Caudal Frontal Sinus (major) by an oblique septum. The caudal sinus communicates with the nasal cavity.</p>
            <p><b>Drainage:</b> Drains intricately into the ethmoid meatus. Drainage is poor due to the complex anatomy.</p>
            
            <h4>B. The Maxillary Sinus (Sinus maxillaris)</h4>
            <p>Located within the maxilla, lacrimal, and zygomatic bones.</p>
            <p><b>Boundaries:</b> Anteriorly by the facial tuberosity; posteriorly by the bulla lacrimalis.</p>
            <p><b>Communication:</b> Communicates with the nasal cavity via the Nasomaxillary Opening (high in location, making natural drainage difficult). It also communicates with the palatine and lacrimal sinuses.</p>
            
            <h4>C. Surgical Trephination Points</h4>
            <p><b>Frontal Sinus:</b> To drain the caudal frontal sinus, a trephine hole is placed approximately 2cm from the midline on a line connecting the centers of the orbits. Alternatively, post-dehorning drainage occurs through the horn stump.</p>
            <p><b>Maxillary Sinus:</b> Trephination is performed dorsal to the facial tuberosity, avoiding the nasolacrimal duct and the infraorbital nerve.</p>`,

            comparative: [],
            clinical: "<b>Clinical Relevance:</b> Infection from the upper cheek teeth (PM4, M1, M2, M3) can break into the maxillary sinus, causing empyema (pus accumulation). The complexity of the frontal sinus compartments dictates the approach to treating sinusitis and horn fractures."
        },
        {
            title: "Pterygopalatine & Temporal Fossae",
            desc: `<b>Pterygopalatine Fossa:</b><br>
            • Deep space ventral to orbit, deep to zygomatic arch<br>
            • <b>Boundaries:</b> Maxillary tuberosity (ant), pterygoid process (post), palatine perpendicular plate (medial)<br>
            • <b>Contains:</b> Maxillary nerve (V2), Maxillary artery, Pterygopalatine ganglion<br>
            • <b>Clinical:</b> Target for <b>Peterson Eye Block</b> (enucleation anesthesia)<br>
            • Entry: Foramen orbitorotundum<br>
            <br><b>Temporal Fossa:</b><br>
            • Depression lateral to neurocranium, posterior to orbit<br>
            • Filled entirely by Temporalis muscle<br>
            • Displaced laterally by frontal sinus expansion in ox`,

            eliteDesc: `<h3>Clinical Zones</h3>
            
            <h4>The Pterygopalatine Fossa (Fossa pterygopalatina)</h4>
            <p>A deep, clinically critical space located ventral to the orbit and deep to the zygomatic arch.</p>
            
            <p><b>Boundaries:</b></p>
            <ul>
                <li><b>Anterior:</b> Maxillary tuberosity</li>
                <li><b>Posterior:</b> Pterygoid process of sphenoid</li>
                <li><b>Medial:</b> Perpendicular plate of palatine bone</li>
            </ul>
            
            <p><b>Contents:</b></p>
            <ol>
                <li><b>Maxillary Nerve (CN V2):</b> Branches into the infraorbital, zygomatic, and pterygopalatine nerves.</li>
                <li><b>Maxillary Artery:</b> The terminal branch of the external carotid artery.</li>
                <li><b>Pterygopalatine Ganglion:</b> Parasympathetic ganglion.</li>
            </ol>
            
            <p><b>Foramina Openings:</b></p>
            <ul>
                <li><b>Foramen Orbitorotundum:</b> Entry of nerves from cranium.</li>
                <li><b>Maxillary Foramen:</b> Entry to infraorbital canal.</li>
                <li><b>Sphenopalatine Foramen:</b> To nasal cavity.</li>
                <li><b>Caudal Palatine Foramen:</b> To hard palate.</li>
            </ul>
            
            <p><b>Clinical Significance:</b> This is the target site for the <b>Peterson Eye Block</b>, a local anesthesia technique used for enucleation (removal of the eye). The needle is directed into this fossa to block the maxillary and ophthalmic nerves.</p>
            
            <h4>The Temporal Fossa (Fossa temporalis)</h4>
            <p>The depression on the lateral side of the neurocranium, posterior to the orbit.</p>
            <p><b>Boundaries:</b> Medially by the parietal/frontal bones; laterally by the zygomatic arch.</p>
            <p><b>Content:</b> Filled entirely by the Temporalis muscle.</p>
            <p><b>Comparative Note:</b> Deep in the ox and dog; shallow in the horse. In the ox, it is displaced laterally by the frontal sinus expansion.</p>`,

            comparative: [],
            clinical: "<b>Critical Landmark:</b> The Pterygopalatine Fossa is the target for the Peterson Eye Block. The specific location of the foramen orbitorotundum and this fossa are critical for nerve blocks in veterinary practice."
        },
        {
            title: "Cervical Vertebrae (C1-C7) — Bones of the Neck",
            desc: "<b>High-Yield Points:</b><br>• <b>All mammals have 7 cervical vertebrae</b> — from mouse to giraffe to whale (true even in long-necked species).<br>• <b>C1 = Atlas</b> — ring-shaped, NO body, NO spinous process. Carries the skull.<br>• <b>C2 = Axis</b> — has a tooth-like <b>DENS (odontoid process)</b> pointing forward into atlas. Massive spinous process.<br>• <b>C3-C5 = 'Typical'</b> cervical vertebrae — long body, big transverse processes with foramen transversarium for vertebral artery & vein.<br>• <b>C6</b> — has a distinct ventral plate-like 'ventral lamina' on each side.<br>• <b>C7</b> — last cervical; no foramen transversarium; spinous process becomes prominent (boundary with thorax).<br><br>The wings of atlas + spinous process of C2 are the most palpable bony landmarks of the neck.",
            eliteDesc: "<b>CERVICAL VERTEBRAE — DETAILED ANATOMY (B.V.Sc UG)</b><br><br><b>UNIVERSAL RULE:</b> All mammals have <b>7 cervical vertebrae (C1-C7)</b> — regardless of neck length. The giraffe has 7 (each ~28 cm long); the mouse has 7 (each ~2 mm). The only exceptions: manatees and 2-toed sloths (6); 3-toed sloths (8-9).<br><br><b>I. C1 — ATLAS (Atlas vertebra):</b><br>The first vertebra.<br>• <b>Shape:</b> Bony ring; NO body, NO spinous process.<br>• Two large lateral <b>wings (alae atlantis)</b> — palpable behind the ear, the most prominent neck landmark.<br>• <b>Cranial articular foveae</b> — two concave surfaces that grip the occipital condyles of skull → atlanto-occipital joint (nodding 'YES').<br>• <b>Caudal articular foveae</b> — articulate with axis.<br>• <b>Fovea dentis</b> — small concave facet on the ventral arch where the dens of axis pivots.<br>• <b>Foramina:</b> vertebral foramen (large, for spinal cord) + 2 lateral vertebral foramina + 1 alar foramen (transmits vertebral artery + 1st cervical nerve).<br>• <b>Atlas wing site = atlanto-occipital CSF tap (cisterna magna)</b>.<br><br><b>II. C2 — AXIS (Axis / Epistropheus):</b><br>The longest cervical vertebra; bears the weight of the head's rotation.<br>• <b>Body:</b> Long, prominent.<br>• <b>Dens (odontoid process / processus dentis)</b> — tooth-like projection on the cranial end of the body; sits in the atlas ring as a pivot for atlas to rotate around (head 'NO' movement).<br>  – Held in place by <b>apical, alar, and transverse ligaments</b>.<br>• <b>Spinous process</b> — massive, plate-like; largest spine of any cervical vertebra in ox/horse.<br>• <b>Transverse foramen</b> small.<br>• Articulates cranially with atlas, caudally with C3.<br><br><b>III. C3, C4, C5 — TYPICAL CERVICAL VERTEBRAE:</b><br>The 'standard' cervical vertebrae.<br>• <b>Body:</b> Long (longest in horse), with convex cranial end (head) + concave caudal end (fossa) — saddle-shaped articulation.<br>• <b>Spinous process:</b> Short and obtuse (becomes progressively taller from C3 → C7).<br>• <b>Transverse processes:</b> Long, plate-like, with two divergent branches (dorsal + ventral); pierced by the <b>foramen transversarium</b> for the vertebral artery, vein and nerve.<br>• <b>Articular processes:</b> Large and flat — facet joints.<br><br><b>IV. C6 — THE 'VENTRAL CREST' VERTEBRA:</b><br>• Body slightly shorter.<br>• <b>Ventral lamina/plate</b> — a large flat ventral extension on each transverse process, characteristic of C6. Major attachment for longus colli & scalene muscles.<br>• Transverse foramen present.<br><br><b>V. C7 — TRANSITION TO THORAX:</b><br>• Last cervical; called <b>vertebra prominens</b> in humans because of its big spinous process.<br>• <b>NO foramen transversarium</b> (vertebral artery has already left the cervical chain).<br>• <b>NO ventral lamina</b>.<br>• Caudal articular surface articulates with the 1st rib head → starts the thoracic skeleton.<br>• Spinous process tall and pointed.<br><br><b>VI. INTERVERTEBRAL JOINTS:</b><br>• Body-to-body: cartilaginous symphyses with <b>intervertebral discs</b> — cervical discs are the LARGEST in the body (~25% of vertebral length).<br>• Facet joints: synovial.<br>• Allow great flexibility (especially flexion-extension at AO joint, rotation at AA joint).<br><br><b>VII. PALPABLE LANDMARKS ON THE LIVE COW:</b><br>• <b>Wings of atlas</b> — protrude laterally behind the ear; #1 neck landmark.<br>• <b>Spinous process of axis</b> — palpable just behind the atlas.<br>• <b>Transverse processes of C5-C7</b> — palpable in thin animals along the lower neck.",
            comparative: [
                { species: "Horse", note: "Long cervical bodies → very flexible long neck. Wings of atlas projecting widely. The 'flexion' point for headset is at AO joint." },
                { species: "Ox", note: "Shorter, broader cervical bodies than horse. Massive spine of axis." },
                { species: "Dog", note: "Cervical discs are common site of disc disease ('cervical IVDD') — paresis, neck pain. Wobbler syndrome in Great Danes/Dobermans involves caudal cervical malformation." },
                { species: "Pig", note: "Cervicals short and stout; neck movement limited." },
                { species: "Fowl", note: "Number of cervicals varies (13-25 depending on species). Each vertebra is heterocoelous (saddle-shaped) — allows the bird to turn its head ~270° (especially owls)." }
            ],
            clinical: "<b>Atlanto-Axial Subluxation (Toy Dogs):</b> Yorkie / Toy Poodle puppies — congenital absence or fracture of the dens → atlas slips on axis → spinal cord compression → tetraparesis. Surgical fixation needed. <b>Cervical IVDD (Dog):</b> Disc herniation between C2-C7 — neck pain + thoracic-limb lameness. <b>Wobbler Syndrome (Horse, Great Dane, Doberman):</b> Caudal cervical instability with cord compression — ataxia. <b>CSF Tap Sites:</b> Atlanto-occipital (cisterna magna) — needle on dorsal midline between occiput and wings of atlas. <b>Vertebral Artery Damage:</b> Trauma to wings of atlas can rupture the vertebral artery as it passes through the alar foramen.",
            imgCode: "cervical_vertebrae"
        }
    ],

    "Myology": [
        {
            title: "Cutaneous & Facial Muscles (Mimetic / Expression)",
            desc: "<b>High-Yield Points:</b><br>• Thin sheet-like muscles in the skin of the head; INNERVATED BY <b>FACIAL NERVE (CN VII)</b>.<br>• <b>Orbicularis oris</b> — sphincter of mouth.<br>• <b>Orbicularis oculi</b> — closes eyelids ('blink' reflex).<br>• <b>Levator nasolabialis</b> — lifts upper lip & nostril (Flehmen response).<br>• <b>Buccinator</b> — cheek muscle, keeps food between molars.<br>• <b>Caninus, Levator labii superioris, Depressor labii inferioris</b> — lip movers.<br>• <b>Auricular muscles (rostral, dorsal, caudal, ventral)</b> — move pinna; very large in cattle/horse.<br>• <b>Cutaneous faciei</b> — superficial skin muscle of face (insect-twitch).<br><br>Damage to CN VII = facial nerve paralysis: ear droop, ptosis, lip droop, deviated muzzle, no menace response.",
            eliteDesc: "<b>FACIAL (MIMETIC) MUSCLES — CN VII TERRITORY</b><br><br>The facial muscles are thin, flat, often paper-like sheets that lie just under the skin and produce the visible movements of face, ear, eyelid, lip, and nostril. <b>ALL are innervated by the facial nerve (CN VII)</b> — paralysis of CN VII produces the classic 'facial paralysis' picture (drooped ear, ptosis, deviated muzzle).<br><br><b>1. SPHINCTER MUSCLES OF FACE:</b><br>• <b>Orbicularis Oris</b> — closes the lips. Acts during prehension and suckling.<br>• <b>Orbicularis Oculi</b> — closes the eyelids. Critical for the corneal protective blink and the menace response.<br><br><b>2. LIP-LIFTING / NASAL DILATORS:</b><br>• <b>Levator Nasolabialis</b> — lifts upper lip and dilates nostril; basis of <b>Flehmen response</b> in cattle/horse.<br>• <b>Levator Labii Superioris (Caninus)</b> — lifts upper lip.<br>• <b>Depressor Labii Inferioris</b> — lowers lower lip.<br>• <b>Mentalis</b> — chin elevator.<br>• <b>Zygomaticus</b> — pulls corner of mouth back & up.<br><br><b>3. CHEEK MUSCLE:</b><br>• <b>Buccinator</b> — keeps food between the molars during chewing; prevents pocketing in cheek.<br><br><b>4. AURICULAR (EAR) MUSCLES:</b><br>Domestic mammals have 14-21 auricular muscles, grouped:<br>• Rostral auricular (push pinna forward).<br>• Dorsal auricular (raise).<br>• Caudal auricular (pull back).<br>• Ventral auricular (lower).<br>Largest in cattle/horse where the ear has wide range of motion (acoustic + thermal control).<br><br><b>5. CUTANEOUS FACIEI / PLATYSMA:</b><br>• Subcutaneous sheet over the face & cheek, allowing the skin to twitch off insects (panniculus reflex of head).<br><br><b>CLINICAL CN VII PALSY:</b><br>• Drooped ear, ptosis, drooped lip, deviated muzzle to the contralateral side, no blink, food spillage from mouth.<br>• Causes: middle ear infection (otitis media), dehorning trauma at horn base, facial trauma, idiopathic.",
            comparative: [
                { species: "Ox", note: "Cornual nerve (sensory branch of CN V) supplies horn base; CN VII branches commonly damaged during dehorning if hot-iron/saw is misplaced." },
                { species: "Horse", note: "Auricular muscles very developed (ear position is part of behaviour). Facial nerve crosses ramus of mandible — vulnerable when horse leans on hard halter ('halter neuropathy')." },
                { species: "Dog", note: "Brachycephalic dogs have weakened mimetic muscles → sloppy facial expression." }
            ],
            clinical: "<b>Facial Nerve Paralysis (CN VII):</b> Lop ear, ptosis, lip droop, drooling. Common in cattle after dehorning or otitis media. <b>Test:</b> Menace response, palpebral reflex, ear retraction.",
            imgCode: "facial_muscles"
        },
        {
            title: "Muscles of Mastication (Chewing)",
            desc: "<b>4 Pairs — INNERVATED BY MANDIBULAR DIVISION OF CN V (Trigeminal):</b><br><br>1. <b>Masseter</b> — large, on lateral cheek; closes jaw (most powerful in herbivores).<br>2. <b>Temporalis</b> — fan-shaped, in temporal fossa; closes jaw.<br>3. <b>Medial Pterygoid</b> — deep, medial side of mandible; closes jaw + side-to-side grinding.<br>4. <b>Lateral Pterygoid</b> — protracts and shifts the mandible side-to-side (key for grinding cud).<br><br><b>Digastricus</b> — small; OPENS the jaw.<br><br>In herbivores (ox, horse): masseter + medial pterygoid form a sling around the mandible for the side-to-side <b>grinding</b> motion of cud-chewing — much larger than in carnivores.",
            eliteDesc: "<b>MUSCLES OF MASTICATION — CN V (mandibular branch) TERRITORY</b><br><br>Mastication = chewing. The herbivore design includes a side-to-side grinding action made possible by enlarged pterygoid + masseter muscles forming a 'sling' around the mandible.<br><br><b>1. MASSETER:</b><br>• Origin: zygomatic arch + facial crest.<br>• Insertion: lateral surface of mandibular ramus.<br>• Action: Closes jaw (powerful in herbivores; thick & meaty).<br><br><b>2. TEMPORALIS:</b><br>• Origin: temporal fossa.<br>• Insertion: coronoid process of mandible.<br>• Action: Closes jaw. Larger in carnivores than herbivores.<br><br><b>3. MEDIAL PTERYGOID:</b><br>• Origin: pterygoid bone + palatine.<br>• Insertion: medial mandible.<br>• Action: Closes jaw + medial-lateral grinding.<br><br><b>4. LATERAL PTERYGOID:</b><br>• Origin: pterygoid crest.<br>• Insertion: condylar process of mandible.<br>• Action: Protracts mandible (forward) and side-to-side. Critical for cud grinding.<br><br><b>5. DIGASTRICUS:</b><br>• 2 bellies (rostral + caudal) joined by tendon at hyoid.<br>• Action: <b>OPENS</b> the jaw (depresses mandible).<br>• Also assists in swallowing.<br><br><b>FUNCTIONAL SYNTHESIS:</b><br>• <b>Closing jaw</b>: Masseter + Temporalis + Medial Pterygoid (massive in herbivores).<br>• <b>Opening jaw</b>: Digastricus (small, gravity does most work).<br>• <b>Side-to-side grinding</b>: Asymmetric action of medial + lateral pterygoids (one side at a time → 'one-sided chewing' in cud-chewers).<br>• <b>Protraction</b>: Lateral pterygoids together.<br><br><b>CN V (TRIGEMINAL) — MANDIBULAR DIVISION:</b> Provides motor to all masticatory muscles. Sensory to the lower jaw, lower lip, lower teeth, anterior 2/3 tongue (general sensation).",
            comparative: [
                { species: "Ox/Horse (Herbivores)", note: "<b>Massive masseter + medial pterygoid</b> — visible bulge on cheek. Side-to-side cud-grinding chew." },
                { species: "Dog/Cat (Carnivores)", note: "<b>Massive temporalis</b> for vertical bone-crushing bite. Pterygoids small (no grinding)." },
                { species: "Fowl", note: "Lacks teeth → mastication done by gizzard. Jaw muscles small." }
            ],
            clinical: "<b>Masseter Myositis (Dog):</b> Auto-immune, German Shepherd predisposed; jaw cannot open / bilateral atrophy. <b>Lockjaw (Tetanus):</b> Tonic spasm of masticatory muscles → trismus. <b>Trigeminal Neuritis:</b> Idiopathic; bilateral mandibular paralysis ('dropped jaw' in dogs).",
            imgCode: "mastication_muscles"
        },
        {
            title: "Muscles of the Tongue, Pharynx, Soft Palate, Hyoid & Larynx",
            desc: "<b>Tongue Muscles (mostly CN XII):</b><br>• <b>Genioglossus</b> — protrudes tongue.<br>• <b>Hyoglossus</b> — retracts & depresses.<br>• <b>Styloglossus</b> — retracts & elevates.<br>• Plus intrinsic muscles for changing shape.<br><br><b>Pharyngeal Muscles (CN IX, X):</b><br>• Constrictors (rostral, middle, caudal) — push food caudally during swallowing.<br>• Stylopharyngeus — elevates pharynx.<br><br><b>Soft Palate Muscles (CN IX, X):</b><br>• Palatinus, Tensor + Levator Veli Palatini — close nasopharynx during swallowing.<br><br><b>Hyoid Muscles:</b> Sternohyoideus, Sternothyroideus, Mylohyoideus, Geniohyoideus — move hyoid + tongue.<br><br><b>Laryngeal Muscles (CN X — Recurrent Laryngeal Nerve):</b><br>• <b>Cricoarytenoideus dorsalis</b> — ABDUCTS vocal folds (only abductor!).<br>• Cricoarytenoideus lateralis, Thyroarytenoideus — adduct.<br><br>Damage to recurrent laryngeal nerve → roaring/hemiplegia laryngis in horse (inspiratory whistle).",
            eliteDesc: "<b>MUSCLES OF DEGLUTITION (Swallowing) & PHONATION</b><br><br>This complex set of muscles coordinates eating, breathing, and vocalisation. Multiple cranial nerves must work together (V, VII, IX, X, XII).<br><br><b>I. TONGUE MUSCLES:</b><br><b>Extrinsic (move the tongue) — all CN XII (Hypoglossal):</b><br>• Genioglossus — pulls tongue forward (protrusion).<br>• Hyoglossus — retracts and depresses.<br>• Styloglossus — retracts and elevates.<br><b>Intrinsic (change shape):</b><br>• Longitudinal, transverse, vertical fibres within tongue body.<br><b>Hypoglossal (CN XII) palsy:</b> Tongue protrudes to the affected side (ipsilateral deviation).<br><br><b>II. PHARYNGEAL MUSCLES (CN IX, X via pharyngeal plexus):</b><br>• <b>Rostral, Middle, Caudal Pharyngeal Constrictors</b> — sequential contraction propels bolus.<br>• <b>Stylopharyngeus</b> — elevates pharynx during swallow.<br>• <b>Palatopharyngeus</b> — pulls pharynx upward.<br><br><b>III. SOFT PALATE MUSCLES:</b><br>• <b>Tensor Veli Palatini</b> (CN V) — tenses palate.<br>• <b>Levator Veli Palatini</b> (CN X) — elevates palate to seal nasopharynx.<br>• <b>Palatinus</b> — shortens palate.<br>• <b>Palatoglossus, Palatopharyngeus</b> — close oropharynx.<br><br><b>IV. HYOID MUSCLES:</b><br>• <b>Sternohyoideus, Sternothyroideus</b> — pull hyoid/larynx caudally during swallowing.<br>• <b>Mylohyoideus</b> — floor of mouth, raises tongue.<br>• <b>Geniohyoideus</b> — pulls hyoid forward.<br>• <b>Stylohyoideus</b> — pulls hyoid up & back.<br>• <b>Digastricus</b> (already covered) — also a hyoid mover.<br><br><b>V. LARYNGEAL MUSCLES (all CN X — vagus, via recurrent laryngeal nerve, except cricothyroideus = cranial laryngeal):</b><br>• <b>Cricoarytenoideus Dorsalis (CAD):</b> The ONLY abductor of the vocal folds. Opens the rima glottidis during inspiration.<br>• <b>Cricoarytenoideus Lateralis (CAL):</b> Adducts vocal fold.<br>• <b>Thyroarytenoideus / Vocalis:</b> Adducts and tenses vocal fold.<br>• <b>Arytenoideus Transversus:</b> Adducts.<br>• <b>Cricothyroideus:</b> Tenses vocal fold (pitch).<br><br><b>RECURRENT LARYNGEAL NERVE — A LONG, VULNERABLE LOOP:</b><br>The left RLN loops around the aortic arch, the right RLN around the right subclavian artery, then ascends in the trachea-oesophagus groove to the larynx. The LEFT side is longer → more vulnerable.<br><br><b>'ROARING' (Recurrent Laryngeal Neuropathy / Idiopathic Laryngeal Hemiplegia):</b> Atrophy of LEFT cricoarytenoideus dorsalis → vocal fold cannot abduct → inspiratory whistle/'roar' under exercise → exercise intolerance in racehorses. Treatment = laryngoplasty ('tieback' surgery).",
            comparative: [
                { species: "Horse", note: "Long left RLN — classic 'roarer' surgery. Soft palate very long → cannot mouth-breathe (obligate nasal breather)." },
                { species: "Ox", note: "Soft palate shorter; swallowing & cud-chewing rely on synchronised pharyngeal & tongue movements." },
                { species: "Dog", note: "Brachycephalic obstructive airway syndrome — elongated soft palate + everted laryngeal saccules." }
            ],
            clinical: "<b>Choke (Oesophageal Obstruction):</b> Bolus stuck cranial to chest entrance. <b>Roaring (Horse):</b> Inspiratory whistle, treated by laryngoplasty. <b>BOAS (Brachycephalic):</b> Surgical staphylectomy + saccule removal. <b>Hyoid Fracture:</b> May cause dysphagia.",
            imgCode: "head_neck_muscles"
        },
        {
            title: "Neck Muscles & Boundaries of the Jugular Furrow",
            desc: "<b>Superficial Neck Muscles:</b><br>• <b>Brachiocephalicus</b> — long muscle from skull → arm; flexes/extends neck, advances limb.<br>• <b>Sternomandibularis (Sternocephalicus mandibular part)</b> — sternum to mandible; flexes head.<br>• <b>Sternocephalicus (mastoid part)</b> — sternum to mastoid; turns head sideways.<br>• <b>Omotransversarius</b> — scapula to wing of atlas.<br>• <b>Splenius, Rhomboideus, Longissimus capitis</b> — deeper neck muscles.<br><br><b>Jugular Furrow Boundaries:</b><br>• <b>Cranial:</b> caudal border of mandible.<br>• <b>Caudal:</b> manubrium sterni.<br>• <b>Dorsal:</b> brachiocephalicus muscle.<br>• <b>Ventral:</b> sternocephalicus (mandibular part) — sternomandibularis.<br>• <b>Floor:</b> deep cervical fascia / scalene + omohyoid.<br>• <b>Contents:</b> External jugular vein (the practical IV site in cattle/horse).",
            eliteDesc: "<b>NECK MUSCLES & JUGULAR FURROW</b><br><br>The neck has multiple layers of muscles classified by function: head/neck movement, limb advancement, and respiratory accessory.<br><br><b>I. SUPERFICIAL LATERAL MUSCLES:</b><br><b>1. Brachiocephalicus:</b><br>• Long strap-like muscle from base of skull (mastoid + occipital) to crest of greater tubercle of humerus.<br>• 3 parts in domestic mammals — cleidomastoideus + cleido-occipitalis + cleidobrachialis (the clavicle is a tendinous intersection in domestic species).<br>• Action: Advances limb, extends shoulder, turns head/neck.<br>• Forms the <b>DORSAL boundary of the jugular furrow</b>.<br><br><b>2. Sternocephalicus:</b><br>• Two parts: <b>Sternomandibularis</b> (to mandible) and <b>Sternomastoideus</b> (to mastoid process).<br>• Origin: manubrium sterni.<br>• Action: Flexes neck, turns head.<br>• Forms the <b>VENTRAL boundary of the jugular furrow</b>.<br><br><b>3. Omotransversarius:</b> Wing of atlas → scapula. Advances limb.<br><br><b>II. JUGULAR FURROW (Sulcus jugularis):</b><br>• Distinct groove on the lateral surface of the neck.<br>• <b>Cranial limit:</b> caudal border of mandible / parotid region.<br>• <b>Caudal limit:</b> shoulder / manubrium sterni.<br>• <b>Dorsal wall:</b> brachiocephalicus.<br>• <b>Ventral wall:</b> sternocephalicus (mandibular).<br>• <b>Floor (deep):</b> scalene & longus colli muscles + carotid sheath.<br>• <b>Contents:</b><br>  – <b>External jugular vein</b> (most superficial — the venepuncture target).<br>  – Deep to the vein: <b>Common carotid artery</b>, <b>Vagosympathetic trunk</b>, <b>Recurrent laryngeal nerve</b>, <b>Tracheal duct</b> = these together form the <b>CAROTID SHEATH</b>.<br><br><b>III. CAROTID SHEATH:</b><br>A connective tissue tube that wraps and binds the deep cervical neurovascular bundle:<br>• <b>Common carotid artery</b> — to head.<br>• <b>Internal jugular vein</b> (small in horse, may be absent).<br>• <b>Vagosympathetic trunk</b> — vagus + sympathetic combined.<br>• <b>Recurrent laryngeal nerve</b> — ascends from thorax along trachea-oesophagus groove.<br>Important during deep neck surgery; accidental injury produces Horner's syndrome (sympathetic) or laryngeal paralysis (RLN).<br><br><b>IV. EPAXIAL (Dorsal) MUSCLES:</b><br>• Longissimus capitis, Splenius, Semispinalis capitis — extend head/neck.<br>• Rhomboideus — moves scapula.<br><br><b>V. HYPAXIAL (Ventral) MUSCLES:</b><br>• Longus capitis, Longus colli, Scalenus — flex head/neck.",
            comparative: [
                { species: "Horse", note: "Jugular furrow well-defined. Avoid lower 1/3 — carotid lies just under jugular vein → risk of arterial puncture." },
                { species: "Cattle", note: "Jugular furrow shallow because of heavy brisket; venepuncture in upper 2/3." },
                { species: "Dog", note: "Cervical muscles smaller. Jugular vein still palpable for anaesthesia sample." }
            ],
            clinical: "<b>Jugular Venepuncture:</b> Standard IV in cattle & horse — upper third of furrow. <b>Carotid Hit (Horse):</b> Bright red pulsatile blood — life-threatening if drug injected (PROCAINE → seizures). <b>Horner's Syndrome:</b> Damage to vagosympathetic trunk → ptosis + miosis + enophthalmos + 3rd eyelid prolapse.",
            imgCode: "neck_muscles"
        }
    ],
    "Arthrology": [
        {
            title: "Articulations & Special Ligaments of Head and Neck",
            desc: "<b>Cranial Articulations:</b><br>• <b>Atlanto-occipital joint</b> (Skull-C1): nodding 'YES' joint. Condyles of occipital fit cranial articular fovea of atlas. Site of <b>cisterna magna CSF tap</b>.<br>• <b>Atlanto-axial joint</b> (C1-C2): rotational 'NO' joint. Dens of axis pivots in atlas.<br>• <b>Other intervertebral joints</b> of cervical vertebrae: facet joints + intervertebral discs.<br>• <b>Temporomandibular joint (TMJ)</b>: synovial joint between mandibular condyle + temporal bone; with articular disc; allows hinge + slight gliding/grinding.<br><br><b>Special Ligaments of Head and Neck:</b><br>• <b>Nuchal ligament (Funicular + Lamellar parts)</b> — yellow elastic; supports head, runs from external occipital protuberance → withers.<br>• <b>Apical, Alar, Transverse ligaments of dens</b> — stabilise C1-C2.<br>• <b>Dorsal & Ventral atlanto-axial ligaments</b>.",
            eliteDesc: "<b>HEAD-NECK ARTICULATIONS & LIGAMENTS</b><br><br><b>I. ATLANTO-OCCIPITAL JOINT (AO):</b><br>• Type: Synovial — modified hinge.<br>• Surfaces: Two convex occipital condyles fit into two concave cranial articular foveae of atlas.<br>• Movement: Mainly flexion-extension ('nodding YES'); minimal lateral.<br>• Capsule: Single capsule encloses both condyles.<br>• <b>CSF Tap (Cisterna Magna):</b> Needle on dorsal midline at AO space, between occiput and atlas wing — into subarachnoid space.<br><br><b>II. ATLANTO-AXIAL JOINT (AA):</b><br>• Type: Synovial — pivot (trochoid).<br>• The <b>dens (odontoid process)</b> of axis projects forward and articulates with the ventral arch of atlas. The dens is held by:<br>  – <b>Apical ligament of dens</b> — to occipital.<br>  – <b>Alar ligaments</b> — to occipital condyles.<br>  – <b>Transverse ligament of atlas</b> — holds dens against ventral arch.<br>• Movement: Rotation around long axis ('shaking head NO').<br>• <b>Atlanto-axial subluxation</b> — congenital in toy dog breeds (Yorkie, Toy Poodle) due to absent or hypoplastic dens → spinal cord compression.<br><br><b>III. CERVICAL INTERVERTEBRAL JOINTS:</b><br>• Symphysis (between bodies, with disc) + facet joints (synovial).<br>• Cervical discs are the LARGEST → frequent disc disease in dogs ('wobbler syndrome' = caudal cervical spondylomyelopathy).<br><br><b>IV. TEMPOROMANDIBULAR JOINT (TMJ):</b><br>• Synovial; modified condylar.<br>• Mandibular condyle + mandibular fossa of temporal bone, separated by <b>articular disc</b>.<br>• Movement: Hinge (open-close) + protrusion (forward) + lateral grinding (especially in herbivores).<br>• Innervation: CN V (mandibular).<br>• Capsule reinforced by <b>lateral & medial collateral ligaments</b>.<br><br><b>V. NUCHAL LIGAMENT (Ligamentum nuchae):</b><br>• Massive yellow elastic ligament from external occipital protuberance/spine of axis → spinous processes of T2-T5.<br>• 2 parts:<br>  – <b>Funicular part</b> (cord-like, dorsal): supports head from withers.<br>  – <b>Lamellar part</b> (sheet-like, ventral to funicular): attaches to spinous processes of cervical vertebrae C2-C7.<br>• Function: <b>passive support of the head</b> — saves enormous muscular work in heavy-headed species (horse, ox).<br>• Best developed in HORSE; well-developed in OX; reduced in dog and absent/rudimentary in pig.<br>• <b>Nuchal bursa</b> — supraspinous bursa beneath funicular part at cranial pole of withers; site of <b>'poll evil' / 'fistulous withers'</b> in horses (chronic bursitis).<br><br><b>VI. SPECIAL LIGAMENTS OF HEAD:</b><br>• <b>Stylohyoid ligament/apparatus</b> — chain of small bones connecting hyoid to skull.<br>• <b>Temporomandibular collateral ligaments</b> — limit TMJ movement.<br>• <b>Sphenomandibular & Stylomandibular ligaments</b> — secondary support of jaw.",
            comparative: [
                { species: "Horse", note: "Massive nuchal ligament — supports very heavy head. <b>Poll evil</b> = nuchal bursitis." },
                { species: "Ox", note: "Nuchal ligament well-developed; horns add to load → bursitis ('fistulous withers'). Common reason for euthanasia in old draft cattle." },
                { species: "Dog", note: "Nuchal ligament much smaller. <b>Atlantoaxial subluxation</b> in toy breeds — congenital instability of dens." },
                { species: "Pig", note: "Nuchal ligament rudimentary; head supported by muscle alone." }
            ],
            clinical: "<b>Cisterna Magna CSF Tap:</b> AO space, dorsal midline. <b>Atlantoaxial Subluxation:</b> Congenital in toy dogs — neck pain, ataxia, sudden tetraparesis. <b>Poll Evil / Fistulous Withers:</b> Chronic supraspinous bursitis (Brucella in cattle/horse). <b>TMJ Luxation:</b> Trauma — jaw locked open.",
            imgCode: "head_neck_joints"
        }
    ],
    "Neurology": [
    {
        title: "Introduction: The Cranial Command Center",
        desc: `<b>Exam Focus:</b><br>
        • 12 Cranial Nerves — letter sequence: <b>O-O-O-T-T-A-F-V-G-V-A-H</b> (Olfactory, Optic, Oculomotor, Trochlear, Trigeminal, Abducens, Facial, Vestibulocochlear, Glossopharyngeal, Vagus, Accessory, Hypoglossal)<br>
        • Functional Types: Sensory (I, II, VIII), Motor (III, IV, VI, XI, XII), Mixed (V, VII, IX, X)<br>
        • Sensory-Motor Mnemonic: "Some Say Marry Money, But My Brother Says Big Brains Matter More" (S = Sensory, M = Motor, B = Both)<br>
        • <b>Critical Concept:</b> Bovine skull fuses Orbital Fissure + Foramen Rotundum = <b>Foramen Orbitorotundum</b> <br>
        • Ox: Foramen Ovale is discrete; Horse: Uses Foramen Lacerum (Oval Notch)<br>
        • Clinical Minefield: Goat horn has dual innervation (Cornual + Infratrochlear)`,

        eliteDesc: `<h3>The Cranial Command Center</h3>
        <p>The bovine head represents the most complex cubic footage in the animal kingdom—a fortress housing the central processing unit, major organs of special sense, and mechanisms for ingestion and communication. The twelve paired cranial nerves are the "Dirty Dozen" that dictate survival, allowing the animal to see predators, smell forage, chew the cud, swallow, and maintain balance.</p>
        
        <h4>Letter-Sequence Memory Aid</h4>
        <p><b>The 12 cranial nerves in order:</b> O-O-O-T-T-A-F-V-G-V-A-H. Pair this letter sequence with any phrase you find easy to remember.</p>
        <ul>
            <li><b>I</b> - Olfactory</li>
            <li><b>II</b> - Optic</li>
            <li><b>III</b> - Oculomotor</li>
            <li><b>IV</b> - Trochlear</li>
            <li><b>V</b> - Trigeminal</li>
            <li><b>VI</b> - Abducens</li>
            <li><b>VII</b> - Facial</li>
            <li><b>VIII</b> - Auditory (Vestibulocochlear)</li>
            <li><b>IX</b> - Glossopharyngeal</li>
            <li><b>X</b> - Vagus</li>
            <li><b>XI</b> - Spinal Accessory</li>
            <li><b>XII</b> - Hypoglossal</li>
        </ul>

        <h4>Functional Fiber Classification</h4>
        <p>Cranial nerves carry not just Somatic Sensory and Motor fibers, but also Special Visceral and Special Somatic fibers:</p>
        <ul>
            <li><b>Sensory Only:</b> I (Olfactory), II (Optic), VIII (Vestibulocochlear)</li>
            <li><b>Motor Only:</b> III (Oculomotor), IV (Trochlear), VI (Abducens), XI (Accessory), XII (Hypoglossal)</li>
            <li><b>Mixed (Both):</b> V (Trigeminal), VII (Facial), IX (Glossopharyngeal), X (Vagus)</li>
        </ul>
        <p><i>Mnemonic for mixed nerves:</i> "Some Say Marry Money, But My Brother Says Big Brains Matter More"</p>

        <h4>The Bovine Specialization: Foramen Orbitorotundum</h4>
        <p>The most clinically significant anatomical variation in the ox is the <b>Foramen Orbitorotundum</b>—a pathognomonic fusion of the orbital fissure and foramen rotundum into a single massive opening. This fusion has profound implications for nerve blocks like the Peterson Eye Block, as a single injection affects multiple nerves simultaneously (III, IV, VI, V1, V2).</p>
        
        <p><b>Comparative Warning:</b> The Horse maintains separate exits (Orbital Fissure for III, IV, VI, V1; Foramen Rotundum for V2), while the Dog represents the standard mammalian pattern. The Ox simplifies; the Horse complicates.</p>`,

        comparative: [
            { species: "Ox (Bos taurus)", note: "Foramen Orbitorotundum present (fusion of orbital fissure + rotundum). Foramen Ovale discrete and separate. High optic decussation (80-90%) for panoramic vision." },
            { species: "Horse (Equus caballus)", note: "Separate Orbital Fissure and Foramen Rotundum. Foramen Lacerum is large, irregular gap containing Oval Notch (for V3) and Jugular portion (for IX, X, XI). Internal carotid artery enters cranium here." },
            { species: "Dog (Canis lupus)", note: "Standard mammalian pattern: separate orbital fissure, foramen rotundum, and ovale. Alar canal present for maxillary artery." },
            { species: "Goat (Capra hircus)", note: "CRITICAL CLINICAL VARIANT: Horn bud innervated by TWO nerves—Cornual nerve (V2) AND Cornual branch of Infratrochlear nerve (V1). The 'Goat Trap' for dehorning anesthesia." }
        ],
        clinical: "<b>The Goat Trap:</b> Unlike cattle where the Cornual nerve (V2 branch) alone supplies the horn, goats require blocking both the Cornual nerve (posterior to lateral canthus) AND the Infratrochlear nerve (dorsomedial to eye, V1 branch). Failing to block the Infratrochlear results in failed anesthesia and a violent patient."
    },
    {
        title: "CN I & II: The Special Senses (Olfactory & Optic)",
        desc: `<b>High-Yield Points:</b><br>
        • <b>CN I (Olfactory):</b> Not a single trunk—collection of non-myelinated axons through Cribriform Plate; vulnerable to head trauma/epistaxis<br>
        • <b>Vomeronasal Organ (Jacobson):</b> Detects pheromones; Flehmen response pumps air into incisive ducts<br>
        • <b>CN II (Optic):</b> Extension of diencephalon, ensheathed in meninges; 80-90% decussation in ungulates (panoramic vision)<br>
        • <b>PLR Test:</b> Afferent = CN II, Efferent = CN III; positive PLR doesn't prove vision (cortical blindness possible)<br>
        • <b>Menace Response:</b> Tests cortical vision (CN II in, CN VII out)`,

        eliteDesc: `<h3>Cranial Nerve I: The Olfactory Nerve</h3>
        <p>In the macrosmatic ox, smell is paramount for feed selection, social hierarchy, and reproductive recognition. The olfactory nerve is anatomically unique—not a single trunk but a collection of non-myelinated axons arising from the Olfactory Epithelium on the ethmoturbinates. These fibers bundle together to pass through the fenestrations of the Cribriform Plate of the ethmoid bone.</p>
        
        <p><b>Angiology Correlation:</b> The ethmoidal arteries (branches of the external ophthalmic) accompany these nerves, supplying the rich vascular bed of the nasal mucosa. This explains the epistaxis risk with nasal trauma or severe sinusitis.</p>
        
        <h4>The Vomeronasal Organ (Organ of Jacobson)</h4>
        <p>Located on the floor of the nasal cavity, this organ detects non-volatile pheromones. When a bull curls his lip (the <b>Flehmen Response</b>), he physically pumps air and pheromones into the incisive ducts to reach this organ, mediated by the olfactory system.</p>

        <h3>Cranial Nerve II: The Optic Nerve</h3>
        <p>The optic nerve is an extension of the diencephalon, ensheathed in all three meninges (dura, arachnoid, pia). This explains why increased intracranial pressure causes papilledema (swelling of the optic disc) and why optic neuritis causes pain on eye movement.</p>
        
        <p><b>Course:</b> Extends from the optic disc of the retina, through the Optic Canal of the presphenoid wing, to the optic chiasm. The central retinal artery and vein run within or alongside the nerve.</p>
        
        <h4>Comparative Insight: Prey vs. Predator</h4>
        <p>In the Ox and Horse, approximately <b>80-90% of optic nerve fibers decussate</b> (cross over) at the optic chiasm. This high percentage supports their panoramic, monocular vision—essential for detecting predators on the horizon with nearly 360° field of view. In the Dog (and human), the decussation is lower (50-65%), allowing for greater binocular overlap and depth perception required for hunting.</p>
        
        <h4>Clinical Testing</h4>
        <p><b>Pupillary Light Reflex (PLR):</b></p>
        <ul>
            <li><b>Afferent:</b> CN II (detects light)</li>
            <li><b>Efferent:</b> CN III (constricts pupil via parasympathetic fibers)</li>
            <li><b>Critical Interpretation:</b> A positive PLR proves the retina and midbrain are intact, but does NOT prove the animal can see (cortical blindness is possible).</li>
        </ul>
        <p><b>Menace Response:</b> The "hand-waving" test. Afferent = CN II, Efferent = CN VII (blink). This tests cortical vision and requires functional cerebrum.</p>`,

        comparative: [
            { species: "Ox (Bos taurus)", note: "Macrosmatic (smell-dominant). Optic decussation 80-90%. Panoramic vision. Flehmen response highly developed in bulls." },
            { species: "Horse (Equus caballus)", note: "Similar to ox: high optic decussation (85%), lateral placement of eyes for wide field of view." },
            { species: "Dog (Canis lupus)", note: "Microsmatic relative to ungulates. Optic decussation ~65%. Binocular vision prioritized over panoramic. Retinal tapetum present for night vision." }
        ],
        clinical: "<b>Clinical Pearl:</b> In cattle with suspected blindness, always perform both PLR and Menace Response. If PLR is present but Menace is absent, suspect cortical blindness (polioencephalomalacia, lead toxicity, or cerebral abscess) rather than retinal or optic nerve disease."
    },
    {
        title: "CN III, IV, VI: The Orbital Motor Group",
        desc: `<b>Exam Essentials:</b><br>
        • <b>Common Exit (Ox):</b> All three exit via <b>Foramen Orbitorotundum</b> (fusion unique to ruminants)<br>
        • <b>CN III (Oculomotor):</b> Motor to Dorsal/Ventral/Medial Rectus, Ventral Oblique, Levator Palpebrae; <b>Parasympathetic</b> to sphincter pupillae (constriction)<br>
        • <b>CN IV (Trochlear):</b> Only nerve exiting dorsal brainstem; longest intracranial course (trauma vulnerable); innervates Dorsal Oblique (intorsion)<br>
        • <b>CN VI (Abducens):</b> Innervates Lateral Rectus (abduction) and Retractor Bulbi (protection)<br>
        • <b>Lesion Signs:</b> CN III = Ventrolateral strabismus + Ptosis + Mydriasis; CN VI = Medial strabismus (cross-eye)`,

        eliteDesc: `<h3>The Oculomotor Trio</h3>
        <p>These three nerves function as the motor supply to the extraocular muscles. In the Ox, they are anatomically linked by their common exit through the Foramen Orbitorotundum, creating both efficiency and vulnerability—a single lesion can paralyze the entire globe.</p>

        <h4>Cranial Nerve III: The Oculomotor Nerve</h4>
        <p><b>Origin:</b> Midbrain (ventral surface).<br>
        <b>Exit (Ox):</b> Foramen Orbitorotundum.<br>
        <b>Target Muscles:</b></p>
        <ul>
            <li>Dorsal Rectus (elevation)</li>
            <li>Ventral Rectus (depression)</li>
            <li>Medial Rectus (adduction)</li>
            <li>Ventral Oblique (elevation, abduction)</li>
            <li>Levator Palpebrae Superioris (lifts upper eyelid)</li>
        </ul>
        
        <p><b>Parasympathetic Component:</b> Pre-ganglionic fibers travel to the Ciliary Ganglion. Post-ganglionic fibers (Short Ciliary Nerves) innervate the Sphincter Pupillae (pupil constriction) and Ciliary muscles (accommodation). This is why CN III lesions cause <b>mydriasis</b> (dilated pupil).</p>

        <h4>Cranial Nerve IV: The Trochlear Nerve</h4>
        <p><b>Origin:</b> Midbrain (dorsal surface).<br>
        <b>Unique Feature:</b> It is the ONLY cranial nerve to exit the dorsal aspect of the brainstem. It has the longest intracranial course, making it vulnerable to trauma (especially in polioencephalomalacia or lead poisoning).<br>
        <b>Target Muscle:</b> Dorsal Oblique.<br>
        <b>Function:</b> Rotates the globe medially (intorsion).</p>

        <h4>Cranial Nerve VI: The Abducens Nerve</h4>
        <p><b>Origin:</b> Medulla.<br>
        <b>Exit (Ox):</b> Foramen Orbitorotundum.<br>
        <b>Target Muscles:</b></p>
        <ul>
            <li>Lateral Rectus: Abducts the eye (moves laterally)</li>
            <li>Retractor Bulbi: Retracts the globe into the orbit (protective reflex when eating or during corneal stimulation)</li>
        </ul>

        <h4>Clinical Signs of Paralysis</h4>
        <p><b>CN III Lesion:</b></p>
        <ul>
            <li>Ventrolateral Strabismus: Eye looks "down and out" because Lateral Rectus (VI) and Dorsal Oblique (IV) are unopposed</li>
            <li>Ptosis: Drooping of upper eyelid (Levator paralysis)</li>
            <li>Mydriasis: Dilated pupil (loss of parasympathetic constriction)</li>
        </ul>
        <p><b>CN VI Lesion:</b></p>
        <ul>
            <li>Medial Strabismus: Eye deviates inward (cross-eyed) due to unopposed Medial Rectus</li>
            <li>Inability to retract globe: Loss of corneal reflex protection</li>
        </ul>`,

        comparative: [
            { species: "Ox (Bos taurus)", note: "Common exit via Foramen Orbitorotundum. All three nerves vulnerable to single lesion (tumor/abscess). Retractor bulbi well-developed for grazing protection." },
            { species: "Horse (Equus caballus)", note: "Separate exits: Orbital Fissure for III, IV, VI. Foramen Rotundum separate for V2. This separation protects against total orbital paralysis from single lesion." },
            { species: "Dog (Canis lupus)", note: "Standard mammalian pattern. Long intracranial course of CN IV makes it vulnerable to raised intracranial pressure (tentorial herniation)." }
        ],
        clinical: "<b>Diagnostic Localization:</b> A ventrolateral strabismus with ptosis and mydriasis localizes the lesion to CN III (midbrain or orbital fissure). Medial strabismus alone indicates CN VI pathology (often from guttural pouch disease in horses or skull fractures in cattle)."
    },
    {
        title: "CN V: The Trigeminal Nerve (The Giant)",
        desc: `<b>The Great Sensory Divider:</b><br>
        • Largest cranial nerve; arises from Pons; splits into three divisions at trigeminal ganglion<br>
        • <b>V1 (Ophthalmic):</b> Sensory only; exits Foramen Orbitorotundum (ox); supplies cornea, forehead, nasal cavity, <b>goat horn</b> (partial)<br>
        • <b>V2 (Maxillary):</b> Sensory only; gives rise to <b>Cornual nerve</b> (bovine horn); runs with Maxillary Artery<br>
        • <b>V3 (Mandibular):</b> Mixed; exits Foramen Ovale (ox); motor to muscles of mastication (Masseter, Temporalis, Pterygoids)<br>
        • <b>Clinical:</b> V3 lesion = "Dropped jaw" + inability to chew; jaw deviates toward lesion side<br>
        • <b>Angiology:</b> Rete Mirabile Epidurale surrounds trigeminal ganglion (infection risk)`,

        eliteDesc: `<h3>The Great Sensory Nerve of the Head</h3>
        <p>The Trigeminal is the largest cranial nerve, serving as the architect of sensation for the face and the motor engine for chewing. It arises from the Pons and splits into three divisions at the Trigeminal Ganglion.</p>

        <h4>Angiology Correlation: The Rete Mirabile</h4>
        <p>In the bovine, the internal carotid artery regresses during development. The brain is supplied by the <b>Rete Mirabile Epidurale</b>, a meshwork of arteries derived from the maxillary and vertebral arteries. The Trigeminal Ganglion lies in close proximity to the cavernous sinus and this arterial rete. Infection in the cavernous sinus (from severe sinusitis or horn base infections) can easily compromise the Trigeminal nerve.</p>

        <h4>Division 1: Ophthalmic Nerve (V1) - Purely Sensory</h4>
        <p><b>Course (Ox):</b> Travels in the cavernous sinus and exits via the Foramen Orbitorotundum.</p>
        <p><b>Branches:</b></p>
        <ul>
            <li><b>Frontal Nerve:</b> Emerges from orbit to supply upper eyelid and forehead skin. In the Ox, exits orbit directly (supraorbital foramen transmits vessels primarily).</li>
            <li><b>Lacrimal Nerve:</b> Sensory to lacrimal gland and lateral canthus.</li>
            <li><b>Nasociliary Nerve:</b> Parent trunk for ethmoidal and infratrochlear nerves.
                <ul>
                    <li><b>Infratrochlear Nerve:</b> Runs along medial orbital wall; supplies medial canthus, lacrimal sac, third eyelid.</li>
                    <li><b>Critical Variant (Goat):</b> The Infratrochlear sends a cornual branch to the horn bud. This is the "Goat Trap"—blocking only the Cornual nerve (V2) fails to anesthetize the goat horn.</li>
                </ul>
            </li>
        </ul>

        <h4>Division 2: Maxillary Nerve (V2) - Purely Sensory</h4>
        <p><b>Course (Ox):</b> Exits via Foramen Orbitorotundum; enters Pterygopalatine Fossa; runs alongside Maxillary Artery.</p>
        <p><b>Major Branches:</b></p>
        <ul>
            <li><b>Zygomatic Nerve:</b> Divides into zygomaticofacial (cheek) and zygomaticotemporal.
                <ul>
                    <li><b>Cornual Nerve:</b> Branch of zygomaticotemporal; THE specific sensory nerve to the bovine horn. Ascends along temporal ridge.</li>
                </ul>
            </li>
            <li><b>Infraorbital Nerve:</b> Continuation of maxillary nerve; travels through Infraorbital Canal.
                <ul>
                    <li>Dental supply: Superior Alveolar nerves to upper premolars/molars within canal.</li>
                    <li>Exit: Infraorbital Foramen.</li>
                    <li>Terminal branches: Supply muzzle, upper lip, nostrils (Nasolabial nerve).</li>
                </ul>
            </li>
            <li><b>Pterygopalatine Nerve:</b> Supplies hard and soft palate (Major and Minor Palatine nerves).</li>
        </ul>

        <h4>Division 3: Mandibular Nerve (V3) - Mixed</h4>
        <p><b>Course (Ox):</b> Exits via discrete <b>Foramen Ovale</b> (unlike horse where it uses Foramen Lacerum).</p>
        <p><b>Motor Branches:</b></p>
        <ul>
            <li>Muscles of Mastication: Masseter (power closure), Temporalis (closure), Pterygoids (lateral grinding), Mylohyoid, Digastricus (anterior belly only—opens jaw).</li>
        </ul>
        <p><b>Sensory Branches:</b></p>
        <ul>
            <li><b>Buccal Nerve:</b> Sensory to cheek mucosa (NOT the buccinator muscle—that's CN VII).</li>
            <li><b>Auriculotemporal Nerve:</b> Sensation to ear and temporal region.</li>
            <li><b>Lingual Nerve:</b> Sensation (touch/pain/temp) to rostral 2/3 of tongue.</li>
            <li><b>Inferior Alveolar Nerve:</b> Enters Mandibular Foramen on medial ramus; supplies all lower teeth; exits Mental Foramen as Mental Nerve (lower lip/chin).</li>
        </ul>

        <h4>Clinical Signs of V3 Damage</h4>
        <p>"Dropped jaw" with inability to chew. The tongue may hang out. In unilateral lesions, the jaw deviates <b>toward</b> the side of the lesion due to unopposed action of healthy contralateral pterygoid muscles pushing the jaw across.</p>`,

        comparative: [
            { species: "Ox (Bos taurus)", note: "Foramen Ovale is discrete, separate opening in basisphenoid wing. Cornual nerve from V2 supplies horn exclusively (in cattle). Rete Mirabile present." },
            { species: "Horse (Equus caballus)", note: "V3 exits via 'Oval Notch' in Foramen Lacerum, not a discrete foramen. No Rete Mirabile—internal carotid artery persists." },
            { species: "Dog (Canis lupus)", note: "Standard mammalian pattern with distinct Foramen Ovale. Alar canal transmits maxillary artery." },
            { species: "Goat (Capra hircus)", note: "CRITICAL: Dual innervation of horn—Cornual nerve (V2) AND Infratrochlear cornual branch (V1). Requires two-site blockade." }
        ],
        clinical: "<b>The 'Dropped Jaw' Test:</b> Bilateral mandibular nerve paralysis causes the jaw to hang open with inability to close the mouth (motor deficit). In unilateral lesions, the jaw deviates toward the affected side when the mouth is opened due to unopposed contralateral pterygoid contraction."
    },
    {
        title: "CN VII: The Facial Nerve (The Mask)",
        desc: `<b>The Mask of Expression:</b><br>
        • Mixed nerve (GSE, GVE, SVA, GSA); Origin: Medulla; Exit: <b>Stylomastoid Foramen</b><br>
        • Intracranial: Enters Internal Acoustic Meatus (with CN VIII), travels through Facial Canal in petrous temporal bone<br>
        • <b>Geniculate Ganglion:</b> Sensory for taste; gives off Greater Petrosal Nerve (parasympathetic to lacrimal/nasal glands)<br>
        • <b>Chorda Tympani:</b> Crosses middle ear, joins Lingual Nerve (V3)—carries taste from rostral 2/3 tongue<br>
        • <b>Major Branches:</b> Auriculopalpebral (eyelid/ear motor), Dorsal/Ventral Buccal (lips/cheeks), Cervical<br>
        • <b>Ox vs Horse:</b> Ox has rich plexus between buccal branches over masseter; Horse has widely separated branches`,

        eliteDesc: `<h3>Cranial Nerve VII: The Facial Nerve</h3>
        <p>The Facial nerve dictates the animal's ability to blink, move its ears, and flare its nostrils. It is the nerve of facial expression and parasympathetic supply to salivary and lacrimal glands.</p>

        <h4>Intracranial Course</h4>
        <p>Enters the <b>Internal Acoustic Meatus</b> (with CN VIII), then travels through the <b>Facial Canal</b> in the petrous temporal bone—an extremely tortuous path making it vulnerable to middle ear infections.</p>
        <p><b>Key Intracranial Structures:</b></p>
        <ul>
            <li><b>Geniculate Ganglion:</b> Located at the "knee" (geniculum) of the facial canal. Contains sensory neurons for taste from rostral tongue.</li>
            <li><b>Greater Petrosal Nerve:</b> Parasympathetic fibers to lacrimal and nasal glands (secretomotor).</li>
            <li><b>Chorda Tympani:</b> Branches off inside the canal, crosses the middle ear (tympanic cavity), and joins the Lingual Nerve (V3). Carries taste from rostral 2/3 of tongue AND parasympathetic supply to submandibular/sublingual salivary glands.</li>
        </ul>

        <h4>Exit and Branching</h4>
        <p><b>Exit:</b> Stylomastoid Foramen, then enters Parotid Salivary Gland where it forms a plexus.</p>
        <p><b>Angiology Note:</b> The nerve intertwines with the Transverse Facial Artery and vein within the parotid.</p>

        <h4>Major Branches</h4>
        <p><b>1. Auriculopalpebral Nerve:</b></p>
        <ul>
            <li>Ascends over the zygomatic arch.</li>
            <li>Motor to eyelids (Orbicularis oculi) and ear muscles.</li>
            <li><b>Clinical:</b> Target for auriculopalpebral block to stop eyelid closure (akinesia) during eye examination.</li>
        </ul>
        <p><b>2. Dorsal and Ventral Buccal Branches:</b></p>
        <ul>
            <li>Run across masseter muscle to the face.</li>
            <li>Motor to lips (Orbicularis oris), cheeks (Buccinator), and nostrils.</li>
            <li><b>Ox vs Horse:</b> In the horse, these branches are widely separated. In the ox, there is a rich plexus (anastomosis) between dorsal and ventral branches over the masseter muscle, providing collateral innervation.</li>
        </ul>
        <p><b>3. Cervical Branch:</b> Supplies cutaneous colli muscle.</p>

        <h4>Clinical Pathology</h4>
        <p><b>Facial Paralysis:</b> Drooping ear, drooping lip (commissure), absent palpebral reflex (cannot blink), widened palpebral fissure, food impaction in cheek (buccinator paralysis), and dry cornea (lacrimal paralysis). Common in Listeriosis (asymmetric deficits).</p>`,

        comparative: [
            { species: "Ox (Bos taurus)", note: "Rich anastomotic plexus between buccal branches over masseter. Stylomastoid foramen distinct. Facial canal courses through petrous temporal bone." },
            { species: "Horse (Equus caballus)", note: "Buccal branches widely separated (dorsal and ventral do not anastomose as richly as in ox). Facial nerve exits stylomastoid foramen." },
            { species: "Dog (Canis lupus)", note: "Five major branches: Auriculopalpebral, Dorsal Buccal, Ventral Buccal, Marginal Mandibular, Cervical. More distinct separation than ruminants." }
        ],
        clinical: "<b>Auriculopalpebral Block:</b> Inject subcutaneously over zygomatic arch where nerve crosses. Results in akinesia (paralysis) of eyelids (ptosis) but NOT anesthesia—corneal sensation remains intact (CN V1). Use ONLY for examination/procedures where pain isn't expected; for painful procedures, use additional topical anesthesia or retrobulbar block."
    },
    {
        title: "CN IX, X, XI: The Vagal Group",
        desc: `<b>The Swallowing & Visceral Trinity:</b><br>
        • <b>Common Exit:</b> Jugular Foramen (ox) or Foramen Lacerum (horse)<br>
        • <b>CN IX (Glossopharyngeal):</b> Motor to Stylopharyngeus; Sensory to caudal 1/3 tongue (taste); Visceral to carotid body/sinus; Parasympathetic to parotid gland<br>
        • <b>CN X (Vagus):</b> The Wanderer—descends in Carotid Sheath; Cranial Laryngeal (sensory larynx, motor Cricothyroid); <b>Recurrent Laryngeal</b> (loops around aorta/subclavian, motor to all other laryngeal muscles including CAD—the only abductor)<br>
        • <b>CN XI (Accessory):</b> Motor to Trapezius, Sternocephalicus, Omotransversarius; unique spinal origin<br>
        • <b>Ruminant Specialization:</b> Vagus controls rumen/reticulum/omasum motility; damage = Vagal Indigestion (Hoflund Syndrome)`,

        eliteDesc: `<h3>The Vagal Complex: Masters of Viscera</h3>
        <p>These three nerves exit together (via Jugular Foramen in ox) and function as a complex for swallowing, vocalization, and visceral autonomic control. They are the interface between the brain and the thoraco-abdominal viscera.</p>

        <h4>Cranial Nerve IX: The Glossopharyngeal Nerve</h4>
        <p><b>Functions:</b></p>
        <ul>
            <li><b>Motor:</b> Stylopharyngeus muscle (dilates pharynx during swallowing).</li>
            <li><b>Sensory:</b> Caudal 1/3 of tongue (taste and general sensation).</li>
            <li><b>Visceral Sensory:</b> Carotid Body (chemoreceptors for O2/CO2/pH) and Carotid Sinus (baroreceptors for blood pressure).</li>
            <li><b>Parasympathetic:</b> Otic Ganglion → Parotid Salivary Gland (secretomotor).</li>
        </ul>
        <p><b>Clinical:</b> Damage causes dysphagia (difficulty swallowing) and loss of gag reflex.</p>

        <h4>Cranial Nerve X: The Vagus Nerve ("The Wanderer")</h4>
        <p>In the ruminant, the Vagus is the lifeline of digestion and visceral homeostasis.</p>
        <p><b>Course:</b> Descends the neck in the Carotid Sheath along with the Vagosympathetic trunk and Common Carotid Artery.</p>
        
        <h5>Laryngeal Innervation (Critical for Surgery)</h5>
        <p><b>1. Cranial Laryngeal Nerve:</b></p>
        <ul>
            <li>Sensory to laryngeal mucosa above vocal cords.</li>
            <li>Motor to Cricothyroid muscle (tenses vocal cords).</li>
        </ul>
        <p><b>2. Recurrent Laryngeal Nerve (The "Recurrent" Path):</b></p>
        <ul>
            <li><b>Left Side:</b> Loops around the Aortic Arch (heart surgery risk!).</li>
            <li><b>Right Side:</b> Loops around the Right Subclavian Artery.</li>
            <li><b>Innervation:</b> All intrinsic laryngeal muscles EXCEPT Cricothyroid.</li>
            <li><b>Critical Muscle:</b> Cricoarytenoideus Dorsalis (CAD)—the ONLY abductor of the glottis (opens airway).</li>
        </ul>
        <p><b>Pathology—Laryngeal Hemiplegia ("Roaring"):</b> Neuropathy of the left recurrent laryngeal nerve (common in horses, rare in cattle) causes paralysis of the CAD muscle. The arytenoid cartilage collapses into the airway during inspiration, creating an audible roar. The left side is more vulnerable due to the longer course around the heart.</p>

        <h5>Gastric Innervation (Ruminant Specialization)</h5>
        <p>The dorsal and ventral vagal trunks control the intricate motility cycles of the rumen, reticulum, and omasum (eructation, regurgitation, remastication). Damage to these trunks (from traumatic reticuloperitonitis/hardware disease, or surgical transection) causes <b>Vagal Indigestion (Hoflund Syndrome)</b>—characterized by functional stenosis, rumen atony, and failure of eructation.</p>

        <h4>Cranial Nerve XI: The Accessory Nerve</h4>
        <p><b>Unique Origin:</b> Arises from both the cervical spinal cord (spinal root) and medulla (cranial root).</p>
        <p><b>Function:</b> Motor to the muscles of the neck and shoulder: Trapezius, Omotransversarius, Sternocephalicus, and Cleidocephalicus.</p>
        <p><b>Clinical:</b> Damage causes inability to elevate shoulder or turn neck effectively.</p>`,

        comparative: [
            { species: "Ox (Bos taurus)", note: "Jugular Foramen distinct and separate from Foramen Ovale. Recurrent laryngeal loops around aortic arch (left) and subclavian (right). Extensive ruminant vagal specialization for forestomach control." },
            { species: "Horse (Equus caballus)", note: "IX, X, XI exit via caudal aspect of Foramen Lacerum (not distinct Jugular Foramen). Left Recurrent Laryngeal Neuropathy ('Roaring') is common in large horses." },
            { species: "Dog (Canis lupus)", note: "Standard mammalian pattern. Recurrent laryngeal follows same looping pattern. Less pronounced vagal gastric control compared to ruminants." }
        ],
        clinical: "<b>Vagal Indigestion (Hoflund Syndrome):</b> Unilateral or bilateral damage to the vagal trunks (often from penetrating reticular foreign bodies or surgical complications) results in complete rumen atony, failure of eructation (bloat), and characteristic 'pipestream' feces. Requires rumenotomy or permanent fistulation in severe cases."
    },
    {
        title: "CN XII: The Hypoglossal Nerve",
        desc: `<b>The Tongue Master:</b><br>
        • Motor only (GSE); Origin: Medulla; Exit: <b>Hypoglossal Canal</b> (often double/triple in ox)<br>
        • Target: All intrinsic and extrinsic tongue muscles (Styloglossus, Hyoglossus, Genioglossus)<br>
        • Function: Prehension (wrapping tongue around grass), deglutition (swallowing), lapping<br>
        • <b>Clinical:</b> Paralysis leads to tongue atrophy, 'lolling' (hanging out), inability to prehend food<br>
        • <b>Listeria Connection:</b> CN XII deficits (tongue paralysis) + CN V (dropped jaw) + CN VII (facial droop) = classic Listeriosis presentation`,

        eliteDesc: `<h3>Cranial Nerve XII: The Hypoglossal Nerve</h3>
        <p>The final cranial nerve is purely motor, governing the complex muscular hydrostat that is the tongue—essential for prehension, manipulation of food, and deglutition.</p>

        <h4>Anatomical Topography</h4>
        <p><b>Origin:</b> Medulla oblongata (hypoglossal nucleus).<br>
        <b>Exit:</b> Hypoglossal Canal—frequently <b>double or triple</b> in the ox (a variation rare in the horse).<br>
        <b>Target Muscles:</b></p>
        <ul>
            <li><b>Extrinsic:</b> Styloglossus (retraction/elevation), Hyoglossus (depression), Genioglossus (protrusion).</li>
            <li><b>Intrinsic:</b> Longitudinal, transverse, and vertical muscles that shape the tongue for grasping.</li>
        </ul>

        <h4>Functional Significance</h4>
        <p>In cattle, the tongue performs the critical <b>prehension</b> function—wrapping around grass stems and tearing them against the dental pad. This requires coordinated contraction of all hypoglossal-innervated muscles. During swallowing, the tongue acts as a piston to propel the bolus into the pharynx.</p>

        <h4>Clinical Manifestations</h4>
        <p><b>Unilateral Paralysis:</b> Tongue deviates toward the affected side when protruded (due to unopposed contralateral genioglossus action).</p>
        <p><b>Bilateral Paralysis:</b> Tongue hangs out of mouth ('lolling'), becomes flaccid, shows rapid atrophy, and accumulates food (sialosis). Animal cannot prehend or swallow effectively, leading to starvation and aspiration pneumonia.</p>

        <h4>Neurological Integration</h4>
        <p>Hypoglossal function is often tested alongside other cranial nerves in neurological exams. The combination of:</p>
        <ul>
            <li>CN XII deficit (tongue paralysis)</li>
            <li>CN V deficit (dropped jaw)</li>
            <li>CN VII deficit (facial paralysis)</li>
        </ul>
        <p>...strongly suggests <b>Listeria monocytogenes</b> infection (circling disease), where bacteria ascend sensory branches of CN V and cause microabscesses in the brainstem affecting multiple cranial nerve nuclei.</p>`,

        comparative: [
            { species: "Ox (Bos taurus)", note: "Hypoglossal canal frequently double or triple. Tongue used for grasping grass (prehension). Heavy reliance on tongue for feeding." },
            { species: "Horse (Equus caballus)", note: "Single hypoglossal canal typically. Horse uses lips for prehension more than tongue; tongue used less for grasping, more for manipulation." },
            { species: "Dog (Canis lupus)", note: "Single hypoglossal canal. Tongue essential for lapping water and manipulation of food within mouth." }
        ],
        clinical: "<b>The Tongue Test:</b> Grasp the tongue and assess tone and withdrawal. In hypoglossal paralysis, the tongue is flaccid and atrophied. In Listeriosis, the tongue may show tremors or asymmetry. Always check for accompanying cranial nerve deficits to localize brainstem lesions."
    },
    {
        title: "Foramina & Exit Strategies: Comparative",
        desc: `<b>The Skull Floor Comparison:</b><br>
        • <b>Ox (Efficient Fusion):</b> Foramen Orbitorotundum (III, IV, VI, V1, V2); Foramen Ovale (V3—discrete); Jugular Foramen (IX, X, XI—distinct)<br>
        • <b>Horse (Complex Separation):</b> Orbital Fissure (III, IV, VI, V1); Foramen Rotundum → Alar Canal (V2); Foramen Lacerum/Oval Notch (V3); Foramen Lacerum caudal (IX, X, XI)<br>
        • <b>Dog (Standard Mammal):</b> Separate orbital fissure, rotundum, and ovale; Alar Canal for artery<br>
        • <b>Clinical:</b> Single lesion at Foramen Orbitorotundum (ox) affects all orbital nerves simultaneously—profound anesthesia but also profound paralysis risk`,

        eliteDesc: `<h3>Comparative Cranial Exit Anatomy</h3>
        <p>The skull floors of the Ox, Horse, and Dog differ significantly in their foramina patterns, creating distinct clinical implications for nerve blocks and pathological processes.</p>

        <h4>The Ox: Fusion and Efficiency</h4>
        <p>The bovine skull simplifies exits through fusion, creating larger, fewer openings:</p>
        <ul>
            <li><b>Foramen Orbitorotundum:</b> Massive fusion of orbital fissure and foramen rotundum. Transmits CN III, IV, VI, V1, V2, and ophthalmic veins. Located deep in orbit, formed by presphenoid/basisphenoid wings.</li>
            <li><b>Foramen Ovale:</b> Discrete, oval opening in basisphenoid wing transmitting CN V3 (Mandibular nerve). Separate from Jugular Foramen.</li>
            <li><b>Jugular Foramen:</b> Distinct opening between occipital and temporal bones transmitting CN IX, X, XI and jugular vein bulb.</li>
        </ul>
        <p><b>Angiology:</b> Maxillary artery courses on surface of pterygoid muscles (no Alar Canal).</p>

        <h4>The Horse: Separation and Complexity</h4>
        <p>The Equid skull maintains separate exits with complex routing:</p>
        <ul>
            <li><b>Orbital Fissure:</b> Transmits CN III, IV, VI, V1 only.</li>
            <li><b>Foramen Rotundum:</b> Transmits CN V2 only. Opens directly into <b>Alar Canal</b>.</li>
            <li><b>Foramen Lacerum:</b> Large, irregular, jagged gap at skull base.
                <ul>
                    <li><b>Oval Notch:</b> Rostral border of Foramen Lacerum serves as exit for CN V3.</li>
                    <li><b>Jugular Portion:</b> Caudal aspect serves as exit for CN IX, X, XI.</li>
                    <li><b>Carotid Notch:</b> Internal Carotid Artery enters here (persists in horse, regressed in ox).</li>
                </ul>
            </li>
        </ul>

        <h4>The Dog: The Standard Mammalian Pattern</h4>
        <ul>
            <li><b>Orbital Fissure:</b> CN III, IV, VI, V1.</li>
            <li><b>Foramen Rotundum:</b> CN V2 (separate).</li>
            <li><b>Foramen Ovale:</b> CN V3 (distinct).</li>
            <li><b>Alar Canal:</b> Present (like horse), transmitting maxillary artery.</li>
            <li><b>Foramen Lacerum:</b> Small, filled with cartilage in life.</li>
        </ul>

        <h4>Clinical Implications</h4>
        <p><b>Peterson Eye Block:</b> In cattle, targeting the Foramen Orbitorotundum blocks all orbital nerves (III, IV, VI, V1, V2) simultaneously. In horses, achieving equivalent blockade requires multiple injections or different approaches due to separate foramina.</p>
        <p><b>Surgical Risk:</b> In cattle, a single abscess or tumor at the Foramen Orbitorotundum can paralyze the entire globe and eliminate all facial sensation—anatomical efficiency becomes clinical vulnerability.</p>`,

        comparative: [
            { species: "Ox (Bos taurus)", note: "Foramen Orbitorotundum (fusion) present. Foramen Ovale discrete. Jugular Foramen distinct. NO Alar Canal (maxillary artery superficial)." },
            { species: "Horse (Equus caballus)", note: "Separate Orbital Fissure and Foramen Rotundum. Foramen Lacerum is large irregular gap containing Oval Notch (V3) and Jugular portion (IX, X, XI). Alar Canal present." },
            { species: "Dog (Canis lupus)", note: "Standard pattern: separate fissure, rotundum, and ovale. Alar Canal present for maxillary artery. Foramen Lacerum small." }
        ],
        clinical: "<b>Critical Localization:</b> Complete ophthalmoplegia (paralysis of all eye muscles) with sensory loss to the cornea and upper face in cattle localizes to the Foramen Orbitorotundum region. In horses, such diffuse deficits would suggest a cavernous sinus syndrome or multiple lesions rather than a single foramen issue."
    },
    {
        title: "Clinical Applications: Regional Anesthesia",
        desc: `<b>High-Stakes Field Blocks:</b><br>
        • <b>Cornual Nerve Block (Cattle):</b> 5-10mL lidocaine halfway along temporal ridge between lateral canthus and horn base; blocks V2 branch<br>
        • <b>Goat Modification:</b> Must block TWO sites—posterior (Cornual/V2) AND dorsomedial (Infratrochlear/V1)<br>
        • <b>Peterson Eye Block:</b> Targets Foramen Orbitorotundum; 15-20mL at 'V' notch (supraorbital process + zygomatic arch + coronoid process junction); blocks III, IV, VI, V1, V2<br>
        • <b>Auriculopalpebral Block:</b> Subcutaneous over zygomatic arch; motor block only (akinesia), NOT sensory—cornea still feels pain!<br>
        • <b>Safety:</b> Always aspirate before injection—Internal Maxillary Artery adjacent to Foramen Orbitorotundum`,

        eliteDesc: `<h3>Clinical Anesthesia Techniques</h3>
        <p>Mastery of cranial nerve anatomy enables precise regional anesthesia essential for veterinary practice—particularly dehorning and ocular surgery.</p>

        <h4>1. The Cornual Nerve Block (Dehorning)</h4>
        <p><b>Objective:</b> Anesthesia of the horn bud/horn for painless dehorning or disbudding.</p>
        
        <p><b>Anatomy (Ox):</b> The Cornual nerve is a branch of the Zygomaticotemporal nerve (from V2). It emerges from the orbit, running along the lateral border of the frontal bone's temporal ridge, covered by skin and thin frontalis muscle.</p>
        
        <p><b>Technique:</b></p>
        <ol>
            <li>Palpate the temporal ridge between the lateral canthus of the eye and the horn base.</li>
            <li>Insert needle halfway along this line, just ventral to the crest.</li>
            <li>Deposit 5-10mL Lidocaine subcutaneously and deeply along the periosteum.</li>
            <li>Wait 10 minutes. Test with needle prick before proceeding.</li>
        </ol>

        <h4>2. The "Goat Trap" Modification</h4>
        <p><b>Critical Difference:</b> The goat horn is supplied by TWO nerves:</p>
        <ul>
            <li>Cornual nerve (from V2, like ox)</li>
            <li>Cornual branch of the Infratrochlear nerve (from V1)</li>
        </ul>
        <p><b>Dual Technique Required:</b></p>
        <ol>
            <li><b>Site 1:</b> Posterior to the lateral canthus (standard cornual block).</li>
            <li><b>Site 2:</b> Dorsomedial to the eye, near the medial canthus, to catch the Infratrochlear branch.</li>
        </ol>
        <p>Failure to perform both blocks results in violent head shaking, vocalization, and failed restraint.</p>

        <h4>3. The Peterson Eye Block (Enucleation)</h4>
        <p><b>Objective:</b> Complete anesthesia and akinesia of the globe and orbit for enucleation (removal of the eye), usually due to Squamous Cell Carcinoma ("Cancer Eye").</p>
        
        <p><b>Anatomy:</b> This high-skill block targets the Foramen Orbitorotundum, blocking CN III, IV, VI (motor) and V1, V2 (sensory).</p>
        
        <p><b>Landmarks (The "V" Notch):</b></p>
        <ul>
            <li>Supraorbital Process of frontal bone (cranially)</li>
            <li>Zygomatic Arch (ventrally)</li>
            <li>Coronoid Process of the Mandible (caudally)</li>
        </ul>
        
        <p><b>Technique:</b></p>
        <ol>
            <li>Insert a curved 18G needle (10-12cm) at the notch formed by these structures.</li>
            <li>Advance horizontally and slightly caudally/medially.</li>
            <li>"Walk" the needle off the cranial border of the Coronoid Process of the mandible.</li>
            <li>Advance until it hits the bony plate of the sphenoid near the Foramen Orbitorotundum.</li>
            <li><b>ASPIRATE!</b> The Internal Maxillary Artery is adjacent—intravascular injection causes seizures.</li>
            <li>Inject 15-20mL slowly.</li>
        </ol>
        <p><b>Result:</b> Eye immobilized (akinesia) and numb (anesthesia). Note: Auriculopalpebral nerve (CN VII) is NOT blocked here; eyelids may still flutter unless separately blocked.</p>

        <h4>4. The Auriculopalpebral Block</h4>
        <p><b>Objective:</b> Stop eyelids from closing (akinesia) during eye examination or minor procedures.</p>
        <p><b>Nerve:</b> Auriculopalpebral branch of CN VII (facial).</p>
        <p><b>Technique:</b> Palpate the nerve crossing the dorsal aspect of the Zygomatic Arch. Inject 5mL subcutaneously.</p>
        <p><b>Critical Limitation:</b> This is a MOTOR block only. Sensation remains INTACT (cornea can still feel pain via V1). <b>Use ONLY for examination, not surgery.</b> For painful procedures, combine with topical anesthesia or retrobulbar block.</p>`,

        comparative: [
            { species: "Ox (Bos taurus)", note: "Cornual nerve block single site. Peterson block targets Foramen Orbitorotundum. Auriculopalpebral block for motor only." },
            { species: "Horse (Equus caballus)", note: "Cornual nerve block similar. Retrobulbar block more common than Peterson for ocular surgery due to separate foramina making Peterson less predictable." },
            { species: "Goat (Capra hircus)", note: "REQUIRES DUAL CORNUAL BLOCK—Cornual (V2) + Infratrochlear (V1) branches both innervate horn." }
        ],
        clinical: "<b>Safety Protocol:</b> When performing Peterson block, ALWAYS aspirate before injecting. If blood appears in the hub, withdraw slightly and re-aspirate. Intravenous injection of local anesthetic into the maxillary artery can cause immediate seizures, collapse, and death. Never exceed toxic dose calculations (usually 2-4mg/kg lidocaine maximum)."
    },
    {
        title: "Clinical Neurology: Pathology",
        desc: `<b>Pattern Recognition:</b><br>
        • <b>Listeriosis (Circling Disease):</b> Listeria monocytogenes ascends CN V sensory branches → brainstem microabscesses; Triad: CN V (dropped jaw), CN VII (facial droop), CN VIII (head tilt/circling)<br>
        • <b>Horner's Syndrome:</b> Sympathetic trunk damage (runs with vagus in neck) → Miosis (constricted pupil), Ptosis, Enophthalmos, <b>Dry nose</b> (bovine specific—loss of sweating on muzzle)<br>
        • <b>Laryngeal Hemiplegia (Roaring):</b> Left Recurrent Laryngeal Neuropathy → paralysis of Cricoarytenoideus Dorsalis (only abductor) → arytenoid collapse into airway during inspiration<br>
        • <b>Trigeminal Neuritis:</b> Dropped jaw, inability to close mouth, jaw deviation toward lesion side<br>
        • <b>Facial Paralysis:</b> Drooping ear/lip, absent palpebral reflex (CN VII), widened palpebral fissure, food in cheek`,

        eliteDesc: `<h3>Cranial Nerve Pathology</h3>
        <p>Understanding the anatomical course and function of cranial nerves enables precise localization of neurological lesions.</p>

        <h4>1. Listeriosis ("Circling Disease")</h4>
        <p><b>Etiology:</b> <i>Listeria monocytogenes</i> bacteria ascend the sensory branches of CN V from mucosal abrasions (often from feeding coarse silage or hay). They cause microabscesses in the brainstem trigeminal nuclei and adjacent cranial nerve nuclei.</p>
        
        <p><b>Clinical Presentation:</b> Asymmetric cranial nerve deficits typical of brainstem lesions:</p>
        <ul>
            <li><b>CN V:</b> Dropped jaw, facial analgesia (unilateral).</li>
            <li><b>CN VII:</b> Facial paralysis—drooping ear and lip, absent palpebral reflex (cannot blink), widened palpebral fissure.</li>
            <li><b>CN VIII:</b> Head tilt, circling toward affected side, nystagmus.</li>
            <li><b>IX, X, XII:</b> Dysphagia, tongue paralysis.</li>
        </ul>
        <p><b>Prognosis:</b> Guarded to poor; requires aggressive antibiotic therapy (penicillin, oxytetracycline) and supportive care. Permanent deficits common if treatment delayed.</p>

        <h4>2. Horner's Syndrome (Angiology-Neurology Interface)</h4>
        <p><b>Etiology:</b> Damage to the Sympathetic Trunk (which runs with the Vagus nerve in the carotid sheath in the neck). Causes loss of sympathetic tone to the head.</p>
        
        <p><b>Classic Triad:</b></p>
        <ul>
            <li><b>Miosis:</b> Constricted pupil (loss of sympathetic dilation).</li>
            <li><b>Ptosis:</b> Drooping upper eyelid (Müller muscle atony).</li>
            <li><b>Enophthalmos:</b> Sunken eye (retraction of globe due to loss of orbital smooth muscle tone).</li>
        </ul>
        
        <p><b>Bovine Specific Sign:</b> Loss of sweating on the nose on the affected side (dry nose/hyperthermia of the muzzle) due to loss of sympathetic innervation to cutaneous sweat glands. This is a key differentiator in cattle compared to small animals.</p>
        
        <p><b>Common Causes:</b> Traumatic reticuloperitonitis (hardware disease) with vagus involvement, neck trauma, guttural pouch infections (horses), brachial plexus avulsion.</p>

        <h4>3. Laryngeal Hemiplegia ("Roaring")</h4>
        <p><b>Pathophysiology:</b> Neuropathy of the left Recurrent Laryngeal Nerve (longer course around aortic arch makes it vulnerable) causes paralysis of the Cricoarytenoideus Dorsalis (CAD) muscle—the ONLY abductor of the glottis.</p>
        
        <p><b>Clinical Signs:</b> The arytenoid cartilage collapses into the airway during inspiration, creating an audible roaring sound (stridor) and exercise intolerance. Common in large horses (Draft breeds, Thoroughbreds), rare but possible in cattle.</p>
        
        <p><b>Diagnosis:</b> Endoscopic examination of larynx shows failure of left arytenoid to abduct during inspiration.</p>

        <h4>4. Facial Nerve Paralysis</h4>
        <p><b>Signs:</b> Drooping ear, drooping lip (commissure), absent palpebral reflex (cannot blink), widened palpebral fissure, food impaction in cheek (buccinator paralysis), and dry cornea (lacrimal gland paralysis leading to exposure keratitis).</p>
        
        <p><b>Causes:</b> Listeriosis (brainstem), otitis media/interna (nerve inflammation in facial canal), trauma to stylomastoid foramen region, guttural pouch disease (horses).</p>

        <h4>5. Trigeminal Neuritis</h4>
        <p><b>Unilateral:</b> Jaw deviates toward affected side when opened; unilateral muscle atrophy.</p>
        <p><b>Bilateral:</b> "Dropped jaw"—inability to close mouth; tongue protrusion; inability to chew; profuse salivation; starvation if chronic.</p>`,

        comparative: [
            { species: "Ox (Bos taurus)", note: "Horner's syndrome shows dry nose (sweat loss). Listeriosis common from silage feeding. Left recurrent laryngeal neuropathy rare but possible." },
            { species: "Horse (Equus caballus)", note: "Left laryngeal hemiplegia ('Roaring') very common in large breeds. Guttural pouch disease affects CN VII, IX, X, XI, XII and sympathetic trunk." },
            { species: "Dog (Canis lupus)", note: "Trigeminal neuritis (dropped jaw) common in older dogs, often idiopathic. Otitis externa/media commonly affects facial nerve." }
        ],
        clinical: "<b>Localization Rule:</b> Multiple cranial nerve deficits (especially asymmetric) localizing to the brainstem suggest Listeriosis or space-occupying lesions (tumors, abscesses). Peripheral single nerve deficits suggest trauma or localized inflammation (e.g., otitis media affecting CN VII specifically)."
    }
],
    "Angiology": [
        {
            title: "Arteries of the Head & Neck",
            desc: "<b>High-Yield Points:</b><br>• <b>Common Carotid Artery</b> (in carotid sheath) — chief artery of head; branches at level of larynx into:<br>  – <b>External Carotid</b> — main artery of face, jaws, tongue, dura.<br>  – <b>Internal Carotid</b> — to brain (via carotid rete in ox).<br>  – <b>Occipital</b> — to brain & deep neck.<br><br><b>Important Branches of External Carotid:</b><br>• <b>Lingual artery</b> — to tongue.<br>• <b>Facial artery</b> — over mandibular notch (HORSE PULSE SITE).<br>• <b>Maxillary artery</b> — through alar canal; supplies face, palate, teeth, eye.<br>• <b>Superficial Temporal artery</b> — to temporalis & horn (KEY in dehorning hemorrhage).<br>• <b>Cornual (Horn) artery</b> — branch of superficial temporal; supplies horn — <b>must be ligated during dehorning to prevent fatal hemorrhage</b>.<br>• <b>Infraorbital, Supraorbital, Auricular, Lingual</b> arteries.",
            eliteDesc: "<b>ARTERIAL SUPPLY OF THE HEAD & NECK</b><br><br><b>I. COMMON CAROTID ARTERY (CCA):</b><br>• Origin: Off the brachiocephalic trunk (right) or directly from the aortic arch (left in some species).<br>• Course: Ascends in the carotid sheath, deep in the jugular furrow, alongside the trachea & oesophagus.<br>• Termination: At the level of the larynx → branches into <b>external carotid + occipital + internal carotid (when present)</b>.<br><br><b>II. INTERNAL CAROTID ARTERY:</b><br>• In Ox: Functional in young, becomes obliterated in adults — replaced by the <b>maxillary route via the carotid rete mirabile</b> at the base of the brain.<br>• In Horse: Persists; passes through guttural pouch and enters cranium via foramen lacerum.<br>• In Dog: Patent through life; standard route to brain.<br><br><b>III. EXTERNAL CAROTID ARTERY (the workhorse for the head):</b><br>• <b>Lingual a.</b> — main artery to the tongue (entered when ligating Stenson's duct).<br>• <b>Facial a.</b> — Wraps around ventral border of mandible at mandibular notch. <b>Standard pulse site in HORSE.</b><br>• <b>Caudal Auricular a.</b> — to ear.<br>• <b>Superficial Temporal a.</b> — major branch crossing zygomatic arch; gives rise to:<br>  – <b>Cornual (Horn) artery</b> — supplies horn base. <b>MUST be ligated during dehorning</b> to prevent severe hemorrhage from the cut horn base.<br>  – <b>Auriculopalpebral a.</b> — to eye and ear region.<br>• <b>Maxillary a.</b> — terminal branch; runs through alar canal, gives off:<br>  – <b>Inferior alveolar a.</b> (mandibular teeth via mandibular foramen).<br>  – <b>Infraorbital a.</b> (upper teeth via infraorbital canal).<br>  – <b>Sphenopalatine, Greater palatine, Buccal arteries</b> to palate, sinuses, cheek.<br>  – <b>External ophthalmic a.</b> + branches to eye, lacrimal gland.<br><br><b>IV. CAROTID RETE MIRABILE (in Ox & Sheep):</b><br>• Network of small arteries at the base of the brain.<br>• Function: <b>brain cooling</b> — counter-current heat exchange between cool venous blood (from nasal cavity sinuses) and arterial blood; protects brain from overheating in hot pastures.<br>• Same anatomical principle present in giraffe (massive rete handles pressure changes when raising/lowering neck).<br><br><b>V. AGE-RELATED ARTERY CHANGES IN OX:</b><br>The internal carotid regresses and the brain comes to depend almost entirely on the maxillary artery + carotid rete. This is why the <b>Peterson's eye block</b> works so reliably — local anaesthetic placed near the rete diffuses to multiple cranial nerves.",
            comparative: [
                { species: "Horse", note: "Internal carotid passes through guttural pouch — site of fatal mycotic erosion ('guttural pouch mycosis' → epistaxis). Facial artery palpable on mandible." },
                { species: "Ox", note: "Internal carotid regresses; brain supplied via maxillary + rete. <b>Cornual artery</b> + superficial temporal artery vital in dehorning." },
                { species: "Dog", note: "Common carotid pulse and lingual artery (sublingual) used for pulse during anaesthesia." }
            ],
            clinical: "<b>DEHORNING (Cattle):</b> Cornual nerve block + ligation/cautery of <b>cornual artery</b> (branch of superficial temporal). Failure → severe hemorrhage. <b>Guttural Pouch Mycosis (Horse):</b> Aspergillus erodes internal carotid → fatal epistaxis. <b>Carotid puncture during jugular venepuncture (Horse):</b> bright red pulsatile blood — emergency.",
            imgCode: "head_arteries"
        },
        {
            title: "Veins & Lymph Nodes of the Head & Neck",
            desc: "<b>Major Veins:</b><br>• <b>External Jugular Vein</b> — chief drainage of head; in jugular furrow; <b>standard IV site in cattle/horse</b>.<br>  Formed by union of <b>linguofacial + maxillary veins</b> at the angle of mandible.<br>• <b>Linguofacial vein</b> — drains tongue + face.<br>• <b>Maxillary vein</b> — drains deep face, jaws.<br>• Internal jugular vein — small or absent in horse; well-developed in dog.<br>• <b>Vertebral vein</b> — drains brain & cervical spine.<br><br><b>Lymph Nodes (Routine in Clinical Exam):</b><br>• <b>Parotid LN</b> — caudal to mandible.<br>• <b>Mandibular LN</b> — at angle of mandible.<br>• <b>Lateral & Medial Retropharyngeal LN</b> — deep, behind pharynx.<br>• <b>Superficial Cervical (Prescapular) LN</b> — base of neck, on supraspinatus.<br>• <b>Deep Cervical LN</b> — chains along carotid (cranial, middle, caudal).",
            eliteDesc: "<b>VENOUS DRAINAGE & LYMPH NODES OF HEAD/NECK</b><br><br><b>I. EXTERNAL JUGULAR VEIN (V. jugularis externa):</b><br>• <b>Formation:</b> Linguofacial vein + Maxillary vein, just behind the mandibular angle, in front of the parotid gland.<br>• <b>Course:</b> Descends in the jugular furrow → over the first rib → joins subclavian vein to form cranial vena cava.<br>• <b>Tributaries:</b><br>  – Linguofacial vein (lingual + facial branches).<br>  – Maxillary vein (deep facial structures).<br>  – Cranial superficial cervical vein.<br>  – Hyoid venous arch (in horse).<br>• <b>Clinical:</b> #1 IV access in large animals. Avoid the lower 1/3 (close to carotid).<br><br><b>II. INTERNAL JUGULAR VEIN:</b> Drains brain via dural sinuses → cavernous sinus → emissary veins → IJV. In horse, very small; most cranial venous drainage is via vertebral and external jugular veins.<br><br><b>III. VERTEBRAL VEIN:</b> Runs through transverse foramina of cervical vertebrae alongside the vertebral artery; drains spinal cord, deep neck.<br><br><b>IV. LYMPH NODES OF THE HEAD (Routine clinical palpation in cattle):</b><br><br><b>A. Parotid Lymph Centre:</b><br>• <b>Parotid LN</b> — under cover of cranial border of parotid salivary gland.<br>• Drains: dorsal head, eye, ear.<br><br><b>B. Mandibular Lymph Centre:</b><br>• <b>Mandibular LN</b> — at angle of mandible, in fat under skin.<br>• Drains: lower face, lips, tongue, oral cavity.<br>• <b>Routinely palpated in clinical exam</b>; enlargement = oral disease, dental infection, or generalized lymphadenopathy.<br><br><b>C. Retropharyngeal Lymph Centre:</b><br>• <b>Lateral retropharyngeal LN</b> — behind pharynx, lateral.<br>• <b>Medial retropharyngeal LN</b> — deep, between dorsal pharynx and longus capitis.<br>• Drains: pharynx, larynx, deep face, tongue.<br>• <b>Site for tuberculosis lesions</b> in cattle (granulomas in retropharyngeal LN are a flag at meat inspection).<br><br><b>V. LYMPH NODES OF THE NECK:</b><br>• <b>Cranial, Middle, Caudal Deep Cervical LN</b> — chains along carotid sheath; drain neck structures, larynx, trachea.<br>• <b>Superficial Cervical (Prescapular) LN</b> — on cranial border of supraspinatus, deep to brachiocephalicus. Drains: skin of neck, shoulder, cranial forelimb. <b>Routinely palpated.</b><br><br><b>VI. EFFERENT FROM NECK:</b><br>All lymph from head & neck eventually drains via the <b>tracheal lymph trunks</b> (right and left) into:<br>• <b>Right venous angle</b> (right tracheal trunk → right lymphatic duct → right venous angle).<br>• <b>Left venous angle</b> (left tracheal trunk → thoracic duct).",
            comparative: [
                { species: "Horse", note: "External jugular dominant; internal jugular tiny. Lower jugular furrow has carotid lying just deep — risk during venepuncture." },
                { species: "Cattle", note: "Routine palpation: parotid + mandibular + retropharyngeal + prescapular LN. Bovine TB: caseous granulomas in retropharyngeal LN." },
                { species: "Dog", note: "Mandibular LN palpable in normal dogs. Generalized lymphadenopathy = lymphoma." }
            ],
            clinical: "<b>Tuberculosis Inspection:</b> Mandatory examination of mandibular, retropharyngeal, mediastinal, mesenteric LN at meat inspection. <b>Lymphadenopathy in dog:</b> Mandibular + prescapular + popliteal LN palpation = lymphoma screen.",
            imgCode: "head_veins_lymph"
        }
    ],
    "Splanchnology": []
};