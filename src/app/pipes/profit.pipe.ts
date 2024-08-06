import {Pipe , PipeTransform } from '@angular/core';

@Pipe({name : 'profit'})

export class ProfitPipe implements PipeTransform{
    transform(value: number, profitPercantage = 10): number {
        return value*profitPercantage*1/100;
        
    }
}


