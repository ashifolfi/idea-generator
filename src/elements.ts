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

	loadElementList(_eljson: string) {
		const list: TTestElement[] = JSON.parse(_eljson);
		this.elementList.push(...list);
	}

	addElement(_element: TTestElement) {
		this.elementList.push(_element)
	}
}

