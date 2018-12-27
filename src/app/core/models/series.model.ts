import { InsightKeyValue } from '../../open-age/core/models/insight-value.model';
import { Graph } from './graph.model';

export class Series {
    insightValues: InsightKeyValue[];
    graph: Graph;
    constructor(obj?: any) {
        if (!obj) { return; }
        this.insightValues = obj.insightValues;
        this.graph = obj.graph;
    }
}
