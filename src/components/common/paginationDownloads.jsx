import React from 'react';
import DownloadsButton from '../utils/downloadsUtils';
import { BottomDivUser } from './common.component.styled';
import Pagination from './paginationArrows';


const PaginationDownloads = () => {
    return ( 
        <BottomDivUser>
            <DownloadsButton />
            <Pagination />
        </BottomDivUser>
    );
}

export default PaginationDownloads;