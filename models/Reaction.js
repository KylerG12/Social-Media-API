const { Schema, model, default: mongoose } = require('mongoose');

const reactionSchema = new Schema({
    reactionID: {
        type: Schema.ObjectId,
        default: mongoose.Types.ObjectId()
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
        get: (date)=> date.toLocaleDateString("en-US")
    }
});

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;