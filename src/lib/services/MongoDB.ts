import mongoose from 'mongoose';

export default class DatabaseService {
	static async connect() {
		try {
			await mongoose.connect(import.meta.env.VITE_MONGODB_URI);
			console.log('Connected to MongoDB');
		} catch (e) {
			console.error(e);
			console.log('MongoDB connection failed');
		}
	}

	static async disconnect() {
		try {
			await mongoose.disconnect();
			console.log('Disconnected from MongoDB');
		} catch (e) {
			console.error(e);
			console.log('MongoDB disconnection failed');
		}
	}
}
