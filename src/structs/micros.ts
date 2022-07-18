export interface Micro {
  id: string;
  title: string;
  content: string;
  date: string;
}

export interface MicroList {
  micros: Micro[];
}
