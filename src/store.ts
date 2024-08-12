import { defineStore } from "pinia";
import axios from "axios";
import { intCat } from "./interface"; 
import { intCatState } from "./interface";

export const useCatStore = defineStore('catapi', {
    state: () => ({
        lightMode : true,
        catNameInput: "",
        familyFriendliness: 0,
        catArray: [],
        singleBreedArray: [] as intCat[],
        catName: "",
    }),

    // getters: () => {

    // },

    actions: {
        toggleAppearance() {
            console.log('before', this.lightMode)
            this.lightMode = !this.lightMode
            console.log('after', this.lightMode)
            if (this.lightMode) {
                document.body.classList.add('text-black')
                document.body.classList.remove('bg-gray-600')
                document.body.classList.remove('text-white')
            } else {
                document.body.classList.remove('text-black')            
                document.body.classList.add('bg-gray-600')
                document.body.classList.add('text-white')
            }
            console.log("toggled")
        },
        async getCatData() {
            try{
                const response = await axios.get("https://api.api-ninjas.com/v1/cats", {
                    params: {
                        name: this.catNameInput,
                        family_friendly: this.familyFriendliness
                    },
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "6y62YBCg27TX8fI2ag1yPQ==HHiMDSmFyYtVs7Gm"
                    }
                })

                let resData = response.data
                this.catArray = resData,
                console.log(this.catArray)
            }
            catch (error) {
                console.log(error)
            }
        },
        async getSingleBreedData(catName: string) {
            try{
                const response = await axios.get("https://api.api-ninjas.com/v1/cats", {
                    params: {
                        name: catName,
                    },
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "6y62YBCg27TX8fI2ag1yPQ==HHiMDSmFyYtVs7Gm"
                    }
                })
                let resData = response.data
                this.singleBreedArray = resData,
                console.log(this.singleBreedArray)
            }
            catch (error) {
                console.log(error)
            }
        }
    }
})