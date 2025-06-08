import mongoose from "mongoose";

const categoriaSchema = new mongoose.Schema({

    nombre: {
        type: String
    },
    descripcion: {
        type: String
    }
})

const Categoria = mongoose.model('categoria', categoriaSchema)

export default Categoria