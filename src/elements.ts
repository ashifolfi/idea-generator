export interface TTestElement {
    key: string;
    name: string;
    description: string;
    tags: string[];
    dependsOn: string[];
}

export class ElementManager {
    elementList: TTestElement[];

    // by default this list is empty. defaults are loaded in app.vue
    constructor() {
        this.elementList = [];	
    }

    loadElementList(_eljson: TTestElement[]) {
        //console.log(_eljson);
        this.elementList = [...this.elementList, ..._eljson];
        //this.elementList.push(..._eljson);
    }

    addElement(_element: TTestElement) {
        this.elementList.push(_element);
    }
}

