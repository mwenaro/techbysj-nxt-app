export const imagePath = '/assets/images';

export const getImage = (path: string) => `${imagePath}${path.trim()}`;

export const LOGO_PIC = `${imagePath}/logo.png`;

export const ABOUT_SECTION_IMAGE = getImage('/binary.png')