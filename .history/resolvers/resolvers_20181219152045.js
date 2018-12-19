import Product from '../models/Product';


export const resolvers =  {
    Query: {
        async allProducts(){
            return await Product.find();
        }
    },
    Mutation:{
        async createProduct(root,  {input}){
            return await Product.create(input);
        }
    }
}