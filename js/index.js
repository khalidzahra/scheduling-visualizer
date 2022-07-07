// Process variables
var processCount = 3;
var processArr = [{
        id: 0,
        arrival: 0,
        priority: 1,
        burst: 5
    },
    {
        id: 1,
        arrival: 3,
        priority: 2,
        burst: 3
    },
    {
        id: 2,
        arrival: 2,
        priority: 3,
        burst: 10
    }
];

const runScheduler = () => {
    let selector = Document.getElementById("type-selector");
    let params = {};
    switch (selector.options[selector.selectedIndex].value) {
        case "FCFS":
            params = firstComeFirstServe();
            console.log(params);
            break;
    }
};

const firstComeFirstServe = () => {
    processArr.sort((a, b) => {
        return a.arrival - b.arrival;
    });
    let params = {
        waitingTime: 0,
        turnaroundTime: 0,
        timeline: Array(processArr.length)
    };
    let currTime = 0;
    processArr.forEach((process) => {
        console.log(process);
        params.waitingTime += currTime - process.arrival;
        params.timeline[process.id] = [currTime, currTime += process.burst];
        params.turnaroundTime += currTime - process.arrival;
    });
    params.waitingTime /= processArr.length;
    params.turnaroundTime /= processArr.length;
    return params;
};