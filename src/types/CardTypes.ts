import React from 'react';

export interface CardProps {
    children: React.ReactNode;
    bg?: React.ComponentProps<'div'>['className'];
}