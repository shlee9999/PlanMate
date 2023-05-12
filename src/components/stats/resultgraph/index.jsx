import React from 'react';
import './styles.jsx';
import ResultGraphWrapper from './resultgraphwrapper/index.jsx';
import { ResultGraphContainer } from './styles.jsx';

function ResultGraph() {
  return (
    <ResultGraphContainer>
      <ResultGraphWrapper>|</ResultGraphWrapper>

      <ResultGraphWrapper></ResultGraphWrapper>
    </ResultGraphContainer>
  );
}

export default ResultGraph;
