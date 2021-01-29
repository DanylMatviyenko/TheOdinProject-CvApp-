import * as React from 'react';
import sprite from 'assets/Img/sprite.svg';

interface IIconProps {
    className: string;
    id: string;
}
export const Icon = ({ className, id }: IIconProps) => <svg className={ className }>
    <use href={ sprite + "#" + id } />
</svg>
