import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "replaceme",
    dataset: "production",
    useCdn: false 
})