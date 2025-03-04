//This doesnt need to be a type i just like doing it this way
//incase in need to add more stuff to it
type ContainerProps = {} & React.PropsWithChildren;

export const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-[1400px] mx-auto p-10">{children}</div>;
};
