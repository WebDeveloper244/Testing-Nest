import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true,
    collection: "users"
})
export class userSchema {
    @Prop({ required: true })
    name: string

    @Prop({ required: true })
    age: number

    @Prop({ required: true })
    jobTitle: string
}

export const schema = SchemaFactory.createForClass(userSchema);
