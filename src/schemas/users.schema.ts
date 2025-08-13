import { Schema , Prop, SchemaFactory} from '@nestjs/mongoose'
import mongoose from 'mongoose'

@Schema()
export class OutUser{
    @Prop({unique:true,required:true})
    username:string

    @Prop({unique:true,required:true})
    password:string

    @Prop({required:true,default:'user'})
    role:string

    @Prop({default:Date.now})
    createdAt:Date

    @Prop({default:'edit'})
    right:string

    @Prop({type:[mongoose.Types.ObjectId],ref:'Workspace',default:[],required:true})
    workspaces:mongoose.Types.ObjectId[]
}

export const OutUsersSchema = SchemaFactory.createForClass(OutUser);