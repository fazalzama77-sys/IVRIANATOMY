// =========================================================
// WHY SECTION DATA - Biomechanical Engineering Comparisons
// Functional anatomy explained through engineering principles
// =========================================================

if (typeof anatomyData === 'undefined') {
    var anatomyData = [];
}

anatomyData = [
    {
        id: 1,
        title: "Clavicle",
        category: "forelimb",
        comparison: "Tiger vs. Horse/Ox",
        why: "The Tiger possesses a rudimentary clavicle to stabilize the shoulder for grappling and climbing (scansorial) while allowing some flexibility. The Horse and Ox completely lack a bony clavicle, relying on the 'Synsarcosis' (muscular sling). This absence removes the bony connection to the trunk, allowing the scapula to glide craniocaudally to increase stride length.",
        clinical: "In cats, the clavicle is often mistaken for a bone sequestrum or esophageal foreign body on radiographs. In horses, it is completely non-existent.",
        img: "https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/3442/2018/07/17191952/Full-cat-skeleton.jpg",
        analogy: "Think of the Tiger's clavicle like a strut bar in a rally car—it keeps the wheels aligned for rough handling. The Horse lacks the strut bar to let the suspension (scapula) travel freely back and forth, turning the whole front end into a shock absorber.",
        quiz: {
            question: "Why does the horse lack a clavicle?",
            options: ["To prevent shoulder dislocation", "To allow the scapula to slide for longer stride length", "To reduce weight", "To allow for digit movement"],
            correctIndex: 1,
            explanation: "Without a bony connection to the sternum, the scapula is free to slide forward and back, significantly increasing the length of the stride."
        }
    },
    {
        id: 2,
        title: "Acromion Process",
        category: "forelimb",
        comparison: "Ox vs. Horse",
        why: "The Acromion serves as a lever arm for the deltoid muscle to aid in abduction (moving limb away from body). The Horse, specialized for speed, moves strictly in the sagittal plane; lateral movement is a liability. Thus, the horse lacks the acromion, resulting in a streamlined shoulder. The Ox possesses it for stability on uneven terrain.",
        clinical: "Palpation landmark: The acromion is palpable in the ox and dog but absent in the horse. This changes the location of the palpable 'point of the shoulder'.",
        img: "https://scontent.fdel25-3.fna.fbcdn.net/v/t1.6435-9/31841852_1976979379298331_8399290339579396096_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZQqb8bRtoJYQ7kNvwHCfn4K&_nc_oc=Adlv2BiHI8M7MOrV6s9tr7Plija9e5Pze3lSXKU0tmGFvCt35ZDjy33Df2H3TynfGWde0tgEM4zrZrJITEZqwIa8&_nc_zt=23&_nc_ht=scontent.fdel25-3.fna&_nc_gid=F3P4vAhLJRQNx8c4YUcC2w&oh=00_Afq_TuEVHl4Gc-HnKFmCPYMYzCcCJrzn8d3baaFulMa_Rw&oe=699442FC",
        analogy: "The Acromion is like a side-handle on a machine; it gives you leverage to pull things sideways. The Horse is a drag racer—it only goes straight. The design omits the side-handle to reduce drag and weight.",
        quiz: {
            question: "Which species lacks an acromion process on the scapula?",
            options: ["Ox", "Dog", "Horse", "Cat"],
            correctIndex: 2,
            explanation: "The horse lacks the acromion because it does not need powerful abduction (lateral movement); it is optimized for sagittal (forward) speed."
        }
    },
    {
        id: 3,
        title: "Intermediate Tubercle",
        category: "forelimb",
        comparison: "Horse vs. Ox/Dog",
        why: "Unique to the Horse. This tubercle divides the bicipital groove and acts as a locking mechanism for the fibrous internal tendon of the Biceps Brachii. It is the critical proximal anchor for the 'Passive Stay Apparatus', allowing the horse to lock its shoulder in extension and sleep standing up.",
        clinical: "Bicipital bursitis is common in horses due to high friction over this tubercle. Radiographic 'skyline' views must account for the double groove shape.",
        img: "https://cdn1.imaios.com/i/imaios-images/web/images/vetanatomy/modules/horse-osteology-illustrations/images/v5/55a5278023ceee664caa404fcdf8c3743f91e873ab1e21d765ec4d9835d28e76?ar=640:670&bg=FFFFFF&fit=crop&p64=NjE2LDIy&t=SW50ZXJtZWRpYXRlIHR1YmVyY2xl&tx=616&ty=22&w=350&wk=1&s=c3899846a64487b58f821096c66504af",
        analogy: "Imagine a parking pawl in an automatic transmission. The Intermediate Tubercle is the physical pin that locks the gear (biceps tendon) in place, so the car (horse) doesn't roll away (collapse) when parked.",
        quiz: {
            question: "What is the primary function of the intermediate tubercle in the horse?",
            options: ["To increase muscle power", "To protect the joint", "To lock the biceps tendon for the passive stay apparatus", "To separate muscles"],
            correctIndex: 2,
            explanation: "It acts as a locking pin for the biceps tendon, allowing the horse to fix the shoulder joint in extension with zero muscle effort."
        }
    },
    {
        id: 4,
        title: "Supratrochlear Foramen",
        category: "forelimb",
        comparison: "Dog vs. Horse",
        why: "A hole in the distal humerus found in Dogs. It allows the anconeal process of the ulna to snap deeply into the humerus, permitting extreme elbow extension required for the long stride of a sprinting predator. In Horses, this area is solid bone to support the massive vertical weight of the column.",
        clinical: "Radiographic interpretation: The foramen appears as a lucent (dark) zone in dogs which is normal, but a similar look in large animals would suggest a cyst or fracture.",
        img: "https://cdn1.imaios.com/i/imaios-images/web/images/vetanatomy/modules/dog-arthrology-illustrations/images/v6/7faf624bda0e1b29ecfdbde0695f0c60279882f0cc3726c82a84eb12a68dc242?ar=640:670&bg=FFFFFF&fit=crop&p64=NjY0LDYwMA&t=U3VwcmF0cm9jaGxlYXIgZm9yYW1lbg&tx=664&ty=600&w=350&wk=1&s=6906607bc6479d1e7443237636f1cb7f",
        analogy: "The Dog's elbow is like a folding knife with a notch cut out so the blade can open 180 degrees. The Horse's elbow is like a solid steel pillar—it can't fold as far, but it can hold up a building.",
        quiz: {
            question: "Why does the dog have a supratrochlear foramen?",
            options: ["To allow passage of arteries", "To reduce weight", "To allow the anconeal process to fit during hyperextension", "To prevent dislocation"],
            correctIndex: 2,
            explanation: "The hole allows the 'beak' of the ulna (anconeal process) to tuck inside the humerus, allowing the arm to straighten fully."
        }
    },
    {
        id: 5,
        title: "Radius & Ulna Fusion",
        category: "forelimb",
        comparison: "Horse/Ox vs. Dog",
        why: "In Cursorial ungulates (Horse/Ox), the radius and ulna are fused to prevent pronation and supination (rotation). This locks the limb into a rigid, energy-efficient column for forward motion. The Dog possesses separate bones to allow rotation, which is essential for grappling prey and grooming.",
        clinical: "Fracture repair: In dogs, both bones may need plating. In horses, the distal ulna is fused and is not a separate surgical entity; ulnar fractures are usually proximal (olecranon).",
        img: "https://cdn1.imaios.com/i/imaios-images/web/images/vetanatomy/modules/horse-osteology-illustrations/images/v5/031a3f027c5453d4a0d61f05d22deb73729e90be76777a50774a577aca5e43f9?ar=640:670&bg=FFFFFF&fit=crop&w=200&wk=1&s=8c2f1097d2ad3f26aa6adb3e5ed3494f",
        analogy: "The Dog's forearm is like a complex robot arm that can twist and turn. The Horse's forearm is welded shut into a single I-beam. You lose the ability to twist, but you gain immense strength for supporting weight.",
        quiz: {
            question: "What functional trade-off occurs with the fusion of the radius and ulna in ungulates?",
            options: ["Agility vs Speed", "Loss of rotation (pronation/supination) for increased stability", "Weight vs Strength", "Flexion vs Extension"],
            correctIndex: 1,
            explanation: "Fusion eliminates the ability to rotate the forearm (twist), which stabilizes the limb as a weight-bearing column for efficient running."
        }
    },
    {
        id: 6,
        title: "Pronator Teres",
        category: "forelimb",
        comparison: "Horse vs. Dog",
        why: "In the Dog, this is a fleshy muscle used to actively rotate the forearm. In the Horse, where rotation is impossible due to fusion, the structure exists as a fibrous ligament that reinforces the medial collateral ligament of the elbow, providing passive stability.",
        clinical: "In the horse, it serves as a landmark for the medial collateral ligament but has no contractile function.",
        img: "https://cdn1.imaios.com/i/imaios-images/web/images/vetanatomy/modules/dog-myology-illustrations/images/v4/247e11de1d8c95736495c694fc688b2f833b481daefe9f59d58722f200612305?ar=640:670&bg=FFFFFF&fit=crop&p64=NjIwLDI2Ng&w=200&wk=1&s=12feca2f1f176988f083b11f453c80c5",
        analogy: "In the Dog, this is the motor that spins the wheel. In the Horse, the motor is absent; instead, there is a steel cable (ligament) to just hold the wheel straight.",
        quiz: {
            question: "How does the Pronator Teres differ in the horse compared to the dog?",
            options: ["It is a flexor of the carpus", "It is absent", "It is present as a fibrous ligament", "It is fused with the biceps"],
            correctIndex: 2,
            explanation: "Since the horse cannot pronate (rotate) its arm, the tissue exists as fibrous tissue to act as a passive stabilizer."
        }
    },
    {
        id: 7,
        title: "Interosseous Muscle",
        category: "forelimb",
        comparison: "Horse vs. Dog",
        why: "In the Dog, these are fleshy muscles for digit flexion. In the Horse, the structure is entirely tendinous, known as the 'Suspensory Ligament'. It acts as a powerful spring, storing elastic energy during the stance phase and returning it for propulsion, while preventing fetlock hyperextension.",
        clinical: "Desmitis (inflammation) of the Suspensory Ligament is a major cause of lameness in sport horses. In dogs, interosseous atrophy is rare.",
        img: "https://s3.amazonaws.com/wp-s3-dressagetoday.com/wp-content/uploads/2025/01/15190521/Inner_structures_of_a_horses_lower_leg-copy-787x1024.jpg",
        analogy: "The Dog uses a hydraulic piston (muscle) to move the toes. The Horse uses a heavy-duty bungee cord (ligament). When the horse lands, the bungee stretches and snaps back, flinging the horse forward for free.",
        quiz: {
            question: "What is the primary function of the Suspensory Ligament in the horse?",
            options: ["To actively flex the digit", "To store elastic energy and support the fetlock", "To extend the carpus", "To rotate the phalanges"],
            correctIndex: 1,
            explanation: "It acts as a spring, capturing energy when the foot hits the ground and preventing the fetlock from collapsing."
        }
    },
    {
        id: 8,
        title: "Distal Check Ligament",
        category: "forelimb",
        comparison: "Horse vs. Ox",
        why: "A robust safety cable in the Horse connecting the carpus to the Deep Digital Flexor Tendon. It protects the muscle belly from tearing under the massive load of a single digit and assists in the Stay Apparatus. It is rudimentary or absent in the Ox, which splits the load over two digits.",
        clinical: "'Check Ligament Desmotomy' is a surgical procedure performed in horses to treat club foot (flexural deformity); this is not performed in cattle.",
        img: "https://open.lib.umn.edu/app/uploads/sites/208/2019/03/labeled-anatomy-distal-limb-1024x633.png",
        analogy: "Think of a tow truck cable. The Check Ligament is a secondary safety chain attached to the main cable. If the load gets too heavy, the safety chain takes the strain so the winch motor (muscle) doesn't burn out.",
        quiz: {
            question: "Why is the Distal Check Ligament so developed in the horse?",
            options: ["To allow independent toe movement", "To protect the deep digital flexor muscle from overstretching", "To assist in carpal flexion", "To provide lubrication"],
            correctIndex: 1,
            explanation: "It mechanically transfers the load from the tendon directly to the bone, bypassing the muscle belly to prevent tearing under high loads."
        }
    },
    {
        id: 9,
        title: "Digit Number",
        category: "forelimb",
        comparison: "Horse vs. Ox",
        why: "The Horse possesses a single digit (III) which minimizes distal mass, reducing the inertia required to swing the leg at high speeds. The Ox possesses two digits (cloven hoof) to provide a wider base and independent movement for traction on muddy, uneven terrain.",
        clinical: "Amputation of a digit is a viable salvage procedure in cattle (due to the paired digit). It is catastrophic and generally impossible in the horse.",
        img: "https://cdn-5d2e57e3f911c80ef4a235f4.closte.com/wp-content/uploads/2025/07/C21-Horse-Hoof-vs-Cow-Hoof-A.jpg",
        analogy: "The Horse is a road bike with one thin, high-pressure tire for maximum speed and low weight. The Ox is an ATV with wide, dual tires for grip in the mud.",
        quiz: {
            question: "Biomechanically, why does the horse have a single digit?",
            options: ["To improve balance", "To increase traction", "To reduce distal limb mass and inertia for speed", "To allow for sharper turning"],
            correctIndex: 2,
            explanation: "Lightening the end of the limb (pendulum) requires less energy to swing it back and forth, allowing for a faster stride rate."
        }
    },
    {
        id: 10,
        title: "Sacrosciatic Ligament",
        category: "hindlimb",
        comparison: "Ox/Horse vs. Dog",
        why: "In large animals, this is a broad sheet forming the lateral wall of the pelvis. It provides a massive surface area for the attachment of the propulsion muscles (gluteals/hamstrings) and supports the heavy pelvic viscera. In the Dog, it is merely a cord (Sacrotuberous ligament).",
        clinical: "In the Ox, this ligament softens visibly prior to parturition (calving) under hormonal influence; checking its relaxation is a standard way to predict labor.",
        img: "https://i.pinimg.com/736x/ab/ff/b3/abffb37325830d1fdf94693fb8be438f.jpg",
        analogy: "The Dog uses a rope to tie the tail bone to the hip. The Horse/Ox uses a sheet of plywood (broad ligament). The plywood is needed to hold up the heavy guts and provide a wall for the huge engine muscles to bolt onto.",
        quiz: {
            question: "What functional role does the broad Sacrosciatic Ligament play in large animals?",
            options: ["It allows for tail wagging", "It forms the lateral pelvic wall for muscle attachment and visceral support", "It connects the femur to the tibia", "It prevents the bladder from expanding"],
            correctIndex: 1,
            explanation: "It turns the open pelvis into a closed box, supporting the internal organs and offering a huge surface for the gluteal muscles to attach."
        }
    },
    {
        id: 11,
        title: "Third Trochanter",
        category: "hindlimb",
        comparison: "Horse vs. Ox",
        why: "A massive bony prominence on the femur found ONLY in the Horse. It serves as a lever arm for the Superficial Gluteal muscle, providing the explosive power required for the equine gallop. It is absent in the Ox and Dog.",
        clinical: "Fracture of the third trochanter in horses leads to disruption of the gluteal apparatus and significant lameness. This anatomical landmark does not exist in cattle exams.",
        img: "https://cdn1.imaios.com/i/imaios-images/web/images/vetanatomy/modules/horse-osteology-illustrations/images/v5/19355a5f55a04729d73cf65a20a62f3dc18384097c7512390d277770efd66f5c?ar=640:670&bg=FFFFFF&fit=crop&p64=ODA4LDU0NA&w=200&wk=1&s=52b3b7ccb0f1e282c3b8aee43d2019b8",
        analogy: "The Third Trochanter is like a turbocharger mount found only on the race car (Horse). It gives the main engine (gluteal muscle) a mechanical advantage to crank the wheels (legs) faster.",
        quiz: {
            question: "Which species possesses a Third Trochanter on the femur?",
            options: ["Ox", "Dog", "Horse", "Pig"],
            correctIndex: 2,
            explanation: "The Third Trochanter is unique to the horse among domestic species, serving as a massive lever for the superficial gluteal muscle."
        }
    },
    {
        id: 12,
        title: "Accessory Ligament",
        category: "hindlimb",
        comparison: "Horse vs. Ox",
        why: "Unique to Equids. An extra ligament that anchors the femur to the prepubic tendon. It restricts abduction (limiting kicking range to straight back) and acts as an 'anti-kick device' to prevent hip dislocation during violent motion.",
        clinical: "Its presence makes hip luxation (dislocation) extremely rare in horses compared to dogs/cattle. However, if luxation does occur, the tissue damage is usually catastrophic.",
        img: "https://cdn1.imaios.com/i/imaios-images/web/images/vetanatomy/modules/horse-osteology-illustrations/images/v5/2f8b1c6624b36e5dccfc864ee3a2b83546a40afb7501eef527ccc465f0d249b3?ar=640:670&bg=FFFFFF&fit=crop&p64=NjEyLDEwNDA&t=R3Jvb3ZlIGZvciBhY2Nlc3NvcnkgbGlnYW1lbnQgb2YgZmVtdXI&tx=612&ty=1040&w=350&wk=1&s=8c4a6094001e1b7c0443934b2d4a571f",
        analogy: "Most hips are held in by one screw. The Horse has a second, heavy-duty safety chain bolted to the belly. This stops the leg from flying sideways when it kicks, but also makes it almost impossible to pop the joint back in if it breaks.",
        quiz: {
            question: "What is the clinical significance of the Accessory Ligament of the Femoral Head?",
            options: ["Greater range of motion", "It makes hip dislocation rare but difficult to reduce", "It is a site of infection", "It aids in urination"],
            correctIndex: 1,
            explanation: "This extra ligament holds the hip so tightly that dislocation is rare; however, if force is sufficient to dislocate it, the damage is severe."
        }
    },
    {
        id: 13,
        title: "Gluteobiceps Muscle",
        category: "hindlimb",
        comparison: "Ox vs. Horse",
        why: "In the Ox, the Superficial Gluteal and Biceps Femoris are fused into one massive sheet (Gluteobiceps). This reflects the ruminant need for sustained, low-velocity power efficiency. In the Horse, they are separate to allow the range of motion needed for high-speed running.",
        clinical: "Intramuscular injections in the rump of cattle enter this fused mass; deep injections risk hitting the sciatic nerve which runs beneat<it.",
        img: "https://cdn1.imaios.com/i/imaios-images/web/images/vetanatomy/modules/bull-general-anatomy-illustrations/images/v1/9890dbe314ad6291e2d2a4a3fbdcb8aaff5fdf0d3947dde974a9c174ea64b8a8?ar=640:670&bg=FFFFFF&fit=crop&p64=MTE0NCw1MzA&t=R2x1dGVvYmljZXBzIG11c2NsZQ&tx=1144&ty=530&w=350&wk=1&s=7c2f50a66e6d0ea10e3be51070b37792",
        analogy: "The Horse has separate gears for speed and torque. The Ox has the gears fused into one giant 'Super-Gear'. It's simpler and stronger for hauling heavy loads, but it can't shift quickly.",
        quiz: {
            question: "Why are the superficial gluteal and biceps femoris fused in the Ox?",
            options: ["For higher speed sprinting", "To create a single efficient unit for low-velocity weight bearing", "To protect the femoral artery", "For independent leg movement"],
            correctIndex: 1,
            explanation: "Ruminants prioritize sustained, efficient power for carrying a heavy gut over the high-speed independent articulation required by a horse."
        }
    },
    {
        id: 14,
        title: "Patellar Locking Mechanism",
        category: "hindlimb",
        comparison: "Horse vs. Dog",
        why: "Critical for the Equine Stay Apparatus. The medial trochlear ridge of the femur is enlarged with a hook. The patella can be pulled over this hook to mechanically lock the stifle in extension, allowing the horse to sleep standing up.",
        clinical: "'Upward Fixation of the Patella' (Locked Stifle) is a common condition where the ligament gets stuck on the hook, locking the leg in extension.",
        img: "https://www.americanfarriers.com/ext/resources/images/2021/1121/Stifle/F12_Stifle-Bennett.jpg",
        analogy: "Imagine a folding table with that little metal ring that slides over the joint to keep it straight. The Horse has a built-in metal ring (patella hook) that slides over the knee, so it can stand forever without its muscles getting tired.",
        quiz: {
            question: "What structure allows the horse to lock its stifle joint?",
            options: ["Lateral meniscus", "Enlarged medial trochlear ridge of the femur", "Cruciate ligaments", "Gastrocnemius tendon"],
            correctIndex: 1,
            explanation: "The medial patellar ligament hooks over the enlarged medial trochlear ridge, mechanically fixing the joint in extension."
        }
    },
    {
        id: 15,
        title: "Fibula Reduction",
        category: "hindlimb",
        comparison: "Ox vs. Dog",
        why: "In the Dog, the fibula is a complete bone for stability and muscle attachment. In the Ox, the shaft is absent to save weight, but the distal end persists as the 'Malleolar Bone'. This separate bone acts as a pulley block for the hock.",
        clinical: "The os malleolare in cattle can be mistaken for a chip fracture on radiographs if the vet is not familiar with ruminant anatomy.",
        img: "https://www.vetscraft.com/wp-content/uploads/Rudimentary-Fibula-Bone-in-Ox.jpg",
        analogy: "The Dog uses a full second beam (fibula) alongside the main one (tibia). The Ox design omits the middle of the beam as useless weight, keeping only the end-cap (malleolar bone) to hold the joint together.",
        quiz: {
            question: "What is the 'os malleolare' in the Ox?",
            options: ["A sesamoid bone", "The separate distal end of the fibula", "A fractured piece", "A bone in the ear"],
            correctIndex: 1,
            explanation: "The shaft of the fibula is absent, but the distal end remains as a separate bone to articulate with the hock."
        }
    },
    {
        id: 16,
        title: "Peroneus Tertius",
        category: "hindlimb",
        comparison: "Horse vs. Ox",
        why: "In the Ox, this is a fleshy muscle flexing the hock. In the Horse, it exists as a tendinous cord (Reciprocal Apparatus). It mechanically links the stifle and hock: if the stifle flexes, the hock MUST flex.",
        clinical: "Rupture of the peroneus tertius in the horse is pathognomonic: the hock can be extended while the stifle is flexed, which is mechanically impossible in a healthy horse.",
        img: "https://www.science-equine.com/images/articles/p3/f1866/happyhorsemassage.jpg",
        analogy: "In the Ox, the ankle is moved by a motor. In the Horse, the ankle is connected to the knee by a solid steel rod. You cannot bend the knee without the rod pushing the ankle.",
        quiz: {
            question: "If a horse can extend its hock while the stifle is flexed, what has ruptured?",
            options: ["Superficial Digital Flexor", "Gastrocnemius", "Peroneus Tertius", "Achilles Tendon"],
            correctIndex: 2,
            explanation: "The Peroneus Tertius is the tendinous cord that forces the hock to flex when the stifle flexes. If it breaks, this mechanical link is lost."
        }
    },
    {
        id: 17,
        title: "Soleus Muscle",
        category: "hindlimb",
        comparison: "Horse vs. Cat",
        why: "Rudimentary or absent in the Horse. The horse relies on the gastrocnemius and the mechanical stay apparatus for stance. In the Cat, the Soleus is an active postural muscle aiding in jumping and stealthy movement.",
        clinical: "In surgical dissection of the equine crus, this muscle is negligible or hard to identify, unlike in small animals where it is prominent.",
        img: "https://d1kvkzjpuym02z.cloudfront.net/552d56fde4b0372690af458d.jpg?Expires=1992586390&Signature=So7MrIBqhKgq8c-GrxdzNaJVLXsNjJkJSaeIg7Nyk6D58F29pX00Alg6SI0ugAhJYhAaRAkUU3tYrgQ~7vD2s99HHrTTzmq~nSdMCeeMd5poFMIuWBWcn3b-7YnAXv5sX~ZPhbB~oi2GRTuhHCzS4dHipQyCf8~IatUPwd-CNKE_&Key-Pair-Id=APKAJXYWFXCDTRLR3EFA",
        analogy: "The Soleus is a fine-tuning stabilizer, like the traction control system on a sports car (Cat). The Horse is a freight train; it relies on heavy springs and momentum, so the design excludes the traction control system entirely.",
        quiz: {
            question: "Why is the soleus muscle rudimentary in the horse?",
            options: ["It is not needed for the horse's locomotion", "The horse relies on mechanical stay mechanisms", "The horse has no calcaneus", "Fused with the deep flexor"],
            correctIndex: 1,
            explanation: "The horse supports its weight using the passive stay apparatus, rendering the slow-twitch postural function of the soleus unnecessary."
        }
    },
    {
        id: 18,
        title: "Nuchal Ligament",
        category: "axial",
        comparison: "Dog vs. Horse/Ox",
        why: "Herbivores have heavy heads on long necks. They possess a massive 'Lamellar Sheet' portion of the nuchal ligament to passively support the head during grazing. The Dog, with a lighter head carried closer to the body, only possesses the cord (funicular) portion.",
        clinical: "Nuchal bursitis ('Poll Evil' or 'Fistulous Withers') occurs in horses due to infection or trauma of the bursae associated with this massive ligament system.",
        img: "https://scontent.fdel25-1.fna.fbcdn.net/v/t39.30808-6/492071289_1107956834706317_6623511566263310522_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dXhIdmdcoZgQ7kNvwHsUhpm&_nc_oc=AdlH28RmlHnJ5CRrShE64znTeasFLYsOFegRXf9p5R3Ge3n4Z6G3VOg2s7sywnph1T7ZEH6ugV0-48BheGzOqNaz&_nc_zt=23&_nc_ht=scontent.fdel25-1.fna&_nc_gid=dnT7pvWXdl4M_ZX4qomPhA&oh=00_Afq3K7_9ZQ3g3VY6C2VPZvNVJUVkWJ95Tx8aLX3qrYI4-Q&oe=6972C3ED",
        analogy: "The Dog uses a leash to hold its head up. The Horse uses a massive suspension bridge cable system (Lamellar sheet). Without it, the horse would burn huge amounts of energy just trying to keep its nose off the ground.",
        quiz: {
            question: "What part of the nuchal ligament is present in the Horse but absent in the Dog?",
            options: ["Funicular part (Cord)", "Laminar part (Sheet)", "Supraspinous part", "Atlantal part"],
            correctIndex: 1,
            explanation: "The laminar sheet provides the extra support needed for the long, heavy neck of the grazer, which the short-necked dog does not need."
        }
    },
    {
        id: 19,
        title: "Omotransversarius",
        category: "axial",
        comparison: "Ox vs. Horse",
        why: "In the Ox, this is a separate muscle allowing independent neck/shoulder movement. In the Horse, it is fused to the Brachiocephalicus muscle. This creates a single, powerful 'neck-to-arm' chain that protracts the limb efficiently for the rhythmic oscillation of the gallop.",
        clinical: "In neck dissections, students will fail to find a separate omotransversarius in the horse, causing confusion if they are used to canine/bovine anatomy.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWbsk_hOrlFG7U4lGtPoS38ahl2vluSNw_Q&s",
        analogy: "The Ox has a separate steering linkage and suspension arm. The Horse has them welded together. This means when it throws its head forward, the leg AUTOMATICALLY flies forward. It trades independent steering for drag-racing speed.",
        quiz: {
            question: "In the horse, the Omotransversarius muscle is fused to which other muscle?",
            options: ["Trapezius", "Brachiocephalicus", "Sternocephalicus", "Latissimus Dorsi"],
            correctIndex: 1,
            explanation: "It fuses with the Brachiocephalicus to form a seamless protraction chain for the forelimb."
        }
    },
    {
        id: 20,
        title: "Gall Bladder",
        category: "axial",
        comparison: "Horse vs. Ox",
        why: "Absent in the Horse. The Gall Bladder stores bile for bolus release during meals. The Horse is a 'trickle feeder' (grazing constantly), so it requires a continuous trickle of bile from liver to gut, rendering the storage organ unnecessary. Ox/Dogs are meal feeders and possess it.",
        clinical: "Horses cannot get cholecystitis (gall bladder inflammation) or gallstones, but they can suffer from bile duct blockages.",
        img: "https://pressbooks.umn.edu/app/uploads/sites/103/2021/08/liver.png",
        analogy: "The Gall Bladder is a storage tank for a burst of fuel. The Ox eats big meals, so it needs the tank. The Horse is a pipeline—it eats non-stop, so the fuel (bile) flows directly from the refinery (liver) to the engine, no tank needed.",
        quiz: {
            question: "Why does the horse lack a gall bladder?",
            options: ["It does not digest fat", "It is a continuous grazer requiring continuous bile secretion", "It has a second stomach instead", "It produces bile in the pancreas"],
            correctIndex: 1,
            explanation: "Gall bladders store bile for distinct meals. Since horses eat continuously, they do not need to store bile; they secrete it constantly."
        }
    },

    // ==========================================================
    // WILDLIFE vs DOMESTIC ANIMAL — BIOMECHANICAL COMPARISONS
    // ==========================================================
    {
        id: 21,
        title: "Cheetah Spine",
        category: "wildlife",
        comparison: "Cheetah vs. Horse",
        why: "The Cheetah possesses an extremely flexible thoracolumbar spine that flexes and extends like a coiled spring during the gallop, adding ~40% to stride length and propelling speeds of 110 km/h. The Horse possesses a near-rigid back (locked withers, strong supraspinous ligament) for energy-efficient sustained galloping but loses the explosive spinal-spring boost.",
        clinical: "Cheetah autopsies show extreme wear of intervertebral discs by mid-life. In horses, hyperflexible 'roach' or 'sway' backs are pathological — the equine design demands rigidity.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/TheCheethcat.jpg/640px-TheCheethcat.jpg",
        analogy: "The Cheetah's spine is a bow-and-arrow — it loads and releases elastic energy with each stride. The Horse's spine is a steel I-beam — it doesn't bend, it just transmits the engine's power directly to the wheels.",
        quiz: {
            question: "How does the cheetah achieve its extraordinary stride length?",
            options: ["Longer leg bones than the horse", "Extreme flexion-extension of the thoracolumbar spine", "Hollow pneumatic bones", "Shorter neck for forward thrust"],
            correctIndex: 1,
            explanation: "Each gallop cycle involves dramatic spinal flexion (compression) and extension (recoil), adding nearly half a stride length per bound."
        }
    },
    {
        id: 22,
        title: "Giraffe Neck & Rete Mirabile",
        category: "wildlife",
        comparison: "Giraffe vs. Horse/Ox",
        why: "Despite a 2-metre neck, the Giraffe has only 7 cervical vertebrae — the same as horse, ox and human — but each is hugely elongated. To prevent blackouts when the head drops 5 m to drink, it has a thickened left ventricle, valves in the jugular vein, and a 'rete mirabile' (vascular sponge) at the skull base that buffers cerebral blood pressure swings.",
        clinical: "Anaesthesia of giraffes is high-risk: positional changes cause dramatic BP shifts. No comparable vascular braking system exists in horse or ox.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Giraffe_standing.jpg/480px-Giraffe_standing.jpg",
        analogy: "The Giraffe is a tower crane with a built-in pressure-relief valve at the top. The Horse is a normal car — bring its head up and down quickly and it gets a head-rush. The Giraffe's rete mirabile is the surge protector that lets it operate over a 5-metre vertical range without fainting.",
        quiz: {
            question: "How many cervical vertebrae does a giraffe have?",
            options: ["7 (same as most mammals)", "12", "20", "It varies between individuals"],
            correctIndex: 0,
            explanation: "Almost all mammals — mouse, human, horse, giraffe — have exactly 7 cervical vertebrae. The giraffe simply has VERY LONG ones."
        }
    },
    {
        id: 23,
        title: "Elephant Foot Pad",
        category: "wildlife",
        comparison: "Elephant vs. Horse",
        why: "The Elephant stands on the tips of its toes (digitigrade-unguligrade hybrid) supported by a massive subcutaneous fibro-fatty 'cushion' that distributes 5+ tonnes of body weight. There are no springs or stay apparatus — it is a pure hydraulic column. The Horse uses the suspensory ligament and frog as elastic shock absorbers.",
        clinical: "Captive elephants on hard concrete develop foot abscesses and chronic arthritis because the fat pad cannot compensate for unnatural surfaces. The horse hoof is, by contrast, designed for impact.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/640px-African_Bush_Elephant.jpg",
        analogy: "The Horse's hoof is a high-tech sneaker with airbags. The Elephant's foot is a stack of telephone books inside a leather slipper — it doesn't bounce, it just absorbs and squashes flat under enormous load.",
        quiz: {
            question: "What absorbs concussive force in the elephant foot?",
            options: ["Frog and digital cushion", "A massive fibro-fatty subcutaneous pad", "Hollow pneumatic bones", "Long synovial bursae"],
            correctIndex: 1,
            explanation: "Elephants have no spring system. A thick fat-and-fibre cushion under the bones spreads the weight. They walk on tiptoes resting on this pad."
        }
    },
    {
        id: 24,
        title: "Kangaroo Hindlimb Tendons",
        category: "wildlife",
        comparison: "Kangaroo vs. Dog",
        why: "The Kangaroo's gastrocnemius and plantaris tendons are massively elongated and elastic, storing 70% of the energy of each hop and releasing it on the next bound — the most efficient gait in mammals. The thick muscular tail acts as a fifth limb and counterbalance during pentapedal walking. The Dog uses muscle-driven flexor-extensor cycles instead.",
        clinical: "Achilles tendon ruptures in kangaroos are immediately fatal. In dogs, surgical repair is feasible because the system is muscle-redundant.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Kangaroo_and_joey03.jpg/640px-Kangaroo_and_joey03.jpg",
        analogy: "The Kangaroo's leg is a pogo stick — the spring (tendon) does most of the work and the muscle just resets it. The Dog's leg is a regular piston engine that has to fire muscle every step.",
        quiz: {
            question: "What makes the kangaroo's hop so energy-efficient?",
            options: ["Strong hip extensors only", "Elastic energy stored in the gastrocnemius and plantaris tendons", "Light hollow bones", "Backward-pointing hindlimbs"],
            correctIndex: 1,
            explanation: "The huge spring-like tendons capture 70% of landing energy and release it on the next bound — like a pogo stick."
        }
    },
    {
        id: 25,
        title: "Retractable Claws",
        category: "wildlife",
        comparison: "Tiger/Lion vs. Dog",
        why: "Big cats (Felidae) possess elastic dorsal ligaments that hold the distal phalanx (P3) bearing the claw RETRACTED at rest, sparing the claw point from wear. Active flexor tendons protrude the claws for grappling prey. The Dog's claw is non-retractable and always exposed, blunting on the ground — a trade-off for traction during pursuit.",
        clinical: "Onychectomy ('declawing') in cats severs P3 itself — biomechanically equivalent to amputating a human fingertip. Dogs only need claw trimming.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/640px-Walking_tiger_female.jpg",
        analogy: "Cat claws are switchblades — sharp, hidden until needed, deployed by a flick of mechanism. Dog claws are like the cleats on football boots — always out, providing grip but blunted by every step.",
        quiz: {
            question: "What mechanism keeps a tiger's claws retracted?",
            options: ["Active muscle contraction", "Elastic dorsal ligaments pulling P3 back", "Skin folds covering the claw", "Bone fusion locking the joint"],
            correctIndex: 1,
            explanation: "At rest, elastic dorsal ligaments hold P3 retracted. Active flexor tendons override this to deploy claws for hunting."
        }
    },
    {
        id: 26,
        title: "Camel Foot Pad",
        category: "wildlife",
        comparison: "Camel vs. Horse",
        why: "The Camel walks on a broad, soft, splayed footpad shared between two digits — extremely wide surface area to prevent sinking into sand. The horn is reduced; weight is borne by the dermal pad. The Horse hoof is a hard, narrow capsule built for hard ground impact, useless on dunes.",
        clinical: "Camels in stony terrain wear pad ulcers (hoof rot equivalent). Horse hooves crack and chip on soft sandy ground because they need a firm base.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg/640px-07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg",
        analogy: "The Horse hoof is a stiletto heel — concentrates force, perfect on a hardwood floor (savanna). The Camel foot is a snowshoe — spreads load wide, perfect for soft sand.",
        quiz: {
            question: "Why does the camel have a wide soft footpad instead of a hoof?",
            options: ["It cannot grow horn", "To distribute weight on soft sand without sinking", "To regulate temperature", "To allow swimming"],
            correctIndex: 1,
            explanation: "Wide, splayed digits with a fibro-fatty pad spread the body weight over a large surface — the same principle as a snowshoe."
        }
    },
    {
        id: 27,
        title: "Antlers vs. Horns",
        category: "wildlife",
        comparison: "Deer vs. Ox/Goat",
        why: "Antlers (deer family — Cervidae) are pure BONE, branched, shed and regrown ANNUALLY, and grow encased in nourishing 'velvet' skin. Horns (cattle, sheep, goats — Bovidae) are PERMANENT bony cores covered in keratin sheath that grows continuously. Antlers are the fastest growing bone known (up to 2.5 cm/day).",
        clinical: "Dehorning (cattle) cuts living horn-and-bone — bleeding and pain. Velvet harvesting from deer is also invasive; antlers later shed naturally without any wound.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Hjort_p%C3%A5_Dyrehaven.jpg/640px-Hjort_p%C3%A5_Dyrehaven.jpg",
        analogy: "Horns are like a permanent steel helmet — slow, permanent, always on. Antlers are like seasonal tournament armour — grown for one rutting season, then discarded and rebuilt fresh next year.",
        quiz: {
            question: "What is the key biological difference between antlers and horns?",
            options: ["Antlers are keratin, horns are bone", "Antlers are bone shed annually; horns are bony cores covered in permanent keratin", "Antlers grow only in females", "Horns are made of cartilage"],
            correctIndex: 1,
            explanation: "Antlers (deer) = pure bone, branched, shed every year. Horns (cattle, goat) = permanent bone core with a keratin sheath."
        }
    },
    {
        id: 28,
        title: "Bat Wing Skeleton",
        category: "wildlife",
        comparison: "Bat vs. Dog",
        why: "The Bat's forelimb is radically modified for flight: digits II–V are massively elongated to support a thin double-layered skin membrane (patagium) that forms the wing. The thumb (digit I) remains short with a claw. The dog forelimb retains the standard 5 short digits for ground locomotion.",
        clinical: "Wing-membrane tears in bats compromise thermoregulation and flight; healing is poor. Canine paw injuries are routine to repair.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Pteropus_giganteus_-Kolkata%2C_West_Bengal%2C_India-8.jpg/640px-Pteropus_giganteus_-Kolkata%2C_West_Bengal%2C_India-8.jpg",
        analogy: "The Dog's forelimb is a normal hand. The Bat took the same hand, stretched the fingers to umbrella-spoke length, and pulled a kite skin between them. Same parts — radically different function.",
        quiz: {
            question: "Which structures of the bat forelimb are most modified for flight?",
            options: ["The radius and ulna only", "The carpal bones", "Digits II to V (greatly elongated)", "The clavicle"],
            correctIndex: 2,
            explanation: "Digits II–V are stretched to many times their original length to support the patagium (wing membrane). The thumb stays short and clawed."
        }
    },
    {
        id: 29,
        title: "Whale Vestigial Pelvis",
        category: "wildlife",
        comparison: "Whale/Dolphin vs. Dog",
        why: "Cetaceans (whales, dolphins) have lost their hindlimbs entirely and retain only a pair of small 'floating' pelvic bones suspended in muscle, with NO connection to the vertebral column. They serve only as anchor points for reproductive musculature. The dog pelvis, in contrast, is the fixed weight-bearing platform of the hindlimb.",
        clinical: "Vestigial pelvic bones can be felt on dissection of stranded cetaceans. These bones serve as anchor points for reproductive musculature and are a notable example of structural variation across species.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bottlenose_Dolphin_KSC04pd0178.jpg/640px-Bottlenose_Dolphin_KSC04pd0178.jpg",
        analogy: "The Dog's pelvis is the chassis of a car. The Whale kept the chassis bolts but threw away the wheels, axle and frame — leaving just two stubs floating uselessly inside the body.",
        quiz: {
            question: "What is the role of the cetacean pelvic bone?",
            options: ["It supports the tail flukes", "It is fused to the spine for stability", "It floats free in muscle and anchors reproductive muscles only", "It supports vestigial limbs that emerge in old age"],
            correctIndex: 2,
            explanation: "The whale pelvis is non-articulated — completely free-floating in soft tissue — and serves only as muscle attachment for reproductive structures."
        }
    },
    {
        id: 30,
        title: "Ostrich Two-Toed Foot",
        category: "wildlife",
        comparison: "Ostrich vs. Fowl",
        why: "The Ostrich is the ONLY living bird with just 2 toes (digits III and IV) — digit III bears most of the weight on a thick keratin pad, like a hoof. Reduced toe number means lower distal limb mass, lower swing inertia, and top running speeds of 70 km/h. Common fowl retain 4 toes for perching and grasping.",
        clinical: "Ostriches in captivity are prone to nail and footpad injuries because all weight passes through one digit. A nail crack is a major welfare concern.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Ostrich_Ngorongoro_05.jpg/640px-Ostrich_Ngorongoro_05.jpg",
        analogy: "Fowl have a typical four-prong garden fork foot — good grip on a perch. The Ostrich shaved that down to a hoof-like 2-prong claw foot — useless for perching, but sprints across the savanna like a feathered horse.",
        quiz: {
            question: "How many toes does an ostrich have on each foot?",
            options: ["1", "2", "3", "4"],
            correctIndex: 1,
            explanation: "Ostriches are uniquely DIDACTYL among birds. Digit III bears most weight (with a hoof-like nail); digit IV is small and lateral."
        }
    },
    {
        id: 31,
        title: "Snake Skull Kinesis",
        category: "wildlife",
        comparison: "Python vs. Lizard",
        why: "Snake skulls have multiple movable joints between the bones (cranial kinesis) and the lower jaw halves are joined ONLY by an elastic ligament — not a fused symphysis. This lets a snake swallow prey wider than its head. Lizards (and most reptiles) have rigid jaw symphyses limiting gape.",
        clinical: "When examining a snake post-mortem, the loose mandibular symphysis allows easy oral examination but also makes jaw fractures common when handled roughly.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Boa_constrictor_in_zoo_Cameron_Park_in_Waco%2C_TX_2024.jpg/640px-Boa_constrictor_in_zoo_Cameron_Park_in_Waco%2C_TX_2024.jpg",
        analogy: "A Lizard's jaw is a one-piece nutcracker. A Snake's jaw is a stretchy sock-puppet — every joint can pop, slide and walk independently around the prey, dragging it inward bit by bit.",
        quiz: {
            question: "Why can a snake swallow prey wider than its head?",
            options: ["The skull is made of cartilage", "The lower jaw halves are joined by elastic ligament, not fused bone", "The skull stretches like rubber", "Snakes regurgitate and re-swallow"],
            correctIndex: 1,
            explanation: "Snake mandibles are joined ventrally only by an elastic ligament — they spread apart, allowing each side to 'walk' the prey down separately."
        }
    },
    {
        id: 32,
        title: "Frog Urostyle",
        category: "wildlife",
        comparison: "Frog vs. Dog",
        why: "Frogs have fused all their post-sacral vertebrae into a single rigid rod called the UROSTYLE that extends caudally from the sacrum. Together with the elongated ilia and fused tibiofibula, this turns the entire body into a launch catapult, transferring all hindlimb thrust into a single forward leap. The dog has separate caudal vertebrae for tail flexibility.",
        clinical: "Urostyle fractures in pet frogs (calcium deficiency / metabolic bone disease) cause complete loss of jumping ability — a guarded prognosis.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Litoria_chloris02.jpg/640px-Litoria_chloris02.jpg",
        analogy: "The Dog has a flexible chain of tail vertebrae for steering. The Frog welded them all into a single steel push-rod that channels every drop of leg power forward, like the spear behind a slingshot.",
        quiz: {
            question: "What is the urostyle in frogs?",
            options: ["A jaw bone", "A fused rod of post-sacral vertebrae", "An ear ossicle", "A skin gland"],
            correctIndex: 1,
            explanation: "All post-sacral (caudal) vertebrae fuse into one rigid bony rod that channels hindlimb power into the jump."
        }
    },
    {
        id: 33,
        title: "Bear Plantigrade Stance",
        category: "wildlife",
        comparison: "Bear vs. Dog",
        why: "Bears are PLANTIGRADE — they walk on the entire sole of the foot (carpus to digit), like humans. This gives stability for standing upright and digging but limits running speed. Dogs are DIGITIGRADE — they walk only on their toes, raising the heel — gaining stride length and speed at the cost of stability.",
        clinical: "Bears develop sole pad lesions and arthritis on hard zoo flooring. Dog footpads are designed for repeated impact.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/2010-kodiak-bear-1.jpg/640px-2010-kodiak-bear-1.jpg",
        analogy: "Bear walking = wearing flat sandals — comfortable, stable, but slow. Dog walking = wearing high-heels (toe-walking) — fast and graceful, but less stable on rough ground.",
        quiz: {
            question: "How do bears walk compared to dogs?",
            options: ["Bears are digitigrade like dogs", "Bears are plantigrade — using the whole sole of the foot", "Bears are unguligrade — walking on hoof tips", "Bears walk on knuckles"],
            correctIndex: 1,
            explanation: "Bears press the entire sole (heel + foot + toes) on the ground — plantigrade. This trades speed for stability and is what lets them stand upright easily."
        }
    },
    {
        id: 34,
        title: "Hare/Rabbit Tibiofibula Fusion",
        category: "wildlife",
        comparison: "Hare vs. Dog",
        why: "Hares and rabbits have a FUSED tibia + fibula in the lower leg, like a horse — eliminating rotation but locking the limb into a stiff, lightweight, energy-efficient column for explosive sprinting and zig-zag escape. Dogs retain separate tibia and fibula for some rotation.",
        clinical: "Tibial fractures in rabbits often involve the fused fibular spike, complicating repair. Pet rabbits also have very thin cortical bone — easily fractured during rough handling.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Lepus_californicus_2.jpg/640px-Lepus_californicus_2.jpg",
        analogy: "The Dog's lower leg is two separate sticks — flexible, can rotate. The Hare's lower leg is a single welded pole — rigid, light, ready to fire like an arrow when the predator strikes.",
        quiz: {
            question: "Why is the rabbit/hare tibia and fibula fused?",
            options: ["For better fat storage", "To create a rigid lightweight column for sprinting", "To allow rotation of the foot", "To house the bone marrow"],
            correctIndex: 1,
            explanation: "Fusion produces a stiff, light leg that won't twist or absorb energy uselessly — perfect for explosive escape sprints."
        }
    },
    {
        id: 35,
        title: "Crocodile 'High Walk'",
        category: "wildlife",
        comparison: "Crocodile vs. Lizard",
        why: "Unlike most reptiles, crocodilians can switch from a sprawling 'belly-slide' posture to a fully UPRIGHT 'high walk' where the limbs are positioned vertically beneath the body — like a mammal. This allows them to walk overland with elevated trunk clearance. Lizards remain sprawling, with limbs splayed laterally.",
        clinical: "In crocodile veterinary handling, the high-walk capability means escape speed on land is significantly higher than expected (~17 km/h short bursts).",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Saltwater_crocodile.jpg/640px-Saltwater_crocodile.jpg",
        analogy: "Lizards crawl like a sliding push-up. Crocodiles can stand UP and walk like a dog when needed — they're a reptile capable of the mammalian stance of putting the legs underneath.",
        quiz: {
            question: "What is the crocodilian 'high walk'?",
            options: ["A swimming motion", "A fully upright limb posture similar to mammals", "A defensive display", "Climbing using forelimbs only"],
            correctIndex: 1,
            explanation: "Crocodiles can rotate their limbs to a parasagittal (vertical, under-the-body) posture for fast overland travel — unique among living reptiles."
        }
    },
    {
        id: 36,
        title: "Hippopotamus Bone Density",
        category: "wildlife",
        comparison: "Hippopotamus vs. Pig",
        why: "Hippos have PACHYOSTOTIC bones — abnormally dense, heavy cortical bone — that act as natural ballast, allowing them to walk along riverbeds underwater (negative buoyancy) instead of swimming. The Pig (their closest terrestrial relative biomechanically) has normal-density bones and floats easily.",
        clinical: "Hippo skeletons are unusually heavy in dissection. The dense bone means fractures are uncommon but, if they occur, are devastating because of poor bone vascularity.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Hipopotame.JPG/640px-Hipopotame.JPG",
        analogy: "Most animals are like inflatable rafts — they float. The Hippo is a submarine with lead in its hull — naturally heavy enough to walk along the river bottom without effort.",
        quiz: {
            question: "Why do hippos walk along riverbeds rather than swim?",
            options: ["They cannot swim", "Pachyostotic (abnormally dense) bones make them negatively buoyant", "Their lungs are very small", "They breathe through their skin"],
            correctIndex: 1,
            explanation: "Their bones are unusually dense — natural ballast that makes them sink and walk underwater rather than float."
        }
    },
    {
        id: 37,
        title: "Owl Silent Flight",
        category: "wildlife",
        comparison: "Owl vs. Fowl",
        why: "Owls have SERRATED (comb-like) leading edges on their primary flight feathers and a soft velvety surface that breaks up the airflow into micro-turbulence — silencing wing-flap noise so prey cannot hear them coming. Domestic fowl have smooth-edged feathers; their flight is loud and inefficient.",
        clinical: "Damage to the leading-edge serrations (e.g. captive owls hitting cage wire) impairs hunting success significantly.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bubo_virginianus_06.jpg/640px-Bubo_virginianus_06.jpg",
        analogy: "Fowl wings are like a sheet of paper flapped through the air — noisy buffeting. Owl wings are like that paper with a frilly comb glued onto the edge — the comb breaks the airflow into tiny silent eddies. Stealth bombers borrowed this design.",
        quiz: {
            question: "What makes owl flight nearly silent?",
            options: ["Smaller wing area", "Serrated leading edge feathers and velvety wing surface", "Hollow feather shafts", "Flapping in slow motion only"],
            correctIndex: 1,
            explanation: "The serrated leading edge plus velvety surface texture eliminates the turbulent whoosh that other birds make in flight — letting owls hunt by stealth."
        }
    },
    {
        id: 38,
        title: "Squirrel Reversible Hindfoot",
        category: "wildlife",
        comparison: "Squirrel vs. Dog",
        why: "Tree squirrels can rotate their HINDFEET 180° at the ankle joint, gripping a tree trunk with the toes pointing UPWARD. This lets them descend headfirst — feet act like grappling hooks. The Dog's ankle is a hinge joint with no rotation, so dogs cannot climb down a tree headfirst.",
        clinical: "Pet squirrels with arthritis of the ankle lose the ability to descend trees and must be re-housed at ground level.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Sciurus-vulgaris_hernandeangelis_stockholm_2008-06-04.jpg/480px-Sciurus-vulgaris_hernandeangelis_stockholm_2008-06-04.jpg",
        analogy: "The Dog's ankle is a hinge — it only flexes-extends. The Squirrel's ankle is a swivel mount — the foot can rotate completely backward, so the toes point UP the trunk while the body climbs DOWN. Like climbing crampons that flip over on demand.",
        quiz: {
            question: "How can a squirrel descend a tree headfirst?",
            options: ["It uses its tail as a grip", "It rotates its hindfeet 180° at the ankle so toes point upward", "It glides down with skin flaps", "It hops down in jumps"],
            correctIndex: 1,
            explanation: "Tree squirrels have a uniquely mobile tarsal joint — the foot rotates 180°, so claws can grip the bark while the body points downward."
        }
    },
    {
        id: 39,
        title: "Bison Thoracic Hump",
        category: "wildlife",
        comparison: "Bison vs. Ox",
        why: "The American/Indian Bison has dramatically ELONGATED spinous processes on T2–T8 (some over 30 cm long), forming the famous shoulder hump. They serve as a long lever arm for the powerful nuchal-supraspinous ligament that supports the massive head used to plough snow for grazing. Domestic ox has short, normal-length spines.",
        clinical: "In bison, head-injury / wither-region trauma is more dangerous because of the extensive ligamentous attachments along these tall spines.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/American_bison_k5680-1.jpg/640px-American_bison_k5680-1.jpg",
        analogy: "The Ox has a regular roof beam over its shoulders. The Bison has a CRANE TOWER built up there — the long spines provide the leverage needed to swing a massive head through deep snow without exhausting the neck muscles.",
        quiz: {
            question: "What forms the bison's prominent shoulder hump?",
            options: ["Fat deposit only", "Greatly elongated thoracic spinous processes (T2–T8)", "Hypertrophied muscle alone", "Fused thoracic vertebrae"],
            correctIndex: 1,
            explanation: "The hump is built on a scaffold of dramatically tall T2–T8 spinous processes — needed to anchor the powerful neck ligaments that swing the heavy head."
        }
    },
    {
        id: 41,
        title: "Bovine Lobulated Kidney",
        category: "axial",
        comparison: "Ox vs. Horse/Dog",
        why: "The Ox kidney has 15-20 visible external lobes ('bunch of grapes') and is multipyramidal internally — with NO renal pelvis. The Horse, Dog and most domestic species have a smooth, bean-shaped, unipyramidal kidney with a single funnel-shaped renal pelvis. The lobulated pattern in cattle is the embryonic configuration that never fuses, providing extra surface area to handle the huge water turnover of the rumen-driven physiology.",
        clinical: "On rectal palpation, the surface lobulation of the bovine kidney is unmistakable. In ultrasound, the lack of a renal pelvis means stones tend to lodge in the ureter rather than the pelvis. The 'wandering' left kidney of cattle is pushed across the midline by the rumen — palpable to the right of midline at L3-L5.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cattle_kidney.jpg/640px-Cattle_kidney.jpg",
        analogy: "The ox kidney is like a bunch of grapes wired together — many small filtration units stay visible on the surface. The horse kidney is the same fruit blended into a smooth bean — same job, sleeker shell.",
        quiz: {
            question: "Which structure is ABSENT in the bovine kidney?",
            options: ["Renal cortex", "Nephrons", "Renal pelvis", "Hilus"],
            correctIndex: 2,
            explanation: "The ox kidney is multipyramidal with NO single renal pelvis — calyces drain directly into the ureter. Horse and dog have a typical renal pelvis."
        }
    },
    {
        id: 42,
        title: "Cloven Hoof of Ruminants",
        category: "hindlimb",
        comparison: "Ox vs. Horse",
        why: "The Ox walks on TWO functional digits (III + IV) — the cloven hoof — with two non-weight-bearing dewclaws (II + V). The Horse has reduced to ONE digit (III) for maximum running speed. The cloven design distributes weight on uneven ground (mountains, swamps) and provides traction; each claw can flex independently around obstacles.",
        clinical: "Foot rot, sole ulcers, and white-line disease almost always affect ONE claw — the lateral digit IV in hindlimb (which carries more weight) and the medial digit III in forelimb. Diagnosis requires identifying which claw is affected because treatment differs.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Cow_hoof.jpg/640px-Cow_hoof.jpg",
        analogy: "The horse foot is a single high-performance racing tyre — fast on hard ground but unstable on rough terrain. The ox foot is dual tyres on a forklift — slower but stable on uneven, soft surfaces with built-in independent suspension.",
        quiz: {
            question: "Which two digits form the functional cloven hoof of ruminants?",
            options: ["Digits I and II", "Digits II and V", "Digits III and IV", "Digits IV and V"],
            correctIndex: 2,
            explanation: "Ruminants stand on digits III (medial) and IV (lateral). Digits II and V are the small non-weight-bearing dewclaws above and behind."
        }
    },
    {
        id: 43,
        title: "Four-Compartment Ruminant Stomach",
        category: "axial",
        comparison: "Ox vs. Horse/Dog",
        why: "The Ox has FOUR stomach compartments (Reticulum, Rumen, Omasum, Abomasum) — three non-glandular fermentation chambers + one true glandular stomach. The Horse and Dog are monogastric. The ruminant design is a forequrt-fermentation strategy: microbes break down cellulose BEFORE it reaches the true stomach, so the cow can extract energy from grass that no other organ system can digest.",
        clinical: "LDA (Left Displaced Abomasum), bloat, and traumatic reticulopericarditis ('hardware disease') are pathognomonic of the ruminant 4-compartment design. The horse, lacking these chambers, is instead vulnerable to hindgut (cecum/colon) torsions and impactions.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Stomach_colors.png/640px-Stomach_colors.png",
        analogy: "The horse stomach is a small kitchen blender — it grinds and passes food quickly. The cow stomach is a multi-stage industrial brewery — each tank does a different job, fermenting cellulose into volatile fatty acids the calf-engine actually runs on.",
        quiz: {
            question: "Which compartment of the ruminant stomach is the TRUE glandular stomach?",
            options: ["Rumen", "Reticulum", "Omasum", "Abomasum"],
            correctIndex: 3,
            explanation: "The abomasum is the only glandular compartment — it secretes HCl and pepsin, the homolog of the simple monogastric stomach."
        }
    },
    {
        id: 44,
        title: "Horse Without a Gall Bladder",
        category: "axial",
        comparison: "Horse vs. Ox/Dog",
        why: "The Horse is the only common domestic animal without a gall bladder — bile flows continuously from the liver into the duodenum. The Ox, Dog, and Pig all have gall bladders to store and concentrate bile for release at meals. The horse is designed as a continuous grazer; with food in the gut almost all the time, there is no need to store bile for episodic meals.",
        clinical: "You cannot perform 'gall bladder biopsy' or cholecystectomy on a horse — there is no organ to remove. In contrast, gall bladder disease is common in dogs (mucocele) and cattle (fasciolosis-related cholecystitis).",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Horse_anatomy.jpg/640px-Horse_anatomy.jpg",
        analogy: "The dog has a kitchen pantry (gall bladder) for bile — stored and released at mealtime. The horse is a 24-hour buffet — bile drips constantly straight into the gut, so the pantry was never built.",
        quiz: {
            question: "Why does the horse lack a gall bladder?",
            options: ["It is hidden inside the liver lobes", "It is fused with the duodenum", "Continuous grazing eliminates the need for bile storage", "It is replaced by the pancreas"],
            correctIndex: 2,
            explanation: "Horses graze almost continuously, so bile is needed continuously. There is no need to store and concentrate it between meals."
        }
    },
    {
        id: 45,
        title: "Spiral Colon of Ruminants",
        category: "axial",
        comparison: "Ox vs. Horse",
        why: "The Ox ascending colon has a flat disc-shaped <b>spiral coil</b> with centripetal turns inward and centrifugal turns back outward — pathognomonic of ruminants. The Horse has a U-shaped 'great colon' with flexures (pelvic, sternal, diaphragmatic). Both designs slow transit to allow water absorption, but the ruminant spiral is a tighter, more compact arrangement.",
        clinical: "At necropsy, the spiral colon instantly identifies a ruminant carcass. The horse pelvic flexure is the #1 site of impaction colic. Pigs also have a spiral colon, but the coils form a CONE rather than a flat disc.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Bovine_spiral_colon.jpg/640px-Bovine_spiral_colon.jpg",
        analogy: "The horse colon is a folded fire-hose draped around the abdomen with several U-bends where things get stuck. The ox spiral colon is a coiled garden hose wound flat into a disc — compact, predictable, and with no sharp flexures to clog.",
        quiz: {
            question: "Which species has a flat disc-shaped spiral colon?",
            options: ["Horse", "Dog", "Ruminants (Ox/Sheep)", "Cat"],
            correctIndex: 2,
            explanation: "Ruminants have a unique flat spiral coil in the ascending colon. Pigs have a similar spiral but cone-shaped, and the horse has a U-shaped great colon instead."
        }
    },
    {
        id: 46,
        title: "Bovine Cervix — The Rifle Barrel",
        category: "hindlimb",
        comparison: "Cow vs. Mare/Bitch",
        why: "The cow cervix is a thick, hard, fibromuscular tube with 3-4 transverse 'annular rings' inside its lumen — feeling like a stack of doughnuts. The Mare cervix is soft, with longitudinal folds; the Bitch cervix is short and thin. The bovine design provides a tight long-term seal against ascending infection during the long pregnancy and during lactation.",
        clinical: "Trans-cervical AI in cattle requires the operator to manipulate the cervix per rectum and 'thread' the AI gun through the rings — this is the central skill of bovine reproductive practice. In the mare, AI is much easier through the soft cervix.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Cow_reproductive_tract.jpg/640px-Cow_reproductive_tract.jpg",
        analogy: "The cow cervix is a rifle barrel with rifling grooves — the AI gun has to be threaded through it like a bullet. The mare cervix is a smooth-bore shotgun — easy to load.",
        quiz: {
            question: "How many transverse annular rings does the bovine cervix typically have?",
            options: ["1-2", "3-4", "6-8", "10+"],
            correctIndex: 1,
            explanation: "The cow cervix has 3-4 (sometimes up to 5) transverse annular rings — they must be threaded by the AI catheter to deposit semen at the body of uterus."
        }
    },
    {
        id: 47,
        title: "Tracheal Bronchus in Pig & Ox",
        category: "axial",
        comparison: "Ox/Pig vs. Horse/Dog",
        why: "The Ox and Pig have an extra bronchus — the <b>tracheal bronchus (bronchus trachealis)</b> — that branches off the trachea BEFORE the main bifurcation, supplying the right cranial lung lobe directly. The Horse and Dog have only the standard bifurcated bronchi. The tracheal bronchus is a unique anatomical branch that, in farm animals, becomes a clinically important shortcut for inhaled pathogens.",
        clinical: "Enzootic pneumonia (calf pneumonia) characteristically starts in the right cranial lobe — the tracheal bronchus delivers inhaled bacteria directly there, bypassing the normal mucociliary clearance of the main airway. Auscultation of the right cranial thoracic region in calves is mandatory.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Tracheal_bronchus_radiograph.jpg/640px-Tracheal_bronchus_radiograph.jpg",
        analogy: "The horse lung is a tree branching neatly at the top of a single trunk. The ox lung has an extra side-branch that splits off the trunk lower down — a private highway delivering air (and germs) straight to the upper-right corner.",
        quiz: {
            question: "What is unique about the tracheal bronchus in cattle and pigs?",
            options: ["It supplies both lungs equally", "It branches from the trachea proximal to the main bifurcation, supplying the right cranial lobe", "It only carries venous blood", "It connects the trachea to the oesophagus"],
            correctIndex: 1,
            explanation: "The tracheal bronchus arises from the trachea BEFORE the carina and supplies the right cranial lobe directly — clinically tied to right-cranial-lobe pneumonia in calves."
        }
    },
    {
        id: 48,
        title: "Ossa Cordis — Bones in the Heart",
        category: "axial",
        comparison: "Ox vs. Horse/Dog",
        why: "The bovine heart contains 1-2 small bones — the <b>ossa cordis</b> — at the base of the aorta. They are ossifications of the fibrous skeleton of the heart that develop with age. The Horse and Dog have no ossa cordis (cats may show traces). The bones provide extra rigidity to the aortic root in the massive bovine heart that pumps continuously against the high muscle mass of cattle.",
        clinical: "Ossa cordis are a normal age-related finding in older cattle and should not be confused with pathological calcification. They are pathognomonic for Bos taurus on post-mortem.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Heart_anatomy.jpg/640px-Heart_anatomy.jpg",
        analogy: "Imagine reinforcing the engine block of a heavy truck with metal plates around the high-pressure outlet. The ox heart, pumping endlessly through a large muscular body, builds little bones at the aortic 'outlet' to prevent fatigue.",
        quiz: {
            question: "Where in the bovine heart are the ossa cordis located?",
            options: ["In the apex", "In the wall of the right ventricle", "At the base of the aorta in the fibrous skeleton", "In the interventricular septum"],
            correctIndex: 2,
            explanation: "The ossa cordis are 1-2 small ossifications of the cardiac fibrous skeleton at the aortic root — characteristic of cattle (Bos taurus)."
        }
    },
    {
        id: 49,
        title: "Guttural Pouch — A Horse-Only Curiosity",
        category: "axial",
        comparison: "Horse vs. Ox/Dog",
        why: "The Horse uniquely has paired <b>guttural pouches</b> — large air-filled diverticula of the auditory (Eustachian) tube, ~300 mL each, lying ventral to the skull. The Ox, Dog, and other domestic species have only a small auditory tube without a pouch. Function is debated — possibly cooling of carotid arterial blood that runs through the pouch wall, or middle-ear pressure equalization during galloping head movement.",
        clinical: "<b>Guttural Pouch Mycosis</b> (Aspergillus): fungus erodes the internal carotid artery in the pouch wall → fatal epistaxis. <b>Guttural Pouch Empyema</b>: pus accumulation, surgical drainage via Viborg's triangle. These conditions exist ONLY in horses.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Horse_skull.jpg/640px-Horse_skull.jpg",
        analogy: "Imagine attaching a small balloon to the side of your ear-canal tube — that's the guttural pouch. The horse, the ear-tube has expanded into a sinus-like cavity that quietly hosts the carotid artery. When fungus moves in, it can chew through the artery wall.",
        quiz: {
            question: "The guttural pouches in horses are diverticula of which structure?",
            options: ["Pharyngeal recess", "Frontal sinus", "Auditory (Eustachian) tube", "Trachea"],
            correctIndex: 2,
            explanation: "Guttural pouches are large outpouchings of the auditory tube — unique to equids among domestic species."
        }
    },
    {
        id: 50,
        title: "Dental Pad of Ruminants",
        category: "axial",
        comparison: "Ox vs. Horse/Dog",
        why: "The Ox has NO upper incisors. Their place is taken by a thick, cornified mucosal cushion — the <b> dental pad (pollex dentalis) </b> . The lower incisors grip forage against this pad and the head jerks to tear off grass. The Horse has full upper and lower incisors for clipping grass cleanly; the Dog has them for grasping prey. The pad+incisors arrangement of cattle suits a tearing rather than a slicing bite.",
        clinical: "Age determination by dentition in cattle uses ONLY the lower incisors (since there are no uppers to wear). 'Wave mouth' or 'step mouth' uneven wear must be checked for cattle on rough pastures.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Cow_mouth_dental_pad.jpg/640px-Cow_mouth_dental_pad.jpg",
        analogy: "The horse mouth is a pair of scissors — sharp blades meeting blade. The cow mouth is a hand pulling against a rubber pad — grip-and-tear instead of cut.",
        quiz: {
            question: "What replaces the upper incisors in cattle?",
            options: ["A row of canine teeth", "A bony plate", "The cornified dental pad", "The hard palate"],
            correctIndex: 2,
            explanation: "Cattle (and all ruminants) have no upper incisors — they are replaced by a thick keratinised dental pad against which the lower incisors grip forage."
        }
    },
    {
        id: 51,
        title: "Bovine Udder Suspensory Apparatus",
        category: "hindlimb",
        comparison: "Cow vs. Bitch/Sow",
        why: "The cow udder is held against the body wall by a unique combination of an <b>elastic median suspensory ligament</b> (paired, midline) + <b>fibrous lateral suspensory ligaments</b>. The elastic median ligament lets the udder expand massively as it fills with milk and recoil when emptied. Bitches and sows have multiple small mammae attached individually to the body wall — they don't need a single huge expandable bag.",
        clinical: "Failure of the median suspensory ligament in old high-yielding cows produces a 'broken' or pendulous udder — teats angle outward, easily injured, prone to mastitis. Lifelong udder conformation depends on this ligament — a key trait in dairy cow selection.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Cow_udder.jpg/640px-Cow_udder.jpg",
        analogy: "The udder is a giant water balloon. The lateral ligaments are the rigid handles holding it to the wall. The median ligament is the bungee cord at the centre — it stretches when the balloon fills and recoils when emptied. Cut the bungee, and the balloon sags between your knees.",
        quiz: {
            question: "Which suspensory ligament of the cow's udder is elastic and allows expansion?",
            options: ["Lateral suspensory ligament", "Median suspensory ligament", "Round ligament", "Inguinal ligament"],
            correctIndex: 1,
            explanation: "The median suspensory ligament is paired, elastic (yellow elastic tissue), in the midline. It expands and recoils with the milk volume; lateral ligaments are fibrous (rigid)."
        }
    },
    {
        id: 40,
        title: "Rhinoceros Tridactyl Foot",
        category: "wildlife",
        comparison: "Rhinoceros vs. Horse",
        why: "Despite its 2-tonne weight, the Rhinoceros walks on THREE toes per foot (digits II, III, IV) — the standard perissodactyl configuration. The Horse, classified in the same order (Perissodactyla), has a SINGLE toe (digit III) optimized for high-speed running. The rhino retains three toes for stability under massive load on soft ground.",
        clinical: "Rhino foot disease (cracked nails, abscesses) typically affects the central digit III — the largest weight-bearer — but the lateral toes can compensate temporarily, unlike a horse where catastrophic lameness follows.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Rhinoceros-Wilhelma-2.jpg/640px-Rhinoceros-Wilhelma-2.jpg",
        analogy: "The Horse is a sports car on a single high-performance tyre — fast but fragile. The Rhino is a forklift on a triple-tyre cluster — slow, stable, and built to carry the load without sinking.",
        quiz: {
            question: "How many functional toes does a rhinoceros have on each foot?",
            options: ["1 (like the horse)", "2 (cloven, like the ox)", "3 (digits II, III, IV)", "5"],
            correctIndex: 2,
            explanation: "Rhinos have the standard perissodactyl 3-toe foot. The Horse — same order — has a single digit. The Rhino's 3 toes spread the enormous weight."
        }
    },

    // ====================================================================
    // 25 NEW COMPARATIVE DIFFERENCES (DOMESTIC SPECIES)
    // ====================================================================
    {
        id: 52,
        title: "Equine Frog vs Bovine Digital Cushion",
        category: "hindlimb",
        comparison: "Horse vs. Ox",
        why: "The Horse hoof has a V-shaped rubbery 'FROG' on the sole — a wedge of soft horn that absorbs concussion + acts as a hydraulic pump pushing venous blood up the leg with every step. The Ox does NOT have a frog; instead each cloven claw has a soft 'DIGITAL CUSHION' deep inside the heel that does the shock absorption. Same job, totally different anatomy — horse keeps it external (sole-visible), ox keeps it internal.",
        clinical: "<b>Thrush (horse):</b> Bacterial infection of the frog → black smelly necrosis; treated by paring + topical antiseptic. <b>Sole ulcer (cow):</b> Damaged digital cushion under sole horn → exposed corium → lameness; classic dairy disease.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Horse_hoof_underside.jpg/640px-Horse_hoof_underside.jpg",
        analogy: "Horse foot = sneaker with the sole-cushion glued ON THE OUTSIDE (you can see it). Cow foot = sneaker with the cushion HIDDEN INSIDE the heel. Both cushion shock; only one is visible.",
        quiz: {
            question: "Which soft-tissue structure of the horse foot acts as a hydraulic pump for venous return?",
            options: ["Coronary band", "Frog", "White line", "Lateral cartilage"],
            correctIndex: 1,
            explanation: "Every time the horse loads the foot, the frog is compressed → pushes blood out of the digital cushion vessels back up the leg. It's a peripheral 'second heart'."
        }
    },
    {
        id: 53,
        title: "Bovine Forestomach Keratinization",
        category: "axial",
        comparison: "Ox vs. Horse/Dog",
        why: "The rumen, reticulum, and omasum of cattle are lined by STRATIFIED SQUAMOUS KERATINIZED epithelium — the same tough tissue as your skin. The horse and dog stomach have only GLANDULAR epithelium throughout. Cattle have this skin-like lining so the rough, abrasive forage and microbial environment doesn't shred the stomach wall.",
        clinical: "<b>Parakeratosis (cow):</b> Excessive keratinisation of rumen papillae from high-grain diets → reduced VFA absorption, poor weight gain. <b>Equine gastric ulcers (EGUS):</b> Horse has a small non-glandular region only at the cardia (margo plicatus) — ulcers form there from acid splash during exercise.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Stomach_colors.png/640px-Stomach_colors.png",
        analogy: "Cattle's rumen is leather-lined like a workman's glove — designed to handle rough material. Horse stomach is silk-lined — meant for soft chewed paste only.",
        quiz: {
            question: "Which compartment of the bovine stomach is lined by GLANDULAR (NOT keratinised) epithelium?",
            options: ["Rumen", "Reticulum", "Omasum", "Abomasum"],
            correctIndex: 3,
            explanation: "Only the abomasum is glandular — it's the 'true stomach' homolog. The other three are non-glandular fermentation chambers with skin-like lining."
        }
    },
    {
        id: 54,
        title: "Horse Wolf Tooth",
        category: "axial",
        comparison: "Horse vs. Other species",
        why: "Many horses have a small vestigial 1st premolar (PM1) called the <b>WOLF TOOTH</b> sitting just in front of the cheek-teeth. It serves no chewing function but interferes with the bit. NO other domestic species has this — it is a non-functional remnant of the original 4-premolar Equidae dentition pattern.",
        clinical: "<b>Wolf tooth extraction</b> is one of the most common equine dental procedures, done before bitting young horses. Failure to remove → headshaking, bit resistance, training problems. Some horses also have 'blind wolf teeth' (unerupted), diagnosed on radiograph.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Horse_anatomy.jpg/640px-Horse_anatomy.jpg",
        analogy: "Like a vestigial appendix — non-functional but occasionally needs surgical removal.",
        quiz: {
            question: "Which tooth is referred to as the 'wolf tooth' in horses?",
            options: ["Canine", "Vestigial 1st premolar (PM1)", "1st molar", "Incisor I3"],
            correctIndex: 1,
            explanation: "The wolf tooth is the small, often-vestigial first premolar (PM1). It's routinely extracted before bitting because it sits exactly where the bit rests."
        }
    },
    {
        id: 55,
        title: "Bovine Penis Sigmoid Flexure",
        category: "hindlimb",
        comparison: "Bull vs. Stallion",
        why: "The bull, ram, and boar penis is FIBROELASTIC — short cavernous spaces, mostly dense collagen — held permanently flexed in an S-shape (the SIGMOID FLEXURE) behind the scrotum. Erection works by STRAIGHTENING the flexure (length increase only). The stallion penis is MUSCULOCAVERNOUS — huge cavernous spaces that engorge with blood (volume increase). Two completely different erection engineering.",
        clinical: "<b>Persistent frenulum (bull):</b> Strap of tissue holds penis bent — cannot extend during mating. <b>Paraphimosis (stallion):</b> Engorged penis can't retract — emergency in horses, less issue in bull's fibroelastic penis which retracts mechanically via retractor penis muscle.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Cow_reproductive_tract.jpg/640px-Cow_reproductive_tract.jpg",
        analogy: "Bull penis = an extendable car aerial: stays the same thickness, just unfolds longer. Stallion penis = a balloon: gets thicker and longer by filling with blood.",
        quiz: {
            question: "How does erection work in the bull's fibroelastic penis?",
            options: ["By blood engorgement (volume increase)", "By straightening of the sigmoid flexure (length increase)", "By rotation of the os penis", "By muscular contraction only"],
            correctIndex: 1,
            explanation: "Bull penis stays roughly the same thickness during erection — it 'unfolds' by straightening the permanent S-shaped sigmoid flexure to extend out of the sheath."
        }
    },
    {
        id: 56,
        title: "Cat Filiform Papillae (Sandpaper Tongue)",
        category: "axial",
        comparison: "Cat vs. Dog",
        why: "The cat's tongue is covered with backward-pointing FILIFORM papillae made of dense keratin — so densely packed that the tongue feels like sandpaper. They act as a built-in brush for grooming + a flesh-stripping rasp for cleaning meat off bone. The dog has smaller, softer filiform papillae and primarily uses its tongue for panting (cooling), not grooming.",
        clinical: "<b>Hairballs (trichobezoars) in cats</b> are a direct consequence — the cat swallows shed hair caught by the keratin spines while grooming. <b>Heat stress in dogs:</b> Tongue is the primary cooling organ; brachycephalic breeds can't pant effectively → overheating risk.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Cow_mouth_dental_pad.jpg/640px-Cow_mouth_dental_pad.jpg",
        analogy: "Cat tongue is a comb-meets-Velcro: built for hooking. Dog tongue is a wet flannel: built for cooling.",
        quiz: {
            question: "Why does the cat's tongue feel like sandpaper?",
            options: ["Bony plates under mucosa", "Densely packed keratinised filiform papillae", "Calcified taste buds", "Salt crystals on the surface"],
            correctIndex: 1,
            explanation: "Filiform papillae packed with keratin spikes point backward → act as a brush + meat-rasp. Same principle but smaller in dogs."
        }
    },
    {
        id: 57,
        title: "Equine Chestnut & Ergot — Vestigial Pads",
        category: "forelimb",
        comparison: "Horse vs. Other ungulates",
        why: "Horses have two small horny patches on each leg: the <b>CHESTNUT</b> (medial side, above the carpus on forelimb or below the hock on hindlimb) and the <b>ERGOT</b> (caudal aspect of fetlock). These are small vestigial horny remnants of the carpal/metacarpal pad region. In the modern single-digit horse foot, they persist as these non-functional patches.",
        clinical: "Chestnut patterns are unique to each horse — used like fingerprints for identification (chestnut + ergot pictures on passports). Not generally affected by disease but can crack and need trimming.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Horse_anatomy.jpg/640px-Horse_anatomy.jpg",
        analogy: "Like the appendix or wisdom teeth in humans — leftover hardware from when the body was used differently.",
        quiz: {
            question: "What are chestnuts and ergots on a horse's limbs?",
            options: ["Tumour growths", "Vestigial horny patches in the carpal/metacarpal pad region", "Calcified ligaments", "Modern bony growths"],
            correctIndex: 1,
            explanation: "Both are vestigial — small non-functional horny patches persisting in the metacarpal/metatarsal pad region of the modern horse limb."
        }
    },
    {
        id: 58,
        title: "Pig Snout Bone (Os Rostri)",
        category: "axial",
        comparison: "Pig vs. Other domestic species",
        why: "The pig is the ONLY domestic species with a true bone inside the tip of its nose — the <b>OS ROSTRI</b>. It is a small disc of bone embedded in the cartilage of the snout. Function: stiffens the rooting disc so the pig can flip soil aside while foraging without crushing the soft tissue.",
        clinical: "Pig farmers historically performed 'ringing' (inserting a metal ring through the rostral disc) to prevent rooting damage in pasture pigs. The os rostri provides anchor strength for the ring. Snout injuries / fractures of the os rostri can occur in fighting boars.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pig_snout.jpg/640px-Pig_snout.jpg",
        analogy: "It's like the pig has built itself a bulldozer blade — a bone reinforcing plate at the front of the snout for digging through compacted earth.",
        quiz: {
            question: "The os rostri (rostral bone) is found in which species?",
            options: ["Horse", "Ox", "Pig", "Dog"],
            correctIndex: 2,
            explanation: "Pig only — it's a small splanchnic/heterotopic bone in the tip of the snout that reinforces the rooting disc."
        }
    },
    {
        id: 59,
        title: "Dog Os Penis & Os Clitoris",
        category: "hindlimb",
        comparison: "Dog vs. Ox/Horse",
        why: "Dogs have a literal BONE inside the penis — the <b>OS PENIS (baculum)</b> — with a ventral groove that contains the urethra. Bitches have a smaller homolog, the <b>OS CLITORIS</b>. No domestic ungulate has these bones. Function: maintains penile rigidity during the prolonged 'tie' that's characteristic of canine mating.",
        clinical: "<b>Urethral obstruction in dogs:</b> Bladder stones (urolithiasis) most commonly lodge at the caudal end of the os penis, where the urethra makes an abrupt bend. Surgical retrieval requires careful work around the bone. <b>Fractures of os penis</b> occur from blunt trauma.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Dog_skeleton.jpg/640px-Dog_skeleton.jpg",
        analogy: "While most mammals rely on hydraulics (blood pressure) for erection, the dog also has a structural scaffold built in — like having both inflatable AND solid support in the same column.",
        quiz: {
            question: "Which species has an os penis (baculum) among the listed domestic animals?",
            options: ["Stallion", "Bull", "Boar", "Dog"],
            correctIndex: 3,
            explanation: "The dog has an os penis with a urethral groove on its ventral surface. Important clinical landmark for urethral obstruction surgery."
        }
    },
    {
        id: 60,
        title: "Equine Navicular Bone",
        category: "forelimb",
        comparison: "Horse vs. Ox",
        why: "Inside each horse hoof is a small boat-shaped sesamoid bone called the <b>NAVICULAR BONE (distal sesamoid)</b>. It sits behind P3 and acts as a pulley for the deep digital flexor tendon. The ox also has a distal sesamoid per claw, but smaller, fewer problems. The horse's single-digit weight-bearing concentrates enormous stress on this little bone.",
        clinical: "<b>Navicular Disease (Horse):</b> Chronic degeneration of the navicular bone + bursa + DDF tendon — leading cause of forelimb lameness in performance horses. Diagnosed by radiograph (cyst-like lesions in bone), navicular bursa block, MRI. Treatment: corrective shoeing + bisphosphonates + sometimes neurectomy.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Horse_anatomy.jpg/640px-Horse_anatomy.jpg",
        analogy: "The navicular is like a tiny pulley wheel inside the foot — it changes the angle of pull of the deep flexor tendon as it wraps around to insert into P3.",
        quiz: {
            question: "The navicular bone is which type of bone?",
            options: ["Long bone", "Flat bone", "Sesamoid bone", "Irregular bone"],
            correctIndex: 2,
            explanation: "Navicular is the distal sesamoid bone — develops within the deep digital flexor tendon as a pulley behind the coffin bone (P3)."
        }
    },
    {
        id: 61,
        title: "Mare Ovulation Fossa",
        category: "hindlimb",
        comparison: "Mare vs. Cow/Bitch",
        why: "The mare ovary is unique: covered by tunica albuginea EXCEPT at one indentation — the <b>OVULATION FOSSA</b> — which is the ONLY site where ovulation can occur. In other species (cow, bitch, sow, ewe) ovulation can happen anywhere on the ovarian surface. Functional reason: the mare's ovary is inside-out compared to other mammals — medulla outside, cortex inside.",
        clinical: "Trans-rectal ultrasound: an experienced equine vet can see follicles approach the ovulation fossa to predict timing. Trans-rectal palpation per cycle is the foundation of mare breeding programmes. Ovarian tumours (granulosa cell tumour) often originate near the fossa.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Cow_reproductive_tract.jpg/640px-Cow_reproductive_tract.jpg",
        analogy: "Cow ovary = a hill with eggs popping out from any side. Mare ovary = a fortress with one gate (the ovulation fossa) — every egg must exit through that single opening.",
        quiz: {
            question: "In the mare, ovulation occurs only at:",
            options: ["Any point on the ovary surface", "The hilum", "The ovulation fossa", "The medulla"],
            correctIndex: 2,
            explanation: "Mare ovaries are 'inverted' anatomically — cortex is internal, medulla external. The ovulation fossa is the only break in the tunica albuginea where a follicle can rupture."
        }
    },
    {
        id: 62,
        title: "Bovine Frontal Sinus Expansion",
        category: "axial",
        comparison: "Ox vs. Horse",
        why: "The <b>FRONTAL SINUS</b> in the ox is enormous — it extends from the forehead back into the horn cores and laterally over the orbit. The horse frontal sinus is also large but doesn't enter the horn (no horn). The dog frontal sinus is small. Bovine sinus design accommodates the horn anchorage + reduces skull weight.",
        clinical: "<b>Sinusitis (horse):</b> Common; pus accumulates → unilateral nasal discharge + facial swelling. <b>Sinusitis (ox):</b> Often follows dehorning if horn base infection spreads to sinus (the cavities communicate). <b>Trephination</b> (drilling a hole through the skull to drain sinus pus) is a routine procedure with anatomy-specific entry points.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cattle_kidney.jpg/640px-Cattle_kidney.jpg",
        analogy: "Cow skull is like an inflated balloon at the top — much of it is air-filled space rather than solid bone. Reduces head weight AND provides horn anchorage.",
        quiz: {
            question: "Why is dehorning considered a 'sinus surgery' in mature cattle?",
            options: ["The horn is part of the brain", "The frontal sinus extends into the horn core", "The horn shares blood supply with eyes", "The horn contains lymph nodes"],
            correctIndex: 1,
            explanation: "Mature horn cores are hollow extensions of the frontal sinus. Sawing them off literally opens the sinus — wound care must keep it clean to prevent sinusitis."
        }
    },
    {
        id: 63,
        title: "Equine Stomach 'Margo Plicatus'",
        category: "axial",
        comparison: "Horse vs. Other monogastrics",
        why: "Inside the horse stomach is a sharp horizontal line called the <b>MARGO PLICATUS</b> — the boundary between the non-glandular (squamous, white) cardiac region and the glandular (pink) fundic region. Other monogastrics (dog, cat, pig) have a much smaller squamous zone or none. The horse's large squamous region is the equivalent of the ruminant forestomachs — a holdover of its hindgut-fermenter design.",
        clinical: "<b>Equine Gastric Ulcer Syndrome (EGUS):</b> Ulcers form along the margo plicatus on the squamous side, where unprotected stratified epithelium meets acidic glandular contents during exercise (acid splash). Common in racehorses; treated with omeprazole.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Stomach_colors.png/640px-Stomach_colors.png",
        analogy: "Horse stomach is a 2-coloured container: upper half is bare metal (squamous, no acid protection), lower half is enamel-coated (glandular, acid-resistant). The 'margo plicatus' is the paint line.",
        quiz: {
            question: "Where do most equine gastric ulcers form?",
            options: ["Glandular fundic region", "Squamous region along the margo plicatus", "Pyloric antrum only", "Duodenum"],
            correctIndex: 1,
            explanation: "The squamous (non-glandular) upper part of the equine stomach has NO mucus or bicarbonate protection. Acid splashing up during exercise erodes it → ulcers along the margo plicatus."
        }
    },
    {
        id: 64,
        title: "Bovine Pre-pubic Tendon",
        category: "hindlimb",
        comparison: "Cow/Mare vs. Bitch",
        why: "The <b>PRE-PUBIC TENDON</b> is a thick fibrous band attaching the rectus abdominis and pectineus muscles to the cranial edge of the pubis. It anchors the abdominal wall to the pelvis. In late-pregnant mares and cows, the weight of the gravid uterus + foetus + fluid can RUPTURE this tendon. Bitch pregnancies don't generate enough weight to threaten it.",
        clinical: "<b>Pre-pubic Tendon Rupture (mare):</b> Late-gestation emergency. The mare's belly suddenly drops; she can't push during foaling. Caesarean section + euthanasia decision often required. <b>Pre-pubic tendon hernia:</b> Partial rupture → ventral abdominal hernia.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Cow_reproductive_tract.jpg/640px-Cow_reproductive_tract.jpg",
        analogy: "Imagine the abdominal wall as a hammock and the pre-pubic tendon as the rope holding one end. In a heavily pregnant mare, that rope can snap under load.",
        quiz: {
            question: "Rupture of the pre-pubic tendon is most dangerous in:",
            options: ["Young growing calves", "Late-pregnant mares/cows", "Castrated bulls", "Suckling lambs"],
            correctIndex: 1,
            explanation: "The huge uterine load near term in mares (and cows with hydrops) can rupture the pre-pubic tendon — emergency obstetric situation."
        }
    },
    {
        id: 65,
        title: "Equine Ungual Cartilages",
        category: "forelimb",
        comparison: "Horse vs. Ox",
        why: "Above each side of the horse's coffin bone (P3) sit two flat plates called <b>UNGUAL CARTILAGES (lateral cartilages of the foot)</b> that extend up above the coronet. They flex with weight bearing + assist the digital cushion + frog pump in moving venous blood up the leg. Cattle DO have small lateral cartilages but they are tiny — irrelevant clinically. The horse depends on these cartilages.",
        clinical: "<b>Sidebone (horse):</b> Pathological ossification of the ungual cartilages — palpable hard lumps above the coronet on each side. Usually doesn't cause lameness but can be a cosmetic/conformation flaw. Heavy draft breeds are most prone.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Horse_hoof_underside.jpg/640px-Horse_hoof_underside.jpg",
        analogy: "Like having two flexible 'wings' built into the sides of each hoof — they spring under load and rebound to pump blood out.",
        quiz: {
            question: "Ossification of the ungual cartilages in horses is called:",
            options: ["Ringbone", "Sidebone", "Splints", "Bowed tendon"],
            correctIndex: 1,
            explanation: "Sidebone = ossified ungual (lateral) cartilage above the coronet. Common incidental radiographic finding in draft horses."
        }
    },
    {
        id: 66,
        title: "Bovine Lacrimal Bulla",
        category: "axial",
        comparison: "Ox vs. Horse",
        why: "The lacrimal bone of the ox has a peculiar inflated portion called the <b>LACRIMAL BULLA</b> — a hollow air-filled extension into the orbit, communicating with the maxillary sinus. The horse and dog don't have this. Function: extends paranasal sinus capacity + reduces skull weight.",
        clinical: "Sinus infections of the maxillary sinus in cattle can extend into the lacrimal bulla → unilateral epiphora (tearing) + facial swelling near the eye. Drainage may require trephination of the bulla.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cattle_kidney.jpg/640px-Cattle_kidney.jpg",
        analogy: "An extra storage room added behind the eye — cattle skulls are essentially honeycombed with these air pockets.",
        quiz: {
            question: "The lacrimal bulla is a feature of:",
            options: ["Equine skull", "Bovine skull", "Canine skull", "Porcine skull"],
            correctIndex: 1,
            explanation: "The lacrimal bulla is an air-filled inflation of the lacrimal bone — characteristic of cattle and small ruminants; absent in horse and dog."
        }
    },
    {
        id: 67,
        title: "Horse vs Dog Pelvic Inclination",
        category: "hindlimb",
        comparison: "Horse vs. Dog",
        why: "The horse pelvis is roughly HORIZONTAL — long axis of sacrum runs nearly parallel to the ground. The dog pelvis is INCLINED downward — sacrum + ilium tilted ~30° below horizontal. This affects gait: horses can extend the hindlimb backward through a long arc (galloping stride); dogs have a more compact pelvis for jumping/twisting agility.",
        clinical: "<b>Pelvimetry:</b> Different acceptable dimensions for different species. <b>Hip dysplasia (dog):</b> The inclined pelvis allows incomplete acetabular coverage to be tolerated, but worsens with breed selection. <b>Sacroiliac luxation:</b> Different management approaches in horse (mostly conservative) vs dog (often surgical).",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Dog_skeleton.jpg/640px-Dog_skeleton.jpg",
        analogy: "Horse pelvis is a long flat tray pointing backward. Dog pelvis is the same tray tipped down at the back like a slide.",
        quiz: {
            question: "Compared to the dog, the horse pelvis is:",
            options: ["Steeply inclined downward", "Roughly horizontal", "Tilted to one side", "Always rotated 90°"],
            correctIndex: 1,
            explanation: "Horse pelvis is nearly horizontal — provides a long arc of motion for the hindlimb during the galloping stride. Dog pelvis is inclined."
        }
    },
    {
        id: 68,
        title: "Cattle Carpal Bone Fusion Pattern",
        category: "forelimb",
        comparison: "Ox vs. Horse vs. Dog",
        why: "Number of carpal bones differs by species: <b>Ox = 6</b> (C2+C3 fused, C1 absent), <b>Horse = 7-8</b>, <b>Dog = 7</b> (radial+intermediate fused into 'intermedioradial'), <b>Pig = 8</b> (full complete pattern). Fusion reduces friction surfaces + adds strength for weight-bearing — characteristic of cursorial (running) species.",
        clinical: "<b>Slab fracture of C3 (horse):</b> Common race-horse injury from repetitive concussion on the carpus. Radiographic identification is essential. <b>Carpal hygroma (cow):</b> Bursitis over precarpal area — chronic 'kneeling' on hard concrete causes a precarpal subcutaneous bursa.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Dog_skeleton.jpg/640px-Dog_skeleton.jpg",
        analogy: "Single-digit and cloven-foot runners (horse, ox, sheep) have fewer carpal bones — fusion + loss reduce friction surfaces. Dog and pig retain more — they need rotational paw use.",
        quiz: {
            question: "How many carpal bones does the ox have?",
            options: ["4", "6", "7", "8"],
            correctIndex: 1,
            explanation: "Ox has 6 — proximal row (4: radial, intermediate, ulnar, accessory) + distal row (2: fused C2+C3, plus C4). C1 absent."
        }
    },
    {
        id: 69,
        title: "Cattle Horn Anatomy",
        category: "axial",
        comparison: "Cattle vs. Deer (antlers)",
        why: "Cattle <b>HORNS</b> are permanent bony cores (extensions of the frontal bone) covered with a keratin sheath. They grow throughout life, are never shed, and are HOLLOW INSIDE (continuous with the frontal sinus in adults). Deer <b>ANTLERS</b> are completely different: solid bone, deciduous (shed annually), and not covered with keratin — covered with velvet skin during growth.",
        clinical: "<b>Dehorning (cattle):</b> Painful procedure; nerve block of cornual branch of zygomaticotemporal nerve required. In mature cattle, sawing through horn opens the frontal sinus → sinusitis risk. <b>Disbudding (calves):</b> Cautery destruction of horn bud before bony horn develops — quicker, less painful.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cattle_kidney.jpg/640px-Cattle_kidney.jpg",
        analogy: "Cow horn = a fingernail growing on a finger of bone, never shed. Deer antler = a tree branch grown fresh every year and dropped in winter.",
        quiz: {
            question: "Why does dehorning a mature bovine open the frontal sinus?",
            options: ["The sinus is in the cheek", "The horn core is a hollow extension of the frontal sinus", "The sinus surrounds the brain", "The horn contains the sinus duct"],
            correctIndex: 1,
            explanation: "In mature cattle the frontal sinus extends INTO the horn core itself. Removing the horn cuts into the sinus directly."
        }
    },
    {
        id: 70,
        title: "Equine Stay Apparatus vs Dog Active Stance",
        category: "forelimb",
        comparison: "Horse vs. Dog",
        why: "Horses have a <b>STAY APPARATUS</b> — a passive locking system of ligaments + check ligaments + intermediate tubercle + suspensory apparatus — that lets them stand and even sleep on their feet with NO muscle effort. Dogs lack this — they must actively use muscles to stand and lie down to rest. Energy efficiency vs flexibility trade-off.",
        clinical: "<b>Recumbent horse warning:</b> If a healthy adult horse lies down for more than an hour, it's a clinical red flag (pain, illness, exhaustion). Horses are physically built to stand. <b>Decubitus ulcers in dogs:</b> Common in old/recumbent dogs that can't reposition themselves.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Horse_anatomy.jpg/640px-Horse_anatomy.jpg",
        analogy: "Horse legs are like camera tripods that lock open — once set, they hold the load with zero energy. Dog legs are like collapsible umbrellas — they need active muscle to stay up.",
        quiz: {
            question: "The 'stay apparatus' of the horse is:",
            options: ["A muscle group", "A passive ligamentous locking system", "A vascular network", "A nerve plexus"],
            correctIndex: 1,
            explanation: "The stay apparatus is a network of ligaments + tendons + check ligaments that mechanically lock the limbs in extension — allowing the horse to sleep standing with virtually no muscle work."
        }
    },
    {
        id: 71,
        title: "Mare 'Mobile Phase' Pregnancy vs Cow",
        category: "hindlimb",
        comparison: "Mare vs. Cow",
        why: "The mare conceptus is unique: it floats free in the uterus for ~16 days, MIGRATING between both uterine horns continuously. This mechanical 'tour' is how the mare's body recognises pregnancy → suppresses PGF2α → maintains the CL. Cow conceptus fixes much earlier (~day 17) in one horn and uses chemical signaling (interferon-tau) instead.",
        clinical: "<b>Mare twin pregnancy:</b> 60-70% of twin embryos can be 'crushed' manually per rectum during the mobile phase (day 14-16) by an experienced vet — singletons survive better. <b>'Maternal recognition window' in mare</b> is mechanical, not chemical — disturbing the uterus before day 17 risks losing the pregnancy.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Cow_reproductive_tract.jpg/640px-Cow_reproductive_tract.jpg",
        analogy: "Mare embryo is a tourist with a map — wanders the uterus to register pregnancy. Cow embryo plants a flag in one spot + uses chemistry (interferon-tau) to make the announcement.",
        quiz: {
            question: "Maternal recognition of pregnancy in the mare is achieved by:",
            options: ["Secretion of interferon-tau", "Mechanical migration of the conceptus", "Hormonal flush from ovaries", "Estrogen-progesterone ratio shift"],
            correctIndex: 1,
            explanation: "Mare conceptus migrates throughout both uterine horns for 16+ days — this mechanical signal prevents PGF2α release and protects the CL."
        }
    },
    {
        id: 72,
        title: "Dog Anal Sacs (Paranal Sinuses)",
        category: "hindlimb",
        comparison: "Dog/Cat vs. Ungulates",
        why: "Dogs and cats have two scent glands — <b>ANAL SACS (paranal sinuses)</b> — opening at the 4 and 8 o'clock positions of the anus. They secrete a foul-smelling oily fluid used for territory marking + identification. Ungulates (cow, horse, pig) do NOT have these. Carnivores rely on scent-based communication far more than herbivores.",
        clinical: "<b>Anal sacculitis / impaction:</b> Extremely common in dogs — sacs don't empty during defaecation → distended → infected. Manifests as 'scooting' (dragging bottom on the ground). Treatment: manual expression ± lavage; surgical removal for chronic cases.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Dog_skeleton.jpg/640px-Dog_skeleton.jpg",
        analogy: "Dogs come with built-in 'scent stamps' that release a unique signature with each defaecation. Cats have them too but seal them tighter. Ungulates don't carry such bottles.",
        quiz: {
            question: "Anal sacs in dogs open at which clock positions on the anus?",
            options: ["6 and 12", "3 and 9", "4 and 8", "2 and 10"],
            correctIndex: 2,
            explanation: "Standard locations are 4 and 8 o'clock (when viewing the anus). Easy landmarks for manual expression / surgical approach."
        }
    },
    {
        id: 73,
        title: "Bovine vs Equine Hoof Growth Rate",
        category: "forelimb",
        comparison: "Horse vs. Ox",
        why: "Hoof wall grows at ~6-8 mm/month in horses → full hoof renewal in 9-12 months. Cattle hooves grow at ~5 mm/month → renewal in 12-14 months. Slightly faster in horses because their constant movement / weight bearing demands quicker renewal of the working surface. Cattle grow more slowly, but lameness is more easily detected because of cloven foot allowing 1-claw block trimming.",
        clinical: "<b>Routine hoof care frequency:</b> Horses need trimming every 6-8 weeks. Cattle benefit from 2 trims per year (early lactation + dry-off period). Foot care is a top economic factor in dairy productivity.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Horse_hoof_underside.jpg/640px-Horse_hoof_underside.jpg",
        analogy: "Think of hoof horn like fingernail — keeps growing, gets worn down by use, needs trimming if not wearing evenly.",
        quiz: {
            question: "Approximate growth rate of the equine hoof wall is:",
            options: ["1-2 mm/month", "6-8 mm/month", "20 mm/month", "Same as hair growth"],
            correctIndex: 1,
            explanation: "Hoof horn grows ~6-8 mm/month in the horse. A full hoof wall is replaced in 9-12 months. Slower in cattle."
        }
    },
    {
        id: 74,
        title: "Sow vs Cow Mammary Chain",
        category: "axial",
        comparison: "Sow vs. Cow",
        why: "Sows have <b>multiple paired mammary glands</b> (6-8 pairs) arranged in a row from thorax to inguinal region — adapted for litter pregnancies. Each teat has 2 streak canals. Cow has 4 quarters with 4 teats — adapted for one (occasionally two) calves. Bitch similar to sow (5 pairs); mare has 2 teats only (single foal).",
        clinical: "<b>'Teat order' in piglets:</b> Newborn piglets establish a hierarchy by claiming a specific teat — best teats (cranial = more milk) go to dominant piglets. Failure to suckle from a personal teat → starvation. <b>Bovine mastitis:</b> Easier to manage per-quarter due to functional independence.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pig_snout.jpg/640px-Pig_snout.jpg",
        analogy: "Cow udder = single 4-tap kitchen tank. Sow udder = a long row of 16 mini-taps along the belly, one per piglet.",
        quiz: {
            question: "How many streak canals open at each teat of a sow?",
            options: ["1", "2", "3", "Variable (4-5)"],
            correctIndex: 1,
            explanation: "Sow has 2 streak canals per teat (versus 1 in cow). Allows two milk-secreting lobes per teat to drain independently."
        }
    },
    {
        id: 75,
        title: "Cattle vs Horse Diaphragm Attachment",
        category: "axial",
        comparison: "Ox vs. Horse",
        why: "The diaphragm attaches similarly in both — to the costal arch + xiphoid + lumbar vertebrae (via crura) — but the cattle diaphragm is in DIRECT contact with the reticulum, separated only by a thin peritoneal-pleural fold. The horse diaphragm has more buffer (omentum + stomach) between it and pericardium.",
        clinical: "<b>Traumatic Reticulopericarditis (Hardware Disease, cattle):</b> Sharp metal swallowed → settles in reticulum → with rumen contractions, pierces diaphragm → enters pericardial sac → septic pericarditis. Pathognomonic to cattle. Treatment: rumen magnet (prevention) or rumenotomy.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cattle_kidney.jpg/640px-Cattle_kidney.jpg",
        analogy: "Cow heart and reticulum are next-door neighbours separated by a thin wall (diaphragm). A nail going through the wall hits the heart. Horse heart has a buffer room (omentum) between it and the stomach.",
        quiz: {
            question: "Hardware disease in cattle involves perforation of:",
            options: ["Abomasum → liver", "Reticulum → diaphragm → pericardium", "Rumen → spleen", "Omasum → kidney"],
            correctIndex: 1,
            explanation: "Sharp wire in reticulum pierces forward through the diaphragm into the pericardial sac, causing septic pericarditis. Classic bovine syndrome."
        }
    },
    {
        id: 76,
        title: "Equine Cranial Mesenteric Artery Vulnerability",
        category: "axial",
        comparison: "Horse vs. Other species",
        why: "The cranial mesenteric artery supplies most of the small intestine. In horses, this artery is a notorious target of <b>Strongylus vulgaris</b> larvae — they migrate into the artery wall, cause thrombosis, and trigger ischemic colic. Cattle have similar arteries but Strongylus doesn't infect them. The horse's hindgut-fermenter design with large mesenteric arcades + parasite biology = perfect storm.",
        clinical: "<b>Verminous Arteritis / Thromboembolic Colic (horse):</b> Larvae of S. vulgaris damage arterial intima → thrombi → embolize distally → small intestinal infarction → severe colic. Prevention: routine ivermectin/moxidectin deworming.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Horse_anatomy.jpg/640px-Horse_anatomy.jpg",
        analogy: "The cranial mesenteric is the highway feeding the entire intestinal city. Strongylus larvae are the road-blockers — clog up the highway, and the city (gut) starves and dies in patches.",
        quiz: {
            question: "Strongylus vulgaris causes colic in horses primarily by:",
            options: ["Direct toxin secretion", "Blockage of bile flow", "Thromboembolism of cranial mesenteric artery", "Liver damage"],
            correctIndex: 2,
            explanation: "S. vulgaris migrates through the cranial mesenteric arterial wall → causes thrombosis → emboli lodge in distal mesenteric vessels → ischemic infarction of gut → colic."
        }
    },

    // ====================================================================
    // 10 NEW WILDLIFE vs DOMESTIC COMPARISONS
    // ====================================================================
    {
        id: 77,
        title: "Pangolin Keratin Scales",
        category: "wildlife",
        comparison: "Pangolin vs. Other mammals",
        why: "The pangolin is the ONLY mammal covered in true keratin scales (made of the same protein as hair, hooves, and nails — but arranged as overlapping plates like a reptile). When threatened, the pangolin rolls into a ball; its scales are razor-sharp at the edges. No domestic species has this protection.",
        clinical: "Pangolin scales have no medicinal value despite traditional Chinese medicine claims — they're chemically identical to fingernails. Pangolins are critically endangered due to scale poaching + bushmeat trade.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Pangolin_rolled_up.jpg/640px-Pangolin_rolled_up.jpg",
        analogy: "It's as if a dog or cat replaced all its hairs with a coat of overlapping fingernails. Same protein (keratin), totally different architecture.",
        quiz: {
            question: "Pangolin scales are made of:",
            options: ["Bone", "Cartilage", "Keratin (same as fingernail)", "Modified dentine"],
            correctIndex: 2,
            explanation: "Pangolin scales are KERATIN — the same protein as nails, hair, hooves, horns. Just arranged in overlapping rigid plates rather than fine fibres."
        }
    },
    {
        id: 78,
        title: "Anteater Tongue (60 cm) vs Dog Tongue",
        category: "wildlife",
        comparison: "Giant Anteater vs. Dog",
        why: "The giant anteater has a tongue ~60 cm long — longer than its head — anchored not to the hyoid like in mammals but extending all the way back to the sternum. It can flick in/out up to 150 times per minute. Dog tongue, by comparison, is muscular and short, used for lapping water and panting. Anteater design = specialist termite-eating tool.",
        clinical: "Captive anteaters need specialised feeding (puréed insectivore diet through narrow tubes) because their toothless tongue mechanism can't handle pellets. Tongue injury or atrophy = starvation.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Giant_Anteater.jpg/640px-Giant_Anteater.jpg",
        analogy: "The dog tongue is a wet washcloth. The anteater tongue is a sticky retractable measuring tape that can reach 60 cm into a termite mound.",
        quiz: {
            question: "What anchors the giant anteater's exceptionally long tongue?",
            options: ["The hyoid bone only", "The mandibular symphysis", "The sternum", "The cricoid cartilage"],
            correctIndex: 2,
            explanation: "Uniquely, the anteater's tongue extends back and anchors to the sternum, not the hyoid — letting it project 60 cm out of the mouth."
        }
    },
    {
        id: 79,
        title: "Tortoise Shell = Modified Ribs + Vertebrae",
        category: "wildlife",
        comparison: "Tortoise vs. Mammals",
        why: "The tortoise shell isn't just a shell glued on — it's the animal's SKELETON turned inside out. The dorsal carapace = fused thoracic vertebrae + ribs + dermal bones. The ventral plastron = fused sternum + clavicles + abdominal ribs. The internal organs are literally INSIDE the bony case. No domestic species has anything remotely like this.",
        clinical: "Shell fractures in tortoises require special veterinary repair (cable ties, epoxy, fiberglass) — they're fractures of the spinal column + ribs. Heal slowly. Respiratory disease is hard to diagnose because chest wall doesn't move conventionally.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Tortoise_shell.jpg/640px-Tortoise_shell.jpg",
        analogy: "Imagine if your ribs grew sideways, fused into a single dome over your back, and your sternum became a flat bony floor under your belly. That's a tortoise.",
        quiz: {
            question: "The carapace (top shell) of a tortoise is anatomically:",
            options: ["A thick layer of skin", "Fused vertebrae + ribs + dermal bones", "Modified scales only", "Calcified cartilage"],
            correctIndex: 1,
            explanation: "Carapace = vertebrae + ribs + dermal ossifications fused together. Plastron = sternum + clavicles + abdominal ribs. The shell IS the skeleton."
        }
    },
    {
        id: 80,
        title: "Hummingbird Ball-and-Socket Shoulder",
        category: "wildlife",
        comparison: "Hummingbird vs. Other birds",
        why: "Hummingbirds have a true ball-and-socket shoulder joint (gleno-humeral) that allows 180° rotation of the wing — they can flap UPWARD as forcefully as downward. This is what gives them hover capability + reverse flight + lateral flight. Other birds (including chickens, eagles) have a more restricted hinge-like shoulder; they can only generate downward thrust. Among domestic 'birds' (poultry, ducks), none can hover.",
        clinical: "Hummingbird metabolic rate is the highest of any vertebrate (~12× human BMR). They enter torpor at night to survive. Captive husbandry requires constant access to nectar — they will starve in 4-6 hours without food.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Hummingbird_in_flight.jpg/640px-Hummingbird_in_flight.jpg",
        analogy: "Chickens are propeller aircraft (one direction of thrust only). Hummingbirds are helicopters — they can rotate the rotor blades to push air in any direction.",
        quiz: {
            question: "Why can hummingbirds hover but chickens cannot?",
            options: ["Bigger wings", "Ball-and-socket shoulder joint with 180° rotation", "Higher heart rate", "Hollow bones"],
            correctIndex: 1,
            explanation: "Hummingbird's true ball-and-socket shoulder allows full wing rotation → thrust in any direction → true hovering flight. Other birds have a more hinge-like shoulder."
        }
    },
    {
        id: 81,
        title: "Naked Mole Rat Cold-Blooded Mammal",
        category: "wildlife",
        comparison: "Naked Mole Rat vs. Other mammals",
        why: "Naked mole rats are effectively COLD-BLOODED — they don't maintain a constant body temperature. They have minimal hair, very low metabolism, and survive on the constant 30°C of their underground burrows. They are also resistant to cancer, can live without oxygen for 18 minutes, and live 30+ years. The closest mammal to behaving like a reptile.",
        clinical: "Major research model — naked mole rats almost never get cancer. Understanding their high-molecular-weight hyaluronan + p53 pathway may reveal therapies for human cancer.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nacktmull.jpg/640px-Nacktmull.jpg",
        analogy: "Most mammals are like household central heating — burn fuel constantly to keep warm. The naked mole rat is a passive house — uses the surrounding ground temperature for free heating.",
        quiz: {
            question: "Which of the following describes naked mole rats?",
            options: ["Standard mammalian thermoregulation", "Effectively cold-blooded — poor thermoregulation", "Always cold", "Always overheating"],
            correctIndex: 1,
            explanation: "Naked mole rats are heterothermic — their body temp tracks burrow temperature. Closest mammal to a reptile in thermoregulation."
        }
    },
    {
        id: 82,
        title: "Sea Lion Flipper vs Dog Forelimb",
        category: "wildlife",
        comparison: "Sea Lion vs. Dog",
        why: "The sea lion FLIPPER is a fully transformed dog forelimb: the humerus + radius + ulna shortened and broadened; the carpals, metacarpals, and phalanges elongated into paddle-like rays; soft webbing between digits. The same bones, same nerve plexus, same blood supply — just reshaped for water propulsion. A perfect example of homologous structure.",
        clinical: "Sea lion flipper diseases (cellulitis, fractures) treated based on dog anatomy knowledge — orthopaedic surgeons can identify each bone clearly. Stranded sea lions often need fluid therapy via venepuncture of the flipper using same techniques as dog cephalic vein.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Sea_lion.jpg/640px-Sea_lion.jpg",
        analogy: "Imagine taking your dog's front leg, shortening the upper bones, elongating the finger bones, and sealing the spaces with webbing. That's a sea lion flipper.",
        quiz: {
            question: "Compared to a dog forelimb, the sea lion flipper has:",
            options: ["Completely different bone structure", "Same bones but elongated phalanges + webbed soft tissue", "No bones (just cartilage)", "Extra bones for paddling"],
            correctIndex: 1,
            explanation: "Same skeletal plan, modified proportions — humerus/radius/ulna shortened, phalanges elongated, interdigital webbing. Classic homologous structure."
        }
    },
    {
        id: 83,
        title: "Walrus Baculum — Longest Penis Bone",
        category: "wildlife",
        comparison: "Walrus vs. Dog",
        why: "The walrus has the largest os penis (baculum) of any land mammal — up to 60 cm long. It's a structural support for prolonged mating in cold Arctic waters where blood-based hydraulics fail in the cold. The dog's os penis is much smaller (~10 cm). The need for a rigid scaffold in cold conditions = bigger bone.",
        clinical: "Walrus bacula are highly valued in Arctic indigenous cultures (carving, fertility symbolism). Walrus fossils with the baculum are key paleontological dating tools — they don't decay quickly.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Walrus_male.jpg/640px-Walrus_male.jpg",
        analogy: "Imagine a dog's penis bone scaled up by 5× — that's what a walrus carries inside its body. The walrus is the gold-medalist of baculum length among mammals.",
        quiz: {
            question: "Which mammal has the longest os penis (baculum)?",
            options: ["Bull", "Dog", "Walrus", "Horse"],
            correctIndex: 2,
            explanation: "Walrus baculum can reach 60 cm — longest of any land mammal. The horse and bull, despite their size, have no os penis at all (musculocavernous or fibroelastic instead)."
        }
    },
    {
        id: 84,
        title: "Sloth Inverted Claws & Slow Metabolism",
        category: "wildlife",
        comparison: "Sloth vs. Dog",
        why: "Sloths hang upside-down from branches using CURVED HOOK CLAWS that don't actively grip — they passively lock the digit closed via tendon engineering, so the sloth uses ZERO muscle energy to hang. Combined with the lowest metabolism of any mammal (~40% of expected for body weight), sloths can survive on a leaf diet that no other mammal could.",
        clinical: "Sloths in captivity often die of stress + improper diet. Heart rate can drop to ~15 bpm during rest — heart-rate-based anaesthesia monitors give false alarms. Body temperature varies more than other mammals.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Sloth.jpg/640px-Sloth.jpg",
        analogy: "A sloth's claws are like coat hooks — bend it once and it stays. No muscle needed to hold the coat. That's why a sloth can sleep upside-down for 15 hours a day.",
        quiz: {
            question: "How does a sloth hang motionless from branches?",
            options: ["Strong muscle contractions", "Passive tendon-lock mechanism in the curved claws", "Suction cups on the digits", "Reverse gravity sensors"],
            correctIndex: 1,
            explanation: "Sloth claws are curved hooks that passively engage when the digit relaxes — no muscle effort needed. Combined with extreme energy efficiency, allows sloth to sleep upside-down."
        }
    },
    {
        id: 85,
        title: "Crocodile 4-Chambered Heart",
        category: "wildlife",
        comparison: "Crocodile vs. Other reptiles",
        why: "Crocodiles are the only reptiles with a TRUE 4-chambered heart (like birds and mammals) — but with a special twist: the FORAMEN OF PANIZZA, a permanent opening between the left and right aortic arches. This lets them SHUNT blood away from the lungs during long dives (up to 1 hour). Other reptiles (snakes, lizards) have only a 3-chambered heart.",
        clinical: "Captive crocodilians anaesthetized for surgery need careful monitoring because they can shunt blood to bypass anesthetic delivery to the lungs. The foramen of Panizza must be considered when interpreting blood gas analysis.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Crocodile.jpg/640px-Crocodile.jpg",
        analogy: "A crocodile heart is a 4-chambered house with a secret door (Panizza) between the left and right aortas — open this door, and the crocodile becomes a 'reptile' that can hold its breath; close it, and it's a 'mammal' with full oxygen delivery.",
        quiz: {
            question: "What unique feature lets crocodiles dive for 1+ hour without breathing?",
            options: ["3-chambered heart", "Special lungs only", "4-chambered heart with foramen of Panizza shunt", "Tail-pumping circulation"],
            correctIndex: 2,
            explanation: "Crocodile has a 4-chambered heart + an opening (foramen of Panizza) between the two aortic arches that allows them to shunt blood away from the lungs during prolonged dives."
        }
    },
    {
        id: 86,
        title: "Cheetah Non-Retractable Claws",
        category: "wildlife",
        comparison: "Cheetah vs. Lion/Tiger/House Cat",
        why: "Cheetahs are the only big cats with semi-non-retractable claws — they don't fully sheath. The exposed claws act as built-in running spikes for traction during 110 km/h chases. Other felids (lion, tiger, house cat) retract their claws to keep them sharp for climbing and prey-grappling. Cheetah trades grappling for speed.",
        clinical: "Cheetah claws wear down more than other cats — captive cheetahs need claw inspection during anaesthesia. Their long, thin legs are also more fracture-prone. A historical genetic bottleneck (extreme inbreeding in their population history) makes them susceptible to disease.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Cheetah_running.jpg/640px-Cheetah_running.jpg",
        analogy: "House cats are like Wolverine — claws hide in sheaths, come out sharp on demand. Cheetahs are like sprinters wearing permanent track spikes — always grip-ready, slightly worn down all the time.",
        quiz: {
            question: "Why does the cheetah have non-retractable claws?",
            options: ["For climbing", "For running traction at high speed", "For digging burrows", "For self-defence"],
            correctIndex: 1,
            explanation: "Cheetah claws stay exposed like running spikes — providing extra grip on the ground during 110 km/h sprints. Unique among the cat family."
        }
    }
];