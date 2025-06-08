import Product from "../models/product.js"



class DaoProducto{  


    constructor(){}

    create(producto){

        return Product.create(producto)
    }

    findAll(){

        return Product.find().sort({createdAt: -1}).populate('categoria')
    }

    findByState(estado){

        return Product.findOne({ estado })
    }

    findById(id){

        return Product.findById(id)
    }

    delete(_id){
        
        return Product.deleteOne({_id})
    }
    


}


export default DaoProducto