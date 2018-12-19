import Product from '../models/Product';


export const resolvers =  {
    Query: {
        async allProducts(){
            return await Product.find();
        },
        async getProduct(root, {_id}){
            return Product.findById(_id);
        }
    },
    Mutation:{
        async createProduct(root,  {input}){
            return await Product.create(input);
        },
        updateProduct(root, {_id, input}){
            return await Product.findByIdAndUpdate({_id}, input, { new : true});
        }
    }
}