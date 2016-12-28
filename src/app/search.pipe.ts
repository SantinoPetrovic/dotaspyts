import {Pipe, PipeTransform} from "@angular/core";

@Pipe ({
	name: "search",
	pure: false
})

export class SearchPipe implements PipeTransform {
	// Filter out all names that doesn't contain the word you've wrote on input element
	transform(value, [term]) {
		return value.filter((item)=> item.nickname.match(term));
	}
}