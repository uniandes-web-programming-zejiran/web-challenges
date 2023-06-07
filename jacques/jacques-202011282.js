/*
Nombre: Juan Alegría
Código: 202011282
*/

let events = [];
let output = [];

let data = fetch('https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json')
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => { console.log("Error encontrado:", err); });

function getEventList(entries) {
    for (let i = 0; i < entries.length; i++) {
        let entry = entries[i];
        // Add new events to a global events variable
        for (let j in entry.events) {
            let event = entry.events[j];
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
}

function verifyEventConfusionMatrix(events, entries) {
    for (let i in events) {
        let [TP, TN, FP, FN] = [0, 0, 0, 0];
        let currentEvent = events[i];
        // Check if event appears in each entry
        for (let j = 0; j < entries.length; j++) {
            let entry = entries[j];
            if (entry.events.includes(currentEvent)) {
                if (entry.squirrel) {
                    TP += 1;
                } else {
                    FN += 1;
                }
            } else {
                if (entry.squirrel) {
                    FP += 1;
                } else {
                    TN += 1;
                }
            }
        }
        // Calculate MCC
        let numerator = TP * TN - FP * FN;
        let denominator = Math.sqrt((TP + FP) * (TP + FN) * (TN + FP) * (TN + FN));
        let MCC = numerator / denominator;
        // Add correlation coeficient to output array
        output.push({ "event": currentEvent, "correlation": MCC });
    }
}

data.then(entries => {
    getEventList(entries);
    verifyEventConfusionMatrix(events, entries);
    console.log(output);
});