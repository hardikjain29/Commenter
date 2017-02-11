import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: { type: 'String'},
  likes: { type: 'Number',},
  dislikes: { type: 'Number',}
});

export default mongoose.model('Comment', commentSchema);
