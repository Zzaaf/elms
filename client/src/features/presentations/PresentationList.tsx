import React, { useEffect, useState } from 'react';

import PresentationItem from './PresentationItem';
import Uploader from './Uploader';
import { useAppDispatch, useAppSelector } from '../../store';
import { getPresentations } from './presentationsSlice';
import './styles/Presentations.scss';

function PresentationList() {
  const { presentations } = useAppSelector((store) => store.presentations);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPresentations());
  }, []);

  return (
    <div className="presentations__container">
      <Uploader />
      {presentations.map((presentation) => (
        <PresentationItem key={presentation.id} presentation={presentation} />
      ))}
    </div>
  );
}

export default PresentationList;
