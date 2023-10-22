import React from 'react';
import { SVGIcon, ISVGIconProps } from './SVGIcon';

export const GatsbyIcon: React.FC<ISVGIconProps> = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      d="M28.5714 16H20.5714V18.2857H26.0571C25.2571 21.7143 22.7429 24.5714 19.4286 25.7143L6.28571 12.5714C7.65714 8.57143 11.5429 5.71429 16 5.71429C19.4286 5.71429 22.5143 7.42857 24.4571 10.0571L26.1714 8.57143C23.8857 5.48572 20.2286 3.42857 16 3.42857C10.0571 3.42857 5.02857 7.65715 3.77143 13.2571L18.8571 28.3429C24.3429 26.9714 28.5714 21.9429 28.5714 16Z"
      fill="white"
    />
    <path
      d="M3.42857 16.1143C3.42857 19.3143 4.68571 22.4 7.08571 24.8C9.48571 27.2 12.6857 28.4571 15.7714 28.4571L3.42857 16.1143Z"
      fill="white"
    />
    <path
      d="M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM7.08571 24.9143C4.68571 22.5143 3.42857 19.3143 3.42857 16.2286L15.8857 28.5714C12.6857 28.4571 9.48571 27.3143 7.08571 24.9143ZM18.7429 28.2286L3.77143 13.2571C5.02857 7.65714 10.0571 3.42857 16 3.42857C20.2286 3.42857 23.8857 5.48571 26.1714 8.57143L24.4571 10.0571C22.5143 7.42857 19.4286 5.71429 16 5.71429C11.5429 5.71429 7.77143 8.57143 6.28571 12.5714L19.4286 25.7143C22.7429 24.5714 25.2571 21.7143 26.0571 18.2857H20.5714V16H28.5714C28.5714 21.9429 24.3429 26.9714 18.7429 28.2286Z"
      fill="#663399"
    />
  </SVGIcon>
);
