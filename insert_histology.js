const fs = require('fs');

const dataFile = 'e:\\kimi anatomy 2\\data-quiz.JS';
const newQsFile = 'e:\\kimi anatomy 2\\new_histology_questions_2.txt';

let data = fs.readFileSync(dataFile, 'utf8');
let newQsText = fs.readFileSync(newQsFile, 'utf8');

const objectMatch = newQsText.match(/const new_histology = (\{[\s\S]+\});/);
if (!objectMatch) {
    console.error("Could not find new_histology object in file.");
    process.exit(1);
}

const newHistology = eval('(' + objectMatch[1] + ')');

for (const section of ['Cytology & Basic Tissues', 'Blood & Bone Marrow', 'Digestive & Other Systems']) {
    for (const type of ['mcq', 'tf', 'fib']) {
        const qs = newHistology[section][type];
        if (!qs || qs.length === 0) continue;

        const qsString = qs.map(q => {
            if (type === 'mcq') {
                return `        { q: ${JSON.stringify(q.q)}, o: ${JSON.stringify(q.o)}, a: ${q.a}, e: ${JSON.stringify(q.e)} }`;
            } else if (type === 'tf') {
                return `        { q: ${JSON.stringify(q.q)}, a: ${q.a}, e: ${JSON.stringify(q.e)} }`;
            } else if (type === 'fib') {
                return `        { q: ${JSON.stringify(q.q)}, a: ${JSON.stringify(q.a)}, e: ${JSON.stringify(q.e)} }`;
            }
        }).join(',\n');

        const sectionIdx = data.indexOf(`"${section}": {`);
        if (sectionIdx === -1) {
            console.error(`Could not find section ${section}`);
            continue;
        }
        
        const typeIdx = data.indexOf(`${type}: [`, sectionIdx);
        if (typeIdx === -1) {
            console.error(`Could not find type ${type} in section ${section}`);
            continue;
        }
        
        const bracketStartIdx = data.indexOf('[', typeIdx);
        let bracketLevel = 1;
        let closeIdx = -1;
        let lastItemIdx = -1;
        for (let i = bracketStartIdx + 1; i < data.length; i++) {
            if (data[i] === '[') bracketLevel++;
            else if (data[i] === ']') {
                bracketLevel--;
                if (bracketLevel === 0) {
                    closeIdx = i;
                    break;
                }
            } else if (bracketLevel === 1 && data[i] === '}') {
                lastItemIdx = i;
            }
        }
        
        if (closeIdx !== -1 && lastItemIdx !== -1) {
            const before = data.substring(0, lastItemIdx + 1);
            const after = data.substring(lastItemIdx + 1);
            data = before + ',\n' + qsString + after;
        } else {
            console.error(`Could not find end of ${type} array in ${section}`);
        }
    }
}

fs.writeFileSync(dataFile, data, 'utf8');
console.log("Successfully inserted Histology questions.");
