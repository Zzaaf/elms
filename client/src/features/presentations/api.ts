import { Presentation, PresentationId } from './types/Presentation';

export async function getPresentations(): Promise<Presentation[]> {
  const res = await fetch('http://localhost:4000/pdf');
  return res.json();
}

export async function removePresentation(pdfId: PresentationId): Promise<PresentationId> {
  const res = await fetch(`http://localhost:4000/pdf/${pdfId}`, {
    method: 'DELETE',
  });
  return res.json();
}

export async function addPresentation(presentationData: FormData): Promise<Presentation> {
  const res = await fetch(`http://localhost:4000/pdf`, {
    method: 'POST',
    body: presentationData,
  });
  return res.json();
}
