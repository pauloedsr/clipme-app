export class TimelineModel{
  _id: string;
  updatedAt: Date;
  createdAt: Date;
  autor: String;
  nome: String;
  colaboradores: [{autor: String}]
};

export class ClipModel {
  _id: string;
  updatedAt: Date;
  createdAt: Date;
  clip: string;
  autor: string;
  timeline: string;
  __v: number;
}

export class ViewTimeline {
  timeline: TimelineModel;
  clips: ClipModel[];
}
