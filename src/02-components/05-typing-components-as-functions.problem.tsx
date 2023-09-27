import React, { FC } from 'react';

interface Props {
  className: string;
}

export const Button: FC<Props> = (props: Props) => {
  return <div></div>;
};

const Parent = () => {
  return (
    <>
      <Button className='my-class'></Button>
    </>
  );
};
