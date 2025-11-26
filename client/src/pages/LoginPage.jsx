import LoginForm from "../components/LoginForm";
const LoginPage = () => {
  return (
    <div className="bg-white shadow-md rounded-md max-w-lg mx-auto mt-40 h-auto">
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        {/* 
         Logo
        */}

        <div className="flex flex-col">
          <h2 className="text-2xl uppercase text-primary font-semibold text-center">
            Welcome Back.
          </h2>
          <p className="text-gray-600 text-center font-light">
            access to your dashboard, provide the information here.
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
