const { Schema, model, default: mongoose } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: (date)=> date.toLocaleDateString("en-US")
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    });

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;