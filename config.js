export const Config = {
	phone_number: "917086726371", // Number BOT for pairing
	owners: ["917086726371"], // Number Owner for specific feature access

	use_pairing_code: true,
	pairing_wait: 1000 * 6,

	prefix: ["!", ".", "/"],

	maelyn_apikey: process.env.MAELYN_APIKEY || "", // https://maelyn.tech
	bing_cookie: process.env.BING_COOKIE || "", // _U

	// change the timezone to your timezone
	timezone: "Asia/Jakarta",

	profile: {
		namebot: "Kurodate Haruna",
		powered: "Powered By TIKU✨🌷 APIs",
		web: "",
	},

	images: {
		menu: "https://qu.ax/mdgMz.jpg",
		allmenu: "https://qu.ax/axlPu.jpg",
	},

	database: {
		use_mongo: false,
		mongo_url: "mongodb+srv://hey:TIKU12345@cluster0.5v1ps.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",

		path: "./db/database.json",
		save_interval: 10_000,
		debug: false,
	},
};
