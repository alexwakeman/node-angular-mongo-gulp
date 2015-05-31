var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define Schemas
var MySchema = new Schema({
	uid: { type: Schema.Types.ObjectId, required: true },
	field: { type: String, required: true },
	created: { type: Date, default: Date.now }
});

// Export Models
exports.MySchemaModel = mongoose.model('MySchema', MySchema);