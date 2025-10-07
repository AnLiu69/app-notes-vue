import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore("notes", () => {
    const API_URL = "https://ca483986c2c7e5b6b647.free.beeceptor.com/api/notes/";

    const notes = ref([]);
    const loading = ref(false);
    const error = ref(false);

    const getNotes = async () => {
        try {
            loading.value = true;
            const response = await fetch(API_URL);
            const data = await response.json();
    
            notes.value = data.reverse(); //Esto invierte el array, el último es el primero y el primero el último

            loading.value = false;
            error.value = false;
        } catch (e) {
            loading.value = false;
            error.value = true;
        }

    }

    const createId = () => {
        return Date.now().toString(36) + Math.random().toString(36).slice(2); //Aquí podriamos ver los de los UUID u otra cosa
    }

    const addNote = async (title) => {
        const newNote = {
            id: createId(),
            titulo: title,
            marked: false
        }

        try{
            await fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify(newNote)
            })

            await getNotes();
        }
        catch(e){
            error.value = true
        }
    }

    return{
        notes,
        loading,
        error,
        addNote,
        getNotes
    };
});