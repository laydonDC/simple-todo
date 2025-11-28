import React from 'react'
import { LegendContainer, BulletPoint} from './styles';

function Legend() {
  return (
    <LegendContainer>
        <BulletPoint type= "first" role="listitem">
            Not Completed
        </BulletPoint>
        <BulletPoint type = "second" role="listitem">
            Completed
        </BulletPoint>
    </LegendContainer>
  )
}

export default Legend