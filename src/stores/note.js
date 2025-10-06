import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore("notes", () => {
    const notes = ref([]);

    const createId = () => {
        return Date.now().toString(36) + Math.random().toString(36).slice(2); //Aquí podriamos ver los de los UUID u otra cosa
    }

    const addNote = (title) => {
        notes.value.unshift({ //Con unshift agregamos el elemento al inicio el elemento al inicio del array
            id: createId(),
            titulo: title,
            marked: false 
        })
    }

    return{
        notes,
        addNote
    };
}, {
    persist: true
});