import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore("notes", () => {
    const notes = ref([
        {
            id: "1",
            titulo: "Ir al baño",
            marked: false
        },
        {
            id: "2",
            titulo: "Terminar la tesis",
            marked: false
        }
    ]);

    return{
        notes
    };
});