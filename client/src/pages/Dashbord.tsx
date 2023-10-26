const Dashbord = (props: { user: any; }) => {
  const user = props.user;
  return (
    <div>
      <div className=" flex  text-white text-6xl">
        <p className=" mr-5 ">Hello, </p>
        <p> {user?.name}</p>
      </div>
    </div>
  );
};

export default Dashbord;
