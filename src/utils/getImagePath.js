const IMAGE_BASE_URL = "https://image.tmdb.org/t/p"

export const getImagePath = (relativePath = "", imageType = "original") => {
    if(typeof relativePath !== 'string' || typeof imageType !== 'string'){
        return '';
    }
    return `${IMAGE_BASE_URL}/${imageType}${relativePath}`;
}