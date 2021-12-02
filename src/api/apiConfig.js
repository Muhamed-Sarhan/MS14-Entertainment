const apiConfig = {
	baseUrl: 'https://api.themoviedb.org/3/',
	apiKey: 'a97303eae6231175b1b414753df13df5',
	originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
	w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
