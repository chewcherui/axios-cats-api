import { defineStore } from "pinia";
import { intAppearance } from "./interface";

export const useAppearanceStore = defineStore('appearance', {
    state: (): intAppearance => ({
        lightMode : true
    }),
    actions: {
        toggleAppearance(): void {
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
        }
    }
})