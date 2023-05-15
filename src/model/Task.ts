import { Schema, model,Model, connection } from 'mongoose';
import { TaskType } from '../types/TaskType';

const modelName:string = 'Task';
const schema = new Schema<TaskType>({
    title:{type: String, required: true},
    done:Boolean
});
export default (connection && connection.models[modelName]) ?
connection.models[modelName] as Model<TaskType> : model<TaskType>(modelName, schema);