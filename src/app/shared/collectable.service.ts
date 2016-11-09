import {Collectable} from "./collectable.model";

export class CollectableService{
    private collectables: Collectable[] = [
        { description: 'This is a book', type: 'Book'},
        { description: 'This is a paper', type: 'Paper'},
        { description: 'This is a piece of toilet paper', type: 'Toilet Paper'},
    ];

    private collection: Collectable[] = [];

    getCollectables(){
        return this.collectables;
    }

    getCollection(){
        return this.collection;
    }

    addToCollection(item: Collectable){
        if(this.collection.indexOf(item) !== -1){
            return;
        }
        this.collection.push(item);
    }

    removeFromCollection(item: Collectable){
        this.collection.splice(this.collection.indexOf(item), 1);
    }
}