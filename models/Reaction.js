const { Schema, Types, default: mongoose } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        max_length: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        get: (date) => date.toLocaleDateString("en-US")
    }
},
{
    toJSON: {
      getters: true,
    }
  });


module.exports = reactionSchema;