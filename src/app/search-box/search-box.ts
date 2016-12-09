import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector:'search-box',
	templateUrl: './search-box.html',
	styleUrls: [ '../../styles/list-fluid-design.css' ] 
})

export class SearchBox {
	@Output() update = new EventEmitter();

	ngOnInit() {
		this.update.emit('');
	}
}
