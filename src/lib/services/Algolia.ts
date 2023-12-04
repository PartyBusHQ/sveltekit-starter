import algoliasearch from 'algoliasearch';

const algoliaClient = algoliasearch(
	import.meta.env.VITE_ALGOLIA_APP_ID,
	import.meta.env.VITE_ALGOLIA_ADMIN_API_KEY
);

export default algoliaClient;
