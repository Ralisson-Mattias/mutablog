import React from 'react'

import styled from 'styled-components'

const BgImage = styled.img`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    
`

const BackgroundImage = () => {
    return <BgImage
        src="/Background.png"

    />
}

export default BackgroundImage