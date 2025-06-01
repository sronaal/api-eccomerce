import Product from "../models/product.js"



class DaoProducto{  


    constructor(){}

    create(producto){

        return Product.create(producto)
    }

    findAll(){

        return Product.find()
    }

    findByState(estado){

        return Product.findOne({ estado })
    }

    findById(id){

        return Product.findById(id)
    }
    


}


export default DaoProducto