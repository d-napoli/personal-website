import React from 'react'

import {
    Container,
    Btn
} from './styles'

import Icon from '../Icon'

function Button(props) {
    return (
        <Container>
            <Btn
                fill={props.fill}
                onClick={props.click}
            >
                {
                    props.icon ? 
                    <Icon
                        size={props.size ? props.size : "18"}
                        color={props.color ? props.color : "#fff"}
                        icon={props.icon}
                    />
                    : ""
                }
                &nbsp;{props.text}
            </Btn>
        </Container>
    );
}

export default Button