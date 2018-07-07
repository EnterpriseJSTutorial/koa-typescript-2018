
import { Cat } from '../models/cat';

export interface ICatService {
    getCat(): Promise<Cat>;
}

export class CatService implements ICatService {
    async getCat() {
        return {
            id: 1,
            name: 'Felix',
            age: 2,
            likesFish: true,
        };
    }
}
