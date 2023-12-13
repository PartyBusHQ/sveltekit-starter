import contentful from 'contentful';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '$env/static/private';

const contentfulClient = contentful.createClient({
	space: CONTENTFUL_SPACE_ID as string,
	environment: 'master',
	accessToken: CONTENTFUL_ACCESS_TOKEN as string
});

export default contentfulClient;
