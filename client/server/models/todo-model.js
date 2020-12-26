const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todos = new Schema(
    {
        todo: {
            type: String,
            required: true
        },
    },
    {timestamps: true},
);

module.exports = mongoose.model('todos',Todos);
