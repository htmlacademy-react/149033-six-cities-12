
const WIDTH_STARS = 5;
export const calcRating = (rating: number) => `${Math.round(rating) / WIDTH_STARS * 100}%`;

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);
