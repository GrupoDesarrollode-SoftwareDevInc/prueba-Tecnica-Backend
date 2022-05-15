export default {
	jwtSecret: process.env.JWT_SECRET || "esto-es-una-clave-secreta?",
	DB: {
		URI: process.env.MONGODB_URI || "mongodb://localhost/prueba-Tecnica-Backend",
		USER: process.env.MONGODB_USER,
		PASSWORD: process.env.MONGODB_PASSWORD,
	},
};
