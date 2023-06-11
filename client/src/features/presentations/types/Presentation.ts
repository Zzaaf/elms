export type Presentation = {
  id: number;
  title: string;
  fileName: string;
  typeDepartmentID: number;
  phaseId: number;
};

export type PresentationState = {
  presentations: Presentation[];
  error: string | undefined;
};

export type PresentationId = Presentation['id'];
