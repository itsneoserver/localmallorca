// Cloudinary URL transformation helpers — preserve patterns from index.html
// All Cloudinary images get on-the-fly resizing for performance.

const CL_HOST = "res.cloudinary.com";

function transform(url: string, t: string): string {
  if (!url || !url.includes(CL_HOST)) return url;
  // Avoid double-injecting transforms
  if (url.includes("/upload/")) {
    // strip any existing transform group right after /upload/
    return url.replace(/\/upload\/(?:[^/]*\/)?/, `/upload/${t}/`);
  }
  return url;
}

export const img = {
  hero: (u: string) => transform(u, "c_fill,ar_16:9,w_1600,q_auto,f_auto"),
  heroSmall: (u: string) => transform(u, "c_fill,ar_16:9,w_900,q_auto,f_auto"),
  card: (u: string) => transform(u, "w_640,h_800,c_fill,q_auto,f_auto"),
  square: (u: string) => transform(u, "w_600,h_600,c_fill,q_auto,f_auto"),
  thumb: (u: string) => transform(u, "w_120,h_120,c_fill,q_auto,f_auto"),
  micro: (u: string) => transform(u, "w_80,h_80,c_fill,q_auto,f_auto"),
  lightbox: (u: string) => transform(u, "w_1600,q_auto,f_auto"),
  logo: (u: string) => transform(u, "w_120,h_120,c_fit,q_auto"),
};
