import React from 'react';
import { PageArrow, PageDiv } from './common.component.styled';


//Get font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


function Pagination() {
    return (
        <PageDiv>
            <PageArrow>
                <FontAwesomeIcon
                    icon={faAngleLeft}
                />
            </PageArrow>
            <PageArrow>
                <FontAwesomeIcon
                    icon={faAngleRight}
                />
            </PageArrow>
        </PageDiv>
    );
}

export default Pagination;