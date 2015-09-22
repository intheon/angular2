/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
	selector: "testapp"
})
@View({
	template: "<h1>help me</h1>"
})

class MyFirstComponent {
	name: string;

	constructor(){
		this.name = "ben";
	}
}

bootstrap(MyFirstComponent);
