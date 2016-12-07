import {Pipe, PipeTransform} from "@angular/core";

@Pipe ({
	name: "search"
})

export class SearchPipe implements PipeTransform {
	transform(value) {
		return value.filter((item)=> item.nickname.startsWith('s'));
	}
}