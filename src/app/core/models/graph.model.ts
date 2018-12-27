// export class Dataset {
//     label: string;
//     data: any[];
//     backgroundColor: any[];
//     borderColor: any[];
//     borderWidth: number;
//     fill: boolean;
// }

class Scales {
    xAxes: [{
        display: boolean
    }];
    yAxes: [{
        display: boolean
        ticks: {
            beginAtZero: boolean
        }
    }];
}

class Legend {
    display: boolean
}

class Options {
    scales: Scales;
    legend: Legend;
}


class Data {
    labels: any[];
    datasets: any[];

    constructor(obj?: any) {
        if (!obj) {
            return;
        }
        this.labels = obj.labels;
        this.datasets = obj.dataSets;
    }
}

export class Graph {
    type: string;
    data: Data;
    options: Options;


    constructor(obj?: any) {
        if (!obj) {
            return;
        }
        this.type = obj.type;
        this.data = obj.data;
    }
}
