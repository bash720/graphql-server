import Product from '../models/Product';


export const resolvers =  {
    Query: {
        async allProducts(){
            return await Product.find();
        }
    }
}