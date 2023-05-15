const baseUrl = process.env.NEXT_APP_MGNL_HOST;
const spaRootNodePath = process.env.NEXT_APP_MGNL_APP_BASE;
const pagePath = process.env.NEXT_APP_MGNL_API_PAGES;
const annotionsPath = process.env.NEXT_APP_MGNL_API_ANNOTATIONS;
const subIdQueryString = process.env.NEXT_APP_MGNL_SUB_ID_STRING;

const pagesApi = baseUrl + pagePath + spaRootNodePath + subIdQueryString;

const templateAnnotationsApi =
	baseUrl + annotionsPath + spaRootNodePath + subIdQueryString;

export { baseUrl, spaRootNodePath, pagesApi, templateAnnotationsApi };
