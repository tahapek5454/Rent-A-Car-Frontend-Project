import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/car/carDetail';

@Pipe({
  name: 'filterForColor'
})
export class FilterForColorPipe implements PipeTransform {

  transform(value: CarDetail[], filterText:string ): CarDetail[] {

    filterText = filterText? filterText.toLocaleLowerCase():""


    return filterText? value.filter((c:CarDetail) => c.colorName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
