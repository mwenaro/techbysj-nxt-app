export interface Service {
  title: string;
  icon: React.ReactNode;
  description: string;
}
export interface Course extends Service {};

export interface Image{
  src: string
  des? : string
}
