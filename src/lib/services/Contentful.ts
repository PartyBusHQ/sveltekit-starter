import contentful from 'contentful';

const contentfulClient = contentful.createClient({
	space: import.meta.env.VITE_CONTENTFUL_SPACE_ID as string,
	environment: 'master',
	accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string
});

export default contentfulClient;
