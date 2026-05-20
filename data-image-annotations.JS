// =========================================================
// EDITABLE IMAGE ANNOTATIONS
// Percent coordinates keep labels stable across screen sizes.
// =========================================================

window.imageAnnotations = window.imageAnnotations || {};

window.imageAnnotations["scapula-ox-horse-dog"] = {
    title: "Comparative Scapula: Ox, Horse, Dog",
    image: "images/scapula-ox-horse-dog-annotated.png",
    alt: "Comparative scapula image for ox, horse, and dog",
    labels: [
        { id: "ox-title", species: "Ox", text: "Ox scapula", note: "Left specimen.", target: { x: 21, y: 8 }, label: { x: 21, y: 3 }, color: "white" },
        { id: "ox-spine", species: "Ox", text: "Spine of scapula", note: "Raised ridge on lateral surface.", target: { x: 22, y: 36 }, label: { x: 7, y: 42 }, color: "yellow" },
        { id: "ox-supra", species: "Ox", text: "Supraspinous fossa", note: "Cranial/narrow fossa in ox.", target: { x: 18, y: 24 }, label: { x: 25, y: 21 }, color: "cyan" },
        { id: "ox-infra", species: "Ox", text: "Infraspinous fossa", note: "Caudal/wider fossa.", target: { x: 20, y: 51 }, label: { x: 29, y: 55 }, color: "cyan" },
        { id: "ox-acromion", species: "Ox", text: "Acromion process", note: "Present and distinct in ox.", target: { x: 14, y: 67 }, label: { x: 6, y: 67 }, color: "yellow" },
        { id: "ox-neck", species: "Ox", text: "Neck of scapula", note: "Constriction proximal to glenoid region.", target: { x: 26, y: 69 }, label: { x: 31, y: 69 }, color: "white" },
        { id: "ox-supraglenoid", species: "Ox", text: "Supraglenoid tubercle", note: "Biceps brachii origin region.", target: { x: 19, y: 80 }, label: { x: 29, y: 77 }, color: "yellow" },
        { id: "ox-glenoid", species: "Ox", text: "Glenoid cavity", note: "Articulates with humeral head.", target: { x: 23, y: 88 }, label: { x: 31, y: 88 }, color: "cyan" },

        { id: "horse-title", species: "Horse", text: "Horse scapula", note: "Middle specimen.", target: { x: 51, y: 8 }, label: { x: 51, y: 3 }, color: "white" },
        { id: "horse-spine", species: "Horse", text: "Spine of scapula", note: "Spine fades distally; no true acromion.", target: { x: 54, y: 34 }, label: { x: 48, y: 34 }, color: "yellow" },
        { id: "horse-supra", species: "Horse", text: "Supraspinous fossa", note: "Cranial fossa.", target: { x: 44, y: 25 }, label: { x: 51, y: 21 }, color: "cyan" },
        { id: "horse-infra", species: "Horse", text: "Infraspinous fossa", note: "Large caudal fossa.", target: { x: 58, y: 40 }, label: { x: 64, y: 41 }, color: "cyan" },
        { id: "horse-no-acromion", species: "Horse", text: "No acromion", note: "Horse scapular spine fades distally instead of ending in an acromion.", target: { x: 55, y: 57 }, label: { x: 60, y: 53 }, color: "yellow" },
        { id: "horse-tuber-spinae", species: "Horse", text: "Tuber spinae region", note: "Prominent thickening on scapular spine.", target: { x: 55, y: 65 }, label: { x: 61, y: 62 }, color: "yellow" },
        { id: "horse-neck", species: "Horse", text: "Neck of scapula", note: "Distal constricted part.", target: { x: 56, y: 73 }, label: { x: 61, y: 72 }, color: "white" },
        { id: "horse-supraglenoid", species: "Horse", text: "Supraglenoid tubercle", note: "Biceps origin region.", target: { x: 57, y: 80 }, label: { x: 62, y: 78 }, color: "yellow" },
        { id: "horse-glenoid", species: "Horse", text: "Glenoid cavity", note: "Articular socket for humerus.", target: { x: 59, y: 88 }, label: { x: 63, y: 88 }, color: "cyan" },

        { id: "dog-title", species: "Dog", text: "Dog scapula", note: "Right specimen.", target: { x: 79, y: 8 }, label: { x: 79, y: 3 }, color: "white" },
        { id: "dog-spine", species: "Dog", text: "Spine of scapula", note: "Prominent central ridge.", target: { x: 78, y: 46 }, label: { x: 87, y: 43 }, color: "yellow" },
        { id: "dog-supra", species: "Dog", text: "Supraspinous fossa", note: "Fossa cranial to spine.", target: { x: 82, y: 39 }, label: { x: 77, y: 35 }, color: "cyan" },
        { id: "dog-infra", species: "Dog", text: "Infraspinous fossa", note: "Fossa caudal to spine.", target: { x: 80, y: 51 }, label: { x: 84, y: 53 }, color: "cyan" },
        { id: "dog-acromion", species: "Dog", text: "Acromion / hamate region", note: "Dog acromion has hamate and suprahamate processes.", target: { x: 78, y: 65 }, label: { x: 86, y: 61 }, color: "yellow" },
        { id: "dog-neck", species: "Dog", text: "Neck of scapula", note: "Constriction proximal to glenoid region.", target: { x: 80, y: 70 }, label: { x: 84, y: 69 }, color: "white" },
        { id: "dog-supraglenoid", species: "Dog", text: "Supraglenoid tubercle", note: "Biceps origin region.", target: { x: 82, y: 78 }, label: { x: 86, y: 77 }, color: "yellow" },
        { id: "dog-glenoid", species: "Dog", text: "Glenoid cavity", note: "Articular socket for humerus.", target: { x: 77, y: 81 }, label: { x: 80, y: 86 }, color: "cyan" }
    ]
};
