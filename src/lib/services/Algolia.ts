import algoliasearch from 'algoliasearch';
import { ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY } from '$env/static/private';

const algoliaClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_ADMIN_API_KEY);

export default algoliaClient;
