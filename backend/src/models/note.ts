import { InferSchemaType, Schema, model } from "mongoose";

// Schemat definiuje strukturę dokumentu w MongoDB
const noteSchema = new Schema({
    title: { type: String, required: true },     // tytuł - wymagany
    text: { type: String, required: false },     // tekst - opcjonalny
}, { timestamps: true });                        // automatyczne daty utworzenia/modyfikacji

// Generuje typ TypeScript z schematu
type Note = InferSchemaType<typeof noteSchema>;

// Eksportuje model Mongoose z typem TypeScript
export default model<Note>("Note", noteSchema);