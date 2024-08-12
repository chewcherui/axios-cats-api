export interface intCat {
    length: string,
    origin: string,
    image_link: string,
    family_friendly: number,
    shedding: number,
    general_health: number,
    playfulness: number,
    meowing: number,
    children_friendly: number,
    stranger_friendly: number,
    grooming: number,
    intelligence: number,
    other_pets_friendly: number,
    min_weight: number,
    max_weight: number,
    min_life_expectancy: number,
    max_life_expectancy: number,
    name: string
}

export interface intCatState {
    lightMode : boolean,
    catArray: intCat[],
    catName: string,
    singleBreedArray: intCat[],
    catNameInput: string,
    familyFriendliness: number
}

export interface IntUserCat {
    inputbreed: string,
    description: string,
    username: string
}
