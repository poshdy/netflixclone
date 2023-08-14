export const removeNullImgs = (data: any[]) => {
  return data.filter(img =>  img.poster_path || img.backdrop_path !== null);
};
