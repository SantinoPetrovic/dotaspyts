import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "orderby",
  pure: false
})
export class OrderByPipe implements PipeTransform {
}