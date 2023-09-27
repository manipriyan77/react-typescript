import React from 'react';

interface Props {
  className: string;
}

export const Button: React.FC<Props> = () => {
  return <div></div>;
};

const Parent = () => {
  return (
    <>
      <Button className='my-class'></Button>
    </>
  );
};
