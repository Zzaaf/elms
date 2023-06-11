import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import axios from 'axios';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import { Presentation } from './types/Presentation';
import { useAppDispatch } from '../../store';
import { removePresentation } from './presentationsSlice';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

const PresentationItem = ({ presentation }: { presentation: Presentation }) => {
  const [file, setFile] = useState('');
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/pdf/${presentation.fileName}`, { responseType: 'arraybuffer' })
      .then((response) => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
        setFile(`data:application/pdf;base64,${base64}`);
      });
  }, []);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const presentationItem = (
    <div>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page scale={0.5} className="pdf" pageNumber={pageNumber} />
      </Document>
      <p className="pdd">
        Page {pageNumber} of {numPages}
      </p>
      {pageNumber > 1 && <button onClick={() => setPageNumber((prev) => prev - 1)}>prev</button>}
      {pageNumber < numPages && (
        <button onClick={() => setPageNumber((prev) => prev + 1)}>next</button>
      )}
    </div>
  );

  return (
    <div className="presentations__item">
      <button className="presentations__btn-open" onClick={() => setShow((prev) => !prev)}>
        {presentation.title}
      </button>
      {show && presentationItem}
      <a href={`http://localhost:4000/pdf/download/${presentation.fileName}`} download>
        <button>Download</button>
      </a>
      <button
        className="presentations__btn-delete"
        onClick={() => dispatch(removePresentation(presentation.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default PresentationItem;
