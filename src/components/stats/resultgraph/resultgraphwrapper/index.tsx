import React from 'react'
import './styles'
import ResultGraphcontents from './graphcontents'
// import ShowingGraph from './showgraph';

import { ResultGraph_Wrapper } from './styles'

function ResultGraphWrapper() {
  return (
    <ResultGraph_Wrapper>
      {/*<ShowingGraph></ShowingGraph>*/} {/* 에러발생!! */}
      <ResultGraphcontents></ResultGraphcontents>
    </ResultGraph_Wrapper>
  )
}

export default ResultGraphWrapper
