import {Pipe, PipeTransform} from 'angular2/core';
// importowanie filtrow pipe wbudowanych

@Pipe({
    name: 'multiplyVotes'
    // ta nazwe pipe musimy umiescic w .html = article.component.html
})

export class MultiplyVotesPipe implements PipeTransform {
    transform(value: number) {
        return (value +1) * 10;
    }
}